import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sala_bankietowa_triana_mogilany.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0006.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0004.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0007.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0008.jpg", height: 402 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0010.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0011.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0012.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0013.jpg", height: 402 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0020.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0018.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0021.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0022.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0023.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0027.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0030.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0032.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0036.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0038.jpg", height: 402 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0041.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0042.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0044.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0046.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0048.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0049.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0160.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0051.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0052.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0050.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0054.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0055.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0056.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0057.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0161.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0061.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0062.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0063.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0064.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0065.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0066.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0067.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0068.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0069.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0070.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0071.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0072.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0162.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0073.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0074.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0075.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0076.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0077.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0078.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0079.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0080.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0081.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0082.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0083.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0084.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0085.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0086.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0087.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0088.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0089.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0090.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0091.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0092.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0093.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0094.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0095.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0096.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0097.jpg", height: 566 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0098.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0099.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0100.jpg", height: 806 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0101.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0102.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0103.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0104.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0105.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0106.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0107.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0108.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0109.jpg", height: 806 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0110.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0111.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0112.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0113.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0114.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0115.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0116.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0117.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0118.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0119.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0120.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0121.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0122.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0123.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0124.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0125.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0127.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0126.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0128.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0129.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0131.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0130.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0132.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0133.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0134.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0135.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0136.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0137.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0138.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0139.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0140.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0141.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0142.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0143.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0144.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0145.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0146.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0149.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0150.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0148.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0151.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0147.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0152.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sala Bankietowa Triana Mogilany, Reportaż ślubny Podstolice"}
                    headDescription={"Sala Bankietowa Triana Mogilany, reportaż ślubny Pauliny i Pawła Podstolice. Nowoczesna i jasna sala weselna w okolicach Krakowa. Zapraszam do oglądania."}
                    headKeywords={"Sala Bankietowa Triana Mogilany, Reportaż ślubny Podstolice, sala weselna okolice Krakowa"}
                    headUrl={"https://99foto.pl/sala-bankietowa-triana-mogilany-reportaz-slubny-podstolice/"}
                    entryContentP1={
                        'Końcówka sierpnia i początek września minęły błyskawicznie i na moim blogu zamieściłem relacje z kilku sesji plenerowych. Wrześniowa pogoda i rowerki Marty i Michała odstawione do garażowej rezerwy pozwalają wrócić do cotygodniowych wpisów ślubnych. Nowe otwarcie rozpocznę od pokazania świetnie zorganizowanego ślubu Pauliny i Pawła, który odbył się w ubiegły piątek w przepięknej sali weselnej położonej w niedalekiej odległości od Krakowa - <a href="https://wesela.jurek-catering.pl/" target="_blank">Sali bankietowej Triana</a> w Mogilanach. Dzień rozpoczęliśmy od makijażu Pauliny, który wykonała Michalina Mikrut z <a href="https://www.facebook.com/allureofmakeup/ target="_blank">Allure of Make\'up</a>. Następnie, na krótką chwilę odwiedziłem dom rodzinny Pana Młodego. Poznałem przemiłych rodziców Pawła i przy okazji zrobiłem kilka zdjęć z przygotowań (krawacik, rowerowe spinki i takie tam). Paulina ubierała się korzystając z pomocy swojej Mamy oraz wielu innych pomocników. Dzięki temu przygotowania odbyły się sprawnie i nadszedł czas pełnego emocji błogosławieństwa. Naturalna kolej rzeczy doprowadziła nas do ceremonii zaślubin, która odbyła się w zabytkowym, drewnianym powstałym 1870 roku <a href="https://www.podstolice.diecezja.krakow.pl/" target="_blank">Kościele  p.w. Ducha Świętego w Podstolicach</a>.'
                    }
                    entryContentP2={
                        'Wirtuozeria skrzypiec i umiarkowana powaga księdza proboszcza nadały tym trzem kwadransom, niezwykły wymiar i przepiękne tło dla momentu najważniejszego, czyli sakramentalnego TAK. Przeprawa przez Zakopiankę, która w godzinach szczytu komunikacyjnego przypominała komputerową grę Frogger, była dodatkową atrakcją na trasie do wspomnianego już wcześniej miejsca imprezy. Gdy wszyscy goście weselni dotarli na miejsce <a href="https://wesela.jurek-catering.pl/" target="_blank">Sala bankietowa Triana</a> uznała imprezę za otwartą, rodzice tradycyjnie przywitali Parę Młodą chlebem i solą, poleciały kieliszki i po gorących życzeniach zaserwowano przepyszny obiad. Zespół Monaver z Jarosławia, który zachwycił mnie mistrzowskim wykonaniem utworu Pawła Domagały - "Weź nie pytaj" - grał świetnie i mocno pracował na kolejnych pochądzących z referencji klientów. Każdą minutę profesjonalnie filmował Łukasz Korzeniowski z <a href="https://www.facebook.com/filmartelukaszkorzeniowski/" target="_blank">Film Arte</a>. Zawsze miło spotkać filmowca z krwi i kości na fotograficznej ślubnej ścieżce. Goście bawili się świetnie, korzystając z foto budki i Sławomira unplugged. Długo mógłbym opisywać wszystko to co działo się na parkiecie tego wieczora. Paulino i Pawle, dziękuję za zaufanie i super dzień w Waszym towarzystwie. Zapraszam na zdjęcia blogowe i po więcej do strefy klienta, po wpisaniu hasła z mojej wizytówki. Miłego oglądania.'
                    }
                    slug={"sala-bankietowa-triana-mogilany-reportaz-slubny-podstolice"}
                    title={"SALA WESELNA TRIANA MOGILANY, REPORTAŻ ŚLUBNY PODSTOLICE - PAULINA i PAWEŁ"}
                    tags={"Sala Bankietowa Triana Mogilany, Reportaż ślubny Podstolice, sala weselna okolice Krakowa"}
                    date={"21 września 2018"}
                    menuNames={"PAULINA i PAWEŁ"}
                    menuTitle={"SALA WESELNA TRIANA MOGILANY, REPORTAŻ ŚLUBNY PODSTOLICE"}
                    leadNames={"KRISTINA i ALEKSANDR"}
                    leadTitle={"SESJA ŚLUBNA W PIESKOWEJ SKALE i ZAMEK KORZKIEW"}
                    leadUrl={"/sesja-slubna-w-pieskowej-skale-i-zamek-korzkiew"}
                    leadImage={"url(/static/plener_slubny_zamek_pieskowa_skala.jpg)"}
                />
            </div>
        );
    }
}
