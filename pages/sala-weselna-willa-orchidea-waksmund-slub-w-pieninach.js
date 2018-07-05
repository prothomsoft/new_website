import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach-start.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0001.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0002.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0003.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0004.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0005.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0006.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0007.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0008.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0009.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0010.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0011.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0012.jpg", height: 256 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0013.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0015.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0014.jpg", height: 402 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0017.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0016.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0018.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0019.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0022.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0020.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0021.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0023.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0026.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0024.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0025.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0027.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0028.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0029.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0030.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0031.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0032.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0033.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0035.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0034.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0036.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0037.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0038.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0039.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0040.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0041.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0042.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0043.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0044.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0047.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0045.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0046.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0048.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0049.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0050.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0051.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0052.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0053.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0054.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0055.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0056.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0057.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0058.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0059.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0061.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0062.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0063.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0064.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0060.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0065.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0066.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0067.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0068.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0071.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0069.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0070.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0072.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0073.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0074.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0075.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0076.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0077.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0078.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0079.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0080.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0081.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0082.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0083.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0084.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0085.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0086.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0087.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0088.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0089.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0090.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0091.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0092.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0093.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0094.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0095.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0096.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0097.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0098.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0099.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0100.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0101.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0102.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0103.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0104.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0105.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0106.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0107.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0109.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0108.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0110.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0111.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0112.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0114.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0113.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0115.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0116.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0117.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0118.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0119.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0120.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0163.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0121.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0122.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0123.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0124.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0125.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0127.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0126.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0128.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0129.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0130.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0131.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0132.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0133.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0134.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0135.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0136.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0137.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0138.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0139.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0140.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0141.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0161.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0142.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0143.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0144.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0145.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0146.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0147.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0148.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0149.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0150.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0151.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0152.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0153.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0164.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0156.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0157.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0158.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0159.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0160.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0155.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0162.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0154.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0165.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach_0166.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sala weselna Willa Orchidea Waksmund, Ślub na Podhalu"}
                    headDescription={"Reportaż ze ślubu Natalii i Kamila w Sali Weselnej Willa Orchidea Waksmund. Ślub na Podhalu i górskie klimaty. Zapraszam do oglądania."}
                    headKeywords={"Sala weselna Willa Orchidea, ślub na Podhalu, fotografia ślubna Waksmund"}
                    headUrl={"http://99foto.pl/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach/"}
                    entryContentP1={
                        'Kilkukrotnie już pisałem, że wesela w górach mają swój niepowtarzalny klimat. Było tak i tym razem na ślubie Natalii i Kamila w Waksmundzie. Ósma rano, flat white na Orlenie, przejazd przez świetnie mi znane pienińskie zakątki, czyli Sromowce Wyżne brzegiem Jeziora Czorsztyńskiego i pierwszy przystanek <a href="https://www.facebook.com/Studio-Urody-Avangarda-Karolina-Bryja-200918166919683/" target="_blank">Studio Urody Avangarda Karoliny Bryja</a>. W tym miejscu rozpoczęliśmy przygotowania. Karolina to kuzynka Natalii, więc w takie rodzinnej atmosferze, mając salon niemalże na wyłączność powstał perfekcyjny makijaż. Podczas przygotowań Natalii towarzyszyły druhny. Wszystkie dziewczyny wyglądały świetnie i błyskawicznie pomogły Natalii założyć suknie, biżuterię, podwiązkę i buty. W oczekiwaniu na Kamila, który do Waksmundu jechał z Jordanowa w kuchni toczyła się alternatywna impreza. Holenderscy goście, którzy na codzień raczej tylko piwko, złamali się i bariera językowa szybko pękła... i nie tylko bariera pękła w tej kuchni. Dalej już błogosławieństwo, wzruszenia i przejazd końmi do <a href="http://www.diecezja.pl/parafie/lista-parafii/32-nowy-targ/parafia-sw-jadwigi-slaskiej.html" taget="_blank">Kościoła Świętej Jadwigi Śląskiej</a> w Waksmundzie.'
                    }
                    entryContentP2={
                        'Ksiądz prowadzący ceremonię z pewnością dawno nie widział tylu uśmiechów w trakcie Mszy Świętej. Zdjęcie grupowe i udaliśmy się do położonej w pobliżu <a href="http://www.willa-orchidea.pl/" target="_blank">Sali weselnej Willa Orchidea</a>. Sala ta fioletami elewacji zaprasza gości z daleka i trudno ją przeoczyć podróżując w tamtych stronach. Rodzice przywitali młodych chlebem i solą, następnie goście zjedli obiad i ustawili się w długiej kolejce do życzeń. Natalia czarowała uśmiechem, Kamil nie oszczędzał gorących uścisków, prezentów na stoliku w mgnieniu oka przybywało. Nadszedł czas na pierwszy taniec, tort weselny i cały zestaw zabaw. Animatorki zabawiały dzieciaki, a rodzice korzystali z zasłużonej chwili wolności. Gościom weselnym na parkiecie przygrywał <a href="http://edenzespol.pl" target="_blank">Zespół Eden</a>, wyróżniający się świetnym głosek wokalistki Ewy. Po lekkiej burzy udało nam się wyskoczyć na Waksmundzki punkt widkowy na mini sesję ślubą. Arek ze <a href="http://www.studiostyl.net/" target="_blank">Studio Styl</a> w górę jechał ze mną, ale wracał z młodymi, mówiąc, że tyle się dzieje, że musi to mieć na taśmie. Jestem pewny, że po oczepinach zabawa trwała do samego rana, albo nawet do poniedziałku, bo jak to w górach w planie były przecież oczepiny. Natalio i Kamilu, świetna impreza, oby takich więcej. Dzięki, że mogłem Wam towarzyszyć. Koniec pisania i początek oglądania. Serdecznie zapraszam.'
                    }
                    slug={"sala-weselna-willa-orchidea-waksmund-slub-w-pieninach"}
                    title={"SALA WESELNA WILLA ORCHIDEA WAKSMUND - ŚLUB NA PODHALU - NATALIA i KAMIL"}
                    tags={"Sala weselna Willa Orchidea, ślub na Podhalu, fotografia ślubna Waksmund"}
                    date={"30 czerwca 2018"}
                    menuNames={"NATALIA i KAMIL"}
                    menuTitle={"SALA WESELNA WILLA ORCHIDEA WAKSMUND - ŚLUB NA PODHALU"}
                    leadNames={"KINGA i MATEUSZ"}
                    leadTitle={"FOTOGRAF ŚLUBNY SUCHA BESKIDZKA, MAGNOLIA BUDZÓW"}
                    leadUrl={"/fotograf-slubny-sucha-beskidzka-magnolia-budzow"}
                    leadImage={"url(/static/fotograf-slubny-magnolia-budzow-start.jpg)"}
                />
            </div>
        );
    }
}
