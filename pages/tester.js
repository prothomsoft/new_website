import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/arka_pana_nowa_huta.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0001.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0007.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0002.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0008.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0004.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0006.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0005.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0003.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0010.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0009.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0011.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0016.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0012.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0019.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0015.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0014.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0017.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0018.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0013.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0020.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0021.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0022.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0023.jpg", height: 526 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0024.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0025.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0026.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0043.jpg", height: 566 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0027.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0028.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0029.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0030.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0031.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0032.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0033.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0034.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0035.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0036.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0037.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0038.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0039.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0040.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0041.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0042.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0044.jpg", height: 567 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0046.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0045.jpg", height: 526 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0047.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0048.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0050.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0052.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0051.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0053.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0055.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0054.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0056.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0057.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0064.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0059.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0061.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0062.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0063.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0065.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0066.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0067.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0068.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0069.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0058.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0070.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0071.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0072.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0060.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0073.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0074.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0075.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0076.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0077.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0078.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0079.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0080.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0082.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0081.jpg", height: 761 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0049.jpg", height: 566 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0083.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0084.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0085.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0086.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0087.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0088.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0089.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0090.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0091.jpg", height: 402 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0092.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0093.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0094.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0095.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0096.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0097.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0098.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0099.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0100.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0101.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0102.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0103.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0104.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0105.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0106.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0107.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0108.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0109.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0110.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0111.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0112.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0113.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0114.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0149.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0115.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0116.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0151.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0117.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0118.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0119.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0120.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0144.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0121.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0150.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0122.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0123.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0124.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0125.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0126.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0127.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0128.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0129.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0130.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0131.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0132.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0133.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0134.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0135.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0136.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0137.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0138.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0139.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0140.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0141.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0142.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0143.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0145.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0146.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0147.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0148.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0152.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Helada sala weselna, Fotograf ślubny Oświęcim"}
                    headDescription={"Helada sala weselna Oświęcim. Dużo emocji i świetnie zorganizowany ślub Magdaleny i Damiana. Zapraszam do oglądania."}
                    headKeywords={"Helada sala weselna, fotograf ślubny Oświęcim"}
                    headUrl={"http://99foto.pl/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa/"}
                    entryContentP1={"123"}
                    entryContentP2={"123"}
                    slug={"ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa"}
                    title={"SALA WESELNA HELADA, FOTOGRAF ŚLUBNY OŚWIĘCIM - MAGDALENA i DAMIAN"}
                    tags={"Helada sala weselna, Fotograf ślubny Oświęcim"}
                    date={"30 września 2018"}
                    menuNames={"MAGDALENA i DAMIAN"}
                    menuTitle={"SALA WESELNA HELADA, FOTOGRAF ŚLUBNY OŚWIĘCIM"}
                    leadNames={"MARTA i MARCIN"}
                    leadTitle={"WESELE POD KRAKOWEM, FIRST LOOK NA DACHU WIEŻOWCA"}
                    leadUrl={"/tiffany-wola-filipowska-first-look-na-dachu-wiezowca"}
                    leadImage={"url(/static/restauracja_tiffany_wola_filpowska.jpg)"}
                />
            </div>
        );
    }
}
