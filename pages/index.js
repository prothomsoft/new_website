import Loader from '../components/loader'
import Layout from '../components/layout'
import Homepage from '../components/homepage'
import Footer from '../components/footer'

export default class Index extends React.Component {

  
    
        render() {
            let slides = [{
                imageUrl: "/static/parallax1.jpg",
                caption: "Image 1"
              }, {
                imageUrl: "/static/parallax2.jpg",
                caption: "Image 2"
              }, {
                imageUrl: "/static/parallax3.jpg",
                caption: "Image 3"
              }];

            return (
              <div>
                <Homepage slides={slides}/>
              </div>
            );
          }
    }