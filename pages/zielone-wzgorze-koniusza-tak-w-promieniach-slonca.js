import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/zielone_wzgorze_koniusza.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0007.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0004.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0005.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0011.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0012.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0020.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0023.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0043.jpg", height: 566 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0027.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0029.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0032.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0035.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0036.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0038.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0040.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0041.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0042.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0044.jpg", height: 567 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0046.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0045.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0047.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0048.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0050.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0052.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0051.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0055.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0054.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0056.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0057.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0064.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0059.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0061.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0062.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0063.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0065.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0066.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0067.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0068.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0069.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0070.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0071.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0072.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0073.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0074.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0075.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0076.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0077.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0078.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0079.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0080.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0082.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0081.jpg", height: 761 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0049.jpg", height: 566 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0083.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0084.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0085.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0086.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0087.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0088.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0089.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0090.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0091.jpg", height: 402 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0092.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0093.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0094.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0095.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0096.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0097.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0098.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0099.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0100.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0101.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0102.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0103.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0104.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0105.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0106.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0107.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0108.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0109.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0110.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0111.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0112.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0113.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0114.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0149.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0115.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0116.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0151.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0117.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0118.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0119.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0120.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0144.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0121.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0150.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0122.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0123.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0124.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0125.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0126.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0127.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0128.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0129.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0130.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0131.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0132.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0133.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0134.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0135.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0136.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0137.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0138.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0139.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0140.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0141.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0142.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0143.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0145.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0146.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0147.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0148.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0152.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Zielone Wzgórze Koniusza, TAK w promieniach słońca"}
                    headDescription={"Zielone Wzgórze Koniusza, fotograf ślubny Proszowice. TAK w promieniach słońca, garbus i dużo kwiatów na ślubie Karoliny i Mateusza. Zapraszam do oglądania."}
                    headKeywords={"Zielone Wzgórze Koniusza, fotograf ślubny Proszowice, garbus do ślubu"}
                    headUrl={"https://99foto.pl/zielone-wzgorze-koniusza-tak-w-promieniach-slonca/"}
                    entryContentP1={
                        'We wrześniu 2016 roku, czyli dwa lata temu na przygotowaniach do <a href="https://99foto.pl/natalia-marcin-i-maja-reportaz-slubny-gosciniec-branicki/" target="_blank" rel="nofollow">ślubu Natalii i Marcina</a>, który można oglądnąć na moim blogu, poznałem Karolinę. Nie jestem do końca pewien czy dobrze zaobserwowałem, ale właśnie wtedy pod Kościołem na Wzgórzach Krzesławickich Karolina przedstawiała znajomym swojego nowego chłopaka Mateusza. No iskrzyło między nimi i po dwóch latach spotkaliśmy się ponownie po to by postawić kropkę nad i. Dzień rozpoczęliśmy od przygotowań Karoliny w <a href="https://www.facebook.com/pages/category/Beauty-Salon/Odpicuj-Si%C4%99-322995571499190/" target="_blank" rel="nofollow">Studio Odpicuj się</a>. Profesjonalny makijaż wykonała <a href="https://aleksandra-szczepanek.com.pl/" target="_blank" rel="nofollow">Aleksandra Szczepanek</a>. Następnie nie zważając na utrudnienia w ruchu związane z odbywającym się w Krakowie maratonem, przebiliśmy się do Nowej Huty, dokładniej na Osiedle Kalinowe w celu uwiecznienia przygotowań Mateusza. Piszę w liczbie mnogiej ponieważ od samego rana biegaliśmy fotografując i filmując z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">Krzyśkiem z CAMDESIGN</a>, którego bardzo polecam wszystkim przyszłym nowożeńcom. Było tak jak lubię, działo się dużo i można było darować sobie ustawki skupiając się na fajnych momentach. Przygotowania u Karoliny przebiegły w rodzinnej atmosferze. Dom wypełniały śmiechy bawiących się dzieciaków i nutka napięcia budowanego zbliżającym się przybyciem Mateusza.'
                    }
                    entryContentP2={
                        'First look, wpinanie butonierek, błogosławieństwo rodziców i ubrany w przepiękne kwiaty Garbus odtransportował Parę Młodą do <a href="https://parafia.kalinowe.pl/" target="_blank" rel="nofollow">Kościóła św. Józefa Oblubieńca Najświętszej Maryi Panny w Krakowie</a>. Trochę już tych ślubów mam na swoim koncie, ale w takiej ceremonii miałem okazję uczestniczyć po raz pierwszy. Ksiądz był gospodarzem przez duże gie. Już na początku poprzesadzał gości do przednich ławek, poprosił aparaciarzy by oszczędzali nogi podczas kazania, przez blisko pół godziny próbował bezskutecznie zrozumieć naturę kobiety, by na sam koniec zaprosić wszystkich gości do przodu by napewno nie przegapili chwili, w której obrączki trafią na swoje miejsce. No i co, były łzy, pocałunki, pełno emocji. Po wyjściu z kościoła przywitała nas polska złota jesień. Wykorzystując te nieziemskie warunki zrobiliśmy zdjęcie grupowe i ruszyliśmy w stronę Proszowic do <a href="https://www.salazielonewzgorze.pl/" target="_blank" rel="nofollow">Sali Weselnej Zielone Wzgórze w miejscowości Koniusza</a>. Na parkiecie gości przywitał Artur z <a href="https://artmuz.krakow.pl/" target="_blank" rel="nofollow">Zespółu Muzycznego ART MUZ</a>. Para Młoda zatańczyła pierwszy taniec, pokroiła torta i zaprosiła gości weselnych do wspólnej zabawy na parkiecie. Artur kręcił zabawę na poziomie jako frontment niemalże zwisając ze sceny. Pewnie gdyby szukał pracy na etacie to stacja telewizyjna TVN przygarnęłaby go jego talent już po pierwszym interview. Była też fotobudka, litery LOVE i dużo pysznych rzeczy na ząb. Dzięki, że mogłem sfotografować Wasz ślub. Było tak jak się spodziewałem emocjonalnie i energetycznie. Zapraszam na wybrane zdjęcia, a po więcej do strefy klienta.'
                    }
                    slug={"zielone-wzgorze-koniusza-tak-w-promieniach-slonca"}
                    title={"ZIELONE WZGÓRZE KONIUSZA, TAK W PROMIENIACH SŁOŃCA - KAROLINA i MATEUSZ"}
                    tags={"Zielone Wzgórze Koniusza, fotograf ślubny Proszowice, garbus do ślubu"}
                    date={"23 października 2018"}
                    menuNames={"KAROLINA i MATEUSZ"}
                    menuTitle={"ZIELONE WZGÓRZE KONIUSZA, TAK W PROMIENIACH SŁOŃCA"}
                    leadNames={"IZABELA i ARKADIUSZ"}
                    leadTitle={"SESJA ŚLUBNA JESIENIĄ - PAŁAC GOETZÓW OKOCIMSKICH"}
                    leadUrl={"/sesja-slubna-jesienia-palac-goetzow-okocimskich"}
                    leadImage={"url(/static/sesja_slubna_jesienia.jpg)"}
                />
            </div>
        );
    }
}
