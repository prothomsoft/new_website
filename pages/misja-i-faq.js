import Singlepage from '../components/singlepage'

export default class MisjaPageComponent extends React.Component {
    render() {
        
        return (
          <div>
            <Singlepage
              headTitle={'Plener ślubny Kraków'}
              headDescription={'Fotograf ślubny z Krakowa. Zapraszam do zapoznania się z portfolio i skorzystania z mojej oferty. Gwarantuję wysokość jakość usług i konkurencyjne ceny.'}
              headKeywords={'sesja zdjęciowa kraków,fotograf na wesele kraków'}
              headUrl={'http://99foto.pl/misja-i-faq/'}
              componentContentName={'misja'} 
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