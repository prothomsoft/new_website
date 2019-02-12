import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/fotograf_na_wesele_jordanow_straznica_pcim_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0135.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0006.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0008.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0015.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0021.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0022.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0024.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0026.jpg", height: 806 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0032.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0036.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0037.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0038.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0039.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0041.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0042.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0046.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0049.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0048.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0050.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0051.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0054.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0052.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0056.jpg", height: 1007 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0057.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0061.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0062.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0063.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0065.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0064.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0066.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0067.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0068.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0069.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0070.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0071.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0072.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0074.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0077.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0075.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0078.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0076.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0079.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0073.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0080.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0082.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0081.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0083.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0084.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0085.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0086.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0087.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0088.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0089.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0090.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0091.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0092.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0093.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0094.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0095.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0096.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0097.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0098.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0099.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0100.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0101.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0102.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0103.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0104.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0105.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0106.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0107.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0108.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0109.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0110.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0111.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0112.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0113.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0114.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0115.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0116.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0117.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0118.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0119.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0120.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0121.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0122.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0123.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0124.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0125.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0126.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0127.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0128.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0130.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0132.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0133.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0136.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/99FOTOPL_SPP_002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0138.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0139.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0140.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0141.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0152.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0143.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0144.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0145.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0147.jpg", height: 806 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0153.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0146.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0149.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0151.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0150.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0148.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/fotograf_na_wesele_naprawa_jordanow_0142.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Fotograf na wesele Jordanów, Strażnica Pcim"}
                    headDescription={"Serdecznie zapraszam do Jordanowa, Strażnicy w Pcimiu i Kościoła w Naprawie gdzie sakramentalne TAK powiedzieli sobie Kasia i Grzesiek. Miłego oglądania."}
                    headKeywords={"fotograf na wesele jordanów,strażnica pcim"}
                    headUrl={"https://99foto.pl/fotograf-na-wesele-jordanow-straznica-pcim/"}
                    entryContentP1={
                        "Sobota w długi sierpniowy weekend rozpoczęła się wcześnie, bo o godzinie ósmej rano. Jadąc Zakopianką do Jordanowa na makijaż Kasi miałem okazje podziwiac spowodowane zmiennością aury wspaniałe niemalże górskie widoki. Trudno było zatrzymać się w Bystrej Podhalańskiej, bo aż chciałoby się popędzić dalej. Ale właśnie w Jordanowie Kasia rozpoczęła swoje przygotowania do ślubu. Fajny gabinet kosmetyczny i chwilę później jeszcze nie do końca zamieszkały ale gustownie urządzony salon fryzjerski w Rabce Zdrój."
                    }
                    entryContentP2={
                        'Kiedy fryzura i makijaż były gotowe siostra Kasi Ewa pomogła ubrać suknię ślubną, buty i biżuterię (wiem, że już za rok Kasia się siostrze odwdzięczy). Następnie razem z kamerzystą Kubą, jak się później okazało, Andrzejem Wajdą całego ślubu, udaliśmy się do domu rodzinnego Grześka. Pierwsze i drugie błogosławieństwo w świetnej rodzinnej atmosferze i chwilę później nerwowe oczekiwanie na walczącego z korkami na Zakopiance księdza w <a href="https://www.naprawa.parafia.info.pl/" target="blank">Kościele Parafialnym Św. Siostry Faustyny Kowalskiej w Naprawie</a>. Kwadrans studencki i rozpoczęliśmy ceremonię podczas której młodzi powiedzieli sobie sakramentalne TAK. Po zdjęciu grupowym udaliśmy się na <a href="https://www.osp.pcim.pl/" target="_blank" rel="nofollow">salę weselną w Strażnicy OSP w Pcimiu</a>. Rodzice przywitali młodych chlebem i solą, goście złożyli gorące życzenia i z podziwem oglądali pierwszy taniec Kasi i Grześka. Pełny parkiet to zasługa <a href="https://www.wiarusy.info/" target="_blank" rel="nofollow">Zespółu Muzycznego, Kapeli Wiarusy z Mszany Dolnej</a>. Świetny, spędzony w miłym towarzystwie dzień. Cieszę się bardzo, że mogłem być tam z Wami w tych najważniejszych chwilach Waszego życia. Zapraszam do oglądania, a po więcej zdjęć do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"fotograf-na-wesele-jordanow-straznica-pcim"}
                    title={"FOTOGRAF NA WESELE JORDANÓW, STRAŻNICA PCIM - KASIA i GRZEGORZ"}
                    tags={"fotograf na wesele jordanów,strażnica pcim"}
                    date={"18 sierpnia 2017"}
                    menuNames={"KASIA i GRZEGORZ"}
                    menuTitle={"FOTOGRAF NA WESELE JORDANÓW, STRAŻNICA PCIM"}
                    leadNames={"JULIA i PIOTR"}
                    leadTitle={"SESJA ZDJĘCIOWA PARK W MOGILANACH, ZAKRZÓWEK i KAZIMIERZ"}
                    leadUrl={"/sesja-zdjeciowa-park-w-mogilanach-zakrzowek-i-kazimierz"}
                    leadImage={"url(/static/sesja_zdjeciowa_park_w_mogilanach_zakrzowek_i_kazimierz_start.jpg)"}
                />
            </div>
        );
    }
}
