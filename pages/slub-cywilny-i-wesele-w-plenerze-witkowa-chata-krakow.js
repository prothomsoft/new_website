import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: process.env.staticImagesPath + "slub_cywilny_i_wesele_w_plenerze_witkowa_chata_krakow_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0002.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0005.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0008.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0010.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0016.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0201.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0200.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0024.jpg", height: 382 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0026.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0027.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0164.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0042.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0045.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0049.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0054.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0061.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0064.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0065.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0073.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0091.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0100.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0106.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0121.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0123.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0124.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0129.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0138.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0140.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0143.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0145.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0147.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0146.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0148.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0149.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0150.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0153.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0151.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0152.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0154.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0155.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0156.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0157.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0158.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0159.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0160.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0161.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0162.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0163.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0181.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0166.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0167.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0168.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0169.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0170.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0171.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0172.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0182.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0173.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0174.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0175.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0179.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0176.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0177.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0178.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0180.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/08/slub_w_plenerze_witkowa_chata_krakow_0165.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Ślub w plenerze Kraków"}
                    headDescription={"Witkowa Chata w Krakowie i piękny ślub plenerowy Kingi i Juliena. Pełno na moim blogu autentycznych emocji i żywych kolorów. Serdecznie zapraszam do oglądania."}
                    headKeywords={"witkowa chata kraków,ślub plenerowy kraków,ślub w plenerze"}
                    headUrl={"https://99foto.pl/slub-cywilny-i-wesele-w-plenerze-witkowa-chata-krakow/"}
                    entryContentP1={
                        "Sierpniowa sobota, bardzo ciepła i z gwarantowaną pogodą bez kropli deszczu, niebieskie niebo z białymi jak śnieg chmurami, czyli dzień idealny i wymarzony na ślub plenerowy w Krakowie. Taka właśnie była ubiegła sobota. Sprzyjającą aurę świetnie wykorzystali Kinga i Julien zapraszając do Krakowa swoich gości na niezapomniany ślub plenerowy.  Myśl globalnie, działaj lokalnie &#8211; takie korporacyjne hasło, tym razem doskonale wpisało się w oprawę multikulturowego ślubu cywilnego, który miał miejsce w naszym pięknym Krakowie. Sobota rozpoczęła się od przygotowań, które miały miejsce w domu rodzinnym Kingi. Siostra Zuza znakomicie poradziła sobie w roli wizażystki i wkładając w swoją pracę całe serce z niezwykłą starannością wykonała makijaż ślubny Kingi. Duży jasny pokój, świetne światło, kilka bliskich osób jednocześnie przygotowujących się do ceremoni i luźna atmosfera tak po krótce opisałbym to przedpołudnie."
                    }
                    entryContentP2={
                        'Julien przygotowywał się w dwupoziomowym pokoju dla nowożeńców przygotowanym przez <a href="https://www.hotelwitek.pl/pl/" target="_blank" rel="nofollow">Hotel Witek</a>. Spinki, buty, krawat i marynarkę pomagali założyć rodzice i brat Juliena. Pierwsze spotkanie Kingi i Juliana tego dnia to zapowiedź dalszych wydarzeń, innymi słowy ekspozja uczuć. Później działo się jeszcze więcej, a kulminacją w oczekiwaniu na ceremonię plenerową było błogosławieństwo pełne emocji i łez wzruszenia.  Przyjęcie weselne i ślub plenerowy odbyły się w <a href="https://www.hotelwitek.pl/pl/" target="_blank" rel="nofollow">Centrum Hotelowo – Konferencyjnym – Witkowa Chata</a>. Jak na międzynarodowy ślub przystało nie zabrakło wodzireja, który miał płacone od słowa (tylko angielskiego) i DJ-a, który dzielnie czuwał nad frekwencją na parkiecie. Ten drugi pracy nie miał zbyt dużo, ponieważ goście dzięki wspaniałej i niepowtarzalnej energii, zapełniali parkiet błyskawicznie, a zabawa weselna trwała do białego rana. Dokumentować bieg zdarzeń pomagał mi Romek z <a href="https://okamgnienie.com.pl" target="_blank" rel="nofollow">Oka mgnienie &#8211; film ślubny</a>, którego serdecznie pozdrawiam. Wielkie dzięki za ten wyjątkowy dzień, ciepłe przyjęcie i genialną atmosferę. Miłego oglądania, a po więcej zdjęć zapraszam do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"slub-cywilny-i-wesele-w-plenerze-witkowa-chata-krakow"}
                    title={"ŚLUB CYWILNY i WESELE W PLENERZE - WITKOWA CHATA KRAKÓW - KINGA i JULIEN"}
                    tags={"witkowa chata kraków,ślub plenerowy kraków,ślub w plenerze"}
                    date={"11 sierpnia 2017"}
                    menuNames={"KINGA i JULIEN"}
                    menuTitle={"ŚLUB CYWILNY i WESELE W PLENERZE - WITKOWA CHATA KRAKÓW"}
                    leadNames={"ALINA, MICHAŁ i RUDI"}
                    leadTitle={"PLENER NARZECZEŃSKI KRAKÓW i OKOLICE"}
                    leadUrl={"/plener-narzeczenski-krakow-i-okolice"}
                    leadImage={"url(/static/plener_narzeczenski_krakow_i_okolice_start.jpg)"}
                />
            </div>
        );
    }
}
