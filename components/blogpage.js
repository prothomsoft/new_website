import Link from 'next/link'
import Layout from '../components/layout'
import Slide from '../components/slide'
import Loader from '../components/loader'
import LazyLoadWrapper from '../components/lazyLoadWrapper'
import Menu from '../components/menu/menu'
import FontLoader from '../components/fontLoader'
import NProgress from 'nprogress'
import Scroll from 'react-scroll'
import styled from 'styled-components'
import ContactDesktop from '../components/contact/contactDesktop'
import ContactMobile from '../components/contact/contactMobile'
import LeadDesktop from '../components/footer/leadDesktop'
import LeadMobile from '../components/footer/leadMobile'

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

export default class Blogpage extends React.Component {

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
        let overflow = null
        let componentOne = null
        let componentTwo = null
        let componentThree = null
        let menuSpace = null
        let lead = null
        let contact = null
        
                

        if (this.state.fontLoaded) {
            if (this.state.width < 1160) {
                menuSpace = '70px'
                componentOne = null
                componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} displayTextAndArrow={false} displayArrow={false} height={'70px'} />
                componentThree = <LazyLoadWrapper images={this.props.images} skipHeight={true} />
                lead = <LeadMobile leadNames={this.props.leadNames} leadTitle={this.props.leadTitle} leadUrl={this.props.leadUrl} />
                contact = <ContactMobile />                
            } else {
                menuSpace = '5px'
                componentOne = <Slide slide={this.props.slide}></Slide>
                componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} displayTextAndArrow={true} displayArrow={false} height={'100vh'} menuNames={this.props.menuNames} menuTitle={this.props.menuTitle} menuButton={'ZOBACZ ZDJĘCIA'} />
                componentThree = <LazyLoadWrapper images={this.props.images} skipHeight={false} />
                lead = <LeadDesktop leadNames={this.props.leadNames} leadTitle={this.props.leadTitle} leadUrl={this.props.leadUrl} />
                contact = <ContactDesktop />                
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
                <Element id="portfolio"></Element>
                <SectionWrapper>
                    <article>
                        {this.props.page}
                        <header className="header">
                            <h1>
                                <Link as={`/${this.props.slug}`} href={`/${this.props.slug}`}>
                                    <a className="postTitle">{this.props.title}</a>
                                </Link>
                            </h1>
                        </header>
                        <div className="entryMeta">
                            {this.props.date}, TAGI: <span style={{ color: '#FFFFFF' }}>{this.props.tags}</span>
                        </div>
                        <div className="entryContent">
                            <p dangerouslySetInnerHTML={{ __html: this.props.entryContentP1 }}/>
                            <p dangerouslySetInnerHTML={{ __html: this.props.entryContentP2 }}/>
                        </div>
                    </article>
                    {componentThree}                    
                </SectionWrapper>

                <SectionWrapper>
                    {contact}
                </SectionWrapper>

                <div className="bgimg-3" style={{ backgroundImage: this.props.leadImage }}>
                    {lead}
                </div>

                <style jsx>{`

                .header h1 {
                    padding: 0 0 10px 0;
                    margin :0px          
                }

                .entryMeta {
                    border-bottom: 1px solid #262626;
                    border-top: 1px solid #262626;
                    margin-bottom: 10px;
                    text-transform: uppercase;
                    padding:6px 0 6px 0;
                    font-family: 'Oswald';
                    font-size: 16px;        
                }

                .entryContent {
                    font-family: 'Oswald';
                    font-size: 16px;
                }

                .bgimg-3 {
                    position: relative;  
                    background-attachment: fixed;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                
                .bgimg-3 {                    
                    min-height: 100%;                    
                }
            `}</style>
            </Layout>
        )
    }
}

Blogpage.getInitialProps = async function({ query }) {    
    const page = parseInt(query.page)
    return {
    page: page
    }
}  