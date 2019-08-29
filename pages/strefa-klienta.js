import Singlepage from "../components/singlepage";

export default class ClientPageComponent extends React.Component {
    render() {
        let clients = [
            {
                image1: "sesja_narzeczenska_klasztor_w_tyncu.jpg",
                url1: "teresaandrzej",
                title1: "SESJA NARZECZEŃSKA W TYŃCU<br/>TERESA i ANDRZEJ",

                image2: "fotograf_slubny_kielce.jpg",
                url2: "annamarcin",
                title2: "SALA BALOWA SZAFRANOWY DWÓR STRAWCZYNEK<br/>ANNA i MARCIN",

                image3: "sesja_slubna_popradzki_staw.jpg",
                url3: "adelaszymon",
                title3: "SALA WESELNA IMPRESJA JORDANÓW<br/>ADELA i SZYMON"
            },

            {
                image1: "sala_weselna_biala_wilczyca_kocmyrzow.jpg",
                url1: "monikamartin",
                title1: "SALA WESELNA BIAŁA WILCZYCA<br/>MONIKA i MARTIN",

                image2: "ninja_style.jpg",
                url2: "edytadawid",
                title2: "SALA WESELNA GOŚCINIEC TENCZYN<br/>EDYTA i DAWID",

                image3: "bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg",
                url3: "annapiotr",
                title3: "SALA BANKIETOWA HOTEL JUNIOR<br/>ANNA i PIOTR"
            },

            {
                image1: "restauracja_karolinka_bystra_podhalanska.jpg",
                url1: "marlenamaciej",
                title1: "KAROLINKA BYSTRA PODHALAŃSKA<br/>MARLENA i MACIEJ",

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

                image2: "zielone_wzgorze_koniusza.jpg",
                url2: "karolamati",
                title2: "ZIELONE WZGÓRZE KONIUSZA<br/>KAROLINA i MATEUSZ",

                image3: "fotograf_slubny_pallatia_zielonki.jpg",
                url3: "kamilamateusz",
                title3: "DOM WESELNY PALLATIA ZIELONKI<br/>KAMILA i MATEUSZ"
            },

            {
                image1: "tiffany_wola_filipowska.jpg",
                url1: "nataliadominik",
                title1: "TIFFANY WOLA FILIPOWSKA<br/>NATALIA i DOMINIK",

                image2: "sesja_narzeczenska_krakow_kazimierz.jpg",
                url2: "marlenaadam",
                title2: "MIEJSKA SESJA NARZECZEŃSKA<br/>MARLENA i ADAM",

                image3: "sala_weselna_babie_lato_gdow_1.jpg",
                url3: "paulinakamil",
                title3: "SALA WESELNA BABIE LATO GDÓW<br/>PAULINA i KAMIL"
            },

            {
                image1: "fotograf_slubny_krzeszowice_start.jpg",
                url1: "olagrzegorz",
                title1: "CZTERY PORY ROKU ALWERNIA<br/>ALEKSANDRA i GRZEGORZ",

                image2: "magdalena_lukasz_myslenice.jpg",
                url2: "magdalukasz",
                title2: "REPORTAŻ ŚLUBNY MYŚLENICE<br/>MAGDALENA i ŁUKASZ",

                image3: "sala_weselna_alexandra_mszana_dolna.jpg",
                url3: "paulinagrzegorz",
                title3: "ALEXANDRA MSZANA DOLNA<br/>PAULINA i GRZEGORZ"
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
