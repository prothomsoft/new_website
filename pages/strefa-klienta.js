import Singlepage from "../components/singlepage";

export default class ClientPageComponent extends React.Component {
    render() {
        let clients = [
            {
                image1: "sala_weselna_biala_wilczyca_kocmyrzow.jpg",
                url1: "monikamartin",
                title1: "SALA WESELNA BIAŁA WILCZYCA<br/>MONIKA i MARTIN",

                image2: "chrzest_alicja.jpg",
                url2: "alicja",
                title2: "KOŚCIÓŁ PW. ŚWIĘTEGO JACKA KRAKÓW<br/>CHRZEST ALICJI",

                image3: "restauracja_karolinka_bystra_podhalanska.jpg",
                url3: "marlenamaciej",
                title3: "KAROLINKA BYSTRA PODHALAŃSKA<br/>MARLENA i MACIEJ"
            },

            {
                image1: "dom_weselny_monika_dzialoszyce.jpg",
                url1: "monikadaniel",
                title1: "DOM WESELNY MONIKA DZIAŁOSZYCE<br/>MONIKA i DANIEL",

                image2: "sala-bankietowa-szafrantu.jpg",
                url2: "karolinakamil",
                title2: "SALA BANKIETOWA SZAFRANTU NIEPOŁOMICE<br/>KAROLINA i KAMIL",

                image3: "dom_weselny_amarlis_sienna.jpg",
                url3: "paulinamichal",
                title3: "DOM WESELNY AMARLIS SIENNA<br/>PAULINA i MICHAŁ"
            },

            {
                image1: "hotel-junior-skotnicka.jpg",
                url1: "kingapawel",
                title1: "HOTEL JUNIOR SKOTNIKI<br/>KINGA i PAWEŁ",

                image2: "dworek_fantazja.jpg",
                url2: "karolinamichal",
                title2: "DWOREK FANTAZJA SKOMIELNA BIAŁA<br/>KAROLINA i MICHAŁ",

                image3: "pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg",
                url3: "natalialukasz",
                title3: "DOM WESELNY ARKADIA CZASŁAW<br/>NATALIA i ŁUKASZ"
            },

            {
                image1: "chrzest_antosi.jpg",
                url1: "antosia",
                title1: "KOŚCIÓŁ ŚW. BARBARY KRAKÓW<br/>CHRZEST ANTOSI",

                image2: "zielone_wzgorze_koniusza.jpg",
                url2: "karolamati",
                title2: "ZIELONE WZGÓRZE KONIUSZA<br/>KAROLINA i MATEUSZ",

                image3: "dworek_skawina.jpg",
                url3: "asiabartek",
                title3: "HOTEL DWOREK SKAWIŃSKI<br/>JOANNA i BARTŁOMIEJ"
            },

            {
                image1: "tiffany_wola_filipowska.jpg",
                url1: "nataliadominik",
                title1: "TIFFANY WOLA FILIPOWSKA<br/>NATALIA i DOMINIK",

                image2: "sala_bankietowa_triana_mogilany.jpg",
                url2: "paulina",
                title2: "SALA BANKIETOWA TRIANA MOGILANY<br/>PAULINA i PAWEŁ",


                image3: "dom_weselny_euforia_myslenice_1.jpg",
                url3: "izaarek",
                title3: "DOM WESELNY EUFORIA MYŚLENICE<br/>IZABELA i ARKADIUSZ"
            },

            {
                image1: "fotograf_slubny_krzeszowice_start.jpg",
                url1: "olagrzegorz",
                title1: "CZTERY PORY ROKU ALWERNIA<br/>ALEKSANDRA i GRZEGORZ",

                image2: "magdalena_lukasz_myslenice.jpg",
                url2: "magdalukasz",
                title2: "REPORTAŻ ŚLUBNY MYŚLENICE<br/>MAGDALENA i ŁUKASZ",

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
