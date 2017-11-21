import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {
    let slide = [{
      imageUrl: "/static/hotel_tadeusz_uszew_i_goralska_sala_weselna_start.jpg"
    }];

    let images = [
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0072.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0002.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0001.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0003.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0004.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0006.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0005.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0007.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0008.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0009.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0010.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0011.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0012.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0013.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0015.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0025.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0014.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0026.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0024.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0016.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0019.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0020.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0029.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0021.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0022.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0023.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0027.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0024.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0028.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0030.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0031.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0032.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0033.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0034.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0165.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0036.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0037.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0038.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0040.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0166.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0041.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0042.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0043.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0044.jpg", height: 805 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0045.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0046.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0047.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0048.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0049.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0050.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0051.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0052.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0053.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0054.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0070.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0055.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0056.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0057.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0058.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0059.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0060.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0061.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0062.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0063.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0064.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0065.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0067.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0066.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0068.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0069.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0071.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0164.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0073.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0074.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0075.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0076.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0078.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0077.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0079.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0080.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0081.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0082.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0083.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0084.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0085.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0086.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0087.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0088.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0089.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0090.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0091.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0092.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0093.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0098.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0100.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0094.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0095.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0096.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0097.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0099.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0101.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0102.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0103.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0104.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0105.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0106.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0107.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0108.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0109.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0110.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0111.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0112.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0113.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0114.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0115.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0116.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0117.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0118.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0119.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0120.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0121.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0122.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0123.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0124.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0125.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0126.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0127.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0128.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0129.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0131.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0130.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0132.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0133.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0134.jpg", height: 566 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0135.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0136.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0137.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0138.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0139.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0140.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0141.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0143.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0144.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0145.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0146.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0147.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0148.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0149.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0150.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0151.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0152.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0153.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0154.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0155.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0156.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0157.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0158.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0159.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0160.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0161.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0162.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0163.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/hotel_gospoda_tadeusz_0142.jpg", height: 763 }
    ];

    return (
      <div>
        <Blogpage slide={slide}
          images={images}
          headTitle={'Hotel Tadeusz Uszew i Góralska Sala Weselna'}
          headDescription={'Weselna petarda ślubna Eweliny i Kamila.'}
          headKeywords={'hotel tadeusz uszew,góralska sala weselna,fotograf na wesele okocim'}
          headUrl={'http://99foto.pl/hotel-tadeusz-uszew-i-goralska-sala-weselna/'}

          entryContentP1={'Przygotowania rozpoczęły się w Krakowie na ulicy Widok. Gdy przyszedłem makijaż i fryzura były już gotowe. Ewelina do sukni dopasowała buty, biżuterię, podwiązkę i z niecierpliwością oczekiwała na przyszłego męża. Kamil przybył na czas i rozpoczęło się błogosławieństwo połączone z podziękowaniem dla rodziców. Wspaniała atmosfera, emocje, moc gorących życzeń. Chwilę później mknęliśmy autostradą w kierunku Okocimia. Ceremonia zaślubin miała miejsce w <a href="http://lsookocim.dzs.pl" target="_blank">Kościele Trójcy Przenajświętszej</a>. Po pierwszym toaście na cześć Pary Młodej <a href="https://www.planujemywesele.pl/21940-zespol-dance" target="_blank">Zespół muzyczny Dance z Nowego Sącza </a> zaprosił gości na wspólny obiad. Następnie wszyscy podziwialiśmy pierwszy taniec i próbowaliśmy przepysznego ślubnego tortu.'}
          entryContentP2={'Sala góralska i szlachecka <a href="http://www.hotel-tadeusz.pl/" target="_blank">Hotelu i Gospody Tadeusz w Brzesku</a> zapełniała się bardzo szybko. Nie tylko na parkiecie działo się dużo. Jarek muzyczny wodzirej, który nie wiedzieć czemu wybrał karierę muzyka, zamiast komedianta, zabawiał gości przyśpiewkami, sypał żarcikami z obszernego rękawa i opowiadał dowcipy. Dawno się tak na ślubie nie pośmiałem. Zabawa była przednia aż do białego rana. Filmował Krzysiek z <a href="http://camdesign.pl/" target="_blank">CAMDESIGN &#8211; Profesjonalny film ślubny</a>, z którym współpracowało się jak zwykle świetnie. Niesamowity, spędzony w wybornym towarzystwie dzień. Cieszę się bardzo, że mogłem być tam z Wami w tych najważniejszych chwilach Waszego życia. Zapraszam do oglądania, a po więcej zdjęć do strefy klienta z hasłem z mojej wizytówki.'}

          slug={'hotel-tadeusz-uszew-i-goralska-sala-weselna'}

          title={'HOTEL TADEUSZ USZEW i GÓRALSKA SALA WESELNA - EWELINA i KAMIL'}
          tags={'hotel tadeusz uszew,góralska sala weselna,fotograf na wesele okocim'}
          date={'7 lipca 2017'}

          menuNames={'EWELINA i KAMIL'}
          menuTitle={'HOTEL TADEUSZ USZEW i GÓRALSKA SALA WESELNA'}

          leadNames={'IWONA i MARCIN'}
          leadTitle={'WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE'}
          leadUrl={'/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice'} 
          leadImage={'url(/static/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg)'}
          />
      </div>
    );
  }
}