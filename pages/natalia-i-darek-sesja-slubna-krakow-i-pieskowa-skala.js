import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/natalia_i_darek_sesja_slubna_krakow_i_pieskowa_skala_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/99FOTOPL_SPP_066.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0001.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/99FOTOPL_SPP_101.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0020.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0003.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0004.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0005.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0009.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0007.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0008.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/99FOTOPL_SPP_076.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0012.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0014.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0015.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0016.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0017.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0018.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0021.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0024.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0025.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0019.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0026.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0028.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/plener_slubny_krakow_0002.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sesja ślubna Pieskowa Skała"}
                    headDescription={"Pachnący nowością po remoncie Zamek w Pieskowej Skale oraz gram Kazimierza. Serdecznie zapraszam na plener ślubny Natalii i Darka. Miłego oglądania."}
                    headKeywords={"sesja ślubna pieskowa skała,plener ślubny kraków"}
                    headUrl={"https://99foto.pl/natalia-i-darek-sesja-slubna-krakow-i-pieskowa-skala/"}
                    entryContentP1={
                        'Zdjęcia Natalii i Darka mieliście już okazję oglądać przy okazji <a href="https://99foto.pl/natalia-i-dariusz-zdjecia-slubne-w-domu-weselnym-gosciniec-branicki-2/" target="_blank">ich ślubu</a>, który odbył się w <a href="https://gosciniec-branicki.pl/" target="_blank">Domu Weselnym Gościniec Branicki</a> już chwilę temu. Nadszedł czas na kilka zdjęć z pleneru. Początkowo planowaliśmy zrobić zdjęcia w Oświęcimiu, wykorzystując wiosenne okoliczności przyrody, jednak w końcu zdecydowaliśmy się na naprawdę świetne miejsce jakim jest położony niedaleko od Krakowa, pachnący nowością po remoncie <a href="https://pieskowaskala.eu/" target="_blank">Zamek w Pieskowej Skale</a>. Mieliśmy świetną pogodę i wymarzone dla zdjęć światło.'
                    }
                    entryContentP2={
                        'Tym razem nie po raz pierwszy zdjęcia robiły się same. Natalia i Darek świetnie sprawdzili się w roli modeli, pełny luz, dużo uśmiechu i oczywiście jak to na sesji ślubnej buziaków. Naszą sesję plenerową kontynuowaliśmy w Krakowie. Do wyboru był Rynek Główny, Wawel i Kazimierz &#8211; bez wahania wybraliśmy Kazimierz. Na Kazimierzu odwiedziliśmy Kładkę Bernadkę, Starą Zajezdnię, Pub Stajnię i restaurację <a href="https://www.placnowy1.pl/" target="_blank">Plac Nowy 1</a>. Na koniec obgadaliśmy plany na Światowy Dzień Młodzieży i wyruszyliśmy do domów. Miłego oglądania.'
                    }
                    slug={"natalia-i-darek-sesja-slubna-krakow-i-pieskowa-skala"}
                    title={"SESJA ŚLUBNA KRAKÓW I PIESKOWA SKAŁA - NATALIA i DAREK"}
                    tags={"sesja ślubna pieskowa skała,plener ślubny kraków"}
                    date={"14 czerwca 2016"}
                    menuNames={"NATALIA i DAREK"}
                    menuTitle={"SESJA ŚLUBNA KRAKÓW I PIESKOWA SKAŁA"}
                    leadNames={"ALINA i JANUSZ"}
                    leadTitle={"ZDJĘCIA ŚLUBNE JORDANÓW, DWOREK FANTAZJA"}
                    leadUrl={"/alina-i-janusz-zdjecia-slubne-jordanow-dworek-fantazja"}
                    leadImage={"url(/static/alina_i_janusz_zdjecia_slubne_jordanow_dworek_fantazja_start.jpg)"}
                />
            </div>
        );
    }
}
