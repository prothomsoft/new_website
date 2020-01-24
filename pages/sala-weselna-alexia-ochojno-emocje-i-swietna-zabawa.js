import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/fotograf_slubny_dobczyce.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0002.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0004.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0006.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0013.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0014.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0020.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sala Wesela Alexia Ochojno, fotograf na wesele Dobczyce"}
                    headDescription={"Zimowy ślub w nowoczesnej sali weselnej Alexia Ochojno. Autentyczne emocje, zdjęcia żywe, pełne ekspresji i miłości. Historia dnia ślubu Eweliny i Jakuba opowiedziana serią fotografii. Serdecznie zapraszam."}
                    headKeywords={"alexia ochojno, nowoczesna sala weselna, ślub w mogilanach, fotograf na wesele dobczyce"}
                    headUrl={"https://99foto.pl/sala-weselna-alexia-ochojno-emocje-i-swietna-zabawa/"}
                    entryContentP1={
                        'Pomyślcie czy w Waszych głowach słowo zima pasuje do słowa ślub. Budując nasze wyobrażenia, bazując na tym co znamy i doświadczyliśmy wielu z nas może dojść do wniosku, że te dwa słowa nie do końca idą ze sobą w parze. Podążając za trendami w branży ślubnej i fotografując śluby nie trudno jednak zauważyć, że coraz więcej par decyduje się na organizacje przyjęć weselnych właśnie zimą uważając, że zima to idealna pora roku na tego typu imprezę. Styczniowy ślub Eweliny i Jakuba to dla mnie świetne otwarcie nowego sezonu fotograficznego, a wpis na blogu to znakomita okazja na przypomnienie Wam o mnie i moich zdjęciach.                         Prawdę mówiąc im więcej fotografuję zimowych przyjęć weselnych tym więcej plusów związanych z ich organizacją zauważam. Kraków wiadomo, śniegu tu jak na lekarstwo, ale kilka kilometrów na północ, lekki mrozik i problem poszukiwaczy śniegu wydaje się być rozwiązanym. Recepta na udany ślub to trochę słońca, piękny Kościół przybrany setkami lampek choinkowych przypominających nam o minionych świętach, nowoczesna sala weselna i oczywiście goście weselni, dla których przyjęcie ślubne to najlepsza okazja by dobrze i aktywnie spędzić długi zimowy wieczór. Tego dnia zimowy nastrój subtelnie wpisał się w scenariusz dnia ślubu Eweliny i Jakuba.'
                    }
                    entryContentP2={
                        'Przygotowania rozpoczeły się w Myślenicach w <a href="https://www.facebook.com/Akademia-Urody-916777441721706/" target="_blank" rel="nofollow">Akademii Urody Damiana Pulchnego</a>. Godzinka na makijaż w domu rodzinnym Eweliny w Dobczycach, krótkie przygotowania Pana Młodego w Wieliczce, pełne emocji błogosławieństwo i piękna ceremonia poprowadzona przez zaprzyjaźnionych księży w <a href="http://www.parafiadobczyce.pl/ target="_blank" rel="nofollow">Kościele p.w. Matki Bożej Wspomożenia Wiernych w Dobczycach</a>. Ten duży skrót sobotnich wydarzeń prowadzi nas do sali <a href="http://alexiaochojno.pl/" target="_blank" rel="nofollow">Alexia w Ochojnie</a>. Mega nowoczesna sala bankietowo-weselna usytułowana nieopodal Krakowa, wymarzone miejsce na przyjęcie ślubne. Rodzice przywitali Parę Młodą chlebem i solą, a goście gorącymi życzeniami. <a href="https://www.facebook.com/pg/zespolavantago" target="_blank" rel="nofollow">Zespół muzyczny Avantago</a> wrzucił kilka szlagierów i serwował repertuar w większości podyktowany niekończącymi się dedykacjami gości weselnych. Od czasu do czasu prawie tak niepostrzeżenie jak <a href="https://www.manolofilmy.pl/" target="_blank" rel="nofollow">Grzegorz z Manolo</a> przemykał <a href="https://www.facebook.com/malinowemedia" target="_blank" rel="nofollow">Łukasz z Malinowe Media</a>. Para Młoda zapewniła swoim gościom szampańską zabawę do białego rana i przygotowała istny festiwal atrakcji. Bardzo dziękuję za zaufanie i serdecznie zapraszam na kilka zdjęć z tego dnia. Życzę miłego oglądania.'
                    }
                    slug={"sala-weselna-alexia-ochojno-emocje-i-swietna-zabawa"}
                    title={"SALA WESELNA ALEXIA OCHOJNO, EMOCJE i ŚWIETNA ZABAWA - EWELINA i JAKUB"}
                    tags={"alexia ochojno, nowoczesna sala weselna, ślub w mogilanach, fotograf na wesele dobczyce"}
                    date={"26 stycznia 2020"}
                    menuNames={"EWELINA i JAKUB"}
                    menuTitle={"SALA WESELNA ALEXIA OCHOJNO, EMOCJE i ŚWIETNA ZABAWA"}
                    leadNames={"AMANDA i JACEK"}
                    leadTitle={"WE ARE ALL FRIENDS HERE ŁĘTOWNIA, KRZCZONÓW, SPYTKOWICE"}
                    leadUrl={"/we-are-all-friends-here-letownia-krzczonow-spytkowice"}
                    leadImage={"url(/static/przystan_kabanos_spytkowice.jpg)"}
                />
            </div>
        );
    }
}