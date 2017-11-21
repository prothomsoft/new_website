import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {
    let slide = [{
      imageUrl: "/static/sesja_zdjeciowa_pieskowa_skala_start.jpg"
    }];

    let images = [
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/sesja_zdjeciowa_pieskowa_skala_13.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/sesja_zdjeciowa_pieskowa_skala_14.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/sesja_zdjeciowa_pieskowa_skala_1.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/sesja_zdjeciowa_pieskowa_skala_2.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/sesja_zdjeciowa_pieskowa_skala_3.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/sesja_zdjeciowa_pieskowa_skala_4.jpg", height: 854 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/sesja_zdjeciowa_pieskowa_skala_5.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/sesja_zdjeciowa_pieskowa_skala_7.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/sesja_zdjeciowa_pieskowa_skala_9.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/sesja_zdjeciowa_pieskowa_skala_8.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/sesja_zdjeciowa_pieskowa_skala_11.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/sesja_zdjeciowa_pieskowa_skala_10.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/sesja_zdjeciowa_pieskowa_skala_12.jpg", height: 851 }
    ];

    return (
      <div>
        <Blogpage slide={slide}
          images={images}
          headTitle={'Sesja zdjęciowa Pieskowa Skała'}
          headDescription={'Sesja zdjęciowa w Pieskowej Skale - czyli serdecznie zapraszam na ciąg dalszy przygód Franka w tym pięknym miejscu. Miłego oglądania.'}
          headKeywords={'sesja zdjęciowa pieskowa skała,sesja dziecięca kraków sesja dziecięca kraków'}
          headUrl={'http://99foto.pl/sesja-zdjeciowa-pieskowa-skala/'}

          entryContentP1={'Sesję zdjęciową planowaliśmy już od dłuższego czasu. Pierwszy możliwy termin wypadał w długi weekend majowy, jednak wiadomo, że prognozy pogody były optymistyczne tylko tydzień wcześniej i tylko w Wiadomościach. Oczekiwanie na pierwszy słoneczny, ciepły dzień, w którym Franek mógł komfortowo pozować trwało długo. Jednak w końcu udało się umówić i bez większego namysłu w rozmowie telefonicznej z Piotrkiem zaproponowałem Zamek w Pieskowej Skale. Okazało się, że wpadliśmy na Tuning Show, który odbywał się w pobliżu Maczugi Herkulesa.'}
          entryContentP2={'Przecisnęliśmy się jednak sprytnie przez czarny od palonych gum asfalt, odnaleźliśmy miejsca parkingowe i zaczęliśmy wspinaczkę z wózkiem po schodach do Zamku. Sesja trwała krótko, gdyż nie chcieliśmy zmęczyć zbytnio Franka. Trochę wysiłku się mam nadzieję opłaciło, bo jak to ze zdjęciami, pamiątka będzie na całe życie. Miłego oglądania.'}

          slug={'sesja-zdjeciowa-pieskowa-skala'}

          title={'SESJA ZDJĘCIOWA PIESKOWA SKAŁA - SANDRA, PIOTR i FRANEK'}
          tags={'sesja zdjęciowa pieskowa skała,sesja dziecięca kraków sesja dziecięca kraków'}
          date={'17 maja 2017'}

          menuNames={'SANDRA, PIOTR i FRANEK'}
          menuTitle={'SESJA ZDJĘCIOWA PIESKOWA SKAŁA'}

          leadNames={'IWONA i MARCIN'}
          leadTitle={'WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE'}
          leadUrl={'/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice'} 
          leadImage={'url(/static/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg)'}
          />
      </div>
    );
  }
}