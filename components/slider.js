import Link from 'next/link'
import NProgress from 'nprogress'
import FontFaceObserver from 'fontfaceobserver'

export default class Slider extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {        
        let link = document.createElement('link')
        link.href = 'https://fonts.googleapis.com/css?family=Oswald:400&subset=latin,latin-ext'
        link.rel = 'stylesheet'
        document.head.appendChild(link)

        Promise.all([
            new FontFaceObserver('Oswald').load(),            
        ]).then(() => {
            this.props.triggerParentUpdateFontLoadedState();
        }, err => {
            console.error('Failed to load fonts!', err)            
        })
    }

    render() {
        let styleFadeInOut = 'slideShow';
        if (this.props.eachImageState == 0) {
            styleFadeInOut = 'slideShow fadeIn';
        } else if (this.props.eachImageState == 4) {
            styleFadeInOut = 'slideShow fadeOut';
            NProgress.done()
        } else {
            NProgress.configure({ parent: '.sliderWrapper' });
            NProgress.inc()
            styleFadeInOut = 'slideShow';
        }

        return (
            <div className="sliderWrapper">
                <div className={styleFadeInOut} style={{ backgroundImage: `url(${this.props.src})` }}>
                </div>

                <style jsx>{`
                .sliderWrapper {
                    height: 100vh;                    
                    z-index:1;
                }
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
                @media only screen and (max-device-width: 1024px) {
                    .slideShow {
                        background-attachment: scroll;
                    }
                }
                `}</style>
            </div>
        );
    }
}