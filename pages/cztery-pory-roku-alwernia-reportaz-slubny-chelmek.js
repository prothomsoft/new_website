import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/cztery-pory-roku-alwernia-reportaz-slubny-chelmek-start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0003.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0005.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0010.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0014.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0016.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0017.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0019.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0023.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0025.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0028.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0030.jpg", height: 806 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0032.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0034.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0036.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0038.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0040.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0041.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0046.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0047.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0048.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0042.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0049.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0050.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0051.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0052.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0054.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0055.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0056.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0057.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0060.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0061.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0062.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0063.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0064.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0065.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0067.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0066.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0068.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0070.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0069.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0071.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0072.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0073.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0074.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0075.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0085.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0077.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0078.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0076.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0080.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0081.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0082.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0083.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0084.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0086.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0087.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0088.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0089.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0090.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0091.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0092.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0093.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0095.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0096.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0097.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0098.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0099.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0094.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0100.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0101.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0102.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0103.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0104.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0105.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0106.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0107.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0109.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0110.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0111.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0112.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0113.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0114.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0115.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0116.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0117.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0118.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0119.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0120.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0121.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0122.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0123.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0124.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0125.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0126.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0127.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0128.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0129.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0130.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0131.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0132.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0133.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0134.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0135.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0136.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0108.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0137.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Cztery Pory Roku Alwernia, Reportaż Ślubny Chełmek"}
                    headDescription={
                        "Alwernia, Restauracja Cztery Pory Roku i sala letnia. Wspaniali goście weselni i zakochani w sobie od bardzo dawno Kasia i Marcin. Serdecznie zapraszam na reportaż z ich najważniejszego dnia. Miłego oglądania."
                    }
                    headKeywords={"Cztery Pory Roku Alwernia, Reportaż Ślubny Chełmek"}
                    headUrl={"https://99foto.pl/cztery-pory-roku-alwernia-reportaz-slubny-chelmek/"}
                    entryContentP1={
                        'Słoneczna kwietniowa sobota, w którą to wybrałem się trochę bardziej na zachód od Krakowa, odwiedzając <a href="https://www.facebook.com/krainapieknoscijoanna" target="_blank" rel="nofollow">Salon Urody Kraina Piękności Joanna</a> w Oświęcimiu. Jak nie trudno zgadnąć nie pojechałem tam na przejażdżkę tylko na przygotowania ślubne Kasi. W przygotowaniach tych pannie młodej towarzyszyły mama i siostra, która układały fryzury i były malowane równocześnie. Marcin przygotowywał się w pokoju hotelowym w pięknej wzorowanej na polskiej architekturze pałacowej <a href="https://alwernia-4poryroku.pl/" target="_blank" rel="nofollow">Restauracji Cztery Pory Roku w Alwernii</a>. Pokój nowożeńców z subtelnie wkomponowaną wanną robił wrażenie. W niecałe 15 minut szelki, marynarka i pozostałe elementy garderoby znalazły się na swoim miejscu. Mnie w tym momencie czekał powrót do Chełmka na przygotowania Kasi. W samą porę prosto z gór przybyli kamerzysta Jacek ze swoją narzeczoną Anią. Okazało się, że zbudowali oni mega pozytywny klimat, a Jacek jak prawdziwa złota rączka, przydał się bardzo do pomocy w niełatwym zadaniu zapinania guzików sukni ślubnej. Pełne emocji błogosławieństwo i udaliśmy się do położonego w bliskiej odległości <a href="https://www.parafianmpchelmek.pl/" target="_blank" rel="nofollow">Kościoła Najświętszej Maryi Panny w Chełmku</a>.'
                    }
                    entryContentP2={
                        'Ksiądz w zakrystii w dosłownie trzy sekundy po wejściu rozbawił dziewczyny momentalnie (fajny skill, też bym tak chciał). Po podpisaniu dokumentów rozpoczęła się ceremonia, podniosłe kazanie i wypowiedziane z uśmiechem na ustach sakramentalne TAK. Pod kościołem para młoda odebrała życzenia od zaproszonych gości i utalanetowanych młodych ludzi, którzy uatrakcyjnili ceremonię pięknym śpiewem chóralnym. O sali weselnej <a href="https://alwernia-4poryroku.pl/" target="_blank" rel="nofollow">Restauracji Cztery Pory Roku w Alwernii</a> już wspominałem, ale nie zaszkodzi napisać kilka słów więcej. Piękne wnętrza, każde z nich inspirowane inną porą roku. Przyjęcie weselne Kasi i Marcina odbyło się pod znakiem Lata. Tradycyjne przywitanie chlebem i solą, pierwszy taniec i kanonada atrakcji. Tomek urodzony wodzirej, który wyciskał maksa nie tylko z siebie, ale i z gości i Paweł mistrz kręcenia DJ-ską konsoletą wspaniale reprezentowali <a href="https://animatorimprez.pl/" target="_blank" rel="nofollow">Grupę Animatorów Imprez</a>. Wymyślali dużo zabaw, posiadali niezliczoną ilość gadżetów i oświetlenie z lampami grilowymi, jedyne w swoim rodzaju. Powierzchnia parkietu mogłaby być spokojnie dwa razy większa, a i tak zostałaby w całości zapełniona przez świetnie bawiących się gości. Na ślubie miałem też okazję po raz kolejny spotkać Marlenę i Dawida już w powiększonym składzie. Ich góralski ślub możecie z łatwością odnaleźć na moim blogu. Kasiu i Marcinie, świetnie zorganizowany ślub, z pięknym ukoronowaniem w postaci wizyty w Watykanie. Dziękuję za zaufanie i możliwość zrobienia dla Was kilku zdjęć. Zapraszam do oglądania, a po więcej do strefy klienta.'
                    }
                    slug={"cztery-pory-roku-alwernia-reportaz-slubny-chelmek"}
                    title={"CZTERY PORY ROKU ALWERNIA, REPORTAŻ ŚLUBNY CHEŁMEK - KASIA i MARCIN"}
                    tags={"Cztery Pory Roku Alwernia, Reportaż Ślubny Chełmek"}
                    date={"21 kwietnia 2018"}
                    menuNames={"KASIA i MARCIN"}
                    menuTitle={"CZTERY PORY ROKU ALWERNIA, REPORTAŻ ŚLUBNY CHEŁMEK"}
                    leadNames={"SANDRA i MACIEK"}
                    leadTitle={"SALA WESELNA VILLA MARINA DĄBROWA GÓRNICZA, ŚLUB NAD JEZIOREM"}
                    leadUrl={"/sala-weselna-villa-marina-dabrowa-gornicza-slub-nad-jeziorem"}
                    leadImage={"url(/static/sala-weselna-villa-marina-dabrowa-gornicza-slub-nad-jeziorem-start.jpg)"}
                />
            </div>
        );
    }
}
