import Layout from '../components/layout'
import Slider from '../components/slider'
import Footer from '../components/footer'
import Loader from '../components/loader'
import NProgress from 'nprogress'
import Menu from '../components/menu/menu'
import Scroll from 'react-scroll'
import styled from 'styled-components'
import LazyLoadWrapper from '../components/lazyLoadWrapper'

var Element = Scroll.Element;

const SectionWrapper = styled.div`
    img {
        max-width: 100%;
        height: auto;
    }

    margin: 0 auto;
    width: 1160px; 
    text-align: justify;   
    padding: 0px 10px 0px 10px;    

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
            width: '0', 
            height: '0'
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
        clearInterval(this.timerID);
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
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

        let slider = null;
        let overflow = null;
        let menu = null;
        
        if (this.state.loaded) {
            slider = <Slider src={this.props.slides[this.state.activeIndex].imageUrl} eachImageState={this.state.eachImageState} triggerParentUpdateFontLoadedState={this.updateFontLoadedState}></Slider>
            if (this.state.fontLoaded) {
                menu = <Menu triggerUpdateParentOverflowState={this.updateOverflowState} />
            }
        } else {
            slider = <Loader triggerUpdateParentOverflowState={this.updateOverflowState} />
        }
        if (this.state.overflow) {
            overflow = 'visible';
        } else {
            overflow = 'hidden';
        }

        let height=762;
        let images = '';
        if(this.state.width < 1160) {
            images = [{imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0021.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0002.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0003.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0004.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0005.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0006.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0007.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0008.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0009.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0010.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0011.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0012.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0013.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0014.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0015.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0016.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0017.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0018.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0019.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0020.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0021.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0022.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0023.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0024.jpg", height: 0}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0025.jpg", height: 0},             
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0026.jpg", height: 0}];
        } else {
            images = [{imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0021.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0002.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0003.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0004.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0005.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0006.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0007.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0008.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0009.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0010.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0011.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0012.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0013.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0014.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0015.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0016.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0017.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0018.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0019.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0020.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0021.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0022.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0023.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0024.jpg", height: 761}, 
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0025.jpg", height: 761},             
            {imageSrc: "http://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0026.jpg", height: 761}];
        }


        return (
            <Layout title='Home page title' description='Home page description' overflow={overflow}>                                
                {this.state.width}
                {slider}
                {menu}
                <Element name="portfolio"></Element>
                <SectionWrapper>
                    <LazyLoadWrapper images={images} />
                </SectionWrapper>

                <div className="bgimg-2"></div>

                <SectionWrapper>                    
                    <h1>OSTATNIO NA BLOGU</h1>
                    <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
                    <Footer property='property'>children</Footer>                    
                </SectionWrapper>

                <div className="bgimg-3">
                    <div className="caption">
                        <span className="border">Link to something on the blog...</span>
                    </div>
                </div>

                <style jsx>{`

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