import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/plener_slubny_bielsko_szyndzielnia_klimczok.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0004.jpg", height: 763 },         
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0003.jpg", height: 843 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0032.jpg", height: 763 },   
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0006.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0027.jpg", height: 763 },        
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0012.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0016.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0008.jpg", height: 763 }, 
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0024.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0029.jpg", height: 764 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0026.jpg", height: 763 },  
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0014.jpg", height: 353 },  
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0002.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Plener w Beskidach, Sesja ślubna w Beskidzie Śląskim"}
                    headDescription={"Plener w Beskidach, Sesja ślubna w Beskidzie Śląskim, Starówka w Bielsku Białej, Szyndzielnia i Klimczok. Zapraszam na sesję ślubną Magdaleny i Jonasza."}
                    headKeywords={"Plener ślubny w Beskidach, sesja ślubna w Beskidzie Śląskim"}
                    headUrl={"https://99foto.pl/plener-w-beskidach-sesja-slubna-w-beskidzie-slaskim/"}
                    entryContentP1={
                        "You have to constantly innovate and think of interesting ideas to continue to grow - tak i może właśnie dlatego tym razem zabieram Was w miejsce w którym dotąd jeszcze nie byłem, o porze dnia w której jeszcze nie fotografowałem, aparatem fotograficznym i obiektywami, które pojawiły się na rynku niecałe trzy tygodnie temu. Sesja ślubna w Beskidzie Śląskim to było takie wyjście ze strefy komfortu. Jadąc na tą sesję plenerową wiedziałem tylko, że Magdalena i Jonasz to doskonała para i fotografowanie ich uczucia to będzie prawdziwa przyjemność. Poranne godziny fotografowania wymusiła potencjalna liczba osób na ulicach miasta Bielsko Biała, których wiadomo lepiej nie mieć na zdjęciach. Tym razem to nie ja byłem przewodnikiem, a trasę po uliczkach swojego rodzinnego miasta wytyczał Jonasz, zasypując nas ciekawymi anegdotami związanymi z historią tego miasta."
                    }
                    entryContentP2={
                        "Biały Krzyż położony na Przełęczy Salmopolskiej w Szczyrku to było planowane pierwsze po starówce miejsce plenerowe. Popijając kawę w Macu podjęliśmy jednak inną spontaniczną decyzję, że wyjedziemy liczącą 1810 metrów długości kolejką linową na Szyndzielnie, a następnie przespacerujemy się na Klimczok (1117 m n.p.m.). Nagrodą za tą decyzję była doskonała widoczność. Klimczok widział Tatry, a to dla niego widok bardzo rzadki. Podsumowując wyprawę powiem Wam, że Bielsko Biala i Beskid Śląski może być dobrą alternatywą dla wypraw plenerowych w Tatry czy Pieniny. Plener w Beskidach to świetny pomysł i polecam go każdemu z całego serca. Serdecznie zapraszam na kilka zdjęć i życzę miłego oglądania."
                    }
                    slug={"plener-w-beskidach-sesja-slubna-w-beskidzie-slaskim"}
                    title={"PLENER W BESKIDACH, SESJA ŚLUBNA W BESKIDZIE ŚLĄSKIM - MAGDALENA i JONASZ"}
                    tags={"Plener ślubny w Beskidach, sesja ślubna w Beskidzie Śląskim, Szyndzielnia, Klimczok"}
                    date={"10 października 2020"}
                    menuNames={"MAGDALENA i JONASZ"}
                    menuTitle={"PLENER W BESKIDACH, SESJA ŚLUBNA W BESKIDZIE ŚLĄSKIM"}
                    leadNames={"MARTYNA i MICHAŁ"}
                    leadTitle={"PLENER ŚLUBNY ZAMEK PIESKOWA SKAŁA"}
                    leadUrl={"/plener-slubny-zamek-pieskowa-skala"}
                    leadImage={"url(/static/plener_slubny_zamek_pieskowa_skala_krakow.jpg)"}
                />
            </div>
        );
    }
}
