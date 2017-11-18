import Link from 'next/link'
import NProgress from 'nprogress'
import styled from 'styled-components'

const SliderWrapper = styled.div`
height: 100vh;                    
z-index:1;
`;

export default class Slider extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            eachImageState: 0,
            backgroundImage: this.props.slides[0].imageUrl,
            backgroundImage0Loaded: 0,
            backgroundImage1Loaded: 0,
            backgroundImage2Loaded: 0
        }
        this.handleBackgroundImage0Load = this.handleBackgroundImage0Load.bind(this);
        this.handleBackgroundImage1Load = this.handleBackgroundImage1Load.bind(this);
        this.handleBackgroundImage2Load = this.handleBackgroundImage2Load.bind(this);
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

    componentWillUnmount() {        
        this.image0.onload = null;
        this.image0 = null;
        this.image1.onload = null;
        this.image1 = null;
        this.image2.onload = null;
        this.image2 = null;
        clearInterval(this.timerID);
    }

    slideChanger() {
        if (this.state.backgroundImage0Loaded && this.state.backgroundImage1Loaded && this.state.backgroundImage2Loaded) {
            let eachImageState = this.state.eachImageState + 1;
            let activeIndex = this.state.activeIndex;
            if (eachImageState == 5) {
                activeIndex = this.state.activeIndex + 1;
                eachImageState = 0;
            }
            if (activeIndex == 3) {
                activeIndex = 0;
            }
            this.setState({
                activeIndex: activeIndex,
                eachImageState: eachImageState,
                backgroundImage: this.props.slides[activeIndex].imageUrl
            });
        }
    }

    

    render() {
        let styleFadeInOut = 'slideShow';
        if (this.state.eachImageState == 0) {
            styleFadeInOut = 'slideShow fadeIn';
        } else if (this.state.eachImageState == 4) {
            styleFadeInOut = 'slideShow fadeOut';
            NProgress.done()
        } else {
            NProgress.configure({ parent: '.nProgressHandler' });
            NProgress.inc()
            styleFadeInOut = 'slideShow';
        }

        return (
            <SliderWrapper>
                <div className={styleFadeInOut} style={{ backgroundImage: `url(${this.state.backgroundImage})` }}></div>
                <style jsx>{`                
                .slideShow {
                    position: relative;  
                    background-attachment: fixed;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    min-height: 100%;
                    z-index:1;
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