import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/pati_i_michal_zdjecia_slubne_w_hotelu_turowka_wieliczka_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0001.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0002.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0005.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0007.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0009.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0015.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0019.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0021.jpg", height: 757 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0023.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0024.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0025.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0026.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0027.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0028.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0031.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0032.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0033.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0034.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0035.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0036.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0037.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0038.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0039.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0041.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0042.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0043.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0045.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0046.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0047.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0049.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0048.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0050.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0051.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0052.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0054.jpg", height: 816 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0055.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0056.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0057.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0058.jpg", height: 816 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0061.jpg", height: 816 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0062.jpg", height: 816 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0063.jpg", height: 816 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0064.jpg", height: 816 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0065.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0066.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0067.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0068.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0069.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0070.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0071.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0072.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0073.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0074.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0075.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0076.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0077.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0078.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0079.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0080.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0081.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0082.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0083.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0084.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0085.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0086.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0087.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0088.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0089.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0090.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0091.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0092.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0093.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0094.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0095.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0096.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0097.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0098.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0099.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0100.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0101.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0102.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0103.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0104.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0105.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0106.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0107.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0108.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0109.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0110.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0111.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0112.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0113.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0114.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0115.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0116.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0117.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0118.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0119.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0120.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0121.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0122.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0123.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0124.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0125.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0126.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0127.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0128.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0129.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0130.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0131.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0132.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0133.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0134.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0135.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0136.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0137.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0138.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0139.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_wesele_wieliczka_0140.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Fotograf na ślub - Hotel Turówka - Wieliczka"}
                    headDescription={"Serdecznie zapraszam na przepiękny ślub Patrycji i Michała, który miałem przyjemność fotografować w super miejscu, Hotelu Turówka w Wieliczce."}
                    headKeywords={"fotograf na wesele kraków,zdjęcia ślubne w hotelu turówka wieliczka"}
                    headUrl={"https://99foto.pl/pati-i-michal-zdjecia-slubne-w-hotelu-turowka-wieliczka/"}
                    entryContentP1={
                        'Wszystko zaczęło się w <a href="https://akademia-stylu.com.pl" target="_blank" rel="nofollow">Akademii Stylu</a> na naszym wspólnym osiedlu. Po kilku zdjęciach z makijażu przyszła pora na przygotowania Pana Młodego, więc razem z kamerzystą Krzyśkiem z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">Camdesign</a> odwiedziliśmy mieszkanie Michała. Następnie powrót na Bociana i błogosławieństwo, po którym udaliśmy się do <a href="https://kosciol-sebastian.pl" target="_blank" rel="nofollow">Kościoła św. Sebastiana</a> w Wieliczce. Po ceremonii, w której aktywnie pomagały dzieci i spektakularnym wyjściu z kościoła, zrobiliśmy wspólne zdjęcie grupowe. Według planu na życzenia goście musieli poczekać, aż dotrą na salę weselną.'
                    }
                    entryContentP2={
                        'Udaliśmy się więc do <a href="https://www.turowka.pl/" target="_blank" rel="nofollow">Hotelu Turówka</a> w Wieliczce, wyjątkowego miejsca z klimatycznym wystrojem. Na sali czekał już na nas zespół Tornado Band, który uświetnił zabawę tego wieczoru. Po setkach życzeń przeplatanych kopertami, zabawa trwała do białego rana. Piękny dzień, piękne wspomnienia i mam nadzieję obrazujące to zdjęcia &#8211; zapraszam serdecznie na reportaż Patrycji i Michała. Na koniec, pozdrowienia dla Pary Młodej, gości i ekipy weselnej. Blisko pięćset zdjęć z tego dnia znajdziecie w strefie klienta podając hasło z mojej wizytówki.'
                    }
                    slug={"pati-i-michal-zdjecia-slubne-w-hotelu-turowka-wieliczka"}
                    title={"ZDJĘCIA ŚLUBNE W HOTELU TURÓWKA - WIELICZKA - PATI i MICHAŁ"}
                    tags={"plener strbskie pleso, popradzki staw zdjęcia ślubne, sesja ślubna Słowacja"}
                    date={"23 sierpnia 2015"}
                    menuNames={"PATI i MICHAŁ"}
                    menuTitle={"ZDJĘCIA ŚLUBNE W HOTELU TURÓWKA - WIELICZKA"}
                    leadNames={"OLA i PAWEŁ"}
                    leadTitle={"DWÓR SZLACHECKI SIECIECHOWICE, REPORTAŻ ŚLUBNY MIECHÓW"}
                    leadUrl={"/dwor-szlachecki-sieciechowice-reportaz-slubny-miechow"}
                    leadImage={"url(/static/dwor_szlachecki_sieciechowice_reportaz_slubny_miechow_start.jpg)"}
                />
            </div>
        );
    }
}
