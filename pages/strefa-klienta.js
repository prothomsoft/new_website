import Singlepage from "../components/singlepage";

export default class ClientPageComponent extends React.Component {
    render() {
        let clients = [
            {
                image1: "plener_slubny_ojcow.jpg",
                url1: "emiliadaniel",
                title1: "DOM WESELNY POD KASZTANAMI IGOŁOMIA<br/>EMILIA i DANIEL",

                image2: "kosciol_sw_jozefa_krakow_podgorze.jpg",
                url2: "agnieszkamateusz",
                title2: "KOŚCIÓŁ ŚWIĘTEGO JÓZEFA W KRAKOWIE<br/>AGNIESZKA i MATEUSZ",

                image3: "hotel_zameczek_ksiaz_wielki.jpg",
                url3: "katarzynapawel",
                title3: "HOTEL ZAMECZEK KSIĄŻ WIELKI<br/>KATARZYNA i PAWEŁ"
            },

            {
                image1: "slub_cywilny_hotel_junior_skotnicka.jpg",
                url1: "nataliakrzysztof",
                title1: "SALA BANKIETOWA HOTEL JUNIOR<br/>NATALIA i KRZYSZTOF",

                image2: "akacjowy_dwor_krakow.jpg",
                url2: "dominikaandrzej",
                title2: "DOM WESELNY AKACJOWY DWÓR KRAKÓW<br/>DOMINIKA i ANDRZEJ",

                image3: "fotograf_slubny_mielec.jpg",
                url3: "marlenaadam",
                title3: "SALA WESELNA ASTORIA MIELEC<br/>MARLENA i ADAM"
            },

            {
                image1: "zdjecia_slubne_wadowice_1.jpg",
                url1: "beatatobiasz",
                title1: "SALA WESELNA KARPIK W ZATORZE<br/>BEATA i TOBIASZ",

                image2: "sesja_narzeczenska_zakrzowek.jpg",
                url2: "ewelinajakub",
                title2: "SESJA NARZECZEŃSKA ZAKRZÓWEK<br/>EWELINA i JAKUB",

                image3: "karolinka_bystra_podhalanska.jpg",
                url3: "edytarobert",
                title3: "KAROLINKA BYSTRA PODHALAŃSKA<br/>EDYTA i ROBERT"
            },

            {
                image1: "sesja_narzeczenska_klasztor_w_tyncu.jpg",
                url1: "teresaandrzej",
                title1: "SESJA NARZECZEŃSKA W TYŃCU<br/>TERESA i ANDRZEJ",

                image2: "ninja_style.jpg",
                url2: "edytadawid",
                title2: "SALA WESELNA GOŚCINIEC TENCZYN<br/>EDYTA i DAWID",

                image3: "bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg",
                url3: "annapiotr",
                title3: "SALA BANKIETOWA HOTEL JUNIOR<br/>ANNA i PIOTR"
            },

            {
                image1: "fotograf_slubny_kielce.jpg",
                url1: "annamarcin",
                title1: "SALA BALOWA SZAFRANOWY DWÓR STRAWCZYNEK<br/>ANNA i MARCIN",

                image2: "pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg",
                url2: "natalialukasz",
                title2: "DOM WESELNY ARKADIA CZASŁAW<br/>NATALIA i ŁUKASZ",

                image3: "fotograf_slubny_zlotniki.jpg",
                url3: "magdalenagrzegorz",
                title3: "REPORTAŻ ŚLUBNY ZŁOTNIKI<br/>MAGDALENA i GRZEGORZ"
            },

            {
                image1: "hotel-junior-skotnicka.jpg",
                url1: "kingapawel",
                title1: "HOTEL JUNIOR SKOTNIKI<br/>KINGA i PAWEŁ",

                image2: "magdalena_lukasz_myslenice.jpg",
                url2: "magdalukasz",
                title2: "REPORTAŻ ŚLUBNY MYŚLENICE<br/>MAGDALENA i ŁUKASZ",

                image3: "fotograf_slubny_pallatia_zielonki.jpg",
                url3: "kamilamateusz",
                title3: "DOM WESELNY PALLATIA ZIELONKI<br/>KAMILA i MATEUSZ"
            }
        ];

        return (
            <div>
                <Singlepage
                    clients={clients}
                    headTitle={"Strefa klienta"}
                    headDescription={"Galeria zdjęć zabezpieczona hasłem. Wasze historie ślubne i reportaże. Dostęp tylko dla Was."}
                    headKeywords={"strefa klienta, historie ślubne"}
                    headUrl={"https://99foto.pl/strefa-klienta/"}
                    componentContentName={"client"}
                    backgroundImage={"url(/static/sesja_zdjeciowa_dwor_tomaszowice_krakow_start.jpg)"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"SESJA ZDJĘCIOWA DWÓR TOMASZOWICE, OPERA, KAZIMIERZ"}
                    leadUrl={"/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz"}
                    leadImage={"url(/static/sesja_zdjeciowa_dwor_tomaszowice_krakow_start.jpg)"}
                />
            </div>
        );
    }
}
