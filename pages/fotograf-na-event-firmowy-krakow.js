import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/fotograf_na_event_firmowy_krakow.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0001.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0002.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0003.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0006.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0007.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0008.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0009.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0010.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0011.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0012.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0013.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0014.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0015.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0017.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0019.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0022.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0025.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0027.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0028.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0029.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0030.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0032.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0033.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0034.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0035.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0036.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0038.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0039.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0041.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0042.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0044.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0045.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0046.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0047.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0048.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0049.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0051.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0050.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0052.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0053.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0054.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0055.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0057.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0058.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0059.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0060.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0061.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0062.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0063.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0065.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0064.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0066.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0067.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0069.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0068.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0070.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0071.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0072.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0073.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0074.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0075.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/fotograf_na_event_firmowy_krakow_0056.jpg", height: 382 }
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
                    headUrl={"https://99foto.pl/fotograf-na-event-firmowy-krakow/"}
                    entryContentP1={
                        "Event firmowy w Krakowie. Blisko dwieście osób pracownicy z rodzinami i ich spotkanie w środku lata. Wymarzona pogoda i miejsce pełne atrakcji dla dużych i małych. To już trzeci raz jak miałem przyjemność zatrzymywać rodzinne chwile podczas imprezy firmowej w Smartach. Grupówki gdzieś tam wiszą na lodówce. Zapraszam na zdjęcia i życzę miłego oglądania."
                    }
                    entryContentP2={""}
                    slug={"fotograf-na-event-firmowy-krakow"}
                    title={"FOTOGRAF NA EVENT FIRMOWY KRAKÓW, IMPREZA PLENEROWA CHOCHOŁOWY DWÓR"}
                    tags={"Fotograf na event firmowy Kraków, impreza plenerowa firmowa Chochołowy Dwór"}
                    date={"14 grudnia 2018"}
                    menuNames={"FIRMA SMARTRECRUITERS"}
                    menuTitle={"FOTOGRAF NA EVENT FIRMOWY KRAKÓW, IMPREZA PLENEROWA CHOCHOŁOWY DWÓR"}
                    leadNames={"FIRMA SMARTRECRUITERS"}
                    leadTitle={"WIGILA FIRMOWA i FOTOGRAF NA WIGILIĘ FIRMOWĄ W KRAKOWIE"}
                    leadUrl={"/fotograf-na-wigilie-firmowa-w-krakowie"}
                    leadImage={"url(/static/wigilia_smartrecruiters.jpg)"}
                />
            </div>
        );
    }
}
