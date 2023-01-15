import React from 'react';
import 'styles/App.css';
import { Route, BrowserRouter, Routes, Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { transitionVariants } from 'components/animated';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import Work from 'components/work';
import Contact from 'components/contact';
import About from 'components/about';

class NavCopyright extends React.Component {
  render() {
    return (
      <div className='navbar-item nav-copyright'>
        <div className='copyright'>Yupeng&nbsp;Lei&nbsp;©&nbsp;2022</div>
      </div>
    )
  }
}

class NavLine extends React.Component {
  render() {
    return (
      <div className='nav-line'></div>
    )
  }
}

class ToggleTheme extends React.Component {
  render() {
    return (
      <div className='navbar-item'>
        <div onClick={() => this.props.handleThemeToggle()} className='navbar-link'>
           <div className={this.props.theme === 'light' ? 'theme-light' : 'theme-dark'}>{this.props.icon}</div>
        </div>
      </div>
    )
  }
}

class Navbar extends React.Component {
  render() {
    const icon = this.props.theme === 'light' ? <FontAwesomeIcon icon={faToggleOn} /> : <FontAwesomeIcon icon={faToggleOff} />
    return (
      <div className='navbar'>
        <ToggleTheme 
            icon={icon} 
            handleThemeToggle={this.props.handleThemeToggle} 
            {...this.props}
        />   
        <NavLine />
        <NavCopyright />
      </div>
    )
  }
}

class SectionLeft extends React.Component {
  render() {
    return (
      <div className='section-left'>
        <div className='section-wrapper'>
          <div className='header-wrapper'>
            <h1 className='header name'>Yupeng Lei</h1>
          </div>
          <div className='description-wrapper'>
            <p className='description'>Software Engineer and Web Developer</p>
          </div>
        </div>
      </div>
    )
  }
}

class Option extends React.Component {
    render() {
        return (
            <div className='option'>
                <Link to={this.props.link} className='option-link'>
                    {this.props.title}
                </Link>
            </div>
        )
    }
}

class OptionList extends React.Component {
    render() {
        return (
            <div className='optionlist'>
                <Option 
                    title='WORK'
                    link='/work'
                />
                <Option 
                    title='ABOUT' 
                    link='/about'
                />
                <Option 
                    title='CONTACT' 
                    link='/contact'
                />
            </div>
        )
    }
}

class SectionRight extends React.Component {
    render() {
        return (
            <div className='section-right'>
                <OptionList />
            </div>
        )
    }
}

class Content extends React.Component {
  render() {
    return (
      <div className='content'>
        <SectionLeft />
        <SectionRight />
      </div>
    )
  }
}



class Home extends React.Component {
    render() {
        return (       
                <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={transitionVariants}
                >
                    <div className='home'>
                        <div className='container'>
                            <Navbar 
                                {...this.props}
                                handleThemeToggle={this.props.handleThemeToggle} 
                            />
                            <Content />
                        </div>
                    </div>     
                </motion.div>  
        )
  }
}

const AmimatedRoutes = (props) => {
    const location = useLocation();
    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                            <Route
                                path="/"
                                element={
                                    <Home
                                        {...props}
                                        handleThemeToggle={props.handleThemeToggle} 
                                    />
                                } 
                            />
                            <Route
                                path="/work/*"
                                element={
                                    <Work 
                                        handleViewChange={props.handleViewChange} 
                                        handleTagChange={props.handleTagChange}
                                        {...props}
                                    />
                                } 
                            />
                            <Route
                                path="/about"
                                element={<About />} 
                            />
                            <Route
                                path="/contact"
                                element={<Contact />} 
                            />
            </Routes>
        </AnimatePresence>
    )
}

export default class App extends React.Component {
    state = {
        workView: 'thumbnail',
        selectedTag: 'all',
        theme: 'light'
    }

    handleViewChange = (value) => {
        this.setState({
            workView: value
        })
    }

    handleTagChange = (value) => {
        this.setState({
            selectedTag: value
        })
    }

    handleThemeToggle = () => {
        let theme = this.state.theme;
        if (theme === 'light') {
            theme = 'dark';
            document.documentElement.style.setProperty('--bg--white', '#003366');
            document.documentElement.style.setProperty('--bg--black', '#F2CA52');
        } else {
            theme = 'light';
            document.documentElement.style.setProperty('--bg--white', '#f9f9f9');
            document.documentElement.style.setProperty('--bg--black', '#131414');
        }
        this.setState({theme: theme});
    }

    render() {
        return (
            <BrowserRouter>
                <AmimatedRoutes 
                    {...this.state}
                    handleViewChange={this.handleViewChange}
                    handleTagChange={this.handleTagChange}
                    handleThemeToggle={this.handleThemeToggle}
                />
            </BrowserRouter>
        )
    }
}
