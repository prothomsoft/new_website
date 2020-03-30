import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/hotel-junior-skotnicka.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0015.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0002.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0001.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0005.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0006.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0003.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0014.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0011.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0017.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0018.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0019.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0021.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0022.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0024.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0025.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0030.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0027.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0029.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0032.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0033.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0034.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0035.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0038.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0036.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0039.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0040.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0041.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0042.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0043.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0044.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0045.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0046.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0048.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0049.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0050.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0051.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0052.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0053.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0054.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0055.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0056_1.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0057.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0059.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0067.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0061.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0062.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0064.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0065.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0066.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0071.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0068.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0069.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0070.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0072.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0073.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0074.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0075.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0076.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0077.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0078.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0079.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0080.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0081.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0082.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0083.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0084.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0085.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0086.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0087.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0088.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0089.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0090.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0091.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0092.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0093.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0094.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0095.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0096.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0097.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0098.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0099.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0100.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0101.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0102.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0103.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0104.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0107.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0105.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0108.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0109.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0106.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0110.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0111.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0112.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0113.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0114.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0115.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0117.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0118.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0119.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0120.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0121.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0122.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0123.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0124.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0125.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0116.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0127.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/04/zdjecia_ze_slubu_w_skawinie_0128.jpg", height: 762 }];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Hotel Junior Skotnicka, zdjęcia ślubne Skawina"}
                    headDescription={"Piękni i młodzi Kinga i Paweł. Dużo słońca, uśmiechów i pozytywnej energii. Hotelu Junior Skotnicka i impreza do białego rana. Zapraszam."}
                    headKeywords={"Hotel Junior Skotnicka, dobry fotograf ślubny Skawina, zdjęcia ślubne w Skawinie"}
                    headUrl={"https://99foto.pl/hotel-junior-skotnicka-zdjecia-slubne-skawina/"}
                    entryContentP1={
                        'Piątek, piąteczek, piątunio to dla niektórych kolejny dzień spędzony w pracy i oczekiwanie na nadchodzący weekend, dla innych jeden z najważniejszych dni w życiu i okazja do świętowania w gronie najbliższych. Ten wiosenny dzień rozpoczęliśmy od makijażu Kingi, który wykonała Michalina Mikrut z <a href="https://www.facebook.com/allureofmakeup/" target="_blank" rel="nofollow">Allure of Makeup</a>. Miła atmosfera i blisko godzina rozmów pozwoliła mi poznać kilka zagadnień branży wizażu. Piętnaście minut później byliśmy już w mieszkaniu rodziców Kingi, gdzie Mama w turkusowej sukience pomagała Kindze w ubieraniu suknii ślubnej i wszystkich niezbędnych dodatków. Dosłownie tuż za rogiem skawińskiego osiedla czekał na mnie Paweł, który od rana dzielnie jak na wzorowego tatę przystało zajmował się Maksem. Gdy mucha siadła pod kołnierzem białej koszuli, razem z rodzicami Pawła wyruszyliśmy na spotkanie z Kingą i wspólne błogosławieństwo. Nie brakowało wzruszeń w momencie gdy rodzice składali gorące życzenia swoim kochanym dzieciom.'
                    }
                    entryContentP2={
                        'Kilka minut spędzonych pod <a href="https://www.milosierdzieskawina.org/" target="_blank" rel="nofollow">Kościółem pw. Miłosierdzia Bożego w Skawinie</a> pozwoliło przywitać pozostałych gości weselnych. Ksiądz wprowadził Parę Młodą przed ołtarz i rozpoczęła się ceremonia zaślubin. Radość na twarzach Kingi i Pawła była nie do opisania. Widać było, że na ten moment czekali długo, jak mówił Paweł blisko trzy lata. Po ceremoni korzystając z pięknej wiosennej pogody i słonecznego dnia zrobiliśmy zdjęcie grupowe pod Kościołem. Gości weselnych przywitał <a href="https://www.junior.krakow.pl/" target="_blank" rel="nofollow">Hotel Junior Skotnicka</a>, położony w bliskiej odległości od Skawiny. Kieliszki rozbiły się o ziemię, Para Młoda przyjęła moc gorących życzeń, a dzieciaki pełne garście pysznych czekoladowych cuksów. Po obiedzie i deserze parkiet otworzył pierwszy taniec. Zespół muzyczny, mocno rockowy z charyzmatycznym wokalistą, który na szczęście do domu samochodem wracać nie musiał dał czadu. Klimat był jak we Wrocławiu pod Kredką i Ołówkiem, za moich studenckich czasów. Impreza kręciła się do białego rana. Kingo i Pawle, dziękuję za to, że mogłem być z Wami i fotografować te niezwykłe chwile. Zapraszam na kilka zdjęć z tego dnia i życzę miłego oglądania.'
                    }
                    slug={"hotel-junior-skotnicka-zdjecia-slubne-skawina"}
                    title={"HOTEL JUNIOR SKOTNICKA, ZDJĘCIA ŚLUBNE SKAWINA - KINGA i PAWEŁ"}
                    tags={"Hotel Junior Skotnicka, dobry fotograf ślubny Skawina, zdjęcia ślubne w Skawinie"}
                    date={"29 kwietnia 2019"}
                    menuNames={"KINGA i PAWEŁ"}
                    menuTitle={"HOTEL JUNIOR SKOTNICKA, ZDJĘCIA ŚLUBNE SKAWINA"}
                    leadNames={"KRISTINA i OLA"}
                    leadTitle={"WILLA DECJUSZA KRAKÓW, ŚLUB CYWILNY i SESJA ZDJĘCIOWA"}
                    leadUrl={"/willa-decjusza-krakow-slub-cywilny-sesja-zdjeciowa"}
                    leadImage={"url(/static/willa_decjusza_krakow_slub_cywilny_sesja_zdjeciowa_1.jpg)"}
                />
            </div>
        );
    }
}
