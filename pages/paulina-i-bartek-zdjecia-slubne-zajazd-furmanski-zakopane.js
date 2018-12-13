import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/paulina_i_bartek_zdjecia_slubne_zajazd_furmanski_zakopane_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0036.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0004.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0007.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0008.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0009.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0010.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0011.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0013.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0014.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0015.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0016.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0017.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0021.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0022.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0023.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0029.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0030.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0032.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0038.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0041.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0042.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0046.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0048.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0049.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0050.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0051.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0052.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0054.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0055.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0056.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0057.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0058.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0060.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0061.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0062.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0063.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0064.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0065.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0066.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0067.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0068.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0069.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0070.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0071.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0072.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0073.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0074.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0075.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0076.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0077.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0078.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0079.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0080.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0081.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0082.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0083.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0084.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0085.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0086.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0087.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0088.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0089.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0090.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0091.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0092.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0093.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0094.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0095.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0096.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0097.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0098.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0099.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0100.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0101.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0102.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0103.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0104.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0105.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0106.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0107.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0108.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0109.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0110.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0111.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0112.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/09/fotograf_na_wesele_zakopane_0113.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Zdjęcia ślubne Zajazd Furmański Zakopane"}
                    headDescription={"Serdecznie zapraszam na historię Pauliny i Bartka, którzy na co dzień mieszkają w Szczecinie, a góry pokochali tak bardzo, że Zakopane wybrali na ślub."}
                    headKeywords={"fotograf na wesele zakopane,zdjęcia ślubne zajazd furmański"}
                    headUrl={"https://99foto.pl/paulina-i-bartek-zdjecia-slubne-zajazd-furmanski-zakopane/"}
                    entryContentP1={
                        "Paulina i Bartek na co dzień mieszkają w Szczecinie. Góry jednak kochają tak bardzo, że Zakopane wybrali na miejsce swojego ślubu. Zamieszkali w Willi Orion pod okiem przemiłej gospodyni i zaplanowali swój ślub w Zajeździe Furmańskim. Ten dzień rozpoczęliśmy wcześnie o godzinie ósmej rano, od fryzur w zakopiańskim salonie fryzjerskim. Następnie makijaż i suknia ślubna, której ubieranie odbyło się w pokoju z ciekawą historią. Para młoda powiedziała TAK w Urzędzie Stanu Cywilnego w Zakopanym i zaprosiła gości do zajazdu na ciąg dalszy góralskich przygód."
                    }
                    entryContentP2={
                        "Na miejscu gości przywitała kapela góralska, w grającej której chłopaki bardzo przypadli do gustu Babci Pauliny. Zabawa trwała do białego rana i para DJ-ów, która zastąpiła górali, gdy Ci wyczerpali swój repertuar, świetnie poprowadziła całą imprezę. Pozdrowienia dla gości weselnych i miłego oglądania. Przypominam, że blisko 500 zdjęć znajdziecie w strefie klienta."
                    }
                    slug={"paulina-i-bartek-zdjecia-slubne-zajazd-furmanski-zakopane"}
                    title={"ZDJĘCIA ŚLUBNE ZAJAZD FURMAŃSKI ZAKOPANE - PAULINA i BARTEK"}
                    tags={"fotograf na wesele zakopane,zdjęcia ślubne zajazd furmański"}
                    date={"14 września 2015"}
                    menuNames={"PAULINA i BARTEK"}
                    menuTitle={"ZDJĘCIA ŚLUBNE ZAJAZD FURMAŃSKI ZAKOPANE"}
                    leadNames={"MONIKA i RAFAŁ"}
                    leadTitle={"ZDJĘCIA ŚLUBNE KRAKÓW, RESTAURACJA CHOCHOŁOWY DWÓR"}
                    leadUrl={"/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor"}
                    leadImage={"url(/static/monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_start.jpg)"}
                />
            </div>
        );
    }
}
