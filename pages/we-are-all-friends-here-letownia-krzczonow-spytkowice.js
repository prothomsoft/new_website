import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/dworek_fantazja_skomielna_biala1.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0001.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0002.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0003.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0005.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0009.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0011.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0013.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0014.jpg", height: 566 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0015.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0033.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0017.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0018.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0020.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0021.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0022.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0025.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0016.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0030.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0032.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0035.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0048.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0047.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0036.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0037.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0038.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0034.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0041.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0042.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0044.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0046.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0049.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0050.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0051.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0052.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0054.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0055.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0056.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0057.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0061.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0062.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0063.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0064.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0065.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0066.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0067.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0068.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0070.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0069.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0084.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0072.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0071.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0075.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0074.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0073.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0076.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0077.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0083.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0078.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0080.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0081.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0079.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0082.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0085.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0086.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0087.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0088.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0089.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0090.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0091.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0093.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0092.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0094.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0095.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0097.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0096.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0098.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0099.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0101.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0100.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0102.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0103.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0109.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0104.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0105.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0106.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0107.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0108.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0110.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/11/sala_weselna_kabanos_spytkowice_0111.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Fotograf na wesele Łętownia, Krzczonów, Spytkowice"}
                    headDescription={"Po kilku latach fotografowania ślubów w okolicach Łętowni, Krzczonowa, Spytkowic, Myślenic robiąc zdjęcia na ślubie w tych okolicach czuje się jak w domu. Totalnie ziomalski klimat na ślubie Amandy i Jacka. Zapraszam."}
                    headKeywords={"fotograf na wesele Łętownia, sala weselna Spytkowice, zdjęcia ślubne Krzczonów"}
                    headUrl={"https://99foto.pl/we-are-all-friends-here-letownia-krzczonow-spytkowice/"}
                    entryContentP1={
                        'Po kilku latach fotografowania ślubów w okolicach Łętowni, Krzczonowa, Pcimia, Tokarni, Spytkowic i Myślenic robiąc zdjęcia na ślubie w tamtych okolicach czuje się jak w domu. Totalnie ziomalski klimat gdzie każdy z uśmiechem przybija pione i nie schodzi z parkietu do białego rana. Przygotowania, na których nie ma czasu na grupówki bo tyle ciekawszych rzeczy dzieje się równocześnie. Otwartość ludzi, której współczynnik rośnie odwrotnie proporcjonalnie do odległości od szczytów górskich. Góralska mowa, która wkrada się do słownika gości weselnych często, bardzo często. Okoliczności do focenia level master. Ale do sedna. Dzień otworzyliśmy wizytą na makijażu w domowym studio wizażu <a href="https://www.facebook.com/madebymemakeup" target="_blank" rel="nofollow">Made by me Ewa Kobiałka</a>. Minka Amandy, która zebrała już żniwo na <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow">moim instagramie</a>, mówiła sama za siebie, było idealnie. Przygotowania Panny Młodej i Pana Młodego minęły błyskawicznie.'
                    }
                    entryContentP2={
                        'Jacek przyjechał Mustangiem, wygarnął kilka nut na akordeonie. Amanda była jego, nie było innej opcji. Błogosławieństwo pełne emocji i piękna ceremonia w <a href="http://letownia.katolicki.eu/" target="_blank" rel="nofollow">Kościele Świętych Apostołów Szymona i Judy Tadeusza w Łętowni</a>. Dwie nieszablonowe bramy po drodze wysprzątały baganiżnik Mustanga niemalże do zera. Tradycyjne przywitanie przez rodziców i szampanówki roztrzaskane na szczęście otworzyły wrota <a href="http://przystanwkabanosie.pl/" target="_blank" rel="nofollow">Restauracja Przystań w Kabanosie w Spytkowicach</a>. Amanda i Jacek zostali przywitani przez Gabrysię z <a href="http://www.somgorsy.pl/" target="_blank" rel="nofollow">Zespółu Muzycznego Somgorsy</a>, a ich pierwszy taniec w moment po gorących życzeniach i pysznym obiedzie otworzył parkiet. Muza na bardzo wysokim poziomie dopasowana do gustu gości dodała im skrzydeł. Sandra z <a href="https://www.facebook.com/psvideofoto/" target="_blank" rel="nofollow">PS Filmy w parze z fotografią</a> filmowała każdą sekundę dance floorowego szaleństwa z uśmiechem na ustach. Nikt nie wie kiedy to się stało, ale w pewnym momencie Gabrysia zarządziła oczepiny. Welon i krawat poszybowały w górę. Szalona zabawa w łapki na podłodze zakończyła konkurs na najbardziej wygimnastykowaną parę wesela. Dużo się działo. Zapraszam na zestaw zdjęć na żywca bez ustawek. Miłego oglądania.'
                    }
                    slug={"we-are-all-friends-here-letownia-krzczonow-spytkowice"}
                    title={"WE ARE ALL FRIENDS HERE ŁĘTOWNIA, KRZCZONÓW, SPYTKOWICE - AMANDA i JACEK"}
                    tags={"fotograf na wesele Łętownia, sala weselna Spytkowice, zdjęcia ślubne Krzczonów"}
                    date={"14 listopada 2019"}
                    menuNames={"AMANDA i JACEK"}
                    menuTitle={"WE ARE ALL FRIENDS HERE ŁĘTOWNIA, KRZCZONÓW, SPYTKOWICE"}
                    leadNames={"PATRYCJA i KRZYSZTOF"}
                    leadTitle={"DWOREK FANTAZJA SKOMIELNA BIAŁA i ŚLUB W STYLU GLAMOUR"}
                    leadUrl={"/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour"}
                    leadImage={"url(/static/dworek_fantazja_skomielna_biala.jpg)"}
                />
            </div>
        );
    }
}