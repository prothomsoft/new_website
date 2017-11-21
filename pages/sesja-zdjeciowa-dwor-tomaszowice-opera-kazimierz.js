import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {
    let slide = [{
      imageUrl: "/static/sesja_zdjeciowa_dwor_tomaszowice_krakow_start.jpg"
    }];

    let images = [
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0002.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0001.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0003.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0004.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0005.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0016.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0007.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0008.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0009.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0011.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0010.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0012.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0013.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0014.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0015.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0006.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0028.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0017.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0018.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0019.jpg", height: 806 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0020.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0021.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0023.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0022.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0024.jpg", height: 806 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0025.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0026.jpg", height: 805 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0027.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0029.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0030.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0031.jpg", height: 763 }
    ];

    return (
      <div>
        <Blogpage slide={slide}
          images={images}
          headTitle={'Sesja zdjęciowa Dwór Tomaszowice, Opera Krakowska, Kazimierz'}
          headDescription={'Serdecznie zapraszam na ostatni w tym roku jesienny i krakowski plener Karoliny i Bartka. Dwór Tomaszowice, Opera Krakowska i zakamarki Kazimierza.'}
          headKeywords={'sesja zdjęciowa dwór tomaszowice, plener ślubny kazimierz kraków'}
          headUrl={'http://99foto.pl/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz/'}

          entryContentP1={'Tak, to był właśnie ten tydzień, długo zapowiadana pogoda, temperatura i odpowiednio pokolorowane liście. Wszystko tego dnia zapowiadało świetny plener w górach Słowacji. Zainspirowani zdjęciami kolegów fotografów, wybraliśmy się wszyscy po raz pierwszy w piękne miejsca, którymi były Popradzki Staw i Strbskie Pleso. Pierwsza miejscówka, w której nasz plan dnia podyktował nam postój to rzeka Poprad, która przecięła naszą drogę dojazdową do jeziora. Chwila niepewności i świetny widok z pewnością nie do powtórzenia już nawet następnego dnia, a co dopiero tydzień później. Ponieważ czasu do zachodu słońca było dużo, wdrapywaliśmy się przez godzinkę asfaltową drogą w miejsce, które zdecydowanie pokonuje Morskie Oko, a jest nim Popradzki Staw.'}
          entryContentP2={'Mniej ludzi, malownicze jezioro, ogromne góry, dużo świetnych kadrów do wypatrzenia. W drodze powrotnej zrobiliśmy też kilka zdjęć w lesie. Końcówka to szukanie dwóch kamieni z kadru <a href="http://www.marcinsosnicki.pl" target="_blank">Marcina Sośnickiego</a> i zachwyt nad jesienią oświetloną promieniami zachodzącego słońca. Na koniec zjedliśmy pyszny obiadek w Tatrzańskiej Łomnicy, zrelaksowani i zadowoleni wróciliśmy do naszych domów. Polecam to miejsce na plenery i mam nadzieję, że każdego roku znajdzie się jedna para, która mnie tam zabierze. Miłego oglądania.'}

          slug={'sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz'}

          title={'SESJA ZDJĘCIOWA DWÓR TOMASZOWICE, OPERA, KAZIMIERZ - KAROLINA i BARTEK'}
          tags={'SESJA ZDJĘCIOWA DWÓR TOMASZOWICE, OPERA, KAZIMIERZ'}
          date={'13 LISTOPADA 2017'}

          menuNames={'KAROLINA i BARTEK'}
          menuTitle={'SESJA ZDJĘCIOWA DWÓR TOMASZOWICE, OPERA, KAZIMIERZ'}          

          leadNames={'IWONA I MARCIN'}
          leadTitle={'SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA'}
          leadUrl={'/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja'} 
          leadImage={'url(/static/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg)'}
          
          />
      </div>
    );
  }
}