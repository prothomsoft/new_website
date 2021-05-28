import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: process.env.staticImagesPath + "opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0004.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0006.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0012.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0014.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0015.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0018.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0020.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0022.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0025.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0028.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0030.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0032.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0033.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0035.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0037.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0039.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0040.jpg", height: 805 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0043.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0057.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0062.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0073.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0075.jpg", height: 805 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0078.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0085.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0089.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0092.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0094.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0096.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0099.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0102.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0104.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0105.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0107.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0108.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0109.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0111.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0112.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0115.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0138.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0155.jpg", height: 295 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0128.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0134.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0139.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0140.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0156.jpg", height: 332 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0145.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0146.jpg", height: 851 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0147.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0148.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0150.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0149.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0151.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0153.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0152.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0154.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Opactwo Cystersów w Mogile i sesja zdjęciowa Kasprowy Wierch"}
                    headDescription={"Kasprowy Wierch, Czarny Staw Gąsienicowy i ceremonia w Klasztorze Opactwa Cystersów w Mogile. W imieniu Anety i Damiana serdecznie zapraszam na mojego bloga."}
                    headKeywords={"opactwo cystersów mogiła,sesja zdjęciowa kasprowy wierch,plener ślubny czarny staw gąsienicowy"}
                    headUrl={"https://99foto.pl/opactwo-cystersow-w-mogile-sesja-zdjeciowa-kasprowy/"}
                    entryContentP1={
                        "Tak, to był właśnie ten tydzień, długo zapowiadana pogoda, temperatura i odpowiednio pokolorowane liście. Wszystko tego dnia zapowiadało świetny plener w górach Słowacji. Zainspirowani zdjęciami kolegów fotografów, wybraliśmy się wszyscy po raz pierwszy w piękne miejsca, którymi były Popradzki Staw i Strbskie Pleso. Pierwsza miejscówka, w której nasz plan dnia podyktował nam postój to rzeka Poprad, która przecięła naszą drogę dojazdową do jeziora. Chwila niepewności i świetny widok z pewnością nie do powtórzenia już nawet następnego dnia, a co dopiero tydzień później. Ponieważ czasu do zachodu słońca było dużo, wdrapywaliśmy się przez godzinkę asfaltową drogą w miejsce, które zdecydowanie pokonuje Morskie Oko, a jest nim Popradzki Staw."
                    }
                    entryContentP2={
                        'Mniej ludzi, malownicze jezioro, ogromne góry, dużo świetnych kadrów do wypatrzenia. W drodze powrotnej zrobiliśmy też kilka zdjęć w lesie. Końcówka to szukanie dwóch kamieni z kadru <a href="https://www.marcinsosnicki.pl" target="_blank" rel="nofollow">Marcina Sośnickiego</a> i zachwyt nad jesienią oświetloną promieniami zachodzącego słońca. Na koniec zjedliśmy pyszny obiadek w Tatrzańskiej Łomnicy, zrelaksowani i zadowoleni wróciliśmy do naszych domów. Polecam to miejsce na plenery i mam nadzieję, że każdego roku znajdzie się jedna para, która mnie tam zabierze. Miłego oglądania.'
                    }
                    slug={"opactwo-cystersow-w-mogile-sesja-zdjeciowa-kasprowy"}
                    title={"OPACTWO CYSTERSÓW W MOGILE, SESJA ZDJĘCIOWA KASPROWY - ANETA i DAMIAN"}
                    tags={"Opactwo Cystersów Mogiła, Plener ślubny Czarny Staw Gąsienicowy, Sesja zdjęciowa Kasprowy Wierch"}
                    date={"16 września 2017"}
                    menuNames={"ANETA i DAMIAN"}
                    menuTitle={"OPACTWO CYSTERSÓW W MOGILE, SESJA ZDJĘCIOWA KASPROWY"}
                    leadNames={"OLA i PAWEŁ"}
                    leadTitle={"SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA"}
                    leadUrl={"/sesja-slubna-w-plenerze-park-krajobrazowy-w-ojcowie-i-okolice"}
                    leadImage={"url(/static/sesja_slubna_w_plenerze_park_krajobrazowy_w_ojcowie_i_okolice_start.jpg)"}
                />
            </div>
        );
    }
}
