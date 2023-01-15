import React from "react";
import { WorkHeader as ContactHeader} from 'components/work';
import 'styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import { transitionVariants } from 'components/animated';
import { Link } from "react-router-dom";


class ContactFooter extends React.Component {
    render() {
        return (
            <div className="footer-fixed">
                <div className="footer-fixed__container">
                    <Link className="coordinates" to='/' >
                        <p className="coordinates--1" >Yupeng Lei</p>
                        <span className="separator">©</span>
                        <p className="coordinates--2" >2022</p>
                    </Link>
                </div>
            </div>
        )
    }
}

export class ContactItem extends React.Component {
    render() {
        return (
            <ul className="col">
                <li><a href={this.props.leftHref} target='_blank' rel="noreferrer"><span>{this.props.leftTitle}</span>{this.props.leftDetail}</a></li>
                <li><a href={this.props.rightHref} target='_blank' rel="noreferrer"><span>{this.props.rightTitle}</span>{this.props.rightDetail}</a></li>
            </ul>
        )
    }
}

class ContactMain extends React.Component {
    render() {
        return (
            <div className="contact-main">
                <div className="contact-main__container">
                    <h5 className="title">Contact</h5>
                    <div className="grid">
                        <ContactItem 
                            leftTitle={<FontAwesomeIcon icon={faEnvelope} />}
                            leftDetail='Email'
                            leftHref='mailto:leiyupeng@gmail.com'
                            rightTitle={<FontAwesomeIcon icon={faGithub} />}
                            rightDetail='Github'
                            rightHref='https://github.com/YupengLei'
                        />
                        <ContactItem 
                            leftTitle={<FontAwesomeIcon icon={faLinkedin} />}
                            leftDetail='Linkedin'
                            leftHref='https://www.linkedin.com/in/yupenglei/'
                            rightTitle={<FontAwesomeIcon icon={faTwitter} />}
                            rightDetail='Twitter'
                            rightHref='https://twitter.com/leiyupeng/'
                        />
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default class Contact extends React.Component {
    render() {
        return (
            <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={transitionVariants}
            >
                <div className="contact">
                    <ContactHeader />
                    <ContactMain />
                    <ContactFooter />
                </div>
            </motion.div>            
        )
    }
}