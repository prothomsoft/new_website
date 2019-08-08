import Link from "next/link";
import Layout from "../components/layout";
import styled from "styled-components";
import LazyLoad from "react-lazy-load";
import Menu from "../components/menu/menu";
import FontLoader from "../components/fontLoader";
import Loader from "../components/loader";
import ContactDesktop from "../components/contact/contactDesktop";
import ContactMobile from "../components/contact/contactMobile";
import LeadDesktop from "../components/footer/leadDesktop";
import LeadMobile from "../components/footer/leadMobile";
import { isIOS } from "react-device-detect";

const SectionWrapper = styled.div`
    margin: 0 auto;
    width: 1160px;
    text-align: justify;
    padding: 0 10px 0 10px;
    .LazyLoad {
        opacity: 0;
        transition: all 1s ease-in-out;

        &.is-visible {
            opacity: 1;
        }
    }
    @media (max-width: 1160px) {
        width: 100%;
    }
`;

export default class BlogList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: "0",
            overflow: false
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.updateFontLoadedState = this.updateFontLoadedState.bind(this);
        this.updateOverflowState = this.updateOverflowState.bind(this);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }

    updateFontLoadedState() {
        this.setState({
            fontLoaded: !this.state.fontLoaded
        });
    }

    updateOverflowState() {
        this.setState({
            overflow: !this.state.overflow
        });
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    render() {
        let menuSpace = null;
        let componentOne = null;
        let componentTwo = null;

        let lead = null;
        let contact = null;

        // assumption that all blog images are horizontal with height = 762px
        let height = 762;

        if (this.state.fontLoaded) {
            if (this.state.width < 1160) {
                height = 0;
                menuSpace = "70px";
                componentOne = null;
                componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} displayTextAndArrow={false} displayArrow={false} height={menuSpace} />;
                lead = <LeadMobile leadNames={this.props.leadNames} leadTitle={this.props.leadTitle} leadUrl={this.props.leadUrl} />;
                contact = <ContactMobile />;
            } else {
                menuSpace = "210px";
                componentOne = null;
                componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} displayTextAndArrow={false} displayArrow={false} height={menuSpace} />;
                lead = <LeadDesktop leadNames={this.props.leadNames} leadTitle={this.props.leadTitle} leadUrl={this.props.leadUrl} />;
                contact = <ContactDesktop />;
            }
        } else {
            componentOne = <FontLoader triggerParentUpdateFontLoadedState={this.updateFontLoadedState} />;
            componentTwo = <Loader />;
        }

        let bgImg3 = "bgimg-3 others";
        if (isIOS) {
            bgImg3 = "bgimg-3 isios";
        }

        return (
            <Layout title={this.props.headTitle} description={this.props.headDescription} keywords={this.props.headKeywords} url={this.props.headUrl}>
                {componentOne}
                {componentTwo}
                <div style={{ height: menuSpace }} />
                <SectionWrapper>
                    {this.props.posts.map((post, key) => (
                        <PostLink key={key} post={post} height={height} />
                    ))}
                    <div style={{ textAlign: "right" }}>
                        {this.props.previous_page && (
                            <Link as={`/blog/page/${this.props.previous_page}`} href={`/blog?page=${this.props.previous_page}`}>
                                <a className="btn">POPRZEDNIA STRONA</a>
                            </Link>
                        )}
                        &nbsp;&nbsp;
                        {this.props.next_page && (
                            <Link as={`/blog/page/${this.props.next_page}`} href={`/blog?page=${this.props.next_page}`}>
                                <a className="btn">NASTĘPNA STRONA</a>
                            </Link>
                        )}
                    </div>
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

const PostLink = ({ key, post, height }) => (
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
                <a>{getProperLazyLoad(getPostImage(post.content.rendered), height)}</a>
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

function getProperLazyLoad(imgSrc, height) {
    if (height === 0) {
        return (
            <LazyLoad offsetVertical={300}>
                <img src={imgSrc} />
            </LazyLoad>
        );
    } else {
        return (
            <LazyLoad height={height} offsetVertical={300}>
                <img src={imgSrc} />
            </LazyLoad>
        );
    }
}

function getPostTags(content) {
    let returnContent = "";
    for (let i = 0; i < 5; i++) {
        if (content[i]) {
            returnContent = returnContent.concat(content[i].name);
            returnContent = returnContent.concat(", ");
        }
    }
    return (returnContent = returnContent.substring(0, returnContent.length - 2));
}

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
    if (post.post_tags[0].imiona == '') {
        return post.title.rendered;
    } else {
        return post.title.rendered.concat(" - ").concat(post.post_tags[0].imiona);
    }
}

function getPostImage(content) {
    let fields = content.split('" alt="');
    fields = fields[0].split('<img src="');
    return fields[1];
}
