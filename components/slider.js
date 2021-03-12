import React from "react";
import NProgress from "nprogress";
import styled from "styled-components";
import { Waypoint } from 'react-waypoint';
import Loader from "../components/loader";
import FontLoader from "../components/fontLoader";
import { isIOS } from "react-device-detect";

const SliderWrapper = styled.div`
    height: 100vh;
    z-index: 1;
`;

export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            eachImageState: 0,
            backgroundImage: this.props.slides[0].imageUrl,
            backgroundImage0Loaded: 0,
            backgroundImage1Loaded: 0,
            backgroundImage2Loaded: 0,
            backgroundImage3Loaded: 0,
            backgroundImage4Loaded: 0,
            backgroundImage5Loaded: 0,
            backgroundImage6Loaded: 0,
            isScrollOnTop: "notScrolled",
            fontLoaded: false
        };
        this.handleBackgroundImage0Load = this.handleBackgroundImage0Load.bind(this);
        this.handleBackgroundImage1Load = this.handleBackgroundImage1Load.bind(this);
        this.handleBackgroundImage2Load = this.handleBackgroundImage2Load.bind(this);
        this.handleBackgroundImage3Load = this.handleBackgroundImage3Load.bind(this);
        this.handleBackgroundImage4Load = this.handleBackgroundImage4Load.bind(this);
        this.handleBackgroundImage5Load = this.handleBackgroundImage5Load.bind(this);
        this.handleBackgroundImage6Load = this.handleBackgroundImage6Load.bind(this);
        this.onWaypointEntered = this.onWaypointEntered.bind(this);
        this.onWaypointLeft = this.onWaypointLeft.bind(this);
        this.updateFontLoadedState = this.updateFontLoadedState.bind(this);
    }

    componentDidMount() {
        this.image0 = new Image();
        this.image0.src = this.props.slides[0].imageUrl;
        this.image0.onload = this.handleBackgroundImage0Load;
        this.image1 = new Image();
        this.image1.src = this.props.slides[1].imageUrl;
        this.image1.onload = this.handleBackgroundImage1Load;
        this.image2 = new Image();
        this.image2.src = this.props.slides[2].imageUrl;
        this.image2.onload = this.handleBackgroundImage2Load;
        this.image3 = new Image();
        this.image3.src = this.props.slides[3].imageUrl;
        this.image3.onload = this.handleBackgroundImage3Load;
        this.image4 = new Image();
        this.image4.src = this.props.slides[4].imageUrl;
        this.image4.onload = this.handleBackgroundImage4Load;
        this.image5 = new Image();
        this.image5.src = this.props.slides[5].imageUrl;
        this.image5.onload = this.handleBackgroundImage5Load;
        this.image6 = new Image();
        this.image6.src = this.props.slides[6].imageUrl;
        this.image6.onload = this.handleBackgroundImage6Load;
        this.timerID = setInterval(() => this.slideChanger(), 1000);
    }

    handleBackgroundImage0Load(e) {
        this.setState({
            backgroundImage0Loaded: 1
        });
    }
    handleBackgroundImage1Load(e) {
        this.setState({
            backgroundImage1Loaded: 1
        });
    }
    handleBackgroundImage2Load(e) {
        this.setState({
            backgroundImage2Loaded: 1
        });
    }
    handleBackgroundImage3Load(e) {
        this.setState({
            backgroundImage3Loaded: 1
        });
    }
    handleBackgroundImage4Load(e) {
        this.setState({
            backgroundImage4Loaded: 1
        });
    }
    handleBackgroundImage5Load(e) {
        this.setState({
            backgroundImage5Loaded: 1
        });
    }
    handleBackgroundImage6Load(e) {
        this.setState({
            backgroundImage6Loaded: 1
        });
    }

    componentWillUnmount() {
        this.image0.onload = null;
        this.image0 = null;
        this.image1.onload = null;
        this.image1 = null;
        this.image2.onload = null;
        this.image2 = null;
        this.image3.onload = null;
        this.image3 = null;
        this.image4.onload = null;
        this.image4 = null;
        this.image5.onload = null;
        this.image5 = null;
        this.image6.onload = null;
        this.image6 = null;

        clearInterval(this.timerID);
    }

    slideChanger() {
        if (this.state.backgroundImage0Loaded) {
            let eachImageState = this.state.eachImageState + 1;
            let activeIndex = this.state.activeIndex;
            if (eachImageState == 5) {
                activeIndex = this.state.activeIndex + 1;
                eachImageState = 0;
            }
            if (activeIndex == 7) {
                activeIndex = 0;
            }
            this.setState({
                activeIndex: activeIndex,
                eachImageState: eachImageState,
                backgroundImage: this.props.slides[activeIndex].imageUrl
            });
        }
    }

    onWaypointEntered(arg) {
        this.setState({ isScrollOnTop: arg });
    }

    onWaypointLeft(arg) {
        this.setState({ isScrollOnTop: arg });
    }

    updateFontLoadedState() {
        this.setState({
            fontLoaded: !this.state.fontLoaded
        });
    }

    render() {
        let styleFadeInOut = "slideShow";
        if (this.state.eachImageState == 0) {
            styleFadeInOut = "slideShow fadeIn";
        } else if (this.state.eachImageState == 4) {
            styleFadeInOut = "slideShow fadeOut";
            if (this.state.isScrollOnTop == "notScrolled") {
                NProgress.done();
            }
        } else {
            if (this.state.isScrollOnTop == "notScrolled") {
                NProgress.configure({ parent: ".nProgressHandler" });
                NProgress.inc();
            }
            styleFadeInOut = "slideShow";
        }

        if (isIOS) {
            styleFadeInOut = styleFadeInOut.concat(" isios");
        } else {
            styleFadeInOut = styleFadeInOut.concat(" others");
        }

        let loader = null;
        let fontLoader = null;
        if (this.props.firstLoad) {
            if (this.state.backgroundImage0Loaded) {
                fontLoader = <FontLoader triggerParentUpdateFontLoadedState={this.updateFontLoadedState} />;
                loader = <Loader />;
            } else {
                fontLoader = null;
                loader = <Loader />;
            }
            if (this.state.fontLoaded) {
                fontLoader = null;
                loader = null;
                this.props.triggerParentUpdateFontLoadedStateSlider();
            }
        }

        return (
            <SliderWrapper>
                {fontLoader}
                {loader}
                <Waypoint onEnter={this.onWaypointEntered.bind(this, "notScrolled")} onLeave={this.onWaypointLeft.bind(this, "scrolled")} />
                <div className={styleFadeInOut} style={{ backgroundImage: `url(${this.state.backgroundImage})` }} />
                <style jsx>{`
                    .isios {
                        background-attachment: scroll;
                    }
                    .others {
                        background-attachment: fixed;
                    }
                    .slideShow {
                        position: relative;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                        -webkit-background-size: cover;
                        -moz-background-size: cover;
                        -o-background-size: cover;
                        -ms-background-size: cover;
                        min-height: 100%;
                        z-index: 1;
                    }
                    .fadeIn {
                        opacity: 1;
                        animation: FadeIn 1s ease-in-out;
                    }
                    .fadeOut {
                        opacity: 0;
                        animation: FadeOut 1s ease-in-out;
                    }
                    @keyframes FadeIn {
                        0% {
                            opacity: 0;
                            height: initial;
                        }
                        100% {
                            opacity: 1;
                            height: initial;
                        }
                    }
                    @keyframes FadeOut {
                        0% {
                            opacity: 1;
                            height: initial;
                        }
                        99% {
                            opacity: 0;
                            height: initial;
                        }
                        100% {
                            height: 0;
                            opacity: 0;
                            height: 0;
                        }
                    }
                `}</style>
            </SliderWrapper>
        );
    }
}
