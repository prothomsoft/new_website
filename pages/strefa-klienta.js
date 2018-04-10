import Singlepage from "../components/singlepage";

export default class ClientPageComponent extends React.Component {
    render() {
        let clients = [
            {
                image1: "dom-weselny-aleksandra-zdjecia-slubne-mszana-dolna.jpg",
                url1: "kasiapiotr",
                title1: "ALEKSANDRA MSZANA DOLNA<br/>KASIA i PIOTR",

                image2: "sesja-slubna-krakow-rynek-glowny-wawel-kazimierz.jpg",
                url2: "katrina",
                title2: "SESJA ŚLUBNA RYNEK KRAKÓW<br/>CHAN i KATRINA",

                image3: "karczma-pod-kogutkiem-reportaz-slubny-makow-podhalanski-portfolio.jpg",
                url3: "gosiarafal",
                title3: "REPORTAŻ ŚLUBNY MAKÓW PODHALAŃSKI<br/>MAŁGORZATA i RAFAŁ"
            },

            {
                image1: "szafrantu-reportaz-slubny-zabierzow-bochenski-magda-waldek.jpg",
                url1: "magdawaldek",
                title1: "REPORTAŻ ŚLUBNY SZAFRANTU NIEPOŁOMICE<br/>MAGDALENA i WALDEMAR",

                image2: "dom-weselny-w-jablonce-zdjecia-slubne-przystan-w-kabanosie.jpg",
                url2: "jolatomek",
                title2: "PRZYSTAŃ W KABANOSIE JABŁONKA<br/>JOLANTA i TOMASZ",

                image3: "zimowy-slub-w-kosciele-na-szklanych-domach-nowa-huta-krakow.jpg",
                url3: "olatomek",
                title3: "ZIMOWY ŚLUB NA SZKLANYCH DOMACH<br/>ALEKSANDRA i TOMASZ"
            },

            {
                image1: "ewa_mateusz_hotel_lenart_portfolio.jpg",
                url1: "ewamateusz",
                title1: "WESELE W HOTELU LENART WIELICZKA<br/>EWA i MATEUSZ",

                image2: "hotel_qubus_krakow_sesja_zdjeciowa_portfolio.jpg",
                url2: "ewelinakamil",
                title2: "SESJA ZDJĘCIOWA LAWENDOWE POLE<br/>EWELINA i KAMIL",

                image3: "wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_portfolio.jpg",
                url3: "iwonamarcinslub",
                title3: "WESELE W GÓRALSKIM KLIMACIE<br/>IWONA i MARCIN"
            },

            {
                image1: "sesja_narzeczenska_krakow_portfolio.jpg",
                url1: "kingamacieksn",
                title1: "SESJA NARZECZEŃSKA KRAKÓW<br/>KINGA i MACIEK",

                image2: "slub_cywilny_i_wesele_w_plenerze_witkowa_chata_krakow_portfolio.jpg",
                url2: "kingajulien",
                title2: "ŚLUB CYWILNY i WESELE W PLENERZE<br/>KINGA i JULIEN",

                image3: "dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_portfolio.jpg",
                url3: "kingamaciek",
                title3: "DEKORACJA SALI W STYLU RUSTYKALNYM<br/>KINGA i MACIEK"
            },

            {
                image1: "sesja_zdjeciowa_dwor_tomaszowice_krakow_portfolio.jpg",
                url1: "karolinabartek",
                title1: "SESJA ZDJĘCIOWA W KRAKOWIE<br/>KAROLINA i BARTEK",

                image2: "wesele_na_polu_golfowym_w_paczoltowicach_portfolio.jpg",
                url2: "joannagrzegorz",
                title2: "WESELE NA POLU GOLFOWYM<br/>JOANNA i GRZEGORZ",

                image3: "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_portfolio.jpg",
                url3: "iwonamarcin",
                title3: "SESJA ZDJĘCIOWA SŁOWACKIE GÓRY<br/>IWONA i MARCIN"
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
