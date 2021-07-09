import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: process.env.staticImagesPath + "summer_party_cornerstone_2021_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0005.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0006.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0008.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0010.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0011.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0013.jpg", height: 850 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0016.jpg", height: 806 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0019.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0022.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0023.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0027.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0029.jpg", height: 566 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0031.jpg", height: 805 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0032.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0033.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0034.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0039.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0042.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0044.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0046.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0047.jpg", height: 806 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0050.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0052.jpg", height: 850 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0053.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0055.jpg", height: 850 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0056.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0058.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0063.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0075.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0076.jpg", height: 382 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0078.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0080.jpg", height: 805 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0083.jpg", height: 850 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0084.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0085.jpg", height: 566 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0086.jpg", height: 851 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0087.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0088.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0089.jpg", height: 570 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0090.jpg", height: 683 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0091.jpg", height: 1140 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0092.jpg", height: 457 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0093.jpg", height: 1140 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0094.jpg", height: 570 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0095.jpg", height: 1140 },
            { imageSrc: "/static/blog/2021/07/summer_party_cornerstone_0096.jpg", height: 1140 }
            
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Fotograf na event firmowy Kraków, Summer Party w Cornerstone"}
                    headDescription={
                        'Summer Party w Cornerstone w Krakowie. Impreza plenerowa w Dolinie Kluczwody. Niewiarygodnie duża ilość atrakcji i przepysznych rzeczy do spróbowania. Konkursy łucznictwa i siatkówki z medalami i nagrodami, pokazy tańca z ogniem i wiele innych atrakji zaplanowanych przez Anię, Asię i Iwentarium. Zapraszam na zdjęcia.'
                    }
                    headKeywords={"Fotograf na event firmowy Kraków, Summer Party w Cornerstone"}
                    headUrl={"https://99foto.pl/summer-party-cornerstone-2021.js/"}
                    entryContentP1={
                        'Summer Party w Cornerstone w Krakowie. Impreza plenerowa w Dolinie Kluczwody. Niewiarygodnie duża ilość atrakcji i przepysznych rzeczy do spróbowania. Konkursy łucznictwa i siatkówki z medalami i nagrodami, pokazy tańca z ogniem i wiele innych atrakji zaplanowanych przez Anię, Asię i <a href="https://iwentarium.pl/ target="_blank" rel="nofollow">Iwentarium</a>. Zapraszam na zdjęcia i życzę miłego oglądania.'
                    }
                    entryContentP2={""}
                    slug={"summer-party-cornerstone-2021.js"}
                    title={"CORNERSTONE - SUMMER PARTY"}
                    tags={"Fotograf na event firmowy Kraków, Summer Party w Cornerstone"}
                    date={"9 lipca 2021"}
                    menuNames={"CORNERSTONE - SUMMER PARTY"}
                    menuTitle={"AGROTURYSTYKA i SPA DOLINA KLUCZWODY"}
                    leadNames={"FIRMA SABA SOFTWARE"}
                    leadTitle={"WIGILIA FIRMOWA - HOTEL HOLIDAY INN KRAKÓW"}
                    leadUrl={"/wigilia-firmowa-saba-2019"}
                    leadImage={"url(/static/wigilia_saba_start.jpg)"}
                />
            </div>
        );
    }
}
