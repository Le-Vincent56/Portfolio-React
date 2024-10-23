const React = require('react');
const {createRoot} = require('react-dom/client');
const {motion, AnimatePresence} = require('framer-motion');
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faGithub, faLinkedinIn, faSoundcloud } = require('@fortawesome/free-brands-svg-icons');

const Content = (props) => {
    return (
        <motion.div id='about-section'>
            <motion.div id="about-content">
                <motion.div id='about-text'>
                    <motion.h1>VINCENT LE</motion.h1>
                    <motion.h4>GAMEPLAY PROGRAMMER</motion.h4>
                    <motion.div id='icons'>
                        <motion.div class='icon-container'>
                            <FontAwesomeIcon icon={faGithub} className='icon'/>
                        </motion.div>
                        <motion.div class='icon-container'>
                            <FontAwesomeIcon icon={faLinkedinIn} className='icon'/>
                        </motion.div>
                        <motion.div class='icon-container'>
                            <FontAwesomeIcon icon={faSoundcloud} className='icon'/>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div id='about-image'>
                    <motion.img src="../hosted/img/About.jpg" alt="Vincent Le"/>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

const init = () => 
{
    const root = createRoot(document.getElementById('content'));

    root.render(<Content/>);
};

window.onload = init;