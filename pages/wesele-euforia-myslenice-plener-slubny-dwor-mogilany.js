import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/fotograf_slubny_wesele_mogilany_krakow.jpg",
            },
        ];

        let images = [
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0001.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0010.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0012.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0015.jpg", height: 566 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0018.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0014.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0024.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0027.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0028.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0029.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0030.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0033.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0035.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0036.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0037.jpg", height: 382 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0041.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0042.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0044.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0046.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0048.jpg", height: 382 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0054.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0061.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0062.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0063.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0064.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0078.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0081.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0082.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0083.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0085.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0086.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0087.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0088.jpg", height: 763 },

            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0094.jpg", height: 527 },

            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0092.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0091.jpg", height: 402 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0093.jpg", height: 806 },

            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0095.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0096.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0097.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0099.jpg", height: 566 },

            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0101.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0103.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0100.jpg", height: 566 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0105.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0106.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0107.jpg", height: 526 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0108.jpg", height: 526 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0109.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0110.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0111.jpg", height: 763 },

            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0113.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0120.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0121.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0125.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0126.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0128.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0131.jpg", height: 805 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0135.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0138.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0139.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0140.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0141.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0142.jpg", height: 526 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0144.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0145.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0146.jpg", height: 850 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0151.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0148.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0149.jpg", height: 850 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0157.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0147.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0155.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0150.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0153.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0154.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0156.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/fotograf_na_wesele_mogilany_krakow_0152.jpg", height: 763 },
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Wesele Euforia Myślenice, Plener Ślubny Dwór Mogilany, Dobry fotograf Kraków"}
                    headDescription={
                        "Wesele w Mogilanach, Sala weselna Euforia w Myślenicach, dobry fotograf ślubny z Krakowa na weselu. Plener ślubny Dwór w Mogilanach. Serdecznie zaprasam na bloga."
                    }
                    headKeywords={"wesele Euforia Myślenice, plener Ślubny Dwór Mogilany, dobry fotograf Kraków"}
                    headUrl={"https://99foto.pl/wesele-euforia-myslenice-plener-slubny-dwor-mogilany/"}
                    entryContentP1={
                        "Śluby fotografuję juz kilka lat. Praca ta pozwala poznawać ciekawych ludzi i odwiedzać nowe miejsca. Tym razem miałem niezwykle dużo szczęścia, poznałem niesamowicie dopasowanych do siebie nie tylko wzrostem Natalię i Kacpra, którzy już od samego początku obdarzyli mnie zaufaniem i miałem pewność o ich przekonaniu, że zrobię dla nich naprawdę dobry reportaż ślubny. Zaprosili mnie do świetnych miejsc. Kościół św. Bartłomieja Apostoła w Mogilanach w słoneczne dni to miejsce ze świetnym światłem, gramem cienia, gdzie można poprzytulać się z gośćmi podczas goracych życzeń i dzwonnicą, gdzie na zdjęciu grupowym nie zabraknie miejsca dla nikogo. "
                    }
                    entryContentP2={
                        '<a href="http://www.salaeuforia.pl/" target="_blank" rel="nofollow">Dom Weselny Euforia</a> w Myślenicach, który w standardzie jest wyposażony w nagłośnienie i oświetlenie, przemiłą Panią, która ustawi wybrane kolory i taras, na którym odpalenie zimnych ogni to czysta przyjemność. <a href="http://www.mogilany.info/inicjatwy/dwor-w-mogilanach" target="_blank" rel="nofollow">Dwór w Mogilanach</a>, którego historia sięga szesnatego wieku, a zieleń wygląda tak, jakby dbał o nią cały sztab architektów zieleni miejskiej. Sobota, ten najważniejszy dzień w życiu Natalii i Kacpra, kiedy przysięgli sobie miłość na zawsze. Był to piękny ślub i wspaniała zabawa w gronie najlepszych przyjaciół i bliskiej rodziny. Jeszcze raz dziękuję za zaufanie i setki uśmiechów w stronę mojego obiektywu. Serdecznie zapraszam na zdjęcia i życzę miłego oglądania.'
                    }
                    slug={"wesele-euforia-myslenice-plener-slubny-dwor-mogilany"}
                    title={"WESELE EUFORIA MYŚLENICE, PLENER ŚLUBNY DWÓR MOGILANY - NATALIA i KACPER"}
                    tags={"wesele Euforia Myślenice, plener Ślubny Dwór Mogilany, dobry fotograf Kraków"}
                    date={"17 sierpnia 2020"}
                    menuNames={"NATALIA i KACPER"}
                    menuTitle={"WESELE EUFORIA MYŚLENICE, PLENER ŚLUBNY DWÓR MOGILANY"}
                    leadNames={"PATRYCJA i TOMASZ"}
                    leadTitle={"WESELE W ZAKOPANEM, HOTEL MERCURE KASPROWY, ICH TROJE"}
                    leadUrl={"/wesele-w-zakopanem-hotel-mercure-kasprowy-ich-troje"}
                    leadImage={"url(/static/wesele_w_zakopanem_hotel_mercure_kasprowy.jpg)"}
                />
            </div>
        );
    }
}
