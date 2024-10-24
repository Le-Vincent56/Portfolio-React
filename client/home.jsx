const React = require('react');
const { createRoot } = require('react-dom/client');
const { useState, useEffect } = React;
const { motion } = require('framer-motion');
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faGithub, faLinkedinIn, faSoundcloud } = require('@fortawesome/free-brands-svg-icons');
const { initializeEffect } = require('./typewriter.js');
const { HorizontalReveal, VerticalReveal, StaticReveal } = require('./components/revealComp.jsx');

const About = () => 
{
    useEffect(() => {
        // Initialize the typing effect
        initializeEffect();
    }, [])

    return (
        <motion.div id='about-section'>
            <motion.div id="about-content">
                <HorizontalReveal id='about-text' direction='left'>
                    <motion.div id='about-text-content'>
                        <motion.h1>VINCENT LE</motion.h1>
                        <motion.h2 id='typewriter-header'>GAMEPLAY PROGRAMMER</motion.h2>
                        <motion.div id='icons'>
                            <motion.div class='icon-container'
                            onClick={() => {window.open("https://github.com/Le-Vincent56/", "_blank")}}
                            >
                                <FontAwesomeIcon icon={faGithub} className='icon'/>
                            </motion.div>
                            <motion.div class='icon-container'
                            onClick={() => {window.open("https://www.linkedin.com/in/vincent-le-67266521b/", "_blank")}}
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} className='icon'/>
                            </motion.div>
                            <motion.div class='icon-container'
                            onClick={() => {window.open("https://soundcloud.com/user-643888929", "_blank")}}
                            >
                                <FontAwesomeIcon icon={faSoundcloud} className='icon'/>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </HorizontalReveal>
                <VerticalReveal id='about-vertical-line' direction='down' delay={0.5}/>
                <VerticalReveal id='about-image' direction='up' delay={1}>
                    <motion.img src="assets/img/About.jpg" alt="Vincent Le"/>
                </VerticalReveal>
            </motion.div>
        </motion.div>
    )
}

const Projects = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleNavClick = (tabIndex) => {
        setActiveTab(tabIndex)
    }

    return (
        <motion.div id='projects'>
            <VerticalReveal id='projects-header' direction="up">
                <motion.div id='projects-header-text'>
                    <motion.h1>PROJECTS</motion.h1>
                </motion.div>
                <motion.div id='projects-header-navigation'>
                    <motion.div 
                    className={`nav-button ${activeTab === 0 ? 'selected' : ''}`}
                    onClick={() => handleNavClick(0)}
                    >
                        <motion.h2>CODING</motion.h2>
                    </motion.div>
                    <motion.div
                    className={`nav-button ${activeTab === 1 ? 'selected' : ''}`}
                    onClick={() => handleNavClick(1)}
                    >
                        <motion.h2>AUDIO</motion.h2>
                    </motion.div>
                    <motion.div
                    className={`nav-button ${activeTab === 2 ? 'selected' : ''}`}
                    onClick={() => handleNavClick(2)}
                    >
                        <motion.h2>WRITING</motion.h2>
                    </motion.div>
                </motion.div>
            </VerticalReveal>
            <motion.div id='projects-content'>
                <CodeProjects/>
                {/* <AudioProjects/>
                <WritingProjects/> */}
            </motion.div>
        </motion.div>
    )
}

const CodeProjects = (props) => {
    const [projects, setProjects] = useState([]);

    // Load the Code projects in from the server
    useEffect(() => {
        const loadProjectsFromServer = async () => {
            const response = await fetch(`/getCodeProjects`);
            const data = await response.json();
            setProjects(data.projects);
        };
        loadProjectsFromServer();
    }, [props.reloadProjects]);

    // Present the appropriate HTML if no projects are loaded
    if(projects.length === 0) {
        return (
            <motion.div id='code-projects'>
                <motion.h1 id='empty-code-projects'>No Projects Yet!</motion.h1>
            </motion.div>
        );
    }

    // Create a node for each project
    const projectNodes = projects.map(project => {

        // Create the role string
        let roleString = project.roles.join(', ');

        return (
            <StaticReveal id={project.id} className='code-project-node' list={false}>
                <motion.div className='code-project-node-background'>
                    <motion.img src={`assets/img/code/${project.imageURL}`} className='code-project-image'/>
                    <motion.div className='code-project-overlay'/>
                </motion.div>
                <motion.div className='code-project-node-info'>
                    <motion.h1 className='code-project-node-title'>{project.title}</motion.h1>
                    <motion.h2 className='code-project-node-roles'>{roleString}</motion.h2>
                </motion.div>
            </StaticReveal>
        )
    });

    return (
        <StaticReveal id='code-projects' list={true}>
            {projectNodes}
        </StaticReveal>
    );
}

const AudioProjects = () => {
    return (
        <motion.div id='audio-projects'></motion.div>
    );
}

const WritingProjects = () => {
    return (
        <motion.div id='writing-projects'></motion.div>
    );
}

const Content = (props) => {
    return (
    <motion.div>
        <About/>
        <Projects/>
    </motion.div>
    );
}

const init = () => 
{
    const root = createRoot(document.getElementById('content'));

    root.render(<Content/>);
};

window.onload = init;