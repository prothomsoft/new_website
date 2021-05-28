import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: process.env.staticImagesPath + "sala-weselna-folwark-zalesie-reportaz-slubny-wieliczka-start.jpg"
            }
        ];

        let images = [
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0008.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0011.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0015.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0016.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0019.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0020.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0021.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0024.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0027.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0033.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0035.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0036.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0040.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0049.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0050.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0052.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0054.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0058.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0067.jpg", height: 806 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0071.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0077.jpg", height: 806 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0080.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0083.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0084.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0088.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0090.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0091.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0094.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0097.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0099.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0100.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0103.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0105.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0109.jpg", height: 806 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0112.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0113.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0116.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0117.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0118.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0119.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0121.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0125.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0127.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0128.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0130.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0134.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0138.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0140.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0143.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0144.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0145.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0146.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0147.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0148.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0149.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0150.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0151.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0152.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0153.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0154.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0155.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0156.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0157.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0158.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0159.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0161.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0160.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0162.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0163.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0164.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0165.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0166.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0167.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0168.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0169.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0170.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0171.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0172.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0173.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0174.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0175.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0176.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0177.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0178.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0179.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0180.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/folwark_zalesie_reportaz_slubny_0181.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sala weselna Folwark Zalesie, Reportaż ślubny Wieliczka"}
                    headDescription={
                        "Sala weselna Folwark Zalesie, Reportaż ślubny Wieliczka. Wspaniali goście weselni i zakochani w sobie od bardzo dawna Renata i Michał. Serdecznie zapraszam na reportaż z ich najważniejszego dnia. Miłego oglądania."
                    }
                    headKeywords={"Sala weselna Folwark Zalesie, Reportaż ślubny Wieliczka"}
                    headUrl={"https://99foto.pl/sala-weselna-folwark-zalesie-reportaz-slubny-wieliczka/"}
                    entryContentP1={
                        'Słoneczny weekend, piękna pogoda i książkowy wręcz scenariusz ślubu. Dzień zaplanowany w najdrobniejszych szczegółach, pełny emocji, wartych odwiedzenia miejsc i przeżytych chwil. Sobota, która rozpoczęła się dla mnie w <a href="https://www.facebook.com/Galeria-Fryzur-Kamila-Filipowicz-813741448680703/" target="_blank" rel="nofollow">Salonie Fryzjerskim Galeria Fryzur</a> w Wieliczce, gdzie włosy Renaty układała Kamila Filipowicz. Dziewczyny znały się długo więc uśmiechów nie brakowało, a ja w salonie mogłem rozstawiać swoje lampy błyskowe do woli. Gdy fryzura była gotowa okazało się, że wystarczy przejść przez ulicę, by znaleźć się w domu rodzinnym Renaty. Tam makijaż wykonała <a href="https://www.facebook.com/MonikaUrbanikMakeUp/" target="_blank" rel="nofollow">Monika Urbanik z MakeUp Art</a>. Planowo o godzine 12:15 wyruszyłem na przygotowania do Michała, który znalazł swój wyjątkowy czas i muchę dopinał w pięknym miejscu, mianowicie w <a href="https://www.folwarkzalesie.pl/" target="_blank" rel="nofollow">Folwarku Zalesie.</a> Godzinkę później już z Mateuszem i Kasią z <a href="https://www.blinkfilm.pl/" target="_blank" rel="nofollow">Blink Film</a> uwiecznialiśmy przygotowania Panny Młodej. Chwila oczekiwania na Michała, pełne niespodzianek błogosławieństwo, z przejęciem pałeczki przez kolejnych nowożeńców i wyruszyliśmy do <a href="https://www.wieliczkaklemens.pl/" target="_blank" rel="nofollow">Kościoła Świętego Klemensa</a> w Wieliczce. W kościele tym fotografowałem drugi raz i bardzo lubię to miejsce. Kilka ważnych słów księdza, kwartet smyczkowy na chórze i wreszcie, wypowiedziane z uśmiechem na ustach sakramentalne TAK. Zdjęcie grupowe zrobiliśmy w specjalnym miejscu i będzie to świetna pamiątka na długie lata.'
                    }
                    entryContentP2={
                        'Wracając jednak do sali weselnej, przed którą rodzice przywitali Parę Młodą chlebem i solą. <a href="https://www.folwarkzalesie.pl/" target="_blank" rel="nofollow">Folwark Zalesie</a> pozwolił nam wejść w całkiem inny świat z panoramą na całe Beskidy, piękną Babią Górą, Zalewem Dobczyckim i Tatrami w tle. Wspaniałe miejsce na przyjęcie weselne w okolicach Krakowa. Renata i Michał otworzyli parkiet pierwszym tańcem i impreza ruszyła. <a href="https://decolt.pl/" target="_blank" rel="nofollow">Zespół muzyczny Decolt</a> zaskakiwał, grając mega szeroki wachlarz utworów. Oczywiście nie zabrakło konkursów, przepysznego tortu weselnego, fotobudki, pociągu i zabaw oczepinowych. Fotografować można było również z balkonu, więc tym razem udało się pokazać znacznie więcej. Super dzień w jeszcze lepszym towarzystwie. Renato i Michale dziękuję, za zaufanie i możliwość sfotografowania blisko dwustu gości weselnych. Zapraszam na reportaż ślubny z tego dnia, a po więcej zdjęć do strefy klienta z hasłem z mojej wizytówki. Życzę miłego oglądania.'
                    }
                    slug={"sala-weselna-folwark-zalesie-reportaz-slubny-wieliczka"}
                    title={"SALA WESELNA FOLWARK ZALESIE, REPORTAŻ ŚLUBNY WIELICZKA - RENATA i MICHAŁ"}
                    tags={"Sala weselna Folwark Zalesie, Reportaż ślubny Wieliczka"}
                    date={"12 maja 2018"}
                    menuNames={"RENATA i MICHAŁ"}
                    menuTitle={"SALA WESELNA FOLWARK ZALESIE, REPORTAŻ ŚLUBNY WIELICZKA"}
                    leadNames={"MAŁGORZATA I RAFAŁ"}
                    leadTitle={"PLENER ŚLUBNY SŁOWACJA, ŁOMNICKI STAW"}
                    leadUrl={"/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso"}
                    leadImage={"url(/static/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.jpg)"}
                />
            </div>
        );
    }
}
