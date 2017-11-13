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