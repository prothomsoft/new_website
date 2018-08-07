import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/restauracja_tiffany_wola_filpowska.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0025.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0001.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0002.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0007.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0003.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0005.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0004.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0006.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0011.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0009.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0010.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0015.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0016.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0014.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0017.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0018.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0019.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0020.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0024.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0154.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0021.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0022.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0023.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0029.jpg", height: 419 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0026.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0028.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0027.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0030.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0031.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0032.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0033.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0034.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0035.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0036.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0037.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0038.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0039.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0040.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0041.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0043.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0044.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0045.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0046.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0047.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0049.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0048.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0050.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0051.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0052.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0060.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0053.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0054.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0055.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0056.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0057.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0058.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0059.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0152.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0061.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0062.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0063.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0064.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0065.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0066.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0068.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0067.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0069.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0070.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0071.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0073.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0074.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0075.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0076.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0077.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0078.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0079.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0080.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0081.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0082.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0083.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0084.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0085.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0086.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0087.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0088.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0089.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0090.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0091.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0092.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0094.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0093.jpg", height: 566 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0095.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0096.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0097.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0098.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0099.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0100.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0101.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0102.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0103.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0104.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0105.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0106.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0107.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0108.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0109.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0110.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0112.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0111.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0113.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0114.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0115.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0116.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0117.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0118.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0119.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0120.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0121.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0122.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0123.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0124.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0125.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0126.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0128.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0129.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0131.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0130.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0132.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0133.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0134.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0135.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0136.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0137.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0138.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0140.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0139.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0149.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0141.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0143.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0144.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0145.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0146.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0147.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0148.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0142.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0150.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0151.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Restauracja Tiffany Wola Filipowska, fotograf na ślub Krzeszowice"}
                    headDescription={
                        "Restauracja Tiffany Wola Filipowska i reportaż ze ślubu Marty i Marcina w Krzeszowicach. First look na jednym z najwyższych wieżowców w Krakowie. Zapraszam do oglądania."
                    }
                    headKeywords={"restauracja tiffany wola filipowska, fotograf na ślub krzeszowice, first look na dachu wieżowca"}
                    headUrl={"http://99foto.pl/aga-michal-i-zuzia-zdjecia-slubne-zajazd-polesie-przybyslawice/"}
                    entryContentP1={
                        'Kilkukrotnie już pisałem, że wesela w górach mają swój niepowtarzalny klimat. Było tak i tym razem na ślubie Natalii i Kamila w Waksmundzie. Ósma rano, flat white na Orlenie, przejazd przez świetnie mi znane pienińskie zakątki, czyli Sromowce Wyżne brzegiem Jeziora Czorsztyńskiego i pierwszy przystanek <a href="https://www.facebook.com/Studio-Urody-Avangarda-Karolina-Bryja-200918166919683/" target="_blank">Studio Urody Avangarda Karoliny Bryja</a>. W tym miejscu rozpoczęliśmy przygotowania. Karolina to kuzynka Natalii, więc w takie rodzinnej atmosferze, mając salon niemalże na wyłączność powstał perfekcyjny makijaż. Podczas przygotowań Natalii towarzyszyły druhny. Wszystkie dziewczyny wyglądały świetnie i błyskawicznie pomogły Natalii założyć suknie, biżuterię, podwiązkę i buty. W oczekiwaniu na Kamila, który do Waksmundu jechał z Jordanowa w kuchni toczyła się alternatywna impreza. Holenderscy goście, którzy na codzień raczej tylko piwko, złamali się i bariera językowa szybko pękła... i nie tylko bariera pękła w tej kuchni. Dalej już błogosławieństwo, wzruszenia i przejazd końmi do <a href="http://www.diecezja.pl/parafie/lista-parafii/32-nowy-targ/parafia-sw-jadwigi-slaskiej.html" taget="_blank">Kościoła Świętej Jadwigi Śląskiej</a> w Waksmundzie.'
                    }
                    entryContentP2={
                        'Ksiądz prowadzący ceremonię z pewnością dawno nie widział tylu uśmiechów w trakcie Mszy Świętej. Zdjęcie grupowe i udaliśmy się do położonej w pobliżu <a href="http://www.willa-orchidea.pl/" target="_blank">Sali weselnej Willa Orchidea</a>. Sala ta fioletami elewacji zaprasza gości z daleka i trudno ją przeoczyć podróżując w tamtych stronach. Rodzice przywitali młodych chlebem i solą, następnie goście zjedli obiad i ustawili się w długiej kolejce do życzeń. Natalia czarowała uśmiechem, Kamil nie oszczędzał gorących uścisków, prezentów na stoliku w mgnieniu oka przybywało. Nadszedł czas na pierwszy taniec, tort weselny i cały zestaw zabaw. Animatorki zabawiały dzieciaki, a rodzice korzystali z zasłużonej chwili wolności. Gościom weselnym na parkiecie przygrywał <a href="http://edenzespol.pl" target="_blank">Zespół Eden</a>, wyróżniający się świetnym głosek wokalistki Ewy. Po lekkiej burzy udało nam się wyskoczyć na Waksmundzki punkt widkowy na mini sesję ślubą. Arek ze <a href="http://www.studiostyl.net/" target="_blank">Studio Styl</a> w górę jechał ze mną, ale wracał z młodymi, mówiąc, że tyle się dzieje, że musi to mieć na taśmie. Jestem pewny, że po oczepinach zabawa trwała do samego rana, albo nawet do poniedziałku, bo jak to w górach w planie były przecież oczepiny. Natalio i Kamilu, świetna impreza, oby takich więcej. Dzięki, że mogłem Wam towarzyszyć. Koniec pisania i początek oglądania. Serdecznie zapraszam.'
                    }
                    slug={"aga-michal-i-zuzia-zdjecia-slubne-zajazd-polesie-przybyslawice"}
                    title={"FOTOGRAF ŚLUBNY KRZESZOWICE, CZTERY PORY ROKU ALWERNIA - ALEKSANDRA i GRZEGORZ"}
                    tags={"fotograf na wesele kraków,zdjęcia ślubne w restauracji zajazd polesie"}
                    date={"30 czerwca 2018"}
                    menuNames={"ALEKSANDRA i GRZEGORZ"}
                    menuTitle={"FOTOGRAF ŚLUBNY KRZESZOWICE, CZTERY PORY ROKU ALWERNIA"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"ZDJĘCIA ŚLUBNE RESTAURACJA STEK SKAWINA"}
                    leadUrl={"/zdjecia-slubne-restauracja-stek-skawina"}
                    leadImage={"url(/static/zdjecia_slubne_restauracja_stek_skawina_start.jpg)"}
                />
            </div>
        );
    }
}
