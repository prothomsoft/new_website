import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/hotel_lenart_wieliczka_zdjecia_slubne.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_002.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_012.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_010.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_017.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_018.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_020.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_022.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_023.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_025.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_027.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_029.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_031.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_032.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_034.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_036.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_038.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_040.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_042.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_041.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_043.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_045.jpg", height: 566 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_046.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_048.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_049.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_050.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_051.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_052.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_054.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_055.jpg", height: 566 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_056.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_057.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_060.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_061.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_062.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_063.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_064.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_065.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_066.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_067.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_068.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_069.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_070.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_071.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_072.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_073.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_074.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_075.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_076.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_077.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_078.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_079.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_080.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_081.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_082.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_083.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_084.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_085.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_086.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_087.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_088.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_089.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_090.jpg", height: 806 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_091.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_092.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_093.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_094.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_095.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_096.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_097.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_098.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_099.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_100.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_101.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_102.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_103.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_104.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_105.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_106.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_107.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_108.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_109.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_110.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_111.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_112.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_113.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_114.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_115.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_116.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_117.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_118.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_119.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_120.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_121.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_122.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_123.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_124.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_125.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_126.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_127.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/08/hotel_lenart_wieliczka_128.jpg", height: 383 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Zdjęcia ślubne Hotel Lenart Wieliczka, fotograf ślubny"}
                    headDescription={"Reportaż ze ślubu Moniki i Mariusza w Hotelu Lenart w Wieliczce. Uroczystość zaślubin w Kościele św. Sebastiana w Wieliczce. Zapraszam do oglądania."}
                    headKeywords={"fotograf ślubny wieliczka, zdjęcia ślubne hotel lenart w wieliczce"}
                    headUrl={"https://99foto.pl/hotel-lenart-wieliczka-turkusowy-cadillac-de-ville/"}
                    entryContentP1={
                        'Zapowiadała się bardzo ciepła słoneczna sobota, bez najmniejszej kropelki deszczu i rzeczywiście tak było. Południowe słońce podgrzało atmosferę do blisko trzydziestu stopni. Gdy dodamy do tego temperaturę wywołaną przez emocje najważniejszego i jak napisała Monika już po ślubie najpiękniejszego dnia w jej życiu, to możecie wyobrazić sobie jak było gorąco. Krótko więc od początku, czyli od przygotowań Panny Młodej, które odbyły się w <a href="https://www.facebook.com/Gabinet-Hibiskus-Wieliczka-152566164795487/" target="_blank" rel="nofollow">Gabinecie Kosmetycznym Hibiskus w Wieliczce</a>. Dziewczyny pracowały od godziny dziewiątej rano nad fryzurą, malowały i utrwalały paznokcie, a na koniec tych przygotowań mistrzowski makijaż wykonała Ola. Nie mogło zabraknąć kilku minut na przygotowania Mariusza. Podjechaliśmy więc odnaleźć się w totalnie Krakowskich klimatach, mieszkaniu rodziców Pana Młodego w samym centrum naszego pięknego miasta. W ubieraniu spinek, muchy i garnituru ślubnego asystował Wujek Mariusza. Zielony Cadillac de Ville zaparkował przed domem Moniki w Wieliczce. Mariusz szczęśliwy ujrzał Monikę po raz pierwszy tego dnia. Widziałem w jego oczach, że chciał, by chwila ta trwała wiecznie. W domu odbyło się błogosławieństwo, a Para Młoda podziękowała rodzicom. Nadszedł czas by udać się do kameralnego <a href="https://kosciol-sebastian.pl/" target="_blank" rel="nofollow">Kościoła Św. Sebastiana w Wieliczce</a>.'
                    }
                    entryContentP2={
                        'Meczu o szesnastej tym razem nie było, pomimo tego wygłoszone kazanie było tak krótkie, jakby Niemcy grali w półfinale. Sakramentalne TAK, zdjęcie grupowe, moc gorących życzeń przed Kościołem, a dosłownie chwilkę później Monika i Mariusz wylądowali na czerwonym dywanie w <a href="https://hotellenart.pl/" target="_blank" rel="nofollow">Hotelu Lenart w Wieliczce</a>. Rodzice tradycyjnie przywitali Parę Młodą chlebem i solą, a kieliszki uderzając o ziemię przeszły do historii. Razem z Krzyśkiem z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">CamDesign - Pracownia Filmu Ślubnego</a> rejestrowaliśmy każdą minutę wydarzeń na parkiecie, oraz wszystkie możliwe zabawy. Goście chętnie korzystali z foto budki, tworząc pamiątkowe wpisy w księdze gości Młodej Pary. Zabawa trwała do białego rana. Moniko i Mariuszu, dziękuję, że mogłem być tam z Wami i zapraszam na zdjęcia. Miłego oglądania. Grubo ponad pięćset zdjęć jak zwykle w strefie klienta, do której hasło znajdziecie na mojej wizytówce.'
                    }
                    slug={"hotel-lenart-wieliczka-turkusowy-cadillac-de-ville"}
                    title={"HOTEL LENART WIELICZKA, TURKUSOWY CADILLAC DE VILLE - MONIKA i MARIUSZ"}
                    tags={"fotograf ślubny wieliczka, zdjęcia ślubne hotel lenart w wieliczce"}
                    date={"28 lipca 2018"}
                    menuNames={"MONIKA i MARIUSZ"}
                    menuTitle={"HOTEL LENART WIELICZKA, TURKUSOWY CADILLAC DE VILLE"}
                    leadNames={"NATALIA i KAMIL"}
                    leadTitle={"SALA WESELNA WILLA ORCHIDEA WAKSMUND - ŚLUB NA PODHALU"}
                    leadUrl={"/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach"}
                    leadImage={"url(/static/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach-start.jpg)"}
                />
            </div>
        );
    }
}
