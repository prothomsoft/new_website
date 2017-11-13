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

              backgroundImage={'url(/static/parallax1.jpg)'}              

              leadNames={'IWONA I MARCIN3'}
              leadTitle={'SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA3'}
              leadUrl={'opactwo-cystersow-w-mogile-sesja-zdjeciowa-kasprowy'} 
              leadImage={'url(/static/blog_start.jpg)'}
              />
          </div>
        );
    }
}