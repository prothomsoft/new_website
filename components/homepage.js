import React from "react";
import Layout from "../components/layout";
import Slider from "../components/slider";
import Menu from "../components/menu/menu";
import Scroll from "react-scroll";
import styled from "styled-components";
import ContactDesktop from "../components/contact/contactDesktop";
import ContactMobile from "../components/contact/contactMobile";
import LeadDesktop from "../components/footer/leadDesktop";
import LeadMobile from "../components/footer/leadMobile";
import PortfolioDesktop from "../components/portfolio/portfolioDesktop";
import PortfolioMobile from "../components/portfolio/portfolioMobile";
import PortfolioTextDesktop from "../components/portfolio/portfolioTextDesktop";
import PortfolioTextMobile from "../components/portfolio/portfolioTextMobile";
import { isIOS } from "react-device-detect";
import FontFaceObserver from "fontfaceobserver";

var Element = Scroll.Element;

const SectionWrapper = styled.div`
    margin: 0 auto;
    width: 1160px;
    text-align: justify;
    padding: 20px 10px 0px 10px;

    @media (max-width: 1160px) {
        width: 100%;
    }
`;

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            overflow: true,
            fontLoaded: false,
            width: "0"
        };
        this.updateOverflowState = this.updateOverflowState.bind(this);
        this.updateFontLoadedState = this.updateFontLoadedState.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);        
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);

        let link = document.createElement("link");
        link.href = "https://fonts.googleapis.com/css?family=Oswald:400&subset=latin,latin-ext";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        Promise.all([new FontFaceObserver("Oswald").load()]).then(
            () => {
                this.updateFontLoadedState();
            },
            err => {
                console.error("Failed to load fonts!", err);
            }
        );
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }

    updateOverflowState() {
        this.setState({
            overflow: !this.state.overflow
        });
    }

    updateFontLoadedState() {
        this.setState({
            fontLoaded: !this.state.fontLoaded
        });
    }

    render() {
        let menuSpace = null;

        let componentOne = null;
        let componentTwo = null;

        let portfolio = <PortfolioDesktop />;
        let portfolioText = <PortfolioTextDesktop />;
        let contact = <ContactDesktop />;

        let lead = <LeadDesktop leadNames={this.props.leadNames} leadTitle={this.props.leadTitle} leadUrl={this.props.leadUrl} />;

        if (this.state.fontLoaded) {
            if (this.state.width < 1160) {
                menuSpace = "70px";
                componentOne = <Slider slides={this.props.slides} firstLoad={false} />;
                componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} height={"100vh"} displayTextAndArrow={false} displayArrow={true} />;
                portfolio = <PortfolioMobile />;
                portfolioText = <PortfolioTextMobile />;
                contact = <ContactMobile />;
                lead = <LeadMobile leadNames={this.props.leadNames} leadTitle={this.props.leadTitle} leadUrl={this.props.leadUrl} />;
            } else {
                menuSpace = "5px";
                componentOne = <Slider slides={this.props.slides} firstLoad={false} />;
                componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} height={"100vh"} displayTextAndArrow={false} displayArrow={true} />;
                portfolio = <PortfolioDesktop />;
                portfolioText = <PortfolioTextDesktop />;
                contact = <ContactDesktop />;
                lead = <LeadDesktop leadNames={this.props.leadNames} leadTitle={this.props.leadTitle} leadUrl={this.props.leadUrl} />;
            }
        } else {
            componentOne = <Slider slides={this.props.slides} firstLoad={true} />
        }

        let overflow = null;
        if (this.state.overflow) {
            overflow = "visible";
        } else {
            overflow = "hidden";
        }

        let bgImg2 = "bgimg-2 others";
        let bgImg3 = "bgimg-3 others";
        if (isIOS) {
            bgImg2 = "bgimg-2 isios";
            bgImg3 = "bgimg-3 isios";
        }

        return (
            <Layout title={this.props.headTitle} description={this.props.headDescription} keywords={this.props.headKeywords} url={this.props.headUrl} overflow={overflow}>
                {componentOne}
                {componentTwo}
                <div style={{ height: menuSpace }} />
                <Element id="portfolio" />
                <SectionWrapper>{portfolio}</SectionWrapper>

                <div className={bgImg2} style={{ backgroundImage: this.props.backgroundImage }} />

                <SectionWrapper>{portfolioText}</SectionWrapper>

                <SectionWrapper>{contact}</SectionWrapper>

                <div className={bgImg3} style={{ backgroundImage: this.props.leadImage }}>
                    {lead}
                </div>

                <style jsx>{`
                    article {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        text-align: center;
                        font-family: "Oswald";
                        width: 1140px;
                    }
                    p {
                        font-size: 16px;
                        margin: 10px 0;
                        text-align: justify;
                        padding: 0 20px 0 20px;
                    }

                    .quote-title::before,
                    .quote-title::after {
                        content: "";
                        display: block;
                        border: 1px solid #33b59a;
                    }

                    .quote-title {
                        display: flex;
                        align-items: center;
                        color: #ffffff;
                        padding: 10px 0 10px 0;
                    }

                    .quote-title::before,
                    .quote-title::after {
                        flex-grow: 1;
                        margin: 0 10px;
                    }

                    .bgimg-2,
                    .bgimg-3 {
                        position: relative;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                        -webkit-background-size: cover;
                        -moz-background-size: cover;
                        -o-background-size: cover;
                        -ms-background-size: cover;
                    }
                    .bgimg-2 {
                        min-height: 70%;
                    }
                    .bgimg-3 {
                        min-height: 100%;
                    }
                    .isios {
                        background-attachment: scroll;
                    }
                    .others {
                        background-attachment: fixed;
                    }
                `}</style>
            </Layout>
        );
    }
}
