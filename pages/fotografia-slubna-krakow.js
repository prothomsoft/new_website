import Singlepage from '../components/singlepage'

export default class SlubPageComponent extends React.Component {
    render() {
        
        return (
          <div>
            <Singlepage
              headTitle={'Fotografia ślubna Kraków'}
              headDescription={'Fotografia ślubna to trójkąt zależności pomiędzy chwilą, światłem i kadrem. Chwilę tworzą ludzie, światło daje kontekst, kadr to poczucie estetyki fotografa.'}
              headKeywords={'fotografia ślubna kraków,fotograf ślubny kraków'}
              headUrl={'http://99foto.pl/fotografia-slubna-krakow/'}
              componentContentName={'slub'}              
              
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