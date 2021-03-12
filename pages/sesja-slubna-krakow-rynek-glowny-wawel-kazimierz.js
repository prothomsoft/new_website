import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sesja-slubna-krakow-rynek-glowny-wawel-kazimierz-start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0002.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0003.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0005.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0006.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0007.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0016.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0010.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0012.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0017.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0018.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0022.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0025.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/04/sesja_slubna_krakow_0021.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sesja ślubna Kraków, Rynek Główny, Wawel, Kazimierz"}
                    headDescription={
                        "Piękny Kraków, piękna Katrina i dla równowagi Chan i ja. Taką kompozycje fifty/fifty możecie zobaczyć dzisiaj na moim blogu. Serdecznie zapraszam na sesje plenerowe i sesje ślubne w Krakowie. Kazimierz i Rynek Główny sprawdzają się świetnie."
                    }
                    headKeywords={"Sesja ślubna Kraków, zdjęcia ślubne na Kazimierzu, plener na Rynku w Krakowie"}
                    headUrl={"https://99foto.pl/sesja-slubna-krakow-rynek-glowny-wawel-kazimierz/"}
                    entryContentP1={
                        "Chan i Katrina postanowili przebyć szmat drogi by zrealizować swoje marzenie, sesję zdjęciową w jednym z najpiękniejszych miast europejskich jakim jest Kraków. Wcześniej odwiedzili Austrię, a w Krakowie podczas czterodniowego pobytu mieli okazję zwiedzić Kopalnie Soli w Wieliczce i Obóz Koncentracyjny Auschwitz-Birkenau w Oświęcimiu. Krakowski Rynek, Zamek Królewski na Wawelu i zakamarki Kazimierza mieli okazję odkrywać ze mną na zaplanowanej już rok wcześniej sesji ślubnej w Krakowie."
                    }
                    entryContentP2={
                        "Tym razem na moim blogu miejsca znajome, starannie wyselekcjonowane, które zbierałem latami biegając z parami młodymi po naszym pięknym mieście oraz dla nas bardzo egzotyczna para, piękna Katrina i Chan. Świetnie trafiliśmy z pogodą i myślę, że dzięki tej mini wyprawie, przyszli Państwo Chi Hang będą mieli tylko dobre wspomnienia związane z Krakowem. Kilka zdań wstępu napisane, więc teraz serdecznie zapraszam do oglądania zdjęć. Warto spełniać marzenia !!!"
                    }
                    slug={"sesja-slubna-krakow-rynek-glowny-wawel-kazimierz"}
                    title={"SESJA ŚLUBNA KRAKÓW, RYNEK GŁÓWNY, WAWEL, KAZIMIERZ - CHAN i KATRINA"}
                    tags={"Sesja ślubna Kraków, zdjęcia ślubne na Kazimierzu, plener na Rynku w Krakowie"}
                    date={"4 kwietnia 2018"}
                    menuNames={"CHAN i KATRINA"}
                    menuTitle={"SESJA ŚLUBNA KRAKÓW, RYNEK GŁÓWNY, WAWEL, KAZIMIERZ"}
                    leadNames={"EWELINA i KAMIL"}
                    leadTitle={"HOTEL TADEUSZ USZEW i GÓRALSKA SALA WESELNA"}
                    leadUrl={"/hotel-tadeusz-uszew-i-goralska-sala-weselna"}
                    leadImage={"url(/static/hotel_tadeusz_uszew_i_goralska_sala_weselna_start.jpg)"}
                />
            </div>
        );
    }
}
