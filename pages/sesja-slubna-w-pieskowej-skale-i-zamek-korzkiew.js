import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/plener_slubny_zamek_pieskowa_skala.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0001.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0002.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0016.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0009.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0004.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0007.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0005.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0006.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0003.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0011.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0008.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0010.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0012.jpg", height: 851 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0013.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0014.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0017.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0018.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0019.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0029.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0015.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0021.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0022.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0031.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0020.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0023.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0026.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0025.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0027.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0024.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sesja ślubna Zamek Pieskowa Skała, Zamek Korzkiew"}
                    headDescription={"Zamek Pieskowa Skała, ślubna sesja zdjęciowa Kristiny i Aleksandra. Gonitwa za zachodzącym słońcem i moc emocji. Na sesje tylko Kraków. Zapraszam do oglądania."}
                    headKeywords={"Sesja ślubna Zamek Pieskowa Skała, Zamek Korzkiew, miejsce na sesję plenerową w Krakowie"}
                    headUrl={"http://99foto.pl/sesja-slubna-w-pieskowej-skale-i-zamek-korzkiew/"}
                    entryContentP1={
                        "Ostatnio dużo się dzieje i kilka wpisów ślubnych pojawiło się tylko w strefie klienta. Czas to jednak zmienić i nadrobić zaległości wpisem co prawda krótszym niż ślubny, bo plenerowym, ale zawsze wpisem. Ślub Kristiny i Aleksandra miałem przyjemność fotografować w sierpniu, będąc jednym z zaproszonych gości Dworu Sieraków. Trzy tygodnie później umówiliśmy się na sesję plenerową w Krakowie. Na poszukiwania trzech składowych czyli chwili, światła i kadru wybraliśmy się w dobrze znane mi miejsca."
                    }
                    entryContentP2={
                        'Pierwszym z nich był <a href="http://korzkiew.pl/" target="_blank">Zamek w Korzkwi</a>, a drugim <a href="http://pieskowaskala.eu/" target="_blank">Zamek w Pieskowej Skale</a>. Czyli było zamkowo i słonecznie. Po raz kolejny goniliśmy zachodzące słońce wspinając się wyżej i wyżej. Mam nadzieję pojawić się w tych miejscach jeszcze co najmniej raz w tym roku, korzystając z uroków polskiej złotej jesieni. Serdecznie zapraszam na kilka zdjęć zrobionych tego popołudnia. Miłego oglądania.'
                    }
                    slug={"sesja-slubna-w-pieskowej-skale-i-zamek-korzkiew"}
                    title={"SESJA ŚLUBNA W PIESKOWEJ SKALE i ZAMEK KORZKIEW - KRISTINA i ALEKSANDR"}
                    tags={"Sesja ślubna Zamek Pieskowa Skała, Zamek Korzkiew, miejsce na sesję plenerową w Krakowie"}
                    date={"19 września 2018"}
                    menuNames={"KRISTINA i ALEKSANDR"}
                    menuTitle={"SESJA ŚLUBNA W PIESKOWEJ SKALE i ZAMEK KORZKIEW"}
                    leadNames={"DAJANA i SYLWESTER"}
                    leadTitle={"OGRÓD BOTANICZNY W KRAKOWIE, ŚLUBNA SESJA ZDJĘCIOWA"}
                    leadUrl={"/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa"}
                    leadImage={"url(/static/ogrod_botaniczny.jpg)"}
                />
            </div>
        );
    }
}
