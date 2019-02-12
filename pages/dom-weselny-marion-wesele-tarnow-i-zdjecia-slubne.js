import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/dom_weselny_marion_wesele_tarnow_i_zdjecia_slubne_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0006.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0008.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0013.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0017.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0022.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0026.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0032.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0036.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0038.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0041.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0042.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0044.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0046.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0048.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0049.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0050.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0051.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0052.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0054.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0055.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0056.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0057.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0061.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0062.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0063.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0064.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0065.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0066.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0067.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0068.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0069.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0070.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0071.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0072.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0105.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0073.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0074.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0075.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0076.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0077.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0078.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0080.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0079.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0081.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0082.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0083.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0084.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0086.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0087.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0088.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0089.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0090.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0091.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0092.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0093.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0094.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0095.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0103.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0096.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0097.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0098.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0099.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0100.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0101.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0181.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0102.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0106.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0108.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0107.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0109.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0110.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0111.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0113.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0112.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0114.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0115.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0116.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0117.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0118.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0119.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0120.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0121.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0122.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0123.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0124.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0125.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0126.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0127.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0128.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0129.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0130.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0131.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0132.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0133.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0134.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0135.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0136.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0137.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0138.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0139.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0140.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0141.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0142.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0143.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0144.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0145.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0146.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0148.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0150.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0152.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0151.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0153.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0154.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0155.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0156.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0157.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0158.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0159.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0160.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0161.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0162.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0164.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0165.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0166.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0167.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0169.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0168.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0170.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0171.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0172.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0173.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0175.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0174.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0176.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0177.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0178.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0179.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0163.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_marion_tarnow_0180.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Dom weselny Marion, zdjęcia ślubne"}
                    headDescription={"Emocje wypełniały mury kościoła, podczas życzeń BOCIAN krążył i krążył, a w domu weselnym Marion parkiet pękał w szwach. Zapraszam do oglądania."}
                    headKeywords={"sala weselna marion tarnów,fotograf na wesele tarnów,dom weselny tarnów"}
                    headUrl={"https://99foto.pl/dom-weselny-marion-wesele-tarnow-i-zdjecia-slubne/"}
                    entryContentP1={
                        'Pierwszy raz w mojej ponad pięcioletniej karierze fotografa ślubnego, podczas życzeń składanych młodej parze pod kościołem, centralnie ponad ludźmi latał BOCIAN. Jest to bankowa zapowiedź, że już wkrótce coś z tego będzie, tak przynajmniej mówili goście weselni. Przygotowania zaczęliśmy w <a href="https://djamrog.eu/" target="_blank" rel="nofollow">Salonie Fryzjerskim Jarmóg</a> w Tarnowie o godzinie ósmej rano. Jest to bardzo gustownie urządzony salon fryzjerski, który polecam każdej pannie młodej planującej swój ślub w Tarnowie lub okolicach. Kiedy fryzura była gotowa udaliśmy się na makijaż odwiedzając <a href="https://www.salongaja.pl/" target="_blank" rel="nofollow">Salon Kosmetyczny Gaja</a>. Dało się zauważyć, że Panie wizażystki, na brak pracy nie mogą narzekać, gdzyż kolejny klienci pojawiali się i znikali w tempie ekspresowym.'
                    }
                    entryContentP2={
                        'Michał miał okazję po raz pierwszy zobaczyć Anię pod jej blokiem. Jak prawdziwy dżentelmen przywitał ukochaną gorącym buziakiem. Ania przypięła butonierkę i wyruszyliśmy na błogosławieństwo. Odbyło się ono w rodzinnej atmosferze i z humorem. <a href="https://www.moscice.diecezja.tarnow.pl" target="_blank" rel="nofollow">Kościół NMP Królowej Polski</a>, w którym Para Młoda powiedziała sakramentalne TAK, zachwycił mnie swoją wielkością, jasnością i wspaniałym wnętrzem.  Znowu polecam to miejsce wszystkim przyszłym Pannom młodym, które marzą o pięknych zdjęciach ślubnych. Po ceremoni, zdjęciu grupowym i życzeniach, nad którymi czuwał wspomniany już bocian, udaliśmy się do <a href="https://www.facebook.com/domweselnymarion/" target="_blank" rel="nofollow">Domu Weselnego Marion w Tarnowie</a>. Tradycyjnie już, rodzice przywitali Parę Młodą chlebem i solą, kieliszki po szampanie poleciały z rozmachem i rozpoczął się uroczysty obiad. Atrakcji nie brakowało, pierwszy taniec, tort weselny, pociąg, tradycyjne oczepiny i podziękowania dla rodziców. Zabawa trwała do białego rana. Aniu i Michale, dziękuję za ten wspaniały dzień i serdecznie zapraszam na reportaż ślubny. Miłego oglądania, a po więcej zdjęć zapraszam do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"dom-weselny-marion-wesele-tarnow-i-zdjecia-slubne"}
                    title={"DOM WESELNY MARION - WESELE TARNÓW i ZDJĘCIA ŚLUBNE - ANIA i MICHAŁ"}
                    tags={"sala weselna marion tarnów,fotograf na wesele tarnów,dom weselny tarnów"}
                    date={"24 sierpnia 2017"}
                    menuNames={"ANIA i MICHAŁ"}
                    menuTitle={"DOM WESELNY MARION - WESELE TARNÓW i ZDJĘCIA ŚLUBNE"}
                    leadNames={"ANNA i KRZYSZTOF"}
                    leadTitle={"SALA WESELNA NEDAN PCIM - REPORTAŻ ŚLUBNY - ANNA i KRZYSZTOF"}
                    leadUrl={"/sala-weselna-nedan-pcim-reportaz-slubny"}
                    leadImage={"url(/static/sala_weselna_nedan_pcim_reportaz_slubny_start.jpg)"}
                />
            </div>
        );
    }
}
