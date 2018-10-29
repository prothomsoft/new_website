import Singlepage from "../components/singlepage";

export default class ClientPageComponent extends React.Component {
    render() {
        let clients = [
            {
                image1: "hotel_zajazd_celtycki_zakrzow.jpg",
                url1: "aniabartek",
                title1: "HOTEL ZAJAZD CELTYCKI ZAKRZÓW<br/>ANNA i BARTŁOMIEJ",

                image2: "zielone_wzgorze_koniusza.jpg",
                url2: "karolamati",
                title2: "ZIELONE WZGÓRZE KONIUSZA<br/>KAROLINA i MATEUSZ",

                image3: "sala_bankietowa_triana_mogilany.jpg",
                url3: "paulina",
                title3: "SALA BANKIETOWA TRIANA MOGILANY<br/>PAULINA i PAWEŁ"
            },

            {
                image1: "arka_pana_nowa_huta.jpg",
                url1: "olarafal",
                title1: "KOŚCIÓŁ ARKA PANA NOWA HUTA<br/>ALEKSANDRA i RAFAŁ",

                image2: "anna_piotr_slub_krakow.jpg",
                url2: "annapiotr",
                title2: "REPORTAŻ ŚLUBNY KASZTEL KAJASÓWKA<br/>ANNA i PIOTR",

                image3: "dom_weselny_euforia_myslenice_1.jpg",
                url3: "izaarek",
                title3: "DOM WESELNY EUFORIA MYŚLENICE<br/>IZABELA i ARKADIUSZ"
            },

            {
                image1: "kristina.jpg",
                url1: "kristinaaleksandr",
                title1: "DWÓR SIERAKÓW W DOBCZYCACH<br/>KRISTINA i ALEKSANDR",

                image2: "kosciol_myslenice.jpg",
                url2: "basiagrzegorz",
                title2: "REPORTAŻ ŚLUBNY MYŚLENICE<br/>BASIA i GRZEGORZ",

                image3: "alina_michal.jpg",
                url3: "alinamichal",
                title3: "SALA WESELNA SZAFRAN ZAGACIE<br/>ALINA i MICHAŁ"
            },

            {
                image1: "helada_oswiecim.jpg",
                url1: "magdadamian",
                title1: "SALA WESELNA HELADA OŚWIĘCIM<br/>MAGDALENA i DAMIAN",

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
