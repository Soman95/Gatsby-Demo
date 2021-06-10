import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import skills from '../../style/sections/skills.css'

const Skills = () => {

    return (
        <section id="skills">
            <Container>
                <Title title="Skills" />
                <Fade bottom duration={1000} delay={800} distance="30px">
                    <Row className="skillsSection">

                        <Col className="skillsContainer">
                            <div className="skillsBox">
                                <div className="skillsTitle">
                                    <div className="skillsImg">
                                        <img src="https://cdn.freebiesupply.com/logos/large/2x/html-5-logo-png-transparent.png" className="skillsIcons"></img>
                                    </div>
                                    <h3>HTML 5</h3>
                                </div>
                            </div>
                        </Col>

                        <Col className="skillsContainer">
                            <div className="skillsBox">
                                <div className="skillsTitle">
                                    <div className="skillsImg">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg" className="skillsIcons"></img>
                                    </div>
                                    <h3>CSS 3</h3>
                                </div>
                            </div>
                        </Col>

                        <Col className="skillsContainer">
                            <div className="skillsBox">
                                <div className="skillsTitle">
                                    <div className="skillsImg">
                                        <img src="https://icon-library.net/images/javascript-icon-png/javascript-icon-png-23.jpg" className="skillsIcons"></img>
                                    </div>
                                    <h3>JavaScript</h3>
                                </div>
                            </div>
                        </Col>

                        <Col className="skillsContainer">
                            <div className="skillsBox">
                                <div className="skillsTitle">
                                    <div className="skillsImg">
                                        <img src="https://iconape.com/wp-content/png_logo_vector/node-js-2.png" className="skillsIcons"></img>
                                    </div>
                                    <h3>Node.js</h3>
                                </div>
                            </div>
                        </Col>

                        <Col className="skillsContainer">
                            <div className="skillsBox">
                                <div className="skillsTitle">
                                    <div className="skillsImg">
                                        <img src="https://cdn.freebiesupply.com/logos/large/2x/react-logo-png-transparent.png" className="skillsIcons"></img>
                                    </div>
                                    <h3>React.js</h3>
                                </div>
                            </div>
                        </Col>

                        <Col className="skillsContainer">
                            <div className="skillsBox">
                                <div className="skillsTitle">
                                    <div className="skillsImg">
                                        <img src="https://cdn.iconscout.com/icon/free/png-512/mongodb-5-1175140.png" className="skillsIcons"></img>
                                    </div>
                                    <h3>MongoDB</h3>
                                </div>
                            </div>
                        </Col>

                        <Col className="skillsContainer">
                            <div className="skillsBox">
                                <div className="skillsTitle">
                                    <div className="skillsImg">
                                        <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/288_Sass_logo-256.png" className="skillsIcons"></img>
                                    </div>
                                    <h3>Sass</h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Fade>
            </Container>
        </section>
    );
};

export default Skills;
