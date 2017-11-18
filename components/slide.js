import Link from 'next/link'
import NProgress from 'nprogress'
import styled from 'styled-components'

const SlideWrapper = styled.div`
height: 100vh;                    
z-index:1;
`;

export default class Slide extends React.Component {

    constructor(props) {
        super(props)
        this.state = {            
            backgroundImage: '',            
        }
        this.handleBackgroundImage0Load = this.handleBackgroundImage0Load.bind(this);        
    }

    componentDidMount() {
        this.image0 = new Image();
        this.image0.src = this.props.slide[0].imageUrl;
        this.image0.onload = this.handleBackgroundImage0Load;        
    }

    handleBackgroundImage0Load(e) {
        this.setState({
            backgroundImage0Loaded: 1,
            backgroundImage: this.props.slide[0].imageUrl
        });
    }

    componentWillUnmount() {        
        this.image0.onload = null;
        this.image0 = null;
    }

    render() {
        return (
            <SlideWrapper>
                <div className="slideShow fadeIn" style={{ backgroundImage: `url(${this.state.backgroundImage})` }}></div>
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
            </SlideWrapper>
        );
    }
}