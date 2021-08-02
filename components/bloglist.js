import React from "react";
import Link from "next/link";
import Layout from "../components/layout";
import styled from "styled-components";
import Menu from "../components/menu/menu";
import Loader from "../components/loader";
import FontFaceObserver from "fontfaceobserver";
import ContactDesktop from "../components/contact/contactDesktop";
import ContactMobile from "../components/contact/contactMobile";
import LeadDesktop from "../components/footer/leadDesktop";
import LeadMobile from "../components/footer/leadMobile";
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

export default class BlogList extends React.Component {
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
            overflow: !this.state.overflow
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
        let loader = <Loader />;   
        let menuSpace = "210px";
        let componentOne = null;
        let componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} displayTextAndArrow={false} displayArrow={false} height={menuSpace} />;
        let lead = <LeadDesktop leadNames={this.props.leadNames} leadTitle={this.props.leadTitle} leadUrl={this.props.leadUrl} />;
        let contact = <ContactDesktop />;
       
        // assumption that all blog images are horizontal with height = 762px
        let height = 762;

        if(this.state.font) {
            loader = null;            
        }
       
        if (this.state.width < 1160) {
            height = 0;
            menuSpace = "70px";
            componentOne = null;
            componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} displayTextAndArrow={false} displayArrow={false} height={menuSpace} />;
            lead = <LeadMobile leadNames={this.props.leadNames} leadTitle={this.props.leadTitle} leadUrl={this.props.leadUrl} />;
            contact = <ContactMobile />;
        } 

        let bgImg3 = "bgimg-3 others";
        if (isIOS) {
            bgImg3 = "bgimg-3 isios";
        }

        return (
            <Layout title={this.props.headTitle} description={this.props.headDescription} keywords={this.props.headKeywords} url={this.props.headUrl}>
                {loader}
                {componentOne}
                {componentTwo}
                <div style={{ height: menuSpace }} />
                <SectionWrapper>
                    {this.props.posts.map((post, key) => (
                        <PostLink key={key} post={post} height={height} />
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
                `}</style>
            </Layout>
        );
    }
}

const PostLink = ({ post, height }) => (
    <article>
        <header className="header">
            <h1>
                <Link as={`/${post.slug}`} href={`/${post.slug}`}>
                    <a className="postTitle" dangerouslySetInnerHTML={{ __html: getPostTitleWithNames(post) }} />
                </Link>
            </h1>
        </header>
        <div className="entryMeta">
            {getPostDate(post.date)}, TAGI: <span className="spanColor">{getPostTags(post.post_tags)}</span>
        </div>
        <div>
            <Link as={`/${post.slug}`} href={`/${post.slug}`}>
                <a href={`/${post.slug}`}>
                    <Image alt={`${getPostTitleWithNames(post)}`} src={getPostImage(post.content.rendered)} width={1140} height={762}/>
                </a>
            </Link>
            <div className="entryContent" dangerouslySetInnerHTML={{ __html: getPostContent(post.content.rendered) }} />
            <div className="specialPadding">
                <Link as={`/${post.slug}`} href={`/${post.slug}`}>
                    <a className="btn">CZYTAJ DALEJ</a>
                </Link>
            </div>
        </div>
        <style jsx>{`
            .spanColor {
                color: #ffffff;
            }
            .specialPadding {
                padding: 5px 0 40px 0;
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
            }
            .entryContent {
                font-family: "Oswald";
                font-size: 16px;
            }
            .postTitle:hover {
                text-decoration: underline;
            }
        `}</style>
    </article>
);

function getPostDate(content) {
    let postDate = new Date(Date.parse(content));
    let MonthName = new Array(12);
    MonthName[0] = "stycznia ";
    MonthName[1] = "lutego ";
    MonthName[2] = "marca ";
    MonthName[3] = "kwietnia ";
    MonthName[4] = "maja ";
    MonthName[5] = "czerwca ";
    MonthName[6] = "lipca ";
    MonthName[7] = "sierpnia ";
    MonthName[8] = "września ";
    MonthName[9] = "października ";
    MonthName[10] = "listopada ";
    MonthName[11] = "grudnia ";
    let month = postDate.getMonth();
    let day = postDate.getDate();
    let year = postDate.getFullYear();
    return day + " " + MonthName[month] + " " + year;
}

function getPostContent(content) {
    let fields = content.split("<!--more-->");
    return fields[0].concat("</p>");
}

function getPostTitleWithNames(post) {
    if (typeof post.own_tags === "undefined") {
        return post.title.rendered;
    } else {
        return post.title.rendered.concat(" - ").concat(post.own_tags);
    }
}

function getPostTags(content) {
    let returnContent = "";
    for (let i = 0; i < 5; i++) {
        if (content[i]) {
            returnContent = returnContent.concat(content[i]);
            returnContent = returnContent.concat(", ");
        }
    }
    return (returnContent = returnContent.substring(0, returnContent.length - 2));
}

function getPostImage(content) {
    let fields = content.split('" alt="');
    fields = fields[0].split('<img src="');
    let res = fields[1].replace("https://99foto.pl", "");
    return res;
}
