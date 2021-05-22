import React from "react";
import Link from "next/link";
import MyLink from "../menu/myLink";
import IntroTextAndArrow from "../menu/introTextAndArrow";
import IntroArrow from "../menu/introArrow";
import styled from "styled-components";
import Scroll from "react-scroll";
import { Waypoint } from "react-waypoint";

var LinkScroll = Scroll.Link;

const Row = styled.div`
    height: 100%;
    ${({ mobile }) => (mobile ? "display:block" : "display: none")};
    @media only screen and (min-width: 1160px) {
        ${({ mobile }) => (mobile ? "display:none" : "display: block")};
    }
    &::after {
        content: "";
        clear: both;
        display: table;
    }
`;

const Column = styled.div`
    height: 100%;
    float: left;
    ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};
    @media only screen and (min-width: 1160px) {
        ${({ lg }) => lg && getWidthString(lg)};
    }
`;

const ClassicMenuWrapper = styled.div`
    margin: 0 auto;
    width: 1160px;
    text-align: justify;
    @media (max-width: 1160px) {
        width: 100%;
    }
`;

function getWidthString(span) {
    if (!span) return;
    let width = (span / 12) * 100;
    return `width: ${width}%;`;
}

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFixedMobileMenu: false,
            isScrollOnTop: "notScrolled",
        };
        this.showFixedMobileMenu = this.showFixedMobileMenu.bind(this);
        this.onWaypointEntered = this.onWaypointEntered.bind(this);
        this.onWaypointLeft = this.onWaypointLeft.bind(this);
    }

    showFixedMobileMenu() {
        this.props.triggerUpdateParentOverflowState();
        this.setState({
            showFixedMobileMenu: !this.state.showFixedMobileMenu,
        });
    }

    onWaypointEntered(arg) {
        this.setState({ isScrollOnTop: arg });
    }

    onWaypointLeft(arg) {
        this.setState({ isScrollOnTop: arg });
    }

    render() {
        let background = "transparent";

        if (this.state.isScrollOnTop == "notScrolled") {
            background = "transparent";
        } else {
            background = "#000000";            
        }

        let height = null;

        let navClassName = "main-nav";
        let fixedMobileMenuVisibility = "hidden";
        let logoVisibility = "visible";
        if (this.state.showFixedMobileMenu) {
            navClassName = "main-nav mtn-active-icon main-nav-background";
            fixedMobileMenuVisibility = "visible";
            logoVisibility = "hidden";
            background = "#000000";
            height = "100vh";
        } else {
            height = this.props.height;
        }

        let componentTextAndArrow;
        if (this.state.isScrollOnTop == "notScrolled" && this.props.displayTextAndArrow) {
            componentTextAndArrow = (
                <LinkScroll activeClass="active" to="portfolio" spy={true} smooth={true} duration={500}>
                    <IntroTextAndArrow menuNames={this.props.menuNames} menuTitle={this.props.menuTitle} menuButton={this.props.menuButton} />
                </LinkScroll>
            );
        }

        if (this.state.isScrollOnTop == "notScrolled" && this.props.displayArrow) {
            componentTextAndArrow = (
                <LinkScroll activeClass="active" to="portfolio" spy={true} smooth={true} duration={500}>
                    <IntroArrow />
                </LinkScroll>
            );
        }

        return (
            <div className="menuWrapper" style={{ height: height }}>
                <Waypoint onEnter={this.onWaypointEntered.bind(this, "notScrolled")} onLeave={this.onWaypointLeft.bind(this, "scrolled")} />
                <Row mobile>
                    <Column>
                        {componentTextAndArrow}
                        <div className={navClassName} style={{ background: `${background}` }}>
                            <div className="mtn-bar-wrap" style={{ background: `${background}` }}>
                                <a className="mtn-mobile-logo" style={{ backgroundColor: `${background}` }} href="/">
                                    <img src="https://res.cloudinary.com/cloud99fotopl/image/fetch/f_auto,q_auto/https://99foto.pl/static/99foto_logo_mobile.svg" alt="fotograf ślubny kraków" style={{ width: "105px", visibility: `${logoVisibility}` }} />
                                </a>
                                <i onClick={this.showFixedMobileMenu} className="mtn-trigger">
                                    <i />
                                </i>
                            </div>
                            <div className="mobileMenuWrapper" style={{ visibility: `${fixedMobileMenuVisibility}`, background: `${background}`, height: height }}>
                                <div className="mobileMenuContent" style={{ height: height }}>
                                    <ul>
                                        <li>
                                            <Link href="/">
                                                <MyLink onCustomClick={this.showFixedMobileMenu} text="START" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/fotografia-slubna-krakow">
                                                <MyLink onCustomClick={this.showFixedMobileMenu} text="FOTOGRAFIA ŚLUBNA" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/sesja-zdjeciowa-krakow">
                                                <MyLink onCustomClick={this.showFixedMobileMenu} text="SESJA ZDJĘCIOWA" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/reportaze-slubne-sesje-plenerowe">
                                                <MyLink onCustomClick={this.showFixedMobileMenu} text="KILKA HISTORII" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/misja-i-faq">
                                                <MyLink onCustomClick={this.showFixedMobileMenu} text="MISJA i FAQ" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/oferta-fotografii-slubnej">
                                                <MyLink onCustomClick={this.showFixedMobileMenu} text="OFERTA" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog">
                                                <MyLink onCustomClick={this.showFixedMobileMenu} text="BLOG" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/strefa-klienta">
                                                <MyLink onCustomClick={this.showFixedMobileMenu} text="STREFA KLIENTA" />
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
                        {componentTextAndArrow}
                        <ClassicMenuWrapper>
                            <ul className="classicMenuContent">
                                <li>
                                    <Link href="/fotografia-slubna-krakow">
                                        <a>FOTOGRAFIA ŚLUBNA</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sesja-zdjeciowa-krakow">
                                        <a>SESJA ZDJĘCIOWA</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/reportaze-slubne-sesje-plenerowe">
                                        <a>KILKA HISTORII</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>
                                       
                                            <img alt="Fotograf ślubny Kraków" style={{ height: "140px", width: "100px", margin: "-15px 0px 0px 5px" }} src="https://res.cloudinary.com/cloud99fotopl/image/fetch/f_auto,q_auto/https://99foto.pl/static/99foto_logo.svg" />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/misja-i-faq">
                                        <a>MISJA i FAQ</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/oferta-fotografii-slubnej">
                                        <a>OFERTA</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog">
                                        <a>BLOG</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/strefa-klienta">
                                        <a>STREFA KLIENTA</a>
                                    </Link>
                                </li>
                            </ul>
                        </ClassicMenuWrapper>
                    </Column>
                </Row>

                <style jsx>{`
                    dfrfd .classicMenuContent {
                        padding: 0;
                        margin: 0;
                        list-style: none;
                    }

                    .classicMenuContent ul {
                        list-style: none;
                        text-align: center;
                    }

                    .classicMenuContent li {
                        display: inline;
                        margin-left: -23px;
                    }

                    .classicMenuContent li > a {
                        vertical-align: top;
                        display: inline-block;
                        position: relative;
                        color: #fff;
                        text-decoration: none;
                        font-size: 1.4em;
                        margin: 25px 28px 0px 31px;
                        padding: 0 0 6px 0;
                        font-size: 1.4em;
                    }

                    .classicMenuContent li > a:hover {
                        color: #ffffff;
                    }

                    .classicMenuContent li > a:before {
                        content: "";
                        position: absolute;
                        width: 100%;
                        height: 1px;
                        bottom: 0;
                        left: 0;
                        background-color: #ffffff;
                        visibility: hidden;
                        -webkit-transform: scaleX(0);
                        -moz-transform: scaleX(0);
                        -o-transform: scaleX(0);
                        -ms-transform: scaleX(0);
                        transform: scaleX(0);
                        -webkit-transition: all 0.3s ease-in-out 0s;
                        -moz-transform: scaleX(0);
                        -o-transform: scaleX(0);
                        -ms-transform: scaleX(0);
                        transition: all 0.3s ease-in-out 0s;
                    }

                    .classicMenuContent li:nth-child(4) > a:before {
                        content: none;
                    }

                    .classicMenuContent li > a:hover:before {
                        visibility: visible;
                        -webkit-transform: scaleX(1);
                        -moz-transform: scaleX(1);
                        -o-transform: scaleX(1);
                        -ms-transform: scaleX(1);
                        transform: scaleX(1);
                    }

                    .menuWrapper {
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: 2;
                        width: 100%;
                    }
                    .mobileMenuWrapper {
                        margin-top: 8px;
                        position: relative;
                        top: 0;
                        left: 0;
                        z-index: 3;
                        width: 100%;
                    }

                    .mobileMenuContent {
                        width: 100%;
                        text-align: center;
                    }

                    .mobileMenuContent ul {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        padding: 30px 0px 0px 0px;
                    }

                    .mobileMenuContent ul li {
                        padding: 1px 10px 1px 10px;
                        font-size: 1.2em;
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
                        width: 90px;
                    }

                    .main-nav-background {
                        background: #000000;
                    }

                    .mtn-mobile-logo {
                        margin: 7px 0 0 8px;
                        display: block;
                        width: 105px;
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
                        background-color: #ffffff;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -o-user-select: none;
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
                        background: #ffffff;
                        content: "";
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
        );
    }
}
