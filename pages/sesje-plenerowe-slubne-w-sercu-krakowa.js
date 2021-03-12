import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sesje_plenerowe_slubne_w_sercu_krakowa_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2017/05/sesja_zdjeciowa_krakow_0001.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2017/05/sesja_zdjeciowa_krakow_0022.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2017/05/sesja_zdjeciowa_krakow_0023.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2017/05/sesja_zdjeciowa_krakow_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/05/sesja_zdjeciowa_krakow_0004.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2017/05/sesja_zdjeciowa_krakow_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/05/sesja_zdjeciowa_krakow_0006.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2017/05/sesja_zdjeciowa_krakow_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/05/sesja_zdjeciowa_krakow_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/05/sesja_zdjeciowa_krakow_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/05/sesja_zdjeciowa_krakow_0009.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2017/05/sesja_zdjeciowa_krakow_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/05/sesja_zdjeciowa_krakow_0011.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2017/05/sesja_zdjeciowa_krakow_0013.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2017/05/sesja_zdjeciowa_krakow_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/05/sesja_zdjeciowa_krakow_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/05/sesja_zdjeciowa_krakow_0002.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2017/05/sesja_zdjeciowa_krakow_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/05/sesja_zdjeciowa_krakow_0010.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sesje plenerowe ślubne Kraków"}
                    headDescription={"Serdecznie zapraszam na sesje plenerowe ślubne do Krakowa. Mieszkam w tym mieście i potrafię zaproponować fajne miejsca na niezapomniane zdjęcia."}
                    headKeywords={"sesja zdjęciowa kraków,plener ślubny na wawelu"}
                    headUrl={"https://99foto.pl/sesje-plenerowe-slubne-w-sercu-krakowa/"}
                    entryContentP1={
                        "Kraków to miejsce piękne, niezwykłe i spełniające wszystkie kryteria niezbędne do wykonania niezapomnianej plenerowej sesji ślubnej. Dodajmy do tego jeszcze świetnie przygotowaną, uśmiechniętą parę czyli Natalię i Piotra, gram kreatywnych pomysłów fotografa, kilka promieni majowego słońca i mogę powiedzieć, że zdjęcia praktycznie robiły się same. Nie miałem okazji fotografować ślubu Natalii i Piotra. Ślub ten odbył się blisko rok temu. Od czego mamy jednak facebook, instagram i wyszukiwarki internetowe. Młodzi wpisali hasło sesja zdjęciowa Kraków i w ten sposób mieliśmy okazję miło spędzić jedno popołudnie, przeszukując Kraków w poszukiwaniu inspiracji i ciekawych kadrów."
                    }
                    entryContentP2={
                        "Zwiedzanie miasta rozpoczęliśmy od bordowej elewacji Opery Krakowskiej. Następnie ulicą Kopernika przeszliśmy w okolicę Kościoła Mariackiego. Przemili Krakowscy gospodarze Muzeum Narodowego w Sukiennicach i Hotelu Starego nie zezwolili nam na wejście do ich obiektów, bez dodatkowych przez nikogo oficjalnie nie określonych opłat. Przeszliśmy na Plac Szczepański pod fontanny, następnie pod Uniwersytet Jagieloński, gdzie kwitną różnokolorowe tulipany. Przespacerowaliśmy się ulicą Grodzką do Wawelu na moment zatrzymując się pod Kościołem Piotra i Pawła. Odwiedziliśmy nowe budynki Powiśla, miejce o dużym potencjale, które cały czas odkrywam. Ostatnie kadry tego dnia zrobiliśmy na Wawelu. Serdecznie zapraszam na kilka zdjęć z tego dnia i kilka kadrów, które odnalazłem po raz kolejny opuszczając strefę komfortu. Miłego oglądania."
                    }
                    slug={"sesje-plenerowe-slubne-w-sercu-krakowa"}
                    title={"SESJE PLENEROWE ŚLUBNE W SERCU KRAKOWA - NATALIA i PIOTR"}
                    tags={"sesja zdjęciowa kraków,plener ślubny na wawelu"}
                    date={"11 maja 2017"}
                    menuNames={"NATALIA i PIOTR"}
                    menuTitle={"SESJE PLENEROWE ŚLUBNE W SERCU KRAKOWA"}
                    leadNames={"EWELINA i KAMIL"}
                    leadTitle={"HOTEL QUBUS KRAKÓW SESJA ZDJĘCIOWA"}
                    leadUrl={"/hotel-qubus-krakow-sesja-zdjeciowa"}
                    leadImage={"url(/static/hotel_qubus_krakow_sesja_zdjeciowa_start.jpg)"}
                />
            </div>
        );
    }
}
