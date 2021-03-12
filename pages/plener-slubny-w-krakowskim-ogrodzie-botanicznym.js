import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/plener_slubny_krakowski_ogrod_botaniczny.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0001.jpg", height: 850 },  
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0025.jpg", height: 763 },   
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0004.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0007.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0008.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0010.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0032.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0011.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0013.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0016.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0036.jpg", height: 763 },         
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0027.jpg", height: 763 },          
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0029.jpg", height: 763 },           
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0028.jpg", height: 762 },               
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0035.jpg", height: 763 },          
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0038.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0039.jpg", height: 762 },         
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0026.jpg", height: 763 },  
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0041.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Plener ślubny w Krakowskim Ogrodzie Botanicznym"}
                    headDescription={"Plener ślubny w Krakowskim Ogrodzie Botanicznym, sesja ślubna w Krakowie. Fotografem ślubnym zostałem, żeby robić właśnie takie zdjęcia. Zapraszam na bloga..."}
                    headKeywords={"plener ślubny w Ogrodzie Botanicznym, zakochani w Krakowie, ślubna sesja zdjęciowa jesienią"}
                    headUrl={"https://99foto.pl/plener-slubny-w-krakowskim-ogrodzie-botanicznym/"}
                    entryContentP1={
                        "Fotografem ślubnym zostałem, żeby robić właśnie takie zdjęcia. Temat Ogrodu Botanicznego w Krakowie w połączeniu z Operą Krakowską pojawił się na moim blogu w wakacje 2018 roku. Plener był to niezapomniany z Dajaną i Sylwestrem w rolach głównych. Od tamtego czasu Ogród Botaniczny przeszedł sporą metamorfozę za sprawą jak się domyślam funduszy europejskich. Był to z pewnością jeden z czynników, który doprowadził do wprowadzeniu dość absurdalnej opłaty za wykonanie zdjęć ślubnych. Ale jak wiadomo realizowanie marzeń jest bezcenne, a za resztę zapłacisz kartą mastercard. Teresę i Andrzeja znam już bardzo długo i w międzyczasie spotkaliśmy się na sesję narzeczeńską, którą również znajdziecie na moim blogu."
                    }
                    entryContentP2={
                        "Od początku jestem zachwycony urodą Teresy i podziwiam siłę i niezniszczalność kręgosłupa Andrzeja (gdy przewraca wszystkie te dziewczyny w tańcu). Jesienne popołudnie w pięknym Krakowie, promienie słońca przebijające się przez setki odmian przeróżnej zieleni. Uczucia, emocje, uśmiechy, zaufanie. Cisnęliśmy na maksa i uwielbiam te zdjęcia. Serdecznie zapraszam do oglądania. "
                    }
                    slug={"plener-slubny-w-krakowskim-ogrodzie-botanicznym"}
                    title={"PLENER ŚLUBNY W KRAKOWSKIM OGRODZIE BOTANICZNYM - TERESA i ANDRZEJ"}
                    tags={"plener ślubny w Ogrodzie Botanicznym, zakochani w Krakowie, ślubna sesja zdjęciowa jesienią"}
                    date={"18 października 2020"}
                    menuNames={"TERESA i ANDRZEJ"}
                    menuTitle={"PLENER ŚLUBNY W KRAKOWSKIM OGRODZIE BOTANICZNYM"}
                    leadNames={"MAGDALENA i JONASZ"}
                    leadTitle={"PLENER W BESKIDACH, SESJA ŚLUBNA W BESKIDZIE ŚLĄSKIM"}
                    leadUrl={"/plener-w-beskidach-sesja-slubna-w-beskidzie-slaskim"}
                    leadImage={"url(/static/plener_slubny_bielsko_szyndzielnia_klimczok.jpg)"}
                />
            </div>
        );
    }
}
