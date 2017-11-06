import Layout from '../components/layout'
import Slider from '../components/slider'
import Footer from '../components/footer'
import Loader from '../components/loader'
import NProgress from 'nprogress'
import Menu from '../components/menu/menu'
import Scroll from 'react-scroll'
import styled from 'styled-components'

var Element = Scroll.Element;

const SectionWrapper = styled.div`
    margin: 0 auto;
    width: 1160px; 
    text-align: justify;   
    padding: 0px 10px 0px 10px;
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
            fontLoaded: false
        }
        this.handleLoad = this.handleLoad.bind(this);
        this.updateOverflowState = this.updateOverflowState.bind(this);
        this.updateFontLoadedState = this.updateFontLoadedState.bind(this);
    }

    componentDidMount() {
        this.image = new Image();
        this.image.src = this.props.slides[0].imageUrl;
        this.image.onload = this.handleLoad;        
        this.timerID = setInterval(() => this.slideChanger(), 1000);
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

    componentWillUnmount() {
        this.image.onerror = null;
        this.image.onload = null;
        this.image = null;
        clearInterval(this.timerID);
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
        return (
            <Layout title='Home page title' description='Home page description' overflow={overflow}>
                {slider}
                {menu}
                <Element name="portfolio"></Element>
                <SectionWrapper>
                    <h1>OPACTWO CYSTERSÓW W MOGILE, SESJA ZDJĘCIOWA KASPROWY - ANETA i DAMIAN</h1>
                    <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
                    <img src="/static/parallax2.jpg" className="img-responsive" />
                    <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
                    <img src="/static/parallax3.jpg" className="img-responsive" />
                    <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
                    
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