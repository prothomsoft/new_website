import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/paulina_i_bartek_sesja_poslubna_kasprowy_wierch_i_nosal_zakopane_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0001.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0013.jpg", height: 400 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0004.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0005.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0006.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0007.jpg", height: 267 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0008.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0009.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0010.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0011.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0014.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0016.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0017.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0019.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0020.jpg", height: 205 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0021.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0022.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0023.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0024.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0026.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0027.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0028.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0029.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kasprowy_wierch_0030.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sesja ślubna Kasprowy Wierch - Zakopane"}
                    headDescription={"Tym razem na moim blogu górskie panoramy i piękne widoki ze szczytu Kasprowego Wierchu i Nosala. Serdecznie zapraszam do oglądania."}
                    headKeywords={"zdjęcia ślubne kasprowy wierch,plener ślubny zakopane"}
                    headUrl={"https://99foto.pl/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja/"}
                    entryContentP1={
                        "Paulina i Bartek lubią morze, ale mają je na co dzień ponieważ mieszkają w Szczecinie i kochają góry ponieważ na ich szczycie powiedzieli sobie TAK. W niedzielę po sobotnich szaleństwach w Zajeździe Furmańskim w Zakopanym, większość gości weselnych spotkała się na szczycie Kasprowego Wierchu na krótkiej sesji fotograficznej. Mieliśmy tego popołudnia, pogodę wręcz wymarzoną do zdjęć w górach &#8211; białe chmurki na niebieskim niebie, umiarkowane słońce i bardzo dobra widoczność. Wykorzystaliśmy te okoliczności jak należy mam nadzieję."
                    }
                    entryContentP2={
                        "Następnie już w tygodniu, który cały spędziłem w Zakopanym, spotkaliśmy się ponownie i wspólnie weszliśmy na szczyt Nosala. Górka mała, ale podejście dość strome i kondycyjnie wymagające. Tym razem nie mieliśmy już tyle szczęścia do pogody i na górze spotkaliśmy mgłę, która nie chciała odpuścić. Pozdrowienia dla gości, miłego oglądania i zapraszam po więcej do strefy klienta."
                    }
                    slug={"sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    title={"SESJA ŚLUBNA KASPROWY WIERCH i NOSAL - ZAKOPANE - PAULINA i BARTEK"}
                    tags={"zdjęcia ślubne kasprowy wierch,plener ślubny zakopane"}
                    date={"17 września 2015"}
                    menuNames={"PAULINA i BARTEK"}
                    menuTitle={"SESJA ŚLUBNA KASPROWY WIERCH i NOSAL - ZAKOPANE"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={"url(/static/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg)"}
                />
            </div>
        );
    }
}
