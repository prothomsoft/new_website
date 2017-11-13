import Link from 'next/link'
import Layout from '../components/layout'
import Slider from '../components/slider'

import FooterDesktop from '../components/footer/footerDesktop'
import FooterMobile from '../components/footer/footerMobile'

import ContactDesktop from '../components/contact/contactDesktop'
import ContactMobile from '../components/contact/contactMobile'

import LeadDesktop from '../components/footer/leadDesktop'
import LeadMobile from '../components/footer/leadMobile'

import PortfolioDesktop from '../components/portfolio/portfolioDesktop'
import PortfolioMobile from '../components/portfolio/portfolioMobile'

import Loader from '../components/loader'
import NProgress from 'nprogress'
import Menu from '../components/menu/menu'
import Scroll from 'react-scroll'
import styled from 'styled-components'
import LazyLoadWrapper from '../components/lazyLoadWrapper'
import FontLoader from '../components/fontLoader'

var Element = Scroll.Element;

const SectionWrapper = styled.div`
    img {
        max-width: 100%;
        height: auto;
    }

    margin: 0 auto;
    width: 1160px; 
    text-align: justify;   
    padding: 20px 10px 0px 10px;    

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

export default class Homepage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            activeIndex: 0,
            eachImageState: 0,
            overflow: false,
            fontLoaded: false,
            width: '0'
        }
        this.handleLoad = this.handleLoad.bind(this);
        this.updateOverflowState = this.updateOverflowState.bind(this);
        this.updateFontLoadedState = this.updateFontLoadedState.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.image = new Image();
        this.image.src = this.props.slides[0].imageUrl;
        this.image.onload = this.handleLoad;
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        this.timerID = setInterval(() => this.slideChanger(), 1000);
    }

    componentWillUnmount() {
        this.image.onerror = null;
        this.image.onload = null;
        this.image = null;
        window.removeEventListener('resize', this.updateWindowDimensions);
        clearInterval(this.timerID);
    }

    slideChanger() {
        if (this.state.loaded) {
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
                eachImageState: eachImageState
            });
        }
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }

    handleLoad(e) {
        this.setState({
            loaded: true,
            overflow: true
        });
    }

    updateOverflowState() {
        this.setState({
            overflow: !this.state.overflow
        });
    }

    updateFontLoadedState() {
        this.setState({
            fontLoaded: !this.state.fontLoaded
        });
    }

    render() {

        let slider = null
        let overflow = null
        
        let componentOne = null
        let componentTwo = null
        let menuSpace = null

        let portfolio = null
        let contact = null        
        let footer = null
        
        let lead = null

        if (this.state.fontLoaded) {
            if (this.state.width < 1160) {
                menuSpace = '70px';
                componentOne = <Slider src={this.props.slides[this.state.activeIndex].imageUrl} eachImageState={this.state.eachImageState}></Slider>
                componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} hideBounceArrow={false} height={'100vh'} lead={false}/>                                
                
                portfolio = <PortfolioMobile />
                contact = <ContactMobile />                
                footer = <FooterMobile />
                lead = <LeadMobile leadNames={this.props.leadNames} leadTitle={this.props.leadTitle}  leadUrl={this.props.leadUrl}/>
            } else {
                menuSpace = '5px';
                componentOne = <Slider src={this.props.slides[this.state.activeIndex].imageUrl} eachImageState={this.state.eachImageState} lead={false}></Slider>
                componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} hideBounceArrow={false} height={'100vh'} lead={false} />

                portfolio = <PortfolioDesktop />
                contact = <ContactDesktop />                
                footer = <FooterDesktop />                
                lead = <LeadDesktop  leadNames={this.props.leadNames} leadTitle={this.props.leadTitle}  leadUrl={this.props.leadUrl}/>
            }
        } else {
            componentTwo = <Loader />
            componentOne = <FontLoader triggerParentUpdateFontLoadedState={this.updateFontLoadedState}></FontLoader>
        }

        if (this.state.overflow) {
            overflow = 'visible';
        } else {
            overflow = 'hidden';
        }

        return (
            <Layout title={this.props.title} description={this.props.description} keywords={this.props.keywords} url={this.props.url} overflow={overflow}>
                {componentOne}
                {componentTwo}
                <div style={{ height: menuSpace }}></div>
                <Element id="portfolio"></Element>
                <SectionWrapper>
                    {portfolio}
                </SectionWrapper>

                <div className="bgimg-2" style={{backgroundImage : this.props.backgroundImage1}}></div>

                <SectionWrapper>
                    {contact}                    
                </SectionWrapper>

                <div className="bgimg-3" style={{backgroundImage : this.props.backgroundImage2}}>
                    {lead}                    
                </div>

                <style jsx>{`
                .bgimg-2, .bgimg-3 {
                    position: relative;  
                    background-attachment: fixed;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                .bgimg-2 {                    
                    min-height: 60%;
                }

                .bgimg-3 {                    
                    min-height: 100%;
                }
                `}</style>
            </Layout>
        )
    }
}