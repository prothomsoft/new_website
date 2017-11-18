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
            overflow: true,
            fontLoaded: false,
            width: '0'
        }
        this.updateOverflowState = this.updateOverflowState.bind(this);
        this.updateFontLoadedState = this.updateFontLoadedState.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);        
    }

    componentWillUnmount() {        
        window.removeEventListener('resize', this.updateWindowDimensions);        
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
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
        let menuSpace = null
        
        let componentOne = null
        let componentTwo = null        

        let portfolio = <PortfolioDesktop />
        let contact = <ContactDesktop />        
        let footer = <FooterDesktop />

        let lead = <LeadDesktop  leadNames={this.props.leadNames} leadTitle={this.props.leadTitle} leadUrl={this.props.leadUrl} />

        if (this.state.fontLoaded) {
            if (this.state.width < 1160) {
                menuSpace = '70px';
                componentOne = <Slider slides={this.props.slides}></Slider>
                componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} height={'100vh'} displayTextAndArrow={false} displayArrow={true} />
                
                portfolio = <PortfolioMobile />
                contact = <ContactMobile />                
                footer = <FooterMobile />
                lead = <LeadMobile leadNames={this.props.leadNames} leadTitle={this.props.leadTitle}  leadUrl={this.props.leadUrl} />
            } else {
                menuSpace = '5px';
                componentOne = <Slider slides={this.props.slides}></Slider>
                componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} height={'100vh'} displayTextAndArrow={true} displayArrow={false} menuNames={'names'} menuTitle={'title'}/>

                portfolio = <PortfolioDesktop />
                contact = <ContactDesktop />                
                footer = <FooterDesktop />                
                lead = <LeadDesktop  leadNames={this.props.leadNames} leadTitle={this.props.leadTitle}  leadUrl={this.props.leadUrl} />
            }
        } else {
            componentTwo = <Loader />
            componentOne = <FontLoader triggerParentUpdateFontLoadedState={this.updateFontLoadedState}></FontLoader>
        }

        let overflow = null
        if (this.state.overflow) {
            overflow = 'visible';
        } else {
            overflow = 'hidden';
        }

        return (
            <Layout title={this.props.headTitle} description={this.props.headDescription} keywords={this.props.headKeywords} url={this.props.headUrl} overflow={overflow}>
                {componentOne}
                {componentTwo}
                <div style={{ height: menuSpace }}></div>
                <Element id="portfolio"></Element>
                <SectionWrapper>
                    {portfolio}
                </SectionWrapper>

                <div className="bgimg-2" style={{backgroundImage : this.props.backgroundImage}}></div>

                <SectionWrapper>
                    {contact}                    
                </SectionWrapper>

                <div className="bgimg-3" style={{backgroundImage : this.props.leadImage}}>
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