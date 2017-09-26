import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'

export default () => (  
  <Layout title='Home page title' description='Home page description'>
  
    <div className="bgimg-1">
        <Header></Header>
    </div>

    <div>
        <h3>PORTFOLIO</h3>
        <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
        <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
    </div>

    <div className="bgimg-2"></div>

    <div style={{"position":"relative"}}>
        <div>
            <h3>OSTATNIO NA BLOGU</h3>
            <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
            <Footer property='property'>children</Footer>
        </div>
    </div>

    <div className="bgimg-3">
        <div className="caption">
            <span className="border">Link to something on the blog...</span>
        </div>
    </div>    

    <style jsx>{`

    h3 {
      letter-spacing: 5px;
      text-transform: uppercase;        
      color: #000;
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

    .bgimg-1, .bgimg-2, .bgimg-3 {
        position: relative;  
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

      }
      .bgimg-1 {
        background-image: url(/static/parallax1.jpg);
        min-height: 100%;
      }

      .bgimg-2 {
        background-image: url(/static/parallax2.jpg);
        min-height: 60%;
      }

      .bgimg-3 {
        background-image: url(/static/parallax3.jpg);
        min-height: 100%;
      }

      /* Turn off parallax scrolling for tablets and phones */
      @media only screen and (max-device-width: 1024px) {
          .bgimg-1, .bgimg-2, .bgimg-3 {
              background-attachment: scroll;
          }
      }

  `}</style>    
  </Layout>
)
