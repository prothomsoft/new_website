import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/ogrod_botaniczny.jpg"
            }
        ];

        let images = [
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0002.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0004.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0006.jpg", height: 851 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0009.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0011.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0012.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0014.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0015.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0016.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0018.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0026.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/ogrod_botaniczny_w_krakowie_sesja_zdjeciowa_0024.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Ogród Botaniczny w Krakowie, ślubna sesja zdjęciowa Kraków"}
                    headDescription={"Ogród Botaniczny w Krakowie, ślubna sesja zdjęciowa Dajany i Sylwestra. Sierpniowe słońce i ogrom emocji. Na sesje tylko Kraków. Zapraszam do oglądania."}
                    headKeywords={"Ogród Botaniczny w Krakowie, ślubna sesja zdjęciowa Kraków, plener ślubny w dzień po ślubie"}
                    headUrl={"https://99foto.pl/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa/"}
                    entryContentP1={
                        "Sierpień to miesiąc magiczny, zachodzące słońce, którego ostatnio nam wszystkim nie brakuje z każdego miejsca na ziemi z łatwością tworzy niezapomniane obrazki. W jeden z takich idealnie upolowanych dni spotkaliśmy się z Dajaną i Sylwestrem na ślubnej sesji zdjęciowej w Ogrodzie Botanicznym w Krakowie. Miejsce to odwiedzam systematycznie, nie tylko z parami, którym robię zdjęcia plenerowe, ale również z Michałem, Martą i Jackiem moimi dzieciakami, które uwielbiają spacerować po pełnych zieleni alejkach. A to wszystko w sercu naszego pięknego miasta Krakowa. Ogród Botaniczny przechodzi gruntowne mega pozytywne zmiany i widać ogromny postęp w dbałości o szczegóły, gdy porównamy je do stanu obiektów Ogrodu Botanicznego sprzed dwóch lat."
                    }
                    entryContentP2={
                        'Oczywiście nie mogło być za łatwo i na nasz plener nie udało się nam umówić za pierwszym razem. Ale wiadomo, że do trzech razy sztuka, w końcu udało się i mam nadzieję, że znajdziecie chwilkę na oglądnięcie zdjęć. Nie chcę się powtarzać, ale czasem nie warto pokonywać niezliczonej ilości kilometrów, gdy miejsce gwarantujące świetne zdjęcia znajduje się pod naszym nosem. Nominuję więc <a href="https://www.ogrod.uj.edu.pl/" target="_blank" rel="nofollow">Ogród Botaniczny w Krakowie</a> na miejsce numer jeden na sierpniowy plener ślubny. Zapraszam na zdjęcia i życzę miłego oglądania.'
                    }
                    slug={"ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa"}
                    title={"OGRÓD BOTANICZNY W KRAKOWIE, ŚLUBNA SESJA ZDJĘCIOWA - DAJANA i SYLWESTER"}
                    tags={"Ogród Botaniczny w Krakowie, ślubna sesja zdjęciowa Kraków, plener ślubny w dzień po ślubie"}
                    date={"23 sierpnia 2018"}
                    menuNames={"DAJANA i SYLWESTER"}
                    menuTitle={"OGRÓD BOTANICZNY W KRAKOWIE, ŚLUBNA SESJA ZDJĘCIOWA"}
                    leadNames={"MARTA i MARCIN"}
                    leadTitle={"WESELE POD KRAKOWEM, FIRST LOOK NA DACHU WIEŻOWCA"}
                    leadUrl={"/tiffany-wola-filipowska-first-look-na-dachu-wiezowca"}
                    leadImage={"url(/static/restauracja_tiffany_wola_filpowska.jpg)"}
                />
            </div>
        );
    }
}
