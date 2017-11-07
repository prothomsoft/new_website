import Link from 'next/link'
import Layout from '../components/layout'
import Slider from '../components/slider'
import FooterDesktop from '../components/footerDesktop'
import FooterMobile from '../components/footerMobile'
import Loader from '../components/loader'
import LazyLoadWrapper from '../components/lazyLoadWrapper'
import Menu from '../components/menu/menu'
import FontLoader from '../components/fontLoader'
import NProgress from 'nprogress'
import Scroll from 'react-scroll'
import styled from 'styled-components'

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

export default class Blogpage extends React.Component {

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
                componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} hideBounceArrow={true} height={'70px'} />                
                footer = <FooterMobile property='property'>children</FooterMobile>
            } else {
                menuSpace = '5px'
                componentOne = <Slider src={this.props.slides[this.state.activeIndex].imageUrl} eachImageState={this.state.eachImageState}></Slider>
                componentTwo = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} hideBounceArrow={false} height={'100vh'} />                
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

        let images = '';
        if (this.state.width < 1160) {
            images = [{ imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0021.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0002.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0003.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0004.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0005.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0006.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0007.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0008.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0009.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0010.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0011.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0012.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0013.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0014.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0015.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0016.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0017.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0018.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0019.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0020.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0021.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0022.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0023.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0024.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0025.jpg", height: 0 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0026.jpg", height: 0 }];
        } else {
            images = [{ imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0021.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0002.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0003.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0004.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0005.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0006.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0007.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0008.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0009.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0010.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0011.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0012.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0013.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0014.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0015.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0016.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0017.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0018.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0019.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0020.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0021.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0022.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0023.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0024.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0025.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0026.jpg", height: 761 }];
        }


        return (
            <Layout title='Home page title' description='Home page description' overflow={overflow}>
                {componentOne}
                {componentTwo}
                <div style={{ height: menuSpace }}></div>
                <Element name="portfolio"></Element>
                <SectionWrapper>
                    <article>
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
                        <div>
                            <p>Tak, to był właśnie ten tydzień, długo zapowiadana pogoda, temperatura i odpowiednio pokolorowane liście. Wszystko tego dnia zapowiadało świetny plener w górach Słowacji. Zainspirowani zdjęciami kolegów fotografów, wybraliśmy się wszyscy po raz pierwszy w piękne miejsca, którymi były Popradzki Staw i Strbskie Pleso. Pierwsza miejscówka, w której nasz plan dnia podyktował nam postój to rzeka Poprad, która przecięła naszą drogę dojazdową do jeziora. Chwila niepewności i świetny widok z pewnością nie do powtórzenia już nawet następnego dnia, a co dopiero tydzień później. Ponieważ czasu do zachodu słońca było dużo, wdrapywaliśmy się przez godzinkę asfaltową drogą w miejsce, które zdecydowanie pokonuje Morskie Oko, a jest nim Popradzki Staw.</p>
                            <p>Mniej ludzi, malownicze jezioro, ogromne góry, dużo świetnych kadrów do wypatrzenia. W drodze powrotnej zrobiliśmy też kilka zdjęć w lesie. Końcówka to szukanie dwóch kamieni z kadru <Link href='http://www.marcinsosnicki.pl/'><a target="_blank">Marcina Sośnickiego</a></Link> i zachwyt nad jesienią oświetloną promieniami zachodzącego słońca. Na koniec zjedliśmy pyszny obiadek w Tatrzańskiej Łomnicy, zrelaksowani i zadowoleni wróciliśmy do naszych domów. Polecam to miejsce na plenery i mam nadzieję, że każdego roku znajdzie się jedna para, która mnie tam zabierze. Miłego oglądania.</p>
                        </div>
                    </article>

                    <LazyLoadWrapper images={images} />
                </SectionWrapper>

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
                    margin :0px          
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
