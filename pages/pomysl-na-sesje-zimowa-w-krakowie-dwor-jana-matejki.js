import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0001.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0002.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0009.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0003.jpg", height: 850 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0004.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0015.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0013.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0007.jpg", height: 851 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0033.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0008.jpg", height: 805 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0010.jpg", height: 566 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0011.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0021.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0014.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0017.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0018.jpg", height: 850 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0028.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0016.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0019.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0020.jpg", height: 527 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0012.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0022.jpg", height: 805 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0035.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0024.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0005.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0025.jpg", height: 526 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0026.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0027.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0029.jpg", height: 850 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0006.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0034.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0030.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0032.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0031.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0024_1.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Pomysł na sesję zimową w Krakowie - Dwór Jana Matejki"}
                    headDescription={
                        "Coś dla odważnych - sesja ślubna zimą. Jeżeli szukacie pomysłu na sesje zimową i miejsca na sesję zimową w Krakowie to serdecznie zapraszam na bloga, a w przyszłości do Dworu Jana Matejki w Krzesławicach."
                    }
                    headKeywords={"pomysł na sesje zimową, sesja ślubna zimą, miejsce na sesję ślubną w Krakowie"}
                    headUrl={"http://wp.99foto.pl/pomysl-na-sesje-zimowa-w-krakowie-dwor-jana-matejki/"}
                    entryContentP1={
                        'Zimowy ślub w przedsylwestrową sobotę i przyszłe plany Natalii i Łukasza zmotywowały nas do odnalezienia w Krakowie miejsca, w którym zima nie przeszkodzi nam w realizacji ślubnej sesji zdjęciowej. Nie był to pierwszy raz, gdy pomysły na zimowe zdjęcia stały się numerem jeden we frazach wpisywanych do naszych przeglądarek internetowych. Nie był to też pierwszy raz, kiedy zdjęcia w warunkach zimowych miałem przyjemność i okazję zrobić. Na mojej liście sprawdzonych miejsc na sesję ślubną w Krakowie od dawna znajdują się <a href="https://www.gdziewesele.pl/Domy-weselne/Palac-Radziwillow" target="_blank" rel="nofollow">Pałac Radziwiłłów w Balicach</a> i <a href="http://palac-sztuki.krakow.pl/muzea/dworek-jana-matejki/" target="_blank" rel="nofollow">Dwór Jana Matejki w Krzesławicach</a>. Pałac jest świetnym miejscem, gdy zimowa sesja zdjęciowa ma odbyć się w weekend. W tygodniu, miejsce to możemy rezerwować na sesję po godzinie szesnastej.'
                    }
                    entryContentP2={
                        "Dwór Jana Matejki jest natomiast świetnym miejscem również w tygodniu. Przemiły opiekun obiektu, który czas sesji plenerowej umila przygrywając na harmoszce, chętnie opowiadając historię tego miejsca, w sposób ten doskonale promuje obiekt i zachęca do odwiedzenia go ot tak po prostu z dzieciakami. Porad dotyczących zimowej sesji ślubnej tym razem nie będzie. Pamiętajmy, że Kraków to genialne miejsce i nawet w zimie, bez przemierzania dziesiątek kilometrów w Tatry, można na miejscu wyczarować ciekawe kadry. Zapraszam do oglądania."
                    }
                    slug={"pomysl-na-sesje-zimowa-w-krakowie-dwor-jana-matejki"}
                    title={"POMYSŁ NA SESJĘ ZIMOWĄ W KRAKOWIE - DWÓR JANA MATEJKI - NATALIA i ŁUKASZ"}
                    tags={"pomysł na sesje zimową, sesja ślubna zimą, miejsce na sesję ślubną w Krakowie"}
                    date={"11 stycznia 2019"}
                    menuNames={"NATALIA i ŁUKASZ"}
                    menuTitle={"POMYSŁ NA SESJĘ ZIMOWĄ W KRAKOWIE - DWÓR JANA MATEJKI"}
                    leadNames={"KAROLINA i MATEUSZ"}
                    leadTitle={"ZIELONE WZGÓRZE KONIUSZA, TAK W PROMIENIACH SŁOŃCA"}
                    leadUrl={"/zielone-wzgorze-koniusza-tak-w-promieniach-slonca"}
                    leadImage={"url(/static/zielone_wzgorze_koniusza.jpg)"}
                />
            </div>
        );
    }
}
