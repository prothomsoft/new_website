import Link from 'next/link'
import Layout from '../components/layout'
import Slider from '../components/slider'
import Loader from '../components/loader'
import Menu from '../components/menu/menu'
import Scroll from 'react-scroll'
import styled from 'styled-components'
import LazyLoadWrapper from '../components/lazyLoadWrapper'
import FontLoader from '../components/fontLoader'
import ContactDesktop from '../components/contact/contactDesktop'
import ContactMobile from '../components/contact/contactMobile'
import LeadDesktop from '../components/footer/leadDesktop'
import LeadMobile from '../components/footer/leadMobile'
import PortfolioDesktop from '../components/portfolio/portfolioDesktop'
import PortfolioMobile from '../components/portfolio/portfolioMobile'
import PortfolioTextDesktop from '../components/portfolio/portfolioTextDesktop'
import PortfolioTextMobile from '../components/portfolio/portfolioTextMobile'

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
        let menuSpace = null
        
        let componentOne = null
        let componentTwo = null        

        let portfolio = <PortfolioDesktop />
        let portfolioText = <PortfolioTextDesktop />
        let contact = <ContactDesktop />        
        
        let lead = <LeadDesktop  leadNames={this.props.leadNames} leadTitle={this.props.leadTitle} leadUrl={this.props.leadUrl} />

        if (this.state.fontLoaded) {
            if (this.state.width < 1160) {
                menuSpace = '70px';
                componentOne = <Slider slides={this.props.slides}></Slider>
                componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} height={'100vh'} displayTextAndArrow={false} displayArrow={true} />                
                portfolio = <PortfolioMobile />
                portfolioText = <PortfolioTextMobile />
                contact = <ContactMobile />                
                lead = <LeadMobile leadNames={this.props.leadNames} leadTitle={this.props.leadTitle}  leadUrl={this.props.leadUrl} />
            } else {
                menuSpace = '5px';
                componentOne = <Slider slides={this.props.slides}></Slider>
                componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} height={'100vh'} displayTextAndArrow={false} displayArrow={true} />
                portfolio = <PortfolioDesktop />
                portfolioText = <PortfolioTextDesktop />
                contact = <ContactDesktop />                                
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
                    {portfolioText}
                </SectionWrapper>

                <SectionWrapper>
                    {contact}                    
                </SectionWrapper>

                <div className="bgimg-3" style={{backgroundImage : this.props.leadImage}}>
                    {lead}                    
                </div>

                <style jsx>{`
                article {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;                        
                    font-family: 'Oswald';
                    width: 1140px;                
                }
                p {
                    font-size: 16px;
                    margin: 10px 0;
                    text-align: justify;
                    padding: 0 20px 0 20px;
                }                
                                
                .quote-title::before,
                .quote-title::after {
                    content: '';
                    display: block;
                    border: 1px solid #33B59A;                    
                }
                
                .quote-title {                
                    display: flex;
                    align-items: center;
                    color: #FFFFFF;
                    padding: 10px 0 10px 0;
                }
                
                .quote-title::before,
                .quote-title::after {
                    flex-grow: 1;
                    margin: 0 20px;
                }  
                .bgimg-2, .bgimg-3 {
                    position: relative;  
                    background-attachment: fixed;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                .bgimg-2 {                    
                    min-height: 70%;
                }

                .bgimg-3 {                    
                    min-height: 100%;
                }
                `}</style>
            </Layout>
        )
    }
}
