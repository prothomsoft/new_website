import Singlepage from "../components/singlepage";

export default class ClientPageComponent extends React.Component {
    render() {
        let clients = [
            {
                image1: "kosciol_makow_podhalanski.jpg",
                url1: "olakuba",
                title1: "KARCZMA U LIPY JORDANÓW<br/>ALEKSANDRA i JAKUB",

                image2: "hotel_zajazd_celtycki_zakrzow.jpg",
                url2: "aniabartek",
                title2: "HOTEL ZAJAZD CELTYCKI ZAKRZÓW<br/>ANNA i BARTŁOMIEJ",

                image3: "zielone_wzgorze_koniusza.jpg",
                url3: "karolamati",
                title3: "ZIELONE WZGÓRZE KONIUSZA<br/>KAROLINA i MATEUSZ"
            },

            {
                image1: "sala_bankietowa_triana_mogilany.jpg",
                url1: "paulina",
                title1: "SALA BANKIETOWA TRIANA MOGILANY<br/>PAULINA i PAWEŁ",

                image2: "arka_pana_nowa_huta.jpg",
                url2: "olarafal",
                title2: "KOŚCIÓŁ ARKA PANA NOWA HUTA<br/>ALEKSANDRA i RAFAŁ",

                image3: "anna_piotr_slub_krakow.jpg",
                url3: "annapiotr",
                title3: "REPORTAŻ ŚLUBNY KASZTEL KAJASÓWKA<br/>ANNA i PIOTR"
            },

            {
                image1: "helada_oswiecim.jpg",
                url1: "magdadamian",
                title1: "SALA WESELNA HELADA OŚWIĘCIM<br/>MAGDALENA i DAMIAN",

                image2: "kristina.jpg",
                url2: "kristinaaleksandr",
                title2: "DWÓR SIERAKÓW W DOBCZYCACH<br/>KRISTINA i ALEKSANDR",

                image3: "dom_weselny_euforia_myslenice_1.jpg",
                url3: "izaarek",
                title3: "DOM WESELNY EUFORIA MYŚLENICE<br/>IZABELA i ARKADIUSZ"
            },

            {
                image1: "kosciol_myslenice.jpg",
                url1: "basiagrzegorz",
                title1: "REPORTAŻ ŚLUBNY MYŚLENICE<br/>BASIA i GRZEGORZ",

                image2: "magda_grzegorz.jpg",
                url2: "magdagrzegorz",
                title2: "RESTAURACJA KOLIBA MURZASICHLE<br/>MAGDALENA i GRZEGORZ",

                image3: "fotograf-slubny-magnolia-budzow.jpg",
                url3: "kingamateusz",
                title3: "RESTAURACJA MAGNOLIA BUDZÓW<br/>KINGA i MATEUSZ"
            },

            {
                image1: "restauracja_tiffany_wola_filpowska.jpg",
                url1: "martamarcin",
                title1: "RESTAURACJA TIFFANY WOLA FILIPOWSKA<br/>MARTA i MARCIN",

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
