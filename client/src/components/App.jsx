import React from 'react';
import Projects from './Projects.jsx';
import mePic from '../../dist/images/mePic.jpg';
import TopBar from './TopBar.jsx';
//import axios from 'axios';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount(){
        console.log('here');
    }
    render() {
        return (
            <div style={{color: '#3c3c64'}}>
                <div style={{margin: '0 2em 0 2em'}}>
                    <TopBar />
                    <div style={{display: 'flex', alignItems:'center', justifyContent: 'center', marginTop: '5em', height: '100%'}}>
                        <div className="mememe">
                            <div className="leftAbout">
                                <div className='title'>full-stack developer</div>
                                <div className="about"> As a creative person, I love building applications from the ground up, as well as seeking new and novel ways to tackle problems. <br></br>
                                As a software developer, I am always striving to create efficient systems, and elegant and intuitive user interfaces.<br></br>
                                </div>
                            </div>
                            <div className="mePicture">
                                <img className="mePicture" src={mePic} />
                            </div>
                            <div className="rightAbout">
                                <div className="title">tech stack</div>
                                <div className="about">
                                    <span style={{fontWeight: 900}}>LANGUAGES:</span> Javascript (ES5/ES6) <br></br>
                                    <span style={{fontWeight: 900}}>FRONT END:</span> React, React Native, Redux, HTML5, CSS3, SQL <br></br>
                                    <span style={{fontWeight: 900}}>BACK END:</span> Node.js, Express, MySQL, PostgreSQL, MongoDB, RESTful API Development<br></br>
                                    <span style={{fontWeight: 900}}>TESTING/DEPLOYMENT:</span> Mocha, Chai, AWS EC2, Firebase, Nginx, K6<br></br>
                                    <span style={{fontWeight: 900}}>DEVELOPER TOOLS:</span> Git, npm, Webpack, Babel
                                </div>
                            </div>
                        </div>
                    </div>
                    <Projects />
                    {/* <div className="projects">
                        <div className="aboutTitle">projects</div>
                        <div className="projectContainer"></div>
                    </div> */}
                </div>
            </div>
        )
    }
}