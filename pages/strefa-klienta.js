import Singlepage from '../components/singlepage'

export default class ClientPageComponent extends React.Component {
    render() {
        
        return (
          <div>
            <Singlepage
              headTitle={'Strefa klienta'}
              headDescription={'Galeria zdjęć zabezpieczona hasłem. Wasze historie ślubne i reportaże. Dostęp tylko dla Was.'}
              headKeywords={'strefa klienta, historie ślubne'}
              headUrl={'http://99foto.pl/strefa-klienta/'}
              componentContentName={'client'}

              backgroundImage={'url(/static/sesja_zdjeciowa_dwor_tomaszowice_krakow_start.jpg)'}

              leadNames={'KAROLINA i BARTEK'}
              leadTitle={'SESJA ZDJĘCIOWA DWÓR TOMASZOWICE, OPERA, KAZIMIERZ'}
              leadUrl={'/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz'} 
              leadImage={'url(/static/sesja_zdjeciowa_dwor_tomaszowice_krakow_start.jpg)'}              
              />
          </div>
        );
    }
}