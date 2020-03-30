import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/pati_i_michal_sesja_poslubna_zamek_w_korzkwi_i_kladka_bernatka_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_zamek_korzkiew_0001.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_zamek_korzkiew_0002.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_zamek_korzkiew_0003.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_zamek_korzkiew_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_zamek_korzkiew_0005.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_zamek_korzkiew_0006.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_zamek_korzkiew_0017.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_zamek_korzkiew_0008.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_zamek_korzkiew_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_zamek_korzkiew_0011.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_zamek_korzkiew_0009.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_zamek_korzkiew_0015.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_zamek_korzkiew_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_zamek_korzkiew_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_zamek_korzkiew_0013.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_zamek_korzkiew_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_zamek_korzkiew_0016.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_zamek_korzkiew_0018.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_zamek_korzkiew_0019.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_zamek_korzkiew_0020.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_zamek_korzkiew_0022.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_zamek_korzkiew_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_zamek_korzkiew_0021.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sesja ślubna Zamek w Korzkwi,  plener ślubny Kraków"}
                    headDescription={"Sesja ślubna Patrycji i Michała. Wybraliśmy się do Zamku w Korzkwi, a do Kładki Bernatki dotarliśmy idealnie na granicy zmroku. Zapraszam."}
                    headKeywords={"plener ślubny kraków,zdjęcia ślubne kładka bernatka"}
                    headUrl={"https://99foto.pl/pati-i-michal-sesja-poslubna-zamek-w-korzkwi-i-kladka-bernatka/"}
                    entryContentP1={
                        'Patrycję i Michała już znacie z <a href="https://99foto.pl/patrycja-i-michal-sesja-narzeczenska-pieskowa-skala/" target="_blank" rel="nofollow">sesji narzeczeńskiej</a> i <a href="https://99foto.pl/pati-i-michal-zdjecia-slubne-w-hotelu-turowka-wieliczka/" target="_blank" rel="nofollow">zdjęć ślubnych</a>. Tym razem spotkaliśmy się na sesji ślubnej w Krakowie. Początkowo chcieliśmy fotografować w Dworze Tomaszowice. Odbywała się tam jednak impreza firmowa dla najmłodszych, więc by uniknąć przeładowanych nieznajomymi ludźmi kadrów podjechaliśmy krok dalej do Zamku w Korzkwi.'
                    }
                    entryContentP2={
                        "Jak się okazało był to strzał w dziesiątkę, ponieważ trafiliśmy na dzień w którym nie odbywał się tam żaden ślub. Po kilku zdjęciach przenieśliśmy plan zdjęciowy na Kazimierz. Zaparkowaliśmy na gazowej i od razu zaatakowaliśmy Kładkę Bernatkę. Był to czas idealny, bo granica zmroku, z lekko granatowym niebem. W momencie gdy byliśmy na kładce zaświeciły się też światła na poręczach co otworzyło zupełnie nowe możliwości dla ciekawych mam nadzieję zdjęć. Miłego oglądania."
                    }
                    slug={"pati-i-michal-sesja-poslubna-zamek-w-korzkwi-i-kladka-bernatka"}
                    title={"SESJA ŚLUBNA ZAMEK W KORZKWI i KŁADKA BERNATKA - PATRYCJA i MICHAŁ"}
                    tags={"plener ślubny kraków,zdjęcia ślubne kładka bernatka"}
                    date={"17 września 2015"}
                    menuNames={"PATRYCJA i MICHAŁ"}
                    menuTitle={"SESJA ŚLUBNA ZAMEK W KORZKWI i KŁADKA BERNATKA"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"ZDJĘCIA ŚLUBNE RESTAURACJA STEK SKAWINA"}
                    leadUrl={"/zdjecia-slubne-restauracja-stek-skawina"}
                    leadImage={"url(/static/zdjecia_slubne_restauracja_stek_skawina_start.jpg)"}
                />
            </div>
        );
    }
}
