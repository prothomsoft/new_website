import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/restauracja_tiffany_wola_filpowska.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0003.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0014.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0018.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0020.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0154.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0021.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0023.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0029.jpg", height: 419 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0026.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0028.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0030.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0031.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0032.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0033.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0034.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0036.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0038.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0040.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0041.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0046.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0049.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0048.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0050.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0051.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0052.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0053.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0054.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0055.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0056.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0057.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0152.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0061.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0062.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0063.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0064.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0065.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0066.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0068.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0067.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0069.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0070.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0071.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0073.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0074.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0075.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0076.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0077.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0078.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0079.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0080.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0081.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0082.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0083.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0084.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0085.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0086.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0087.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0088.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0089.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0090.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0091.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0092.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0094.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0093.jpg", height: 566 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0095.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0096.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0097.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0098.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0099.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0100.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0101.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0102.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0103.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0104.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0105.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0106.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0107.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0108.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0109.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0110.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0112.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0111.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0113.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0114.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0115.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0116.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0117.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0118.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0119.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0120.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0121.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0122.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0123.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0124.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0125.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0126.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0128.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0129.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0131.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0130.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0132.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0133.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0134.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0135.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0136.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0137.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0138.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0140.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0139.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0149.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0141.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0143.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0144.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0145.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0146.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0147.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0148.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0142.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0150.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/08/restauracja_tiffany_wola_filpowska_0151.jpg", height: 762 }
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
                    headUrl={"https://99foto.pl/tiffany-wola-filipowska-first-look-na-dachu-wiezowca/"}
                    entryContentP1={
                        'Ślub Marty i Marcina to wydarzenie od początku owiane aurą tajemniczości. Marta zaplanowała first look na jednym z najwyższych wieżowców w Krakowie, z genialnym widokiem na linię wytyczoną przebiegiem Zakopianki, wieżami Sanktuarium w Łagiewnikach, Zamkiem na Wawelu czy Klasztorem Kamedułów na Bielanach wyróżniającymi się na mapie tej panoramy. Oczywiście była to niespodzianka dla Marcina, który do końca nie mógł zrozumieć dlaczego w tak piękny i ważny dzień ma łazić po dachach. Domyślam się jednak, że w momencie pierwszego spotkania uśmiech Marty przysłonił mu cały świat i cały ten panoramiczny widok. Przygotowania rozpoczęły się o godzinie jedenastej blisko ronda Mogilskiego w Salonie Kosmetycznym, gdzie nad delikatnym, mającym na celu tylko delikatnie podkreślić niezwykłą urodę Marty pracowała Agnieszka. Świetnie urządzone miejsce z klimatem, który starałem się oddać na zdjęciach. Po wspomnianym już przywitaniu Pary Młodej i błogosławieństwie rodziców wszyscy pędząc obwodnicą Krakowa w mniej niż godzinkę udaliśmy się do <a href="https://marcinkrzeszowice.pl/" target="_blank" rel="nofollow">Kościóła św. Marcina z Tours w Krzeszowicach</a>. Tym razem temat z organistą był dogadany i drzwi na chór stały otworem. Pełne uśmiechów przywitanie gości, którzy z uwagi na temperaturę zjawili się pod kościołem kilka minut przed ceremonią. Ksiądz, który wygłosił świetne kazanie i przeprowadził ceremonię z humorem. Wreszcie moment najważniejszy i sakramentalne TAK.'
                    }
                    entryContentP2={
                        'Obserwowałem Martę przez cały ten długi dzień i mam wrażenie, że w odróżnieniu od większości kobiet, jest mało rzeczy, które potrafią wyprowadzić ją z równowagi. Trzymam kciuki, żeby tak pozostało. Po zdjęciu grupowym pod kościołem Para Młoda zaprosiła gości do <a href="https://restauracja-tiffany.business.site/" target="_blank" rel="nofollow">Restauracji Tiffany w Woli Filipowskiej</a>. Rzut kieliszkami i moc gorących życzeń przyjętych krok przed napisem LOVE. Zespół Muzyczny <a href="https://www.easyband.pl" target="_blank" rel="nofollow">Easy Band</a> z dwójką charyzmatycznych wokalistów grał na granicy rocka szerokim łukiem omijając szlagierowe przeboje disco polo. Był pokaz filmowy, tort i fotobudka <a href="https://www.foto4fun.com.pl/" target="_blank" rel="nofollow">Foto4Fun</a>. Każdą minutę tego ważnego dnia rejestrował Grzegorz z <a href="https://www.facebook.com/gemcofilms/" target="_blank" rel="nofollow">Gemco films</a>, którego cenię za profesjonalizm i Dominik, którego zapamiętam z uwagi na poczucie humoru. Super dzień i świetna impreza. Marto i Marcinie, dziękuję za zaufanie i widzimy się niedługo w górach. Zapraszam na zdjęcia, a po więcej do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"tiffany-wola-filipowska-first-look-na-dachu-wiezowca"}
                    title={"TIFFANY WOLA FILIPOWSKA, FIRST LOOK NA DACHU WIEŻOWCA - MARTA i MARCIN"}
                    tags={"restauracja tiffany wola filipowska, fotograf na ślub krzeszowice, first look na dachu wieżowca"}
                    date={"3 sierpnia 2018"}
                    menuNames={"MARTA i MARCIN"}
                    menuTitle={"TIFFANY WOLA FILIPOWSKA, FIRST LOOK NA DACHU WIEŻOWCA"}
                    leadNames={"NATALIA i KAMIL"}
                    leadTitle={"SALA WESELNA WILLA ORCHIDEA WAKSMUND - ŚLUB NA PODHALU"}
                    leadUrl={"/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach"}
                    leadImage={"url(/static/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach-start.jpg)"}
                />
            </div>
        );
    }
}
