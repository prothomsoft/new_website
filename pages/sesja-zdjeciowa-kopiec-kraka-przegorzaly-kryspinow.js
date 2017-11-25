import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {
    let slide = [{
      imageUrl: "/static/sesja_zdjeciowa_kopiec_kraka_przegorzaly_kryspinow_start.jpg"
    }];

    let images = [
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/sesja_zdjeciowa_kopiec_kraka_0036.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/sesja_zdjeciowa_kopiec_kraka_0041.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/sesja_zdjeciowa_kopiec_kraka_0060.jpg", height: 785 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/sesja_zdjeciowa_kopiec_kraka_0044.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/sesja_zdjeciowa_kopiec_kraka_0040.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/sesja_zdjeciowa_kopiec_kraka_0056.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/sesja_zdjeciowa_kopiec_kraka_0038.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/sesja_zdjeciowa_kopiec_kraka_0047_1.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/sesja_zdjeciowa_kopiec_kraka_0042.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/sesja_zdjeciowa_kopiec_kraka_0043.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/sesja_zdjeciowa_kopiec_kraka_0048.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/sesja_zdjeciowa_kopiec_kraka_0039.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/sesja_zdjeciowa_kopiec_kraka_0045_1.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/sesja_zdjeciowa_kopiec_kraka_0046.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/sesja_zdjeciowa_kopiec_kraka_0049_1.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/sesja_zdjeciowa_kopiec_kraka_0050.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/sesja_zdjeciowa_kopiec_kraka_0058.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/sesja_zdjeciowa_kopiec_kraka_0051.jpg", height: 566 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/sesja_zdjeciowa_kopiec_kraka_0055.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/sesja_zdjeciowa_kopiec_kraka_0052.jpg", height: 301 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/sesja_zdjeciowa_kopiec_kraka_0053.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/sesja_zdjeciowa_kopiec_kraka_0057.jpg", height: 872 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/sesja_zdjeciowa_kopiec_kraka_0059.jpg", height: 763 }
    ];

    return (
      <div>
        <Blogpage slide={slide}
          images={images}
          headTitle={'Sesja zdjęciowa Kopiec Kraka, Przegorzały, Kryspinów'}
          headDescription={'Natalia i Tomasz na plener ślubny wybrali Kopiec Krakusa na Krakowskim Podgórzu, Zamek w Przegorzałach i zachód słońca nad jeziorem w Kryspinowie.'}
          headKeywords={'kopiec kraka,zamek przegorzały,sesja zdjęciowa kryspinów'}
          headUrl={'http://99foto.pl/sesja-zdjeciowa-kopiec-kraka-przegorzaly-kryspinow/'}

          entryContentP1={'Natalia i Tomasz na plener ślubny wybrali Kopiec Krakusa na Krakowskim Podgórzu, Zamek w Przegorzałach i zachód słońca nad jeziorem w Kryspinowie. Pomimo, że miejsca te odwiedzałem nie pierwszy raz to starałem się wymazać z mojej pamięci istniejące już kadry i skupić się na poszukiwaniu nowych, jeszcze nie odkrytych miejsc. W pobliżu Kopca znajduje się również kamieniołom Liban, który był niegdyś karnym obozem pracy. Miejsce dobre na industrialną sesję narzeczeńską, ale kompletnie nieużyteczne dla Panny Młodej w białej sukni ślubnej.'}
          entryContentP2={'Pogoda tego dnia była świetna, niebieskie niebo i białe chmurki bardzo pomagały. Restauracja u Ziyada była pełna gości, którzy popijając kawkę podziwiali piękne widoki z restauracyjnego tarasu. Wpadł nowy kadr w tym miejscu, z którego jestem bardzo zadowolony. Plener dokończyliśmy w Kryspinowie delektując się ostatnimi promieniami zachodzącego słońca. Myślę, że wszyscy spędziliśmy miłe popołudnie w fajnych miejscach, dobrych humorach i przy świetnej pogodzie. Zapraszam na zdjęcia z tej wyprawy plenerowej i życzę miłego oglądania.'}

          slug={'sesja-zdjeciowa-kopiec-kraka-przegorzaly-kryspinow'}

          title={'SESJA ZDJĘCIOWA KOPIEC KRAKA, PRZEGORZAŁY, KRYSPINÓW - NATALIA i TOMASZ'}
          tags={'kopiec kraka,zamek przegorzały,sesja zdjęciowa kryspinów'}
          date={'14 czerwca 2017'}

          menuNames={'NATALIA i TOMASZ'}
          menuTitle={'SESJA ZDJĘCIOWA KOPIEC KRAKA, PRZEGORZAŁY, KRYSPINÓW'}

          leadNames={'KINGA i MACIEK'}
          leadTitle={'DEKORACJA SALI WESELNEJ W STYLU RUSTYKALNYM, OSP ZAWADA'}
          leadUrl={'/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada'} 
          leadImage={'url(/static/dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.jpg)'}
          />
      </div>
    );
  }
}