import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/iga_i_marcin_sesja_poslubna_kazimierz_krakow_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0001.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0002.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0004.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0005.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0006.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0008.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0009.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0010.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0012.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0015.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0018.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0021.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0022.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0025.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0026.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/07/sesja_poslubna_kazimierz_krakow_0027.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sesja ślubna Kazimierz Kraków"}
                    headDescription={"Kościół na Skałce, Wawel, spacer bulwarami Wiślanymi i Kazimierz. W każdym miejscu kilka fajnych zdjęć Igi i Marcina. Zapraszam do oglądania."}
                    headKeywords={"sesja ślubna kazimierz,zdjęcia ślubne na wawelu,fotograf na ślub kraków"}
                    headUrl={"https://99foto.pl/iga-i-marcin-sesja-poslubna-kazimierz-krakow/"}
                    entryContentP1={
                        "Iga i Marcin w czasach studenckich mieszkali na ulicy Paulińskiej, dlatego też z tego miejsca rozpoczęliśmy naszą wyprawę po Krakowie. Kościół na Skałce, wspinaczka na Wawel i tam kilka fotek, a następnie prosto na Kazimierz, gdzie odwiedziliśmy Stajnię, Mleczarnie, Qulinaria, Starą Zajezdnię i Kładkę Bernatkę, każde miejsce inne i ciekawe do fotografowania."
                    }
                    entryContentP2={
                        "Przed słońcem chroniły nas delikatne chmurki i lekki wiatr, więc pogoda była idealna. W drodze powrotnej zahaczyliśmy nawet o zachód słońca. Było very nice i staraliśmy się utrzymać dynamizm akcji w trakcie całej sesji &#8211; dużo biegów bo Marcin to AWF-owiec. Oglądając zdjęcia możecie sami zobaczyć i ocenić czy nasz plan udało się zrealizować. Miłego oglądania !!!"
                    }
                    slug={"iga-i-marcin-sesja-poslubna-kazimierz-krakow"}
                    title={"SESJA ŚLUBNA KAZIMIERZ KRAKÓW - IGA i MARCIN"}
                    tags={"sesja ślubna kazimierz,zdjęcia ślubne na wawelu,fotograf na ślub kraków"}
                    date={"6 lipca 2015"}
                    menuNames={"IGA i MARCIN"}
                    menuTitle={"SESJA ŚLUBNA KAZIMIERZ KRAKÓW"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"ZDJĘCIA ŚLUBNE RESTAURACJA STEK SKAWINA"}
                    leadUrl={"/zdjecia-slubne-restauracja-stek-skawina"}
                    leadImage={"url(/static/zdjecia_slubne_restauracja_stek_skawina_start.jpg)"}
                />
            </div>
        );
    }
}
