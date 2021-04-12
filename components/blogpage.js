import React, { Fragment } from "react";
import Link from "next/link";
import Layout from "../components/layout";
import Slide from "../components/slide";
import Loader from "../components/loader";
import FontFaceObserver from "fontfaceobserver";
import LazyLoadWrapper from "../components/lazyLoadWrapper";
import Menu from "../components/menu/menu";
import Scroll from "react-scroll";
import styled from "styled-components";
import ContactDesktop from "../components/contact/contactDesktop";
import ContactMobile from "../components/contact/contactMobile";
import LeadDesktop from "../components/footer/leadDesktop";
import LeadMobile from "../components/footer/leadMobile";
import { isIOS } from "react-device-detect";

var Element = Scroll.Element;

const SectionWrapper = styled.div`
    margin: 0 auto;
    width: 1160px;
    text-align: justify;
    padding: 20px 10px 0 10px;
    line-height:0; 
    
    @media (max-width: 1160px) {
        width: 100%;
    }
`;

const SectionWrapperExtended = styled.div`
    margin: 0 auto;
    width: 1160px;
    text-align: justify;
    padding: 20px 10px 0 10px;
    line-height:1.4; 
    
    @media (max-width: 1160px) {
        width: 100%;
    }
`;

export default class Blogpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            overflow: true,
            font: false,
            width: '0'
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

        Promise.all([new FontFaceObserver("Oswald").load()]).then(
            () => {
            this.setState({ font: true });
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

    render() {
        let overflow = null;
        let componentThree = null;
        let paragraph1 = null;
        let paragraph2 = null;
        let paragraph3 = null;
        let paragraph4 = null;
        let paragraph5 = null;
        let paragraph6 = null;
        let paragraph7 = null;
        let paragraph8 = null;
        let paragraph9 = null;
        let imagesParagraph1 = null;
        let imagesParagraph2 = null;
        let imagesParagraph3 = null;
        let imagesParagraph4 = null;
        let imagesParagraph5 = null;
        let imagesParagraph6 = null;
        let imagesParagraph7 = null;
     
        let loader = <Loader />;   
        let menuSpace = "5px";
        let componentOne = <Slide slide={this.props.slide} />;
        let componentTwo = (
            <Menu
                triggerUpdateParentOverflowState={this.updateOverflowState}
                displayTextAndArrow={true}
                displayArrow={false}
                height={"100vh"}
                menuNames={this.props.menuNames}
                menuTitle={this.props.menuTitle}
                menuButton={"ZOBACZ ZDJĘCIA"}
            />
        );
        if (this.props.images) componentThree = <LazyLoadWrapper images={this.props.images} title={this.props.headTitle}/>;
        if (this.props.imagesParagraph1) imagesParagraph1 = <LazyLoadWrapper images={this.props.imagesParagraph1} title={this.props.headTitle}/>;
        if (this.props.imagesParagraph2) imagesParagraph2 = <LazyLoadWrapper images={this.props.imagesParagraph2} title={this.props.headTitle}/>;
        if (this.props.imagesParagraph3) imagesParagraph3 = <LazyLoadWrapper images={this.props.imagesParagraph3} title={this.props.headTitle}/>;
        if (this.props.imagesParagraph4) imagesParagraph4 = <LazyLoadWrapper images={this.props.imagesParagraph4} title={this.props.headTitle}/>;
        if (this.props.imagesParagraph5) imagesParagraph5 = <LazyLoadWrapper images={this.props.imagesParagraph5} title={this.props.headTitle}/>;
        if (this.props.imagesParagraph6) imagesParagraph6 = <LazyLoadWrapper images={this.props.imagesParagraph6} title={this.props.headTitle}/>;
        if (this.props.imagesParagraph7) imagesParagraph7 = <LazyLoadWrapper images={this.props.imagesParagraph7} title={this.props.headTitle}/>;
        let lead = <LeadDesktop leadNames={this.props.leadNames} leadTitle={this.props.leadTitle} leadUrl={this.props.leadUrl} />;
        let contact = <ContactDesktop />;

        if(this.state.font) {
            loader = null;            
        }

        if (this.state.width < 1160) {
            menuSpace = "70px";
            componentOne = null;
            componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} displayTextAndArrow={false} displayArrow={false} height={"70px"} />;
            if (this.props.images) componentThree = <LazyLoadWrapper images={this.props.images} title={this.props.headTitle}/>;
            if (this.props.imagesParagraph1) imagesParagraph1 = <LazyLoadWrapper images={this.props.imagesParagraph1} title={this.props.headTitle} />;
            if (this.props.imagesParagraph2) imagesParagraph2 = <LazyLoadWrapper images={this.props.imagesParagraph2} title={this.props.headTitle} />;
            if (this.props.imagesParagraph3) imagesParagraph3 = <LazyLoadWrapper images={this.props.imagesParagraph3} title={this.props.headTitle}/>;
            if (this.props.imagesParagraph4) imagesParagraph4 = <LazyLoadWrapper images={this.props.imagesParagraph4} title={this.props.headTitle}/>;
            if (this.props.imagesParagraph5) imagesParagraph5 = <LazyLoadWrapper images={this.props.imagesParagraph5} title={this.props.headTitle}/>;
            if (this.props.imagesParagraph6) imagesParagraph6 = <LazyLoadWrapper images={this.props.imagesParagraph6} title={this.props.headTitle}/>;
            if (this.props.imagesParagraph7) imagesParagraph7 = <LazyLoadWrapper images={this.props.imagesParagraph7} title={this.props.headTitle}/>;
            lead = <LeadMobile leadNames={this.props.leadNames} leadTitle={this.props.leadTitle} leadUrl={this.props.leadUrl} />;
            contact = <ContactMobile />;
        } 
       

        if (this.state.overflow) {
            overflow = "visible";
        } else {
            overflow = "hidden";
        }

        let bgImg3 = "bgimg-3 others";
        if (isIOS) {
            bgImg3 = "bgimg-3 isios";
        }

        if (this.props.entryContentP1 !== '') {
            paragraph1 = <p className="par" dangerouslySetInnerHTML={{ __html: this.props.entryContentP1 }} />;
        }
        if (this.props.entryContentP2 !== '') {
            paragraph2 = <p dangerouslySetInnerHTML={{ __html: this.props.entryContentP2 }} />;
        }
        if (this.props.entryContentP3 !== '') {
            paragraph3 = <p dangerouslySetInnerHTML={{ __html: this.props.entryContentP3 }} />;
        }
        if (this.props.entryContentP4 !== '') {
            paragraph4 = <p dangerouslySetInnerHTML={{ __html: this.props.entryContentP4 }} />;
        }
        if (this.props.entryContentP5 !== '') {
            paragraph5 = <p dangerouslySetInnerHTML={{ __html: this.props.entryContentP5 }} />;
        }
        if (this.props.entryContentP6 !== '') {
            paragraph6 = <p dangerouslySetInnerHTML={{ __html: this.props.entryContentP6 }} />;
        }
        if (this.props.entryContentP7 !== '') {
            paragraph7 = <p dangerouslySetInnerHTML={{ __html: this.props.entryContentP7 }} />;
        }
        if (this.props.entryContentP8 !== '') {
            paragraph8 = <p dangerouslySetInnerHTML={{ __html: this.props.entryContentP8 }} />;
        }
        if (this.props.entryContentP9 !== '') {
            paragraph9 = <p dangerouslySetInnerHTML={{ __html: this.props.entryContentP9 }} />;
        }

        return (
            <Layout title={this.props.headTitle} description={this.props.headDescription} keywords={this.props.headKeywords} url={this.props.headUrl} overflow={overflow}>
                {loader}
                {componentOne}
                {componentTwo}
                <div style={{ height: menuSpace }} />
                <Element id="portfolio" />
                <SectionWrapper>
                    <article>
                        {this.props.page}
                        <header className="header">
                            <h1>
                                <Link as={`/${this.props.slug}`} href={`/${this.props.slug}`}>
                                    <a className="postTitle">{this.props.title}</a>
                                </Link>
                            </h1>
                        </header>
                        <div className="entryMeta">
                            {this.props.date}, TAGI: <span className="spanColor">{this.props.tags}</span>
                        </div>
                        <div className="entryContent">
                            {paragraph1}
                            {imagesParagraph1}
                            {paragraph2}
                            {imagesParagraph2}
                            {paragraph3}
                            {imagesParagraph3}
                            {paragraph4}
                            {imagesParagraph4}
                            {paragraph5}
                            {imagesParagraph5}
                            {paragraph6}
                            {imagesParagraph6}
                            {paragraph7}
                            {imagesParagraph7}
                            {paragraph8}
                            {paragraph9}
                        </div>
                    </article>
                    {componentThree}
                </SectionWrapper>

                <SectionWrapperExtended>{contact}</SectionWrapperExtended>

                <div className={bgImg3} style={{ backgroundImage: this.props.leadImage }}>
                    {lead}
                </div>

                <style jsx>{`
                    .spanColor {
                        color: #ffffff;
                    }
                    .header h1 {
                        padding: 0 0 10px 0;
                        margin: 0;
                        text-align: left;
                    }
                    .entryMeta {
                        border-bottom: 1px solid #262626;
                        border-top: 1px solid #262626;                       
                        margin-bottom: 10px;
                        text-transform: uppercase;
                        padding: 6px 0 6px 0;
                        font-family: "Oswald";
                        font-size: 16px;
                        line-height: 1.4;
                    }
                    .entryContent {
                        font-family: "Oswald";
                        font-size: 16px;
                        line-height: 1.4;
                    }
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
