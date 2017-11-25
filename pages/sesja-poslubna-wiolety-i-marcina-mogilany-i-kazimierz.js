import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {
    let slide = [{
      imageUrl: "/static/sesja_poslubna_wiolety_i_marcina_mogilany_i_kazimierz_start.jpg"
    }];

    let images = [
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0024.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0001.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0002.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0003.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0004.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0005.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0006.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0007.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0008.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0009.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0010.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0011.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0012.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0013.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0014.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0015.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0016.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0017.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0018.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0019.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0020.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0022.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0023.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0025.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0026.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0027.jpg", height: 763 }
    ];

    return (
      <div>
        <Blogpage slide={slide}
          images={images}
          headTitle={'Sesja ślubna Wiolety i Marcina - Mogilany Kazimierz'}
          headDescription={'Mega wpis pięknej pary Wiolety i Marcina. Zdjęcia zrobiliśmy w parku Mogilanach i na Krakowskim Kazimierzu. Zapraszam do oglądania !!!'}
          headKeywords={'sesja ślubna kraków,plener ślubny kraków'}
          headUrl={'http://99foto.pl/sesja-poslubna-wiolety-i-marcina-mogilany-i-kazimierz/'}

          entryContentP1={'Z Wioletą i Marcinem spotkaliśmy się już w ich <a href="http://99foto.pl/wioleta-i-marcin-zdjecia-slubne-w-restauracji-victoria-rabka-zdroj" target="_blank">reportażowym wpisie</a>, dzisiaj przyszedł czas na plener! Obiecująco wyglądająca alejka drzew w położonym niedaleko Krakowa Parku w Mogilanach oraz duża ilość bezcennego podczas słonecznej pogody cienia, przekonały nas do odwiedzenia tego miejsca i wykonania właśnie tam sesji ślubnej.'}
          entryContentP2={'Po dwóch godzinach w parku przenieśliśmy się w miejskie klimaty odwiedzając Kazimierz w okolicach obleganej przez turystów Kładki Bernatki. W trakcie spaceru odwiedziliśmy też <a href="http://www.starazajezdniakrakow.pl/" target="_blank">Starą Zajezdnię</a> i <a href="http://www.studioqulinarne.pl/" target="_blank">Studio Kulinarne</a> &#8211; oba miejsca &#8222;image friendly&#8221;. Kilka plenerowych godzin spędziliśmy w bardzo miłej atmosferze i ciekawych rozmowach na różne tematy. Wioli i Marcinowi dziękuję za współpracę i zapraszam na kilka klatek z tego pleneru. Więcej zdjęć jak zwykle w strefie klienta po wpisaniu hasła z mojej wizytówki. Miłego oglądania.'}

          slug={'sesja-poslubna-wiolety-i-marcina-mogilany-i-kazimierz'}

          title={'SESJA ŚLUBNA PARK W MOGILANACH i KAZIMIERZ - WIOLETA i MARCIN'}
          tags={'sesja ślubna kraków,plener ślubny kraków'}
          date={'15 czerwca 2015'}

          menuNames={'WIOLETA i MARCIN'}
          menuTitle={'SESJA ŚLUBNA PARK W MOGILANACH i KAZIMIERZ'}

          leadNames={'IWONA I MARCIN'}
          leadTitle={'SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA'}
          leadUrl={'/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja'} 
          leadImage={'url(/static/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg)'}
          />
      </div>
    );
  }
}