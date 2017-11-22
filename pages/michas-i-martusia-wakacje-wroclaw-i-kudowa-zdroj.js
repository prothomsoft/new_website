import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {
    let slide = [{
      imageUrl: "/static/michas_i_martusia_wakacje_wroclaw_i_kudowa_zdroj_start.jpg"
    }];

    let images = [
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0001.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0002.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0003.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0008.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0004.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0010.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0041.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0005.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0006.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0007.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0044.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0009.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0037.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0011.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0040.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0060.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0014.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0012.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0013.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0015.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0068.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0016.jpg", height: 852 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0063.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0017.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0018.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0019.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0020.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0022.jpg", height: 816 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0021.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0023.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0024.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0025.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0026.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0027.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0028.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0029.jpg", height: 816 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0030.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0031.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0032.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0033.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0034.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0035.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0038.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0036.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0039.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0042.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0043.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0045.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0046.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0047.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0048.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0049.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0050.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0052.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0051.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0053.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0054.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0055.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0056.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0057.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0062.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0058.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0059.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0061.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0064.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0065.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0066.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0067.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0069.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0070.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0071.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0072.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0073.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0076.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0074.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/fotograf_rodzinny_krakow_0077.jpg", height: 763 }
    ];

    return (
      <div>
        <Blogpage slide={slide}
          images={images}
          headTitle={'Sesja rodzinna Kraków'}
          headDescription={'Afrykanarium, Kolejkowo, SkyTower i Szczeliniec Wielki. Zapraszam na kilka wakacyjnych zdjęć Michasia i Martusi z Wrocławia i Kudowy Zdrój. Miłego oglądania.'}
          headKeywords={'sesja rodzinna kraków,fotograf rodzinny kraków,fotografia rodzinna kraków'}
          headUrl={'http://99foto.pl/michas-i-martusia-wakacje-wroclaw-i-kudowa-zdroj/'}

          entryContentP1={'Dwa tygodnie pełnego luzu i nasze wakacje, które spędziliśmy we Wrocławiu i Kudowie Zdrój, czyli chwilowa przerwa od zdjęć ślubnych i sesji plenerowych. Michaś i Martusia mieli te dwa tygodnie wypełnione atrakcjami. W pierwszej kolejności odwiedziliśmy Wrocławskie ZOO i nowo otwarte Afrykarium. Świetne miejsce, nowoczesne i na pewno warte zobaczenia. Następnie wybraliśmy się do Parku Wodnego, fajniejszego niż ten w Krakowie. Później kolejkowo, wyjazd na 49 piętro w Sky Tower, finał Euro dla Portugali i nadszedł czas wyjazdu do Kudowy Zdrój.'}
          entryContentP2={'Do Kudowy Zdrój w poniedziałek prosto na obiadek jechaliśmy drogą stu zakrętów przez Radków i Karłów. Na miejscu zwiedziliśmy Park Zdrojowy, a Michaś i Martusia wdrapali się dzielnie na Szczeliniec Wielki. Miejsca bardzo wakacyjne i godne polecenia jeżeli ktoś chce pochodzić w lekkich górach z dzieciakami. Wszystkie zdjęcia zrobiłem jednym aparatem i tylko dwoma obiektywami, wakacyjny zestaw minimum. Korzystając z ostatnich urlopowych dni wybrałem kilka zdjęć. Miłego oglądania.'}

          slug={'michas-i-martusia-wakacje-wroclaw-i-kudowa-zdroj'}

          title={'WAKACJE WROCŁAW i KUDOWA ZDRÓJ - MICHAŚ i MARTUSIA'}
          tags={'sesja rodzinna kraków,fotograf rodzinny kraków,fotografia rodzinna kraków'}
          date={'15 lipca 2016'}

          menuNames={'MICHAŚ i MARTUSIA'}
          menuTitle={'WAKACJE WROCŁAW i KUDOWA ZDRÓJ'}

          leadNames={'IWONA i MARCIN'}
          leadTitle={'WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE'}
          leadUrl={'/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice'} 
          leadImage={'url(/static/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg)'}
          />
      </div>
    );
  }
}