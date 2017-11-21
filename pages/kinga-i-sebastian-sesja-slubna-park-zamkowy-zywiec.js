import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {
    let slide = [{
      imageUrl: "/static/kinga_i_sebastian_sesja_slubna_park_zamkowy_zywiec_start.jpg"
    }];

    let images = [
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/plener_slubny_park_zamkowy_zywiec_0005.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/plener_slubny_park_zamkowy_zywiec_0001.jpg", height: 852 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/plener_slubny_park_zamkowy_zywiec_0002.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/plener_slubny_park_zamkowy_zywiec_0003.jpg", height: 852 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/plener_slubny_park_zamkowy_zywiec_0004.jpg", height: 327 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/plener_slubny_park_zamkowy_zywiec_0006.jpg", height: 852 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/plener_slubny_park_zamkowy_zywiec_0007.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/plener_slubny_park_zamkowy_zywiec_0008.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/plener_slubny_park_zamkowy_zywiec_0009.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/plener_slubny_park_zamkowy_zywiec_0010.jpg", height: 852 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/plener_slubny_park_zamkowy_zywiec_0011.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/plener_slubny_park_zamkowy_zywiec_0012.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/plener_slubny_park_zamkowy_zywiec_0018.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/plener_slubny_park_zamkowy_zywiec_0013.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/plener_slubny_park_zamkowy_zywiec_0014.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/plener_slubny_park_zamkowy_zywiec_0015.jpg", height: 852 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/plener_slubny_park_zamkowy_zywiec_0016.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/plener_slubny_park_zamkowy_zywiec_0017.jpg", height: 805 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/plener_slubny_park_zamkowy_zywiec_0020.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/plener_slubny_park_zamkowy_zywiec_0021.jpg", height: 806 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/plener_slubny_park_zamkowy_zywiec_0022.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/plener_slubny_park_zamkowy_zywiec_0019.jpg", height: 763 }
    ];

    return (
      <div>
        <Blogpage slide={slide}
          images={images}
          headTitle={'Sesja ślubna Park Zamkowy Żywiec'}
          headDescription={'sesja ślubna Park Zamkowy, sesja plenerowa w Żywcu'}
          headKeywords={'sesja ślubna park zamkowy Żywiec,sesja plenerowa w Żywcu'}
          headUrl={'http://99foto.pl/kinga-i-sebastian-sesja-slubna-park-zamkowy-zywiec/'}

          entryContentP1={'Złota polska jesień w Parku Zamkowym w Żywcu. Jesień w tym roku nie rozpieszcza i długo musieliśmy czekać na dobrą pogodę i żółte liście. W niedzielę gdy zameldowaliśmy się w Parku Zamkowym w Żywcu cztery inne pary również korzystały z tego pierwszego od niepamiętnych czasów słonecznego dnia, a fotografowie uzupełniali plenerowe zaległości. Park jest bardzo fajny głównie, ze względu na płynące przez niego rzeczki i mostki. Jest to rzeczywiście coś, czego w Krakowie i okolicach nie ma.'}
          entryContentP2={'Żółte liście podświetlone słońcem, dobre humory, czego można chcieć więcej. W drodze powrotnej rozejrzałem się po okolicy zrobiłem mini panoramę Zalewu Żywieckiego i jedno fajne zdjęcie jesieni kilka minut przed zachodem słońca. Pozdrowienia dla Kingi i Sebastiana, facebookowych i instagramowych liderów. Miłego oglądania.'}

          slug={'kinga-i-sebastian-sesja-slubna-park-zamkowy-zywiec'}

          title={'SESJA ŚLUBNA PARK ZAMKOWY ŻYWIEC - KINGA i SEBASTIAN'}
          tags={'sesja ślubna park zamkowy Żywiec,sesja plenerowa w Żywcu'}
          date={'26 października 2016'}

          menuNames={'KINGA i SEBASTIAN'}
          menuTitle={'SESJA ŚLUBNA PARK ZAMKOWY ŻYWIEC'}

          leadNames={'IWONA i MARCIN'}
          leadTitle={'WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE'}
          leadUrl={'/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice'} 
          leadImage={'url(/static/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg)'}
          />
      </div>
    );
  }
}