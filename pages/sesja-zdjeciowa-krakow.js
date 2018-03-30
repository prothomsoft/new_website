import Singlepage from "../components/singlepage";

export default class SesjaPageComponent extends React.Component {
    render() {
        return (
            <div>
                <Singlepage
                    headTitle={"Sesja zdjęciowa Kraków"}
                    headDescription={"Sesja zdjęciowa w Krakowie to atrakcje turystyczne w pięknym miejscu. Spotkajmy się, wspólnie znajdźmy chwilę, światło, kadr, zachowajmy je na zawsze."}
                    headKeywords={"sesja zdjęciowa kraków, plener ślubny w krakowie"}
                    headUrl={"http://99foto.pl/sesja-zdjeciowa-krakow/"}
                    componentContentName={"sesja"}
                    slug={"sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    title={"SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA - IWONA i MARCIN"}
                    date={"3 LISTOPADA 2017"}
                    tags={"PLENER STRBSKIE PLESO, POPRADZKI STAW ZDJĘCIA ŚLUBNE, SESJA ŚLUBNA SŁOWACJA"}
                    backgroundImage={"url(/static/hotel_qubus_krakow_sesja_zdjeciowa_start.jpg)"}
                    leadNames={"EWELINA i KAMIL"}
                    leadTitle={"HOTEL QUBUS KRAKÓW SESJA ZDJĘCIOWA"}
                    leadUrl={"/hotel-qubus-krakow-sesja-zdjeciowa"}
                    leadImage={"url(/static/hotel_qubus_krakow_sesja_zdjeciowa_start.jpg)"}
                />
            </div>
        );
    }
}
