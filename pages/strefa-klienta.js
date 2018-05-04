import Singlepage from "../components/singlepage";

export default class ClientPageComponent extends React.Component {
    render() {
        let clients = [
            {
                image1: "marta_piotr_kajasowka.jpg",
                url1: "martapiotr",
                title1: "REPORTAŻ ŚLUBNY KASZTEL KAJASÓWKA<br/>MARTA i PIOTR",

                image2: "hotel_margerita_krakow_magiczny_wystroj_sali_weselnej_w_krakowie.jpg",
                url2: "nataliapiotr",
                title2: "MAGICZNY WYSTRÓJ SALI HOTEL MARGERITA<br/>NATALIA i PIOTR",

                image3: "cztery-pory-roku-alwernia-reportaz-slubny-chelmek.jpg",
                url3: "kasiamarcin",
                title3: "CZTERY PORY ROKU ALWERNIA<br/>KASIA i MARCIN"
            },

            {
                image1: "dom-weselny-aleksandra-zdjecia-slubne-mszana-dolna.jpg",
                url1: "kasiapiotr",
                title1: "DOM WESELNY ALEKSANDRA MSZANA DOLNA<br/>KASIA i PIOTR",

                image2: "villa_marina_sandra_maciek.jpg",
                url2: "sandramaciek",
                title2: "VILLA MARINA i ŚLUB NAD JEZIOREM<br/>SANDRA i MACIEK",

                image3: "karczma-pod-kogutkiem-reportaz-slubny-makow-podhalanski-portfolio.jpg",
                url3: "gosiarafal",
                title3: "REPORTAŻ ŚLUBNY MAKÓW PODHALAŃSKI<br/>MAŁGORZATA i RAFAŁ"
            },

            {
                image1: "renata_i_krzysztof_allegra.jpg",
                url1: "renatakrzysztof",
                title1: "REPORTAŻ ŚLUBNY ALLEGRA GIERCZYCE<br/>RENATA i KRZYSZTOF",

                image2: "zimowy-slub-w-kosciele-na-szklanych-domach-nowa-huta-krakow.jpg",
                url2: "olatomek",
                title2: "ZIMOWY ŚLUB NA SZKLANYCH DOMACH<br/>ALEKSANDRA i TOMASZ",

                image3: "sesja-slubna-krakow-rynek-glowny-wawel-kazimierz.jpg",
                url3: "katrina",
                title3: "SESJA ŚLUBNA RYNEK KRAKÓW<br/>CHAN i KATRINA"
            },

            {
                image1: "ewa_mateusz_hotel_lenart_portfolio.jpg",
                url1: "ewamateusz",
                title1: "WESELE W HOTELU LENART WIELICZKA<br/>EWA i MATEUSZ",

                image2: "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_portfolio.jpg",
                url2: "iwonamarcin",
                title2: "SESJA ZDJĘCIOWA SŁOWACKIE GÓRY<br/>IWONA i MARCIN",

                image3: "dom-weselny-w-jablonce-zdjecia-slubne-przystan-w-kabanosie.jpg",
                url3: "jolatomek",
                title3: "PRZYSTAŃ W KABANOSIE JABŁONKA<br/>JOLANTA i TOMASZ"
            },

            {
                image1: "szafrantu-reportaz-slubny-zabierzow-bochenski-magda-waldek.jpg",
                url1: "magdawaldek",
                title1: "REPORTAŻ ŚLUBNY SZAFRANTU NIEPOŁOMICE<br/>MAGDALENA i WALDEMAR",

                image2: "dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_portfolio.jpg",
                url2: "kingamaciek",
                title2: "DEKORACJA SALI W STYLU RUSTYKALNYM<br/>KINGA i MACIEK",

                image3: "wesele_na_polu_golfowym_w_paczoltowicach_portfolio.jpg",
                url3: "joannagrzegorz",
                title3: "WESELE NA POLU GOLFOWYM<br/>JOANNA i GRZEGORZ"
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
