import Singlepage from '../components/singlepage'

export default class OfferPageComponent extends React.Component {
    render() {
        
        return (
          <div>
            <Singlepage
              headTitle={'Oferta fotografii ślubnej i sesji zdjęciowej'}
              headDescription={'Oferta fotografii ślubnej i sesji zdjęciowej. Kraków i bliskie okolice. Żywe kolory i autentyczne emocje. Kliknij i sprawdź moje portfolio.'}
              headKeywords={'oferta fotografii ślubnej, oferta sesji zdjęciowej, kraków, wieliczka, jordanów, miechów, tarnów, skawina'}
              headUrl={'http://99foto.pl/kontakt/'}
              componentContentName={'offer'}
              
              backgroundImage={'url(/static/wydruki_fotograf_krakow_start.jpg)'}

              leadNames={'IWONA I MARCIN'}
              leadTitle={'SESJA ZDJĘCIOWA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA'}
              leadUrl={'/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja'} 
              leadImage={'url(/static/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg)'}
              />
          </div>
        );
    }
}