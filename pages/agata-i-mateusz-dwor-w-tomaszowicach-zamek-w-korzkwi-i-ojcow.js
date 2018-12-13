import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/agata_i_mateusz_dwor_w_tomaszowicach_zamek_w_korzkwi_i_ojcow_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0001.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0004.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0002.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0005.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0006.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0009.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0008.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0014.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0015.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0016.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0018.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0019.jpg", height: 764 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2015/08/sesja_plenerowa_dwor_tomaszowice_korzekiew_ojcow_0026.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sesja zdjęciowa Dwór Tomaszowice"}
                    headDescription={"Promienie zachodzącego słońca i trzy podkrakowskie miejsca plenerowe: Dwór w Tomaszowicach, zamki w Korzkwi i Ojcowie. Zapraszam na plener Agaty i Mateusza."}
                    headKeywords={"plener poślubny dwór tomaszowice,plener ślubny zamek korzkiew,zdjęcia ślubne ojców"}
                    headUrl={"https://99foto.pl/agata-i-mateusz-dwor-w-tomaszowicach-zamek-w-korzkwi-i-ojcow/"}
                    entryContentP1={
                        "Tak, to był właśnie ten tydzień, długo zapowiadana pogoda, temperatura i odpowiednio pokolorowane liście. Wszystko tego dnia zapowiadało świetny plener w górach Słowacji. Zainspirowani zdjęciami kolegów fotografów, wybraliśmy się wszyscy po raz pierwszy w piękne miejsca, którymi były Popradzki Staw i Strbskie Pleso. Pierwsza miejscówka, w której nasz plan dnia podyktował nam postój to rzeka Poprad, która przecięła naszą drogę dojazdową do jeziora. Chwila niepewności i świetny widok z pewnością nie do powtórzenia już nawet następnego dnia, a co dopiero tydzień później. Ponieważ czasu do zachodu słońca było dużo, wdrapywaliśmy się przez godzinkę asfaltową drogą w miejsce, które zdecydowanie pokonuje Morskie Oko, a jest nim Popradzki Staw."
                    }
                    entryContentP2={
                        'Mniej ludzi, malownicze jezioro, ogromne góry, dużo świetnych kadrów do wypatrzenia. W drodze powrotnej zrobiliśmy też kilka zdjęć w lesie. Końcówka to szukanie dwóch kamieni z kadru <a href="https://marcinsosnicki.pl" target="_blank">Marcina Sośnickiego</a> i zachwyt nad jesienią oświetloną promieniami zachodzącego słońca. Na koniec zjedliśmy pyszny obiadek w Tatrzańskiej Łomnicy, zrelaksowani i zadowoleni wróciliśmy do naszych domów. Polecam to miejsce na plenery i mam nadzieję, że każdego roku znajdzie się jedna para, która mnie tam zabierze. Miłego oglądania.'
                    }
                    slug={"agata-i-mateusz-dwor-w-tomaszowicach-zamek-w-korzkwi-i-ojcow"}
                    title={"SESJA ŚLUBNA DWÓR W TOMASZOWICACH i OJCÓW - AGATA i MATEUSZ"}
                    tags={"plener poślubny dwór tomaszowice,plener ślubny zamek korzkiew,zdjęcia ślubne ojców"}
                    date={"11 sierpnia 2015"}
                    menuNames={"AGATA i MATEUSZ"}
                    menuTitle={"SESJA ŚLUBNA DWÓR W TOMASZOWICACH i OJCÓW"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={"url(/static/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg)"}
                />
            </div>
        );
    }
}
