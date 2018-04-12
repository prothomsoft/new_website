import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/hotel_margerita_krakow_magiczny_wystroj_sali_weselnej_w_krakowie-start.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0001.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0003.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0002.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0004.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0005.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0009.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0006.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0008.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0007.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0010.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0011.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0012.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0013.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0014.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0015.jpg", height: 527 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Hotel Margerita Kraków, magiczny wystrój sali weselnej, ślub w Krakowie"}
                    headDescription={
                        "Hotel Margerita położony na trasie z Krakowa do Olkusza to świetne miejsce na ślub. Magiczny wystrój sali weselnej, który zachwyci Waszych gości. Zapraszam na reportaż ślubny Natalii i Piotra."
                    }
                    headKeywords={"Hotel Margerita Kraków, magiczny wystrój sali weselnej, ślub w Krakowie"}
                    headUrl={"http://99foto.pl/hotel_margerita_krakow_magiczny_wystroj_sali_weselnej_w_krakowie/"}
                    entryContentP1={
                        'Sobotnie przedpołudnie i bardzo słoneczny dzień rozpoczęliśmy razem ze świadkiem i jak się chwilę później okazało specjalistą od oświetlenia Round Flashem Łukaszem w Jerzmanowicach, fotografując przygotowania Piotra. Piękny ogród i rozłożyste drzewa wzdłóż podjazdu, wymarzone warunki by zamieszkać spokojnie zdala od miejskiego zgiełku i delektować się spokojem po pracy w sąsiedztwie Ojcowskiego Parku Narodowego. Mama Piotra przygotowała dla nas kawkę, a Tato okazał się być pasjonatem fotografii, więc trochę porozmawialiśmy o Smienach, Zenitach, powiększalnikach, koreksach i takich tam. Łukasz podszedł do tematu analitycznie, dopasował ilość żelu na włosach, ilość pasty na butach Piotra, powpinał spinki do mankietów i zapiął bordową muchę. Gdy wszystko było już gotowe czekał nas powrót do Krakowa na przygotowania Natalii. Makijaż odbył się w samym centum naszego pięknego miasta w <a href="https://www.facebook.com/Glamour-Hair-Studio-Studio-fryzur-i-kosmetyki-124677987586758/Glamour" target="_blank">Salonie Hair & Beauty Studio</a> Luizy Borkowskiej.  Podczas gdy Luiza wykonała świetny i profesjonalny makijaż, Łukasz dzielnie asystował, a dziewczyny kombinowały coś z brwiami na fotelu obok.'
                    }
                    entryContentP2={
                        'Gdy makijaż był gotowy udaliśmy się do domu Natalii, gdzie kuzynka, a w tym wyjątkowym dniu druhna Magda pomagała w przygotowaniach. Nieprzypadkowo powieszony welon i świetnie urządzone mieszkanie w kolorze blue, piękna Natalia i Magda, promienie słońca wpadające świetlikiem były gwarancją niesamowitych zdjęć. Gdy zebrali się już wszyscy zaproszeni goście Tato Natalii wykorzystał jedyną w swoim życiu okazję na krótkie przemówienie po którym odbyło się błogosławieństwo.  Ceremonia odbyła się w <a href="http://www.biezanow.diecezja-krakow.pl/">Kościele Narodzenia NMP</a> znajdującym się w Krakowskim Starym Bieżanowie. Ambona zapełniała się kolejnymi prelegentami, wśrod których brylował Łukasz (tak to słowo tu pasuje). Przysłuchując się dźwiękom dobiegającym z chóru można było usłyszeć pięknie brzmiące skrzypce. Po zdjęciu grupowym Para Młoda zaprosiła gości do <a href="http://www.margerita.pl/" target="_blank">Hotelu, Restauracji Margerita</a>. Magiczny wystrój sali mocno przypadł do gustu gościom weselnym. Odbyły się życzenia, pierwszy taniec w chmurach ktore zorganizował <a href="https://www.facebook.com/DJ4U-Piotr-P%C5%82awski-466649040058113/" target="_blank">DJ Piotr</a>, kolejne atrakcje to fotobudka z gadżetami, pociąg, podziękowania dla rodziców, pyszny tort i oczywiście zabawy oczepinowe. Na filmie imprezę uwieczniał <a href="https://www.facebook.com/yurievfilm/" target="_blank">Serhij Juriev ze Stylowe Wesele</a>, który był niekwestionowanym mistrzem odnajdywania idealnego światła. Niesamowity dzień, spędzony w wybornym towarzystwie. Natalio i Piotrze cieszę się bardzo, że mogłem być tam z Wami w tych najważniejszych chwilach Waszego życia. Zapraszam do oglądania wybranych zdjęć. Po więcej zapraszam do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"hotel_margerita_krakow_magiczny_wystroj_sali_weselnej_w_krakowie"}
                    title={"HOTEL MARGERITA, MAGICZNY WYSTRÓJ SALI WESELNEJ W KRAKOWIE - NATALIA i PIOTR"}
                    tags={"Hotel Margerita Kraków, magiczny wystrój sali weselnej, ślub w Krakowie"}
                    date={"12 kwietnia 2018"}
                    menuNames={"NATALIA i PIOTR"}
                    menuTitle={"HOTEL MARGERITA, MAGICZNY WYSTRÓJ SALI WESELNEJ W KRAKOWIE"}
                    leadNames={"JOANNA i GRZEGORZ"}
                    leadTitle={"WESELE NA POLU GOLFOWYM W PACZÓŁTOWICACH"}
                    leadUrl={"/wesele-na-polu-golfowym-w-paczoltowicach"}
                    leadImage={"url(/static/wesele_na_polu_golfowym_w_paczoltowicach_start.jpg)"}
                />
            </div>
        );
    }
}
