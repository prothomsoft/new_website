import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/slub_zima.jpg"
            }
        ];

        let images = [
        { imageSrc: "/static/blog/2019/02/slub_zima_0001.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0010.jpg", height: 806 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0004.jpg", height: 763 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0002.jpg", height: 763 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0012.jpg", height: 763 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0003.jpg", height: 806 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0007.jpg", height: 763 },                
        { imageSrc: "/static/blog/2019/02/slub_zima_0011.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0006.jpg", height: 527 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0005.jpg", height: 763 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0009.jpg", height: 763 },                        
        { imageSrc: "/static/blog/2019/02/slub_zima_0008.jpg", height: 762 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0014.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0015.jpg", height: 527 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0016.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0017.jpg", height: 566 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0019.jpg", height: 527 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0020.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0018.jpg", height: 527 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0021.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0022.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0024.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0023.jpg", height: 763 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0027.jpg", height: 527 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0026.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0028.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0025.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0029.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0030.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0031.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0032.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0033.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0034.jpg", height: 527 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0035.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0036.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0037.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0038.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0042.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0039.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0040.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0041.jpg", height: 527 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0043.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0044.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0045.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0046.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0047.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0049.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0048.jpg", height: 763 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0050.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0051.jpg", height: 850 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0052.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0053.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0054.jpg", height: 763 },                
        { imageSrc: "/static/blog/2019/02/slub_zima_0057.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0058.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0059.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0060.jpg", height: 526 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0061.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0062.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0063.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0064.jpg", height: 762 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0065.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0066.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0067.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0068.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0069.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0070.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0071.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0072.jpg", height: 850 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0073.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0074.jpg", height: 566 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0075.jpg", height: 382 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0076.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0077.jpg", height: 762 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0078.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0079.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0080.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0081.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0082.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0083.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0084.jpg", height: 762 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0086.jpg", height: 382 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0085.jpg", height: 763 },     
        { imageSrc: "/static/blog/2019/02/slub_zima_0087.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0089.jpg", height: 850 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0088.jpg", height: 763 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0090.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0091.jpg", height: 762 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0092.jpg", height: 382 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0093.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0094.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0095.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0096.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0097.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0098.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0099.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0100.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0101.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0102.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0103.jpg", height: 851 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0104.jpg", height: 382 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0105.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0106.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0107.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0108.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0109.jpg", height: 762 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0111.jpg", height: 762 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0112.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0113.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0114.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0115.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0116.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0117.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0118.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0119.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0110.jpg", height: 763 }];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Jak zaplanować i zorganizować wymarzony ślub w zimie"}
                    headDescription={"Odpowiedzi na pytania jak zaplanować ślub w zimie i jak taki wymarzony ślub zorganizować znajdziesz zaglądając na bloga. Zimowy ślub Marty i Michała. Zapraszam."}
                    headKeywords={"zdjecia slubne zima, zimowa suknia ślubna, zimowe dekoracje weselne, ślub w lutym"}
                    headUrl={"https://99foto.pl/jak-zaplanowac-i-zorganizowac-wymarzony-slub-w-zimie/"}
                    entryContentP1={
                        'Perfekcyjnie zorganizowany ślub Marty i Michała, który miałem przyjemność fotografować w ubiegłą sobotę w miejscu dość odległym od Krakowa zainspirował mnie do zanotowania kilku spostrzeżeń w temacie jak zaplanować ślub w zimie i jak taki wymarzony ślub zorganizować. Obserwując branże ślubną w Polsce zauważymy, że ślub w styczniu czy też ślub w lutym nie jest już niczym niezwykłym. Rosnąca liczba nowożeńców, którzy chcą powiedzieć sakramentalne "TAK" korzystając z zimowej i świątecznej aury coraz częściej powoduje konieczność organizacji ślubów nawet w miesiącu grudniu. Ślub Marty i Michała jako jeden z wielu udowadnia, że ślub zimą odpowiednio przygotowany może być fantastycznym przeżyciem, którego oprawę tworzą pełne świątecznych ozdób i ciepłych światełek choinki, biały puszysty śnieg, sople lodu mieniące się w słońcu tysiącem kolorów, a nawet mróz który maluje policzki zaproszonych gości.'
                    }
                    entryContentP2={
                        "Długo można wymieniać argumenty, które powinny przekonać każdego z Was do organizacji wymarzonego ślubu w zimie. Będą to oszczędności w Waszej kieszeni, bo przecież sala, zespół i fotograf oferują swoje usługi w znacznie niższych cenach. Kilka kresek poniżej zera pomoże zatrzymać gości weselnych na parkiecie i skrócić czas przerw na papieroska. Nie bez znaczenia jest też możliwość zorganizowania ekstra atrakcji takich jak ognisko w lesie, kulig saniami czy też sztuczne ognie - takie tam odniesienie do góralskich klimatów. Pozostają jeszcze pytania z cyklu - wesele zimą jak mam się ubrać? Otóż planując stylizacje na wesele zimą Pan Młody nie powinien zapomnieć o płaszczu,  który mogłyby być wełniany do kolan i oczywiście odpowiednio ciepłych butach. Podobne wymagania obowiązują podczas zimowych plenerów ślubnych. Sukienka na zimowe wesele to również długi temat, który z uwagi na jego złożoność pozostawię bez odpowiedzi. Warto na pewno pomyśleć o bolerku ślubnym na zimę i parze szpilek na zmianę, szpilek w których będziecie mogły przetańczyć całą noc.  Nie zapomnijcie też zadbać o zimowy wystrój sali weselnej, pamiętajcie o bukietach z kolorowych kwiatów i unikalnych dekoracjach na stołach przy których będą się bawić Wasi gości. Mam nadzieję, że Was przekonałem i spotkamy się na zimowym ślubie już w nadchodzącym sezonie. Tymczasem zapraszam do obejrzenia kilku zdjęć z zimowego ślubu Marty i Michała. Miłego oglądania."
                    }
                    slug={"jak-zaplanowac-i-zorganizowac-wymarzony-slub-w-zimie"}
                    title={"JAK ZAPLANOWAĆ I ZORGANIZOWAĆ WYMARZONY ŚLUB W ZIMIE - MARTA i MICHAŁ"}
                    tags={"zdjecia slubne zima, zimowa suknia ślubna, zimowe dekoracje weselne, ślub w lutym"}
                    date={"6 lutego 2019"}
                    menuNames={"MARTA i MICHAŁ"}
                    menuTitle={"JAK ZAPLANOWAĆ I ZORGANIZOWAĆ WYMARZONY ŚLUB W ZIMIE"}
                    leadNames={"NATALIA i ŁUKASZ"}
                    leadTitle={"POMYSŁ NA SESJĘ ZIMOWĄ W KRAKOWIE - DWÓR JANA MATEJKI"}
                    leadUrl={"/pomysl-na-sesje-zimowa-w-krakowie-dwor-jana-matejki"}
                    leadImage={"url(/static/pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg)"}
                />
            </div>
        );
    }
}
