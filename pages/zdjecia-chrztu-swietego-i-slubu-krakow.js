import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {
    let slide = [{
      imageUrl: "/static/zdjecia_chrztu_swietego_i_slubu_krakow_start.jpg"
    }];

    let images = [
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0155.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0001.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0038.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0003.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0004.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0082.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0005.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0006.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0007.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0009.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0008.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0010.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0011.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0002.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0012.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0037.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0014.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0015.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0016.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0017.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0018.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0019.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0020.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0022.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0021.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0023.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0024.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0025.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0027.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0028.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0029.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0031.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0030.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0032.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0033.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0034.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0035.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0036.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0039.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0040.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0041.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0042.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0043.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0044.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0045.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0046.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0047.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0048.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0049.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0050.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0051.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0052.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0053.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0054.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0055.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0056.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0057.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0058.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0059.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0060.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0061.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0062.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0063.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0064.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0065.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0066.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0067.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0156.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0068.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0069.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0070.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0071.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0072.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0073.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0074.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0076.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0077.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0078.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0080.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0079.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0081.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0083.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0084.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0085.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0086.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0087.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0088.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0089.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0090.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0091.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0092.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0093.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0094.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0095.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0096.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0098.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0097.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0100.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0099.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0101.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0102.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0103.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0104.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0105.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0106.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0107.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0108.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0109.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0110.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0111.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0112.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0113.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0114.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0115.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0116.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0117.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0118.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0119.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0120.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0121.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0122.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0123.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0124.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0125.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0126.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0127.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0128.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0129.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0130.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0131.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0132.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0133.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0134.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0135.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0137.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0138.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0139.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0140.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0141.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0142.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0144.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0143.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0145.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0146.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0147.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0148.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0149.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0150.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0151.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0152.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0153.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0154.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/04/fotograf_slubny_krakow_0136.jpg", height: 763 }
    ];

    return (
      <div>
        <Blogpage slide={slide}
          images={images}
          headTitle={'Fotograf na chrzest Kraków'}
          headDescription={'Fotograf na Chrzest Święty Kraków. Miejsce wydarzeń Kraków. Serdecznie zapraszam na kilka zdjęć Chrztu Świętego.'}
          headKeywords={'fotograf na chrzest kraków, restauracja szafrantu zagacie, fotografia chrztu'}
          headUrl={'http://99foto.pl/zdjecia-chrztu-swietego-i-slubu-krakow/'}

          entryContentP1={'Niedziela z wyjątkowo zmienną aurą, pogoda typowo marcowa. Osiedle Kuźnicy Kołłątajowskiej i ślub niezwykły pod wieloma względami. Dzień PODWÓJNIE WAŻNY dla całej rodziny. Pierwszoplanowa rola w całej uroczystości została wypełniona nie przez jak to zwykle przecież na ślubach bywa Pannę Młodą, ale przez dzielnego obserwatora niedzielnych wydarzeń małego Franka. Krótkie przygotowania w mieszkaniu, gdzie gości przybywało z minuty na minutę, a godzina zero zbliżała się wielkimi krokami. Franio, który w modnych szelkach regenerował siły korzystając z popołudniowej drzemki. Moc pozytywnej energii pomimo dużego zamieszania.  Tak minęło błogosławieństwo rodziców i wszyscy udaliśmy się do pobliskiego <a href="http://www.gotyk.home.pl/" target="_blank">Kościoła Chrystusa Króla w Krakowie</a>, gdzie rozpoczęła się ceremonia Ślubu i Chrztu Świętego. Ksiądz przekazując mnóstwo życiowych rad, wygłosił dowcipne kazanie, które wywołało uśmiechy na twarzach wielu gości.'}
          entryContentP2={'Państwo Młodzi powiedzieli sobie TAK i nadszedł czas wyzwania dla maluszka. Franek zachował się niezwykle dzielnie podczas polewania głowy wodą święconą. Nieustannie obserwował co też dookoła niego się dzieje. Po ceremoni Państwo Młodzi zaprosili swoich gości do <a href="http://www.szafrantu.pl/o-nas/62" target="_blank">Restauracji Szafrantu w Niepołomicach</a>. Rodzice powitali Młodych chlebem i solą, odbył się klasyczny rzut kieliszkami i walka ze zmiotką. Piotr przeniósł Sandrę przez próg Restauracji. Po życzeniach i obiedzie zespół muzyczny <a href="http://gooroleska.pl/" target="_blank">Gooroleska</a> zaprosił gości na pierwszy taniec i do wspólnej zabawy. W trakcie zabawy zaserwowali gościom swoje największe przeboje, które warto w internecie odnaleźć i przesłuchać. Stolik Państwa Młodych zdecydowanie dawał radę i ani przez moment nie pozostał bierny. Parkiet zapełniał się w ekspresowym tempie.  Mateusz i Kasia z <a href="http://www.blinkfilm.pl" target="_blank">Blink Film z Miechowa</a> skrupulatnie rejestrowali każdą chwilę. Oglądałem ich portfolio i nie mam żadnych wątpliwości, że powstanie mega film. Na koniec dodam, że kilka minut przed północą Franio pojawił się na sali i sprawdził czy rodzice bawią się nadal tak dobrze jak kilka godzin wcześniej. Dziękuję Wam Sandro i Piotrze za ten magiczny wieczór, za zaufanie i pozytywne emocje, było świetnie. Teraz już zapraszam na krótką historię tego wyjątkowego dnia.'}

          slug={'zdjecia-chrztu-swietego-i-slubu-krakow'}

          title={'FOTOGRAF NA CHRZEST ŚWIĘTY KRAKÓW - SANDRA, PIOTR i FRANEK'}
          tags={'fotograf na chrzest kraków, restauracja szafrantu zagacie, fotografia chrztu'}
          date={'30 kwietnia 2017'}

          menuNames={'SANDRA, PIOTR i FRANEK'}
          menuTitle={'ZDJĘCIA CHRZTU ŚWIĘTEGO i ŚLUBU KRAKÓW'}

          leadNames={'IWONA I MARCIN'}
          leadTitle={'SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA'}
          leadUrl={'/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja'} 
          leadImage={'url(/static/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg)'}
          />
      </div>
    );
  }
}