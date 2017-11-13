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
            <Homepage slides={slides}
            headTitle={'Fotograf ślubny Kraków'}
            headDescription={'Fotograf ślubny Kraków. Piękne zdjęcia, pełne emocji reportaże ślubne. Sprawdź moją ofertę i portfolio. Album w cenie pakietu. Serdecznie zapraszam.'}
            headKeywords={'fotograf ślubny Kraków, fotograf na wesele'}
            headUrl={'http://99foto.pl'}
            backgroundImage1={'url(/static/parallax1.jpg)'}            
            leadNames={'IWONA I MARCIN3'}
            leadTitle={'SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA3'}
            leadUrl={'opactwo-cystersow-w-mogile-sesja-zdjeciowa-kasprowy'} 
            backgroundImage2={'url(/static/parallax1.jpg)'}/>
          </div>
        );
    }
}