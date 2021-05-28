import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: process.env.staticImagesPath + "patrycja_i_michal_sesja_narzeczenska_pieskowa_skala_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0002.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0004.jpg", height: 851 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0006.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0007.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0008.jpg", height: 851 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0012.jpg", height: 852 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0013.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0014.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0015.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0018.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0020.jpg", height: 851 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0021.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0022.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0024.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0025.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0027.jpg", height: 851 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0026.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0028.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sesja narzeczeńska Pieskowa Skała"}
                    headDescription={"Trochę deszczu, trochę gradu i przebłyski słońca - taka pogoda nie zaskoczyła Patrycję i Michała podczas ich sesji narzeczeńskiej w Pieskowej Skale."}
                    headKeywords={"sesja narzeczeńska pieskowa skała,plener ślubny w ojcowie"}
                    headUrl={"https://99foto.pl/patrycja-i-michal-sesja-narzeczenska-pieskowa-skala/"}
                    entryContentP1={
                        "Czasem trzeba wyjść ze strefy komfortu i nawet, gdy na niebie pojawią się chmury, twoja pogoda mówi, że będzie na pewno padał deszcz, a może nawet grad &#8211; należy twardo realizować plan. Tym razem plan ten to sesja narzeczeńska Patrycji i Michała w Pieskowej Skale. Turyści pochowali się przed deszczem, natomiast my przeszliśmy szybki kurs pozowania."
                    }
                    entryContentP2={
                        "Zamek w Pieskowej Skale jest remontowany i myślę, że kiedy remont się skończy będzie to niesamowite miejsce na plenery ślubne i narzeczeńskie w okolicach Krakowa &#8211; to tylko 28 kilometrów. Ślub Patrycji i Michała odbędzie się 15 sierpnia, ale już teraz serdecznie zapraszam na relację z tego wydarzenia, która pojawi się na moim blogu już wkrótce. Tymczasem miłego oglądania."
                    }
                    slug={"patrycja-i-michal-sesja-narzeczenska-pieskowa-skala"}
                    title={"SESJA NARZECZEŃSKA PIESKOWA SKAŁA - PATRYCJA i MICHAŁ"}
                    tags={"sesja narzeczeńska pieskowa skała,plener ślubny w ojcowie"}
                    date={"20 lipca 2015"}
                    menuNames={"PATRYCJA i MICHAŁ"}
                    menuTitle={"SESJA NARZECZEŃSKA PIESKOWA SKAŁA"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={"url(/static/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg)"}
                />
            </div>
        );
    }
}
