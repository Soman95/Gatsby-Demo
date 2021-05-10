import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import skills from '../../style/sections/skills.css'

const Skills = () => {

    return (
        <section id="skills">
            <Container>
                <Title title="Skills" />
                <Fade bottom duration={1000} delay={800} distance="30px">
                    <container className="skillsSection">

                        <row className="skillsContainer">
                            <Col className="skillsBox">
                                <div className="skillsTitle">
                                    <col className="skillsImg">
                                        <img src="https://cdn.freebiesupply.com/logos/large/2x/html-5-logo-png-transparent.png" className="skillsIcons"></img>
                                    </col>
                                    <h3>HTML 5</h3>
                                </div>
                            </Col>
                        </row>

                        <row className="skillsContainer">
                            <Col className="skillsBox">
                                <div className="skillsTitle">
                                    <col className="skillsImg">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg" className="skillsIcons"></img>
                                    </col>
                                    <h3>CSS 3</h3>
                                </div>
                            </Col>
                        </row>

                        <row className="skillsContainer">
                            <Col className="skillsBox">
                                <div className="skillsTitle">
                                    <col className="skillsImg">
                                        <img src="https://icon-library.net/images/javascript-icon-png/javascript-icon-png-23.jpg" className="skillsIcons"></img>
                                    </col>
                                    <h3>JavaScript</h3>
                                </div>
                            </Col>
                        </row>
                    </container>
                </Fade>
            </Container>
        </section>
    );
};

export default Skills;
