import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {
    let slide = [{
      imageUrl: "/static/kasia_i_grzesiek_zdjecia_slubne_w_kosciele_pw_sw_klemensa_w_trzemesni_start.jpg"
    }];

    let images = [
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0001.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0002.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0003.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0004.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0005.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0009.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0007.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0010.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0008.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0011.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0013.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0014.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0015.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0012.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0016.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0018.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0017.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0019.jpg", height: 1007 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0020.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0021.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0022.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0023.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0024.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0025.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0026.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0027.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0028.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0030.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0029.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0031.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0032.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0033.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0034.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0035.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0036.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0037.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0038.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0039.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0041.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0040.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0042.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0043.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0044.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0045.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0046.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0047.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0048.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0049.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0050.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0051.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0052.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0053.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0054.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0055.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0056.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0057.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0058.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0059.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0060.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0061.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0063.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0062.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0064.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0065.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0066.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0067.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0068.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0069.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0070.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0071.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0072.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0073.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0074.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0075.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0076.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0077.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0078.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0079.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0080.jpg", height: 762 },      
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0082.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0083.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0086.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0085.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0087.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0088.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0089.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0090.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0091.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0092.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0093.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0094.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0095.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0096.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0097.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0098.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0099.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0100.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0101.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0102.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0103.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0104.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0105.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0106.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0107.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0108.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0110.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0109.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0111.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0112.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0113.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0114.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0115.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0116.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0117.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0118.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0119.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0120.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0121.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0123.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0122.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0124.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0126.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0125.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0127.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0128.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0129.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0130.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0131.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0132.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0133.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0134.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0135.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0136.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0137.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0138.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0140.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0139.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0141.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0142.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0462.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0144.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0145.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0146.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0147.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0149.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0148.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0150.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/reportaz_slubny_trzemesnia_0151.jpg", height: 762 }
    ];

    return (
      <div>
        <Blogpage slide={slide}
          images={images}
          headTitle={'Zdjęcia ślubne Trzemeśnia, reportaż ślubny Myślenice'}
          headDescription={'Bardzo serdecznie zapraszam do odwiedzenia mojego bloga i oglądnięcia relacji z pięknego ślubu Kasi i Grześka. Miłego ogądania.'}
          headKeywords={'reportaż ślubny kraków,zdjęcia ślubne osp trzemeśnia'}
          headUrl={'http://99foto.pl/kasia-i-grzesiek-zdjecia-slubne-w-kosciele-pw-sw-klemensa-w-trzemesni/'}

          entryContentP1={'Dzisiaj przenosimy się w okolice Krakowa, blisko Dobczyc do miejscowości Trzemeśnia. Bohaterami wpisu są tym razem Kasia i Grzegorz. Przygotowanie rozpoczęliśmy w domu rodzinny Kasi, gdzie zastałem wspaniałą rodzinną atmosferę. W rolę wizażystki wcieliła się siostra Kasi Emilia, wykonując profesjonalny makijaż z tysiącem pięknych uśmiechów w pakiecie. Fotograf miał jak to czasem mówię mocno z górki. Chwilę później, gdy makijaż był już gotowy Kasia ubrała suknie ślubną, biżuterię, buty, podwiązkę i oficjalnie zgłosiła swoją gotowość do nadchodzących w ten wyjątkowy dzień wydarzeń. Przyjechał Tomek i srebrną Laguną wskazał nam drogę do domu Grześka. Na miejscu miło było znaleźć wspólny temat w szczególności, że było to muzykowanie.'}
          entryContentP2={'Krótkie błogosławieństwo i nadszedł czas by odebrać Kasię i stawić się w Kościele o umówionej godzinie. Po drugim tego dnia wzruszającym błogosławieństwie w drodze do Kościoła <a href="http://parafia-trzemesnia.pl" target="_blank">pw. św. Klemensa w Trzemeśni</a> samochód młodych musiał zatrzymywać się aż dwa razy. Za każdym razem Kasia i Grzegorz spotykali się z ogromną serdecznością tworzących bramę sąsiadów. Pogoda tego dnia bardzo dopisała, a z racji tego, że w zasięgu wzroku znajdował się kościół i sala weselna, dało się odczuć pełną swobodę. Kościół zaskoczył mnie swoim pięknym wnętrzem, które dopełniło wzruszającą ceremonię ze wspaniałą oprawą muzyczną. Po zdjęciu grupowym i życzeniach udaliśmy się na salę, gdzie odbyło się wesele. Na miejscu czekał już zespół muzyczny, który zapewnił muzyczną oprawę tego dnia. Państwo Młodzi otworzyli parkiet swoim pierwszym tańcem. Świetny klimat, szalona zabawa i naprawdę przesympatyczna ekipa. Wielkie, wielkie dziękuję za ten wyjątkowy dzień, ciepłe przyjęcie i genialną atmosferę. Miłego oglądania, a po więcej zdjęć zapraszam gości weselnych do strefy klienta z hasłem z mojej wizytówki.'}

          slug={'kasia-i-grzesiek-zdjecia-slubne-w-kosciele-pw-sw-klemensa-w-trzemesni'}

          title={'ZDJĘCIA ŚLUBNE W KOŚCIELE PW. ŚW. KLEMENSA TRZEMEŚNIA - KASIA i GRZESIEK'}
          tags={'reportaż ślubny kraków,zdjęcia ślubne osp trzemeśnia'}
          date={'24 sierpnia 2016'}

          menuNames={'KASIA i GRZESIEK'}
          menuTitle={'ZDJĘCIA ŚLUBNE W KOŚCIELE PW. ŚW. KLEMENSA TRZEMEŚNIA'}

          leadNames={'MONIKA i RAFAŁ'}
          leadTitle={'ZDJĘCIA ŚLUBNE KRAKÓW, RESTAURACJA CHOCHOŁOWY DWÓR'}
          leadUrl={'/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor'} 
          leadImage={'url(/static/monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_start.jpg)'}
          />
      </div>
    );
  }
}