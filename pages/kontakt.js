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
              
              backgroundImage={'url(/static/parallax2.jpg)'}

              leadNames={'IWONA I MARCIN3'}
              leadTitle={'SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA3'}
              leadUrl={'opactwo-cystersow-w-mogile-sesja-zdjeciowa-kasprowy'} 
              leadImage={'url(/static/blog_start.jpg)'}
              />
          </div>
        );
    }
}