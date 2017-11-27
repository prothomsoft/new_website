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
              
              backgroundImage={'url(/static/wydruki_fotograf_krakow_start.jpg)'}

              leadNames={'IWONA I MARCIN'}
              leadTitle={'SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA'}
              leadUrl={'/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja'} 
              leadImage={'url(/static/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg)'}
              />
          </div>
        );
    }
}