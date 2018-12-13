import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sylwia_i_bartek_zdjecia_slubne_w_jordanowie_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0001.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0002.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0003.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0005.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0007.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0008.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0009.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0011.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0012.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0014.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0017.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0018.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0019.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0021.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0024.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0029.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0031.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0032.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0035.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0034.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0037.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0036.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0038.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0039.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0041.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0042.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0056.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0046.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0049.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0048.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0050.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0052.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0051.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0054.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0055.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0057.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0059.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0060.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0061.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0062.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0063.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0064.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0065.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0066.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0067.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0068.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0069.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0070.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0071.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0072.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0073.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0074.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0075.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0076.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0077.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0078.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0079.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0080.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0081.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0082.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0083.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0084.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0085.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0086.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0087.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0088.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0089.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0090.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0091.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0092.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0093.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0094.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0095.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0096.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0102.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0097.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0098.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0099.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0100.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0101.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0131.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0103.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0105.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0106.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0107.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0108.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0109.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0110.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0111.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0112.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0113.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0114.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0115.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0116.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0117.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0118.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0119.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0120.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0121.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0122.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0123.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0124.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0125.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0126.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0127.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0128.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0129.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0130.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/fotograf_na_wesele_krakow_0104.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Fotograf ślubny Jordanów"}
                    headDescription={"Twarz Marilyn Monroe podpisaną Dziękuję, że jesteś w dalekim Trondheim wyklikał Bartek dla ukochanej Sylwii. Kilka łez poleciało... Zapraszam na reportaż."}
                    headKeywords={"fotograf na wesele kraków,fotograf ślubny kraków,zdjęcia ślubne dom weselny karolinka"}
                    headUrl={"https://99foto.pl/sylwia-i-bartek-zdjecia-slubne-w-jordanowie/"}
                    entryContentP1={
                        "W Jordanowie fotografowałem już kilka razy. Zawsze spotykam się tam z niezwykłą otwartością ludzi i podziwiam ich umiejętność odstresowania i oddania się szalonej zabawie. Tym razem nie mogło być inaczej &#8211; udowodnili to Sylwia i Bartek. Przygotowania odbyły się w domu rodzinnym Sylwii. Panna młoda zastosowała jedno z moich ulubionych powiedzeń &#8211; jeśli chcesz coś mieć zrobione dobrze, zrób to sam &#8211; i jako znana już w okolicach Trondheim wizażystka makijaż wykonała samodzielnie. Mocno trzymaliśmy kciuki za pogodę, która pewnie dlatego wytrzymała do samego końca. Udało mi się też tym razem zrobić jedno z moich ulubionych zdjęć z przygotowań Pana Młodego. Ciekawe czy oglądając reportaż zgadniecie, które to zdjęcie."
                    }
                    entryContentP2={
                        "Po rodzinnym błogosławieństwie udaliśmy się do kościoła Świętej Siostry Faustyny Kowalskiej w Naprawie, gdzie wysłuchaliśmy pięknie przygotowanego kazania. W trakcie ceremonii zespół specjalny, na zamówienie też specjalne, zmontował zestaw nagłośnieniowy i usłyszeliśmy piosenkę Elvisa. Łapy młodych poszły w górę w geście YEAH !!! Następnie udaliśmy się do pięknej sali w Domu Weselnym Karolinka w Bystrej Podhalańskiej. Sylwia i Bartek otworzyli parkiet w pięknym stylu i towarzystwie najmłodszych gości, a po ich pierwszym tańcu zaczęły się taneczne szaleństwa.  Zabawa była przednia. Przed północą Bartek przygotował specjalną niespodziankę &#8211; obraz Marylin Monroe z napisem &#8222;Dziękuję, że jesteś&#8221;. Wręczenie tej pamiątki poprzedzone prezentacją filmową jak to arcydzieło powstawało wycisnęło kilka łez z oczu zebranych gości. Nie zabrakło też podziękowania dla rodziców. To był zdecydowanie piękny dzień! Zapraszam do obejrzenia historii Sylwii i Bartka, a po więcej zdjęć do strefy klienta z hasłem z mojej wizytówki."
                    }
                    slug={"sylwia-i-bartek-zdjecia-slubne-w-jordanowie"}
                    title={"ZDJĘCIA ŚLUBNE W JORDANOWIE - SYLWIA i BARTEK"}
                    tags={"fotograf na wesele kraków,fotograf ślubny kraków,zdjęcia ślubne dom weselny karolinka"}
                    date={"3 czerwca 2016"}
                    menuNames={"SYLWIA i BARTEK"}
                    menuTitle={"ZDJĘCIA ŚLUBNE W JORDANOWIE"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={"url(/static/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg)"}
                />
            </div>
        );
    }
}
