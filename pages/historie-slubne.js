import Singlepage from '../components/singlepage'

export default class HistoriaPageComponent extends React.Component {
    render() {
        
        return (
          <div>
            <Singlepage
              headTitle={'Historie ślubne TO DO'}
              headDescription={'Historie ślubne Kraków TO DO'}
              headKeywords={'historie ślubne kraków TO DO'}
              headUrl={'http://99foto.pl/sesja-zdjeciowa-krakow/'}
              componentContentName={'historia'}              
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