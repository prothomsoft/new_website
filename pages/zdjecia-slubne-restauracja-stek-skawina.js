import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: process.env.staticImagesPath + "zdjecia_slubne_restauracja_stek_skawina_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0017.jpg", height: 805 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0009.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0023.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0025.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0026.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0195.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0032.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0033.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0037.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0038.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0036.jpg", height: 805 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0039.jpg", height: 805 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0040.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0042.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0047.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0051.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0052.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0053.jpg", height: 805 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0057.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0059.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0067.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0069.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0070.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0072.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0076.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0077.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0085.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0092.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0095.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0097.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0104.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0106.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0107.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0110.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0111.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0115.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0118.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0121.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0122.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0130.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0133.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0138.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0140.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0145.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0146.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0147.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0148.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0149.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0150.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0151.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0152.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0153.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0154.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0155.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0156.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0157.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0158.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0160.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0161.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0162.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0159.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0163.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0164.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0165.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0166.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0167.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0168.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0169.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0170.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0172.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0173.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0174.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0171.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0175.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0176.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0177.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0186.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0179.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0180.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0181.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0182.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0183.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0184.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0185.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0187.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0189.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0188.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0190.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0191.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0192.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0193.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0194.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0178.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Fotograf ślubny Skawina"}
                    headDescription={"Ciepły wrześniowy dzień i lawina fajnych kadrów. To wszystko na pięknym ślubie Karoliny i Bartka. Fotograf ślubny ze Skawiny zaprasza."}
                    headKeywords={"fotograf ślubny skawina,zdjęcia ślubne restauracja stek"}
                    headUrl={"https://99foto.pl/zdjecia-slubne-restauracja-stek-skawina/"}
                    entryContentP1={
                        'W jedną z jesiennych i słonecznych sobót miałem przyjemność towarzyszyć Karolinie i Bartkowi, poznając ich rodziny, znajomych i fotografując jeden z ich najważniejszych dni w życiu. Przygotowania zaczęliśmy w Skawinie w <a href="https://www.prestige-hs.pl/" target="_blank" rel="nofollow">Salonie Fryzjerskim Prestige Hair Studio</a>. Gdy przyjechałem na miejsce Gosia z <a href="https://www.facebook.com/MalgorzataLisowskaNailsMakeUp/" target="_blank" rel="nofollow">Nails &#038; Make-Up Małgorzata Lisowska</a> pracowała już nad makijażem Mamy Karoliny. Następnie dzięki świetnej współpracy udało nam się przesunąć stanowisko wizażystki w miejsce idealne, które otworzyło nowe możliwości i morze wpaniałych kadrów. W świetnej atmosferze spędziliśmy kolejne minuty, a może nawet godziny. Następnie przyjechał Bartek i zabrał Karolinę do swojego domu rodzinnego. Bartek ubierał garnitur z Piotrkiem na górze, Karolina z Julią na dole, biegałem po schodach mocno, ale warto było. Pełne emocji, wzruszeń błogosławieństwo i chwilę później udaliśmy się do <a href="https://www.szymonijuda.pl/" target="_blank" rel="nofollow">Kościoła św. Apostołów Szymona i Judy Tadeusza w Skawinie</a>.'
                    }
                    entryContentP2={
                        'Wizyta w zakrystii i kilka żartów księdza, chwila oczekiwania na gości,  gorące przywitania i piękna ceremonia z sakramentalnym TAK. Po wyjściu z Kościoła zaprosiliśmy gości do zdjęcia grupowego, oraz życzeń w promieniach ciepłego wrześniowego słońca. Po życzeniach dosłownie za rogiem, również w Skawinie na młodych czekali rodzice z tradycyjnym chleblem i solą, oraz zespół <a href="https://www.zmthebest.pl/" target="_blank" rel="nofollow">ZM THE BEST z Katowic</a>, który od początku profesjonalnie prowadził całą imprezę. <a href="https://www.restauracjastek.pl/" target="_blank" rel="nofollow">Restauracja Stek Skawina</a> przywitała swoich gości pysznym obiadem i lodowym deserem. Młodzi otworzyli parkiet pierwszym tańcem. A jak już ten parkiet został otwarty to trudno byłoby go zamknąć. Pełna frekwencja, świetna zabawa i szaleństwa, którym nie było końca. Szczególne zapraszam do zerknięcia na tę część reportażu na moim blogu. Działo się dużo i to nie tylko na parkiecie.  Niesamowity wrześniowy dzień, spędzony w przemiłym towarzystwie. Karolino i Bartku super, że mogłem być tam z Wami w tych najważniejszych chwilach Waszego życia. Zapraszam do oglądania wybranych zdjęć, a więcej znajdziecie w strefie klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"zdjecia-slubne-restauracja-stek-skawina"}
                    title={"ZDJĘCIA ŚLUBNE RESTAURACJA STEK SKAWINA - KAROLINA I BARTEK"}
                    tags={"Fotograf ślubny Skawina, Zdjęcia ślubne Restauracja Stek"}
                    date={"22 PAŹDZIERNIKA 2017"}
                    menuNames={"KAROLINA i BARTEK"}
                    menuTitle={"ZDJĘCIA ŚLUBNE RESTAURACJA STEK SKAWINA"}
                    leadNames={"ANETA i DAMIAN"}
                    leadTitle={"OPACTWO CYSTERSÓW W MOGILE, SESJA ZDJĘCIOWA KASPROWY"}
                    leadUrl={"/opactwo-cystersow-w-mogile-sesja-zdjeciowa-kasprowy"}
                    leadImage={"url(/static/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_start.jpg)"}
                />
            </div>
        );
    }
}
