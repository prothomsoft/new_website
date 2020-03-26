import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/hotel_nad_raba_bochnia.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/restauracja_nad_raba_brzesko_0009.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/restauracja_nad_raba_brzesko_0010.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/restauracja_nad_raba_brzesko_0002.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/restauracja_nad_raba_brzesko_0004.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/restauracja_nad_raba_brzesko_0003.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/restauracja_nad_raba_brzesko_0011.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/restauracja_nad_raba_brzesko_0008.jpg", height: 852 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/restauracja_nad_raba_brzesko_0012.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0013.jpg", height: 566 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0015.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0014.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0016.jpg", height: 806 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0017.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0018.jpg", height: 805 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0019.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0020.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0021.jpg", height: 805 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0022.jpg", height: 850 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0023.jpg", height: 806 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0024.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0025.jpg", height: 527 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0026.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0027.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0028.jpg", height: 527 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0029.jpg", height: 566 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0030.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0031.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0032.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0033.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0034.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0035.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0036.jpg", height: 526 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0037.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0039.jpg", height: 527 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0038.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0040.jpg", height: 527 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0041.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0042.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0045.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0044.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0046.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0047.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0048.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0049.jpg", height: 851 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0050.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0051.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0052.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0053.jpg", height: 851 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0054.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0055.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0056.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0057.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0058.jpg", height: 527 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0059.jpg", height: 566 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0060.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0061.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0062.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0063.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0064.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0065.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0066.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0067.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0043.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0068.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0069.jpg", height: 1054 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0070.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0071.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0073.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0072.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0074.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0075.jpg", height: 566 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0076.jpg", height: 527 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0077.jpg", height: 526 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0078.jpg", height: 527 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0079.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0080.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0081.jpg", height: 566 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0082.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0083.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0084.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0085.jpg", height: 851 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0086.jpg", height: 527 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0087.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0088.jpg", height: 527 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0089.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0090.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0091.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0092.jpg", height: 527 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0094.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0093.jpg", height: 527 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0095.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0096.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0097.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0107.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0098.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0099.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0100.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0101.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0102.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0104.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0103.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0105.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0108.jpg", height: 806 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0106.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0114.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0109.jpg", height: 382 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0111.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0112.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0113.jpg", height: 382 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0110.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/02/restauracja_nad_raba_brzesko_0115.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Hotel nad Rabą Bochnia, Zimowy ślub w Niepołomicach"}
                    headDescription={
                        "Hotel nad Rabą Bochnia, Zimowy ślub w Niepołomicach. Piękne kwiaty w środku zimy i mega wesoła grupa przyjaciół na ślubie Adrianny i Arkadiusza. Zapraszam do oglądania."
                    }
                    headKeywords={"Hotel nad Rabą Bochnia, Gospoda nad Rabą Bochnia wesela, zimowy ślub w Niepołomicach"}
                    headUrl={"http://wp.99foto.pl/hotel-nad-raba-bochnia-zimowy-slub-w-niepolomicach/"}
                    entryContentP1={
                        'Kilka centymetrów śniegu w Krakowie pojawia się wtedy, gdy w Zakopanem jest go centymetrów kilkadziesiąt. Trudno więc liczyć na śnieżnobiałe pejzaże zimowe, jednak przy odrobinie szczęścia można zamówić trochę śniegu, tak by zaczął padać godzinę przed i godzinę po ceremonii zaślubin. Takie zamówienie zostało zrealizowane dla Adrianny i Arkadiusza, których ślub miałem przyjemność fotografować w Niepołomicach. Przygotowania rozpoczęliśmy w <a href="https://www.facebook.com/MakijazowySwiatJoannaPiotrowska" target="_blank" rel="nofollow">Studio Makijażu Joanny Piotrowskiej</a>. Pierwsze trzaski migawki i pierwsze zamrożone chwile. Studio Asi i ilość sztucznie wytworzonego światła z ringów, softboxów, ścianka z logo, ściany pełne certyfikatów z ukończonych szkoleń wizażu wskazywały na to, że makijaż będzie wykonany mega profesjonalnie i rzeczywiście tak było. Następnie udaliśmy się do domu Ady gdzie czekały już ubrane w przepiękne czerwone suknie Monika i Magda oraz zawsze uśmiechnięta mama Adrianny. Kwiaty nie miały nic wspólnego z zimową aurą. Ada z pomocą druhen ubrała suknię ślubną, biżuterię i z lampką szampana w ręce i uśmiechem (po mamusi) czekała na przybycie Arkadiusza.'
                    }
                    entryContentP2={
                        'Tymczasem w Zabierzowie Bocheńskim odbywały się przygotowania Pana Młodego. Arkowi dzielnie asystowali Przemek i Sancho Pancho, którzy mierzyli się ze spinkami od mankietów, zapięciami muszki i na koniec z pięćdziesięcioma gramami dobrze zmrożonej substancji. Było wesoło i impreza zapowiadała się grubo. Po błogosławieństwie rodziców udaliśmy się do <a href="http://www.parafiajazy.pl/" target="_blank" rel="nofollow">Kościóła Matki Bożej Różańcowej w Niepołomicach</a>. Ksiądz nie szczędził sobie żartów i dbał o luźną atmosferę w Zakrystii. Tato wprowadził Adę do ołtarza i ceremonia zaślubin wystartowała. Ciekawym elementem było odczytanie krótkiej historii znajomości Ady i Arka, która wywołała prawdziwe emocje na twarzach nowożeńców i zaproszonych gości. Śnieg nie przeszkodził nam w wykonaniu zdjęcia grupowego pod Kościołem. Chwilę później wszyscy zaproszeni goście dotarli do Sali Weselnej <a href="http://hotelnadraba.pl/" target="_blank" rel="nofollow">Hotel i Gospoda nad Rabą</a> ustawiając się w długiej kolejce do gorących życzeń. Następnie młodzi zaserwowali pierwszy taniec i długą listę weselnych atrakcji. Gości na parkiecie do tańca animował <a href="http://silvermoon.com.pl/" target="_blank" rel="nofollow">Zespół Muzyczny SilverMoon</a>. Uśmiechy na twarzach najmłodszych zapewniał Minionek z <a href="https://www.facebook.com/Akademia-Animacji-Kreatywnych-2057966684489263" target="_blank" rel="nofollow">Akademii Animacji Kreatywnych</a>, a każdą sekundę tego magicznego popołudnia i wieczoru uwieczniał Krzysiek z <a href="http://www.ringoofilm.pl" target="_blank" rel="nofollow">Ringoo Film</a>. Świetny zimowy ślub, dużo pięknych niekoniecznie zimowych detali, roześmiana Para Młoda i pełni luzu Druhny i Drużbowie. Super, że mogłem być z Wami tego dnia. Dziękuję za zaufanie i zapraszam na zdjęcia. Więcej zdjęć w strefie klienta po wpisaniu hasła z wizytówki. Miłego oglądania.'
                    }
                    slug={"hotel-nad-raba-bochnia-zimowy-slub-w-niepolomicach"}
                    title={"HOTEL NAD RABĄ BOCHNIA, ZIMOWY ŚLUB W NIEPOŁOMICACH - ADA i AREK"}
                    tags={"Hotel nad Rabą Bochnia, Gospoda nad Rabą Bochnia wesela, zimowy ślub w Niepołomicach"}
                    date={"1 lutego 2018"}
                    menuNames={"ADRIANNA i ARKADIUSZ"}
                    menuTitle={"HOTEL NAD RABĄ BOCHNIA, ZIMOWY ŚLUB W NIEPOŁOMICACH"}
                    leadNames={"NATALIA i ŁUKASZ"}
                    leadTitle={"POMYSŁ NA SESJĘ ZIMOWĄ W KRAKOWIE - DWÓR JANA MATEJKI"}
                    leadUrl={"/pomysl-na-sesje-zimowa-w-krakowie-dwor-jana-matejki"}
                    leadImage={"url(/static/pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg)"}
                />
            </div>
        );
    }
}
