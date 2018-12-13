import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0004.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0009.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0022.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0025.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0028.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0030.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0032.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0033.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0035.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0036.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0038.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0041.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0042.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0044.jpg", height: 806 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0048.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0046.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0049.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0050.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0051.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0052.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0053.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0054.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0055.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0056.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0057.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0061.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0062.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0063.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0064.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0065.jpg", height: 806 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0066.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0067.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0068.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0070.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0069.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0071.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0072.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0073.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0074.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0075.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0076.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0077.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0078.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0079.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0080.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0081.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0082.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0083.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0084.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0085.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0086.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0087.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0103.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0088.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0089.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0090.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0101.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0091.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0092.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0093.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0094.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0095.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0096.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0097.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0098.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0099.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0100.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0102.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0104.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0105.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0106.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0107.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0108.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0109.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0110.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0111.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0113.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0114.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0115.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0116.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0117.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0118.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0112.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0119.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0120.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0122.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0121.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0123.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0124.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0125.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0126.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0127.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0128.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0129.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0130.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0131.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0132.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0133.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0134.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0136.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0135.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0137.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0138.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0139.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0140.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0141.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0142.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0143.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0144.jpg", height: 806 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0145.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0146.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0147.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0148.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0149.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0150.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0151.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0152.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0153.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0154.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0155.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0156.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0157.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0158.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0159.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0160.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0161.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0162.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0163.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0164.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0165.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0166.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0167.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0168.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0169.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0170.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0172.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0173.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0174.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0171.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0175.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0176.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0177.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0178.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0179.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0180.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0181.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0182.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0183.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0184.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0185.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0186.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0187.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0189.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0188.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0190.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0827.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0191.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0192.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0193.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0194.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0195.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0196.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0197.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0199.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0829.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0198.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/10/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_0200.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Kabanos Spytkowice czyli wesele w góralskim klimacie"}
                    headDescription={"Góralski klimat ślubny podczas wesela Iwony i Marcina w Domu Weselnym Przystań w Kabanosie w Spytkowicach. Fotograf ślubny Rabka Zdrój zaprasza na reportaż."}
                    headKeywords={"wesele kabanos spytkowice,fotograf ślubny rabka zdrój,góralski klimat ślubny"}
                    headUrl={"https://99foto.pl/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice/"}
                    entryContentP1={
                        'Moja przygoda z fotografowaniem ślubów w Jordanowie, Rabce Zdroju, Pcimiu, Skomielnej Czarnej i okolicach rozpoczęła się blisko 3 lata temu od ślubów Igi i Marcina oraz Wiolety i Marcina. Pewnie zauważycie oglądając te zdjęcia, że trochę się pozmieniało w temacie techniki fotografowania, samego kadrowania i obróbki. Mam nadzieję jednak, że zmiany te są na plus. Świetnie wspominam tamte imprezy i plenery, dlatego było mi bardzo miło spotkać całą czwórkę podczas ślubu Iwony i Marcina. Mogę się tylko cieszyć, że akademicka przyjaźń trzech Marcinów, którzy mieszkali razem podczas niezapomnianych czasów studiowania na krakowskim AWF-ie przetrwała do dzisiaj. Sobotnie przedpołudnie rozpoczęliśmy w <a href="https://agnesstyle.com/" target="_blank">Salonie Fryzjerskim Agnieszki Wojdyła &#8211; AGNES STYLE</a> w Rabce Zdrój. Następnie udaliśmy się do Jordanowa i już drugi raz w tym roku odwiedziłem Patrycję w jej <a href="https://www.facebook.com/patrycjaantoszmakeup/" target="_blank">Studio Wizażu Patryca Antosz Make-Up Artist</a>. Jak zwykle atmosfera stworzona przez Patrycję była świetna, a makijaż DOSKONAŁY. Razem z <a href="https://www.facebook.com/studioJacekZielonka/" target="_blank">Jackiem z Viva Film</a>, który filmował ślub, prześcigiwaliśy się w wyszukiwaniu ciekawych kadrów. Widzieliśmy już wiele makijaży, ale efekt before/after tym razem był szczególnie WOW. Pożegnaliśmy Jordanów i udaliśmy się do Naprawy do domu Marcina.'
                    }
                    entryContentP2={
                        'Przed domem czekał już Chevrolet Camaro ZL1. Kilka zdjęć z przygotowania Pana Młodego i chwilę później byliśmy już w domu Iwony. Piękna Panna Młoda, suknia ślubna, biżuteria, wspaniała atmosfera i światło w jednym z miejsc domowego zacisza &#8211; spowodowały, że po raz już nie pierwszy w tym roku zdjęcia robiły się same. Po błogosławieństwie udaliśmy się do <a href="https://www.parafia.brat.pl/" target="_blank">Kościóła Świętej Teresy od Dzieciątka Jezus w Rabce Zdrój</a>. Po pięknej ceremoni, do której podkład muzyczny zapewniła kapela góralska, sakramentalnym TAK, przyszedł czas na spektakularne wyjście z kościoła, zdjęcie grupowe i moc gorących życzeń. Nastęnie goście weselni zostali zaproszeni do <a href="https://przystanwkabanosie.pl/" target="_blank">Domu Weselnego Przystań Kabanos w Spytkowicach</a>. Rodzicę tradycyjnie przywitali parę młodą chlebem i solą, a <a href="https://www.obsesjaband.pl/" target="_blank">Zespół muzyczny Obsesja</a> dał z siebie 100% nie tylko podczas pierwszego tańca, ale i całej trwającej do białego rana imprezy. Jak to na góralskim ślubie, była moc atrakcji i wzorowa frekwencja na parkiecie. Zapraszam na zdjęcia z tego dnia, a już wkrótce na plener z Popradzkiego Stawu i Szczyrbskiego Jeziora. Więcej zdjęć znajdziecie w strefie klienta wpisując hasło.'
                    }
                    slug={"wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    title={"WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE - IWONA i MARCIN"}
                    tags={"fotograf ślubny Rabka Zdrój, góralski klimat ślubny, wesele kabanos spytkowice"}
                    date={"28 PAŹDZIERNIKA 2017"}
                    menuNames={"IWONA i MARCIN"}
                    menuTitle={"WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"ZDJĘCIA ŚLUBNE RESTAURACJA STEK SKAWINA"}
                    leadUrl={"/zdjecia-slubne-restauracja-stek-skawina"}
                    leadImage={"url(/static/zdjecia_slubne_restauracja_stek_skawina_start.jpg)"}
                />
            </div>
        );
    }
}
