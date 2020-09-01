import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sesja_plenerowa_niepolomice.jpg",
            },
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0001.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0003.jpg", height: 566 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0006.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0009.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0012.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0013.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0014.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0032.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/08/plener_slubny_w_niepolomicach_0002.jpg", height: 763 },
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Plener ślubny Zamek Królewski w Niepołomicach, Czarny Staw - Basia i Marcin"}
                    headDescription={"123"}
                    headKeywords={"plener ślubny niepołomice, plener ślubny Zamek Króleski w Niepołomicach, Czarny Staw w Puszczy Niepołomickiej"}
                    headUrl={"https://99foto.pl/plener-slubny-zamek-krolewski-w-niepolomicach-czarny-staw/"}
                    entryContentP1={
                        'Sesja ślubna w plenerze jest świetnym i naturalnym dopełnieniem reportażu ślubnego. Czy będzie to trzydziestominutowa krótka sesja w dniu ślubu, trzygodzinny plener w jeden z wakacyjnych słonecznych dni czy całodniowa wyjazdowa sesja plenerowa w górach zależy tylko od Was. Każda para młoda poszukując dobrego fotografa ślubnego musi znaleźć odpowiedź również i na to pytanie. Pamiętajcie, że czasem nie warto szukać daleko, bo świetne miejscówki mamy tuż pod naszym nosem. Szczególnie, że Kraków i jego okolice oferują ogromną ilość świetnych miejsc na niezapomniany plener ślubny. <a href="http://www.zamekkrolewski.com.pl/" target="_blank" rel="nofollow">Plener ślubny na Zamku Królewskim w Niepołomicach</a> to świetna alternatywa dla pleneru na <a href="https://wawel.krakow.pl/" target="_blank" rel="nofollow">Zamku Królewskim na Wawelu</a> czy pleneru na <a href="http://pieskowaskala.eu/" target="_blank"  rel="nofollow">Zamku w Pieskowej Skale</a>.'
                    }
                    entryContentP2={
                        'Arkady zamkowe to zawsze miękkie światło, stonowane barwy i ciekawa architektura, pozwalające na uzyskanie ciekawych kadrów. Dopełnieniem zamkowej sesji plenerowej może być sesja zdjęciowa w lesie lub nad jeziorem. Przykładem miejsca, które z powodzeniem może zastąpić Szczyrbskie Jezioro jest <a href="https://www.niepolomice.eu/places/poland/malopolska/niepolomice/sport-1/czarny-staw-w-puszczy-niepolomickiej/" target="_blank" rel="nofollow">Czarny Staw w Puszczy Niepołomickiej</a> (no chyba, że zdjęcia nad jeziorem bez schroniska z trójkątnym dachem w tle się nie liczą). Las to wbrew pozorom nie tylko wspaniałe miejsce na grzyby i schronienie dla komarów ale też zachwycająca miejscówka na sesję plenerową. Otoczenie prawdziwej natury, kolorów zieleni i drewna potrafi wytworzyć wyjątkowy, naturalny klimat. Zdjęcia w lesie będą stanowić wspaniałe dopełnienie reportażu ślubnego z uroczystości, której motywem przewodnim był styl boho czy styl rustykalny. W imieniu Basi, Marcina i swoim zapraszam więc na krótką wycieczkę podczas której odwiedzimy <a href="http://www.zamekkrolewski.com.pl/" target="_blank" rel="nofollow">Zamek Królewski w Niepołomicach</a> i <a href="https://www.niepolomice.eu/places/poland/malopolska/niepolomice/sport-1/czarny-staw-w-puszczy-niepolomickiej/" target="_blank" rel="nofollow">Czarny Staw w Puszczy Niepołomickiej</a>. Serdecznie zapraszam na zdjęcia i życzę miłego oglądania.'
                    }
                    slug={"plener-slubny-zamek-krolewski-w-niepolomicach-czarny-staw"}
                    title={"PLENER ŚLUBNY ZAMEK KRÓLEWSKI W NIEPOŁOMICACH, CZARNY STAW - BASIA i MARCIN"}
                    tags={"plener ślubny niepołomice, plener ślubny Zamek Króleski w Niepołomicach, Czarny Staw w Puszczy Niepołomickiej"}
                    date={"31 sierpnia 2020"}
                    menuNames={"BASIA i MARCIN"}
                    menuTitle={"PLENER ŚLUBNY ZAMEK KRÓLEWSKI W NIEPOŁOMICACH, CZARNY STAW"}
                    leadNames={"NATALIA i KACPER"}
                    leadTitle={"WESELE EUFORIA MYŚLENICE, PLENER ŚLUBNY DWÓR MOGILANY"}
                    leadUrl={"/wesele-euforia-myslenice-plener-slubny-dwor-mogilany"}
                    leadImage={"url(/static/fotograf_slubny_wesele_mogilany_krakow.jpg)"}
                />
            </div>
        );
    }
}
