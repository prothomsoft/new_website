import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/plener_slubny_zamek_pieskowa_skala_krakow.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0003.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0005.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0011.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0012.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0028.jpg", height: 763 },            
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0014.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0016.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0007.jpg", height: 763 },  
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0018.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0019.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0021.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0023.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0024.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0025.jpg", height: 763 },           
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0027.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0029.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0030.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Plener ślubny w Zamku Pieskowa Skała"}
                    headDescription={"Długi weekend w Krakowie? Na pewno warto zobaczyć Zamek w Pieskowej Skale. Serdecznie zapraszam na sesję ślubną Martyny i Michała. Miłego oglądania..."}
                    headKeywords={"plener ślubny zamek pieskowa skała, sesja ślubna w zamku"}
                    headUrl={"https://99foto.pl/plener-slubny-zamek-pieskowa-skala/"}
                    entryContentP1={
                        "Po raz kolejny na moim blogu proponuję plener ślubny w okolicach Krakowa i mam nadzieję, że razem z Martyną i Michałem udowadniamy, że żeby zrobić fajne zdjęcia nie trzeba jechać na koniec świata. Tym razem w trakcie sesji ślubej zwiedziliśmy nie tylko herkulesowe okolice ale również weszliśmy do środka Zamku w Pieskowej Skale. Odnowione i oddane do użytku arkady, pilnie strzeżone przez trzech dzielnych strażników (wciąż mniej niż trawa na Wawelu) i piękne okolice, w których pojawiliśmy się razem z promieniami zachodzącego słońca, pomogły nam zrobić bardzo dobre zdjęcia. Martyna wyglądała niesamowicie, a jej pewność siebie i fakt, że od zawsze uwielbia pozować do zdjęć moją prace sprowadziły tylko do naciskania spustu migawki."
                    }
                    entryContentP2={
                        "Do prostych równie jak moje to z migawką zadań Michała należało rozśmieszanie Martyny, oddawanie setek buziaków i prowadzenie w kilku figurach pierwszego tańca. Tak więc podczas gdy Martyna i Michał pewnie jeszcze odsypiają poślubny wyjazd do Chorwacji ja serdecznie zapraszam do oglądania zdjęć z ich sesji ślubnej w Zamku w Pieskowej Skale. Kilka więcej zdjęć również ślubnych znajdziecie w strefie klienta po podaniu hasła z mojej wizytówki. Serdecznie zapraszam do oglądania i sesji ślubnych w nadchodzącym sezonie."
                    }
                    slug={"plener-slubny-zamek-pieskowa-skala"}
                    title={"PLENER ŚLUBNY ZAMEK PIESKOWA SKAŁA - MARTYNA i MICHAŁ"}
                    tags={"plener ślubny zamek pieskowa skała, sesja ślubna w zamku"}
                    date={"30 września 2020"}
                    menuNames={"MARTYNA i MICHAŁ"}
                    menuTitle={"PLENER ŚLUBNY ZAMEK PIESKOWA SKAŁA"}
                    leadNames={"OLGA i DAWID"}
                    leadTitle={"SESJA W KRAKOWIE SUKIENNICE, HOTEL STARY, BULWARY WIŚLANE"}
                    leadUrl={"/sesja-slubna-w-krakowie-sukiennice-hotel-stary-bulwary-wislane"}
                    leadImage={"url(/static/sesja_slubna_sukiennice_hotel_stary_krakow_start.jpg)"}
                />
            </div>
        );
    }
}
