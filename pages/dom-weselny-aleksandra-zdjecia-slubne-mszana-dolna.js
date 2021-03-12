import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/dom-weselny-aleksandra-zdjecia-slubne-mszana-dolna-start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0003.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0005.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0007.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0008.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0010.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0014.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0016.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0019.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0021.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0025.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0030.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0032.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0036.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0041.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0038.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0042.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0046.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0048.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0049.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0050.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0055.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0051.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0054.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0052.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0056.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0057.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0061.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0062.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0063.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0064.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0065.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0066.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0067.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0068.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0069.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0070.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0071.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0072.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0073.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0074.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0075.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0076.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0077.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0078.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0079.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0080.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0081.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0082.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0083.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0084.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0085.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0086.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0087.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0088.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0089.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0090.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0091.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0092.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0093.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0094.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0095.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0096.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0097.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0098.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0099.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0100.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0101.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0102.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0103.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0104.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0105.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0106.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0107.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0108.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0109.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0110.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0111.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0112.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0113.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0114.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0116.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0117.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0118.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0119.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0120.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0121.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0122.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0123.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0124.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0125.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0126.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0127.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0128.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0129.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0130.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0131.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0133.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0134.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0135.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0136.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0137.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0138.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0139.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0140.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0142.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0141.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0132.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0143.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0145.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0147.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0146.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0148.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0115.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0149.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0150.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0151.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0144.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0152.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Dom weselny Aleksandra, zdjęcia ślubne Mszana Dolna"}
                    headDescription={"Aleksandra to nowo powstały Dom Weselny w Mszanie Dolnej, świetne miejsce by zorganizować tam Wasz ślub. Zapraszam na reportaż ślubny Kasi i Piotra."}
                    headKeywords={"Dom weselny Aleksandra, zdjęcia ślubne Mszana Dolna, fotograf na wesele Mszana"}
                    headUrl={"https://99foto.pl/dom-weselny-aleksandra-zdjecia-slubne-mszana-dolna/"}
                    entryContentP1={
                        'Święta Wielkanocne, a w szczególności lany poniedziałek to dzień otwierający parkiety w całej Polsce. Korzystając więc z okazji urwałem się na kilka godzin z Tokarni, gdzie dzieliliśmy się jajkiem z rodziną już od niedzieli, by uwiecznić ślub Kasi i Piotra. Przygotowania zaczęliśmy w Myślenicach w <a href="https://www.facebook.com/biogenika/" target="_blank" rel="nofollow">Salonie Urody Biogenika</a>. Makijaż profesjonalnie wykonała koleżanka Kasi z licealnej klasy. Chwilę później na fotelu zasiadła świadkowa Ania, czyli siostra Kasi, której zdjęcie after możecie zobaczyć na facebooku. Następnie udaliśmy się do Stróży i tam z pomocą mamy Kasia ubrała suknię ślubną, buty, podwiązkę i biżuterie. Była też chwila na kawkę i miłą rozmowę z rodzicami. Piotr mieszkał w Pcimiu, udałem się tam więc w kilka minut by sfotografować również jego przygotowania. Podczas ubierania asystowała siostra Ania. Gdy wszystko było już gotowe odbyło się pierwsze pełne emocji błogosławieństwo w domu Piotra i kolejne już wspólne w domu Kasi.'
                    }
                    entryContentP2={
                        'Po godzinie 14 udaliśmy się do <a href="https://www.diecezja.pl/parafie/lista-parafii/33-pcim/parafia-nmp-krolowej-polski.html" target="_blank" rel="nofollow"> Kościoła pw. Najświętszej Maryi Panny Królowej Polski w Stróży</a>. Ponieważ brat Kasi w najbliższej przyszłości będzie księdzem, więc zakrystia i kościół będą jego drugim domem. Czuł się tam prawdziwym gospodarzem, dzięki czemu wszystko przebiegało bardzo sprawnie i w przemiłej atmosferze. Po kazaniu Para Młoda powiedziała sakramentalne TAK. Atrakcją dla wielu gości, była schola, która dodała ceremoni charakteru grą na instumentach i pięknym śpiewem. Zrobiliśmy zdjęcie grupowe i udaliśmy się do <a href="https://www.weselamszana.pl/" target="_blank" rel="nofollow">Domu Weselnego Aleksandra w Mszanie Dolnej</a>. Goście weselny Kasi i Piotra mogli rozpocząć sezon taneczny w mega komfortowych warunkach. Parkiet zapełniał się szybko. Frekwencję na parkiecie zapewniał mega profesjolany zespół <a href="https://zespolespresso.pl/" target="_blank" rel="nofollow">Zespół Espresso</a>. Każdy szczegół został uchwycony przez filmowców z <a href="https://www.db7studio.pl/pl/" target="_blank" rel="nofollow">DB7 Studio</a>. Nie brakowało chętnych do zabaw oczepinowych, działo się dużo, a szalona zabawa trwała do białego rana. Kasiu i Piotrze wielkie dzięki, że mogłem być Waszym gościem i fotografem. Zapraszam na reportaż z tego dnia, a po więcej zdjęć do strefy klienta. Hasło znajdziecie na mojej wizytówce.'
                    }
                    slug={"dom-weselny-aleksandra-zdjecia-slubne-mszana-dolna"}
                    title={"DOM WESELNY ALEKSANDRA, ZDJĘCIA ŚLUBNE MSZANA DOLNA - KASIA i PIOTR"}
                    tags={"Dom weselny Aleksandra, zdjęcia ślubne Mszana Dolna, fotograf na wesele Mszana"}
                    date={"2 kwietnia 2018"}
                    menuNames={"KASIA i PIOTR"}
                    menuTitle={"DOM WESELNY ALEKSANDRA, ZDJĘCIA ŚLUBNE MSZANA DOLNA"}
                    leadNames={"KINGA i MACIEK"}
                    leadTitle={"DEKORACJA SALI WESELNEJ W STYLU RUSTYKALNYM, OSP ZAWADA"}
                    leadUrl={"/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada"}
                    leadImage={"url(/static/dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.jpg)"}
                />
            </div>
        );
    }
}
