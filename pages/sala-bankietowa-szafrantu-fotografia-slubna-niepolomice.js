import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sala-bankietowa-szafrantu.jpg"
            }
        ];

        let images = [

            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0009.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0011.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0013.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0014.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0018.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0015.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0016.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0021.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0019.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0001.jpg", height: 566 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0002.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0003.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0004.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0005.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0006.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0007.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0008.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0026.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0027.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0028.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0029.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0030.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0031.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0032.jpg", height: 566 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0035.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0036.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0049.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0042.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0054.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0041.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0046.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0050.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0048.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0051.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0038.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0052.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0055.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0056.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0057.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0058.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0059.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0060.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0061.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0062.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0063.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0064.jpg", height: 566 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0065.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0066.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0067.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0068.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0069.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0070.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0071.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0072.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0073.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0074.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0075.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0076.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0077.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0078.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0080.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0079.jpg", height: 566 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0081.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0082.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0083.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0084.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0085.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0086.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0087.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0089.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0090.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0091.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0092.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0093.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0094.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0095.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0096.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0097.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0098.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0099.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0100.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0101.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0102.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0103.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0104.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0105.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0107.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0108.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0109.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0088.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0106.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0110.jpg", height: 762 }];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sala bankietowa Szafrantu, fotografia ślubna Niepołomice"}
                    headDescription={"Przepiękne miejsce na ceremonię ślubną. Wspaniali Karolina i Kamil. Duża dawka emocji, uśmiechów i pozytywnej energii. Sala bankietowa Szafrantu i impreza do białego rana. Zapraszam."}
                    headKeywords={"Sala bankietowa Szafrantu, fotografia ślubna Niepołomice"}
                    headUrl={"https://99foto.pl/sala-bankietowa-szafrantu-fotografia-slubna-niepolomice/"}
                    entryContentP1={
                        'Tym razem na reportaż ślubny zapraszam Was do Niepołomic gdzie podczas fotografowania ślubu Karoliny i Kamila odkryłem miejsce niezwykłe. Kraków słynie z <a href="http://mariacki.com/" target="_blank" rel="nofollow">Bazyliki Mariackiej</a>, czasem wspomina się o <a href="http://kolegiata-anna.pl/"  target="_blank" rel="nofollow">Uniwersyteckiej Kolegiacie Św. Anny</a> zupełnie natomiast zapominając o <a href="https://www.staniatki.pl/" target="_blank" rel="nofollow">Kościele Św. Wojciecha Biskupa i Męczennika w Staniątkach</a>. Właśnie w tym pięknym miejscu Karolina ślubowała Kamilowi miłość, wierność i uczciwość małżeńską. Cofnijmy się jednak w czasie do przygotowań, które rozpoczęły się pod okiem <a href="https://www.instagram.com/alexandradomagala/" target="_blank" rel="nofollow">Aleksandry Domagały</a>. Karolina wybrała <a href="http://www.hotelnovum.pl/" target="_blank" rel="nofollow">Hotel Novum w Niepołomicach</a> jako miejsce gdzie musiały pomieścić się kufry, pędzle i palety cieni skompletowane przez Olę. W czasie krótszym niż jedna godzina uroda Panny Młodej została perfekcyjnie podkreślona i mogliśmy odwiedzić Kamila, który czekał w gotowości by rozpocząć swoje przygotowania i piętnastoletnią whisky. Następnie wróciliśmy do domu rodzinnego Karoliny, na wspólne błogosławieństwo. Wszystkie miejsca odwiedzaliśmy wspólnie z Grześkiem i Dawidem z <a href="https://manolofilmy.pl/" target="_blank" rel="nofollow">Manolo filmy</a>. Był z nami jeszcze Filip, który pilotował drona w momentami ryzykownych warunkach.'
                    }
                    entryContentP2={
                        'Piękna ceremonia w jeszcze piękniejszym <a href="https://www.staniatki.pl/" target="_blank" rel="nofollow">Kościele Św. Wojciecha Biskupa i Męczennika w Staniątkach</a>, zdjęcie grupowe tuż po wyjściu i Para Młoda zaprosiła swoich gości weselnych do <a href="https://www.szafrantu.pl/" target="_blank" rel="nofollow">Sali Bankietowej w Restauracji Szafrantu w Niepołomicach</a>. Para młoda została przywitana chlebem i solą, przyjęła gorące życzenia gości i pierwszym tańcem otworzyła parkiet. Imprezę z radiowym zacięciem poprowadził <a href="http://tomaszjanda.pl/" target="_blank" rel="nofollow">DJ Tomasz Janda</a>. Lista atrakcji tego wieczoru była dłuższa niż zwykle. Krótki plener z wymarzonym garbusem, tort weselny, podziękowania dla rodziców wykonane popisowo i z jajem, sztuczne ognie tuż po zabawach oczepinowych. Działo się dużo i z pewnością było co fotografować. Karolino i Kamilu, dziękuję za zaufanie i zapraszam na kilka zdjęć z tego dnia. Więcej znajdziecie w strefie klienta wpisując hasło z mojej wizytówki. Serdecznie zapraszam i życzę miłego oglądania.'
                    }
                    slug={"sala-bankietowa-szafrantu-fotografia-slubna-niepolomice"}
                    title={"SALA BANKIETOWA SZAFRANTU, FOTOGRAFIA ŚLUBNA NIEPOŁOMICE - KAROLINA i KAMIL"}
                    tags={"Sala bankietowa Szafrantu, fotografia ślubna Niepołomice"}
                    date={"8 maja 2019"}
                    menuNames={"KAROLINA i KAMIL"}
                    menuTitle={"SALA BANKIETOWA SZAFRANTU, FOTOGRAFIA ŚLUBNA NIEPOŁOMICE"}
                    leadNames={"KINGA i PAWEŁ"}
                    leadTitle={"HOTEL JUNIOR SKOTNICKA, ZDJĘCIA ŚLUBNE SKAWINA"}
                    leadUrl={"/hotel-junior-skotnicka-zdjecia-slubne-skawina"}
                    leadImage={"url(/static/hotel-junior-skotnicka.jpg)"}
                />
            </div>
        );
    }
}
