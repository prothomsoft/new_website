import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/dom_weselny_euforia_myslenice_1.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0001.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0002.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0003.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0004.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0005.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0006.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0007.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0010.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0008.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0009.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0011.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0012.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0013.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0014.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0015.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0016.jpg", height: 566 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0017.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0018.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0019.jpg", height: 402 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0020.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0021.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0022.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0023.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0024.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0025.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0026.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0027.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0028.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0029.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0030.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0031.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0032.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0033.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0034.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0035.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0036.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0037.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0038.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0039.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0040.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0041.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0042.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0043.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0044.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0045.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0046.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0047.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0048.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0049.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0050.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0051.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0052.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0053.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0054.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0055.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0056.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0057.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0058.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0059.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0060.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0061.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0062.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0063.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0064.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0065.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0066.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0067.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0068.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0069.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0070.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0071.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0072.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0073.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0074.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0075.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0076.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0077.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0078.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0079.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0080.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0081.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0082.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0083.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0084.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0085.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0086.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0087.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0088.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0089.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0090.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0091.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0092.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0097.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0093.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0094.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0095.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0096.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0098.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0099.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0100.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0101.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0102.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0104.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0103.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0106.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0105.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0107.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0109.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0108.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0110.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0111.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0112.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0113.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0114.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0115.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0116.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0117.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0118.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0119.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0120.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0121.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0122.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0123.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0124.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0125.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0126.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0128.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0127.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0129.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0130.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0131.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0132.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0133.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0134.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0135.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0136.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0137.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0138.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0139.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0140.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0141.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0142.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0143.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0144.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0145.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0146.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0147.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0158.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0148.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0149.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0150.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0151.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0152.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0153.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0154.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0155.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0156.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0157.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/10/dom_weselny_euforia_myslenice_0159.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Dom Weselny Euforia Myślenice i słonecznie LOVE"}
                    headDescription={"Dom weselny Euforia Myślenice i słoneczne LOVE. Dużo słońca w jedną z wrześniowych sobót. Reportaż ślubny Izabeli i Arkadiusza. Zapraszam do oglądania."}
                    headKeywords={"dom weselny euforia myślenice, sala na wesele blisko Krakowa, fotograf ślubny Myślenice"}
                    headUrl={"http://99foto.pl/dom-weselny-euforia-myslenice-i-sloneczne-love/"}
                    entryContentP1={
                        'Spory kawałek drogi od Krakowa i mała miejscowość Skrzydlna, a w niej dom z pięknym widokiem na otaczające go pokryte lasem górki. Arkadiusz i jego siostra Natalia czekali na mnie i kilka minut przed godziną dziewiątą rano wystartowaliśmy z przygotowaniami Pana Młodego. Brak pogodowej nudy czyli na zmianę trochę deszczu, trochę słońca i już nie tak ciepło bo tylko osiem stopni. Podczas gdy ja odliczałem ilość kilometrów do Jordanowa, jadąc tam przez Mszanę Dolną, Rabkę Zdrój na fotelu genialnej wizażystki <a href="https://www.facebook.com/patrycjaantoszmakeup/" target="_blank">Patrycji Antosz</a> siedziała już Izabela, przygotowywując się do najważniejszego dnia w swoim życiu. Studio wizażu Patrycji odwiedzam często przy okazji wykonywania zdjęć na ślubach w Jordanowie i okolicach. Zawsze czeka mnie tam jakaś pozytywna zmiana, a każdy kolejny makijaż jest arcydziełem. Gdy uroda Izy została już podkreślona wybraliśmy się do jej domu rodzinnego w miejscowości Toporzysko. Salon dopracowany w najmniejszym szczególe posłużył genialnie jako sceneria dla przygotowań i błogosławieństwa, którego udzieli rodzice.'
                    }
                    entryContentP2={
                        'Trafić do <a href="http://www.parafiatoporzysko.pl/" target="_blank">Kościoła p.w. Najświętszej Najświętszej Maryi Panny Matki Kościoła w Toporzysku</a> było bardzo łatwo bo wystarczyło zejść z górki. Babcia Izy udzieliła błogosławieństwa jako pierwsza pozdrawiając młodych z okna domu. Dumny Tato odprowadził Izabelę do ołtarza i ksiądz proboszcz rozpoczął ceremonię zaślubim. W kościele tym uwagę przykłuwały witraże, a kilka promieni słonecznych, które oświetliły wnętrze Kośćioła pod koniec Mszy Świętej wprowadziły wszystkich nas w dobry humor. Ścigając się z kapelą góralską po Zakopiance i penetrując objazdy w okolicach Skomielnej Białej dotarliśmy do miejsca zabawy weselnej. <a href="http://www.salaeuforia.pl/" target="_blank">Dom Weselny Euforia</a> w Myślenicach czekał na przybyłych gości w pełnej gotowości. Luksusowa sala weselna, ze zintegrowanym oświetleniem, nagłośnieniem i stołami zastawionymi wyszukanymi smakołykami, a w ten specjalny dzień ubrana w piękne kwiaty, wywołała zachwyt na twarzach kolejno wchodzących na nią gości weselnych. Rozpoczęły się pełne uścisków i uśmiechów życzenia. Duży parkiet pomieścił wszystkich podczas pierwszego tańca. Później był tort i wiele atrakcji przygotowanych dla gości. Góralskie klimaty wprowadzał <a href="http://sykowni.pl/" target="_blank">Zespół Sykowni</a>. Każdą minutę tych wydarzeń nagrywał trzy osobowy zespół film mejkerów z <a href="https://www.facebook.com/filmykoliber/" target="_blank">Filmy Koliber</a>. Impreza trwała do białego rana, a parkiet momentami rozgrzewał się do czerwoności. Dziękuję za zaufanie i zapraszam na kilka zdjęć z tego dnia. Miłego oglądania.'
                    }
                    slug={"dom-weselny-euforia-myslenice-i-sloneczne-love"}
                    title={"DOM WESELNY EUFORIA MYŚLENICE i SŁONECZNE LOVE - IZABELA i ARKADIUSZ"}
                    tags={"dom weselny euforia myślenice, sala na wesele blisko Krakowa, fotograf ślubny Myślenice"}
                    date={"3 października 2018"}
                    menuNames={"IZABELA i ARKADIUSZ"}
                    menuTitle={"DOM WESELNY EUFORIA MYŚLENICE i SŁONECZNE LOVE"}
                    leadNames={"PAULINA i PAWEŁ"}
                    leadTitle={"SALA WESELNA TRIANA MOGILANY, REPORTAŻ ŚLUBNY MYŚLENICE"}
                    leadUrl={"/sala-bankietowa-triana-mogilany-reportaz-slubny-podstolice"}
                    leadImage={"url(/static/sala_bankietowa_triana_mogilany.jpg)"}
                />
            </div>
        );
    }
}
