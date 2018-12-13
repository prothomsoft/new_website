import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sesja-narzeczenska-w-krakowie-i-okolicach-wygielzow-start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0001.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0008.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0010.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0013.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0002.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0019.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0023.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0036.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0027.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0032.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0033.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0035.jpg", height: 377 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/07/sesja_narzeczenska_w_krakowie_0034.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sesja narzeczeńśka w Krakowie i okolicach"}
                    headDescription={"Sesja narzeczeńśka w Krakowie, Nadwiślański Park Etnograficzny Wygiełzów, Zamek Lipowiec"}
                    headKeywords={"sesja narzeczeńska w Krakowie"}
                    headUrl={"https://99foto.pl/sesja-narzeczenska-w-krakowie-i-okolicach-wygielzow/"}
                    entryContentP1={
                        'Magde i Damiana poznałem rok temu. Już wtedy podczas naszego pierwszego spotkania pomyśleliśmy, że sesja narzeczeńska przed ślubem to świetny pomysł.  Udało nam się znaleźć czas i trafić odpowiednią pogodę, więc spontanicznie umówiliśmy się na zdjęcia. Żeby dotrzeć do miejsca naszego pleneru trzeba minąć Zalew w Kryspinowie, Kasztel Kajasówka, Cztery Pory Roku by jadąc dalej w stronę Oświęcimia w końcu trafić do <a href="https://mnpe.pl/" target="_blank">Nadwiślańskiego Parku Etnograficznego</a> w Wygiełzowie. Miejsce to jest szczególne dla Magdy i Damiana ponieważ już pod koniec września tego roku w Kościele z Ryczowa, który jest częścią skansenu wypowiedzą sakramentalne TAK. Na naszej sesji narzeczeńskiej nie brakowało świetnego światła, które to malowało wszystko ciepłymi barwami.'
                    }
                    entryContentP2={
                        "Wędkowanie pasja Damiana zaprowadziły nas nad piękne jezioro, gdzie w ciszy i spokoju można było podziwiać widok kładącego się na tafli wody słońca, smakując czerwone półwytrawne winko. Ostatnie promienie zachodzącego słońca oglądaliśmy w okolicach Chrzanowa wdrapując się na położony w tej okolicy punkt widokowy. Magda nie tylko rewelacyjnie wyglądała, ale również mega profesjonalnie pozowała do zdjęć. Pamiętajcie, że sesja narzeczeńska w Krakowie lub najbliższych okolicach to nie strata czasu, ale świetna okazja na mile spędzone chwile i kilka pamiątkowych zdjęć. Life isn't perfect but it has perfect moments... Poznajcie Magdę i Damiana, którzy na pewno na moim blogu pojawią się ponownie już wkrótce. Miłego oglądania."
                    }
                    slug={"sesja-narzeczenska-w-krakowie-i-okolicach-wygielzow"}
                    title={"SESJA NARZECZEŃSKA W KRAKOWIE – WYGIEŁZÓW - MAGDALENA I DAMIAN"}
                    tags={"Sesja narzeczeńśka w Krakowie, Nadwiślański Park Etnograficzny Wygiełzów, Zamek Lipowiec"}
                    date={"9 lipca 2018"}
                    menuNames={"MAGDALENA i DAMIAN"}
                    menuTitle={"SESJA NARZECZEŃSKA W KRAKOWIE – WYGIEŁZÓW"}
                    leadNames={"NATALIA i KAMIL"}
                    leadTitle={"SALA WESELNA WILLA ORCHIDEA WAKSMUND - ŚLUB NA PODHALU"}
                    leadUrl={"/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach"}
                    leadImage={"url(/static/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach-start.jpg)"}
                />
            </div>
        );
    }
}
