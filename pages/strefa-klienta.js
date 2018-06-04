import Singlepage from "../components/singlepage";

export default class ClientPageComponent extends React.Component {
    render() {
        let clients = [
            {
                image1: "reportaz-slubny-hotel-junior-krakow-balonowy-szal.jpg",
                url1: "magdapiotr",
                title1: "BALONOWY SZAŁ W HOTELU JUNIOR KRAKÓW<br/>MAGDALENA i PIOTR",

                image2: "slub-w-lanckoronie-restauracja-old-joker-jaroszowice.jpg",
                url2: "alicjagrzegorz",
                title2: "RESTAURACJA OLD JOKER JAROSZOWICE<br/>ALICJA i GRZEGORZ",

                image3: "folwark_zalesie_renata_michal.jpg",
                url3: "renatamichal",
                title3: "FOLWARK ZALESIE WIELICZKA<br/>RENATA i MICHAŁ"
            },

            {
                image1: "marta_piotr_kajasowka.jpg",
                url1: "martapiotr",
                title1: "REPORTAŻ ŚLUBNY KASZTEL KAJASÓWKA<br/>MARTA i PIOTR",

                image2: "villa_marina_sandra_maciek.jpg",
                url2: "sandramaciek",
                title2: "VILLA MARINA i ŚLUB NAD JEZIOREM<br/>SANDRA i MACIEK",

                image3: "cztery-pory-roku-alwernia-reportaz-slubny-chelmek.jpg",
                url3: "kasiamarcin",
                title3: "CZTERY PORY ROKU ALWERNIA<br/>KASIA i MARCIN"
            },

            {
                image1: "renata_i_krzysztof_allegra.jpg",
                url1: "renatakrzysztof",
                title1: "REPORTAŻ ŚLUBNY ALLEGRA GIERCZYCE<br/>RENATA i KRZYSZTOF",

                image2: "dom-weselny-aleksandra-zdjecia-slubne-mszana-dolna.jpg",
                url2: "kasiapiotr",
                title2: "DOM WESELNY ALEKSANDRA MSZANA DOLNA<br/>KASIA i PIOTR",

                image3: "sesja-slubna-krakow-rynek-glowny-wawel-kazimierz.jpg",
                url3: "katrina",
                title3: "SESJA ŚLUBNA RYNEK KRAKÓW<br/>CHAN i KATRINA"
            },

            {
                image1: "ewa_mateusz_hotel_lenart_portfolio.jpg",
                url1: "ewamateusz",
                title1: "WESELE W HOTELU LENART WIELICZKA<br/>EWA i MATEUSZ",

                image2: "przystan-w-kabanosie-spytkowice-zdjecia-slubne-jordanow.jpg",
                url2: "krystynapiotr",
                title2: "PRZYSTAŃ W KABANOSIE SPYTKOWICE<br/>KRYSTYNA i PIOTR",

                image3: "karczma-pod-kogutkiem-reportaz-slubny-makow-podhalanski-portfolio.jpg",
                url3: "gosiarafal",
                title3: "REPORTAŻ ŚLUBNY MAKÓW PODHALAŃSKI<br/>MAŁGORZATA i RAFAŁ"
            },

            {
                image1: "szafrantu-reportaz-slubny-zabierzow-bochenski-magda-waldek.jpg",
                url1: "magdawaldek",
                title1: "REPORTAŻ ŚLUBNY SZAFRANTU NIEPOŁOMICE<br/>MAGDALENA i WALDEMAR",

                image2: "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_portfolio.jpg",
                url2: "iwonamarcin",
                title2: "SESJA ZDJĘCIOWA SŁOWACKIE GÓRY<br/>IWONA i MARCIN",

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
