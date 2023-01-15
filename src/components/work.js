import React from "react";
import 'styles/work.css';
import { Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { workData } from "data/workData";
import { transitionVariants } from 'components/animated';


class Logo extends React.Component {
    render() {
        return (
            <div className="logo"><Link to='/'>HOME</Link></div>
        )
    }
}

class HeaderLeft extends React.Component {
    render() {
        return (
            <div className="left"><Logo /></div> 
        )
    }
}

class HeaderRight extends React.Component {
    render() {
        return (
            <div className="right">
                <div className="menu">
					<ul>
						<li><Link to='/work'>work</Link></li>
						<li><Link to='/about'>about</Link></li>
						<li><Link to='/contact'>contact</Link></li>
					</ul>
				</div>
            </div> 
        )
    }
}

export class WorkHeader extends React.Component {
    render() {
        return (
            <div className="header-2022">
                <div className="header-2022__container">
                    <HeaderLeft />  
                    <HeaderRight />             
                </div>
            </div>
        )
    }
}

class WorkHello extends React.Component {
    render() {
        const workHelloStyle = {
            height: this.props.workView === 'archive' ? 0 : "30vh",
            transition: '1s ease-out'
        }
        return (
            <div className="hello" style={workHelloStyle}></div>
        )
    }
}

class WorkTag extends React.Component {
    render() {
        return (
            <li className="tag">
                <span 
                    className={this.props.activeClassName}
                    onClick={(e) => this.props.handleTagChange(e.currentTarget.innerText)}
                 >
                    {this.props.tag}
                </span>
            </li>
        )
    }
}

class WorkTagList extends React.Component {
    render() {
        const filterTagList = ['all', 'web', 'portfolio', 'organization']
        return (
            <ul className="tags">
                {filterTagList.map((e, i) => {
                    return (
                        <React.Fragment key={i}>
                            <WorkTag 
                                tag={e}
                                activeClassName={this.props.selectedTag === e ? 'active' : null}
                                handleTagChange={this.props.handleTagChange}
                            />
                        </React.Fragment>
                    )
                })}
            </ul>
        )
    }
}

class WorkView extends React.Component {
    render() {
        return (
            <ul className="view">
                <li><span className={this.props.workView === 'thumbnail' ? "active" : null}  onClick={(e) => this.props.handleViewChange(e.currentTarget.innerText)}>thumbnail</span></li>
				<li><span className={this.props.workView === 'archive' ? "active" : null} onClick={(e) => this.props.handleViewChange(e.currentTarget.innerText)}>archive</span></li>
            </ul>
        )
    }
}

class WorkFilter extends React.Component {
    render() {
        return (
            <div className="filters">
                <WorkTagList {...this.props} />
                <WorkView {...this.props} />
            </div>
        )
    }
}

class WorkItemImage extends React.Component {
    render() {
        return (
            <div className="content-img">
                <Link to={this.props.url}>
                    <div className="photo-center" 
                         style={{backgroundColor: this.props.backgroundColor}}
                    >
                        <img src={this.props.workImg[0]} 
                             alt={this.props.workText} 
                        />
                    </div>
                </Link>
            </div>
        )
    }
}

class WorkDate extends React.Component {
    render() {
        return (
            <div className="date">{this.props.workDate}</div>
        )
    }
}

class WorkText extends React.Component {
    render() {
        return (
            <div className="content-text"><h2><Link to={this.props.url}>{this.props.workText}</Link></h2></div>
        )
    }
}

class WorkDescription extends React.Component {
    render() {
        return (
            <div className="descripcion">
                <div className="modulo modulo--titular">
                    <div className="grid-container">
                        <div className="col--7 col-t--12">
                            <div className="content-titular">
                                {this.props.workDescription.map((e, i) => {
                                    return (
                                        <React.Fragment key={i}>
                                            <p>{e}</p>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class SubTagList extends React.Component {
    render() {
        return (
            <ul className="tags">
                {this.props.subTagList.map((e, i) => {
                    return(
                        <React.Fragment key={i}>
                            <WorkTag
                                tag={e}
                                activeClassName={this.props.selectedTag === e ? 'active' : null}
                                handleTagChange={this.props.handleTagChange}
                            />
                        </React.Fragment>
                    )
                })}
            </ul>
        )
    }
}

class WorkItem extends React.Component {
    render() {
        return (
            <div className="project fade screen" >
                <WorkItemImage  
                    workImg={this.props.item.workImg} 
                    backgroundColor={this.props.item.backgroundColor}
                    workText={this.props.item.workText}
                    url={this.props.item.linkURL}
                />
                <WorkDate workDate={this.props.item.workDate} />
                <WorkText 
                    workText={this.props.item.workText}
                    url={this.props.item.linkURL}
                />
                <SubTagList subTagList={this.props.item.subTagList} />
                <WorkDescription workDescription={this.props.item.workDescription} />
            </div>
        )
    }
}

class WorkMover extends React.Component {
    render() {
        return (
            <div className="mover">
                {workData.map(e =>{
                    return (
                        <React.Fragment key={e.workIndex}><WorkItem item={e}/></React.Fragment>                       
                    )
                })}
            </div>
        )
    }
}

class WorkContent extends React.Component {
    render() {
        return (
            <div className="content-content content-projects">
                <WorkFilter {...this.props} />
                <WorkMover />
            </div>
        )
    }
}

class WorkMain extends React.Component {
    render() {
        return (
            <div className="main">
                <WorkHello {...this.props} />
                <WorkContent {...this.props} />
            </div>
        )
    }
}

class WorkFooter extends React.Component {
    render() {
        return (
            <div className="footer-2022">
                <div className="footer-2022__container">
                    <Link className="logo" to='/'>                     
                        Yupeng Lei
                        <span>©2022</span>
                    </Link>
                </div>
            </div>
        )
    }
}

class InfoHeader extends React.Component {
    render() {
        return (
            <h1>{this.props.workText}</h1>
        )
    }
}

export class ArrowIcon extends React.Component {
    render() {
        return (
            <img 
                src="/arrow1.png" 
                alt='arrow' 
                style={{verticalAlign: 'middle', height: this.props.size, width: this.props.size }}
            />
        )
    }
}

class InfoContent extends React.Component {
    render() {
        console.log(this.props.workUrl)
        return (
            <div className="font-peque">
                <br></br>
                <p>{this.props.workDate}</p>
                {this.props.workDescription.map((e, i) => {
                    return (
                        <p key={i}>{e}</p>
                    )
                })}
                                    

                <a  href={this.props.workUrl} target='_blank' rel="noreferrer"> 
                    <p>
                        Go to the Web&nbsp;
                        <ArrowIcon size='15px' />
                    </p>
                </a>                
            </div>
        )
    }
}



class Info extends React.Component {
    render() {
        return (
            <div className="info">
                <div>
                    <InfoHeader workText={this.props.item.workText} />
                    <InfoContent 
                        workDescription={this.props.item.workDescription} 
                        workDate={this.props.item.workDate}
                        workUrl={this.props.item.workUrl}
                    />
                    <div className="content-tag"><SubTagList  subTagList={this.props.item.subTagList} /></div>
                </div>
            </div>
        )
    }
}

/*class ShowcaseVideoHalf extends React.Component {
    render() {
        return (
            <div className="dos-imagenes carga-fade visto enpantalla">
                <div>
                    <div className="content-img imagenes-1imagen noImg tamano-fullscreen position-horizontal- ">
                        <div>
                            <video playsInline autoPlay muted loop>
                                <source src="https://dous.studio/wp-content/uploads/2022/02/01.mp4"
                                    type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div style={{backgroundColor: "#131414"}}
						 className="content-img imagenes-1imagen noImg tamano-centrada position-horizontal-centrada "
                    >
                        <div>
                            <video playsInline autoPlay muted loop>
                                <source src="" type="video/mp4" />
                            </video>
                        </div>
					</div>
                </div>
			</div>
        )
    }
}

class ShowcaseVideo extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: "#131414"}}
				 className="carga-fade content-img imagenes-1imagen  tamano-centrada position-horizontal-centrada position-vertical-centrada"
            >
                <div>
                    <video playsInline autoPlay muted loop>
                        <source 
                            src="https://dous.studio/wp-content/uploads/2022/02/07_desk_anacuna.mp4"
                            type="video/mp4" 
                        />
                    </video>
                </div>
			</div>
        )
    }
}*/

class ShowcasePhoto extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: "#0a0a0a"}}
				 className="carga-fade content-img imagenes-1imagen  tamano-centrada position-horizontal-centrada position-vertical-centrada"
            >
                <div>
                    <img width="2560" height="1468" src="02_desk_anacuna-scaled.jpg" className="horizontal" alt=""
                         loading="lazy"
                         srcSet={this.props.src}
                         sizes="(max-width: 2560px) 100vw, 2560px" />
                </div>
			</div>
        )
    }
}

class ShowcaseCellPhotoDouble extends React.Component {
    render() {
        return (
            <div className="dos-imagenes carga-fade">
                <div>
                    <div style={{backgroundColor: "#131414"}}
                         className="content-img imagenes-1imagen hasImg tamano-centrada position-horizontal-derecha "
                    >
                        <div>
                            <img 
                                width="1000" 
                                height="1940" 
                                src={this.props.cellPhotoUrl0} 
                                className="vertical" 
                                alt=""
                                loading="lazy"
                                sizes="(max-width: 1000px) 100vw, 1000px" />
                        </div>
                    </div>

                    <div style={{backgroundColor: "#131414"}}
                         className="content-img imagenes-1imagen hasImg tamano-centrada position-horizontal-izquierda "
                    >
                        <div>
                            <img 
                                width="1000" 
                                height="1940" 
                                src={this.props.cellPhotoUrl1}
                                className="vertical" 
                                alt=""
                                loading="lazy"
                                sizes="(max-width: 1000px) 100vw, 1000px" />
                        </div>
                    </div>
                </div>
			</div>
        )
    }
}

/*class ShowcaseCellVideoPlusCellPhoto extends React.Component {
    render() {
        return (
            <div className="dos-imagenes carga-fade">
                <div>
                    <div style={{backgroundColor: "#000000"}}
                        className="content-img imagenes-1imagen noImg tamano-centrada position-horizontal-derecha ">
                        <div>
                            <video playsInline autoPlay muted loop>
                                <source
                                    src="https://dous.studio/wp-content/uploads/2022/02/01_mobile_anacuna-1.mp4"
                                    type="video/mp4" 
                                />
                            </video>
                        </div>
                    </div>

                    <div style={{backgroundColor: "#000000"}}
                        className="content-img imagenes-1imagen hasImg tamano-centrada position-horizontal-izquierda ">
                        <div>
                            <img width="1000" height="1940" src="07_mobile_anacuna.jpg" className="vertical" alt=""
                                loading="lazy"
                                srcSet="https://dous.studio/wp-content/uploads/2022/02/07_mobile_anacuna.jpg 1000w, https://dous.studio/wp-content/uploads/2022/02/07_mobile_anacuna-250x485.jpg 250w, https://dous.studio/wp-content/uploads/2022/02/07_mobile_anacuna-700x1358.jpg 700w, https://dous.studio/wp-content/uploads/2022/02/07_mobile_anacuna-768x1490.jpg 768w, https://dous.studio/wp-content/uploads/2022/02/07_mobile_anacuna-792x1536.jpg 792w, https://dous.studio/wp-content/uploads/2022/02/07_mobile_anacuna-120x233.jpg 120w, https://dous.studio/wp-content/uploads/2022/02/07_mobile_anacuna-800x1552.jpg 800w"
                                sizes="(max-width: 1000px) 100vw, 1000px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}*/

class Showcase extends React.Component {
    render() {
        return (
            <div className="imagenes">
                {this.props.item.workImg.map((e, i) => {
                    return (
                        <React.Fragment key={i}>
                            <ShowcasePhoto src={e} />
                        </React.Fragment>
                    )
                })}
                <ShowcaseCellPhotoDouble 
                    cellPhotoUrl0={this.props.item.cellImg[0]} 
                    cellPhotoUrl1={this.props.item.cellImg[1]}
                />
            </div>
        )
    }
}

class SingleWorkPage extends React.Component {
    render() {
        return (
            <div className="content-content content-project">
                <div className="mover">
                    <Info item={this.props.item} />
                    <Showcase item={this.props.item} />
                </div>
            </div>
        )
    }
}

export default class Work extends React.Component {
    render() {
        return (
            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={transitionVariants}
            >
                <div className={this.props.workView === 'archive' ? "work-body view--arc" : "work-body"}>
                    <WorkHeader />
                        <Routes>
                            <Route
                                path='/'
                                element={<WorkMain {...this.props} />} 
                            />
                            {workData.map(e => {
                                return (
                                    <React.Fragment key={e.workIndex}>
                                        <Route 
                                            path={e.routeURL}
                                            element={<SingleWorkPage item={e} />}
                                        />
                                    </React.Fragment>
                                )
                            })}
                        </Routes>
                    <WorkFooter />
                </div>
            </motion.div>
        )
    }
}