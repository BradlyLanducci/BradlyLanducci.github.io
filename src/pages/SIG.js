function SIG(props) {
    return (
      <>
        <div>
          <div className="container_sig">
        <div className="right-column">
          <h1>Synthetic Instrument Generation</h1>
          <p className = "leftText">
              Introducing our research capstone project, "Synthetic Instrument Generation", where we are 
              leveraging the power of genetic algorithms to create innovative new musical sounds. 
              I developed a React-based front-end that communicates with our back-end, 
              built on Python Flask, to manage the database and control the genetic algorithm that 
              powers the sound evolution process. Inspired by Darwin's finches, the algorithm is 
              designed to evolve the sounds through a voting threshold system and audio analysis, allowing the most 
              popular sounds to evolve and produce exciting new musical variations.
            </p>
            <br/>
            <h2>Genetic Algorithm</h2>
            <div className = "leftText">
              The main idea behind our project is to simulate evolution in creating production ready musical instruments.
              This poses a lot of challenges. How does one make instruments sound good starting from a random set of frequencies?
              Humans inherently have a great ear for discerning what sounds good or not. This is because music theory is based off
              of mathematical relationships between the air pressure that comprise what we hear. Due to this we are able to analyze
              a synthesized instrument by looking at these harmonic relationships between frequencies and amplitudes of each partial 
              frequency. This is the responsiblity of the genetic algorithm. To calculate the fitness scores, or how good something sounds,
              based off of these relationships. Other processes are included within the genetic algorithm to ensure diversity such as: selection 
              methods, crossover of population members, and mutations. It also will take into account the voting metrics from user feedback. 
              This is valuable information, as stated before, humans have innate skills in determining if something sounds good or not. Most people 
              don't need any training to be able to recognize these relationships.
              <br/>
              <br/>
              There are various methods we'd like to change in the genetic algorithm in the model. It's currently setup so that there are constants
              that determine which methods to use. This makes it easy to change for testing purposes. Here some of the methods are as follows:
              <br/><br/>
              <p>
                The selection methods include: tournament, elitism, variety, roulette, and ranking.
              </p>
              <p>
                The crossover methods include: Normal crossover, uniform crossover, deep uniform crossover.
              </p>
              <p>
                The mutation methods include: mutate genes, mutate member, mutate individual weighting.
              </p>
              <h2>Data Flow</h2>
              The flow of the website is as follows:
              <ol>
                <li>User loads page</li>
                <li>User listens to both sounds</li>
                <li>User votes for which sound is best</li>
                <li>Continue steps 1 to 3 until voting theshold is met</li>
                <li>Genetic algorithm is then ran and new generation is created, go back to step 2</li>
              </ol> 
              Currently this is working in a sequential manner, so after the voting theshold is met, it creates a new 
              generation and goes to the next one sequentially. In the final product this will instead be more random.
              A large part about simulating evolution is introducing randomness at all steps. This will help introduce
              diversity into the populations.
            </div>
          </div>
          <div className="left-column">
            <figure>
              <figcaption >SIG Model</figcaption>
              <img src= "./model.JPG"/>
            </figure>
            <figure>
              <figcaption>SIG Website</figcaption>
              <img src= "./SIG.JPG"/>
            </figure>
            <figure>
            <figcaption>Sound Examples</figcaption>
              <audio controls>
                <source src="./sound_1.mp3" type="audio/mpeg"/>
                Your browser does not support the audio element.
              </audio>
              <audio controls>
              <source src="./sound_2.mp3" type="audio/mpeg"/>
              Your browser does not support the audio element.
            </audio>
            </figure>
          </div>
      </div>
        </div>
        <div className = "subBoxGradient">
              <div className = "subBoxTitle">
                <p className = "subBoxText">
                  With this project, we are pushing the boundaries of music production and sound design, 
                  and we can't wait to see what new and unique sounds we can create with this innovative approach.
                </p>
              </div>
              
            </div>
      </>
    )
}

export default SIG
