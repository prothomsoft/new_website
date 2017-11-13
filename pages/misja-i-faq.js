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