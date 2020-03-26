import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/zamek_moszna_sesja_slubna.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0021.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0002.jpg", height: 851 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0001.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0005.jpg", height: 527 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0006.jpg", height: 850 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0020.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0016.jpg", height: 850 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0010.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0011.jpg", height: 850 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0012.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0013.jpg", height: 852 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0007.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0014.jpg", height: 850 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0008.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0017.jpg", height: 850 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0004.jpg", height: 527 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0009.jpg", height: 850 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0003.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0019.jpg", height: 850 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/08/zamek_moszna_sesja_fotograficzna_zdjecia_slubne_0015.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Zamek Moszna, plenerowa sesja fotograficzna, zdjęcia ślubne w pałacu"}
                    headDescription={"Zamek Moszna, plenerowa ślubna sesja zdjęciowa Aleksandry i Grzegorza. Pałac z przepięknym ogrodem często wybierany na sesje ślubne. Zapraszam do oglądania."}
                    headKeywords={"zamek moszna, plenerowa sesja fotograficzna, zdjęcia ślubne w pałacu"}
                    headUrl={"http://wp.99foto.pl/zamek-moszna-plenerowa-sesja-fotograficzna-w-palacu/"}
                    entryContentP1={
                        'Wiedziałem, że to kwestia czasu... i pewnego dnia, <a href="https://www.moszna-zamek.pl/" target="_blank" rel="nofollow">Zamek Moszna</a> mocno znany z nazwy miejscowości w której powstał trafi do mojego portfolio. Nie było to do końca oczywiste tylko i wyłącznie ze względu na odległość do pokonania pomiędzy Krakowem, a bardzo popularną pałacową miejscówką na sesję ślubną. Dwa lata temu wracając z rodzinnych wakacji w Górach Stołowych, było nam bardzo blisko i po drodze by odwiedzić ten zamek, ale niestety deszcz zmienił nasze plany. Pamiętacie? Sesje plenerowe są raz w życiu i są między innymi po to, by z ich pomocą spełniać marzenia.'
                    }
                    entryContentP2={
                        'Pamiętali o tym również Ola i Grzegorz, którzy spośród kilku okolicznych zamków i pałaców wybrali ten najmniej okoliczny, ale najwspanialszy - Zamek w Mosznej. Zastanawialiśmy się również nad opuszczonym <a href="https://www.facebook.com/palackrowiarki/" target="_blank" rel="nofollow">Pałacu w Krowiarkach</a>, czy Pałacu Goetza, który znajdziecie w moim poprzednim pałacowym wpisie na blogu. Pogodę mieliśmy świetną, zamkowa cisza i spokój została delikatnie zaburzona przez cztery inne pary, które w tym samym czasie plenerowały, spełniając swoje marzenia. Cóż więcej mogę rzec - fryzura i makijaż Oli były równie perfekcyjny jak w dniu ślubu i morze tematów, które poruszyliśmy tego dnia z Grześkiem, było niemierzalne. Zapraszam na zdjęcia i życzę miłego oglądania.'
                    }
                    slug={"zamek-moszna-plenerowa-sesja-fotograficzna-w-palacu"}
                    title={"ZAMEK MOSZNA, SESJA FOTOGRAFICZNA W PAŁACU - ALEKSANDRA i GRZEGORZ"}
                    tags={"zamek moszna, plenerowa sesja fotograficzna, zdjęcia ślubne w pałacu"}
                    date={"29 lipca 2018"}
                    menuNames={"ALEKSANDRA i GRZEGORZ"}
                    menuTitle={"ZAMEK MOSZNA, SESJA FOTOGRAFICZNA W PAŁACU"}
                    leadNames={"DAJANA i SYLWESTER"}
                    leadTitle={"OGRÓD BOTANICZNY W KRAKOWIE, ŚLUBNA SESJA ZDJĘCIOWA W OGRODZIE"}
                    leadUrl={"/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa"}
                    leadImage={"url(/static/ogrod_botaniczny.jpg)"}
                />
            </div>
        );
    }
}
