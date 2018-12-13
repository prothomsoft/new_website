import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/fotograf-slubny-magnolia-budzow-start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0063.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0003.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0005.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0007.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0009.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0011.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0012.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0015.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0019.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0020.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0024.jpg", height: 566 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0022.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0023.jpg", height: 566 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0025.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0027.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0122.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0029.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0031.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0032.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0033.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0036.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0038.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0041.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0042.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0046.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0048.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0049.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0074.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0050.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0076.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0051.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0052.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0075.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0054.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0056.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0057.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0055.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0058.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0061.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0062.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0064.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0065.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0066.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0067.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0068.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0069.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0070.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0071.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0072.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0073.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0077.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0078.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0081.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0079.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0080.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0083.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0085.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0084.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0087.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0086.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0088.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0089.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0090.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0092.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0091.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0093.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0095.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0096.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0097.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0098.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0099.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0100.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0102.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0101.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0103.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0104.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0105.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0106.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0107.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0109.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0108.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0110.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0111.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0112.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0113.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0114.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0115.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0116.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0117.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0118.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0119.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0120.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0007.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0010.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0019.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0009.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Fotograf ślubny Sucha Beskidzka, Restauracja Magnolia Budzów"}
                    headDescription={"Reportaż ślubny Kingi i Mateusza w Suchej Beskidzkiej i plener ślubny w Tatrach. Serdecznie zapraszam na kilka zdjęć na moim blogu. Miłego oglądania."}
                    headKeywords={"fotograf ślubny sucha beskidzka, restauracja magnolia budzów, sesja zdjęciowa tatry"}
                    headUrl={"https://99foto.pl/fotograf-slubny-sucha-beskidzka-magnolia-budzow/"}
                    entryContentP1={
                        'W tym roku most w Zembrzycach nad rzeką Skawą przekroczyłem po raz kolejny, tym razem w drodze do <a href="https://www.facebook.com/paulinaficekmakeup/" target="_blank">Studia Makijażu Pauliny Ficek</a> w samym centrum Suchej Beskidzkiej. To właśnie tam umówiliśmy się z Kingą na początek reportażu ślubnego. Dołączył do nas mega kamerzysta Adam, który filmował w imieniu <a href="https://www.facebook.com/videoartstudiopl/" target="_blank">Video Art Studio</a> i dzień wystartował na dobre. Gdy makijaż był gotowy udaliśmy się do domu rodzinnego Panny Młodej, gdzie mama z siostrą pomogły Kindze w przygotowaniach. Następnie odwiedziliśmy Zembrzyce jadąc do Mateusza sfotografować wpinanie spinek i poprawienie muchy. W międzyczasie znaleźliśmy chwilę na obowiązkowe portrety Pana Młodego i Panny Młodej. Odbyło się też pełne wzruszeń błogosławieństwo po którym wszyscy udaliśmy się do <a href="https://parafiasucha.pl/" target="_blank">Kościoła pw. Nawiedzenia Najświętszej Maryi Panny</a> w Suchej Beskidzkiej. Kościół przepiękny, a pod względem fotograficznym idealny.'
                    }
                    entryContentP2={
                        'Świetne światło, ogrom przestrzeni i możliwość stworzenia wspaniałych kadrów w zwykle niedostępnych perspektywach. Po sakramentalnym tak goście weselni ustawili się do zdjęcia grupowego, a następnie wszyscy zostali zaproszeniu do <a href="https://magnolia-restauracja.pl/wesela" target="_blank">Restauracji Magnolia</a> w Budzowie. Przywitanie chleblem i solą, życzenia i pierwszy taniec, który otworzył parkiet tego dnia. Paweł z <a href="https://www.facebook.com/zespolselavi/" target="_blank">Zespółu SeLaVi</a> dla którego scena jest drugim domem, a z mikrofonem czuje się jak Krzysztof Ibisz, nie pozwalał gościom nudzić się ani przez chwilkę, przenosząc część tradycji rodem z Lubelszczyzny w nasze krakowskie strony. Tort weselny, zabawy oczepinowe, pociąg i kilka innych atrakcji sprawiły, że czas mijał błyskawicznie. Impreza trwała do białego rana i było rewelacyjnie. Kilka dni później udaliśmy się na plener ślubny w Tatry, stawiając w ten sposób kropkę nad i. Odwiedziliśmy Rezerwat przyrody Przełom Białki pod Krempachami, Lotnisko w Nowym Targu i punkt widokowy Grapa Litwinka w Czarnej Górze. Kilka zdjęć z naszej wyprawy znajdziecie poniżej. Zapraszam już na zdjęcia, a po więcej do strefy klienta. Miłego oglądania.'
                    }
                    slug={"fotograf-slubny-sucha-beskidzka-magnolia-budzow"}
                    title={"FOTOGRAF ŚLUBNY SUCHA BESKIDZKA, MAGNOLIA BUDZÓW - KINGA i MATEUSZ"}
                    tags={"fotograf ślubny sucha beskidzka, restauracja magnolia budzów, sesja zdjęciowa tatry"}
                    date={"23 czerwca 2018"}
                    menuNames={"KINGA i MATEUSZ"}
                    menuTitle={"FOTOGRAF ŚLUBNY SUCHA BESKIDZKA, MAGNOLIA BUDZÓW"}
                    leadNames={"DAJANA i SYLWESTER"}
                    leadTitle={"FOTOGRAF ŚLUBNY KALWARIA ZEBRZYDOWSKA, ARKADIA WADOWICE"}
                    leadUrl={"/fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice"}
                    leadImage={"url(/static/fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice-start.jpg)"}
                />
            </div>
        );
    }
}
