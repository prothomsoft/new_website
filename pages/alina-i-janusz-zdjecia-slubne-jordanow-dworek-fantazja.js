import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/alina_i_janusz_zdjecia_slubne_jordanow_dworek_fantazja_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0001.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0002.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0003.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0019.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0004.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0005.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0006.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0016.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0007.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0008.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0011.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0025.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0010.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0024.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0009.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0012.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0026.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0015.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0014.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0018.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0017.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0013.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0020.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0021.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0022.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0023.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0027.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0028.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0029.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0030.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0031.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0032.jpg", height: 527 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0033.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0034.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0035.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0036.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0038.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0039.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0040.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0041.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0042.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0043.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0044.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0045.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0046.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0047.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0048.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0049.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0050.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0051.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0053.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0052.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0056.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0054.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0057.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0055.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0058.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0059.jpg", height: 806 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0060.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0061.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0062.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0063.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0064.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0065.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0066.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0067.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0068.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0069.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0070.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0071.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0073.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0072.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0074.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0075.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0076.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0078.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0077.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0079.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0080.jpg", height: 851 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0081.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0082.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0083.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0084.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0085.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0086.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0087.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0088.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0089.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0090.jpg", height: 526 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0091.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0092.jpg", height: 527 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0093.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0094.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0095.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0096.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0097.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0098.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0099.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0100.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0101.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0102.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0104.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0103.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0107.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0105.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0106.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0108.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0109.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0110.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0111.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0112.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0113.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0115.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0114.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0116.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0117.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0118.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0119.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0120.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0121.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0122.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0123.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0124.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0126.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0125.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0127.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0128.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0129.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0130.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0131.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0132.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0133.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0134.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0135.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0136.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0137.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0138.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0139.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0140.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0141.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0142.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0143.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0144.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0145.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0146.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0147.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0148.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0149.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0150.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0151.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0152.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2016/11/fotograf_slubny_jordanow_0153.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Fotograf ślubny Jordanów, zdjęcia ślubne Dworek Fantazja"}
                    headDescription={"Do krótkiego streszczenia ich wielkiego dnia najbardziej pasują dwa słowa: było pięknie! Na moim BLOGu, krótka historia opowiedziana wyjątkowymi momentami."}
                    headKeywords={"reportaż ślubny jordanów,zdjęcia ślubne restauracja dworek fantazja"}
                    headUrl={"http://wp.99foto.pl/alina-i-janusz-zdjecia-slubne-jordanow-dworek-fantazja/"}
                    entryContentP1={
                        "Jordanów po raz kolejny. Za oknami jesień w pełni. Z pozoru szara sobota, w praktyce dzień przepełniony emocjami i wrażeniami. Reportaż ślubny Aliny i Janusza zaczęliśmy od makijażu Panny Młodej, który został mistrzowsko wykonany przez Iwonę. Spotkaliśmy się z Iwoną po raz kolejny, tym razem również na sali weselnej. Makijaż jak zwykle doskonały, wywołał zachwyt wszystkich gości i skrócił moją prace nad zdjęciami w Photoshopie o dobre kilka godzin. Kiedy Pani Młoda była już gotowa, oczarowywała każdą wchodzącą do jej pokoju osobę. Po kilku chwilach zabarwionych cieniami i szminkami nadszedł czas na pojawienie się Pana Młodego. Za oknem pojawiła się limuzyna, a Janusz elegancko przywitał się ze swoją przyszłą żoną."
                    }
                    entryContentP2={
                        'Pan młody nie wykazywał żadnych oznak stresu, oaza spokoju i dobrego humoru. Pierwsze spotkanie Aliny i Janusza, bezcenne. Po chwilach wzruszenia podczas rodzinnego błogosławieństwa udaliśmy się do Kościoła Przenajświętszej Trójcy w Jordanowie. Były łzy szczęścia i wzniosłe chwile. Stało się! Po ogłoszeniu naszej Pary mężem i żoną udaliśmy się do domu weselnego <a href="https://www.dworekfantazja.pl/" target="_blank" rel="nofollow">Dworek Fantazja w Skomielnej Białej</a>, gdzie odbyło się wesele. Za oprawę muzyczną tego dnia zadbał <a href="https://www.facebook.com/zespolmelodika" target="_blank" rel="nofollow">Zespół Melodika</a>, natomiast filmową pamiątkę tworzył Pan Piotr z <a href="https://www.facebook.com/video.foto.sonique" target="_blank" rel="nofollow">Sonique Video &#038; Fotografia</a>.  Po wejściu Młodych na salę, obiedzie i życzeniach przyszedł czas na pierwszy taniec. Parkiet został otwarty. Działo się zdecydowanie bardzo wiele, od szalonych tańców, szerokiego wachlarza zabaw weselnych po szaleństwa w <a href="https://www.facebook.com/FotobudkaWojtasa" target="_blank" rel="nofollow">fotobudce Wojtasa</a>.  Goście weselni zdecydowanie dopisali, a nasi tytułowi bohaterowie mieli co świętować. Bardzo dziękuję za ten wyjątkowy dzień, ciepłe przyjęcie i wspaniałą atmosferę. Miłego oglądania, a po więcej zdjęć zapraszam gości weselnych do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"alina-i-janusz-zdjecia-slubne-jordanow-dworek-fantazja"}
                    title={"ZDJĘCIA ŚLUBNE JORDANÓW, DWOREK FANTAZJA - ALINA i JANUSZ"}
                    tags={"reportaż ślubny jordanów,zdjęcia ślubne restauracja dworek fantazja"}
                    date={"11 listopada 2016"}
                    menuNames={"ALINA i JANUSZ"}
                    menuTitle={"ZDJĘCIA ŚLUBNE JORDANÓW, DWOREK FANTAZJA"}
                    leadNames={"KINGA i JULIEN"}
                    leadTitle={"ŚLUB CYWILNY i WESELE W PLENERZE - WITKOWA CHATA KRAKÓW"}
                    leadUrl={"/slub-cywilny-i-wesele-w-plenerze-witkowa-chata-krakow"}
                    leadImage={"url(/static/slub_cywilny_i_wesele_w_plenerze_witkowa_chata_krakow_start.jpg)"}
                />
            </div>
        );
    }
}
