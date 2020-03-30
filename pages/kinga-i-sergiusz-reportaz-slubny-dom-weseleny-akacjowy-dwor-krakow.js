import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/kinga_i_sergiusz_reportaz_slubny_dom_weseleny_akacjowy_dwor_krakow_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0004.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0006.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0017.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0019.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0021.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0026.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0032.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0036.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/dom_weselny_akacjowy_dwor_krakow_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0038.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0041.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0042.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0046.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0048.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0049.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0050.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0051.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0052.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0054.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0056.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0055.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0057.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0061.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0062.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0063.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0064.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0065.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0066.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0067.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0068.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0069.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0070.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/dom_weselny_akacjowy_dwor_krakow_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/dom_weselny_akacjowy_dwor_krakow_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/dom_weselny_akacjowy_dwor_krakow_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/dom_weselny_akacjowy_dwor_krakow_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0071.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0072.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0073.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0074.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0075.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0076.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0077.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0078.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0079.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0080.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0081.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0082.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0083.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0084.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0085.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0086.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0087.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0088.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0089.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0090.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0091.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0092.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0093.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0095.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0096.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0097.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0098.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0099.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0101.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0102.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0103.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0104.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0105.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0106.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0107.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0108.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0109.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0110.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0111.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0112.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0113.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0114.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0115.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0116.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0117.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0118.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0119.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0120.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0121.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0122.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0123.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0124.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0125.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0126.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0127.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0129.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0128.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0130.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/dom_weselny_akacjowy_dwor_krakow_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/reportaz_slubny_dom_weselny_akacjowy_dwor_krakow_0132.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Reportaż ślubny Dom Weselny Akacjowy Dwór Kraków"}
                    headDescription={"Serdecznie zapraszam do Domu Weselnego Akacjowy Dwór w Krakowie na reportaż ślubny Kingi i Sergiusza. Miłego oglądania."}
                    headKeywords={"reportaż ślubny kraków,dom weselny akacjowy dwór"}
                    headUrl={"https://99foto.pl/kinga-i-sergiusz-reportaz-slubny-dom-weseleny-akacjowy-dwor-krakow/"}
                    entryContentP1={
                        'Piątek trzynastego minął bardzo szybko w oczekiwaniu na najważniejszy dzień w życiu Kingi i Sergiusza, dzień ich ślubu. <a href="https://www.jeanlouisdavid.pl" target="_blank" rel="nofollow">Salon fryzjerki Jean Louis David</a> w Galerii Kazimierz został tego dnia opanowany przez dziewczyny. Praca pań fryzjerek podlegała surowej ocenie, ponieważ Kinga zawodowo zajmuje się wizażem. Wszystkie cztery fotele zapełniły się, a fryzjerki czarowały fryzury marzeń. Kiedy po blisko dwóch godzinach były one gotowe, udaliśmy się do domu Kingi, żeby lekko poprawić makijaż. Pomagała Asia, pomagała Mama Kingi więc makijaż został wykonany na najwyższym poziomie. Suknia ślubna, buty, biżuteria, kilka pamiątkowych zdjęć i Kinga padła w ramiona mega szczęśliwego tego dnia Sergiusza.'
                    }
                    entryContentP2={
                        'Ceremonia zaślubin odbyła się w Urzędzie Stanu Cywilnego na ulicy Lubelskiej w Krakowie. Życzenia na sali były tak szczere i długie, że końcowe uściski musiały odbyć się w holu. Pełno wzruszeń i radości. Lexus zawiózł młodych na salę <a href="https://akacjowydworkrakow.pl/" target="_blank" rel="nofollow">Domu Weselnego Akacjowy Dwór w Krakowie</a>, gdzie czekał już na nas wodzirej. Szalony wieczór wystartował. Tańcom nie było końca, a weselny klimat udzielił się wszystkim. Hulajnogi, pyszny tort, pociąg, który za sprawą DJ-a zaserwował gościom podróż dookoła świata i moc innych atrakcji. Działo się. Dziękuję Kindze i Sergiuszowi za ten magiczny wieczór, za zaufanie i pozytywne emocje, było świetnie! Teraz już zapraszam na krótką historię tego wyjątkowego dnia!'
                    }
                    slug={"kinga-i-sergiusz-reportaz-slubny-dom-weseleny-akacjowy-dwor-krakow"}
                    title={"REPORTAŻ ŚLUBNY DOM WESELENY AKACJOWY DWÓR KRAKÓW - KINGA i SERGIUSZ"}
                    tags={"reportaż ślubny kraków,dom weselny akacjowy dwór"}
                    date={"20 stycznia 2017"}
                    menuNames={"KINGA i SERGIUSZ"}
                    menuTitle={"REPORTAŻ ŚLUBNY DOM WESELENY AKACJOWY DWÓR KRAKÓW"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"ZDJĘCIA ŚLUBNE RESTAURACJA STEK SKAWINA"}
                    leadUrl={"/zdjecia-slubne-restauracja-stek-skawina"}
                    leadImage={"url(/static/zdjecia_slubne_restauracja_stek_skawina_start.jpg)"}
                />
            </div>
        );
    }
}
