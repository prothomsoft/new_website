import Singlepage from '../components/singlepage'

export default class OfferPageComponent extends React.Component {
    render() {
        
        return (
          <div>
            <Singlepage
              headTitle={'Reportaż ślubny Kraków'}
              headDescription={'Fotograf na wesele Kraków. reportaż ślubny, zdjęcia ślubne, sesja zdjęciowa. Zapraszam do kontaktu.'}
              headKeywords={'reportaż ślubny kraków,fotograf ślubny'}
              headUrl={'http://99foto.pl/kontakt/'}
              componentContentName={'offer'}              
              slug={'sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja'} 
              title={'SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA - IWONA i MARCIN'} 
              date={'3 LISTOPADA 2017'} 
              tags={'PLENER STRBSKIE PLESO, POPRADZKI STAW ZDJĘCIA ŚLUBNE, SESJA ŚLUBNA SŁOWACJA'}
              leadImage={'url(/static/blog_start.jpg)'}
              backgroundImage={'url(/static/parallax1.jpg)'}
              />
          </div>
        );
    }
}