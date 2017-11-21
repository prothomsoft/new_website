import Singlepage from '../components/singlepage'

export default class SesjaPageComponent extends React.Component {
    render() {
        
        return (
          <div>
            <Singlepage
              headTitle={'Sesja zdjęciowa Kraków'}
              headDescription={'Sesja zdjęciowa w Krakowie to atrakcje turystyczne w pięknym miejscu. Spotkajmy się, wspólnie znajdźmy chwilę, światło, kadr, zachowajmy je na zawsze.'}
              headKeywords={'sesja zdjęciowa kraków,plener ślubny w krakowie'}
              headUrl={'http://99foto.pl/sesja-zdjeciowa-krakow/'}
              componentContentName={'sesja'}
              slug={'sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja'} 
              title={'SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA - IWONA i MARCIN'} 
              date={'3 LISTOPADA 2017'} 
              tags={'PLENER STRBSKIE PLESO, POPRADZKI STAW ZDJĘCIA ŚLUBNE, SESJA ŚLUBNA SŁOWACJA'}              
              backgroundImage={'url(/static/parallax2.jpg)'}

              leadNames={'IWONA I MARCIN3'}
              leadTitle={'SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA3'}
              leadUrl={'/opactwo-cystersow-w-mogile-sesja-zdjeciowa-kasprowy'} 
              leadImage={'url(/static/blog_start.jpg)'}
              />
          </div>
        );
    }
}