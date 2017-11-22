import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {
    let slide = [{
      imageUrl: "/static/iga_i_marcin_zdjecia_slubne_kosciol_skomielna_czarna_start.jpg"
    }];

    let images = [
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0001.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0002.jpg", height: 852 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0003.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0005.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0007.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0006.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0008.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0009.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0010.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0011.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0012.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0013.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0014.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0015.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0016.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0017.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0018.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0019.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0020.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0021.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0022.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0023.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0024.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0025.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0026.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0027.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0028.jpg", height: 743 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0029.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0030.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0031.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0032.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0033.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0034.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0035.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0036.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0037.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0038.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0039.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0040.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0041.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0042.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0043.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0044.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0045.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0046.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0047.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0048.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0049.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0050.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0051.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0052.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0053.jpg", height: 757 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0054.jpg", height: 757 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0055.jpg", height: 757 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0056.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0057.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0058.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0059.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0060.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0061.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0062.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0063.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0064.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0065.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0066.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0067.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0068.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0069.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0070.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0071.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0072.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0073.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0074.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0075.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0076.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0077.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0078.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0079.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0080.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0081.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0082.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0083.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0084.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0085.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0086.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0087.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0088.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0089.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0090.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0091.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0092.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0093.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0094.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0095.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0096.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0097.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0098.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0100.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0101.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0102.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0103.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0104.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0105.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0106.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0107.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0108.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0109.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0110.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0111.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0112.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0113.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0114.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0115.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0116.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0117.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0118.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0119.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0120.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0121.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0122.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0123.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0124.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0125.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0126.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0127.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0128.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0129.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0130.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/06/iga_marcin_blog_0131.jpg", height: 763 }
    ];

    return (
      <div>
        <Blogpage slide={slide}
          images={images}
          headTitle={'Fotograf ślubny Skomielna Czarna'}
          headDescription={'Serdecznie zapraszam na mojego bloga i reportaż ślubny Igi i Marcina. Pędzą DUŻYM FIATEM rocznik 74 do Kościoła w Skomielnej Czarnej. Zapraszam !!!'}
          headKeywords={'fotograf na wesele kraków,zdjęcia ślubne w restauracji victoria - rabka zdrój'}
          headUrl={'http://99foto.pl/iga-i-marcin-zdjecia-slubne-kosciol-skomielna-czarna/'}

          entryContentP1={'Iga i Marcin to dzisiejsi bohaterowie kolejnego ślubnego wpisu. Z tą sympatyczną parą mieliśmy już okazję spotkać się na <a href="http://99foto.pl/wioleta-i-marcin-zdjecia-slubne-w-restauracji-victoria-rabka-zdroj" target="_blank">weselu Wiolety i Marcina</a>, dlatego wiedziałem, że o uśmiechy tego dnia martwić się nie muszę. Przygotowania do tego dnia zaczęliśmy od Marcina w jego malowniczo położonym domu. Południowe białe chmurki na niebieskim niebie wyglądały bajecznie. Następnie DUŻYM Fiatem rocznik siedem cztery udaliśmy się do domu rodzinnego Igi. Celowo pominęliśmy przygotowania Panny Młodej, podsumowując je tylko kilkoma zdjęciami już po błogosławieństwie.'}
          entryContentP2={'Co dalej? W dobrych humorach udaliśmy się do Kościoła p.w. Nawiedzenia NMP w Skomielnej Czarnej. Iga i Marcin w oczekiwaniu na dzwięk organów z uśmiechem witali nadchodzących gości. Widok młodej pary wchodzącej do kościoła, spowodował, że niektórym łezka zakręciła się w oku. Po pięknej mszy udaliśmy na wesele do <a href="http://www.victoria-rabka.pl/" target="_blank">Restauracji Viktoria</a> w Rabce Zdrój. Wesele zaliczam do zdecydowanie top najhuczniejszych wesel w tym roku. Doskonała ekipa i dosłownie pełny parkiet od początku do końca mojego pobytu. Zabawa była świetna. Pozdrowienia dla Wszystkich gości i miłego oglądania. Pamiętajcie, że więcej zdjęć znajdziecie w strefie klienta – hasło z mojej wizytówki.'}

          slug={'iga-i-marcin-zdjecia-slubne-kosciol-skomielna-czarna'}

          title={'ZDJĘCIA ŚLUBNE SKOMIELNA CZARNA - IGA i MARCIN'}
          tags={'fotograf na wesele kraków,zdjęcia ślubne w restauracji victoria - rabka zdrój'}
          date={'8 czerwca 2015'}

          menuNames={'IGA i MARCIN'}
          menuTitle={'ZDJĘCIA ŚLUBNE SKOMIELNA CZARNA'}

          leadNames={'IWONA i MARCIN'}
          leadTitle={'WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE'}
          leadUrl={'/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice'} 
          leadImage={'url(/static/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg)'}
          />
      </div>
    );
  }
}