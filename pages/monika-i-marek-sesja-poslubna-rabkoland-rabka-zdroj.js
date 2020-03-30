import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/monika_i_marek_sesja_poslubna_rabkoland_rabka_zdroj_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_rabkoland_0008.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_rabkoland_0001.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_rabkoland_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_rabkoland_0003.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_rabkoland_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_rabkoland_0014.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_rabkoland_0005.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_rabkoland_0006.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_rabkoland_0007.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_rabkoland_0011.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_rabkoland_0021.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_rabkoland_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_rabkoland_0013.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_rabkoland_0012.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_rabkoland_0015.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_rabkoland_0016.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_rabkoland_0017.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_rabkoland_0018.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_rabkoland_0020.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_rabkoland_0019.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/09/sesja_poslubna_rabkoland_0022.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sesja ślubna Rabkoland - Rabka Zdrój"}
                    headDescription={"Czy magiczne miasteczko Rabkoland to miejsce odpowiednie na sesję poślubną? Koniecznie sprawdźcie na moim blogu. Zapraszam w imieniu Marka i Moniki."}
                    headKeywords={"plener poślubny rabkoland,zdjęcia ślubne wesołe miasteczko,fotograf na wesele rabka zdrój"}
                    headUrl={"https://99foto.pl/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja/"}
                    entryContentP1={
                        'Monikę i Marka poznaliście już na <a href="https://99foto.pl/monika-i-marek-sesja-narzeczenska-zawadka-tokarnia-jordanow/" target="_blank" rel="nofollow">sesji narzeczeńskiej</a> w Zawadce, przypominam miejscu idealnym na wycieczkę rowerową i <a href="https://99foto.pl/monika-i-marek-zdjecia-slubne-dworek-fantazja-skomielna-biala/" target="_blank" rel="nofollow">ślubie</a>, który odbył się w Dworku Fantazja w Skomielnej Białej. Plener poślubny początkowo planowaliśmy zrobić w <a href="https://skansen.bystra-sidzina.net/" target="_blank" rel="nofollow">Skansenie Bystra-Sidzina</a>, ale Monika zgodziła się na moją propozycję i w poszukiwaniu kolorów wybraliśmy się do <a href="https://www.rabkoland.pl/" target="_blank" rel="nofollow">Rabkolandu</a>.'
                    }
                    entryContentP2={
                        "Kilka minut przed wejściem na plac zabaw odbyliśmy jeszcze sentymentalną podróż do Dworku Fantazja, gdzie po starej znajomości wykorzystaliśmy równie jak dworek fantyzyjny ogród. Humory dopisywały i była to sesja, na której bardzo się razem pośmialiśmy. Dobre humory Marka i Moni widać też na zdjęciach, a niedzielne popołudnie zostało dobrze wykorzystane. Miłego oglądania."
                    }
                    slug={"sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    title={"SESJA ŚLUBNA RABKOLAND - RABKA ZDRÓJ - MONIKA i MAREK"}
                    tags={"plener poślubny rabkoland,zdjęcia ślubne wesołe miasteczko,fotograf na wesele rabka zdrój"}
                    date={"22 września 2015"}
                    menuNames={"MONIKA i MAREK"}
                    menuTitle={"SESJA ŚLUBNA RABKOLAND - RABKA ZDRÓJ"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={"url(/static/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg)"}
                />
            </div>
        );
    }
}
