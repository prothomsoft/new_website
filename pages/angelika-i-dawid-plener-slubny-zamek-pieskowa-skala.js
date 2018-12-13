import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/angelika-i-dawid-plener-slubny-zamek-pieskowa-skala_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0001.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0002.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0003.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0004.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0005.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0006.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0007.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0009.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0010.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0030.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0013.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0015.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0014.jpg", height: 853 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0016.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0018.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0019.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0020.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0024.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0028.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0026.jpg", height: 806 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0025.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0027.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0029.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/08/plener_slubny_zamek_pieskowa_skala_0012.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Plener ślubny w Zamku Pieskowa Skała"}
                    headDescription={"Długi weekend w Krakowie? Na pewno warto zobaczyć Zamek w Pieskowej Skale. Serdecznie zapraszam na sesję ślubną Angeliki i Dawida. TAK weszliśmy do środka..."}
                    headKeywords={"plener ślubny kraków,sesja ślubna kraków"}
                    headUrl={"https://99foto.pl/angelika-i-dawid-plener-slubny-zamek-pieskowa-skala/"}
                    entryContentP1={
                        "Po raz kolejny na moim blogu proponuję sesję ślubną w okolicach Krakowa i mam nadzieję razem z Angeliką i Dawidem udowadniamy, że żeby zrobić fajne zdjęcia nie trzeba jechać na koniec świata. Tym razem poszliśmy krok dalej. Odwiedziliśmy nie tylko herkulesowe okolice ale weszliśmy na zdjęcia do środka Zamku w Pieskowej Skale. Odnowione i oddane do użytku krużganki, pilnie strzeżone przez trzech dzielnych Panów Strażników (wciąż mniej niż trawa na Wawelu) i piękne ogrody, w których pojawiliśmy się razem z promieniami zachodzącego słońca, pomogły nam zrobić całkiem dobre foty. Angelika dzielnie wspinała się w butach ślubnych, które jednak całą sesję przetrwały."
                    }
                    entryContentP2={
                        "Zadaniem Dawida było zaś rozśmieszanie już żonki, nagradzane buziakami, których podczas sesji było bardzo bardzo dużo. Tak więc podczas gdy Angelika z Dawidem pewnie jeszcze odsypiają wczorajszego grilla, który zakończył sezon urlopowy, ja serdecznie zapraszam do oglądania zdjęć z ich sesji ślubnej. Kilka więcej też fajnych znajdziecie w strefie klienta po podaniu hasła."
                    }
                    slug={"angelika-i-dawid-plener-slubny-zamek-pieskowa-skala"}
                    title={"PLENER ŚLUBNY ZAMEK PIESKOWA SKAŁA - ANGELIKA i DAWID"}
                    tags={"plener ślubny kraków,sesja ślubna kraków"}
                    date={"15 sierpnia 2016"}
                    menuNames={"ANGELIKA i DAWID"}
                    menuTitle={"PLENER ŚLUBNY ZAMEK PIESKOWA SKAŁA"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={"url(/static/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg)"}
                />
            </div>
        );
    }
}
