import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/wigilia_saba_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0001.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0003.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0005.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0010.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0011.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0013.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0053.jpg", height: 644 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0016.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0017.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0022.jpg", height: 806 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0024.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0025.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0026.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0030.jpg", height: 806 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0032.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0033.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0035.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0036.jpg", height: 806 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0037.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0038.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0039.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0041.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0042.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0051.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0044.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0046.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0047.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0048.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0049.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0045.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0050.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/12/wigilia_saba_2019_0043.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Fotograf na event firmowy Kraków, Wigilia Firmowa w Saba Software"}
                    headDescription={
                        "Wigilia firmowa w Krakowie. Firmowe spotkanie w Saba Software. Nowojorski klimat, dress code zza oceanu, emocje w kasynie za stołami black jacka i ruletki, saksofonowe popisy i YMCA na parkiecie, konkursy i oczywiście nagrody. Zapraszam na zdjęcia."
                    }
                    headKeywords={"Fotograf na event firmowy Kraków, Wigilia Firmowa w Saba Software"}
                    headUrl={"https://99foto.pl/wigilia-firmowa-saba-2019/"}
                    entryContentP1={
                        "Wigilia firmowa w Krakowie. Firmowe spotkanie w Saba Software. Nowojorski klimat, dress code zza oceanu, emocje w kasynie za stołami black jacka i ruletki, saksofonowe popisy i YMCA na parkiecie, konkursy i oczywiście nagrody. Serdecznie zapraszam na zdjęcia, życzę WESOŁYCH ŚWIĄT i miłego oglądania."
                    }
                    entryContentP2={""}
                    slug={"wigilia-firmowa-saba-2019"}
                    title={"FIRMA SABA SOFTWARE - WIGILIA FIRMOWA"}
                    tags={"Fotograf na event firmowy Kraków, Wigilia Firmowa w Saba Software"}
                    date={"19 grudnia 2019"}
                    menuNames={"FIRMA SABA SOFTWARE"}
                    menuTitle={"WIGILIA FIRMOWA - HOTEL HOLIDAY INN KRAKÓW"}
                    leadNames={"FIRMOWE SPOTKANIE FIRMY SABA SOFTWARE"}
                    leadTitle={"REBRANDING WORK LIKE YOU"}
                    leadUrl={"/rebranding-saba"}
                    leadImage={"url(/static/rebranding_saba_1.jpg)"}
                />
            </div>
        );
    }
}
