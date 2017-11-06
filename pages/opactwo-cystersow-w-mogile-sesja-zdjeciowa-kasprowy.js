import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
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
            <Blogpage slides={slides}/>
          </div>
        );
    }
}