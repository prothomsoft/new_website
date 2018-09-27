import Singlepage from "../components/singlepage";

export default class ClientPageComponent extends React.Component {
    render() {
        let clients = [
            {
                image1: "sala_bankietowa_triana_mogilany.jpg",
                url1: "paulina",
                title1: "SALA BANKIETOWA TRIANA MOGILANY<br/>PAULINA i PAWEŁ",

                image2: "kristina.jpg",
                url2: "kristinaaleksandr",
                title2: "DWÓR SIERAKÓW W DOBCZYCACH<br/>KRISTINA i ALEKSANDR",

                image3: "alina_michal.jpg",
                url3: "alinamichal",
                title3: "SALA WESELNA SZAFRAN ZAGACIE<br/>ALINA i MICHAŁ"
            },

            {
                image1: "skalny_dwor.jpg",
                url1: "monikawojtek",
                title1: "DOM WESELNY SKALNY DWÓR SUŁOSZOWA<br/>MONIKA i WOJTEK",

                image2: "magdalena_lukasz_myslenice.jpg",
                url2: "magdalukasz",
                title2: "REPORTAŻ ŚLUBNY MYŚLENICE<br/>MAGDALENA i ŁUKASZ",

                image3: "karolina_mateusz.jpg",
                url3: "km",
                title3: "DOM WESELNY SZLACHECKI DWÓR RACŁAWICE<br/>KAROLINA i MATEUSZ"
            },

            {
                image1: "restauracja_tiffany_wola_filpowska.jpg",
                url1: "martamarcin",
                title1: "RESTAURACJA TIFFANY WOLA FILIPOWSKA<br/>MARTA i MARCIN",

                image2: "arkadia_wadowice_karolina_mateusz.jpg",
                url2: "karolinamateusz",
                title2: "SALA WESELNA ARKADIA WADOWICE<br/>KAROLINA i MATEUSZ",

                image3: "magda_grzegorz.jpg",
                url3: "magdagrzegorz",
                title3: "RESTAURACJA KOLIBA MURZASICHLE<br/>MAGDALENA i GRZEGORZ"
            },

            {
                image1: "fotograf_slubny_krzeszowice_start.jpg",
                url1: "olagrzegorz",
                title1: "CZTERY PORY ROKU ALWERNIA<br/>ALEKSANDRA i GRZEGORZ",

                image2: "sala_weselna_soprano_tarnow.jpg",
                url2: "magdalenalukasz",
                title2: "SALA WESELNA SOPRANO TARNÓW<br/>MAGDALENA i ŁUKASZ",

                image3: "fotograf-slubny-magnolia-budzow.jpg",
                url3: "kingamateusz",
                title3: "RESTAURACJA MAGNOLIA BUDZÓW<br/>KINGA i MATEUSZ"
            },

            {
                image1: "marta_piotr_kajasowka.jpg",
                url1: "martapiotr",
                title1: "REPORTAŻ ŚLUBNY KASZTEL KAJASÓWKA<br/>MARTA i PIOTR",

                image2: "magdalena_andrzej_u_niedzwiedzia.jpg",
                url2: "magdaandrzej",
                title2: "OPACTWO BENEDYKTYNÓW W TYŃCU<br/>MAGDALENA i ANDRZEJ",

                image3: "fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice-1.jpg",
                url3: "dajanasylwester",
                title3: "SALA WESELNA ARKADIA WADOWICE<br/>DAJANA i SYLWESTER"
            },

            {
                image1: "folwark_zalesie_renata_michal.jpg",
                url1: "renatamichal",
                title1: "FOLWARK ZALESIE WIELICZKA<br/>RENATA i MICHAŁ",

                image2: "sesja_slubna_ogrod_botaniczny.jpg",
                url2: "izabelajakub",
                title2: "SALA WESELNA SZAFRANTU NIEPOŁOMICE<br/>IZABELA i JAKUB",

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
                    headUrl={"http://99foto.pl/strefa-klienta/"}
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
