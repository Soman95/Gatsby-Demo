import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import skills from '../../style/sections/skills'

const Skills = () => {

    return (
        <section id="skills">
            <Container>
                <Title title="Skills" />
                <Fade bottom duration={1000} delay={800} distance="30px">
                    <section className="skillsSection">
                        <div className="skillsHeader">
                            <h1>Skills</h1>
                        </div>
                        <div className="skillsContainer">
                            <div className="skillsBox">
                                <div className="skillsTitle">
                                    <div className="skillsImg">
                                        <img src="https://cdn.freebiesupply.com/logos/large/2x/html-5-logo-png-transparent.png" className="skillsIcons"></img>
                                    </div>
                                    <h3>HTML 5</h3>
                                </div>
                            </div>
                        </div>
                    </section>
                </Fade>
            </Container>
        </section>
    );
};

export default Skills;
