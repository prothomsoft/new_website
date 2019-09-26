import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/impreza_smartow.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0001.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0002.jpg", height: 566 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0006.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0004.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0009.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0005.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0007.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0008.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0010.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0011.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0013.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0015.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0016.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0018.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0019.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0020.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0021.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0024.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0025.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0026.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0027.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0028.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0029.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0030.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0032.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0034.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0035.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0036.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0037.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0038.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0039.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0040.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0041.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0042.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0044.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0045.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0047.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0048.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0049.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0050.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0046.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/impreza_smartow_0051.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Fotograf na event firmowy Kraków, impreza plenerowa Chochołowy Dwór"}
                    headDescription={
                        "Event firmowy w Krakowie. Rodzinny klimat, niezliczona ilość atrakcji i blisko dwieście osób, pracowników firmy SmartRecruiters z dzieciakami. Serdecznie zapraszam na zdjęcia."
                    }
                    headKeywords={"Fotograf na event firmowy Kraków, impreza plenerowa firmowa Chochołowy Dwór"}
                    headUrl={"https://99foto.pl/fotograf_na_event_firmowy_krakow/"}
                    entryContentP1={
                        "Event firmowy w Krakowie. Turniej piłkarzyków i ping ponga rozegrany z gośćmi z San Francisco. Kilka zdjęć z imprezy firmowej Smartów. Zapraszam i życzę miłego oglądania."
                    }
                    entryContentP2={""}
                    slug={"fotograf_na_event_firmowy_krakow"}
                    title={"FIRMOWE SPOTKANIE SMARTÓW - TURNIEJ PIŁKARZYKÓW"}
                    tags={"Fotograf na event firmowy Kraków, turniej piłkarzyków w firmie"}
                    date={"5 września 2019"}
                    menuNames={"FIRMA SMARTRECRUITERS"}
                    menuTitle={"FIRMOWE SPOTKANIE SMARTÓW - TURNIEJ PIŁKARZYKÓW"}
                    leadNames={"FIRMA SMARTRECRUITERS"}
                    leadTitle={"FOTOGRAF NA EVENT FIRMOWY KRAKÓW, IMPREZA PLENEROWA CHOCHOŁOWY DWÓR"}
                    leadUrl={"/fotograf-na-event-firmowy-krakow"}
                    leadImage={"url(/static/fotograf_na_event_firmowy_krakow.jpg)"}
                />
            </div>
        );
    }
}
