import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/restauracja_karolinka_bystra_podhalanska.jpg"
            }
        ];

        let images = [

            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0001.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0003.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0004.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0005.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0006.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0007.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0009.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0011.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0012.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0013.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0017.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0016.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0021.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0015.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0019.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0022.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0023.jpg", height: 566 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0024.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0027.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0028.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0030.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0032.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0034.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0035.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0036.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0037.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0038.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0040.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0041.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0042.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0043.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0045.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0046.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0151.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0048.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0049.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0050.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0051.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0052.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0053.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0054.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0055.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0056.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0057.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0058.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0061.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0062.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0063.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0064.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0065.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0067.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0066.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0068.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0069.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0070.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0072.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0071.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0073.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0074.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0075.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0076.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0077.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0078.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0079.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0080.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0081.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0082.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0083.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0084.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0085.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0086.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0087.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0088.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0089.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0090.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0091.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0092.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0093.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0094.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0095.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0096.jpg", height: 567 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0097.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0098.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0099.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0100.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0101.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0102.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0103.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0104.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0105.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0106.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0107.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0108.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0109.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0110.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0111.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0112.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0113.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0114.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0115.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0116.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0118.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0117.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0119.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0120.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0121.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0122.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0123.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0124.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0125.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0127.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0128.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0129.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0130.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0131.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0132.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0133.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0143.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0134.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0135.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0136.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0137.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0138.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0139.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0140.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0141.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0142.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0150.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0144.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0145.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0146.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0147.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0148.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0149.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0126.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sala weselna Karolinka Bystra Podhalańska, pogodowi szczęściarze"}
                    headDescription={"Sala weselna Karolinka Bystra Podhalańska. Ślub w górach i przepiękne miejsce na ceremonię ślubną. Marlena i Maciek. Parkiet pękał w szwach. Zapraszam."}
                    headKeywords={"Sala weselna Karolinka Bystra Podhalańska, dobry fotograf na wesele"}
                    headUrl={"https://99foto.pl/sala-weselna-karolinka-bystra-podhalanska/"}
                    entryContentP1={
                        'Miesiąc maj w tym roku pogodowo nie wygląda najlepiej i myślę, że tylko rolnicy są zadowoleni z tego stanu rzeczy. Na szczęście deszczowe dni są momentami przerywane przebłyskami słońca, na które pewnie trzeba zasłużyć. Tak było w sobotę podczas ślubu Marleny i Maćka, który odbył się w Skomielnej Czarnej. Trafili w idealny dzień z wymarzoną pogodą bez najmniejszej kropelki deszczu, pięknymi białymi chmurami na błękitnym niebie i zielenią w szczytowej formie. Dzień rozpoczęliśmy w Salonie fryzjerskim Relaks w Tokarni. Upięcie włosów przebiegło sprawnie i chwilę później byliśmy już na makijażu wykonanym mistrzowską ręką wizażystki Ewy z <a href="https://www.facebook.com/madebymemakeup/" target="_blank" rel="nofollow">Make By Me Makeup</a>. Ponieważ Marlena zawodowo zajmuje się urodą więc malowaniu towarzyszyły branżowe dyskusje. Gdy makijaż był niemalże skończony dołączyli do nas Sylwester i Wojtek z <a href="https://www.facebook.com/Studio-Foto-Video-CLIP-348143895304294/" target="_blank" rel="nofollow">Clip Studio</a>, którzy przez cały dzień kolekcjonowali kadry do filmu ślubnego. Wojtek w nasze poczynania wnosił nutkę młodości, Sylwester i ja lata doświadczenia, w skrócie uzupełnialiśmy się całkiem dobrze. Wszyscy znali się nie od dziś, a to zawsze pomaga w zachowaniu dobrego klimatu w trakcie imprezy.'
                    }
                    entryContentP2={
                        'Marlena założyła suknię, z pomocą siostry Żanety ubrała biżuterie i buty, a gdy wszystko było gotowe udaliśmy się do Tokarni na przygotowania Maćka. Krawat, zegarek, garnitur i buty, klasyczny plan zrealizowaliśmy dość szybko. Maciek wsiadł do wymarzonego przez wielu samochodu i chwilę później skradł Marlenie buziaka. Po błogosławieństwie rodziców na Parę Młodych czekała niespodzianka w postaci bramy przygotowanej przez Strażaków. Był miś, konkurs na strącanie puszek sikawką, gorące życzenia i żarciki rzucane mimowolnie przez megafon. W skrócie brama na wypasie. Ceremonia zaślubin odbyła się w <a href="http://skomielnaczarna.kapucyni.pl/" target="_blank" rel="nofollow">Kościele Nawiedzenia NMP w Skomielnej Czarnej</a>. Para młoda złożyła przyrzeczenie małżeńskie, obsypana milionem monet z pompą opuściła Kościół, a po zdjęciu grupowym zaprosiła gości do sali weselnej "Karolinka" w Bystrej Podhalańskiej. Po obiedzie odbyły się życzenia, następnie pierwszy taniec i krojenie torta. Zespół Sami Swoi z Łętowni wykonał wszystkie szlagiery weselnych parkietów. Został też doceniony przez gości weselnych, którzy ogromny parkiet wypełniali szczelnie zupełnie go nie opuszczając. Bukiet fruwał w powietrzu kilkukrotnie i jak to w górach zabawa była na całego. Serdecznie zapraszam na reportaż ślubny z tego dnia i życzę miłego oglądania. Zaglądnijcie też do strefy klienta po więcej.'
                    }
                    slug={"sala-weselna-karolinka-bystra-podhalanska"}
                    title={"KAROLINKA BYSTRA PODHALAŃSKA, POGODOWI SZCZĘŚCIARZE - MARLENA i MACIEK"}
                    tags={"Sala weselna Karolinka Bystra Podhalańska, dobry fotograf na wesele"}
                    date={"29 maja 2019"}
                    menuNames={"MARLENA i MACIEK"}
                    menuTitle={"SALA WESELNA KAROLINKA BYSTRA PODHALAŃSKA"}
                    leadNames={"KAROLINA i KAMIL"}
                    leadTitle={"SALA BANKIETOWA SZAFRANTU, FOTOGRAFIA ŚLUBNA NIEPOŁOMICE"}
                    leadUrl={"/sala-bankietowa-szafrantu-fotografia-slubna-niepolomice"}
                    leadImage={"url(/static/sala-bankietowa-szafrantu.jpg)"}
                />
            </div>
        );
    }
}