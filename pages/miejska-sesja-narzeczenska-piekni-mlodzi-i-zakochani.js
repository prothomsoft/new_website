import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sesja_narzeczenska_krakow_kazimierz.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0001.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0002.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0006.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0005.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0008.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0009.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0010.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0011.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0016.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0004.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0018.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0020.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0021.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0024.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0025.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0037.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0046.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0032.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0028.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0036.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0026.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0038.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0042.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0043.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0041.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0019.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0013.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Miejska sesja narzeczeńska w Krakowie"}
                    headDescription={"Miejska sesja narzeczeńska w Krakowie, Kazimierz, Stare Miasto, Zakrzówek. Piękni, młodzi i zakochani - Marlena i Adam. Zapraszam."}
                    headKeywords={"miejska sesja narzeczeńska, zdjęcia Kraków Stare Miasto, sesja na Kazimierzu"}
                    headUrl={"https://99foto.pl/miejska-sesja-narzeczenska-piekni-mlodzi-i-zakochani/"}
                    entryContentP1={
                        'Pracując nad obróbką miejskiej sesji narzeczeńskiej Marleny i Adama słuchałem sobie jednej z ostatnich płyt Eda Sheerana, gdzie w utworze Beautiful People śpiewnie wyraża on swoje niezadowolenie ze swojego rudego wyglądu. Niewątpliwie przyszli Państwo Młodzi, których zdjęcia mam przyjemność dzisiaj pokazać na blogu, mieli o wiele więcej szczęścia i tytuł wpisu piękni, młodzi, zakochani pasuje do nich idealnie. Ślub już w sierpniu, a tymczasem wspólnie korzystając z rewelacyjnej pogody odwiedziliśmy kilka zakątków naszego pięknego Krakowa.'
                    }
                    entryContentP2={
                        'Na początek wybraliśmy oczywiście Kazimierz, gdyż jest to miejsce idealne na tego typu miejskie sesje narzeczeńskie. Kraków ma swój rytm, kolory, styl, miejsca może mniej uporządkowane, ale naznaczone charakterem i opowiadające wspaniałe historie. Wybierając odpowiednią drogę i podążając tą drogą śladami zakochanych z aparatem w ręku mamy pewność stworzenia minimum kilku niezapomnianych kadrów. Pamiętajcie, że miejska sesja narzeczeńska to świetny pomysł na oswojenie się z obiektywem aparatu fotograficznego i sposób na bliższe poznanie fotografa ślubnego, który będzie Wam towarzyszył w tym najważniejszym dniu. Serdecznie zapraszam do oglądania i zachęcam do lajkowania na <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow noopener noreferrer">Facebook</a> lub <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow noopener noreferrer">Insta</a>.'
                    }
                    slug={"miejska-sesja-narzeczenska-piekni-mlodzi-i-zakochani"}
                    title={"MIEJSKA SESJA NARZECZEŃSKA, PIĘKNI, MŁODZI i ZAKOCHANI - MARLENA i ADAM"}
                    tags={"pomysł na sesję zdjęciową, ciekawe miejsca w krakowie, zdjęcia pary młodej w plenerze"}
                    date={"19 lipca 2019"}
                    menuNames={"MARLENA i ADAM"}
                    menuTitle={"MIEJSKA SESJA NARZECZEŃSKA, PIĘKNI, MŁODZI i ZAKOCHANI"}
                    leadNames={"JOANNA i SZYMON"}
                    leadTitle={"CIEKAWE MIEJSCA W KRAKOWIE CZYLI POMYSŁ NA SESJĘ ZDJĘCIOWĄ"}
                    leadUrl={"/ciekawe-miejsca-w-krakowie-czyli-pomysl-na-sesje-zdjeciowa"}
                    leadImage={"url(/static/ciekawe_miejsca_na_plener_w_krakowie.jpg)"}
                />
            </div>
        );
    }
}