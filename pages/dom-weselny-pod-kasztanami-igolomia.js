import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/dom_weselny_pod_kasztanami_igolomia_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0018.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0001.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0002.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0003.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0004.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0005.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0008.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0006.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0009.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0010.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0011.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0012.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0013.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0014.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0015.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0016.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0017.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0019.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0020.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0023.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0021.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0022.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0024.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0025.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0026.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0027.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0028.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0029.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0030.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0031.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0032.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0033.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0035.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0034.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0036.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0037.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0038.jpg", height: 806 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0039.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0040.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0042.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0041.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0043.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0044.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0045.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0046.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0047.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0048.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0049.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0050.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0051.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0052.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0053.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0054.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0055.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0056.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0057.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0058.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0059.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0060.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0061.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0079.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0062.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0063.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0064.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0065.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0066.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0067.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0068.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0069.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0070.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0072.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0073.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0071.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0076.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0074.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0075.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0078.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0077.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0080.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0081.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0082.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0083.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0084.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0085.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0087.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0086.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0088.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0089.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0090.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0091.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0092.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0093.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0094.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0095.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0096.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0097.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0098.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0099.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0100.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0101.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0102.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0103.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0104.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0105.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0106.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0107.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0108.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0109.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0110.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0111.jpg", height: 806 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0112.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0113.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0114.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0115.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0116.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0117.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0118.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0119.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0120.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0121.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0122.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0123.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0124.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0125.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0126.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0128.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0127.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0129.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0131.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0130.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0132.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0133.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0134.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0135.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0136.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0137.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0138.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0139.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0140.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0141.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0142.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0143.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0144.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0145.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0146.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0147.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0148.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0149.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0150.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0151.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0152.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0153.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0154.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0155.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0156.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0157.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0158.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0160.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0161.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0162.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0163.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0164.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0167.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0159.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0166.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/06/dom_weselny_pod_kasztanami_igolomia_0168.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Dom Weselny Pod Kasztanami Igołomnia"}
                    headDescription={"Ślub, który pod wieloma względami będzie jednym z moich ulubionych. Niesamowita energia, miejsce i ludzie w Domu Weselnym Pod Kasztanami. Zapraszam."}
                    headKeywords={"sala weselna kraków,dom weselny niepołomice,salon urody proszowice"}
                    headUrl={"http://99foto.pl/dom-weselny-pod-kasztanami-igolomia/"}
                    entryContentP1={
                        'Proszowice, Nowe Brzesko, bardzo blisko do jedynego rozsławionego w okolicach Krakowa pola pełnego lawendy w Klimontowie. Dokładnie o godzinie 11.00 w <a href="http://salonurodyglow.pl/" target="_blank">Salonie urody GLOW</a> rozpoczęliśmy przygotowania do najważniejszego dnia w życiu Karoliny i Dawida. Świetna atmosfera w salonie i profesjonalny makijaż. Chwilę później wybraliśmy się do Dawida, który wbił się w garnitur uzupełniając go gustownymi dodatkami. Wpieliśmy nowe tablice rejestracyjne do ślubnego Jagura. Karolina w towarzystwie drużek ubrała suknie ślubną, buty i biżuterię. Przywitanie, błogosławieństwo pełne emocji, brama pełna serdeczności i ciepłe przywitanie młodych przez księdza w zakrystii.'
                    }
                    entryContentP2={
                        'Piękna ceremonia zaślubin miała miejsce w <a href="http://nowebrzeskoparafia.pl" target="_blank">Kościele pw. Wszystkich Świętych w Nowym Brzesku</a>. Pogoda tego dnia pozwoliła nam na życzenia ślubne pod kościołem. Tysiące uśmiechów serdeczności spadły na Parę młodą. Nadszedł czas na przywitanie chlebem i solą przez rodziców, którzy czekali na Karolinę i Dawida w <a href="http://weselapodkasztanami.pl" target="_blank">Domu Weselnym Pod Kasztanami</a> w miejscowości Igołomia. Na sali weselnej gości przywitał <a href="https://www.facebook.com/Zesp%C3%B3%C5%82-Skowyrni-967403589940752/" target="_blank">Zespół muzyczny Skowyrni</a> z okolic Nowego Targu. Pierwszy taniec i pełny parkiet od początku. Góralskie zacięcie muzyków słyszalne w każdej nucie. Pełno atrakcji, które czekały na gości tego dnia, kolejki do fotobudki, litery LOVE, pyszny tort, pieczony świniak, pociąg i pełen repertuar zabaw oczepinowych. Podczas ślubu nie tylko filmował ale dotrzymywał mi towarzystwa <a href="http://camdesign.pl" target="_blank">Krzysiek z Camdesign &#8211; Profesjonalny film ślubny</a>, który rejestrował każdą sekundę i z pewnością zmontuje niezapomniany film ślubny. Bardzo dziękuję za ten wyjątkowy dzień, ciepłe przyjęcie i wspaniałą atmosferę. Miłego oglądania, a po więcej zdjęć zapraszam gości weselnych do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"dom-weselny-pod-kasztanami-igolomia"}
                    title={"DOM WESELNY POD KASZTANAMI IGOŁOMIA - KAROLINA i DAWID"}
                    tags={"sala weselna kraków,dom weselny niepołomice,salon urody proszowice"}
                    date={"23 czerwca 2017"}
                    menuNames={"KAROLINA i DAWID"}
                    menuTitle={"DOM WESELNY POD KASZTANAMI IGOŁOMIA"}
                    leadNames={"MAGDA i GRZEGORZ"}
                    leadTitle={"SALA BANKIETOWA I WESELNA KRZCZONÓW MKA - MORZE GWIAZD"}
                    leadUrl={"/sala-bankietowa-i-weselna-krzczonow-mka-morze-gwiazd"}
                    leadImage={"url(/static/sala_bankietowa_i_weselna_krzczonow_mka_morze_gwiazd_start.jpg)"}
                />
            </div>
        );
    }
}
