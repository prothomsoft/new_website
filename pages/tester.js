import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sala-weselna-willa-orchidea-waksmund-start.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0063.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0002.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0001.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0003.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0004.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0005.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0006.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0007.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0008.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0009.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0010.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0011.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0013.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0012.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0014.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0015.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0016.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0017.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0019.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0020.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0018.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0024.jpg", height: 566 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0021.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0022.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0023.jpg", height: 566 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0025.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0026.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0027.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0028.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0122.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0029.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0030.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0031.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0032.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0033.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0034.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0035.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0036.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0037.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0038.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0039.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0040.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0041.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0042.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0043.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0044.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0045.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0046.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0047.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0048.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0049.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0074.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0050.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0076.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0051.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0052.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0075.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0053.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0054.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0056.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0057.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0055.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0058.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0059.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0060.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0061.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0062.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0064.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0065.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0066.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0067.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0068.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0069.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0070.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0071.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0072.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0073.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0077.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0078.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0081.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0079.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0080.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0083.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0085.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0084.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0087.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0086.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0088.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0089.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0090.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0092.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0091.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0093.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0095.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0096.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0097.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0098.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0099.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0100.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0102.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0101.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0103.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0104.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0105.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0106.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0107.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0109.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0108.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0110.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0111.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0112.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0113.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0114.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0115.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0116.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0117.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0118.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0119.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_magnolia_budzow_0120.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0001.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0002.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0018.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0007.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0005.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0006.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0008.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0022.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0015.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0021.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0010.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0011.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0012.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0014.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0017.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0019.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0016.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/06/sesja_zdjeciowa_w_tatrach_0009.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Zdjęcia ślubne Zajazd Polesie Przybysławice"}
                    headDescription={"Reportaż ze ślubu Agi i Michała w Zajeździe Polesie - Przybysławice. Uroczystość zaślubin w Kościele pw. Św. Judy Tadeusza w Krakowie. Zapraszam do oglądania."}
                    headKeywords={"fotograf na wesele kraków,zdjęcia ślubne w restauracji zajazd polesie"}
                    headUrl={"http://99foto.pl/aga-michal-i-zuzia-zdjecia-slubne-zajazd-polesie-przybyslawice/"}
                    entryContentP1={
                        'Kilkukrotnie już pisałem, że wesela w górach mają swój niepowtarzalny klimat. Było tak i tym razem na ślubie Natalii i Kamila w Waksmundzie. Ósma rano, flat white na Orlenie, przejazd przez świetnie mi znane pienińskie zakątki, czyli Sromowce Wyżne brzegiem Jeziora Czorsztyńskiego i pierwszy przystanek <a href="https://www.facebook.com/Studio-Urody-Avangarda-Karolina-Bryja-200918166919683/" target="_blank">Studio Urody Avangarda Karoliny Bryja</a>. W tym miejscu rozpoczęliśmy przygotowania. Karolina to kuzynka Natalii, więc w takie rodzinnej atmosferze, mając salon niemalże na wyłączność powstał perfekcyjny makijaż. Podczas przygotowań Natalii towarzyszyły druhny. Wszystkie dziewczyny wyglądały świetnie i błyskawicznie pomogły Natalii założyć suknie, biżuterię, podwiązkę i buty. W oczekiwaniu na Kamila, który do Waksmundu jechał z Jordanowa w kuchni toczyła się alternatywna impreza. Holenderscy goście, którzy na codzień raczej tylko piwko, złamali się i bariera językowa szybko pękła... i nie tylko bariera pękła w tej kuchni. Dalej już błogosławieństwo, wzruszenia i przejazd końmi do <a href="http://www.diecezja.pl/parafie/lista-parafii/32-nowy-targ/parafia-sw-jadwigi-slaskiej.html" taget="_blank">Kościoła Świętej Jadwigi Śląskiej</a> w Waksmundzie.'
                    }
                    entryContentP2={
                        'Ksiądz prowadzący ceremonię z pewnością dawno nie widział tylu uśmiechów w trakcie Mszy Świętej. Zdjęcie grupowe i udaliśmy się do położonej w pobliżu <a href="http://www.willa-orchidea.pl/" target="_blank">Sali weselnej Willa Orchidea</a>. Sala ta fioletami elewacji zaprasza gości z daleka i trudno ją przeoczyć podróżując w tamtych stronach. Rodzice przywitali młodych chlebem i solą, następnie goście zjedli obiad i ustawili się w długiej kolejce do życzeń. Natalia czarowała uśmiechem, Kamil nie oszczędzał gorących uścisków, prezentów na stoliku w mgnieniu oka przybywało. Nadszedł czas na pierwszy taniec, tort weselny i cały zestaw zabaw. Animatorki zabawiały dzieciaki, a rodzice korzystali z zasłużonej chwili wolności. Gościom weselnym na parkiecie przygrywał <a href="http://edenzespol.pl" target="_blank">Zespół Eden</a>, wyróżniający się świetnym głosek wokalistki Ewy. Po lekkiej burzy udało nam się wyskoczyć na Waksmundzki punkt widkowy na mini sesję ślubą. Arek ze <a href="http://www.studiostyl.net/" target="_blank">Studio Styl</a> w górę jechał ze mną, ale wracał z młodymi, mówiąc, że tyle się dzieje, że musi to mieć na taśmie. Jestem pewny, że po oczepinach zabawa trwała do samego rana, albo nawet do poniedziałku, bo jak to w górach w planie były przecież oczepiny. Natalio i Kamilu, świetna impreza, oby takich więcej. Dzięki, że mogłem Wam towarzyszyć. Koniec pisania i początek oglądania. Serdecznie zapraszam.'
                    }
                    slug={"aga-michal-i-zuzia-zdjecia-slubne-zajazd-polesie-przybyslawice"}
                    title={"SALA WESELNA WILLA ORCHIDEA WAKSMUND - ŚLUB W PIENINACH - NATALIA i KAMIL"}
                    tags={"fotograf na wesele kraków,zdjęcia ślubne w restauracji zajazd polesie"}
                    date={"30 czerwca 2018"}
                    menuNames={"NATALIA i KAMIL"}
                    menuTitle={"SALA WESELNA WILLA ORCHIDEA WAKSMUND - ŚLUB W PIENINACH"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"ZDJĘCIA ŚLUBNE RESTAURACJA STEK SKAWINA"}
                    leadUrl={"/zdjecia-slubne-restauracja-stek-skawina"}
                    leadImage={"url(/static/zdjecia_slubne_restauracja_stek_skawina_start.jpg)"}
                />
            </div>
        );
    }
}
