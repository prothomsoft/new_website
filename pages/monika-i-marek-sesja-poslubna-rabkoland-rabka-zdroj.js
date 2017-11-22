import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {
    let slide = [{
      imageUrl: "/static/monika_i_marek_sesja_poslubna_rabkoland_rabka_zdroj_start.jpg"
    }];

    let images = [
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rabkoland_0008.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rabkoland_0001.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rabkoland_0002.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rabkoland_0003.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rabkoland_0004.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rabkoland_0014.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rabkoland_0005.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rabkoland_0006.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rabkoland_0007.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rabkoland_0011.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rabkoland_0021.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rabkoland_0009.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rabkoland_0013.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rabkoland_0012.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rabkoland_0015.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rabkoland_0016.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rabkoland_0017.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rabkoland_0018.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rabkoland_0020.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rabkoland_0019.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rabkoland_0022.jpg", height: 762 }
    ];

    return (
      <div>
        <Blogpage slide={slide}
          images={images}
          headTitle={'Sesja ślubna Rabkoland - Rabka Zdrój'}
          headDescription={'Czy magiczne miasteczko Rabkoland to miejsce odpowiednie na sesję poślubną? Koniecznie sprawdźcie na moim blogu. Zapraszam w imieniu Marka i Moniki.'}
          headKeywords={'plener poślubny rabkoland,zdjęcia ślubne wesołe miasteczko,fotograf na wesele rabka zdrój'}
          headUrl={'http://99foto.pl/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja/'}

          entryContentP1={'Monikę i Marka poznaliście już na <a href="http://99foto.pl/monika-i-marek-sesja-narzeczenska-zawadka-tokarnia-jordanow/" target="_blank">sesji narzeczeńskiej</a> w Zawadce, przypominam miejscu idealnym na wycieczkę rowerową i <a href="http://99foto.pl/monika-i-marek-zdjecia-slubne-dworek-fantazja-skomielna-biala/" target="_blank">ślubie</a>, który odbył się w Dworku Fantazja w Skomielnej Białej. Plener poślubny początkowo planowaliśmy zrobić w <a href="http://skansen.bystra-sidzina.net/" target="_blank">Skansenie Bystra-Sidzina</a>, ale Monika zgodziła się na moją propozycję i w poszukiwaniu kolorów wybraliśmy się do <a href="http://www.rabkoland.pl/" target="_blank">Rabkolandu</a>.'}
          entryContentP2={'Kilka minut przed wejściem na plac zabaw odbyliśmy jeszcze sentymentalną podróż do Dworku Fantazja, gdzie po starej znajomości wykorzystaliśmy równie jak dworek fantyzyjny ogród. Humory dopisywały i była to sesja, na której bardzo się razem pośmialiśmy. Dobre humory Marka i Moni widać też na zdjęciach, a niedzielne popołudnie zostało dobrze wykorzystane. Miłego oglądania.'}

          slug={'sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja'}

          title={'SESJA ŚLUBNA RABKOLAND - RABKA ZDRÓJ - MONIKA i MAREK'}
          tags={'plener poślubny rabkoland,zdjęcia ślubne wesołe miasteczko,fotograf na wesele rabka zdrój'}
          date={'22 września 2015'}

          menuNames={'MONIKA i MAREK'}
          menuTitle={'SESJA ŚLUBNA RABKOLAND - RABKA ZDRÓJ'}

          leadNames={'IWONA i MARCIN'}
          leadTitle={'WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE'}
          leadUrl={'/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice'} 
          leadImage={'url(/static/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg)'}
          />
      </div>
    );
  }
}