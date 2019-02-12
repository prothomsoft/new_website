import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sala_weselna_nedan_pcim_reportaz_slubny_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0159.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0005.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0002.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0009.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0012.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0014.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0015.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0017.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0024.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0026.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0028.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0030.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0032.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0034.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0036.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0037.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0038.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0041.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0042.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0043.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0046.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0048.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0049.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0051.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0050.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0052.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0053.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0054.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0056.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0055.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0057.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0059.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0061.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0062.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0063.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0064.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0065.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0066.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0067.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0069.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0070.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0071.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0072.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0073.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0074.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0075.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0076.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0077.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0078.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0079.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0080.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0081.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0082.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0083.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0084.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0085.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0086.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0087.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0088.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0089.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0090.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0091.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0092.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0093.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0094.jpg", height: 806 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0095.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0096.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0097.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0098.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0099.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0100.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0101.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0102.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0103.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0104.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0105.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0106.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0107.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0108.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0109.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0110.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0111.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0112.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0113.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0114.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0115.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0116.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0117.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0118.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0119.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0131.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0120.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0121.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0136.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0122.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0123.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0124.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0125.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0126.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0127.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0128.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0129.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0130.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0132.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0133.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0134.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0135.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0137.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0138.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0139.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0140.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0142.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0141.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0143.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0144.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0145.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0146.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0147.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0148.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0149.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0151.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0152.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0153.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0154.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0155.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0156.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0157.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0158.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0150.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0160.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0161.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0163.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0166.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0164.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0165.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0167.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0168.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0169.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0170.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0171.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0172.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0173.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0175.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0174.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/08/sala_weselna_nedan_pcim_0162.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sala weselna NEDAN Pcim, reportaż ślubny"}
                    headDescription={"Dużo pozytywnych emocji i dopracowany w najmniejszym szczególe piękny ślub Ani i Krzyśka. Sala bankietowa NEDAN Pcim. Koniecznie zaglądnijcie na bloga."}
                    headKeywords={"sala weselna nedan pcim,sala bankietowa jordanów,fotograf na wesele"}
                    headUrl={"https://99foto.pl/sala-weselna-nedan-pcim-reportaz-slubny/"}
                    entryContentP1={
                        'Pcim, Jordanów, Naprawa i okoliczne miejscowości zyskały świetne miejsce, gdzie można wybrać się na Sylwestra lub zorganizować Wasz ślub. <a href="https://nedan.pl" target="_blank" rel="nofollow">Sala bankietowa NEDAN w Pcimiu</a> powstała niedawno, pachnie nowością, oferuje nowoczesny wystrój i dużo przyjemnego światła do zdjęć ślubnych, znacząco ułatwiając pracę dla fotografów i kamerzystów. Ania znalazła mnie jako fotografa ślubnego oglądając zdjęcia <a href="https://99foto.pl/sala-bankietowa-i-weselna-krzczonow-mka-morze-gwiazd/" target="_blank" rel="nofollow">Magdy i Grześka</a>. Szerokie kadry z Kościoła w Pcimiu, żywe kolory i autentyczne emocje przekonały ją, żeby zaufać mi i powierzyć zadanie fotografowania jej ślubu.'
                    }
                    entryContentP2={
                        'Pomimo, że całość imprezy odbyła się w Pcimiu to na przygotowania Krzyśka zostałem zaproszony do Kryspinowa. Wszystko dopięte na ostatni guzik, wspaniała rodzinna atmosfera i ogrom wzruszeń podczas pierwszego tego dnia błogosławieństwa. Następnie Zakopianką udaliśmy się do domu rodzinnego Ani w Pcimiu. Krzysiek buziakiem przywitał przyszłą żonę i po błogosławieństwie udaliśmy się do <a href="https://www.parafiapcim.pl" target="_blank" rel="nofollow">Kościoła św. Mikołaja</a>. Ania i Krzysiek indywidualnie przywitali niemalże każdego z gości, podpisali dokumenty w zakrystii i pewnym krokiem powędrowali do ołtarza. Po pięknym kazaniu i sakramentalnym TAK Para Młoda zaprosiła swoich gości do wspomnianej już <a href="https://nedan.pl" target="_blank" rel="nofollow">Sali Bankietowej NEDAN w Pcimiu</a>. <a href="https://www.angel2006.pl" target="_blank" rel="nofollow">Zespół muzyczny Angels</a> znakomicie dbał o frekwencję na parkiecie, a nieszablonowy wokalista wykazał się ponadprzeciętną intuicją, ratując imprezę poprzez wpięcie dzwięku do wejścia głośnikowego w rzutniku zamiast w laptopie. Chłopcy z <a href="https://www.fotohtml.pl" target="_blank" rel="nofollow">Wideofilmowanie Fotohtml</a>, dbali o uwiecznienie każdego momentu imprezy. Aniu i Krzyśku, serdecznie dziękuję za dzień ślubu pełny wrażeń i plener pełny bukietowych emocji. Zapraszam do oglądania zdjęć ślubnych i plenerowych. Ponad pięćset klatek czeka na Was w strefie klienta. Życzę miłego oglądania.'
                    }
                    slug={"sala-weselna-nedan-pcim-reportaz-slubny"}
                    title={"SALA WESELNA NEDAN PCIM - REPORTAŻ ŚLUBNY - ANNA i KRZYSZTOF"}
                    tags={"sala weselna nedan pcim,sala bankietowa jordanów,fotograf na wesele"}
                    date={"21 sierpnia 2017"}
                    menuNames={"ANNA i KRZYSZTOF"}
                    menuTitle={"SALA WESELNA NEDAN PCIM - REPORTAŻ ŚLUBNY"}
                    leadNames={"KASIA i GRZEGORZ"}
                    leadTitle={"FOTOGRAF NA WESELE JORDANÓW, STRAŻNICA PCIM"}
                    leadUrl={"/fotograf-na-wesele-jordanow-straznica-pcim"}
                    leadImage={"url(/static/fotograf_na_wesele_jordanow_straznica_pcim_start.jpg)"}
                />
            </div>
        );
    }
}
