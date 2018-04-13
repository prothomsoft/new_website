import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/hotel_margerita_krakow_magiczny_wystroj_sali_weselnej_w_krakowie-start.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0001.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0003.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0002.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0004.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0005.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0009.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0006.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0008.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0007.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0010.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0011.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0012.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0013.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0014.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0015.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0016.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0017.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0018.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0019.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0020.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0021.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0022.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0023.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0024.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0025.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0026.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0027.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0028.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0029.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0030.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0031.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0032.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0033.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0034.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0035.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0036.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0037.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0038.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0039.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0040.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0041.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0042.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0043.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0044.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0045.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0046.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0047.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0048.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0049.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0050.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0051.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0052.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0053.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0054.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0055.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0056.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0057.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0058.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0059.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0060.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0063.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0061.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0062.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0064.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0065.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0066.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0067.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0068.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0069.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0070.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0071.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0072.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0073.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0074.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0075.jpg", height: 766 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0076.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0077.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0078.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0079.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0080.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0081.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0082.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0083.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0084.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0085.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0086.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0087.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0088.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0089.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0090.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0092.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0093.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0094.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0095.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0096.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0097.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0098.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0099.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0100.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0101.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0102.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0103.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0104.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0105.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0106.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0107.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0108.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0109.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0110.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0112.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0113.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0114.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0115.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0116.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0117.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0118.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0111.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0119.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0120.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0121.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0122.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0124.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0123.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0125.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0126.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0128.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0129.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0130.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0131.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0132.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0133.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0134.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0135.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0136.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0137.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0138.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0139.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0140.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0141.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0142.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0143.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0144.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0145.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0146.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0147.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0148.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0149.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0127.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Hotel Margerita Kraków, magiczny wystrój sali weselnej, ślub w Krakowie"}
                    headDescription={
                        "Hotel Margerita położony na trasie z Krakowa do Olkusza to świetne miejsce na ślub. Magiczny wystrój sali weselnej, który zachwyci Waszych gości. Zapraszam na reportaż ślubny Natalii i Piotra."
                    }
                    headKeywords={"Hotel Margerita Kraków, magiczny wystrój sali weselnej, ślub w Krakowie"}
                    headUrl={"http://99foto.pl/hotel-margerita-magiczny-wystroj-sali-weselnej-w-krakowie/"}
                    entryContentP1={
                        'Sobotnie przedpołudnie i bardzo słoneczny dzień rozpoczęliśmy razem ze świadkiem i jak się chwilę później okazało specjalistą od oświetlenia Round Flashem Łukaszem w Jerzmanowicach, fotografując przygotowania Piotra. Piękny ogród i rozłożyste drzewa wzdłóż podjazdu, wymarzone warunki by zamieszkać spokojnie zdala od miejskiego zgiełku i delektować się spokojem po pracy w sąsiedztwie Ojcowskiego Parku Narodowego. Mama Piotra przygotowała dla nas kawkę, a Tato okazał się być pasjonatem fotografii, więc trochę porozmawialiśmy o Smienach, Zenitach, powiększalnikach, koreksach i takich tam. Łukasz podszedł do tematu analitycznie, dopasował ilość żelu na włosach, ilość pasty na butach Piotra, powpinał spinki do mankietów i zapiął bordową muchę. Gdy wszystko było już gotowe czekał nas powrót do Krakowa na przygotowania Natalii. Makijaż odbył się w samym centum naszego pięknego miasta w <a href="https://www.facebook.com/Glamour-Hair-Studio-Studio-fryzur-i-kosmetyki-124677987586758/Glamour" target="_blank">Salonie Hair & Beauty Studio</a> Luizy Borkowskiej.  Podczas gdy Luiza wykonała świetny i profesjonalny makijaż, Łukasz dzielnie asystował, a dziewczyny kombinowały coś z brwiami na fotelu obok.'
                    }
                    entryContentP2={
                        'Gdy makijaż był gotowy udaliśmy się do domu Natalii, gdzie kuzynka, a w tym wyjątkowym dniu druhna Magda pomagała w przygotowaniach. Nieprzypadkowo powieszony welon i świetnie urządzone mieszkanie w kolorze blue, piękna Natalia i Magda, promienie słońca wpadające świetlikiem były gwarancją niesamowitych zdjęć. Gdy zebrali się już wszyscy zaproszeni goście Tato Natalii wykorzystał jedyną w swoim życiu okazję na krótkie przemówienie po którym odbyło się błogosławieństwo.  Ceremonia odbyła się w <a href="http://www.biezanow.diecezja-krakow.pl/">Kościele Narodzenia NMP</a> znajdującym się w Krakowskim Starym Bieżanowie. Ambona zapełniała się kolejnymi prelegentami, wśrod których brylował Łukasz (tak to słowo tu pasuje). Przysłuchując się dźwiękom dobiegającym z chóru można było usłyszeć pięknie brzmiące skrzypce. Po zdjęciu grupowym Para Młoda zaprosiła gości do <a href="http://www.margerita.pl/" target="_blank">Hotelu, Restauracji Margerita</a>. Magiczny wystrój sali mocno przypadł do gustu gościom weselnym. Odbyły się życzenia, pierwszy taniec w chmurach ktore zorganizował <a href="https://www.facebook.com/DJ4U-Piotr-P%C5%82awski-466649040058113/" target="_blank">DJ Piotr</a>, kolejne atrakcje to fotobudka z gadżetami, pociąg, podziękowania dla rodziców, pyszny tort i oczywiście zabawy oczepinowe. Na filmie imprezę uwieczniał <a href="https://www.facebook.com/yurievfilm/" target="_blank">Serhij Juriev ze Stylowe Wesele</a>, który był niekwestionowanym mistrzem odnajdywania idealnego światła. Niesamowity dzień, spędzony w wybornym towarzystwie. Natalio i Piotrze cieszę się bardzo, że mogłem być tam z Wami w tych najważniejszych chwilach Waszego życia. Zapraszam do oglądania zdjęć. Po więcej zapraszam do strefy klienta.'
                    }
                    slug={"hotel-margerita-magiczny-wystroj-sali-weselnej-w-krakowie"}
                    title={"HOTEL MARGERITA, MAGICZNY WYSTRÓJ SALI WESELNEJ W KRAKOWIE - NATALIA i PIOTR"}
                    tags={"Hotel Margerita Kraków, magiczny wystrój sali weselnej, ślub w Krakowie"}
                    date={"12 kwietnia 2018"}
                    menuNames={"NATALIA i PIOTR"}
                    menuTitle={"HOTEL MARGERITA, MAGICZNY WYSTRÓJ SALI WESELNEJ W KRAKOWIE"}
                    leadNames={"JOANNA i GRZEGORZ"}
                    leadTitle={"WESELE NA POLU GOLFOWYM W PACZÓŁTOWICACH"}
                    leadUrl={"/wesele-na-polu-golfowym-w-paczoltowicach"}
                    leadImage={"url(/static/wesele_na_polu_golfowym_w_paczoltowicach_start.jpg)"}
                />
            </div>
        );
    }
}
