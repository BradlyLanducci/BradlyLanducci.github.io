function Orbit(props) {
    return (
      <>
        <div className = "textBody">
          <div>
            <p className = "pageTitle">Orbit</p>
            <p className = "downloadCV">
              <a href="./Orbit V1.02.zip" download>
                Download V1.02
              </a>
            </p>
            <br/>
            <p className = "downloadCV">
              <a href="./Orbit V1.02.zip" download>
                Documentation
              </a>
            </p>
          <p className = "pageTitle">Release Notes</p>
          <h3>Orbit Release Notes</h3>
      
          <h5>V1.01 Notes</h5>
          - Fixed GUI lag due to constant repainting of window.
        
          <h5>V1.02 Notes</h5>
          - Fixed Ping Pong mode so that it accurately jumps from left to right instead of slowly summing to mono.
          <br/>
          - Width is now wider and goes up to 1000 samples of delay.
          <br/>
          - The mod now goes to 4 Hz, and uses a new more intensive algorithm. It now should sound less harsh.
          <br/>
          - Fixed shading on buttons when hovered over.
          <br/>
          - Peaking filters now are wide Q.
          <br/>
          - HPF and LPF now go from 20 - 10000 Hz, it felt pointless for them to go higher.
          <br/>
          - Feedback can now go up to 1.0, which is an infinite delay.
          <br/>
          - Gain rescaled to go to 8.0, unity is now 4.0.
          </div>
        </div>
      </>
    )
}

export default Orbit