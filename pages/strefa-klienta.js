import Singlepage from "../components/singlepage";

export default class ClientPageComponent extends React.Component {
    render() {
        let clients = [
            {
                image1: "kristina.jpg",
                url1: "kristinaaleksandr",
                title1: "DWÓR SIERAKÓW W DOBCZYCACH<br/>KRISTINA i ALEKSANDR",

                image2: "arkadia_wadowice_karolina_mateusz.jpg",
                url2: "karolinamateusz",
                title2: "SALA WESELNA ARKADIA WADOWICE<br/>KAROLINA i MATEUSZ",

                image3: "marta_bartek.jpg",
                url3: "martabartek",
                title3: "HOTEL FERO EXPRESS KRAKÓW<br/>MARTA i BARTEK"
            },

            {
                image1: "magdalena_lukasz_myslenice.jpg",
                url1: "magdalukasz",
                title1: "REPORTAŻ ŚLUBNY MYŚLENICE<br/>MAGDALENA i ŁUKASZ",

                image2: "sala_weselna_soprano_tarnow.jpg",
                url2: "magdalenalukasz",
                title2: "SALA WESELNA SOPRANO TARNÓW<br/>MAGDALENA i ŁUKASZ",

                image3: "restauracja_tiffany_wola_filpowska.jpg",
                url3: "martamarcin",
                title3: "RESTAURACJA TIFFANY WOLA FILIPOWSKA<br/>MARTA i MARCIN"
            },

            {
                image1: "sesja_narzeczenska_kopiec_kraka.jpg",
                url1: "paulinakamil",
                title1: "SESJA NARZECZEŃSKA KOPIEC KRAKUSA<br/>PAULINA i KAMIL",

                image2: "magdalena_andrzej_u_niedzwiedzia.jpg",
                url2: "magdaandrzej",
                title2: "OPACTWO BENEDYKTYNÓW W TYŃCU<br/>MAGDALENA i ANDRZEJ",

                image3: "fotograf-slubny-magnolia-budzow.jpg",
                url3: "kingamateusz",
                title3: "RESTAURACJA MAGNOLIA BUDZÓW<br/>KINGA i MATEUSZ"
            },

            {
                image1: "fotograf_slubny_krzeszowice_start.jpg",
                url1: "olagrzegorz",
                title1: "CZTERY PORY ROKU ALWERNIA<br/>ALEKSANDRA i GRZEGORZ",

                image2: "sesja_slubna_ogrod_botaniczny.jpg",
                url2: "izabelajakub",
                title2: "SALA WESELNA SZAFRANTU NIEPOŁOMICE<br/>IZABELA i JAKUB",

                image3: "fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice-1.jpg",
                url3: "dajanasylwester",
                title3: "SALA WESELNA ARKADIA WADOWICE<br/>DAJANA i SYLWESTER"
            },

            {
                image1: "marta_piotr_kajasowka.jpg",
                url1: "martapiotr",
                title1: "REPORTAŻ ŚLUBNY KASZTEL KAJASÓWKA<br/>MARTA i PIOTR",

                image2: "sala-weselna-willa-orchidea-waksmund-slub-w-pieninach.jpg",
                url2: "nataliakamil",
                title2: "SALA WESELNA WILLA ORCHIDEA WAKSMUND<br/>NATALIA i KAMIL",

                image3: "przystan-w-kabanosie-spytkowice-zdjecia-slubne-jordanow.jpg",
                url3: "krystynapiotr",
                title3: "PRZYSTAŃ W KABANOSIE SPYTKOWICE<br/>KRYSTYNA i PIOTR"
            },

            {
                image1: "folwark_zalesie_renata_michal.jpg",
                url1: "renatamichal",
                title1: "FOLWARK ZALESIE WIELICZKA<br/>RENATA i MICHAŁ",

                image2: "villa_marina_sandra_maciek.jpg",
                url2: "sandramaciek",
                title2: "VILLA MARINA i ŚLUB NAD JEZIOREM<br/>SANDRA i MACIEK",

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
