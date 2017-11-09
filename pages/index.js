import Homepage from '../components/homepage'

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