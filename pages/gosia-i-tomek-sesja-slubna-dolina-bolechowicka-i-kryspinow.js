import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/gosia_i_tomek_sesja_slubna_dolina_bolechowicka_i_kryspinow_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0001.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0002.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0003.jpg", height: 852 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0004.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0005.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0006.jpg", height: 852 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0007.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0008.jpg", height: 852 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0009.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0011.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0010.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0012.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0013.jpg", height: 852 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0014.jpg", height: 804 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0015.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0016.jpg", height: 851 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0017.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0018.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0019.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0020.jpg", height: 851 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0021.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0023.jpg", height: 851 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0022.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0024.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/07/plener_slubny_krakow_0025.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sesja ślubna Dolina Bolechowicka i Kryspinów"}
                    headDescription={"Serdecznie zapraszam do Doliny Bolechowickiej i Kryspinowa. Gdyby ktoś poszukiwał miejsc na weekendowy spacer to polecam zajrzeć. Miłego oglądania."}
                    headKeywords={"sesja ślubna kraków,plener ślubny kryspinów"}
                    headUrl={"http://99foto.pl/gosia-i-tomek-sesja-slubna-dolina-bolechowicka-i-kryspinow/"}
                    entryContentP1={
                        "Wiele młodych par myśli, że zrobienie fajnych zdjęć do sesji ślubnej wymaga wyjazdu z Krakowa i okolic, pozostawienia za sobą mięc oklepanych i nowe poszukiwania. Mam nadzieję, że po raz kolejny razem z Gosią i Tomkiem udowodnimy, że to nie prawda. Gosia mieszka w Bolechowicach i doskonale zna okolicę, Dolina Bolechowicka to też wspomnienia, chociażby długie treningi pierwszego tańca z Tomkiem, dlatego też zdecydowaliśmy się rozpocząć zdjęcia w tym miejscu. W Dolinie Bolechowickiej doszliśmy do wodospadu, co w sukni ślubnej było dość trudne."
                    }
                    entryContentP2={
                        "Następnie ponieważ do zachodu słońca w Kryspinowie czasu było jeszcze trochę wybraliśmy się na punkt widokowy w Karniowicach. Widok na panoramę Krakowa i chylące się już ku zachodowi słońce, sprzyjało zdjęciom. Ostanim punktem pleneru był Kryspinów, który zaskoczył mnie nowym pomostem. Gosia pomogła grającym w siatkówkę zaserwować, poprzytulała się do Tomka na piasku i w promieniach zachądzącego słońca. Czas szybko nam minął, bo wszystko co dobre szybko się kończy. Miłego oglądania."
                    }
                    slug={"gosia-i-tomek-sesja-slubna-dolina-bolechowicka-i-kryspinow"}
                    title={"SESJA ŚLUBNA DOLINA BOLECHOWICKA i KRYSPINÓW - GOSIA i TOMEK"}
                    tags={"sesja ślubna kraków,plener ślubny kryspinów"}
                    date={"5 lipca 2016"}
                    menuNames={"GOSIA i TOMEK"}
                    menuTitle={"SESJA ŚLUBNA DOLINA BOLECHOWICKA i KRYSPINÓW"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={"url(/static/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg)"}
                />
            </div>
        );
    }
}
