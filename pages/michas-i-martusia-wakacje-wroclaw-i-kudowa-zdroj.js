import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {
    let slide = [{
      imageUrl: "/static/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg"
    }];

    let images = [
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0001.jpg", height: 763 },      
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0024.jpg", height: 762 }
    ];

    return (
      <div>
        <Blogpage slide={slide}
          images={images}
          headTitle={'Sesja ślubna Strbskie Pleso, Popradzki Staw, Słowacja'}
          headDescription={'Iwona i Marcin w idealnie wybrany dzień. Słowackie góry Strbskie Pleso, Popradzki Staw. Zapraszam na bloga i kilka zdjęć z tej sesji plenerowej.'}
          headKeywords={'sesja ślubna słowacja,plener strbskie pleso,popradzki staw zdjęcia ślubne'}
          headUrl={'http://99foto.pl/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja/'}

          entryContentP1={'Tak, to był właśnie ten tydzień, długo zapowiadana pogoda, temperatura i odpowiednio pokolorowane liście. Wszystko tego dnia zapowiadało świetny plener w górach Słowacji. Zainspirowani zdjęciami kolegów fotografów, wybraliśmy się wszyscy po raz pierwszy w piękne miejsca, którymi były Popradzki Staw i Strbskie Pleso. Pierwsza miejscówka, w której nasz plan dnia podyktował nam postój to rzeka Poprad, która przecięła naszą drogę dojazdową do jeziora. Chwila niepewności i świetny widok z pewnością nie do powtórzenia już nawet następnego dnia, a co dopiero tydzień później. Ponieważ czasu do zachodu słońca było dużo, wdrapywaliśmy się przez godzinkę asfaltową drogą w miejsce, które zdecydowanie pokonuje Morskie Oko, a jest nim Popradzki Staw.'}
          entryContentP2={'Mniej ludzi, malownicze jezioro, ogromne góry, dużo świetnych kadrów do wypatrzenia. W drodze powrotnej zrobiliśmy też kilka zdjęć w lesie. Końcówka to szukanie dwóch kamieni z kadru <a href="http://marcinsosnicki.pl" target="_blank">Marcina Sośnickiego</a> i zachwyt nad jesienią oświetloną promieniami zachodzącego słońca. Na koniec zjedliśmy pyszny obiadek w Tatrzańskiej Łomnicy, zrelaksowani i zadowoleni wróciliśmy do naszych domów. Polecam to miejsce na plenery i mam nadzieję, że każdego roku znajdzie się jedna para, która mnie tam zabierze. Miłego oglądania.'}

          slug={'sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja'}

          title={'SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA - IWONA i MARCIN'}
          tags={'plener strbskie pleso, popradzki staw zdjęcia ślubne, sesja ślubna Słowacja'}
          date={'3 listopada 2017'}

          menuNames={'IWONA I MARCIN'}
          menuTitle={'SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA'}

          leadNames={'IWONA i MARCIN'}
          leadTitle={'WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE'}
          leadUrl={'/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice'} 
          leadImage={'url(/static/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg)'}
          />
      </div>
    );
  }
}