import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: process.env.staticImagesPath + "sylwia_i_bartek_sesja_poslubna_krakow_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0003.jpg", height: 852 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0005.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0006.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0007.jpg", height: 852 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0009.jpg", height: 526 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0008.jpg", height: 852 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0011.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0013.jpg", height: 526 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0014.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0016.jpg", height: 852 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0015.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0018.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0019.jpg", height: 852 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0021.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0024.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0026.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0010.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Zdjęcia ślubne na Rynku w Krakowie"}
                    headDescription={"Wtorkowe popołudnie z gwarantowaną pogodą i białymi chmurkami spędziliśmy z Sylwią i Barkiem spacerując po Krakowie. Miłego oglądania."}
                    headKeywords={"sesja ślubna kazimierz,plener ślubny kraków,zdjęcia ślubne na rynku w krakowie"}
                    headUrl={"https://99foto.pl/sylwia-i-bartek-sesja-poslubna-krakow/"}
                    entryContentP1={
                        "Tak, to był właśnie ten tydzień, długo zapowiadana pogoda, temperatura i odpowiednio pokolorowane liście. Wszystko tego dnia zapowiadało świetny plener w górach Słowacji. Zainspirowani zdjęciami kolegów fotografów, wybraliśmy się wszyscy po raz pierwszy w piękne miejsca, którymi były Popradzki Staw i Strbskie Pleso. Pierwsza miejscówka, w której nasz plan dnia podyktował nam postój to rzeka Poprad, która przecięła naszą drogę dojazdową do jeziora. Chwila niepewności i świetny widok z pewnością nie do powtórzenia już nawet następnego dnia, a co dopiero tydzień później. Ponieważ czasu do zachodu słońca było dużo, wdrapywaliśmy się przez godzinkę asfaltową drogą w miejsce, które zdecydowanie pokonuje Morskie Oko, a jest nim Popradzki Staw."
                    }
                    entryContentP2={
                        'Mniej ludzi, malownicze jezioro, ogromne góry, dużo świetnych kadrów do wypatrzenia. W drodze powrotnej zrobiliśmy też kilka zdjęć w lesie. Końcówka to szukanie dwóch kamieni z kadru <a href="https://marcinsosnicki.pl" target="_blank" rel="nofollow">Marcina Sośnickiego</a> i zachwyt nad jesienią oświetloną promieniami zachodzącego słońca. Na koniec zjedliśmy pyszny obiadek w Tatrzańskiej Łomnicy, zrelaksowani i zadowoleni wróciliśmy do naszych domów. Polecam to miejsce na plenery i mam nadzieję, że każdego roku znajdzie się jedna para, która mnie tam zabierze. Miłego oglądania.'
                    }
                    slug={"sylwia-i-bartek-sesja-poslubna-krakow"}
                    title={"SESJA ŚLUBNA KRAKÓW - SYLWIA i BARTEK"}
                    tags={"sesja ślubna kazimierz,plener ślubny kraków,zdjęcia ślubne na rynku w krakowie"}
                    date={"9 czerwca 2016"}
                    menuNames={"SYLWIA i BARTEK"}
                    menuTitle={"SESJA ŚLUBNA KRAKÓW"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"SESJA ZDJĘCIOWA DWÓR TOMASZOWICE, OPERA, KAZIMIERZ"}
                    leadUrl={"/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz"}
                    leadImage={"url(/static/sesja_zdjeciowa_dwor_tomaszowice_krakow_start.jpg)"}
                />
            </div>
        );
    }
}
