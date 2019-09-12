import Singlepage from "../components/singlepage";

export default class ClientPageComponent extends React.Component {
    render() {
        let clients = [
            {
                image1: "karolinka_bystra_podhalanska.jpg",
                url1: "edytarobert",
                title1: "KAROLINKA BYSTRA PODHALAŃSKA<br/>EDYTA I ROBERT",

                image2: "hotel_zameczek_ksiaz_wielki.jpg",
                url2: "katarzynapawel",
                title2: "HOTEL ZAMECZEK KSIĄŻ WIELKI<br/>KATARZYNA i PAWEŁ",

                image3: "fotograf_slubny_mielec.jpg",
                url3: "marlenaadam",
                title3: "SALA WESELNA ASTORIA MIELEC<br/>MARLENA i ADAM"
            },

            {
                image1: "fotograf_slubny_kielce.jpg",
                url1: "annamarcin",
                title1: "SALA BALOWA SZAFRANOWY DWÓR STRAWCZYNEK<br/>ANNA i MARCIN",

                image2: "kosciol_sw_jozefa_krakow_podgorze.jpg",
                url2: "agnieszkamateusz",
                title2: "KOŚCIÓŁ ŚWIĘTEGO JÓZEFA W KRAKOWIE<br/>AGNIESZKA I MATEUSZ",

                image3: "sesja_narzeczenska_klasztor_w_tyncu.jpg",
                url3: "teresaandrzej",
                title3: "SESJA NARZECZEŃSKA W TYŃCU<br/>TERESA i ANDRZEJ"
            },

            {
                image1: "sala_weselna_biala_wilczyca_kocmyrzow.jpg",
                url1: "monikamartin",
                title1: "SALA WESELNA BIAŁA WILCZYCA<br/>MONIKA i MARTIN",

                image2: "sesja_narzeczenska_zakrzowek.jpg",
                url2: "ewelinajakub",
                title2: "SESJA NARZECZEŃSKA ZAKRZÓWEK<br/>EWELINA i JAKUB",

                image3: "sesja_narzeczenska_stara_zajezdnia.jpg",
                url3: "nataliabenjamin",
                title3: "SESJA NARZECZEŃSKA KRAKÓW<br/>NATALIA i BENJAMIN"
            },

            {
                image1: "restauracja_karolinka_bystra_podhalanska.jpg",
                url1: "marlenamaciej",
                title1: "KAROLINKA BYSTRA PODHALAŃSKA<br/>MARLENA i MACIEJ",

                image2: "ninja_style.jpg",
                url2: "edytadawid",
                title2: "SALA WESELNA GOŚCINIEC TENCZYN<br/>EDYTA i DAWID",

                image3: "bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg",
                url3: "annapiotr",
                title3: "SALA BANKIETOWA HOTEL JUNIOR<br/>ANNA i PIOTR"
            },

            {
                image1: "hotel-junior-skotnicka.jpg",
                url1: "kingapawel",
                title1: "HOTEL JUNIOR SKOTNIKI<br/>KINGA i PAWEŁ",

                image2: "pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg",
                url2: "natalialukasz",
                title2: "DOM WESELNY ARKADIA CZASŁAW<br/>NATALIA i ŁUKASZ",

                image3: "fotograf_slubny_zlotniki.jpg",
                url3: "magdalenagrzegorz",
                title3: "REPORTAŻ ŚLUBNY ZŁOTNIKI<br/>MAGDALENA i GRZEGORZ"
            },

            {
                image1: "tiffany_wola_filipowska.jpg",
                url1: "nataliadominik",
                title1: "TIFFANY WOLA FILIPOWSKA<br/>NATALIA i DOMINIK",

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
