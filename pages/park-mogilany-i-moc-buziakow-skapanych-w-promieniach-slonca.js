import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sesja_narzeczenska_klasztor_w_tyncu.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_002.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_003.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_013.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_005.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_032.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_007.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_008.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_010.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_012.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_031.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_015.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_017.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_019.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_020.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_021.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_023.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_025.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_028.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_029.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_026.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_030.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_033.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2019/08/sesja_narzeczenska_w_krakowie_016.jpg", height: 763 },
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Park Mogilany, buziaki skąpane w promieniach słońca"}
                    headDescription={"Mury Opactwa Tynieckiego, zieleń Parku w Mogilanach i moc buziaków skąpanych w promieniach zachodzącego słońca. Sesja narzeczeńska Teresy i Andrzeja w Krakowie. Zapraszam na bloga."}
                    headKeywords={"sesja narzeczeńska Kraków, Park Mogilany, Opactwo Benedyktynów Tyniec, Opactwo Tynieckie"}
                    headUrl={"https://99foto.pl/park-mogilany-i-moc-buziakow-skapanych-w-promieniach-slonca/"}
                    entryContentP1={
                        'Długa historia moi drodzy. Rozpoczyna się ona trzy lata temu na ślubie Pauliny i Darka w <a href="https://www.skansensmakow.pl/wesela/" target="_blank" rel="nofollow">Skansenie Smaków w Kryspinowie</a>. Podczas przygotowań Pauliny poznałem siostrę Teresy Anię. W tak zwanym międzyczasie Piotr kupił pierścionek, zaplanował oświadczyny, a gdy Ania powiedziała TAK wspólnie wybrali sale weselną, ustalili datę ślubu i wybrali fotografa. Miałem szczęscie bo wypadło na mnie. Ekipa na ślubie Ani i Piotra w <a href="http://kajasowka.com.pl/oferta-imprez/" target="_blank" rel="nofollow">Kasztelu Kajasówka</a> była mocno zaprzyjaźniona, a gdy do tego dodamy, że imprezę prowadził DJ Dawid, legenda krakowskich dance florów, którego miałem okazję poznać już chwilę temu, poczułem się dosłownie jak domu. Wiemy, czas płynie szybko i już za rok na Orawie spotkamy się na ślubie Teresy i Andrzeja. Będzie to w perspektywie czterech lat trzeci ślub, na którym po raz kolejny spotka się ta sama doskonale zaprzyjaźniona grupa przyjaciół - może nie ze sobą, ale ze swoim ulubionym fotografem na pewno. Ale tym czasem postanowiliśmy dobrze wykorzystać czas przedślubny i umówić się na kilka zdjęć podczas sesji narzeczeńskiej oczywiście w Krakowie.'
                    }
                    entryContentP2={
                        'Zadanie było łatwe. Instagramowe foty serwowane momentami przez Terczi i Andrzeja zapowiadały bardzo fotogeniczną parę, której nie będzie trzeba namawiać do spontanicznych reakcji, niezliczonej ilości buziaków i uśmiechów. Miejsca na plener wybrała Teresa, kierując się wpisami na moim blogu. Wybraliśmy <a href="http://www.parki.org.pl/parki-dworskie-i-przypalacowe/park-w-mogilanach" target="_blank" rel="nofollow">Park w Mogilanach</a> i <a href="http://opactwotynieckie.pl/" target="_blank" rel="nofollow">Opactwo Benedyktynów w Tyńcu</a>. Trochę rozmawialiśmy, dużo fotografowaliśmy, było zupełnie bezstresowo. Czas przeznaczony na sesję skończył się szybko jak wszystkie dobre rzeczy. Znajdźcie chwilę, pooglądajcie zdjęcia i sprawdźcie sami czy dobrze nam poszło. Jeżeli stwierdzicie, że tak to zostawcie proszę kciuka w górę na fejsie. Pamiętajcie, że warto zrobić sesję narzeczeńską w Krakowie jeszcze przed ślubem, poznać fotografa czyli mnie, przyzwyczaić się do obiektywu aparatu, złapać kilka ustawień ciała w których wyglądacie i czujecie się świetnie. Serdecznie zapraszam, a tymczasem życzę miłego oglądania.'
                    }
                    slug={"park-mogilany-i-moc-buziakow-skapanych-w-promieniach-slonca"}
                    title={"PARK MOGILANY, BUZIAKI SKĄPANE W PROMIENIACH SŁOŃCA - TERESA i ANDRZEJ"}
                    tags={"sesja narzeczeńska Kraków, Park Mogilany, Opactwo Benedyktynów Tyniec, Opactwo Tynieckie"}
                    date={"30 sierpnia 2019"}
                    menuNames={"TERESA I ANDRZEJ"}
                    menuTitle={"PARK MOGILANY I MOC BUZIAKÓW SKĄPANYCH W PROMIENIACH SŁOŃCA"}
                    leadNames={"ANNA i PIOTR"}
                    leadTitle={"BAZYLIKA BOŻEGO CIAŁA KRAKÓW, FOTOREPORTAŻ ŚLUBNY"}
                    leadUrl={"/bazylika-bozego-ciala-krakow-fotoreportaz-slubny"}
                    leadImage={"url(/static/bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg)"}
                />
            </div>
        );
    }
}