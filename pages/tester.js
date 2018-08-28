import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/zamek_moszna_sesja_slubna.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0021.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0002.jpg", height: 851 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0001.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0005.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0006.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0020.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0016.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0010.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0011.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0012.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0013.jpg", height: 852 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0007.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0014.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0008.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0017.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0004.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0009.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0003.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0019.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0015.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Ogród Botaniczny w Krakowie, ślubna sesja zdjęciowa Kraków"}
                    headDescription={"Ogród Botaniczny w Krakowie, ślubna sesja zdjęciowa Dajany i Sylwestra. Sierpniowe słońce i ogrom emocji. Na sesje tylko Kraków. Zapraszam do oglądania."}
                    headKeywords={"pOgród Botaniczny w Krakowie, ślubna sesja zdjęciowa Kraków, plener ślubny w dzień po ślubie"}
                    headUrl={"http://99foto.pl/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa/"}
                    entryContentP1={
                        'Wiedziałem, że to kwestia czasu... i pewnego dnia, <a href="http://www.moszna-zamek.pl/" target="_blank">Zamek Moszna</a> mocno znany z dwuznacznej nazwy miejscowości w której powstał trafi do mojego portfolio. Nie było to do końca oczywiste tylko i wyłącznie ze względu na odległość do pokonania pomiędzy Krakowem, a bardzo popularną pałacową miejscówką na sesję ślubną. Kiedyś wracając z wakacji z Górach Stołowych, było blisko i po drodze, ale ten ostatni dzień był zbyt deszczowy.  Ale pamiętacie, sesje plenerowe są raz w życiu i są między innymi po to, by z ich pomocą spełniać marzenia.'
                    }
                    entryContentP2={
                        'Pamiętali o tym również Ola i Grzegorz, którzy spośród kilku okolicznych zamków i pałaców wybrali ten najmniej okoliczny, ale najwspanialszy - Zamek w Mosznej. Zastanawialiśmy się również nad opuszczonym <a href="https://www.facebook.com/palackrowiarki/" target="_blank">Pałacu w Krowiarkach</a>, czy Pałacu Goetza, który znajdziecie w moim poprzednim pałacowym wpisie na blogu. Pogodę mieliśmy świetną, zamkowa cisza i spokój została delikatnie zaburzona przez cztery inne pary, które w tym samym czasie plenerowały, spełniając swoje marzenia. Fryzura i makijaż Oli równie perfekcyjny jak w dniu ślubu i morze tematów, które poruszyliśmy tego dnia z Grześkiem. Zapraszam na zdjęcia i życzę miłego oglądania.'
                    }
                    slug={"ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa"}
                    title={"OGRÓD BOTANICZNY W KRAKOWIE, ŚLUBNA SESJA ZDJĘCIOWA - DAJANA i SYLWESTER"}
                    tags={"pałac goetz, pałac goetza brzesko, ślubna sesja zdjęcia, sala ślubna pałac goetz, wesele pod krakowem"}
                    date={"19 sierpnia 2018"}
                    menuNames={"ALEKSANDRA i GRZEGORZ"}
                    menuTitle={"ZAMEK MOSZNA, ŚLUBNA PLENEROWA SESJA FOTOGRAFICZNA"}
                    leadNames={"MARTA i MARCIN"}
                    leadTitle={"WESELE POD KRAKOWEM, FIRST LOOK NA DACHU WIEŻOWCA"}
                    leadUrl={"/tiffany-wola-filipowska-first-look-na-dachu-wiezowca"}
                    leadImage={"url(/static/restauracja_tiffany_wola_filpowska.jpg)"}
                />
            </div>
        );
    }
}
