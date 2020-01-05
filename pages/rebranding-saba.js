import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/rebranding_saba_1.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0001.jpg", height: 768 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0002.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0003.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0004.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0005.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0007.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0008.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0009.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0010.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0011.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0012.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0016.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0017.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0018.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0020.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0021.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0022.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0024.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0025.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0026.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0027.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0029.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0031.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0032.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0033.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0035.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0036.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0038.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0039.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0041.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0042.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0045.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0047.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0046.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0048.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0049.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/saba_rebrand_0050.jpg", height: 382 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Fotograf impreza firmowa Kraków, rebranding SABA SOFTWARE WORK LIKE YOU"}
                    headDescription={
                        "Event firmowy w Krakowie. Rebranding firmy Saba. Świetnie przygotowana impreza firmowa i wiele wspaniałych atrakcji przygotowanych dla pracowników. Serdecznie zapraszam na zdjęcia."
                    }
                    headKeywords={"Fotograf impreza firmowa Kraków, rebranding SABA SOFTWARE WORK LIKE YOU"}
                    headUrl={"https://99foto.pl/rebranding-saba/"}
                    entryContentP1={
                        "Świetnie przygotowana impreza firmowa i wiele wspaniałych atrakcji przygotowanych dla pracowników. Kilka zdjęć z imprezy firmowej SABA. Zapraszam i życzę miłego oglądania."
                    }
                    entryContentP2={""}
                    slug={"rebranding-saba"}
                    title={"FIRMOWE SPOTKANIE FIRMY SABA SOFTWARE - REBRANDING WORK LIKE YOU"}
                    tags={"Fotograf impreza firmowa Kraków, rebranding SABA SOFTWARE WORK LIKE YOU"}
                    date={"26 września 2019"}
                    menuNames={"FIRMA SABA SOFTWARE"}
                    menuTitle={"REBRANDING WORK LIKE YOU"}
                    leadNames={"FIRMA SMARTRECRUITERS"}
                    leadTitle={"WIGILIA FIRMOWA"}
                    leadUrl={"/wigilia-firmowa-smartrecruiters-2019"}
                    leadImage={"url(/static/wigilia_smart_2019.jpg)"}
                />
            </div>
        );
    }
}
