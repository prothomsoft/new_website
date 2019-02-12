import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice-start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0004.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0007.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0008.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0010.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0013.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0016.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0020.jpg", height: 566 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0019.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0023.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0026.jpg", height: 566 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0028.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0030.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0032.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0033.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0034.jpg", height: 766 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0036.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0038.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0039.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0041.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0042.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0046.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0047.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0048.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0049.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0050.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0051.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0052.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0053.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0054.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0055.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0056.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0057.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0059.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0061.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0062.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0063.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0064.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_slubny_kalwaria_zebrzydowska_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0066.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0067.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0068.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0069.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0070.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0080.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0071.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0074.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0072.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0075.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0077.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0085.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0078.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0079.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0081.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0083.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0084.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0082.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0087.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0086.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0088.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0089.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0091.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0090.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0092.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0093.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0094.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0095.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0096.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0097.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0098.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0099.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0100.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0101.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0102.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0103.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0104.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0105.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0106.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0107.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0108.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0110.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0111.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0112.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0113.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0114.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0115.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0116.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0117.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0118.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0119.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0120.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0121.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0122.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0123.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0124.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0125.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0126.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0127.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0128.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0129.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0130.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0131.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0132.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0133.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0134.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0135.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0136.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0137.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0138.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0139.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0140.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0141.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0142.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0109.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0143.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0144.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0145.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0146.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0147.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0148.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0149.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0150.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0151.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0153.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0152.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0154.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0156.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0155.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0157.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0158.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0159.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0160.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0161.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0168.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0162.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0163.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0165.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0164.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0166.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/06/fotograf_kalwaria_zebrzydowska_0167.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Fotograf ślubny Kalwaria Zebrzydowska, Arkadia Wadowice"}
                    headDescription={
                        "Czy widzieliście kiedyś ponad sto wypełnionych helem, świecących ledowych serduchowych baloników wystrzelonych w kosmos kilka minut po północy? Jeżeli nie to zapraszam do wkliknięcia w reportaż ze ślubu Magdy i Piotrka. Miłego oglądania."
                    }
                    headKeywords={"Fotograf ślubny Kalwaria Zebrzydowska, Arkadia Wadowice"}
                    headUrl={"https://99foto.pl/fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice/"}
                    entryContentP1={
                        'Słoneczny dzień, mnóstwo zieleni i powietrze o jakim mieszkańcy Krakowa mogą tyko pomarzyć. Drugi raz w tym sezonie ślubnym odwiedziłem Lanckoronę. Tym razem w pierwszej kolejności udałem się na odnaleziony poprzednim razem punkt widokowy po zdjęcie kontekstowe, a następnie udałem się prosto na przygotowania do Sylwestra. Ubranie ślubnego garnituru, spinek i muchy trwało kilka chwil podczas których asystował Adrian. Wyszliśmy jeszcze do ogrodu ogarnąć portret Pana Młodego i chwilę później byłem w drodze do Kalwarii Zebrzydowskiej gdzie swoje przygotowania rozpoczęła już Dajana. Wykonanie perfekcyjnego makijażu było dla niej zadaniem łatwym, ponieważ na co dzień profesjonalnie zajmuję się wizażem, działając pod marką <a href="https://www.facebook.com/dajanasajdakmakeup/" target="_blank" rel="nofollow">Dajana Sajdak Make Up</a>. W ubieraniu sukni ślubnej i biżuterii pomagała mama Dajany. Dużo pozytywnej energii spłynęło od Krzyśka i Tomka z <a href="https://www.tokksa.pl/" target="_blank" rel="nofollow">TOKKSA - Insired by your life</a>, którzy dokumentowali przebieg przygotowań, ceremoni i zabawy weselnej. W końcu czas oczekiwania dobiegł końca i przed drzwiami zjawił się Sylwester. Gorący buziak na powitanie, pełne emocji błogosławieństwo i wspólnie udaliśmy się do <a href="https://www.kalwaria.diecezja.krakow.pl/" target="_blank" rel="nofollow">Kościoła pw. św. Józefa</a> w Kalwarii Zebrzydowskiej. Oczekując na przyjazd Pary Młodej miałem przyjemność spotkać Anię i Michała, których ślub fotografowałem w ubiegłym roku. Bocian, który krążył podczas ich ślubu w trakcie składania życzeń adresu nie pomylił i do pięćset plus został im już nie dwa, a tylko jeden krok.'
                    }
                    entryContentP2={
                        'Fotografowanie Dajany i Sylwestra podczas ceremoni zaślubin były czystą przyjemnością. Spokój i koncentracja, błysk szczęścia w oku i niezwykła radość tuż po wypowiedzianym sakramentalnym TAK. Kolejne minuty tego pełnego wrażeń dnia spędziliśmy w Domu Weselnym <a href="https://www.arkadia-wadowice.pl/glowna.html" target="_blank" rel="nofollow">Arkadia Wadowice</a>. Rodzice przywitali Parę Młodą, a po życzeniach pierwszy taniec otworzył parkiet. <a href="https://www.facebook.com/TangoLuz" target="_blank" rel="nofollow">Zespół Tango Luz z Chrzanowa</a>, który nie pozwalał gościom posiedzieć na miejscu, serwował perełki repertuaru weselnego, momentami sięgając po numery gwiazd polskiego rocka. Oczywiście nie zabrakło atrakcji, takich jak tort weselny, podziękowania dla rodziców, podczas których polały się łzy, pociąg i tradycyjne oczepiny. Grubo po północy muzycy oddali instrumenty i koncertowy popis zaserwowali sami Państwo Młodzi, pod sceną było naprawdę gorąco. Pewnie powstałoby kilka paragrafów tekstu więcej gdybym chciał opisać wszystko to, co działo się podczas tego pełnego wrażeń dnia. Ale wiecie co, łatwiej będzie jak zerkniecie na zdjęcia i zobaczycie co się działo na własne oczy. Tradycyjnie więcej zdjęć odnajdziecie w strefie klienta, korzystając z hasła z mojej wizytówki. Miłego oglądania.'
                    }
                    slug={"fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice"}
                    title={"FOTOGRAF ŚLUBNY WADOWICE, SALA WESELNA ARKADIA - DAJANA i SYLWESTER"}
                    tags={"Fotograf ślubny Kalwaria Zebrzydowska, Arkadia Wadowice"}
                    date={"10 czerwca 2018"}
                    menuNames={"DAJANA i SYLWESTER"}
                    menuTitle={"FOTOGRAF ŚLUBNY WADOWICE, SALA WESELNA ARKADIA"}
                    leadNames={"MAGDALENA i PIOTR"}
                    leadTitle={"REPORTAŻ ŚLUBNY HOTEL JUNIOR KRAKÓW, BALONOWY SZAŁ"}
                    leadUrl={"/reportaz-slubny-hotel-junior-krakow-balonowy-szal"}
                    leadImage={"url(/static/reportaz-slubny-hotel-junior-krakow-balonowy-szal-start.jpg)"}
                />
            </div>
        );
    }
}
