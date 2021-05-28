import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: process.env.staticImagesPath + "hotel_zameczek_ksiaz_wielki.jpg"
            }
        ];

        let images = [
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0002.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0006.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0011.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0014.jpg", height: 805 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0015.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0017.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0018.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0020.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0021.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0023.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0025.jpg", height: 850 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0026.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0027.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0028.jpg", height: 566 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0029.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0031.jpg", height: 567 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0034.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0175.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0040.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0042.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0046.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0048.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0051.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0052.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0053.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0055.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0059.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0065.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0066.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0069.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0070.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0073.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0074.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0076.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0080.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0082.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0081.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0088.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0090.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0091.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0092.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0093.jpg", height: 566 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0094.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0096.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0102.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0104.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0107.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0108.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0110.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0111.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0112.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0115.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0116.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0118.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0121.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0122.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0128.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0131.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0132.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0134.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0135.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0137.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0138.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0139.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0140.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0141.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0144.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0145.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0146.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0147.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0149.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0148.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0150.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0151.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0152.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0153.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0154.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0155.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0156.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0157.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0158.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0159.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0160.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0161.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0163.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0164.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0162.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0165.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0166.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0167.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0168.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0169.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0170.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0171.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0172.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0173.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/09/hotel_zameczek_ksiaz_wielki_0174.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Hotel Zameczek Książ Wielki, ślubne iskierki miłości"}
                    headDescription={"Hotel Zameczek Książ Wielki miejsce niezwykle klimatyczne z milionem fotograficznych zakamarków, więc na ślub wymarzone. Zapraszam na ślubne iskierki miłości Katarzyny i Pawła."}
                    headKeywords={"hotel zameczek książ wielki, ślubne iskierki miłości, fotograf na wesele Miechów"}
                    headUrl={"https://99foto.pl/hotel-zameczek-ksiaz-wielki-i-slubne-iskierki-milosci/"}
                    entryContentP1={
                        'Jestem pewny, że Mama Kasi i Moniki zapamięta rok 2019 na długo. Jedne wakacje, trochę sprytu jakim wykazali się chłopcy i dwie siostry niemalże jednocześnie rozpoczęły nowe życia u boku swoich wspaniałych mężczyzn. Ciekawe czy dziewczyny równie równo pochwalą się wiadomościami o zaplanowanych wnukach lub wnuczkach. Ale skąd ja o tym wszystkim wiem? Jak się pewnie domyślacie znam szczegóły ponieważ miałem przyjemność fotografować również ślub Moniki i Daniela. Po ślubie zrobiliśmy sesję ślubną, w której asystowała nam Kasia, a już dzisiaj na blogu możecie oglądać zdjęcia, które zrobiłem niedawno bo w ostatnim tygodniu sierpnia. Wiecie, fakt, że goście znają już fotografa ślubnego i wiedzą, że mogą mu zaufać i wiedzą jakich zdjęć mogą się  spodziewać bardzo pomaga. Było tak i tym razem. Dużo trafionych fajnych zdjęć akcji i cały reportaż w stu procentach poleciał bez jakichkolwiek ustawek i niepotrzbego stresu. Ale do sedna...'
                    }
                    entryContentP2={
                        'Dzień rozpoczęliśmy od makijażu, który wykonała <a href="https://www.facebook.com/justynaceglamakeup/"  target="_blank" rel="nofollow">Justyna</a>. Wcześniej róże spłynęły na Monię, a relacja z tych artystycznych wyczynów znalazła się ekspresowo na fejsbookowej ściance. Gdy makijaże były gotowe, Mama i Monika pomogły założyc Kasi suknię ślubną, biżuterię, buty i welon. Następnie kilka kilometrów E7 na Warszawę i zielona tabliczka Cisie wskazała mi dom rodzinny Pawła. Żółty fotel skupił moją uwagę. Paweł założył marynarkę, muchę, spinki, buty i zegarek. Wyszedł witać nadjeżdżających gości. Było błogosławieństwo, sakramentalne TAK w <a href="https://www.diecezja.kielce.pl/parafie/chodow-sw-jana-chrzciciela"  target="_blank" rel="nofollow">Kościele Św. Jana Chrzciciela w Chodowie</a> i zdjęcie grupowe po którym Para Młoda zaprosiła gości weselnych do miejsca niezwykłego <a href="http://www.hotelzameczek.pl/"  target="_blank" rel="nofollow">Hotelu Zameczek w Książu Wielkim</a>. Osobiście byłem zachwycony tym miejscem. Sale Królewska, Słoneczna, Zamkowa, Kominkowa i Barowa urządzone były z niebywałą wręcz starannością. Wystrój wnętrz pozwalał na bardzo kreatywne fotografowanie i mam nadzieję, że pomimo dość sporej odległości od Krakowa, miejsce to będę miał okazje jeszcze kiedyś odwiedzić. Zespół muzyczny doskonale wiedział co lubią goście i bez forteli zapełniał parkiet po brzegi. Spośród wielu atrakcji, które Para Młoda zaserwowała gościom tej nocy na szczególną uwagę zasługiwała niespodzianka przygotowana przez Drużbów wesela. Kolorowe baloniki wypełnione helem ze świecącym diodami led, a do tego iskierki miłości, którymi goście wymachiwali równiutko w rytm śpiewanego głośno Sto Lat. Było bajecznie. Serdecznie zapraszam do oglądania zdjęć.'
                    }
                    slug={"hotel-zameczek-ksiaz-wielki-i-slubne-iskierki-milosci"}
                    title={"HOTEL ZAMECZEK KSIĄŻ WIELKI, ŚLUBNE ISKIERKI MIŁOŚCI - KATARZYNA i PAWEŁ"}
                    tags={"hotel zameczek książ wielki, ślubne iskierki miłości, fotograf na wesele Miechów"}
                    date={"4 września 2019"}
                    menuNames={"KATARZYNA i PAWEŁ"}
                    menuTitle={"HOTEL ZAMECZEK KSIĄŻ WIELKI, ŚLUBNE ISKIERKI MIŁOŚCI"}
                    leadNames={"TERESA i ANDRZEJ"}
                    leadTitle={"PARK MOGILANY, BUZIAKI SKĄPANE W PROMIENIACH SŁOŃCA"}
                    leadUrl={"/park-mogilany-i-moc-buziakow-skapanych-w-promieniach-slonca"}
                    leadImage={"url(/static/sesja_narzeczenska_klasztor_w_tyncu.jpg)"}
                />
            </div>
        );
    }
}