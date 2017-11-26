import Singlepage from '../components/singlepage'

export default class ClientPageComponent extends React.Component {
    render() {
        
        return (
          <div>
            <Singlepage
              headTitle={'Strefa klienta TO DO'}
              headDescription={'Strefa klienta Kraków TO DO'}
              headKeywords={'strefa klienta kraków TO DO'}
              headUrl={'http://99foto.pl/strefa-klienta/'}
              componentContentName={'client'}

              backgroundImage={'url(/static/sesja_zdjeciowa_dwor_tomaszowice_krakow_start.jpg)'}

              leadNames={'KAROLINA i BARTEK'}
              leadTitle={'SESJA ZDJĘCIOWA DWÓR TOMASZOWICE, OPERA, KAZIMIERZ'}
              leadUrl={'sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz'} 
              leadImage={'url(/static/sesja_zdjeciowa_dwor_tomaszowice_krakow_start.jpg)'}              
              />
          </div>
        );
    }
}