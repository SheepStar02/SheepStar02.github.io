// Load main app HTML
let testingCount = 0
function App () {
    const BIO_TEXT = JSON.parse('"Hello, my name is Eric Lin. I have been coding since 2018 and got into web development in 2020. I am confortable with front-end languages, frame works and understand building full stack applications. I am currently looking for opportunities/work. Contact me if interested."')
    return (
        <div className = "main-container">
            <div className = "backdrop-filter"><div className = "background-image"></div></div>
            <div className = "header-container">
                <div className = "header-logo">
                    <div className = "logo-container">
                        <img src = "/images/Portfolio/logo.png"></img>
                    </div>
                    <NavbarItem name = "Contact"/>
                </div>
                <div className = "navbar-container">
                    <NavbarItem name = "About"/>
                    <NavbarItem name = "Projects"/>
                    <NavbarItem name = "Skills"/>
                </div>
            </div>
            <div className = "content-wrapper">
            <section className = "title-page">
                <div className = "title-container">
                    <h1>Hi<br></br>I'm <span>Eric Lin</span><br></br>Web Developer</h1>
                    <p>First portfolio <span>|</span> Front End Developer</p>
                </div>
                <div className = "animated-logos">
                    <div className = "rotating-logos-container">
                        <div className = "center-logo">
                            <img src = "images/Portfolio/react-logo.png"></img>
                        </div>
                        <div className = "outside-logos">
                            <div className = "top-logo"><img src = "/images/Portfolio/html-logo.png"></img></div>
                            <div className = "bottom-logo">
                                <img src = "/images/Portfolio/css-logo.png"></img>
                                <img src = "/images/Portfolio/javascript-logo.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className = "page-section" id = "about-page">
                <div className = "page-header">
                    <h1>About Me</h1>
                </div>
                <Timeline />
            </section>
            <section className = "page-section" id = "projects-page">
                <div className = "page-header">
                    <h1>My Projects</h1>
                </div>
                <Projects />
            </section>
            <section className = "skills-section" id = "skills-page">
                <div className = "page-header">
                    <h1>Skills Learned</h1>
                </div>
                <Skills />
            </section>
            <div className = "footer" id = "contact-page">
                <a className = "contact-github" href = "https://github.com/sheepstar02"><img src = "/images/Portfolio/github-logo.png"></img></a>
                <a className = "contact-twitter" href = "https://twitter.com/EricLin_Dev"><img src = "/images/Portfolio/twitter-logo.png"></img></a>
                <p className = "contact-email" onClick = {() => navigator.clipboard.writeText("ericlin.su@gmail.com")}>Ericlin.su@gmail.com<br></br><span>click to copy</span></p>
            </div>
            </div>
        </div>
    )
}

// Navigation bar item
class NavbarItem extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <button className = {`navbar-item ${this.props.name.toLowerCase()}`} onClick = {this.handleClick}><a href = {`#${this.props.name.toLowerCase()}-page`}>{this.props.name}</a></button>
        )
    }
}


//Main Timeline Component
class Timeline extends React.Component {

    constructor (props) {
        super(props);

        this.state = 
            {
                nodes : [{major: true, year: 2018, title: "Hello world"}, {major: true, year: 2019, title: "Into java"},
                    {major: true, year: 2020, title: "Discovering JS"},
                    {major: false}, {major: false}, {major: true, year: 2021, title: "Getting confortable"},
                    {major: false}, {major: false},{major: false}, {major: true, year: 2022, title: "Where I'm at now"}
                ],
                activeNode : 0
            }
        
    }

    handleClick = activeNode => {
        activeNode >= 0 && activeNode < this.state.nodes.length ? this.setState({activeNode: activeNode}) : activeNode;
    }

    render () {
        const CONTENT = JSON.parse('"cock"');
        return (
            <React.Fragment>
            <div className = "timeline" style = {{background: `linear-gradient(to right, rgb(21, 255, 0) ${this.state.activeNode/this.state.nodes.length*100+this.state.nodes.length/2}%, rgb(230, 230, 230) ${this.state.activeNode/this.state.nodes.length*100+this.state.nodes.length/2}%)`}}>
                {this.state.nodes.map(node => (
                    <TimelineNode key = {this.state.nodes.indexOf(node)} node = {node} select = {this.handleClick} id = {this.state.nodes.indexOf(node)} activeNode = {this.state.activeNode}/>
                ))}
            </div>
            <div className = "timeline-display">
                <TimelineFrame activeNode = {this.state.activeNode} content = {CONTENT} changeSlide = {this.handleClick}/>
            </div>
            </React.Fragment>  
        )
    }
}

//Each timeline node
function TimelineNode (props) {
    return (
        <div className = "timeline-node">
            <div className = "node-bubble" onClick = {() => props.select(props.id)} style = {{backgroundColor: props.id <= props.activeNode ? "rgb(21, 255, 0)" : "white"}}></div>
            {props.node.major && <p className = "node-desc">{props.node.title}</p>}
            {props.node.major && <p className = "node-year">{props.node.year}</p>}
        </div>
    )
}   

//Each timeline slide content
function TimelineFrame (props) {
    const CONTENT = JSON.parse(`[{"title":"First Programming Language","text":"Hello. I first got into programming in 2018 (10th grade) through a python course and loved it ever since. After learning python and java in highschool, I decided to give web development a try bringing me to creating this portfolio infront of you","img":"python-logo","skills":["Python","Basic programming concepts","Simple GUI"]},{"title":"Learning Java and algorithms","text":"After my first year of python, I was introduced to Java and built many applications and explored the complex world of software development","img":"java-logo","skills":["Java","Advanced data structures","Classes and inheritance","Time complexities","Sorting/searching algorithms"]},{"title":"Trying out Javascript","text":"I felt tired of doing coding contests that didn't give me practical experience. After trying to build bots for social media apps, I began learning Javascript","img":"default-javascript-logo","skills":["Javascript","Revising old concepts","Utilizing API's","NodeJS"]},{"title":"Creating websites","text":"After trying to create Discord bots, Twitch bots and even chrome extentions, I began to try out web development and front-end development.","img":"html-css-logo","skills":["HTML5","CSS","JQuery","DOM manipulation and events","JSON files"]},{"title":"Sharpening Front-end skills","text":"Progress felt decently fast and I was improving a lot. I began building some simple projects and trying to understand full stack applications","img":"node-logo","skills":["Node servers","Back-end development","Using databases","Github pages"]},{"title":"First major project","text":"My first year of web development made me really abitious to create larger projects, and I began working on my lastest project to host classic games online.","img":"monopoly-screenshot","skills":["Firebase","Web sockets","Improving CSS skills","Client-Server conncetions"]},{"title":"Keeping pace with school","text":"As first year university started, progress started to slow down slightly. I continued working on my main project while trying to learn new things","img":"es6-logo","skills":["Advanced CSS layouts","Hosting servers","ES6+ Features"]},{"title":"Finally learning React","text":"Towards the second half of 2021, I decided to learn React as it is the most popular Javascript library at the time","img":"default-react-logo","skills":["React JS","JSX","Bable"]},{"title":"Creating a smaller project","text":"The year concludes with me being very close to completing my large project and starting a side project with a friend of mine to create a small application for users to uplaod images.","img":"imup-slideshow-1","skills":["Express","Retriving, converting images","Collaboration skills"]},{"title":"Building this portfolio","text":"It's been a long journey, so thank you for reading this far even if you skipped ahead. I feel confortable now building front-end applications and understand back-end development and really feel ready to further apply my knowledge by firstly building this portfolio.","img":"portfolio-screenshot","skills":["Designing a portfolio","Improving React knowledge","Improving user experience"]}]` );
    return (
        <div className = "scrollable-frame">
            <TimelineScroller changeSlide = {() => props.changeSlide(props.activeNode-1)}/>
            <div className = "scrollable-container">
                <div className = "inner-scroll-frame" style = {{left: `-${props.activeNode*100}%`}}>
                {CONTENT.map(slide => (
                    <div className = "timeline-slide" key = {CONTENT.indexOf(slide)}>
                        <div className = "slide-content">
                            <div className = "slide-text">
                                <h3>{slide.title}</h3>
                                <p>{slide.text}</p>
                            </div>
                            <div className = "slide-image-container"><img src = {`/images/Portfolio/${slide.img}.png`}></img></div>
                            <div>        
                                <h3>Skills Learned</h3>                        
                                <ul>
                                {slide.skills.map(skill => (
                                <li key = {slide.skills.indexOf(skill)}>{skill}</li>
                            ))}</ul>
                            </div>

                        </div>
                    </div>
                ))}
                </div>
            </div>
            <TimelineScroller changeSlide = {() => props.changeSlide(props.activeNode+1)}/>
        </div>
    )
}

//Timeline controller buttons
function TimelineScroller (props) {
    return (
        <div className = "scroll-button-container" onClick = {props.changeSlide}   >
            <img src = "/images/Portfolio/slide-arrow.png"></img>
        </div>
    )
}

//Main projects component
class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected : -1
        }
    }

    handleClick = selection => {
        this.setState({selected: selection})
    }

    render () {
        const PROJECTS = JSON.parse('[{"title":"Gaming Website { Monopoly }","images":["monopoly-slideshow-1","monopoly-slideshow-2","monopoly-slideshow-3","monopoly-slideshow-4","monopoly-slideshow-5","monopoly-slideshow-6"],"content":"This has been a project I worked on for almost 8 months and I am very proud for how it has turned out. Using only the basic javascript HTML and CSS, I recreated the classic game of monopoly along with a login system and the potential for new games to be added.","addition":"In addition to the front-end languages, I used firebase as my database for the login system and Websockets to host the server for running the game. Since Github pages only supported static webpages, I hosted my server on Heroku while keeping the website on my github pages. As I kept working on my project, I felt myself improve thoughout the entire journey and this is evident on the final product at the designs created were much simpler in the main website compared to the game. Although this project is not completely finished and I plan on continuing to improve the user experience, I believe this project accuratly represents my skills and capabilities as a front-end developer","src":["https://sheepstar02.github.io","https://github.com/sheepStar02/sheepStar02.github.io"]},{"title":"Image Uploader","images":["imup-slideshow-1","imup-slideshow-2","imup-slideshow-3"],"src":["https://github.com/sheepStar02/imageuploader","https://github.com/sheepStar02/imageuploader"]}]');
        return (
            <div className = "projects-container">
                {PROJECTS.map(project => (
                    <Project key = {PROJECTS.indexOf(project)} project = {project} id = {PROJECTS.indexOf(project)} select = {this.handleClick} selected = {this.state.selected}/>
                ))}
            </div>
        )
    }
}

class Project extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            selected : 0,
            image : React.createRef(),
            hiddenContent : true,
        }
    } 

    handleClick = slide => {
        if (slide >= 0 && slide < this.props.project.images.length) {
            this.setState({selected:slide});
            this.state.image.current.classList.remove("project-image");
            this.state.image.current.offsetHeight;
            this.state.image.current.classList.add("project-image");
        }
    }

    render () {
        return (
            <div className = {`project-wrap ${(this.props.selected === -1 && "displaying") || (this.props.selected === this.props.id && "selected") || "hidden"}`} onClick = {() => {if ((this.props.selected !== this.props.id && "selected")) this.props.select(this.props.id)}}>
                <div className = "project-title"><h1>{this.props.project.title}</h1><button onClick = {() => this.props.select(-1)}><div></div><div></div></button></div>
                <div className = "project-inner">
                    <div className = "project-slideshow">
                        <button className = "slideshow-nav hideable" onClick = {() => this.handleClick(this.state.selected-1)}><img src = "/images/Portfolio/slide-arrow.png"></img></button>
                        <button className = "slideshow-nav hideable" onClick = {() => this.handleClick(this.state.selected+1)}><img src = "/images/Portfolio/slide-arrow.png"></img></button>
                        <h1 className = "project-ribbon">{this.props.project.title.split("{")[0]}</h1>
                        <img className = "project-image" ref = {this.state.image} src = {`/images/Portfolio/${(this.props.selected === this.props.id && this.props.project.images[this.state.selected]) || this.props.project.images[0]}.png`}></img>
                        <div className = "nodes hideable">
                            {this.props.project.images.map(node => (<div className = "node" key = {this.props.project.images.indexOf(node)} style = {{opacity:this.props.project.images.indexOf(node) === this.state.selected && 0.8 || 0.3}} onClick = {() => this.handleClick(this.props.project.images.indexOf(node))}></div>))}
                        </div>
                    </div>
                    <div className = "project-content hideable">
                        <p>{this.props.project.content}</p>
                        <p className = {this.state.hiddenContent && "hidden-content" || ""}>{this.props.project.addition}</p>
                        <div className = "reveal-addition">
                        <button onClick = {() => {
                            this.setState({hiddenContent:!this.state.hiddenContent})
                        }}>{this.state.hiddenContent && "Show More" || "Show Less"}</button>
                        </div>
                        
                    </div>
                </div>
                <div className = "project-footer">
                    <a href = {this.props.project.src[0]} target = "_blank">View Project<img src = "/images/Portfolio/chain-link.png"></img></a>
                    <a href = {this.props.project.src[1]} target = "_blank">View Source<img src = "/images/Portfolio/src-icon.png"></img></a>
                </div>
            </div>
        )
    }
}

class Skills extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {
            nodes : [
                {name: "HTML", content: "I feel very confortable with semantic tags, classes, attributes and encourperating HTML with jsx.", img: "html-skill", skill: 9},
                {name: "CSS", content: "Very fluent in creating and designing responsive and user friendly elements. Understanding of box-model, specificity and much more", img: "css-skill", skill: 10},
                {name: "Javascript", content: "The transition from Java/Python to Javascript was very intuitive. Familiar with all data structures, ES6+ features and many more", img: "default-javascript-logo", skill: 10},
                {name: "Node", content: "Although not a necessity for frontend development. I find node to be very useful in understanding backend vs frontend", img: "node-logo", skill: 7},
                {name: "React", content: "A lot newer to react and not as fluent however still very confortable with its syntax and creating components", img: "react-logo", skill: 7},
                {name: "Git", content: "I have been using git to manage my code especially when working in teams and understand the basics in using it", img: "git-logo", skill: 7},
                {name: "Java", content: "Used to be my most confortable language and I have completed countless coding projects, contests and applications using Java", img: "java-logo", skill: 9},
                {name: "Python", content: "The first programming language I leanred. Still feel very confortable using it and enjoy its simplistic syntax", img: "python-logo", skill: 9},
            ],
            simulationSpeed: 1,
            speedSlider: React.createRef()
        }

        this.state.nodes.forEach((node, index, nodes) => {
            do {
                var isColliding = false, x = Math.random() * 89, y = Math.random() * 89, vx = Math.random() * 0.4 - 0.2, vy = 0.2 - Math.abs(vx);
                if (Math.random() < 0.5) {vy *= -1}
                for (let item = 0; item < index; item++) {if (this.checkCollision(x, y, nodes[item].x, nodes[item].y, 5)) {isColliding = true; break}}
            } while (isColliding);

            Object.assign(node, {x:x,y:y,vx:vx,vy:vy})
        });

        setInterval(() => {
            this.state.nodes.forEach((node, index, nodes) => {
                let collisionOccured = -1;
                this.state.nodes.forEach((cnode, cindex, cnodes) => {
                    if (index === cindex || collisionOccured === cindex) {return}
                    let node1Info = {x:node.x + 5, y:node.y + 5, vx:node.vx, vy:node.vy}, node2Info = {x:cnode.x + 5, y:cnode.y + 5, vx:cnode.vx, vy:cnode.vy};
                    if (this.checkCollision(node.x, node.y, cnode.x, cnode.y, 5)) {
                        collisionOccured = cindex;
                        let vn = {x:node2Info.x-node1Info.x, y:node2Info.y-node1Info.y},
                        vun = {x:vn.x/Math.sqrt(Math.pow(vn.x,2) + Math.pow(vn.y,2)),y:vn.y/Math.sqrt(Math.pow(vn.x,2) + Math.pow(vn.y,2))},
                        vut = {x:-vun.y,y:vun.x},
                        vn1 = vun.x * node1Info.vx + vun.y * node1Info.vy,
                        vt1 = vut.x * node1Info.vx + vut.y * node1Info.vy,
                        vn2 = vun.x * node2Info.vx + vun.y * node2Info.vy,
                        vt2 = vut.x * node2Info.vx + vut.y * node2Info.vy,
                        an1 = vn2, an2 = vn1,
                        avn1 = {x:an1 * vun.x, y:an1 * vun.y}, avt1 = {x:vt1 * vut.x, y:vt1 * vut.y}, avn2 = {x:an2 * vun.x, y:an2 * vun.y}, avt2 = {x:vt2 * vut.x, y:vt2 * vut.y};
                        node.vx = avn1.x + avt1.x, node.vy = avn1.y + avt1.y
                        cnode.vx = avn2.x + avt2.x, cnode.vy = avn2.y + avt2.y
                    }
                });
                this.handleMovement(index);
            })
        }, 20);
    }

    handleMovement = (node) => {
        const newNodes = [...this.state.nodes];
        newNodes[node].x += newNodes[node].vx * this.state.simulationSpeed;
        newNodes[node].y += newNodes[node].vy * this.state.simulationSpeed;
        if ((newNodes[node].x >= 90 && newNodes[node].vx >= 0) || (newNodes[node].x <= 0 && newNodes[node].vx <= 0)) {newNodes[node].vx*=-1}
        if ((newNodes[node].y >= 90 && newNodes[node].vy >= 0) || (newNodes[node].y <= 0 && newNodes[node].vy <= 0)) {newNodes[node].vy*=-1}
        this.setState({nodes: newNodes})
    }

    checkCollision (x1, y1, x2, y2, r){ 
        return Math.abs((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)) < (4 * r) * r;
    }

    setSimulationSpeed = speed => {
        speed === -1 ? this.setState({simulationSpeed:this.state.speedSlider.current.value}) : this.setState({simulationSpeed:speed});
    }

    render () {
        return (
            <div className = "skills-container">
                <div className = "skills-speed">
                    <input ref = {this.state.speedSlider} type = "range" min = "0" max = "4" defaultValue = "1" step = "0.01" onChange={() => this.setSimulationSpeed(-1)}></input>
                    <button className = "reset-speed" onClick = {() => {this.setSimulationSpeed(1);this.state.speedSlider.current.value = "1"}}>Reset</button>
                </div>
                {this.state.nodes.map(node => (
                    <Skill content = {node} key = {this.state.nodes.indexOf(node)} setSpeed = {this.setSimulationSpeed} nodeNum = {this.state.nodes.indexOf(node)}/>
                ))}
            </div>
        )
    }
}

function Skill (props) {
    return (
        <div className = {`skill-node ${props.content.x > 50 && "to-left" || ""}`} style = {{left:`${props.content.x}%`,top:`${props.content.y}%`}} onMouseEnter = {() => {props.setSpeed(0)}} onMouseLeave = {() => {props.setSpeed(-1)}}>
            <img className = "skill-img" src = {`/images/Portfolio/${props.content.img}.png`}></img>
            <div className = "skill-content">
                <h4>{props.content.name}</h4>
                <p>{props.content.content}</p>
                <div className = "skill-level"><div style = {{width: `${props.content.skill * 10}%`}}><div></div></div></div>
            </div>
        </div>
    )
}

// React DOM rendering
ReactDOM.render(
    <App />,
    document.getElementById('root')
)  