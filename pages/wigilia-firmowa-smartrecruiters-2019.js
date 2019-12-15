import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/wigilia_smart_2019.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0001.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0002.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0003.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0004.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0005.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0007.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0008.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0010.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0012.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0014.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0016.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0018.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0020.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0022.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0024.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0026.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0027.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0030.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0032.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0034.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0036.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0038.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0040.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0041.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0042.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0044.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0046.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0047.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0048.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0049.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0050.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0052.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0054.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0056.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0057.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0058.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0060.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0062.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0063.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0064.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0065.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0066.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0067.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0068.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0071.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0072.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0073.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0074.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0075.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0076.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0077.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0078.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0079.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0080.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0081.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0082.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0083.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0084.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0085.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0086.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0087.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0088.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0089.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0090.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0069.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0091.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0092.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0093.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0094.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0095.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0096.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0097.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0061.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0098.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0099.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0100.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0101.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0102.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0103.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0104.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0105.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0070.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0106.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0107.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0108.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0109.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0110.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0051.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0111.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0055.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/12/wigilia_smart_2019_0112.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Fotograf na event firmowy Kraków, Wigilia Firmowa w SmartRecruiters"}
                    headDescription={
                        "Wigilia firmowa w Krakowie. Firmowe spotkanie rodzinne w SmartRecruiters. Prezenty od Świętego Mikołaja, czekoladowa fontanna, więcej niż dwanaście potraw wigilijnych i konkursy na najbardziej cool świąteczny sweter."
                    }
                    headKeywords={"Fotograf na event firmowy Kraków, Wigilia Firmowa w SmartRecruiters"}
                    headUrl={"https://99foto.pl/wigilia-firmowa-smartrecruiters-2019/"}
                    entryContentP1={
                        "Wigilia firmowa w Krakowie. Firmowe spotkanie rodzinne w SmartRecruiters. Prezenty od Świętego Mikołaja, czekoladowa fontanna, więcej niż dwanaście potraw wigilijnych i konkursy na najbardziej cool świąteczny sweter. Serdecznie zapraszam na zdjęcia i życzę WESOŁYCH ŚWIĄT i miłego oglądania."
                    }
                    entryContentP2={""}
                    slug={"wigilia-firmowa-smartrecruiters-2019"}
                    title={"FIRMA SMARTRECRUITERS - WIGILIA FIRMOWA"}
                    tags={"Fotograf na event firmowy Kraków, Wigilia Firmowa w SmartRecruiters"}
                    date={"13 grudnia 2019"}
                    menuNames={"FIRMA SMARTRECRUITERS"}
                    menuTitle={"WIGILIA FIRMOWA"}
                    leadNames={"SMARTRECRUITERS"}
                    leadTitle={"FIRMOWE SPOTKANIE SMARTÓW - REVERSE RECRUITMENT"}
                    leadUrl={"/reverse-recruiting-smartow"}
                    leadImage={"url(/static/reverse_recruiting_smart.jpg)"}
                />
            </div>
        );
    }
}
