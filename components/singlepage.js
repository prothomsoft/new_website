import Link from 'next/link'
import Layout from '../components/layout'
import Slider from '../components/slider'
import FooterDesktop from '../components/footerDesktop'
import FooterMobile from '../components/footerMobile'
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

        if (this.state.fontLoaded) {
            if (this.state.width < 1160) {
                menuSpace = '70px'
                componentOne = null
                componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} hideBounceArrow={true} height={menuSpace} />
                footer = <FooterMobile property='property'>children</FooterMobile>
            } else {
                menuSpace = '180px'
                componentOne = null
                componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} hideBounceArrow={true} height={menuSpace} />
                footer = <FooterDesktop property='property'>children</FooterDesktop>
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

                    <article>
                        <header className="header">
                            <h1>OFERTA FOTOGRAFII ŚLUBNEJ</h1>
                        </header>
                    
                        <div>
                            <p>Reportaż w formie zdjęć obejmujący:</p>
                            <ul>
                            <li>przygotowania, błogosławieństwo</li>
                            <li>ceremonię w kościele lub USC</li>
                            <li>przyjęcie weselne do oczepin włącznie (do godz. 1.00)</li>
                            <li>sesję poślubną w wybranym dniu po ślubie</li>
                            </ul>
                            
                            <p>Otrzymujecie:</p>
                            <ul>
                            <li>fotoksiążkę - 120 stron w twardej oprawie, format 30x30cm - około 350 zdjęć</li>
                            <li>450 zdjęć na płycie DVD w etui - wszystkie poddane obróbce graficznej, w pełnej rozdzielczości 3520px</li>
                            <li>prezentację zdjęć ślubnych na płycie DVD w etui</li>
                            <li>dojazd w dniu ślubu GRATIS</li>
                            <li>internetową galerię zdjęć w strefie klienta zabezpieczoną hasłem (zdjęcia dostępne dla oglądających przez rok po ślubie)</li>						
                            </ul>
                        </div>                
                    
                    </article>
                    
                </SectionWrapper>

                <div className="bgimg-2"></div>

                <SectionWrapper>
                    {footer}
                </SectionWrapper>

                <div className="bgimg-3">
                    <div className="caption">
                        <span className="border">Link to something on the blog...</span>
                    </div>
                </div>

                <style jsx>{`
                .header h1 {
                    padding: 0 0 10px 0;
                    margin :0px;
                    text-align: center;
                    color: #FFF;
                }

                .entryMeta {
                    border-bottom: 1px solid #262626;
                    border-top: 1px solid #262626;
                    margin-bottom: 10px;
                    text-transform: uppercase;
                    padding:10px 0 10px 0;                
                }

                .postTitle:hover {
                    text-decoration: underline;
                }

                .img-responsive {
                    display:block;
                    height:auto;
                    max-width:100%;
                }

                .caption {
                    position: absolute;
                    left: 0;
                    top: 50%;
                    width: 100%;
                    text-align: center;
                    color: #000;
                }

                .caption span.border {
                    background-color: #FFF;
                    color: #000;
                    font-size: 12px;
                    letter-spacing: 10px;
                }

                .bgimg-2, .bgimg-3 {
                    position: relative;  
                    background-attachment: fixed;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                
                .bgimg-2 {
                    background-image: url(/static/parallax3.jpg);
                    min-height: 60%;
                }

                .bgimg-3 {
                    background-image: url(/static/parallax2.jpg);
                    min-height: 100%;
                }
            `}</style>
            </Layout>
        )
    }
}