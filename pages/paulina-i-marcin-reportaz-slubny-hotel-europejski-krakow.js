import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/paulina_i_marcin_reportaz_slubny_hotel_europejski_krakow_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_krakow_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_krakow_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_krakow_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_krakow_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_krakow_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_krakow_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_krakow_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_krakow_0010.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_krakow_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_krakow_0008.jpg", height: 643 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_krakow_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_krakow_0009.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_krakow_0004.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_krakow_0012.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_krakow_0013.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_krakow_0016.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_krakow_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_krakow_0018.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_krakow_0019.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_krakow_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_krakow_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_krakow_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_krakow_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_krakow_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_krakow_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_krakow_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_krakow_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_krakow_0028.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_krakow_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_krakow_0030.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_krakow_0031.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_krakow_0032.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_krakow_0033.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_krakow_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0001.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0003.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0005.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0008.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0015.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0018.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0022.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0024.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0032.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0029.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/fotograf_slubny_kosciol_swietej_anny_krakow_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0030.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/11/zdjecia_slubne_kosciol_swietej_anny_krakow_0031.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0001.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0003.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0004.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0008.jpg", height: 806 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0011.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0013.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0015.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0019.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0024.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0032.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0034.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0036.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0038.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0041.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0042.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0044.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0046.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0048.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0049.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0050.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0051.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0052.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0054.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0055.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0056.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0057.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0060.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0061.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0062.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0064.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0063.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0065.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0066.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0067.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0068.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0069.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0070.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0071.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0073.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0072.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0074.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0075.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0076.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0077.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0078.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0079.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0080.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0081.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0082.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0083.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0084.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0085.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0086.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0087.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0089.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0088.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/12/zdjecia_slubne_hotel_europejski_krakow_0025.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Reportaż Ślubny Hotel Europejski Kraków"}
                    headDescription={"Kraków - sala balowa w Hotel Europejskim i przepiękny Kościół Świętej Anny. W imieniu Pauliny i Marcina zapraszam na reportaż z ich ślubu. Miłego oglądania."}
                    headKeywords={"reportaż ślubny kościół Świętej anny kraków,zdjęcia ślubne hotel europejski"}
                    headUrl={"https://99foto.pl/paulina-i-marcin-reportaz-slubny-hotel-europejski-krakow/"}
                    entryContentP1={
                        'Wydawałoby się, że śluby odbywają się w miesiącach letnich, żeby nie powiedzieć wakacyjnych, gdy jednak przyjrzymy się tematowi nieco bliżej okazuje się, że fotograf ślubny może fotografować cały rok w szczególności w Krakowie. Koniec listopada, trochę wcześniej w czasie jesienne epizody nie tylko z deszczem, ale i śniegiem, na szczęście w dzień ślubu Pauliny i Marcina pogoda na zamówienie. Przygotowania zaczęliśmy na Osiedlu Oświecenia w mieszkaniu Pauliny gdzie świetny makijaż wykonała Ania z <a href="https://www.facebook.com/Wodzia-make-up-story-539847282771161/" target="_blank" rel="nofollow">Wodzia make-up story</a>. W międzyczasie sfotografowałem przepiękną suknię ślubną i obrączki. Czas oczekiwania na przybycie Marcina minął błyskawicznie i rozpoczęło się pełne wzruszeń błogosławieństwo.'
                    }
                    entryContentP2={
                        'Chwilę później byliśmy już w <a href="https://kolegiata-anna.pl/" target="_blank" rel="nofollow">Kościele Świętej Anny w Krakowie</a>, gdzie odbyła się ceremonia zaślubin. Jest to przepiękny kościół, w którym trudno odmówić sobie przyjemności tworzenia szerokich kadrów, pełnych historycznych detali. Ksiądz wygłosił piękne kazanie, młodzi odważnie bo z pamięci wypowiedzieli słowa przysięgi i dorożką przez Rynek w Krakowie udali się do sali balowej w <a href="https://he.pl" target="_blank" rel="nofollow">Hotelu Europejskim</a>. Dalej za sprawą DJ-ów parkiet zapełniał się bardzo szybko. Goście weselni tańczyli do białego rana. Młodzi przygotowali pociąg, tort, oczepiny i kilka zabaw towarzyszących. Serdecznie zapraszam do oglądania historii Pauliny i Marcina. Więcej zdjęć w strefie klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"paulina-i-marcin-reportaz-slubny-hotel-europejski-krakow"}
                    title={"REPORTAŻ ŚLUBNY HOTEL EUROPEJSKI KRAKÓW - PAULINA i MARCIN"}
                    tags={"reportaż ślubny kościół Świętej anny kraków,zdjęcia ślubne hotel europejski"}
                    date={"3 grudnia 2016"}
                    menuNames={"PAULINA i MARCIN"}
                    menuTitle={"REPORTAŻ ŚLUBNY HOTEL EUROPEJSKI KRAKÓW - PAULINA i MARCIN"}
                    leadNames={"ALINA i JANUSZ"}
                    leadTitle={"ZDJĘCIA ŚLUBNE JORDANÓW, DWOREK FANTAZJA"}
                    leadUrl={"/alina-i-janusz-zdjecia-slubne-jordanow-dworek-fantazja"}
                    leadImage={"url(/static/alina_i_janusz_zdjecia_slubne_jordanow_dworek_fantazja_start.jpg)"}
                />
            </div>
        );
    }
}
