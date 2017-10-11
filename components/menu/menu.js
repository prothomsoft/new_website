import Link from 'next/link'
import MyLink from '../menu/myLink'
import BounceArrow from '../menu/bounceArrow'
import styled from 'styled-components'
import Scroll from 'react-scroll';
import Waypoint from 'react-waypoint'

var LinkScroll = Scroll.Link;

const Row = styled.div`
height : '100%';
${({ mobile }) => (mobile ? 'display:block' : "display: none")};
@media only screen and (min-width: 768px) {
  ${({ mobile }) => (mobile ? 'display:none' : "display: block")};
}
@media only screen and (min-width: 992px) {
  ${({ mobile }) => (mobile ? 'display:none' : "display: block")};
}
@media only screen and (min-width: 1200px) {
  ${({ mobile }) => (mobile ? 'display:none' : "display: block")};
}
&::after{
  content: "";
  clear: both;
  display: table;
}
`;

const Column = styled.div`
height : '100%';
float:left;
${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};
@media only screen and (min-width: 768px) {
  ${({ sm }) => sm && getWidthString(sm)};
}
@media only screen and (min-width: 992px) {
  ${({ md }) => md && getWidthString(md)};
}
@media only screen and (min-width: 1200px) {
  ${({ lg }) => lg && getWidthString(lg)};
}
`;

const ClassicMenuWrapper = styled.div`
    margin: 0 auto;
    width: 1160px; 
    text-align: justify;   
    padding: 0px 10px 0px 10px;
    @media (max-width: 1160px) {
        width: 100%;
    }
`;

function getWidthString(span) {
    if (!span) return;
    let width = span / 12 * 100;
    return `width: ${width}%;`
}

export default class Menu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showFixedMobileMenu: false,
            isScrollOnTop: 'notScrolled'
        };
        this.showFixedMobileMenu = this.showFixedMobileMenu.bind(this);
        this.onWaypointEntered = this.onWaypointEntered.bind(this);
        this.onWaypointLeft = this.onWaypointLeft.bind(this);
    }

    showFixedMobileMenu = () => {
        this.props.triggerUpdateParentOverflowState();
        this.setState({
            showFixedMobileMenu: !this.state.showFixedMobileMenu
        });
    }

    onWaypointEntered(arg) {
        this.setState({ isScrollOnTop: arg });
    }

    onWaypointLeft(arg) {
        this.setState({ isScrollOnTop: arg });
    }

    render() {
        let background = 'transparent';
        let arrowDisplay = 'block';
        
        if (this.state.isScrollOnTop == 'notScrolled') {
            background = 'transparent';
            arrowDisplay = 'block';
        } else {
            background = '#000000';    
            arrowDisplay = 'none';
        }
        
        let navClassName = 'main-nav';
        let fixedMobileMenuVisibility = 'hidden';
        
        if (this.state.showFixedMobileMenu) {
            navClassName = 'main-nav mtn-active-icon main-nav-background';
            fixedMobileMenuVisibility = 'visible';
            background = '#000000';    
        }
      

        return (
            <div className="menuWrapper">
                <Waypoint
                    onEnter={this.onWaypointEntered.bind(this, 'notScrolled')}
                    onLeave={this.onWaypointLeft.bind(this, 'scrolled')}
                />
                <Row mobile>
                    <Column>
                        <LinkScroll activeClass="active" to="portfolio" spy={true} smooth={true} duration={500} ><BounceArrow display={arrowDisplay}/></LinkScroll>
                        <div className={navClassName} style={{ background: `${background}` }}>
                            <div className="mtn-bar-wrap">
                                <a className="mtn-mobile-logo" href="/"><img className="phone-logo" src="http://tri.be/content/themes/tribe/img/logos/logo-mobile.svg" /></a>
                                <icon onClick={this.showFixedMobileMenu} className="mtn-trigger"><i></i></icon>
                            </div>
                            <div className="mobileMenuWrapper" style={{ visibility: `${fixedMobileMenuVisibility}`, background: `${background}` }}>
                                <div className="mobileMenuContent">
                                    <ul>
                                        <li>
                                            <Link href='/'>
                                                <MyLink onCustomClick={this.showFixedMobileMenu}>HOME</MyLink>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/blog'>
                                                <MyLink onCustomClick={this.showFixedMobileMenu}>BLOG</MyLink>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Column>
                </Row>

                <Row>
                    <Column>
                        <LinkScroll activeClass="active" to="portfolio" spy={true} smooth={true} duration={500} ><BounceArrow display={arrowDisplay} /></LinkScroll>
                        <ClassicMenuWrapper>
                            <div className="classicMenuContent">
                                KLASYCZNE MENU TUTAJ
                            </div>
                        </ClassicMenuWrapper>
                    </Column>
                </Row>

                <style jsx>{`
                .classicMenuContent {
                    text-align: center;
                    padding: 20px;
                }

                .mobileMenuContent {
                    text-align: center;
                }

                .menuWrapper {
                    position: absolute;
                    top: 0;
                    left:0;
                    z-index:2;
                    width: 100%;
                    height: 100vh;
                }

                .mobileMenuWrapper {                    
                    margin-top: 8px;                    
                    position: relative;
                    top: 0;
                    left:0;
                    z-index:3;
                    width: 100%;
                    height: 100vh;                                         
                }

                .mobileMenuContent {                    
                    heigth: 100vh;
                    width:100%;
                }

                .mobileMenuContent ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .mobileMenuContent ul li {
                    padding: 24px;
                }
                
                .main-nav {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    left: 0;
                    height: 50px;
                    z-index: 7;                    
                }
                .mtn-bar-wrap {                                        
                }

                .main-nav-background {
                    background: #000000;
                }
                
                .mtn-mobile-logo {
                    width: 120px;
                    margin: 10px 0 0 17px;
                    display: block;
                }
                .mtn-mobile-logo img {
                    width: 100%;
                }
                
                .mtn-trigger {                    
                    position: absolute;
                    display: block;
                    top: 8px;
                    right: 17px;
                    width: 25px;
                    height: 30px;
                    background: none;
                    border: 0;
                    cursor: pointer;                    
                }                
                .mtn-trigger i {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    display: block;
                    width: 100%;
                    height: 4px;
                    background-color: #1ea6cc;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    transition: background-color 0.3s;                    
                }
                .mtn-trigger i:before,
                .mtn-trigger i:after {
                    position: absolute;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #1ea6cc;
                    content: '';
                    transition: transform 0.3s;                    
                }
                .mtn-trigger i:before {
                    -ms-transform: translateY(-200%);
                    transform: translateY(-200%);
                }
                .mtn-trigger i:after {
                    -ms-transform: translateY(200%);
                    transform: translateY(200%);
                }
                .mtn-active-icon .mtn-trigger i {
                    background-color: transparent;
                }
                .mtn-active-icon .mtn-trigger i:before {
                    -ms-transform: translateY(0) rotate(45deg);
                    transform: translateY(0) rotate(45deg);
                }
                .mtn-active-icon .mtn-trigger i:after {
                    -ms-transform: translateY(0) rotate(-45deg);
                    transform: translateY(0) rotate(-45deg);
                }
                `}</style>
            </div>

        )
    }
}