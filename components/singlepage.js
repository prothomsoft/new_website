import React from "react";
import Layout from "../components/layout";
import Loader from "../components/loader";
import FontFaceObserver from "fontfaceobserver";
import Menu from "../components/menu/menu";
import Scroll from "react-scroll";
import styled from "styled-components";
import { isIOS } from "react-device-detect";

import ContactDesktop from "../components/contact/contactDesktop";
import ContactMobile from "../components/contact/contactMobile";
import LeadDesktop from "../components/footer/leadDesktop";
import LeadMobile from "../components/footer/leadMobile";
import OfferDesktop from "../components/offer/offerDesktop";
import OfferMobile from "../components/offer/offerMobile";
import RodoDesktop from "../components/rodo/rodoDesktop";
import RodoMobile from "../components/rodo/rodoMobile";
import SlubDesktop from "../components/slub/slubDesktop";
import SlubMobile from "../components/slub/slubMobile";
import SesjaDesktop from "../components/sesja/sesjaDesktop";
import SesjaMobile from "../components/sesja/sesjaMobile";
import MisjaDesktop from "../components/misja/misjaDesktop";
import MisjaMobile from "../components/misja/misjaMobile";
import HistoriaDesktop from "../components/historia/historiaDesktop";
import HistoriaMobile from "../components/historia/historiaMobile";

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

export default class Singlepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            eachImageState: 0,
            overflow: true,
            font: false,
            width: "0",
        };
        this.updateOverflowState = this.updateOverflowState.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);

        let link = document.createElement("link");
        link.href = "https://fonts.googleapis.com/css?family=Oswald:400&display=swap&subset=latin,latin-ext";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        Promise.all([new FontFaceObserver("Oswald").load()]).then(() => {
            this.setState({ font: true });
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }

    updateOverflowState() {
        this.setState({
            overflow: !this.state.overflow,
        });
    }

    render() {
        let loader = <Loader />;
        let overflow = null;
        let componentOne = null;
        let menuSpace = "160px";
        let componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} height={menuSpace} displayTextAndArrow={false} displayArrow={false} />;
        let contact = <ContactDesktop />;
        let lead = <LeadDesktop leadNames={this.props.leadNames} leadTitle={this.props.leadTitle} leadUrl={this.props.leadUrl} />;
        let componentContent = null;
        if (this.props.componentContentName == "offer") {
            componentContent = <OfferDesktop />;
        }
        if (this.props.componentContentName == "rodo") {
            componentContent = <RodoDesktop />;
        }
        if (this.props.componentContentName == "slub") {
            componentContent = <SlubDesktop />;
        }
        if (this.props.componentContentName == "sesja") {
            componentContent = <SesjaDesktop />;
        }
        if (this.props.componentContentName == "misja") {
            componentContent = <MisjaDesktop />;
        }
        if (this.props.componentContentName == "historia") {
            componentContent = <HistoriaDesktop />;
        }

        if (this.state.font) {
            loader = null;
        }

        if (this.state.width < 1160) {
            menuSpace = "40px";
            componentOne = null;
            componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} height={menuSpace} displayTextAndArrow={false} displayArrow={false} />;
            contact = <ContactMobile />;
            if (this.props.componentContentName == "offer") {
                componentContent = <OfferMobile />;
            }
            if (this.props.componentContentName == "rodo") {
                componentContent = <RodoMobile />;
            }
            if (this.props.componentContentName == "slub") {
                componentContent = <SlubMobile />;
            }
            if (this.props.componentContentName == "sesja") {
                componentContent = <SesjaMobile />;
            }
            if (this.props.componentContentName == "misja") {
                componentContent = <MisjaMobile />;
            }
            if (this.props.componentContentName == "historia") {
                componentContent = <HistoriaMobile />;
            }
            lead = <LeadMobile leadNames={this.props.leadNames} leadTitle={this.props.leadTitle} leadUrl={this.props.leadUrl} />;
        }

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
                {loader}
                {componentOne}
                {componentTwo}
                <div style={{ height: menuSpace }} />
                <SectionWrapper>{componentContent}</SectionWrapper>
                <div className={bgImg2} style={{ backgroundImage: this.props.backgroundImage }} />
                <SectionWrapper>{contact}</SectionWrapper>
                <div className={bgImg3} style={{ backgroundImage: this.props.leadImage }}>
                    {lead}
                </div>
                <style jsx>{`
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
                        min-height: 60%;
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
