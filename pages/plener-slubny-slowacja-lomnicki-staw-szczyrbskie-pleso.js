import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0013.jpg", height: 595 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0014.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0010.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0036.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0032.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0037.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2018/05/plener_slubny_lomnicki_staw_0012.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Plener ślubny Słowacja, Łomnicki Staw, Szczyrbskie Pleso."}
                    headDescription={"Plener ślubny Słowacja, Łomnicki Staw, Szczyrbskie Pleso. Zapraszam do oglądania."}
                    headKeywords={"Plener ślubny Słowacja, Łomnicki Staw, Szczyrbskie Pleso"}
                    headUrl={"https://99foto.pl/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso/"}
                    entryContentP1={
                        "Długi majowy weekend to co roku dużo wolnego i świetna okazja na odpoczynek w górach. Gosia i Rafał swój zimowy ślub podsumowali letnim plenerem, który wykonaliśmy na Słowacji dosłownie wdrapując się na Łomnicki Staw i dla odmiany leniwie spacerując w okolicach Szczyrbskiego Jeziora. W środę rano w Jordanowie przywitało nas piękne słońce, a prognoza pogody wskazywała, że przez cały dzień nie spadnie najmniejsza kropla deszczu. Warunki wymarzone, więc po kilkunastu minutach jazdy samochodem stanęliśmy przy kasach w Tatrzańskiej Łomnicy. Ponieważ droga na szczyt jest dwuetapowa, wiało mocno, a pierwsza kolejka ma współczynnik odporności na górski wiatr w granicach zera więc mini gondolka nie mogła wystartować."
                    }
                    entryContentP2={
                        "Okazało się, że nakreślona przez kasjerkę perspektywa trzy godzinnego marszu w strojach ślubnych, z plecakiem na szczyt nie mogły jednak zniechęcić Gosi i Rafała, przed osiągnięciem celu wyprawy. Wyruszyliśmy ze stoperem i po czterdziestu pięciu minutach marszu dotarliśmy do pierwszej bazy. W tym miejscu druga kolejka, duża, gondolowa jak na Kasprowy, uratowała nam życie i wyjechaliśmy na szczyt. Warunki boskie, mało turystów, bo nikomu nie chciało się dreptać tych trzech godzin pod górę, piękne słońce i nie taki znowu silny wiatr. Dalej było już łatwo, pyszny obiadek, kawka, spacer po Jeziorze Szczyrbskim porównywalny z wędrówką po Krakowskich Błoniach i wieczorny powrót do domu. Dużo rozmawialiśmy, wymieniając branżowe uwagi i razem bardzo miło spędziliśmy ten dzień. Oby więcej takich plenerów. Miłego oglądania i pamiętajcie na ślubna sesję zdjęciową zamiast do Polski jedźcie prosto do Słowacji."
                    }
                    slug={"plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso"}
                    title={"PLENER ŚLUBNY SŁOWACJA, ŁOMNICKI STAW, SZCZYRBSKIE PLESO - GOSIA I RAFAŁ"}
                    tags={"plener ślubny słowacja, sesja zdjęciowa łomnicki staw, szczyrbskie pleso"}
                    date={"2 maja 2018"}
                    menuNames={"MAŁGORZATA I RAFAŁ"}
                    menuTitle={"PLENER ŚLUBNY SŁOWACJA, ŁOMNICKI STAW"}
                    leadNames={"NATALIA i PIOTR"}
                    leadTitle={"HOTEL MARGERITA, MAGICZNY WYSTRÓJ SALI WESELNEJ W KRAKOWIE"}
                    leadUrl={"/hotel-margerita-magiczny-wystroj-sali-weselnej-w-krakowie"}
                    leadImage={"url(/static/hotel_margerita_krakow_magiczny_wystroj_sali_weselnej_w_krakowie-start.jpg)"}
                />
            </div>
        );
    }
}
