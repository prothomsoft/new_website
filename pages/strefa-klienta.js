import Singlepage from "../components/singlepage";

export default class ClientPageComponent extends React.Component {
    render() {
        let clients = [
            {
                image1: "slub_zima.jpg",
                url1: "martamichal",
                title1: "GOŚCINIEC NAŁĘŻE JAWOŻE<br/>MARTA i MICHAŁ",

                image2: "pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg",
                url2: "natalialukasz",
                title2: "DOM WESELNY ARKADIA CZASŁAW<br/>NATALIA i ŁUKASZ",

                image3: "hotel_nad_raba_bochnia.jpg",
                url3: "adaarek",
                title3: "HOTEL NAD RABĄ BOCHNIA<br/>ADRIANNA i ARKADIUSZ",
            },

            {
                image1: "tiffany_wola_filipowska.jpg",
                url1: "nataliadominik",
                title1: "TIFFANY WOLA FILIPOWSKA<br/>NATALIA i DOMINIK",

                image2: "karczma_pod_kogutkiem_krzywaczka_1.jpg",
                url2: "ilonaadam",
                title2: "KARCZMA POD KOGUTKIEM KRZYWACZKA<br/>ILONA i ADAM",

                image3: "dom_weselny_euforia_myslenice_1.jpg",
                url3: "izaarek",
                title3: "DOM WESELNY EUFORIA MYŚLENICE<br/>IZABELA i ARKADIUSZ"
            },

            {
                image1: "kristina.jpg",
                url1: "kristinaaleksandr",
                title1: "DWÓR SIERAKÓW W DOBCZYCACH<br/>KRISTINA i ALEKSANDR",

                image2: "zielone_wzgorze_koniusza.jpg",
                url2: "karolamati",
                title2: "ZIELONE WZGÓRZE KONIUSZA<br/>KAROLINA i MATEUSZ",

                image3: "fotograf-slubny-magnolia-budzow.jpg",
                url3: "kingamateusz",
                title3: "RESTAURACJA MAGNOLIA BUDZÓW<br/>KINGA i MATEUSZ"
            },

            {
                image1: "sala_bankietowa_triana_mogilany.jpg",
                url1: "paulina",
                title1: "SALA BANKIETOWA TRIANA MOGILANY<br/>PAULINA i PAWEŁ",

                image2: "magda_grzegorz.jpg",
                url2: "magdagrzegorz",
                title2: "RESTAURACJA KOLIBA MURZASICHLE<br/>MAGDALENA i GRZEGORZ",

                image3: "kosciol_makow_podhalanski.jpg",
                url3: "olakuba",
                title3: "KARCZMA U LIPY JORDANÓW<br/>ALEKSANDRA i JAKUB"
            },

            {
                image1: "helada_oswiecim.jpg",
                url1: "magdadamian",
                title1: "SALA WESELNA HELADA OŚWIĘCIM<br/>MAGDALENA i DAMIAN",

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
