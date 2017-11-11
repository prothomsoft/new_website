import Link from 'next/link'
import Layout from '../components/layout'
import Slider from '../components/slider'
import FooterDesktop from '../components/footer/footerDesktop'
import FooterMobile from '../components/footer/footerMobile'
import OfferDesktop from '../components/offer/offerDesktop'
import OfferMobile from '../components/offer/offerMobile'

import ContactDesktop from '../components/contact/contactDesktop'
import ContactMobile from '../components/contact/contactMobile'

import LeadDesktop from '../components/footer/leadDesktop'
import LeadMobile from '../components/footer/leadMobile'

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


export default class Singlepage extends React.Component {

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
    }

    componentWillUnmount() {
        this.image.onerror = null;
        this.image.onload = null;
        this.image = null;
        window.removeEventListener('resize', this.updateWindowDimensions);
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
        
        let height = 762
        
        let componentOne = null
        let componentTwo = null
        let menuSpace = null
        let footer = null
        let contact = null
        let offer = null
        let lead = null

        if (this.state.fontLoaded) {
            if (this.state.width < 1160) {
                menuSpace = '40px'
                componentOne = null
                componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} hideBounceArrow={true} height={menuSpace} lead={false} />
                footer = <FooterMobile />
                contact = <ContactMobile />
                offer = <OfferMobile />
                lead = <LeadMobile />
            } else {
                menuSpace = '160px'
                componentOne = null
                componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} hideBounceArrow={true} height={menuSpace} lead={false} />
                footer = <FooterDesktop />
                contact = <ContactDesktop />
                offer = <OfferDesktop />
                lead = <LeadDesktop />
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
            <Layout title='Home page title' description='Home page description' overflow={overflow}>
                {componentOne}
                {componentTwo}
                <div style={{height:menuSpace}}></div>
                <SectionWrapper>
                    {offer}                    
                </SectionWrapper>

                <div className="bgimg-2"></div>

                <SectionWrapper>
                    {contact}                    
                </SectionWrapper>

                <div className="bgimg-3">
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
                        background-image: url(/static/blog_start.jpg);
                        min-height: 60%;
                    }
                    .bgimg-3 {
                        background-image: url(/static/blog_start.jpg);
                        min-height: 100%;
                    }
                `}</style>
            </Layout>
        )
    }
}