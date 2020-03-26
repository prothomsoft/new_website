import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sesja_zdjeciowa_park_w_mogilanach_zakrzowek_i_kazimierz_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0001.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0011.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0008.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0002.jpg", height: 527 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0004.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0024.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0005.jpg", height: 850 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0006.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0013.jpg", height: 850 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0007.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0009.jpg", height: 850 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0010.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0012.jpg", height: 850 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0014.jpg", height: 527 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0025.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0015.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0016.jpg", height: 850 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0017.jpg", height: 527 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0018.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0019.jpg", height: 850 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0026.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0020.jpg", height: 850 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0023.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2017/08/sesja_zdjeciowa_park_w_mogilanach_0021.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sesja zdjęciowa Park w Mogilanach"}
                    headDescription={"Park w Mogilanach, Zakrzówek i Kazimierz to jedna z tras plenerowych, które polecam na sesje zdjęciowe w Krakowie. Sprawdźcie na moim blogu."}
                    headKeywords={"park w mogilanach,plener ślubny zakrzówek,sesja ślubna kazimierz"}
                    headUrl={"http://wp.99foto.pl/sesja-zdjeciowa-park-w-mogilanach-zakrzowek-i-kazimierz/"}
                    entryContentP1={
                        "Kraków to piękne miejsce, pełne niezwykłych miejsc i świetnie utrzymanej zieleni, a w połączeniu z dobrym popołudniowym światłem i w miłym towarzystwem Pary Młodej świetny sposób na spędzanie wolnego czasu. Sesja plenerowa w Krakowie to relaks po ślubie i okazja do zrobienia kilku zdjęć na zupełnym luzie. Julia i Piotrek to moi sąsiedzi i pomimo, że nie fotografowałem ich ślubu chętnie zgodziłem się na zdjęciową sesję ślubną. Starannie wybraliśmy miejsca tak i ułożyliśmy plan."
                    }
                    entryContentP2={
                        "Sprawdziliśmy również pogodę dzień wcześniej i o godzinie siedemnastej rozpoczęliśmy fotografowanie w pierwszym miejscu, którym był Park w Mogilanach. Jest to miejsce charakterystyczne z fajną panoramą na góry, dwiema alejkami z drzew i dworkiem, który mam nadzieje doczeka się w przyszłości renowacji. Następnie wpadliśmy na chwilę na Zakrzówek, kończąc nasze zdjęcia w plenerze na Kazimierzu. Świetnie spędzony czas w Krakowie i okolicach, kilka ciekawych zarejestrowanych opowieści Piotrka. Zapraszam na zdjęcia i miłego oglądania."
                    }
                    slug={"sesja-zdjeciowa-park-w-mogilanach-zakrzowek-i-kazimierz"}
                    title={"SESJA ZDJĘCIOWA PARK W MOGILANACH, ZAKRZÓWEK i KAZIMIERZ - JULIA i PIOTR"}
                    tags={"park w mogilanach,plener ślubny zakrzówek,sesja ślubna kazimierz"}
                    date={"16 sierpnia 2017"}
                    menuNames={"JULIA i PIOTR"}
                    menuTitle={"SESJA ZDJĘCIOWA PARK W MOGILANACH, ZAKRZÓWEK i KAZIMIERZ"}
                    leadNames={"KINGA i JULIEN"}
                    leadTitle={"ŚLUB CYWILNY i WESELE W PLENERZE - WITKOWA CHATA KRAKÓW"}
                    leadUrl={"/slub-cywilny-i-wesele-w-plenerze-witkowa-chata-krakow"}
                    leadImage={"url(/static/slub_cywilny_i_wesele_w_plenerze_witkowa_chata_krakow_start.jpg)"}
                />
            </div>
        );
    }
}
