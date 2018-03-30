import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0001.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0003.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0004.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0005.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0007.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0461.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0009.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0010.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0011.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0012.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0013.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0014.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0015.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0016.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0017.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0018.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0019.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0020.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0021.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0022.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0023.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0024.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0025.jpg", height: 851 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0026.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0027.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0028.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0030.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0029.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0031.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0032.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0033.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0034.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0035.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0036.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0037.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0038.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0039.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0040.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0041.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0042.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0043.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0044.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0045.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0046.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0047.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0048.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0049.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0050.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0051.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0052.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0053.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0054.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0055.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0056.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0057.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0061.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0058.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0063.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0059.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0060.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0062.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0066.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0064.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0065.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0067.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0069.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0068.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0070.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0071.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0072.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0073.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0074.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0075.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0076.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0077.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0078.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0079.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0080.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0082.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0081.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0083.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0084.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0085.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0089.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0086.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0087.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0088.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0139.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0090.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0091.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0092.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0093.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0094.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0095.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0097.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0101.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0102.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0098.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0103.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0099.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0104.jpg", height: 851 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0100.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0106.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0096.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0107.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0105.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0108.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0109.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0110.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0111.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0112.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0113.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0114.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0115.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0116.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0117.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0118.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0119.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0120.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0121.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0123.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0122.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0124.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0125.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0126.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0127.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0128.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0129.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0130.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0137.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0132.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0133.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0134.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0135.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0136.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0131.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_na_wesele_krakow_0138.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Zdjęcia ślubne Kraków, Restauracja Chochołowy Dwór"}
                    headDescription={"Ciekawych jak bawi się arystokracja IT serdecznie zapraszam na reportaż ze ślubu Moniki i Rafała, który odbył się w Restauracji Chochołowy Dwór."}
                    headKeywords={"fotograf ślubny kraków,reportaż ślubny kraków,zdjęcia ślubne kraków"}
                    headUrl={"http://99foto.pl/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor/"}
                    entryContentP1={
                        'Ta sobota należała do Moniki i Rafała, bohaterów dzisiejszej historii. Poznaliśmy się już przed ślubem podczas sesji narzeczeńskiej w <a href="http://ojcowskiparknarodowy.pl" target="_blank">Ojcowskim Parku Narodowym</a>. Zdjęcia z tej sesji trafiły do fotoksiążki, a fotoksiążka trafiła prosto do rodziców. Był to bardzo dobry pomysł na prezent. Przygotowania do tego wielkiego dnia zaczęliśmy w domu Moniki. Ubieranie sukni ślubnej i biżuterii odbyło się z pomocą Iwony i pod czujnym okiem mamy Moniki. Ponieważ Rafał mieszka blisko to również jego odwiedziłem podczas przygotowań. Błogosławieństwo odbyło się w pełnej emocji i wzruszeń kameralnej atmosferze. Po błogosławieństwie udaliśmy się do <a href="http://parafiabolechowice.pl" target="_blank">Kościoła św. Piotra i Pawła w Bolechowicach</a>.'
                    }
                    entryContentP2={
                        'Do ceremoni zostało trochę czasu, który Monika wypełniła swoimi uśmiechami. Ksiądz sparafrazował słowa papieża Franciszka, które wypowiedział on podczas Światowych Dni Młodzieży w Krakowie &#8211; chodzi oczywiście o &#8222;proszę, dziękuję, przepraszam i zimną wojnę&#8221;. Było po prostu pięknie.  Wesele odbyło się w położonej nieopodal <a href="http://chocholowydwor.pl" target="_blank">Restauracji Chochołowy Dwór w Jerzmanowicach</a>. Zabawa była przednia i na pewno dobrze sfilmowana przez <a href="http://mgfilm.com.pl" target="_blank">Movie Groovie Video</a>. Poniżej przedstawiam szereg dowodów zdjęciowych. Dziękuję Monice i Rafałowi, że mogłem być z Wami tego dnia i pozdrawiam Was serdecznie. Zapraszam na reportaż i po więcej zdjęć w strefie klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor"}
                    title={"ZDJĘCIA ŚLUBNE KRAKÓW, RESTAURACJA CHOCHOŁOWY DWÓR - MONIKA i RAFAŁ"}
                    tags={"fotograf ślubny kraków,reportaż ślubny kraków,zdjęcia ślubne kraków"}
                    date={"19 sierpnia 2016"}
                    menuNames={"MONIKA i RAFAŁ"}
                    menuTitle={"ZDJĘCIA ŚLUBNE KRAKÓW, RESTAURACJA CHOCHOŁOWY DWÓR"}
                    leadNames={"OLA i PAWEŁ"}
                    leadTitle={"DWÓR SZLACHECKI SIECIECHOWICE, REPORTAŻ ŚLUBNY MIECHÓW"}
                    leadUrl={"/dwor-szlachecki-sieciechowice-reportaz-slubny-miechow"}
                    leadImage={"url(/static/dwor_szlachecki_sieciechowice_reportaz_slubny_miechow_start.jpg)"}
                />
            </div>
        );
    }
}
