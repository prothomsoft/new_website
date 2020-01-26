import Singlepage from "../components/singlepage";

export default class ClientPageComponent extends React.Component {
    render() {
        let clients = [
            {

                image1: "fotograf_slubny_dobczyce.jpg",
                url1: "ewelinajakub",
                title1: "SALA WESELNA ALEXIA OCHOJNO<br/>EWELINA i JAKUB",

                image2: "dworek_fantazja_skomielna_biala_fotograf.jpg",
                url2: "patrycjakrzysztof",
                title2: "DWOREK FANTAZJA SKOMIELNA BIAŁA<br/>PATRYCJA i KRZYSZTOF",

                image3: "karczma_u_lipy_jordanow.jpg",
                url3: "dominikanorbert",
                title3: "DOM WESELNY PRZYSTAŃ U LIPY JORDANÓW<br/>DOMINIKA i NORBERT"

            },

            {
                image1: "kosciol_sw_jozefa_krakow_podgorze.jpg",
                url1: "agnieszkamateusz",
                title1: "KOŚCIÓŁ ŚWIĘTEGO JÓZEFA W KRAKOWIE<br/>AGNIESZKA i MATEUSZ",

                image2: "slub_zielone_wzgorze_koniusza.jpg",
                url2: "martabartek",
                title2: "SALA WESELNA ZIELONE WZGÓRZA KONIUSZA<br/>MARTA i BARTŁOMIEJ",

                image3: "karolinka_bystra_podhalanska.jpg",
                url3: "edytarobert",
                title3: "KAROLINKA BYSTRA PODHALAŃSKA<br/>EDYTA i ROBERT"
            },

            {
                image1: "przystan_kabanos_spytkowice.jpg",
                url1: "amandajacek",
                title1: "PRZYSTAŃ W KABANOSIE SPYTKOWICE<br/>AMANDA i JACEK",

                image2: "hotel_zameczek_ksiaz_wielki.jpg",
                url2: "katarzynapawel",
                title2: "HOTEL ZAMECZEK KSIĄŻ WIELKI<br/>KATARZYNA i PAWEŁ",

                image3: "sztuczne_ognie_na_weselu.jpg",
                url3: "agnieszkarobert",
                title3: "DOM WESELNY BABIE LATO GDÓW<br/>AGNIESZKA i ROBERT"
            },

            {

                image1: "hotel_junior_zawila.jpg",
                url1: "nataliahubert",
                title1: "DOM WESELNY HOTEL JUNIOR ZAWIŁA<br/>NATALIA i HUBERT",

                image2: "ninja_style.jpg",
                url2: "edytadawid",
                title2: "SALA WESELNA GOŚCINIEC TENCZYN<br/>EDYTA i DAWID",

                image3: "bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg",
                url3: "annapiotr",
                title3: "SALA BANKIETOWA HOTEL JUNIOR<br/>ANNA i PIOTR"
            },

            {
                image1: "akacjowy_dwor_krakow.jpg",
                url1: "dominikaandrzej",
                title1: "DOM WESELNY AKACJOWY DWÓR KRAKÓW<br/>DOMINIKA i ANDRZEJ",

                image2: "pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg",
                url2: "natalialukasz",
                title2: "DOM WESELNY ARKADIA CZASŁAW<br/>NATALIA i ŁUKASZ",

                image3: "fotograf_slubny_zlotniki.jpg",
                url3: "magdalenagrzegorz",
                title3: "REPORTAŻ ŚLUBNY ZŁOTNIKI<br/>MAGDALENA i GRZEGORZ"
            },

            {
                image1: "fotograf_slubny_kielce.jpg",
                url1: "annamarcin",
                title1: "SALA BALOWA SZAFRANOWY DWÓR STRAWCZYNEK<br/>ANNA i MARCIN",

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
