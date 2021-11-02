import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: process.env.staticImagesPath + "plener_slubny_park_mogilany.jpg"
            }
        ];

        let images = [
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0002.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0003.jpg", height: 851 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0004.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0034.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0029.jpg", height: 762 },           
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0014.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0006.jpg", height: 852 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0021.jpg", height: 762 },           
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0009.jpg", height: 851 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0024.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0031.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0016.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0020.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0013.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0012.jpg", height: 851 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0015.jpg", height: 762 },   
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0035.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0011.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0037.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0017.jpg", height: 851 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0018.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0032.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0008.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0027.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0026.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0025.jpg", height: 763 }, 
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0030.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0028.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0033.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0040.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0036.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0038.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0022.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0007.jpg", height: 762 },   
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0039.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/11/sesja_slubna_park_mogilany_0019.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Wymarzony plener ślubny w Krakowie, sprawdzone miejsca"}
                    headDescription={"Plener ślubny w Krakowie, magiczne drzewa w Parku w Mogilanach i Opactwo Tynieckie w promieniach zachodzącego słońca. Plener ślubny zakochanej pary w Krakowie. Zapraszam na bloga."}
                    headKeywords={"plener ślubny w Krakowie, Park Mogilany, Opactwo Benedyktynów Tyniec, sprawdzone miejsce plenerowe"}
                    headUrl={"https://99foto.pl/wymarzony-plener-slubny-w-krakowie-sprawdzone-miejsca/"}
                    entryContentP1={
                        'Tomku pytają, jak zaplanować i przygotować najpiękniejszą ślubną sesję plenerową lub w skrócie plener ślubny. Sesja plenerowa jest bardzo ważna dla nas mówią i moglibyśmy zrobić kilka zdjęć w dniu ślubu, ale zostawiać gości bez naszego towarzystwa - słabo, umówmy się więc na spokojnie, najlepiej kilka dni po uroczystości. Gdybyś jakieś miejsca mógł nam zaproponować, bo my się nie znamy, a Ty tych plenerów to już trochę zrobiłeś i pewnie ogarniasz jakieś dobre miejscówki. Takie tam z życia wzięte dyskusje i rzeczywiście mam swoje ulubione lokalizacje w Krakowie i bliskich okolicach. Dzisiaj wspomnę tylko o jednym z możliwych scenariuszy. Pierwszy z nich to spotkanie w Parku w Mogilanach. Miejsce to jest niezwykle popularne i robiąc tam sesję plenerową popołudniową porą w słoneczny dzień, zwykle spotyka się inne Pary ślubne, które również robią swoje sesje ślubne. Mocną stroną tego miejsca jest zachodzące z odpowiedniej strony słońce, zawsze zadbana zieleń i białe ściany dworu, który w chwili obecnej wymaga małej renowacji, ale nadal ma swój klimat, widok na Tatry i cudowne drzewa, które tak naprawdę tworzą magię tego miejsca.'
                    }
                    entryContentP2={
                        'Dodajmy jeszcze brak opłat za wykonywanie zdjęć i mamy miejscówkę idealną. Gdyby zabrakło nam pomysłów na kadry w tym miejscu to zawsze w dwadzieścia minut możemy podjechać do Opactwa Benedyktynów w Tyńcu. Mamy tam do dyspozycji, aż trzy możliwości. Pierwsza to skałki, położone za Opactwem i teren bezpośrednio przy Wiśle, w której często pojawiają się mroczne mgły, w godzinach porannych oczywiście. Drugie miejsce to dziedziniec Opactwa Benedyktynów w Tyńcu, gdzie można wymyślić kilka ciekawych kadrów. Trzecia możliwość wymagająca umówienia się z braćmi to Ogrody Tynieckie znajdujące się za bramami Opactwa (byłem, widziałem, warto wejść). Ania była zdecydowana na sesję plenerową w Dworze w Mogilanach, dołożyliśmy do tego zachód słońca w Opactwie Benedyktynów w Tyńcu i zdjęcia z naszej sesji zdjęciowej możecie zobaczyć na blogu. Zapraszam do lajkowania, udostępniania i na zdjęcia poniżej z których jestem wyjątkowo zadowolony. Życzę miłego oglądania i już niedługo sezon ślubny się kończy więc na blogu pojawi się więcej zdjęć z wakacyjnych reportaży ślubnych.'
                    }
                    slug={"wymarzony-plener-slubny-w-krakowie-sprawdzone-miejsca"}
                    title={"WYMARZONY PLENER ŚLUBNY W KRAKOWIE, SPRAWDZONE MIEJSCA  - ANNA i TOMASZ"}
                    tags={"plener ślubny w Krakowie, Park Mogilany, Opactwo Benedyktynów Tyniec, sprawdzone miejsce plenerowe"}
                    date={"02 listopada 2021"}
                    menuNames={"ANNA I TOMASZ"}
                    menuTitle={"WYMARZONY PLENER ŚLUBNY W KRAKOWIE, SPRAWDZONE MIEJSCA"}
                    leadNames={"WIKTORIA i KONRAD"}
                    leadTitle={"BRZOSKWINIA OGRÓD, WESELE W PLENERZE, SESJA NARZECZEŃSKA"}
                    leadUrl={"/brzoskwinia-ogrod-wesele-w-plenerze-sesja-narzeczenska"}
                    leadImage={"url(/static/brzoskwinia_ogrod_sesja_narzeczenska_start.jpg)"}
                />
            </div>
        );
    }
}