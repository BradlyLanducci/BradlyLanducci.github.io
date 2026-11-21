import { Theme, getPageWidth } from "../theme";

const SpellSystem = () => {
    const style: Record<string, any> = {
        display: "flex",
        flexDirection: "column",
        color: Theme.Color.TextLight,
        width: getPageWidth(),
        fontSize: Theme.MainFontSize,
        margin: "0 auto",
        flex: 1
    };

    return <div style={style}>
        <h1>
            Modular Spell System
        </h1>

        {/* Hook */}
        <div>
            For a while now I've been hand coding all of the spells in my game. Applying mana costs, calculating damage, applying modifiers, etc. There isn't anything inherently
            wrong with this approach, but as the system grows it isn't necessarily scalable. I'm going to be going through my development process in solving this problem for my
            Action RPG, Anguish.
        </div>

        {/* Problem */}
        <h2>
            Issues of Reusability
        </h2>

        <div>
            As I mentioned before, creating every spell by hand is tedious. Not only that, but it produces a lot of duplicate code. To demonstrate this, lets look at an
            example:

            Say we have two spells Fire Bolt and Ice bolt which are effectively the same. They have: An animation, some collision shape defining its hitbox, and some meta
            data defining its damage type and how much damage to apply.

            The naive implementation would be to have have some abstract ISpell which contains an animation, collision, and variables for the damage type and damage amount.

            We then write derived classes forh both spells to load in the animation, set the collision shape to fit the animation, and set the damage per level. This isn't
            too bad, but lets say that we want to add spell upgrades which apply a burn and freeze modifier to the respective spells. We now will have to do special checks
            in both spells to see whether or not it has the upgrade, then do special logic to apply the modifiers.

            We now have to maintain special code paths for how the spell evolves. This may work for smaller spell systems, but in my case I wanted something that could could
            grow arbitrarily. I do not want to be limited by what code I can keep track of, but rather what my creativity can come up with.
        </div>

        <h2>
            The Strategy Pattern
        </h2>

        <div>
            While researching how other games created spell systems I found that a common approach was <a>the strategy pattern</a>. The basic idea is that we can define
            some interface for what a specific behavior of a spell does and chain them together to define the entire execution.

            First lets create a IBehavior class which contains a function to execute it.

            {/* IBehavior */}

            Lets define ISpell to have an array of behaviors.

            {/* Interface w/ array */}

            Now to perform a spell we simply just iterate over these behaviors executing them in order.

            {/* Execute function */}

            We can define these behaviors to be anything such as applying damage, modifiers, or playing a sound effect.

            I'm going to start with a simple DamageBehavior.

            {/* DamageBehavior */}
        </div>

        {/* */}

        <h2>
            Spell Context
        </h2>

        <div>
            Now lets add in a new behavior PercentDamageBehavior that is a conditionally added upgrade which adds 50% extra damage based on the total
            damage configured.

            {/* PercentDamageBehavior */}

            In this case the second behavior needs to know about the first. A simple solution is to create some SpellContext which contains simple shared state
            information such as: Damage, healing, etc.. Now the PercentDamageBehavior can use the damage property of the context to then add in the extra damage.

            {/* Passing SpellContext */}
        </div>

        {/* More strategy */}
        <h2>
            Spell Requirements
        </h2>

        <div>
            {/* Mana Example */}

            With this system in place we can now begin to easily add requirements for some spell to be casted. We define a SpellRequirement which also uses the strategy pattern.
            It has both a Check and Apply function which takes in the SpellContext. First we can look at does the contexts caster have enough of some resource to cast this spell?
            Maybe it can only be casted if their inventory has some item, or they're in a cave.


            To integrate this we can simply add an array of SpellRequirements to check in the ISpell base class. This can then be iterated over to ensure that all requirements are
            met, and then iterated over to apply said requirements.

            We can continue to build off this idea and give individual SpellBehaviors requirements. Say a spell can be casted, but it has a special effect when casted in a cave.
        </div>

        {/* Extending */}
        <h2>Building More Complex Spells</h2>

        <div>
            This system is already beginning to be very flexible. To further this we can add sub-behaviors to existing behaviors. We can have a behavior called TimerApplyBehavior,
            which creates a timer then we can define its own array of TimeoutBehaviors that are applied at each timeout. Or we can say when the spells target has been reached to
            collect all characters in an ellipse and apply a burning effect. There really is no limits to the creativity this allows.
        </div>

        {/* Conclusion */}
        <h2>
            Conclusions
        </h2>

        <div>
            I would be lying if I said that this system comes at no cost. Through building out this system I've still had to define hyper specific behaviors for some of my pre
            existing spells, but this is realisitically true for any solution. However, it's so much easier to apply upgrades to spells which has not only saved me time, but made
            my existing spells more interesting and flexible.
        </div>
    </div>;
};

export default SpellSystem;
