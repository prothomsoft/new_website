import Link from "next/link";
import Layout from "./layout";
import styled from "styled-components";
import LazyLoad from "react-lazy-load";
import Menu from "./menu/menu";
import FontLoader from "./fontLoader";
import Loader from "./loader";
import ContactDesktop from "./contact/contactDesktop";
import ContactMobile from "./contact/contactMobile";
import LeadDesktop from "./footer/leadDesktop";
import LeadMobile from "./footer/leadMobile";
import { isIOS } from "react-device-detect";
import moment from "moment";

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

export default class ClientList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: "0",
            overflow: false,
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
            fontLoaded: !this.state.fontLoaded,
        });
    }

    updateOverflowState() {
        this.setState({
            overflow: !this.state.overflow,
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

        // assumption that all blog images are horizontal with height = 951px
        let height = 951;

        if (this.state.fontLoaded) {
            if (this.state.width < 1160) {
                height = 0;
                menuSpace = "70px";
                componentOne = null;
                componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} displayTextAndArrow={false} displayArrow={false} height={menuSpace} />;
                lead = <LeadMobile leadNames={this.props.leadNames} leadTitle={this.props.leadTitle} leadUrl={this.props.leadUrl} />;
                contact = <ContactMobile />;
            } else {
                menuSpace = "180px";
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

        let title = (post, width) => {
            //return post.name.concat(" - ").concat(moment(post.creationDate).format('DD-MM-YYYY'));
            return post.name;
        };

        if (this.state.width < 600) {
            title = (post, width) => {
                return post.name;
            };
        }

        return (
            <Layout title={this.props.headTitle} description={this.props.headDescription} keywords={this.props.headKeywords} url={this.props.headUrl}>
                {componentOne}
                {componentTwo}
                <div style={{ height: menuSpace }} />
                <SectionWrapper>
                    {this.props.posts.map((post, key) => (
                        <div key={key}>
                            <h1 className="quote-title">{title(post)}</h1>
                            <Link as={`/${post.slug}`} href={`/${post.slug}`}>
                                <a href={`http://sk.99foto.pl/login/${post.welcomeURL}`} target="_blank" rel="nofollow">
                                    {getProperLazyLoad(`/static/client/${post.welcomeURL}.jpg`, height)}
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
