function App () {
    return (
        <div className="main-container">
            <div className="resume-container">
                <Resume />
            </div>
        </div>
    )
}

class Resume extends React.Component {
    constructor () {
        super();
    }

    render () {
        return (
            <div className="resume">
                <div className="content-container">
                    <div className="content">
                        <div className="content-background"></div>
                        <div className="wrap">
                            <section className="career">
                                <h1 className="name">Eric Lin</h1>
                                <p className = "occupation">Front End Developer</p>
                                <div className="about career-section">

                                    <h4>About</h4>
                                    <p>
                                        Front-end developer with a passion for building interactive, user-friendly
                                        applications. Focused, willing to learn and adapt to create quality work.
                                        Enjoy challenging tasks and inventing creative solutions. Happy to
                                        collaborate, teach and learn from others. Motivated to see what is next.
                                    </p>
                                </div>
                                <div className="work career-section">
                                    <h4>Work Experience</h4>
                                    <h2>Freelance Developer</h2>
                                    <h6>May 2022 - Current</h6>
                                    <p>
                                        Worked on building a form to generate shipping labels through the fedex API. 
                                        A mix of frontend and backend technologies were used including databases and servers.
                                    </p>
                                </div>
                                <div className="education career-section">
                                    <h4>Education</h4>
                                    <h2>High School Diploma: Bur Oak SS</h2>
                                    <h6>June 2021</h6>
                                    <ul>
                                        <li>Took computer science in grades 10, 11, and 12.</li>
                                        <li>Completed 1st year university.</li>
                                        <li>Began learning web development in 2020.</li>
                                    </ul>
                                </div>
                                <div className="projects career-section">
                                    <h4>Personal Projects</h4>
                                    <p>Check out my <a href = "https://sheepstar02.github.io/portfolio">portfolio</a> for all my personal projects and more about me!</p>
                                </div>
                            </section>
                            <section className="skills">
                                <div className="contact skill-section">
                                    <p className="email"><a href="mailto:ericlin.su@gmail.com">Ericlin.su@gmail.com</a></p>
                                    <p className="github"><a href="https://github.com/sheepstar02">Github.com/sheepstar02</a></p>
                                </div>
                                <div className="languages skill-section">
                                    <h4>Languages</h4>
                                    <ul>
                                        <Language name="HTML" rating={9}/>
                                        <Language name="CSS" rating={10}/>
                                        <Language name="JAVASCRIPT" rating={9}/>
                                        <Language name="PYTHON" rating={8}/>
                                        <Language name="JAVA" rating={9.5}/>
                                    </ul>
                                </div>
                                <div className="more-skills skill-section">
                                    <h4>Additional Skills</h4>
                                    <ul>
                                        <li>React</li>
                                        <li>Node</li>
                                        <li>Backend Technologies</li>
                                        <li>API's</li>
                                    </ul>
                                </div>
                                <div className="interests skill-section">
                                    <h4>Interests</h4>
                                    <ul>
                                        <li>Chess</li>
                                        <li>Video Games</li>
                                        <li>Running</li>
                                        <li>Solving Puzzles</li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function Language (props) {
    return (
        <li>{props.name}
            <div className="rating">
                <div className="rating-bar" style={{width:`${props.rating/10*100}%`}}>
                    <div className="rating-background"></div>
                </div>
            </div>
        </li>
    )
} 

ReactDOM.render(
    <App />,
    document.getElementById("root")
)