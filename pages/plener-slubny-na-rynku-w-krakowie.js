import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/plener_slubny_na_rynku_w_krakowie.jpg",
            },
        ];

        let images = [
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0002.jpg", height: 852 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0003.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0004.jpg", height: 851 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0006.jpg", height: 851 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0007.jpg", height: 764 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0009.jpg", height: 913 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0010.jpg", height: 851 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0012.jpg", height: 851 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0014.jpg", height: 851 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0016.jpg", height: 852 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0018.jpg", height: 852 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0022.jpg", height: 851 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0020.jpg", height: 526 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0025.jpg", height: 526 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0026.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0028.jpg", height: 526 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/05/sesja_zdjeciowa_rynek_w_krakowie_0030.jpg", height: 762 },
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Plener ślubny na Rynku w Krakowie"}
                    headDescription={
                        "Plener ślubny na Rynku w Krakowie, pomysł na sesję zdjęciową w czasie epidemii koronawirusa. Rynek Główny w Krakowie bez ludzi to możliwe - sami zobaczcie na bloga. Zapraszam."
                    }
                    headKeywords={"plener ślubny w czasie epidemii koronawirusa, sesja zdjęciowa na rynku w Krakowie"}
                    headUrl={"https://99foto.pl/plener-slubny-na-rynku-w-krakowie/"}
                    entryContentP1={
                        "Dwudziesty kwietnia, konferencja prasowa premiera i ministra zdrowia, nowe rozporządzenia w ramach rozmrażania gospodarki. Tego dnia wszyscy fotografowie i pary młode w Polsce w ramach wykonywania swojej pracy w czasie epidemii koronawirusa zyskali pozwolenie na wykonywanie plenerów ślubnych bez maseczek. Ślub Patrycji i Krzyśka odbył się w pażdzierniku, brak śniegu zimą przesunął nasze plenerowe plany do wiosny. Hashtag zostańwdomu zapewnił nam pusty Rynek Główny w Krakowie, do tego wybraliśmy mega słoneczny dzień i moment w którym drzewa były już wystarczająco zielone. Miejmy nadzieję, że taka okazja na bezludny Kraków w historii nas wszystkich już się nie powtórzy i był to jedyny moment, który dobrze wykorzystaliśmy."
                    }
                    entryContentP2={
                        "Od poniedziałku wszyscy możemy więcej. Fotograficznie nadal możemy w pełni legalnie wykonywać plenery bez używania maseczek. Epidemia koronowirusa potrwa jeszcze trochę i nikt w tym roku nie spodziewa się ceremonii ślubnej bez maseczek. Jedno jest pewne w oczekiwaniu na lepsze czasy na moim blogu będą pojawiać się wpisy plenerowe. Serdecznie zapraszam do oglądania.  "
                    }
                    slug={"plener-slubny-na-rynku-w-krakowie"}
                    title={"PLENER ŚLUBNY NA RYNKU W KRAKOWIE - PATRYCJA i KRZYSZTOF"}
                    tags={"plener ślubny w czasie epidemii koronawirusa, sesja zdjęciowa na rynku w Krakowie"}
                    date={"02 maja 2020"}
                    menuNames={"PATRYCJA i KRZYSZTOF"}
                    menuTitle={"PLENER ŚLUBNY NA RYNKU W KRAKOWIE"}
                    leadNames={"MARLENA i ADAM"}
                    leadTitle={"SESJA ŚLUBNA W KRAKOWIE. MIEJSCA IDEALNE NA ROMANTYCZNE KADRY"}
                    leadUrl={"/sesja-slubna-w-krakowie-miejsca-idealnie-nadajace-sie-na-romantyczne-kadry"}
                    leadImage={"url(/static//marlena_start.jpg)"}
                />
            </div>
        );
    }
}
