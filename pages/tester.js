import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/restauracja_tiffany_wola_filpowska.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0001.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0002.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0003.jpg", height: 851 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0004.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0005.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0006.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0007.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0008.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0009.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0010.jpg", height: 567 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0011.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0012.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0013.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0014.jpg", height: 851 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0015.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0016.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0017.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0018.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0019.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0020.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0021.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0022.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0023.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0024.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0025.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0026.jpg", height: 407 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0027.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_zdjeciowa_w_gorach_0028.jpg", height: 527 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Restauracja Tiffany Wola Filipowska, fotograf na ślub Krzeszowice"}
                    headDescription={
                        "Restauracja Tiffany Wola Filipowska i reportaż ze ślubu Marty i Marcina w Krzeszowicach. First look na jednym z najwyższych wieżowców w Krakowie. Zapraszam do oglądania."
                    }
                    headKeywords={"restauracja tiffany wola filipowska, fotograf na ślub krzeszowice, first look na dachu wieżowca"}
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
