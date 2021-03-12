import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sesja_slubna_pieniny.jpg",
            },
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0001.jpg", height: 762 },

            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0004.jpg", height: 567 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0003.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0007.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0032.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0012.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0021.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0017.jpg", height: 806 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0019.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0024.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0027.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0018.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0030.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/06/sesja_plenerowa_pieniny_0033.jpg", height: 762 },
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Plener ślubny Pieniny, Szczawnica, Wysoki Wierch"}
                    headDescription={"Plener ślubny Pieniny, podróż kolejką linową na Palenicę w Szczawnicy i dwie godziny spaceru niebieskim szlakiem. Serdecznie zapraszam na Wysoki Wierch."}
                    headKeywords={"sesja ślubna pieniny, wysoki wierch w pieninach, fotograf na sesje ślubną szczawnica"}
                    headUrl={"https://99foto.pl/sesja-slubna-pieniny-szczawnica-wysoki-wierch/"}
                    entryContentP1={
                        "Zbliża się długi weekend czerwcowy, więc dla wielu z nas to doskonała okazja do wyrwania się z miasta w poszukiwaniu spokoju, czystego powietrza i pięknych widoków. Sesja ślubna w Pieninach to doskonała ku temu okazja. Być może zapytacie mnie dlaczego na sesję ślubną wybraliśmy Pieniny. Miejsce to gwarantuje nam szereg pięknych krajobrazów, rozległych pasm górskich wśród których odnajdziemy wyróżniające się Trzy Korony i Sokolice. W zasięgu wzroku mamy oddaloną panoramę Tatr, świetnie zagospodarowaną promenadę w Szczawnicy, a w bliskiej odległości Przełom Białki, zamki w Czorsztynie i Niedzicy oraz wiele innych ciekawych atrakcji turystycznych. Na nasz sobotni plener ślubny w Pieninach wyruszyliśmy z Krakowa o godzinie dziesiątej rano."
                    }
                    entryContentP2={
                        "Kolej linowa Palenica w Szczawnicy pozwoliła nam w krótkim czasie dostać się na Szafranówkę. Rozpoczęliśmy wędrówkę niebieskim szlakiem, a właściwie to leśną ścieżką, pełną pięknych krajobrazów, soczystej zieleni rozświetlonej ciepłymi promieniami słońca. W oddali obserwowaliśmy Tatry, które toczyły burzliwą walkę z żywiołem. Po dwóch godzinach marszu dotarliśmy do celu naszej wędrówki, którym był szczyt górski Wysoki Wierch. Widok z tego miejsca jest z pewnością wart dwóch godzin drobnej wspinaczki. Kilka zdjęć i szybki powrót, by wystarczyło nam czasu do odwiedzenia innych ciekawych miejsc, które mieliśmy w planach. Jakie to atrakcje i miejsca zobaczcie sami oglądając krótką relację z pleneru Eweliny i Jakuba w Pieninach. Miłego oglądania."
                    }
                    slug={"sesja-slubna-pieniny-szczawnica-wysoki-wierch"}
                    title={"SESJA ŚLUBNA PIENINY, SZCZAWNICA, WYSOKI WIERCH - EWELINA i JAKUB"}
                    tags={"sesja ślubna pieniny, wysoki wierch w pieninach, fotograf na sesje ślubną szczawnica"}
                    date={"10 czerwca 2020"}
                    menuNames={"EWELINA i JAKUB"}
                    menuTitle={"SESJA ŚLUBNA PIENINY, SZCZAWNICA, WYSOKI WIERCH"}
                    leadNames={"PATRYCJA i KRZYSZTOF"}
                    leadTitle={"PLENER ŚLUBNY NA RYNKU W KRAKOWIE"}
                    leadUrl={"/plener-slubny-na-rynku-w-krakowie"}
                    leadImage={"url(/static//plener_slubny_na_rynku_w_krakowie.jpg)"}
                />
            </div>
        );
    }
}
