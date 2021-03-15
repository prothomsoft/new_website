import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/wigilia_smartrecruiters.jpg"
            }
        ];

        let images = [
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0001.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0005.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0015.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0002.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0019.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0003.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0024.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0025.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0026.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0004.jpg", height: 806 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0031.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0034.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0037.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0040.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0042.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0045.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0048.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0050.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0055.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0056.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0059.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0068.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0076.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0079.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0080.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0083.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0090.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0093.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/12/wigilia_firmowa_smartrecruiters_krakow_0021.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Fotograf na wigilię firmową w Krakowie"}
                    headDescription={
                        "Wigilia firmowa w Krakowie. Rodzinny klimat, niezliczona ilość atrakcji i wyróżnienia z okazji pięciolecia działaności firmy SmartRecruiters w Polsce. Serdecznie zapraszam."
                    }
                    headKeywords={"Fotograf na wilgilię firmową w Krakowie, wigilia firmowa"}
                    headUrl={"https://99foto.pl/fotograf-na-wigilie-firmowa-w-krakowie/"}
                    entryContentP1={
                        "Wigilia firmowa w Krakowie i pięciolecie działalności firmy SmartRecruiters w Polsce. Rodzinne spotkanie wigilijne. To już drugi raz jak miałem przyjemność zatrzymywać rodzinne chwile podczas imprezy firmowej. Jak zwykle dużo atrakcji dla najmłodszych i zasłużone wyróżnienia dla najstarszych. Zapraszam na zdjęcia i życzę miłego oglądania."
                    }
                    entryContentP2={""}
                    slug={"fotograf-na-wigilie-firmowa-w-krakowie"}
                    title={"WIGILA FIRMOWA i FOTOGRAF NA WIGILIĘ FIRMOWĄ W KRAKOWIE"}
                    tags={"Fotograf na wigilię firmową w Krakowie, wigilia firmowa"}
                    date={"14 grudnia 2018"}
                    menuNames={"FIRMA SMARTRECRUITERS"}
                    menuTitle={"WIGILA FIRMOWA i FOTOGRAF NA WIGILIĘ FIRMOWĄ W KRAKOWIE"}
                    leadNames={"FIRMA SMARTRECRUITERS"}
                    leadTitle={"IMPREZA RODZINNA STADNINA KONI BOTOJA KORZKIEW"}
                    leadUrl={"/impreza-rodzinna-stadnina-koni-botoja-korzkiew"}
                    leadImage={"url(/static/impreza-rodzinna-stadnina-koni-botoja-korzkiew-start.jpg)"}
                />
            </div>
        );
    }
}
