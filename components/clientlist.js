import React from "react";
import Link from "next/link";
import Layout from "./layout";
import styled from "styled-components";
import Menu from "./menu/menu";
import FontFaceObserver from "fontfaceobserver";
import Loader from "./loader";
import ContactDesktop from "./contact/contactDesktop";
import ContactMobile from "./contact/contactMobile";
import LeadDesktop from "./footer/leadDesktop";
import LeadMobile from "./footer/leadMobile";
import { isIOS } from "react-device-detect";
import Image from 'next/image';

const SectionWrapper = styled.div`
    margin: 0 auto;
    width: 1160px;
    text-align: justify;
    padding: 0 10px 0 10px;
    @media (max-width: 1160px) {
        width: 100%;
    }
`;

export default class ClientList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: "0",
            overflow: false,
            font: false
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.updateOverflowState = this.updateOverflowState.bind(this);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }

    updateOverflowState() {
        this.setState({
            overflow: !this.state.overflow,
        });
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

    render() {
      
        let menuSpace = "180px";
        let fontSize = "2.6em";
        let componentOne = null;
        let componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} displayTextAndArrow={false} displayArrow={false} height={menuSpace} />;
        let lead = <LeadDesktop leadNames={this.props.leadNames} leadTitle={this.props.leadTitle} leadUrl={this.props.leadUrl} />;
        let contact = <ContactDesktop />;
        let loader = <Loader />;   

        // assumption that all blog images are horizontal with height = 951px
        let height = 951;

        
            if (this.state.width < 1160) {
                height = 0;
                menuSpace = "70px";
                fontSize = "1.6em";
                componentOne = null;
                componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} displayTextAndArrow={false} displayArrow={false} height={menuSpace} />;
                lead = <LeadMobile leadNames={this.props.leadNames} leadTitle={this.props.leadTitle} leadUrl={this.props.leadUrl} />;
                contact = <ContactMobile />;
            } 
        

        let bgImg3 = "bgimg-3 others";
        if (isIOS) {
            bgImg3 = "bgimg-3 isios";
        }

        let title = (post, width) => {
            return post.name;
        };

        if (this.state.width < 600) {
            title = (post, width) => {
                return post.name;
            };
        }

        if(this.state.font) {
            loader = null;            
        }

        return (
            <Layout title={this.props.headTitle} description={this.props.headDescription} keywords={this.props.headKeywords} url={this.props.headUrl}>
                {loader}
                {componentOne}
                {componentTwo}
                <div style={{ height: menuSpace }} />
                <SectionWrapper>
                    {this.props.posts.map((post, key) => (
                        <div key={key}>
                            <h1 className="quote-title" style={{ fontSize: fontSize }}>
                                {title(post)}
                            </h1>
                            <Link as={`/${post.slug}`} href={`/${post.slug}`}>
                                <a href={`https://sk.99foto.pl/login/${post.welcomeURL}`} target="_blank" rel="nofollow">
                                    <Image alt={`${title(post)}`} src={`/static/client/${post.welcomeURL}.jpg`} width={1140} height={951} />
                                </a>
                            </Link>
                        </div>
                    ))}
                </SectionWrapper>

                <div className="spacer" />

                <SectionWrapper>{contact}</SectionWrapper>

                <div className={bgImg3} style={{ backgroundImage: this.props.leadImage }}>
                    {lead}
                </div>

                <style jsx>{`
                    .spacer {
                        height: 40px;
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
                `}</style>
            </Layout>
        );
    }
}