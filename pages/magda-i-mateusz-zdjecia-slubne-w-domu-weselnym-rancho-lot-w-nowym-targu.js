import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: process.env.staticImagesPath + "magda_i_mateusz_zdjecia_slubne_w_domu_weselnym_rancho_lot_w_nowym_targu_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0002.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0007.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0008.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0013.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0016.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0021.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0024.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0030.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0029.jpg", height: 526 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0034.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0036.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0040.jpg", height: 805 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0042.jpg", height: 526 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0043.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0044.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0047.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0048.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0050.jpg", height: 850 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0054.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0062.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0064.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0066.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0067.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0069.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0070.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0076.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0084.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0087.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0094.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0098.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0104.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0106.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0107.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0108.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0109.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0110.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0114.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0115.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0116.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0126.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0128.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0129.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0138.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0140.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0144.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0145.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0146.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0147.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0148.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0149.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0150.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0151.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0152.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0153.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0154.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0155.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0156.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0157.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_jordanow_0123.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Zdjęcia ślubne w Domu Weselnym Rancho Lot"}
                    headDescription={"DWA MILIONY ZŁOTYCH - tyle kosztował samochód ślubny Magdy i Mateusza. Radość młodego, gdy pokierował kilka metrów tym wehikułem BEZCENNA."}
                    headKeywords={"fotograf na wesele kraków,zdjęcia ślubne jordanów,zdjęcia ślubne w domu weselnym rancho lot"}
                    headUrl={"https://99foto.pl/magda-i-mateusz-zdjecia-slubne-w-domu-weselnym-rancho-lot-w-nowym-targu/"}
                    entryContentP1={
                        "Połowa maja i kolejne ślubne emocje tym razem za sprawą Magdy i Mateusza. Historię rozpoczynamy od makijażu w domu rodzinnym Magdy w Jordanowie. Makijaż po raz kolejny perfekcyjnie wykonała Iwona, którą miałem okazję już poznać na ślubie ponad rok wcześniej. Błogosławieństwo to dużo emocji i pierwsze łzy wzruszeń, które na moment zastąpiły uśmiechy na twarzach gości. Tylko na moment, ponieważ w drodze po raz kolejny uśmiechów nie brakowało. Tym razem dużo dobrego działo się w zakrystii. Zgromadzona ilość księży mogłaby wskazywać na prymicje i była wynikiem wieloletniego zaangażowania młodych w działalność duszpasterską pewnie wiecie, że tak to wszystko się właśnie zaczęło."
                    }
                    entryContentP2={
                        'Ceremonia ślubna odbyła się w Kościele Przenajświętrzej Trójcy w Jordanowie. Tato Magdy, którego wyjątkowo polubiłem między innymi z racji wspólnych fotograficznych zainteresowań, nie krył wzruszenia. Po życzeniach i zdjęciu grupowym udaliśmy się na salę weselną w <a href="https://rancholot.pl/" target="_blank" rel="nofollow">Domu Weselnym Rancho Lot</a>, gdzie na młodych czekali już rodzice, witając ich chlebem i solą. Pisząc udaliśmy się mam na myśli podróż wyjątkowym, wartym 2 miliony złotych autobusem miejskim. Radość Mateusza, jak pokierował kilka metrów tym wehikułem bezcenna. Wesele istne szaleństwo, od pierwszych utworów. Wspaniali goście, zespół <a href="https://www.facebook.com/Somgorsy-137802699600369/" target="_blank" rel="nofollow">Somgorsy</a>, który tworzył muzyczne tło dla genialnej osobowości wokalistki sprawiał, że parkiet pękał w szwach. Bardzo dziękuję Magdzie i Mateuszowi, za to, że mogłem towarzyszyć im w tym szczególnym dniu. Była to dla mnie wilka przyjemność. Zapraszam na reportaż i do strefy klienta po więcej zdjęć!'
                    }
                    slug={"magda-i-mateusz-zdjecia-slubne-w-domu-weselnym-rancho-lot-w-nowym-targu"}
                    title={"ZDJĘCIA ŚLUBNE W DOMU WESELNYM RANCHO LOT NOWY TARG - MAGDA i MATEUSZ"}
                    tags={"fotograf na wesele kraków,zdjęcia ślubne jordanów,zdjęcia ślubne w domu weselnym rancho lot"}
                    date={"14 maja 2016"}
                    menuNames={"MAGDA i MATEUSZ"}
                    menuTitle={"ZDJĘCIA ŚLUBNE W DOMU WESELNYM RANCHO LOT NOWY TARG"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"SESJA ZDJĘCIOWA DWÓR TOMASZOWICE, OPERA, KAZIMIERZ"}
                    leadUrl={"/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz"}
                    leadImage={"url(/static/sesja_zdjeciowa_dwor_tomaszowice_krakow_start.jpg)"}
                />
            </div>
        );
    }
}
