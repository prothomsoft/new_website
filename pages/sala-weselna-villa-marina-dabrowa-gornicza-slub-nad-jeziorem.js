import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sala-weselna-villa-marina-dabrowa-gornicza-slub-nad-jeziorem-start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0003.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0004.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0005.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0009.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0014.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0018.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0019.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0021.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0022.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0024.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0026.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0032.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0033.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0036.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0038.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0039.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0049.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0041.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0042.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0044.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0046.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0048.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0050.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0051.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0052.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0053.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0054.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0055.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0056.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0057.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0061.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0062.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0063.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0065.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0066.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0067.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0068.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0072.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0073.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0074.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0075.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0076.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0077.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0078.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0079.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0080.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0081.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0082.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0083.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0084.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0085.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0086.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0087.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0088.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0089.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0090.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0091.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0092.jpg", height: 472 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0093.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0094.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0095.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0096.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0069.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0097.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0098.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0099.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0100.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0101.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0102.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0103.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0104.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0105.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0106.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0107.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0108.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0109.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0110.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0111.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0112.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0113.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0114.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0115.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0116.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0117.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0118.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0119.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0120.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0121.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0122.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0125.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0123.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0124.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0126.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0127.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0129.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0130.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0131.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0132.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0133.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0134.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0135.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0136.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0148.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0137.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0138.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0139.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0141.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0140.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0143.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0144.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0145.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0146.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0147.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0150.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0149.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0142.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0128.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sala weselna Villa Marina Dąbrowa Górnicza, ślub nad jeziorem"}
                    headDescription={
                        "Sala weselena Villa Marina jest położona nad brzegiem jeziora Pogoria w bezpiecznej odległości od centrum miasta, malowniczej okolicy w otoczeniu lasu. Zapraszam na zdjęcia ślubne Sandry i Maćka."
                    }
                    headKeywords={"Villa Marina Dąbrowa Górnicza, sala weselna nad jeziorem, ślub na śląsku"}
                    headUrl={"https://99foto.pl/sala-weselna-villa-marina-dabrowa-gornicza-slub-nad-jeziorem/"}
                    entryContentP1={
                        'Dokładnie tydzień temu zachęcony niezwykłą, pachnącą na klipach internetowych wakacyjnym klimatem salą weselną <a href="https://villamarina.eu/" target="_blank" rel="nofollow">Villa Marina w Dąbrowie Górniczej</a>, wybrałem się na zdjęcia ślubne trochę dalej niż zwykle. Powiem jedno było warto i śląsk zapamiętam bardzo dobrze i na bardzo długo. Przy okazji upolowałem fajne kadry, które na pewno rozszerzą moje dotychczasowe porfolio. Dzień rozpoczęliśmy w Tarnowskich Górach w domu rodzinnym Sandry, gdzie Magda pomalowała Pannę Młodą. Staraliśmy się nie przeszkadzać Magdzie w pracy, może nie do końca się udało, ale kilka drobnych próśb cierpliwie przez nią wysłuchiwanych, pozwoliło nam świetnie współpracować i zrobić fajne zdjęcia. Kolejne kilka minut zostało skradzione przez ubieranie sukni ślubnej i tak oto wszystko zostało finalnie dopięte na ostatni guzik. Pojechaliśmy więć na przygotowania do Maćka. Było to bardzo dynamiczne piętnaście minut, w których Pan Młody założył spinki, muchę, buty, zegarek i marynarkę. Pierwszy pocałunek, błogosławieństwo, dwie bramy przygotowane przez sąsiadów i dotarliśmy do <a href="https://parafia.bobrowniki.tgory.pl/" target="_blank" rel="nofollow">Kościoła pw. Przemienienia Pańskiego</a> w Tarnowskich Górach. Ceremonia, podczas której goście procesyjnie przeszli za ołtarz, oraz piękne kazanie wygłoszone przez charyzmatycznego księdza i wreszcie sakramentalne TAK.'
                    }
                    entryContentP2={
                        'Po wyjściu z kościoła Parę Młodą przywitało piękne słońce i deszcz... monet, które goście wyrzucili na szczęcie. Garść gorących życzeń, po których Para Młoda zaprosiła gości weselnych na mniej oficjalną część imprezy do wspomnianej już <a href="https://villamarina.eu/" target="_blank" rel="nofollow">Sali Bankietowej Villa Marina w Dąbrowie Górniczej</a>. Sala weselena Villa Marina i ośrodek wypoczynkowy położony są nad brzegiem jeziora Pogoria w bezpiecznej odległości od centrum miasta, malowniczej okolicy w otoczeniu lasu. Każdy z gości po dotarciu na miejsce nie krył zachwytu rozwodząc się nad wspaniałością tego miejsca. Sandra i Maciek przyjęli resztę gorących życzeń od wszystkich gości weselnych i otworzyli parkiet pierwszym tańcem. <a href="https://zespol-lavado.pl" target="_blank" rel="nofollow">Zespół Lavado</a>, który grał dla nas tego wieczoru stanął na wysokości zadania. Świetne brzmienie gitary, Grzegorz i jego saksofon wyrzucający z lekkością motyla niezliczoną ilość perfekcyjnie poukładanych dźwięków, wybitny głos wokalistki i szeroki wachlarz utworów zostaną w naszych głowach na długo. Po raz kolejny miałem też możliwość spotkać się i współpracować z Krzysiem z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">CAMDESIGN - Pracownia Filmu Ślubnego</a>, który nagrywał, rejestrował i filmował jednocześnie. Naprawdę super impreza w wakacyjnym klimacie, którego w kwietniu nikt przecież by się nie mógł spodziewać. Sandro i Maćku, dzięki za zaufanie i zaproszenie mnie na Wasz ślub. Nie przedłużająć serdecznie zapraszam do oglądania zdjęć, a po kilka więcej do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"sala-weselna-villa-marina-dabrowa-gornicza-slub-nad-jeziorem"}
                    title={"VILLA MARINA DĄBROWA GÓRNICZA, ŚLUB NAD JEZIOREM - SANDRA i MACIEK"}
                    tags={"Villa Marina Dąbrowa Górnicza, sala weselna nad jeziorem, ślub na śląsku"}
                    date={"20 kwietnia 2018"}
                    menuNames={"SANDRA i MACIEK"}
                    menuTitle={"VILLA MARINA DĄBROWA GÓRNICZA, ŚLUB NAD JEZIOREM"}
                    leadNames={"NATALIA i PIOTR"}
                    leadTitle={"HOTEL MARGERITA, MAGICZNY WYSTRÓJ SALI WESELNEJ W KRAKOWIE"}
                    leadUrl={"/hotel-margerita-magiczny-wystroj-sali-weselnej-w-krakowie"}
                    leadImage={"url(/static/hotel_margerita_krakow_magiczny_wystroj_sali_weselnej_w_krakowie-start.jpg)"}
                />
            </div>
        );
    }
}
