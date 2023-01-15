import React from "react";
import 'styles/about.css';
import { Link } from "react-router-dom";
import { WorkHeader as AboutHeader} from 'components/work';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import { transitionVariants } from 'components/animated';
import { faCode, faCalculator, faPalette, 
        faLaptop, faCompassDrafting, faArrowsToCircle, 
        faBrain, faFile, faTimeline,
        faBuilding, faHeart, faHandshake,
        faWandMagicSparkles, faHammer, faPeopleGroup,
        } from '@fortawesome/free-solid-svg-icons';
import { ArrowIcon } from 'components/work';

class AboutMain extends React.Component {
    render() {
        return (
            <div className="about-main">
                <div className="about-main__container">
                    <div className="introduccion">
                        <p>
                            Yupeng is a software engineer and web developer (<span><FontAwesomeIcon icon={faCode} /></span>) that has been obsessed with Math (<span><FontAwesomeIcon icon={faCalculator} /></span>) and Art (<span><FontAwesomeIcon icon={faPalette} /></span>) from childhood and still bears visible traces
                            of its addictive past for tech (<span><FontAwesomeIcon icon={faLaptop} /></span>) and design (<span><FontAwesomeIcon icon={faCompassDrafting} /></span>) .
                        </p>
                    </div>

                    <div className="descripcion">
                        <div className="contenido">
                            <p>The first impression of Yupeng is obtained from his curiosity (<span><FontAwesomeIcon icon={faBrain} /></span>) known as "Get To The Bottom Of It", from where
                                he can look across to the hilltop of concepts (<span><FontAwesomeIcon icon={faArrowsToCircle} /></span>) and the buildings of cases (<span><FontAwesomeIcon icon={faFile} /></span>) that speak of the tool’s
                                history (<span><FontAwesomeIcon icon={faTimeline} /></span>) . On the one hand, generally, it is the experience that tackles the complex, followed by the
                                imitative and creative experiments, which are connected by a self-teaching mindset and a stretch of the old fashion
                                in and out of the box practice. On the other hand, separate from the rest of his ideology, stands the career tower (<span><FontAwesomeIcon icon={faBuilding} /></span>) . At the
                                foot of the hill is a humble developer and, below that, a young professional within his
                                early start and blessed by the assistance of many, on the sides of which stands the ultimate love (<span><FontAwesomeIcon icon={faHeart} /></span>) from
                                his family. To the further, other supports (<span><FontAwesomeIcon icon={faHandshake} /></span>) from his friends and collegues stretch along the back.
                            </p>
                            <p>With his passion of learning (<span><FontAwesomeIcon icon={faWandMagicSparkles} /></span>) , persistent problem solving skills (<span><FontAwesomeIcon icon={faHammer} /></span>) and committed team-mind (<span><FontAwesomeIcon icon={faPeopleGroup} /></span>) , Yupeng
                                has a unique charm that invites collaborators to stroll through the difficulty, enjoy the developement
                                journey and stay productive at the same time . And as the final touch to the whole
                                experience, a delivery of the fine work.</p>
                            <p> 
                                <Link to='/contact'>
                                    Contact&nbsp; 
                                    <ArrowIcon size='30px' />
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                

            </div>
            
        )
    }
}

class SkillHeader extends React.Component {
    render() {
        return (
            <div className="subtitle-wrapper faq">
                <div className="subtitle-inner">
                    <div className="main"></div>
                    <div className="secondary">SKILLS</div>
                </div>
            </div>
        )
    }
}

class SkillItemCategory extends React.Component {
    render() {
        return (
            <h3 className="faq-section__list-category">
                <span className="list-category-index">{this.props.index}</span>
                {this.props.category}
            </h3>
        )
    }
}

class ContentSubsection extends React.Component {
    render() {
        return (
            <li>
                <p className="question">{this.props.subTitle}</p>
                <p className="answer">{this.props.subContent}</p>
            </li>
        )
    }
}

class SkillItemContent1 extends React.Component {
    render() {
        return (
            <ul className="faq-section__list-content">
                <ContentSubsection 
                    subTitle='Fundamentals'
                    subContent='JavaScript, HTML, CSS'
                />
                <ContentSubsection 
                    subTitle='Version Control Systems'
                    subContent='Github, Git'
                />
                <ContentSubsection 
                    subTitle='Package Managers'
                    subContent='npm'
                />
                <ContentSubsection 
                    subTitle='CSS Preprocessors'
                    subContent='Sass'
                />
                <ContentSubsection 
                    subTitle='Task Runners and Formatters'
                    subContent='npm scripts,, Webpack, Prettier'
                />
                <ContentSubsection 
                    subTitle='Framewrok and Library'
                    subContent='React, D3, React-Router, HighCharts, Mapbox'
                />
                <ContentSubsection 
                    subTitle='CSS Framework'
                    subContent='Tailwind CSS'
                />
                <ContentSubsection 
                    subTitle='Wireframe'
                    subContent='Adobe XD, Miro'
                />
                <ContentSubsection 
                    subTitle='Testing'
                    subContent='Jest'
                />
                <ContentSubsection 
                    subTitle='Type Checkers'
                    subContent='TypeScript'
                />
                <ContentSubsection 
                    subTitle='Server Side Rendering and Static Site Generators'
                    subContent='Next.js'
                />
            </ul>
        )
    }
}

class SkillItemContent2 extends React.Component {
    render() {
        return (
            <ul className="faq-section__list-content">
                <ContentSubsection 
                    subTitle='Fundamentals'
                    subContent='JavaScript, Java, Python, C'
                />
                <ContentSubsection 
                    subTitle='Version Control Systems'
                    subContent='Github, Git'
                />
                <ContentSubsection 
                    subTitle='Database'
                    subContent='MySQL'
                />
                <ContentSubsection 
                    subTitle='API'
                    subContent='JSON APIs'
                />
                <ContentSubsection 
                    subTitle='Containerization and virtualization'
                    subContent='Docker'
                />
                <ContentSubsection 
                    subTitle='Web Servers'
                    subContent='Apache'
                />

            </ul>
        )
    }
}

class SkillItem1 extends React.Component {
    render() {
        return (
            <li className="faq-section__listItem">
                <SkillItemCategory index='1' category='Frontend' />
                <SkillItemContent1 />
            </li>
        )
    }
}

class SkillItem2 extends React.Component {
    render() {
        return (
            <li className="faq-section__listItem">
                <SkillItemCategory index='2' category='Backend' />
                <SkillItemContent2 />
            </li>
        )
    }
}

class SkillMain extends React.Component {
    render() {
        return (
            <section className="faq-section">
                <ul className="faq-section__list">
                    <SkillItem1 />
                    <SkillItem2 />
                </ul>
            </section>
        )
    }
}

class AboutSkill extends React.Component {
    render() {
        return (
            <div className="about-skill">
                <SkillHeader />
                <SkillMain />
            </div>
        )
    }
}

export default class About extends React.Component {
    render() {
        return (
            <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={transitionVariants}
            >
                <div className="about">
                    <AboutHeader />
                    <AboutMain />
                    <AboutSkill />
                </div>
            </motion.div>
            
        )
    }
}