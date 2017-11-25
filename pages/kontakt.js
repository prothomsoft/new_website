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
              
              backgroundImage={'url(/static/wydruki_fotograf_krakow_page.jpg)'}

              leadNames={'IWONA i MARCIN'}
              leadTitle={'WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE'}
              leadUrl={'wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice'} 
              leadImage={'url(/static/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg)'}
              />
          </div>
        );
    }
}