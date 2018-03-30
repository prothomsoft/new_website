import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sesja_zdjeciowa_dwor_tomaszowice_krakow_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0002.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0001.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0003.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0004.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0005.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0016.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0007.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0008.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0009.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0011.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0010.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0012.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0013.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0014.jpg", height: 851 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0015.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0006.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0028.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0017.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0018.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0019.jpg", height: 806 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0020.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0021.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0023.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0022.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0024.jpg", height: 806 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0025.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0026.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0027.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0029.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0030.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0031.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sesja zdjęciowa Dwór Tomaszowice, Opera Krakowska, Kazimierz"}
                    headDescription={"Serdecznie zapraszam na ostatni w tym roku jesienny i krakowski plener Karoliny i Bartka. Dwór Tomaszowice, Opera Krakowska i zakamarki Kazimierza."}
                    headKeywords={"sesja zdjęciowa dwór tomaszowice, plener ślubny kazimierz kraków"}
                    headUrl={"http://99foto.pl/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz/"}
                    entryContentP1={
                        "Dzisiaj zapraszam na ostatni w tym roku jesienny krakowski plener Karoliny i Bartka. Do zrealizowania planu A, który zakładał, że wybieramy się do Zakopanego i spacerujemy do Morskiego Oka, zabrakło nam dosłownie jednego dnia. Akurat w sobotę, początek tego wolnego weekendu, w którym mieliśmy się wybrać w góry gęsta mgła przysłoniła świat i to nie tylko w Krakowie, wszędzie."
                    }
                    entryContentP2={
                        "Pozostał więc plan B i sprawdzone krakowskie miejsca gwarantujące świetne zdjęcia podczas jesiennej aury. Mówię tutaj o Dworze w Tomaszowicach, który zachwyca swoim angielskim stylem i sercu Krakowa, czyli Kazimierzu. Oglądając zdjęcia zauważycie, że Karolina i Bartek to świetni modele. Niektóre pozy, które sami zaproponowali nadały tej sesji wyjątkowego charakteru. Bardzo miło spędziliśmy czas w sobotnie przedpołudnie i bardzo chce Wam pokazać tą sesję zdjęciową bo warto wrócić do tych ostatnich promieni jesiennego słońca. Miłego oglądania. "
                    }
                    slug={"sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz"}
                    title={"SESJA ZDJĘCIOWA DWÓR TOMASZOWICE, OPERA, KAZIMIERZ - KAROLINA i BARTEK"}
                    tags={"SESJA ZDJĘCIOWA DWÓR TOMASZOWICE, OPERA, KAZIMIERZ"}
                    date={"13 LISTOPADA 2017"}
                    menuNames={"KAROLINA i BARTEK"}
                    menuTitle={"SESJA ZDJĘCIOWA DWÓR TOMASZOWICE, OPERA, KAZIMIERZ"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={"url(/static/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg)"}
                />
            </div>
        );
    }
}
