import { Theme, getPageWidth } from "../theme";

import { CodeBlock } from "../components/code_block";

const Spacer = () => {
    return <>
        <br />
        <br />
    </>
}

const SpellSystem = () => {
    const style: Record<string, any> = {
        display: "flex",
        flexDirection: "column",
        color: Theme.Color.TextLight,
        width: getPageWidth(),
        fontSize: Theme.MainFontSize,
        margin: "0 auto",
        flex: 1,
        paddingBottom: "10rem"
    };

    return <div style={style}>
        <h1>
            Modular Spell System
        </h1>

        {/* Hook */}
        <div>
            For a while now I've been hand coding all of the spells in my game. Applying mana costs, calculating damage, applying modifiers, etc. There isn't anything inherently
            wrong with this approach, but as the system grows it becomes harder to maintain. I'm going to be going through my development process in solving this problem for my
            Action RPG, <span style={{ fontStyle: "italic" }}>Anguish</span>.
        </div>

        {/* Problem */}
        <h2>
            Issues of Reusability
        </h2>

        <div>
            As mentioned before, creating every spell by hand is tedious. Not only that, but it produces a lot of duplicate code. To demonstrate this, lets look at an
            example:

            <Spacer />

            Say you have two spells Fire Bolt and Ice bolt which are effectively the same. They have:
            <ul>
                <li>An animation</li>
                <li>A Hitbox</li>
                <li>A damage type</li>
                <li>Damage meta data</li>
            </ul>

            The naive implementation would be to have have some base class Spell which contains an animation, collision, and spell meta data.

            <CodeBlock codeText={`
class_name Spell extends Node2D

@export var animations: AnimatedSprite2D = null
@export var hitbox: Area2D = null

enum DamageType { Fire, Ice }

@export var type:= DamageType.Fire
@export var damage: float = 0
@export var manaCost: float = 0

func _ready() -> void:
    # Load animation
    # Set up hitbox

@abstract func cast() -> void
    `}
            />

            You then write derived classes for both spells to load in the animation, set the collision shape to fit the animation, and set the damage per level.

            <div style={{ display: "flex", gap: "16px" }}>
                <div style={{ flex: 1 }}><CodeBlock codeText={`
class_name FireBolt extends Spell

func _ready() -> void:
    damage = 10
    manaCost = 5
    
func cast() -> void:
    # Targeting
    # Collision detection
    # Etc.
   
   
    `}
                /></div>
                <div style={{ flex: 1 }}><CodeBlock codeText={`
class_name IceBolt extends Spell

func _ready() -> void:
    super._ready()

    damage = 5
    manaCost = 5
    type = DamageType.Ice
    
func cast() -> void:
    # Targeting
    # Collision detection
    # Etc.`}
                /></div>
            </div>

            This isn't too bad, but lets say that you want to add spell upgrades which apply a burn and freeze modifier to the respective spells. You now will have
            to do special checks in both spells to see whether or not it has the upgrade, then do special logic to apply the modifiers. What if you wanted to change
            how a burn modifier is created? You'd have to go into every single spell that uses it. That sucks!

            <Spacer />

            For some games this may be a fine solution. It accomplishes the goal, and if your system is small enough then why complicate things? Given the nature of an Action
            RPG I wanted something that could could grow arbitrarily. I do not want to be limited by what code I could realistically maintain, but rather what my creativity
            could come up with.
        </div>

        <h2>
            The Strategy Pattern
        </h2>

        <div>
            While researching how other games created spell systems I found that a common approach was <a>the strategy pattern</a>. The basic idea is that you can define
            some interface for what a specific behavior of a spell does and chain them together to define the entire execution.

            First create a IBehavior class which contains a function to execute it.

            {/* IBehavior */}

            <CodeBlock codeText=
                {
                    `
@abstract class_name IBehavior extends Resource

## Performs the main behavioral logic.
@abstract func execute() -> void
`}
            />

            Now define a base Spell to have an array of behaviors. To perform a spell, iterate over these behaviors and execute them.

            {/* Interface w/ array */}
            <CodeBlock codeText=
                {
                    `
class_name Spell extends Resource

var behaviors: Array[IBehavior] = []

func cast() -> void:
    for behavior: IBehavior in behaviors:
        behavior.execute()
`}
            />

            {/* Execute function */}

            You can define these behaviors to be anything such as applying damage, modifiers, or playing a sound effect.

            I'm going to start by creating a simple DamageBehavior.

            {/* DamageBehavior */}

            <CodeBlock
                note={"Note: By exporting the damage variable you can modify it within Godot's inspector."}
                codeText=
                {
                    `
class_name DamageBehavior extends IBehavior

@export var damage: float = 0

func execute() -> void:
    pass
`}
            />

            As you can see you now have a behavior with some damage to apply, but there is nothing to apply it to.
        </div>

        {/* */}

        <h2>
            Spell Context
        </h2>

        <div>
            So, you have some DamageBehavior which simply defines how much damage this spell should apply. You could simply pass in a target character
            to apply damage to, but then what if this spell summoned a ring of fire at the cursor location and damaged nearby enemies? What if you wanted
            to define a new behavior PercentDamageBehavior that is a conditionally added upgrade which adds 50% extra damage based on the total
            damage? This problem introduces the need to persist contextual information throughout the behaviors.

            {/* PercentDamageBehavior */}

            To solve this you can create a SpellContext which is passed through all behaviors allowing them to make modifications and share information.

            {/* Passing SpellContext */}
            <CodeBlock codeText=
                {
                    `
class_name SpellContext extends Resource

var damage: float = 0
`}
            />

            Then you can update the IBehavior and DamageBehavior to take this spell context.

            {/* Passing SpellContext */}
            <CodeBlock codeText=
                {
                    `
@abstract class_name IBehavior extends Resource

## Performs the main behavioral logic.
@abstract func execute(_context: SpellContext) -> void
`}
            />

            <CodeBlock codeText=
                {
                    `
class_name DamageBehavior extends IBehavior

@export var damage: float = 0

func setup(context: SpellContext) -> void:
    context.damage += damage

func execute(context: SpellContext) -> void:
    context.damage += damage
`}
            />

            Now you can begin to spice things up. Let's now define that PercentDamageBehavior which is an upgrade giving 50% extra total damage.

            <CodeBlock codeText=
                {
                    `
class_name PercentDamageBehavior extends IBehavior

@export var percent: float = 0.5

func execute(context: SpellContext) -> void:
    context.damage += percent * context.damage
`}
            />

            You may have noticed, but this has now introduced order dependency of behaviors. If you were to add the PercentDamageBehavior to be
            processed first then it would do nothing. This may not be a problem for you, but I opted to create a separate setup function in
            IBehavior which allows for a pre-execution configuration. This makes the example:

            <CodeBlock codeText=
                {
                    `
@abstract class_name IBehavior extends Resource

## Pre-execution configuration.
@abstract func setup(_context: SpellContext) -> void

## Performs the main behavioral logic.
@abstract func execute(_context: SpellContext) -> void
`}
            />
            <CodeBlock codeText=
                {
                    `
class_name DamageBehavior extends IBehavior

@export var damage: float = 0

func setup(context: SpellContext) -> void:
    context.damage += damage
    
func execute(_context: SpellContext) -> void:
    pass # Unused
`}
            />
            <CodeBlock codeText=
                {
                    `
class_name PercentDamageBehavior extends IBehavior

@export var percent: float = 0.5
    
func setup(_context: SpellContext) -> void:
    pass # Unused

func execute(context: SpellContext) -> void:
    context.damage += percent * context.damage
`}
            />
        </div>

        {/* Extending */}
        <h2>Building More Complex Spells</h2>

        <div>
            A couple of useful additions that I added to this design were:
            <ul>
                <li>Recursive child behaviors</li>
                <li>Behaviors that execute sub-behaviors at specific points in time</li>
                <li>Behavior Requirements</li>
            </ul>

            All of which using the strategy design pattern were very straight forward to implement.

            <Spacer />

            I would be lying if I said that this system comes at no cost. This system is still fairly complex and can be difficult to
            debug especially when you start creating intricate behavioral hierarchies. However, I have found that I've
            been able to move quicker and most importantly create more interesting spells.
        </div>
        <div>
        </div>
    </div >;
};

export default SpellSystem;
