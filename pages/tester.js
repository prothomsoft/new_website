import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/hotel_lenart_wieliczka_zdjecia_slubne.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_001.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_002.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_003.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_004.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_005.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_006.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_012.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_013.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_008.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_007.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_010.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_011.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_009.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_015.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_014.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_017.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_016.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_018.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_019.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_020.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_021.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_022.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_023.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_024.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_025.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_026.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_027.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_028.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_029.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_030.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_031.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_032.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_033.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_034.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_035.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_036.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_037.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_038.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_039.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_040.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_041.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_042.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_044.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_043.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_045.jpg", height: 566 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_046.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_047.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_048.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_049.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_050.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_051.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_052.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_053.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_054.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_055.jpg", height: 566 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_056.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_057.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_058.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_059.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_060.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_061.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_062.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_063.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_064.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_065.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_066.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_067.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_068.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_069.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_070.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_071.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_072.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_073.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_074.jpg", height: 526 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_075.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_076.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_077.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_078.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_079.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_080.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_081.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_082.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_083.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_084.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_085.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_086.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_087.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_088.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_089.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_090.jpg", height: 806 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_091.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_092.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_093.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_094.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_095.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_096.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_097.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_098.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_099.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_100.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_101.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_102.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_103.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_104.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_105.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_106.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_107.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_108.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_109.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_110.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_111.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_112.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_113.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_114.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_115.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_116.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_117.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_118.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_119.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_120.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_121.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_122.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_123.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_124.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_125.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_126.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_127.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/hotel_lenart_wieliczka_128.jpg", height: 383 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Zdjęcia ślubne Hotel Lenart Wieliczka, fotograf ślubny"}
                    headDescription={"Reportaż ze ślubu Moniki i Mariusza w Hotelu Lenart w Wieliczce. Uroczystość zaślubin w Kościele św. Sebastiana w Wieliczce. Zapraszam do oglądania."}
                    headKeywords={"fotograf ślubny wieliczka, zdjęcia ślubne hotel lenart w wieliczce"}
                    headUrl={"http://99foto.pl/aga-michal-i-zuzia-zdjecia-slubne-zajazd-polesie-przybyslawice/"}
                    entryContentP1={
                        'Kilkukrotnie już pisałem, że wesela w górach mają swój niepowtarzalny klimat. Było tak i tym razem na ślubie Natalii i Kamila w Waksmundzie. Ósma rano, flat white na Orlenie, przejazd przez świetnie mi znane pienińskie zakątki, czyli Sromowce Wyżne brzegiem Jeziora Czorsztyńskiego i pierwszy przystanek <a href="https://www.facebook.com/Studio-Urody-Avangarda-Karolina-Bryja-200918166919683/" target="_blank">Studio Urody Avangarda Karoliny Bryja</a>. W tym miejscu rozpoczęliśmy przygotowania. Karolina to kuzynka Natalii, więc w takie rodzinnej atmosferze, mając salon niemalże na wyłączność powstał perfekcyjny makijaż. Podczas przygotowań Natalii towarzyszyły druhny. Wszystkie dziewczyny wyglądały świetnie i błyskawicznie pomogły Natalii założyć suknie, biżuterię, podwiązkę i buty. W oczekiwaniu na Kamila, który do Waksmundu jechał z Jordanowa w kuchni toczyła się alternatywna impreza. Holenderscy goście, którzy na codzień raczej tylko piwko, złamali się i bariera językowa szybko pękła... i nie tylko bariera pękła w tej kuchni. Dalej już błogosławieństwo, wzruszenia i przejazd końmi do <a href="http://www.diecezja.pl/parafie/lista-parafii/32-nowy-targ/parafia-sw-jadwigi-slaskiej.html" taget="_blank">Kościoła Świętej Jadwigi Śląskiej</a> w Waksmundzie.'
                    }
                    entryContentP2={
                        'Ksiądz prowadzący ceremonię z pewnością dawno nie widział tylu uśmiechów w trakcie Mszy Świętej. Zdjęcie grupowe i udaliśmy się do położonej w pobliżu <a href="http://www.willa-orchidea.pl/" target="_blank">Sali weselnej Willa Orchidea</a>. Sala ta fioletami elewacji zaprasza gości z daleka i trudno ją przeoczyć podróżując w tamtych stronach. Rodzice przywitali młodych chlebem i solą, następnie goście zjedli obiad i ustawili się w długiej kolejce do życzeń. Natalia czarowała uśmiechem, Kamil nie oszczędzał gorących uścisków, prezentów na stoliku w mgnieniu oka przybywało. Nadszedł czas na pierwszy taniec, tort weselny i cały zestaw zabaw. Animatorki zabawiały dzieciaki, a rodzice korzystali z zasłużonej chwili wolności. Gościom weselnym na parkiecie przygrywał <a href="http://edenzespol.pl" target="_blank">Zespół Eden</a>, wyróżniający się świetnym głosek wokalistki Ewy. Po lekkiej burzy udało nam się wyskoczyć na Waksmundzki punkt widkowy na mini sesję ślubą. Arek ze <a href="http://www.studiostyl.net/" target="_blank">Studio Styl</a> w górę jechał ze mną, ale wracał z młodymi, mówiąc, że tyle się dzieje, że musi to mieć na taśmie. Jestem pewny, że po oczepinach zabawa trwała do samego rana, albo nawet do poniedziałku, bo jak to w górach w planie były przecież oczepiny. Natalio i Kamilu, świetna impreza, oby takich więcej. Dzięki, że mogłem Wam towarzyszyć. Koniec pisania i początek oglądania. Serdecznie zapraszam.'
                    }
                    slug={"aga-michal-i-zuzia-zdjecia-slubne-zajazd-polesie-przybyslawice"}
                    title={"FOTOGRAF ŚLUBNY KRZESZOWICE, CZTERY PORY ROKU ALWERNIA - ALEKSANDRA i GRZEGORZ"}
                    tags={"fotograf na wesele kraków,zdjęcia ślubne w restauracji zajazd polesie"}
                    date={"30 czerwca 2018"}
                    menuNames={"ALEKSANDRA i GRZEGORZ"}
                    menuTitle={"FOTOGRAF ŚLUBNY KRZESZOWICE, CZTERY PORY ROKU ALWERNIA"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"ZDJĘCIA ŚLUBNE RESTAURACJA STEK SKAWINA"}
                    leadUrl={"/zdjecia-slubne-restauracja-stek-skawina"}
                    leadImage={"url(/static/zdjecia_slubne_restauracja_stek_skawina_start.jpg)"}
                />
            </div>
        );
    }
}
