import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0003.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0009.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0011.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0014.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0018.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0030.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0043.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0036.jpg", height: 402 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0024.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sesja ślubna Strbskie Pleso, Popradzki Staw, Słowacja"}
                    headDescription={"Iwona i Marcin w idealnie wybrany dzień. Słowackie góry Strbskie Pleso, Popradzki Staw. Zapraszam na bloga i kilka zdjęć z tej sesji plenerowej."}
                    headKeywords={"sesja ślubna słowacja,plener strbskie pleso,popradzki staw zdjęcia ślubne"}
                    headUrl={"https://99foto.pl/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja/"}
                    entryContentP1={
                        "Tak, to był właśnie ten tydzień, długo zapowiadana pogoda, temperatura i odpowiednio pokolorowane liście. Wszystko tego dnia zapowiadało świetny plener w górach Słowacji. Zainspirowani zdjęciami kolegów fotografów, wybraliśmy się wszyscy po raz pierwszy w piękne miejsca, którymi były Popradzki Staw i Strbskie Pleso. Pierwsza miejscówka, w której nasz plan dnia podyktował nam postój to rzeka Poprad, która przecięła naszą drogę dojazdową do jeziora. Chwila niepewności i świetny widok z pewnością nie do powtórzenia już nawet następnego dnia, a co dopiero tydzień później. Ponieważ czasu do zachodu słońca było dużo, wdrapywaliśmy się przez godzinkę asfaltową drogą w miejsce, które zdecydowanie pokonuje Morskie Oko, a jest nim Popradzki Staw."
                    }
                    entryContentP2={
                        'Mniej ludzi, malownicze jezioro, ogromne góry, dużo świetnych kadrów do wypatrzenia. W drodze powrotnej zrobiliśmy też kilka zdjęć w lesie. Końcówka to szukanie dwóch kamieni z kadru <a href="https://marcinsosnicki.pl" target="_blank" rel="nofollow">Marcina Sośnickiego</a> i zachwyt nad jesienią oświetloną promieniami zachodzącego słońca. Na koniec zjedliśmy pyszny obiadek w Tatrzańskiej Łomnicy, zrelaksowani i zadowoleni wróciliśmy do naszych domów. Polecam to miejsce na plenery i mam nadzieję, że każdego roku znajdzie się jedna para, która mnie tam zabierze. Miłego oglądania.'
                    }
                    slug={"sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    title={"SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA - IWONA i MARCIN"}
                    tags={"plener strbskie pleso, popradzki staw zdjęcia ślubne, sesja ślubna Słowacja"}
                    date={"3 listopada 2017"}
                    menuNames={"IWONA I MARCIN"}
                    menuTitle={"SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={"url(/static/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg)"}
                />
            </div>
        );
    }
}
