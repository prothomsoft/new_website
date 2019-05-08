import Singlepage from "../components/singlepage";

export default class ClientPageComponent extends React.Component {
    render() {
        let clients = [
            {
                image1: "sala-bankietowa-szafrantu.jpg",
                url1: "karolinakamil",
                title1: "SALA BANKIETOWA SZAFRANTU NIEPOŁOMICE<br/>KAROLINA i KAMIL",

                image2: "dom_weselny_monika_dzialoszyce.jpg",
                url2: "monikadaniel",
                title2: "DOM WESELNY MONIKA DZIAŁOSZYCE<br/>MONIKA i DANIEL",

                image3: "dworek_skawina.jpg",
                url3: "asiabartek",
                title3: "HOTEL DWOREK SKAWIŃSKI<br/>JOANNA i BARTŁOMIEJ"
            },

            {
                image1: "tiffany_wola_filipowska.jpg",
                url1: "nataliadominik",
                title1: "TIFFANY WOLA FILIPOWSKA<br/>NATALIA i DOMINIK",

                image2: "hotel-junior-skotnicka.jpg",
                url2: "kingapawel",
                title2: "HOTEL JUNIOR SKOTNIKI<br/>KINGA i PAWEŁ",

                image3: "pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg",
                url3: "natalialukasz",
                title3: "DOM WESELNY ARKADIA CZASŁAW<br/>NATALIA i ŁUKASZ"
            },

            {
                image1: "slub_zima.jpg",
                url1: "martamichal",
                title1: "GOŚCINIEC NAŁĘŻE JAWOŻE<br/>MARTA i MICHAŁ",

                image2: "zielone_wzgorze_koniusza.jpg",
                url2: "karolamati",
                title2: "ZIELONE WZGÓRZE KONIUSZA<br/>KAROLINA i MATEUSZ",

                image3: "dom_weselny_euforia_myslenice_1.jpg",
                url3: "izaarek",
                title3: "DOM WESELNY EUFORIA MYŚLENICE<br/>IZABELA i ARKADIUSZ"
            },

            {
                image1: "sala_bankietowa_impresja_jordanow.jpg",
                url1: "patrycjastaszek",
                title1: "SALA BANKIETOWA IMPRESJA JORDANÓW<br/>PATRYCJA i STANISŁAW",

                image2: "sala_bankietowa_triana_mogilany.jpg",
                url2: "paulina",
                title2: "SALA BANKIETOWA TRIANA MOGILANY<br/>PAULINA i PAWEŁ",

                image3: "fotograf-slubny-magnolia-budzow.jpg",
                url3: "kingamateusz",
                title3: "RESTAURACJA MAGNOLIA BUDZÓW<br/>KINGA i MATEUSZ"

            },

            {
                image1: "sala_weselna_alexia_ochojno.jpg",
                url1: "joannaszymon",
                title1: "SALA BANKIETOWA ALEXIA OCHOJNO<br/>JOANNA i SZYMON",


                image2: "magdalena_lukasz_myslenice.jpg",
                url2: "magdalukasz",
                title2: "REPORTAŻ ŚLUBNY MYŚLENICE<br/>MAGDALENA i ŁUKASZ",

                image3: "fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice-1.jpg",
                url3: "dajanasylwester",
                title3: "SALA WESELNA ARKADIA WADOWICE<br/>DAJANA i SYLWESTER"
            },

            {
                image1: "fotograf_slubny_krzeszowice_start.jpg",
                url1: "olagrzegorz",
                title1: "CZTERY PORY ROKU ALWERNIA<br/>ALEKSANDRA i GRZEGORZ",

                image2: "sala_weselna_soprano_tarnow.jpg",
                url2: "magdalenalukasz",
                title2: "SALA WESELNA SOPRANO TARNÓW<br/>MAGDALENA i ŁUKASZ",

                image3: "hotel_margerita_krakow_magiczny_wystroj_sali_weselnej_w_krakowie.jpg",
                url3: "nataliapiotr",
                title3: "MAGICZNY WYSTRÓJ SALI HOTEL MARGERITA<br/>NATALIA i PIOTR"
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
