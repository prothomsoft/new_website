import Singlepage from "../components/singlepage";

export default class ClientPageComponent extends React.Component {
    render() {
        let clients = [
            {
                image1: "sesja_narzeczenska_krakow_kazimierz.jpg",
                url1: "marlenaadam",
                title1: "MIEJSKA SESJA NARZECZEŃSKA<br/>MARLENA i ADAM",

                image2: "fotograf_slubny_zlotniki.jpg",
                url2: "magdalenagrzegorz",
                title2: "REPORTAŻ ŚLUBNY ZŁOTNIKI<br/>MAGDALENA i GRZEGORZ",

                image3: "sala_weselna_babie_lato_gdow_1.jpg",
                url3: "paulinakamil",
                title3: "SALA WESELNA BABIE LATO GDÓW<br/>PAULINA i KAMIL"
            },

            {
                image1: "sala_weselna_biala_wilczyca_kocmyrzow.jpg",
                url1: "monikamartin",
                title1: "SALA WESELNA BIAŁA WILCZYCA<br/>MONIKA i MARTIN",

                image2: "rancho_lot_nowy_targ_fotograf_slubny.jpg",
                url2: "kamilasebastian",
                title2: "RANCHO LOT NOWY TARG<br/>KAMILA i SEBASTIAN",

                image3: "fotograf_slubny_trzemesnia.jpg",
                url3: "edytamarcin",
                title3: "REPORTAŻ ŚLUBNY TRZEMEŚNIA<br/>EDYTA i MARCIN"
            },

            {
                image1: "fotograf_slubny_limanowa.jpg",
                url1: "magdarobert",
                title1: "SALA WESELNA HOTEL LIMANOVA<br/>MAGDALENA i ROBERT",

                image2: "restauracja_karolinka_bystra_podhalanska.jpg",
                url2: "marlenamaciej",
                title2: "KAROLINKA BYSTRA PODHALAŃSKA<br/>MARLENA i MACIEJ",

                image3: "sala_weselna_u_niedzwiedzia.jpg",
                url3: "angelikalukasz",
                title3: "SALA WESELNA U NIEDŹWIEDZIA<br/>ANGELIKA i ŁUKASZ"
            },

            {
                image1: "hotel-junior-skotnicka.jpg",
                url1: "kingapawel",
                title1: "HOTEL JUNIOR SKOTNIKI<br/>KINGA i PAWEŁ",

                image2: "pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg",
                url2: "natalialukasz",
                title2: "DOM WESELNY ARKADIA CZASŁAW<br/>NATALIA i ŁUKASZ",

                image3: "sala_weselna_alexandra_mszana_dolna.jpg",
                url3: "paulinagrzegorz",
                title3: "ALEXANDRA MSZANA DOLNA<br/>PAULINA i GRZEGORZ"
            },

            {
                image1: "tiffany_wola_filipowska.jpg",
                url1: "nataliadominik",
                title1: "TIFFANY WOLA FILIPOWSKA<br/>NATALIA i DOMINIK",

                image2: "zielone_wzgorze_koniusza.jpg",
                url2: "karolamati",
                title2: "ZIELONE WZGÓRZE KONIUSZA<br/>KAROLINA i MATEUSZ",

                image3: "sala-bankietowa-szafrantu.jpg",
                url3: "karolinakamil",
                title3: "SALA BANKIETOWA SZAFRANTU NIEPOŁOMICE<br/>KAROLINA i KAMIL"
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
