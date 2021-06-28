import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: process.env.staticImagesPath + "dom-weselny-biala-perla-radziemice-reportaz-slubny.jpg"
            }
        ];

        let images = [
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0003.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0005.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0007.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0008.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0009.jpg", height: 566 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0010.jpg", height: 383 }, 
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0012.jpg", height: 383 },          
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0014.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0015.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0017.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0020.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0021.jpg", height: 382 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0025.jpg", height: 763 },            
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0023.jpg", height: 383 }, 
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0026.jpg", height: 763 },      
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0028.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0030.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0032.jpg", height: 382 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0034.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0037.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0041.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0043.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0044.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0060.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0050.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0049.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0055.jpg", height: 382 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0053.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0143.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0059.jpg", height: 763 },          
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0065.jpg", height: 660 },      
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0068.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0071.jpg", height: 806 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0076.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0077.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0078.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0073.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0074.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0081.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0082.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0096.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0098.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0099.jpg", height: 852 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0100.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0102.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0105.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0107.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0108.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0110.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0112.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0114.jpg", height: 763 },         
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0118.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0119.jpg", height: 382 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0124.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0125.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0127.jpg", height: 806 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0128.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0129.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0131.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0135.jpg", height: 527 },          
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0132.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0136.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0141.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0138.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0140.jpg", height: 763 },            
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0142.jpg", height: 762 }          
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Dom Weselny Biała Perła Radziemice, reportaż ślubny"}
                    headDescription={"Dom Weselny Biała Perła, Radziemice, reportaż ślubny Żanety i Sebastiana. Sala ślubna na wymarzone wesele blisko Krakowa. Zapraszam do oglądania."}
                    headKeywords={"Dom Weselny Biała Perła, reportaż ślubny kraków, ślubna sesja zdjęcia, sala ślubna, wesele pod krakowem"}
                    headUrl={"https://99foto.pl/dom-weselny-biala-perla-radziemice-reportaz-slubny/"}
                    entryContentP1={
                        'Ostatni reportaż ślubny na moim blogu opublikowałem w połowie sierpnia ubiegłego roku. Od tego czasu mogliście zobaczyć kilka sesji plenerowych. Chciałem w ten sposób uciec od trendów panujących na grupach fotograficznych pokazujących śluby w pryzmacie pandemii - fenomen masek, czy tortów zamkniętych w lodówkach prywatnych mieszkań nigdy do mnie nie przemawiał. Fotografując śluby zawsze skupiam się na ludziach, emocjach, pięknych detalach i ciekawych do pokazania miejscach. Fotografia ślubna musi nieść ze sobą dawkę emocji, które będą wspominane przez całe życie. Reportaż ślubny musi to być natomiast spójne opowiadanie, które przekaże historie Pary Młodej zarówno dzieciom, jak i wnukom, bliskim i dalszym znajomym podczas wspólnych spotkań. Piękno tego jedynego dnia, momenty wzruszenia, uśmiechy Nowożeńców, radość i zabawa zaproszonych gości, tego nie da się opowiedzieć to trzeba zobaczyć najlepiej na zdjęciach.'
                    }
                    entryContentP2={
                        'Czwartkowy reportaż rozpoczęliśmy od przygotowań Żanety i Sebastiana. Od początku towarzyszył mi Szymon z <a href="https://www.facebook.com/cinebury" target="_blank" rel="nofollow">Cinebury</a>, z którym już wcześniej miałem przyjemność pracować. Świadek Mateusz jak zwykle punktualny przypalił kubańskie cygaro, a druhny, razem z Mamą i siostrami pomogły Żanecie w ubieraniu sukni i zadbały, by wszystkie dodatki znalazły się na właściwym miejscu. Błogosławieństwo, sakramentalne TAK w <a href="https://diecezja.kielce.pl/parafie/radziemice-sw-stanislawa-b-m" target="_blank" rel="nofollow">Kościele św. Stanisława biskupa i męczennika</a>, wspólne zdjęcie grupowe i chill w <a href="https://dworekbialaperla.pl/" target="_blank" rel="nofollow">Domu Weselnym Biała Perła w Radziemicach</a>. <a href="https://www.facebook.com/profile.php?id=100046824468125" target="_blank" rel="nofollow">Zespół Muzyczny Cosmo</a> przyjechał do nas z Łowicza, przywiózł nowe spojrzenie na zabawy weselne i weselne szlagiery znane już wszystkim doskonale. Dziękuję za zaufanie i świetne chwile, które mogłem razem z Wami dzielić. Spotkamy się jeszcze na sesji plenerowej i już wiem, że będzie to kolejny sukces. Serdecznie zapraszam na zdjęcia i życzę miłego oglądania.'
                    }
                    slug={"dom-weselny-biala-perla-radziemice-reportaz-slubny"}
                    title={"DOM WESELNY BIAŁA PERŁA RADZIEMICE, REPORTAŻ ŚLUBNY - ŻANETA i SEBASTIAN"}
                    tags={"Dom Weselny Biała Perła, reportaż ślubny kraków, ślubna sesja zdjęcia, sala ślubna, wesele pod krakowem"}
                    date={"8 czerwca 2021"}
                    menuNames={"ŻANETA i SEBASTIAN"}
                    menuTitle={"DOM WESELNY BIAŁA PERŁA RADZIEMICE, REPORTAŻ ŚLUBNY"}
                    leadNames={"ANNA i PAWEŁ"}
                    leadTitle={"PAŁAC GOETZ MIEJSCE NA WESELE i PLENER ŚLUBNY MARZEŃ"}
                    leadUrl={"/palac-goetz-wesele-plener-slubny"}
                    leadImage={"url(" + process.env.staticImagesPath + "sesja_slubna_palac_goetza.jpg)"}
                />
            </div>
        );
    }
}
