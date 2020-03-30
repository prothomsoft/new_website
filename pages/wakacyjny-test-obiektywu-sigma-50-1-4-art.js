import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/wakacyjny_test_obiektywu_sigma_50_1_4_art_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0001.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0041.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0056.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0011.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0009.jpg", height: 472 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0013.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0052.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0024.jpg", height: 806 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0057.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0027.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0048.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0032.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0055.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0036.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0038.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0054.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0042.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0053.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0046.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0051.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0062.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0050.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0061.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/07/wakacje_0049.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Test obiektywu Sigma 50 1.4 ART"}
                    headDescription={"Tym razem zupełnie nie ślubnie. Kilka zdjęć z naszych wakacji i testy obiektywu Sigma 50 1.4 ART. Zapraszam na bloga i życzę miłego oglądania."}
                    headKeywords={"test obiektywu sigma 50 1.4 art,sesja zdjęciowa kraków"}
                    headUrl={"https://99foto.pl/wakacyjny-test-obiektywu-sigma-50-1-4-art/"}
                    entryContentP1={
                        "Tym razem zupełnie nie ślubnie. Kilka zdjęć z wakacji, które razem z moim bratem i jego rodziną spędziliśmy w Miszkolcu, Nyiregyhazie, a w drodze powrotnej odwiedzając Tatrzańską Łomnicę. Wakacje to dobry moment, żeby przetestować nowy obiektyw, sprawdzić czy dobrze ostrzy i będzie ok mówiąc krótko na ślubach. Tak się też stało również tym razem. Zabrałem ze sobą Sigmę 50 1.4 ART z filtrem polaryzacyjnym Marumi DHG Super. Większość zdjęć jest zrobiona tym obiektywem, który jak można odnaleźć w internecie jest najlepszą pięćdziesiątką na rynku."
                    }
                    entryContentP2={
                        "Szersze kadry to Nikkor AF-S 28 mm f/1.8G, którego jeszcze nie zamieniłem na Sigmę 35 1.4 ART, ale myślę, że jest to kwestia najbliższych miesięcy. Testowałem też obudowę na lustrzankę do zdjęć podwodnych. Ogólnie warto mieć takie coś w przypadku wypraw na zdjęcia do Parków Wodnych, no i może kiedyś na sesji zdjęciowej w górach się przyda. Miłego oglądania."
                    }
                    slug={"wakacyjny-test-obiektywu-sigma-50-1-4-art"}
                    title={"WAKACYJNY TEST OBIEKTYWU SIGMA 50 1.4 ART - MARTUSIA i MICHAŚ"}
                    tags={"test obiektywu sigma 50 1.4 art,sesja zdjęciowa kraków"}
                    date={"23 lipca 2017"}
                    menuNames={"MARTUSIA i MICHAŚ"}
                    menuTitle={"WAKACYJNY TEST OBIEKTYWU SIGMA 50 1.4 ART"}
                    leadNames={"EWELINA i KAMIL"}
                    leadTitle={"HOTEL QUBUS KRAKÓW SESJA ZDJĘCIOWA"}
                    leadUrl={"/hotel-qubus-krakow-sesja-zdjeciowa"}
                    leadImage={"url(/static/hotel_qubus_krakow_sesja_zdjeciowa_start.jpg)"}
                />
            </div>
        );
    }
}
