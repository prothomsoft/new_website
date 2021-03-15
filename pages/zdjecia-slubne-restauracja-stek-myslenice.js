import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/zdjecia_slubne_restauracja_stek_myslenice_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0002.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0003.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0011.jpg", height: 382 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0141.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0140.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0008.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0016.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0013.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0014.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0028.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0029.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0033.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0035.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0037.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0040.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0044.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0047.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0076.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0078.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0081.jpg", height: 382 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0093.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0120.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0123.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Zdjęcia ślubne Restauracja Stek Myślenice"}
                    headDescription={"Restauracja Stek Myślenice, świetne miejsce na zabawę trwającą do białego rana. Zobaczcie jak super było na ślubie Sylwii i Tomka. Miłego oglądania."}
                    headKeywords={"fotograf ślubny myślenice,restauracja stek myślenice"}
                    headUrl={"https://99foto.pl/zdjecia-slubne-restauracja-stek-myslenice/"}
                    entryContentP1={
                        "Bardzo słoneczny i ciepły początek kwietnia zwiastował piękną, pełną białych kwiatów na drzewach wiosnę. W połowie drogi miesiąc stracił wątek i powrócił do niższych zimowych temperatur, a w górach nawet do pokaźnej warstwy śniegu. Wyobrażam więc sobie, że sobotnie przedpołudnie w Filipowicach, gdzie rozpoczęliśmy reportaż ślubny z najważniejszego dnia Sylwii i Tomka, minął między innymi na sprawdzaniu pogody i wyczekiwaniu na wymarzone słońce. Udało się i pogoda w drugiej części dnia dopisała, a krótki plener w Zarabiu u stóp Góry Chełm, który zrobiliśmy na dosłownie kilka chwil opuszczając gości, doświetlały ciepłe promienie zachodzącego słońca. Ale może zacznę od początku. Kilka minut po godzinie dwunastej pod domem Sylwii pojawił się szybki samochód, z którego wysiadł Tomek. Chwilę później w rękach Sylwii wylądował piękny bukiet kwiatów, a Tomasz w zamian otrzymał kilka słodkich buziaków."
                    }
                    entryContentP2={
                        'Tradycyjnie rodzice pobłogosławili Młodych po czym udaliśmy się do <a href="https://sanktuarium.myslenice.pl/" target="_blank" rel="nofollow">Kościoła Narodzenia Najświętszej Maryi Panny w Myślenicach</a> na ceremonię zaślubin. Ponieważ jak już wspomniałem samochód był szybki, to droga do Myślenic lekko przypominała wyścig. Po podwójnym TAK i nałożeniu obrączek na twarzach Młodych pojawiły się ogromne uśmiechy. Życzenia i zabawa weselna odbyła się w <a href="https://stek.com.pl/myslenice/" target="_blank" rel="nofollow">Restauracji Stek w Myślenicach</a>. Tomasz przeniósł Sylwię przez próg i po lampce szampana Młodzi przyjęli gorące życzenia od przybyłych gości. Za sprawą dj-a Dawida, parkiet zapełniał się bardzo szybko i szaleństw, tańców na nim nie było końca. Od czasu do czasu przez salę przejeżdżał pociąg, ten z daleka i pojawiały się postacie w maskach, prześmiesznych kapeluszach, kolorowych okularach i ponadczasowych perukach. Nie zabrakło też podziękowań dla rodziców, przepysznego torta i tradycyjnych oczepin. Sylwio i Tomku, bardzo Wam dziękuję za ten wyjątkowy dzień, ciepłe przyjęcie i genialną atmosferę. Życzę miłego oglądania, a po więcej zdjęć zapraszam Was i gości weselnych do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"zdjecia-slubne-restauracja-stek-myslenice"}
                    title={"ZDJĘCIA ŚLUBNE RESTAURACJA STEK MYŚLENICE - SYLWIA i TOMASZ"}
                    tags={"fotograf ślubny myślenice,restauracja stek myślenice"}
                    date={"28 kwietnia 2017"}
                    menuNames={"SYLWIA i TOMASZ"}
                    menuTitle={"ZDJĘCIA ŚLUBNE RESTAURACJA STEK MYŚLENICE"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={"url(/static/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg)"}
                />
            </div>
        );
    }
}
