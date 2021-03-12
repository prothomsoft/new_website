import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/natalia_marcin_i_maja_reportaz_slubny_gosciniec_branicki_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2016/09/natalia.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0002.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0004.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0006.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0009.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0007.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0015.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0016.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0017.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0018.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0020.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0021.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0023.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0024.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0025.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0026.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0027.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0031.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0032.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0036.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0038.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0039.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0040.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0041.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0042.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0046.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0048.jpg", height: 439 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0049.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0050.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0051.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0052.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0054.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0055.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0056.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0057.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0061.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0062.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0063.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0064.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0065.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0066.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0067.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0068.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0069.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0070.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0071.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0072.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0073.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0074.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0075.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0076.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0077.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0078.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0079.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0080.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0081.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0082.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0083.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0084.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0085.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0086.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0087.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0088.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0089.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0090.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0091.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0092.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0093.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0094.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0095.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0096.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0097.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0098.jpg", height: 806 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0099.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0100.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0101.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0102.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0103.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0104.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0105.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0106.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0107.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0108.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0110.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0111.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0112.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0113.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0114.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0115.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0116.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0117.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0118.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0119.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0120.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0121.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0123.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0122.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0124.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0126.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0125.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0127.jpg", height: 764 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0128.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0129.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0130.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0131.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0132.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0133.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0134.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0135.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0136.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0137.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0138.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0139.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0140.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0141.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0142.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0143.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0144.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0145.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0146.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0147.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0148.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0149.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0150.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0151.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0152.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0153.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0154.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0155.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0156.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0157.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0158.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0159.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_slubny_krakow_0160.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Reportaż ślubny Gościniec Branicki, Kraków"}
                    headDescription={"Kraków Nowa Huta, Wzgórza Krzesławickie i Branice, miejsca które odwiedziłem fotografując ślub Natalii i Marcina. Dużo, dużo fajnych kadrów."}
                    headKeywords={"reportaż ślubny kraków,zdjęcia ślubne gościniec branicki"}
                    headUrl={"https://99foto.pl/natalia-marcin-i-maja-reportaz-slubny-gosciniec-branicki/"}
                    entryContentP1={
                        'Kraków Nowa Huta, Wzgórza Krzesławickie i Branice, miejsca te mogłem odwiedzić fotografując ważny dzień w życiu Natalii, Marcina i ich małej córeczki Mai. Przygotowania rozpoczęliśmy już przed południem. Wizażystka w pierwszej kolejności zajęła się fryzurami i makijażem druhen Karoliny i Moniki.  Kiedy dziewczyny potwierdziły, że wyglądają świetnie w fotelu usiadła Natalia. Maja, przychodząc co kilka minut, sprawdzała czy fryzura i makijaż mamy są już gotowe. Po godzinie układania i malowania nadszedł czas na ubieranie sukni ślubnej, a następnie na pełne wzruszeń błogosławieństwo. W świetnych humorach wyruszyliśmy do <a href="https://www.wzgorza.diecezja.krakow.pl/" target="_blank" rel="nofollow">Kościoła Miłosierdzia Bożego w Krakowie na Wzgórzach Krzesławickich</a>.'
                    }
                    entryContentP2={
                        'Ksiądz przywitał Natalię i Marcina w zachrystii, udzielił kilku rad i rozpoczęła się wzruszająca ceremonia, podczas której młodzi wypowiedzieli sakramentalne TAK. Przywitanie chlebem i solą oraz życzenia odbyły się w <a href="https://gosciniec-branicki.pl" target="_blank" rel="nofollow">Domu Weselnym Gościniec Branicki</a>. Kieliszki z szampanem uległy planowanemu zniszczeniu gwarantując dużo szczęścia w przyszłości. Po obiedzie młodzi zatańczyli pierwszy taniec i zaprosili gości do wspólnej zabawy. Świetny klimat, szalona zabawa i wesoła ekipa. <a href="https://www.planujemywesele.pl/35133-zespol-muzyczny-prospect" target="_blank" rel="nofollow">Zespół Muzyczny Prospect</a> dbał o frekwencję na parkiecie do białego rana. Wielkie, wielkie dziękuję za ten wyjątkowy dzień, ciepłe przyjęcie i genialną atmosferę. Miłego oglądania, a po więcej zdjęć zapraszam gości weselnych do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"natalia-marcin-i-maja-reportaz-slubny-gosciniec-branicki"}
                    title={"REPORTAŻ ŚLUBNY GOŚCINIEC BRANICKI - NATALIA, MARCIN i MAJA"}
                    tags={"reportaż ślubny kraków,zdjęcia ślubne gościniec branicki"}
                    date={"29 września 2016"}
                    menuNames={"NATALIA, MARCIN i MAJA"}
                    menuTitle={"REPORTAŻ ŚLUBNY GOŚCINIEC BRANICKI"}
                    leadNames={"JULITA i PAWEŁ"}
                    leadTitle={"REPORTAŻ ŚLUBNY KOŚCIÓŁ NA SKAŁCE KRAKÓW"}
                    leadUrl={"/julita-i-pawel-reportaz-slubny-kosciol-na-skalce-krakow"}
                    leadImage={"url(/static/julita_i_pawel_reportaz_slubny_kosciol_na_skalce_krakow_start.jpg)"}
                />
            </div>
        );
    }
}
