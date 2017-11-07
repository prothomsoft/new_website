import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
    render() {
        let slides = [{
            imageUrl: "/static/blog_start.jpg",
            caption: "Image 1"
          }];

        return (
          <div>
            <Blogpage slides={slides} 
              slug={'sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja'} 
              title={'SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA - IWONA i MARCIN'} 
              date={'3 LISTOPADA 2017'} 
              tags={'PLENER STRBSKIE PLESO, POPRADZKI STAW ZDJĘCIA ŚLUBNE, SESJA ŚLUBNA SŁOWACJA'}/>
          </div>
        );
    }
}