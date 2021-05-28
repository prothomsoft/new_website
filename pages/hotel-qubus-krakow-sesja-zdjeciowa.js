import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: process.env.staticImagesPath + "hotel_qubus_krakow_sesja_zdjeciowa_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0003.jpg", height: 388 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0013.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0018.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0010.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0017.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0019.jpg", height: 382 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0034.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Hotel Qubus Kraków, sesja zdjęciowa"}
                    headDescription={"Taras widokowy Hotelu QUBUS w Krakowie, Lawendowe Pole i historia w którą nie uwierzycie. W imieniu Eweliny i Kamila serdecznie zapraszam na mojego bloga."}
                    headKeywords={"hotel qubus kraków,sesja zdjęciowa kraków"}
                    headUrl={"https://99foto.pl/hotel-qubus-krakow-sesja-zdjeciowa/"}
                    entryContentP1={
                        'Moja przygoda z wchodzeniem do najróżniejszych miejsc w Krakowie związana jest z mało fajnymi wspomnieniami. Zwykle właściciele nie chcą udostępniać swoich wnętrz na potrzeby sesji zdjęciowych, a jeżeli już dają się namówić to co tu dużo mówić, tanio nie jest. Tym razem było inaczej. Zanim zaparkowałem auto na ulicy gazowej, czyli plenerowym punkcie startowym dla Starej Zajezdni, Stajni, a jednym słowem Kazimierza, podjechałem do <a href="https://www.qubushotel.com/pl/hotele/krakow/1/" target="_blank" rel="nofollow">Hotelu Qubus</a> by sprawdzić czy fontanna przed hotelem działa. Włączona nie była, więc wszedłem do środka pytając czy można wykorzystać widokowy taras hotelowy do zdjęć ślubnych i czy z okazji przyjazdu Donalda  Trumpa do Polski, Panowie Recepcjoniści (z dużej bo jest szacun) by tej fontanny nie odpalili.'
                    }
                    entryContentP2={
                        "W pierwszej chwili odpowiedź była, że nie da rady, ale kiedy trzydzieści minut później już z Eweliną i Kamilem zaczęliśmy robić tam zdjęcia wyszedł przemiły Pan i zaproponował, że fontannę specjalnie dla nas włączy. Kilka minut później podziwialiśmy widok z tarasu widokowego Hotelu Qubus. Widok jest świetny. Nie odpuściliśmy też klatki zdjęciowej w stylowym korytarzu i na basenie. Dalsza część sesji odbyła się na Lawendowym Polu i nie będę Was zanudzał szczegółami. Zdjęcia niech wystarczą jako relacja. Miłego oglądania."
                    }
                    slug={"hotel-qubus-krakow-sesja-zdjeciowa"}
                    title={"HOTEL QUBUS KRAKÓW SESJA ZDJĘCIOWA - EWELINA i KAMIL"}
                    tags={"hotel qubus kraków,sesja zdjęciowa kraków"}
                    date={"10 lipca 2017"}
                    menuNames={"EWELINA i KAMIL"}
                    menuTitle={"HOTEL QUBUS KRAKÓW SESJA ZDJĘCIOWA"}
                    leadNames={"EWELINA i KAMIL"}
                    leadTitle={"HOTEL TADEUSZ USZEW i GÓRALSKA SALA WESELNA"}
                    leadUrl={"/hotel-tadeusz-uszew-i-goralska-sala-weselna"}
                    leadImage={"url(/static/hotel_tadeusz_uszew_i_goralska_sala_weselna_start.jpg)"}
                />
            </div>
        );
    }
}
