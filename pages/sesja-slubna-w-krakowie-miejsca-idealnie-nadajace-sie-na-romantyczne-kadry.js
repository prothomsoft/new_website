import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/marlena_start.jpg",
            },
        ];

        let imagesParagraph1 = [
            { imageSrc: "/static/blog/2020/04/99FOTOPL_SPP_001.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/04/99FOTOPL_SPP_002.jpg", height: 851 },
            { imageSrc: "/static/blog/2020/04/99FOTOPL_SPP_003.jpg", height: 763 },
        ];

        let imagesParagraph3 = [{ imageSrc: "/static/blog/2019/08/sesja_zdjeciowa_w_krakowie_0001.jpg", height: 763 }];

        let imagesParagraph2 = [
            { imageSrc: "/static/blog/2020/04/99FOTOPL_SPP_004.jpg", height: 851 },
            { imageSrc: "/static/blog/2020/04/99FOTOPL_SPP_005.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/04/99FOTOPL_SPP_006.jpg", height: 763 },
        ];

        let imagesParagraph4 = [
            { imageSrc: "/static/blog/2020/04/99FOTOPL_SPP_007.jpg", height: 851 },
            { imageSrc: "/static/blog/2020/04/99FOTOPL_SPP_008.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/04/99FOTOPL_SPP_009.jpg", height: 851 },
        ];

        let imagesParagraph5 = [
            { imageSrc: "/static/blog/2020/04/99FOTOPL_SPP_010.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/04/99FOTOPL_SPP_011.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/04/99FOTOPL_SPP_012.jpg", height: 763 },
        ];

        let imagesParagraph6 = [{ imageSrc: "/static/blog/2019/08/sesja_zdjeciowa_w_krakowie_0002.jpg", height: 851 }];

        let imagesParagraph7 = [
            { imageSrc: "/static/blog/2020/04/99FOTOPL_SPP_013.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/04/99FOTOPL_SPP_014.jpg", height: 851 },
            { imageSrc: "/static/blog/2020/04/99FOTOPL_SPP_015.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/04/99FOTOPL_SPP_016.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/04/99FOTOPL_SPP_017.jpg", height: 763 },
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    headTitle={"Sesja ślubna w Krakowie. Miejsca idealne na romantyczne kadry"}
                    headDescription={"Sesja ślubna piękna, romantyczna z niesamowitymi i mającymi to coś w sobie kadrami. Wybierzcie magiczny Kraków. Zapraszam."}
                    headKeywords={"sesja ślubna w Krakowie, miejsca plenerowe Kraków, pomysły na sesje ślubną"}
                    headUrl={"https://99foto.pl/sesja-slubna-w-krakowie-miejsca-idealnie-nadajace-sie-na-romantyczne-kadry/"}
                    entryContentP1={
                        "Sesja ślubna to prawdziwy must have każdej pary młodej. Godziny przed lustrem, idealna suknia ślubna i garnitur skrojony na miarę po prostu muszą zostać uwiecznione w obiektywie fotografa! Oczywiście zdjęcia ze ślubu i wesela są standardem, ale wtedy nie jesteście sami. Wokół was jest mnóstwo osób, wiele się dzieje. Trudno o chwilę skupienia i uwagi tylko dla siebie nawzajem. Taką szansę stwarza specjalna sesja ślubna, na którą warto się zdecydować."
                    }
                    imagesParagraph1={imagesParagraph1}
                    entryContentP2={
                        "Jest wiele pięknych scenerii na wykonanie sesji. Zdjęcia pary młodej wspaniale prezentują się zarówno na łonie natury, jak i w oryginalnych przestrzeniach z wykorzystaniem architektury. Nie da się ukryć, że starsze polskie miasta mają w sobie to coś. Klimat zabytków połączony z piękną przyrodą to doskonałe tło dla zaprezentowania waszych uczuć w obiektywie fotografa. Jeśli zastanawiacie się nad pięknym miejscem, które jest jednocześnie romantyczne i daje wiele możliwości na ciekawe kadry, Kraków z pewnością spełni wasze oczekiwania!"
                    }
                    imagesParagraph2={imagesParagraph2}
                    entryContentP3={
                        "Zacznijmy od początku. Kraków to miasto w południowej Polsce, była stolica i siedziba królów z wielowiekową historią. W Krakowie oprócz starych, klimatycznych uliczek i wielu zabytków jest również nowoczesna architektura i sporo zieleni. Jest to miasto tętniące życiem, z mnóstwem turystów, eventów, pokazów ulicznych i sztuki. Jeśli nie znacie dobrze Krakowa, pierwsza myśl która przyjdzie wam do głowy, to z pewnością Stare Miasto, Rynek, Sukiennice, Kościół Mariacki, Wawel i oczywiście plaża nad Wisłą. Ale to nie wszystkie piękne miejsca tego miasta!"
                    }
                    imagesParagraph3={imagesParagraph3}
                    entryContentP4={
                        "Kochacie piękno natury? Nie ma nic bardziej romantycznego niż widok ukochanej i ukochanego nad wodą przy zachodzącym słońcu? Zalew Zakrzówek spełni wasze oczekiwania i marzenia o idealnej sesji zdjęciowej! W Krakowie jest również wiele parków, które swoim urokiem zachwycają w pięknych wiosennych, letnich, jesiennych, a nawet zimowych kadrach."
                    }
                    imagesParagraph4={imagesParagraph4}
                    entryContentP5={
                        "Kolejne miejsca z niesamowitą scenerią i widokiem to słynne kopce. W Krakowie jest ich kilka, choć najbardziej znany to oczywiście Kopiec Kościuszki. Urokliwy jest także Kopiec Krakusa i z pewnością nie tak oblegany. Jeśli cenicie sobie intymną atmosferę i stronicie od ludzi, rozważcie Kamieniołom Liban. Jest to tajemnicze miejsce z potencjałem do niesamowitych kadrów. Mało znany, ale piękny jest też Ogród Muzeum Archeologicznego z widokiem na Wawel."
                    }
                    imagesParagraph5={imagesParagraph5}
                    entryContentP6={
                        "Jednymi z bardziej urokliwych, równie zielonych miejsc są dworki - na przykład w Tomaszowicach, Dworek Jana Matejki czy Dworek Tetmajerówka lub Białoprądnicki. Pałacowa, nieco zaściankowa sesja, przepięknie uzupełni wasze wesele w stylu rustykalnym lub w stylu boho. Blisko natury jest także Las Wolski – spory zielony teren oddalony od centrum, w którym jest wiele naprawdę pięknych, romantycznych i ustronnych miejsc. Często wybierany przez pary młode do sesji ślubnej jest także krakowski Ogród Botaniczny."
                    }
                    imagesParagraph6={imagesParagraph6}
                    entryContentP7={
                        'Piękne krakowskie uliczki, które dodadzą klimatu waszej sesji to na przykład Grodzka lub Kanoniczna. Do nietypowych miejsc zaliczyć można na przykład kolorowe schody w dzielnicy Podgórze. Ciekawe tło dla kadrów daje też zabudowa ulicy Wawrzyńca oraz Muzeum Inżynierii Miejskiej. Oczywiście nie można zapomnieć też o słynnym Kazimierzu, gdzie zdjęcia zarówno w ciągu dnia, jak i nocą wychodzą przepiękne! Niech waszej uwadze nie umknie ulica Józefa i brama przy pubie "Stajnia". Zdjęcia będą magiczne!'
                    }
                    imagesParagraph7={imagesParagraph7}
                    entryContentP8={
                        "Podsumowując, jeśli marzycie o pięknej i romantycznej sesji ślubnej z niesamowitymi i mającymi „to coś” kadrami, wybierzcie magiczny Kraków. Jest to wręcz raj dla miłośników zabytków i architektury, ale także natury! Wystarczy wybrać tylko miejsca, które najbardziej do was pasują i dobrego fotografa, a efekt będzie niesamowity!"
                    }
                    entryContentP9={'Artykuł powstał przy współpracy portalu <a href="https://www.weselezklasa.pl/" target="_blank" rel="nofollow">Wesele z klasą</a>.'}
                    slug={"sesja-slubna-w-krakowie-miejsca-idealnie-nadajace-sie-na-romantyczne-kadry"}
                    title={"SESJA ŚLUBNA W KRAKOWIE. MIEJSCA IDEALNE NA ROMANTYCZNE KADRY"}
                    tags={"sesja ślubna w Krakowie, miejsca plenerowe Kraków, pomysły na sesje ślubną"}
                    date={"6 sierpnia 2019"}
                    menuNames={"SESJA ŚLUBNA W KRAKOWIE"}
                    menuTitle={"MIEJSCA IDEALNE NA ROMANTYCZNE KADRY. POMYSŁY NA SESJE."}
                    leadNames={"MARLENA i ADAM"}
                    leadTitle={"MIEJSKA SESJA NARZECZEŃSKA, PIĘKNI, MŁODZI i ZAKOCHANI"}
                    leadUrl={"/miejska-sesja-narzeczenska-piekni-mlodzi-i-zakochani"}
                    leadImage={"url(/static/sesja_narzeczenska_krakow_kazimierz.jpg)"}
                />
            </div>
        );
    }
}
