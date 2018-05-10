import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/przystan-w-kabanosie-spytkowice-zdjecia-slubne-jordanow-start.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0010.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0001.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0002.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0004.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0003.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0006.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0005.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0009.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0008.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0007.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0011.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0012.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0013.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0014.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0015.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0016.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0017.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0018.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0028.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0019.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0025.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0020.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0021.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0022.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0023.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0024.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0026.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0027.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0029.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0030.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0032.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0031.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0033.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0034.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0035.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0036.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0037.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0038.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0039.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0040.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0041.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0042.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0043.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0044.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0047.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0046.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0045.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0048.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0049.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0050.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0051.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0056.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0052.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0053.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0054.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0055.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0057.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0058.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0061.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0059.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0062.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0063.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0064.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0065.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0066.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0060.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0067.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0070.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0069.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0071.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0068.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0072.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0073.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0074.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0075.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0076.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0077.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0078.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0079.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0080.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0081.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0082.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0083.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0084.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0085.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0086.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0087.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0088.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0089.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0090.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0091.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0092.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0093.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0094.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0095.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0096.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0097.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0098.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0099.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0100.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0102.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0103.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0104.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0105.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0106.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0107.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0108.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0109.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0110.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0113.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0115.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0116.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0117.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0118.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0119.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0120.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0129.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0123.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0124.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0125.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0126.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0127.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0122.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0128.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0121.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0130.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0131.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0132.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0101.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0133.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0134.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0135.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0136.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0137.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0138.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0139.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0111.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0140.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0141.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0142.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0143.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0144.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0145.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0114.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0146.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0147.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0112.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0148.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0149.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0150.jpg", height: 383 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Przystań w Kabanosie Spytkowice, zdjęcia ślubne Jordanów"}
                    headDescription={
                        "Przystań w Kabanosie Spytkowice i góralski klimat. Energia z gór, rodzinna atmosfera i zakochani w sobie bardzo Krystyna i Piotr. Serdecznie zapraszam na kilka zdjęć z tego dnia. Miłego oglądania."
                    }
                    headKeywords={"Przystań w Kabanosie Spytkowice, zdjęcia ślubne Jordanów, Dom Weselny Spytkowice"}
                    headUrl={"http://99foto.pl/przystan-w-kabanosie-spytkowice-zdjecia-slubne-jordanow/"}
                    entryContentP1={
                        'Jeden z październikowych weekendów w ubiegłym roku miło spędziłem na fotografowaniu ślubu Iwony i Marcina w Naprawie. Byłoby to mało istotne w kontekście tej opowieści gdyby nie fakt, że Piotr, który z pewnością w ubiegły weekend odmienił swoje życie, jest bratem Marcina. Wybranką Piotra została Krystyna, którą również miałem przyjemność poznać podczas tamtej pamiętnej imprezy. Dlatego od razu napisałem, że tym razem było nie tylko po góralsku też bardzo rodzinnie. Ale jak zwykle zacznijmy od początku. Przygotowania odbyły się w dwóch miejscach. Pierwsze z nich mocno związane z postacią Marylin Monroe to <a href="https://www.facebook.com/pg/salonpieknosciBC/about/" target="blank">Salon Beauty Center</a> w Nowym Targu, gdzie powstała fryzura. Drugie natomiast to gwiazdorski <a href="https://www.facebook.com/glossy.marzena.balara/" target="_blank">Salon Urody Glossy</a>, gdzie urodę Krystyny podkreślała Marzena. Właściwe przygotowania odbyły się w domu rodzinnym Krystyny w Skawie. Dziewczyny pomogły ubrać suknię, brat otworzył winko i tak w oka mgnieniu minęła godzinka, po której udałem się do Naprawy do Piotrka. Piotrek nic a nic się przez te kilka miesięcy nie zmienił i jak był duszą towarzystwa na ślubie Marcina, tak zostało. Jego wrodzony włoski temperament skierował przygotowania na właściwe tory. Przywitanie Pana młodego, błogosławieństwo i brama urządzona przez śmiałe dzieciaki wypełniły nam czas oczekiwania na sakramentalne TAK.'
                    }
                    entryContentP2={
                        'Tym razem zostało ono wypowiedziane w <a href="http://skawa.sdb.org.pl/" target="_blank">Kościele NMP Wspomożenia Wiernych</a> w Skawie. Kościół bardzo ciekawy, pozwalający zrobić zdjęcia z perspektywy drona bez drona. Po zdjęciu grupowym i życzeniach Para Młoda zaprosiła gości do Domu Weselnego <a href="http://przystanwkabanosie.pl/pl/page/6/Restauracja_Spytkowice/" taget="_blank">Przystań w Kabanosie</a> w Spytkowicach. Parkiet został otworzony brawurowym pierwszym tańcem, pyszne słodkości z mini karety zniknęły momentalnie i <a href="http://edenzespol.pl" target="_blank">Zespół muzyczny Eden</a> przejął pałeczkę dbając o to, by goście nie spędzali za dużo czasu przy stolikach. Atrakcje tego wieczoru można wyliczać długo, był tort podany w chmurach ciekłego azotu, pieczony świniak, fotobudka, pociąg, chusteczka, kaczuszki i pełny zestaw zabaw oczepinowych. Każdą minutę imprezy skrzętnie filmował Mateusz z <a href="https://www.planujemywesele.pl/2048-f-h-u-viva" target="_blank">Viva Film Fimowanie</a>. Było naprawdę re-we-la-cyj-nie. Zapraszam na reportaż ślubny z tego dnia, a po więcej do strefy klienta (przyda się hasło z mojej wizytówki). Miłego oglądania.'
                    }
                    slug={"przystan-w-kabanosie-spytkowice-zdjecia-slubne-jordanow"}
                    title={"PRZYSTAŃ W KABANOSIE SPYTKOWICE, ZDJĘCIA ŚLUBNE JORDANÓW - KRYSTYNA i PIOTR"}
                    tags={"Przystań w Kabanosie Spytkowice, zdjęcia ślubne Jordanów, Dom Weselny Spytkowice"}
                    date={"5 maja 2018"}
                    menuNames={"KRYSTYNA i PIOTR"}
                    menuTitle={"PRZYSTAŃ W KABANOSIE SPYTKOWICE, ZDJĘCIA ŚLUBNE JORDANÓW"}
                    leadNames={"MAŁGORZATA I RAFAŁ"}
                    leadTitle={"PLENER ŚLUBNY SŁOWACJA, ŁOMNICKI STAW"}
                    leadUrl={"/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso"}
                    leadImage={"url(/static/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.jpg)"}
                />
            </div>
        );
    }
}
