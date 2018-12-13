import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/wioleta_i_marcin_zdjecia_slubne_w_restauracji_victoria_rabka_zdroj_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0001.jpg", height: 741 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0003.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0004.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0005.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0006.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0009.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0010.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0011.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0012.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0013.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0014.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0015.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0016.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0017.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0018.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0019.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0021.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0022.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0023.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0024.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0025.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0026.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0031.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0032.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0033.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0035.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0036.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0037.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0038.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0040.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0041.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0042.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0043.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0045.jpg", height: 757 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0046.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0047.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0048.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0049.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0050.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0051.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0052.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0054.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0055.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0056.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0057.jpg", height: 757 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0060.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0061.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0062.jpg", height: 757 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0063.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0064.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0065.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0066.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0067.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0068.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0069.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0070.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0071.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0072.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0073.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0074.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0075.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0076.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0077.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0078.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0079.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0080.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0081.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0082.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0083.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0084.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0085.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0086.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0087.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0088.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0089.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0090.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0091.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0092.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0093.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0094.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0095.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0096.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0097.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0098.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0100.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0101.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0102.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0103.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0104.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0105.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0106.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0107.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0108.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0109.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0110.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0111.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0112.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0113.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0114.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0115.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0116.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0117.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0118.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0119.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0120.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0121.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0122.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0123.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0124.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0125.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0126.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0127.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0128.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0129.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0130.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0131.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0132.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0133.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0134.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0135.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0136.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0137.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0138.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0139.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0140.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0141.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/06/wioleta_marcin_blog_0142.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Zdjęcia ślubne w Restauracji Victoria - Rabka Zdrój"}
                    headDescription={"Reportaż ze ślubu Wiolety i Marcina w Restauracji Victoria - Rabka Zdrój. Uroczystość zaślubin w kościele w Łętowni. Zapraszam do oglądania."}
                    headKeywords={"fotograf na wesele kraków,zdjęcia ślubne w restauracji victoria - rabka zdrój,fotograf ślubny kraków"}
                    headUrl={"https://99foto.pl/wioleta-i-marcin-zdjecia-slubne-w-restauracji-victoria-rabka-zdroj/"}
                    entryContentP1={
                        "Tego dnia było wszystko, co być powinno – szczere uśmiechy, wiele wzruszeń i pełno emocji! Przedstawiam zatem Wioletę i Marcina, którym miałem przyjemność towarzyszyć zza aparatu podczas ich najważniejszego dnia w życiu. Przygotowania zaczęliśmy popołudniową porą od makijażu. Pokój Wiolety stał się centrum dowodzenia, a do makijażu ustawiła się kolejka. Pomimo, że temat poważny to humor dopisywał, a uśmiechy trzymały się wszystkich. Chwilę później odwiedziłem dom rodzinny Marcina, który wpasował się w bardzo elegancki mundur strażacki."
                    }
                    entryContentP2={
                        'Po błogosławieństwie udaliśmy się do pięknie przystrojonego Kościoła w Łętowni. Msza była niezwykle wzruszająca, ksiądz prowadzący zadbał aby ta chwila była naprawdę wyjątkowa. Następnie udaliśmy się do <a href="https://www.victoria-rabka.pl/" target="_blank">Restauracji Wiktoria</a> w Rabce Zdrój, gdzie odbyło się wesele. Po tylu wyczerpujących emocjach, przyszedł czas na zabawę, i to jaką! Pełny pakiet, kolorowe światła i niezwalniający tempa zespół. To był piękny dzień. Pozdrowienia dla Wszystkich gości i miłego oglądania. Pamiętajcie, że więcej zdjęć znajdziecie w strefie klienta &#8211; hasło z mojej wizytówki.'
                    }
                    slug={"wioleta-i-marcin-zdjecia-slubne-w-restauracji-victoria-rabka-zdroj"}
                    title={"ZDJĘCIA ŚLUBNE W RESTAURACJI VICTORIA - RABKA ZDRÓJ - WIOLETA i MARCIN"}
                    tags={"fotograf na wesele kraków,zdjęcia ślubne w restauracji victoria - rabka zdrój,fotograf ślubny kraków"}
                    date={"1 czerwca 2015"}
                    menuNames={"WIOLETA i MARCIN"}
                    menuTitle={"ZDJĘCIA ŚLUBNE W RESTAURACJI VICTORIA - RABKA ZDRÓJ"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={"url(/static/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg)"}
                />
            </div>
        );
    }
}
