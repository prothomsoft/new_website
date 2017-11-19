import Link from 'next/link'
import Layout from '../components/layout'
import Loader from '../components/loader'
import NProgress from 'nprogress'
import Menu from '../components/menu/menu'
import Scroll from 'react-scroll'
import styled from 'styled-components'
import LazyLoadWrapper from '../components/lazyLoadWrapper'
import FontLoader from '../components/fontLoader'

import ContactDesktop from '../components/contact/contactDesktop'
import ContactMobile from '../components/contact/contactMobile'
import LeadDesktop from '../components/footer/leadDesktop'
import LeadMobile from '../components/footer/leadMobile'
import OfferDesktop from '../components/offer/offerDesktop'
import OfferMobile from '../components/offer/offerMobile'
import SlubDesktop from '../components/slub/slubDesktop'
import SlubMobile from '../components/slub/slubMobile'
import SesjaDesktop from '../components/sesja/sesjaDesktop'
import SesjaMobile from '../components/sesja/sesjaMobile'
import MisjaDesktop from '../components/misja/misjaDesktop'
import MisjaMobile from '../components/misja/misjaMobile'
import HistoriaDesktop from '../components/historia/historiaDesktop'
import HistoriaMobile from '../components/historia/historiaMobile'


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


export default class Singlepage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            eachImageState: 0,
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
        let overflow = null
        let componentOne = null
        let componentTwo = null
        let componentContent = null
        let menuSpace = null        
        let contact = null        
        let lead = null

        if(this.props.componentContentName == 'offer') {
            componentContent = <OfferDesktop />
        }
        if(this.props.componentContentName == 'slub') {
            componentContent = <SlubDesktop />
        }
        if(this.props.componentContentName == 'sesja') {
            componentContent = <SesjaDesktop />
        }
        if(this.props.componentContentName == 'misja') {
            componentContent = <MisjaDesktop />
        }
        if(this.props.componentContentName == 'historia') {
            componentContent = <HistoriaDesktop />
        }

        if (this.state.fontLoaded) {
            if (this.state.width < 1160) {
                menuSpace = '40px'
                componentOne = null
                componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} height={menuSpace} displayTextAndArrow={false} displayArrow={false} />                
                contact = <ContactMobile />
                if(this.props.componentContentName == 'offer') {
                    componentContent = <OfferMobile />
                }
                if(this.props.componentContentName == 'slub') {
                    componentContent = <SlubMobile />
                }
                if(this.props.componentContentName == 'sesja') {
                    componentContent = <SesjaMobile />
                }
                if(this.props.componentContentName == 'misja') {
                    componentContent = <MisjaMobile />
                }
                if(this.props.componentContentName == 'historia') {
                    componentContent = <HistoriaMobile />
                }
                lead = <LeadMobile leadNames={this.props.leadNames} leadTitle={this.props.leadTitle}  leadUrl={this.props.leadUrl} />
            } else {
                menuSpace = '160px'
                componentOne = null
                componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} height={menuSpace}  displayTextAndArrow={false} displayArrow={false} />                
                contact = <ContactDesktop />
                if(this.props.componentContentName == 'offer') {
                    componentContent = <OfferDesktop />
                }
                if(this.props.componentContentName == 'slub') {
                    componentContent = <SlubDesktop />
                }
                if(this.props.componentContentName == 'sesja') {
                    componentContent = <SesjaDesktop />
                }
                if(this.props.componentContentName == 'misja') {
                    componentContent = <MisjaDesktop />
                }
                if(this.props.componentContentName == 'historia') {
                    componentContent = <HistoriaDesktop />
                }
                lead = <LeadDesktop leadNames={this.props.leadNames} leadTitle={this.props.leadTitle}  leadUrl={this.props.leadUrl} />
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
            <Layout title={this.props.headTitle} description={this.props.headDescription} keywords={this.props.headKeywords} url={this.props.headUrl} overflow={overflow}>
                {componentOne}
                {componentTwo}
                <div style={{ height: menuSpace }}></div>
                <SectionWrapper>{componentContent}</SectionWrapper>
                <div className="bgimg-2" style={{ backgroundImage: this.props.backgroundImage }}></div>
                <SectionWrapper>{contact}</SectionWrapper>
                <div className="bgimg-3" style={{ backgroundImage: this.props.leadImage }}>{lead}</div>
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