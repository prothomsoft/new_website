import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: process.env.staticImagesPath + "fotograf_na_slub_rabka_zdroj_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0006.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0005.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0010.jpg", height: 566 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0003.jpg", height: 526 },  
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0008.jpg", height: 566 },       
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0007.jpg", height: 763 },           
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0009.jpg", height: 594 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0002.jpg", height: 526 },         
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0011.jpg", height: 762 }, 
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0013.jpg", height: 526 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0014.jpg", height: 527 },         
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0016.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0023.jpg", height: 763 },    
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0019.jpg", height: 805 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0021.jpg", height: 458 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0022.jpg", height: 763 },        
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0024.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0018.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0025.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0026.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0027.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0028.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0030.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0031.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0032.jpg", height: 682 },           
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0033.jpg", height: 566 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0037.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0038.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0042.jpg", height: 762 },            
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0040.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0041.jpg", height: 763 },          
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0050.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0045.jpg", height: 763 },        
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0055.jpg", height: 382 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0057.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0058.jpg", height: 850 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0065.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0064.jpg", height: 763 }, 
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0067.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0068.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0073.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0074.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0077.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0079.jpg", height: 487 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0080.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0082.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0081.jpg", height: 527 },     
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0084.jpg", height: 763 },      
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0083.jpg", height: 527 },          
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0086.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0087.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0088.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0091.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0092.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0093.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0095.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0097.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0099.jpg", height: 526 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0102.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0100.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0103.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0101.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0106.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0108.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0110.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0113.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0115.jpg", height: 383 },           
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0117.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0120.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0122.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0125.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0124.jpg", height: 763 },           
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0126.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0128.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0130.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0132.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0133.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0134.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0137.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0136.jpg", height: 763 },           
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0138.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0140.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0142.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0145.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0147.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0148.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0149.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0152.jpg", height: 763 },    
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0150.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0146.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0158.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0159.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0156.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0160.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0163.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0164.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0155.jpg", height: 383 },  
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0153.jpg", height: 763 },           
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0154.jpg", height: 382 },        
            { imageSrc: "/static/blog/2021/07/fotograf_na_slub_rabka_zdroj_0157.jpg", height: 763 }                 
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Fotograf na wesele Rabka Zdrój, Kościół św. Marii Magdaleny"}
                    headDescription={"Gotycki przepiękny Kościół św. Marii Magdaleny, zabawa weselna w sali Kabanos w Spytkowicah i fotograf na wesele. Reportaż ze ślubu Kamili i Adriana. Zapraszam na bloga i do oglądania."}
                    headKeywords={"fotograf na wesele Rabka Zdrój, kościół św. Marii Magdaleny w Rabce, sala weselna Kabanos w Spytkowicach"}
                    headUrl={"https://99foto.pl/fotograf-na-wesele-rabka-zdroj-kosciol-sw-marii-magdaleny/"}
                    entryContentP1={
                        'Wasz ślub jest zaplanowany, macie doskonały zespół, który porwie gości weselnych do tańca, macie sale weselną w stylu, który chodził Wam po głowie od dłuższego czasu. Idealnie byłoby gdyby te wszytkie elementy, momenty wzruszenia, uśmiechy i łzy radości pozostały nie tylko w Waszej pamięci ale również w pięknym ponadczasowym albumie ślubnym. Wszyscy wiemy, że nawet po wielu latach zdjęcia potrafią wzbudzić podobne uczucia, jakie towarzyszyły Wam tego ważnego dnia. Odpowiedź na pytanie jak to zrobić w dobie internetu nie jest trudna. Wystarczy przeglądarka internetowa i wpisanie frazy najlepszy fotograf ślubny w Krakowie, Rabce Zdrój czy w dowolnym innym miejscu. Przeglądając wyniki wyszukań warto zwrócić uwagę na styl fotografa ślubnego, ponieważ zwykle jest on powtarzalny i zależny od używanego sprzętu, osobowości, zaangażowania i oka do kadru. Koniecznie zwróćcie też uwagę na jakość zdjęć, czyli ich poprawność techniczną pod kątem ekspozycji, kontrastu i kolorów. Ważne jest też umiejętne wychwycenie istotnych elementów, detali, ulotnych chwil, zwanych w żargonie fotograficznym momentem decydującym i ułożenie ich w opowiadanie, które w ciekawy i niestandardowy sposób zrelacjonuje przebieg zdarzeń dnia Waszego ślubu. Ponieważ fotograf ślubny to osoba, która spędzi z Wami niemal cały dzień, będzie obecny w chwilach prywatnych, pełnych wzruszeń i przeżyć istotne jest więc, żeby czuć się przy nim swobodnie. Dobrze jest skorzystać z polecenia znajomych, którzy poznali charakter i osobowość fotografa podczas ich własnego reportażu ślubnego, czasem warto wybrać się na sesję narzeczeńską i na niej sprawdzić, czy to jest "the perfect guy for the job". Na koniec koniecznie sprawdźcie też ilość oddawanych zdjęć, możliwość realizacji profesjonalnego albumu fotograficznego, pleneru w wybranym dniu po ślubie i ceny, która nie powinna przekroczyć wpływu z kopertowych ;)'
                    }
                    entryContentP2={
                        'Garść złotych rad dotyczących wyboru najlepszego fotografa ślubnego mamy już za sobą więc wróćmy na ślub Kamili i Adriana. Październik 2017 roku, jeden dom dalej w najbliźszym sąsiedztwie w Rabce Zdrój fotografowałem ślub Iwony i Marcina, który wciąż możecie znaleźć na moim <a href="https://www.99foto.pl/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice" target="_blank" rel="nofollow">blogu</a> i no cóż, powspominać. Wiedziałem, że sala weselna potocznie zwana <a href="http://przystanwkabanosie.pl/pl/page/6/Restauracja_Spytkowice/" target="_blank" rel="nofollow">Kabanosem w Spytkowicach</a>, rodzina i przyjaciele, którzy potrafią się bawić jak nikt inny, <a href="https://www.music-man.com/instruments/guitars/the-majesty" target="_blank" rel="nofollow">Music Many Majesty</a> Sławka rozgrzeją <a href="https://www.youtube.com/watch?v=2JbnG2vZN-Y" target="_blank" rel="nofollow"/>okręt, który płynie dalej</a> do czerwoności. Gdyby ktoś się martwił, że może będzie zbyt ciemno, albo zbyt mało wystrzałowo, no worries - <a href="https://www.facebook.com/Camelot-Sound-684274261607681/" target="_blank" rel="nofollow">Camelot</a> i tona sprzętu na parkiecie zrobiły robotę. <a href="https://www.facebook.com/filmywparzezfotografia" target="_blank" rel="nofollow">Filmy w parze z fotografią</a> czyli niezastąpieni Sandra i Patryk, od zawsze para, a już niedługo para forever, nie pozwolili umknąć nawet sekundzie wydarzeń z przygotowań, ślubu i zabawy weselnej. Pierwszy raz fotografowałem w <a href="http://parafia.rabka.swmm.eu/" target="_blank" rel="nofollow">Kościele św. Marii Magdaleny w Rabce Zdroju</a>. Neogotycka architektura, świetne oświetlenie i niesmowite kolory, kilkuosobowy chór na chórze definitywnie postawiły kropkę nad i. TATA "Very Important Person" wprowadzający Kamilę do kościoła, w takiej oprawie to kadr marzenie dla wielu fotografów i znalezienie się w odpowiednim czasie w miejscu, które pozwala wyzwolić migawkę i złapać ten moment doskonale definiuje cel kilkuletniej pracy fotografa ślubnego. Dodam, że pewnie każdy tak jak i ja chciałby mieć takie zdjęcie w swojej kolekcji rodzinnych wspomnień. Serdecznie dziękuję Kamili i Adrianowi za zaufanie i świetną atmosferę podczas całego dnia śłubu, a wszystkich gości weselnych, rodzinę bliższą i dalszą, znajomych i przyjaciół zapraszam na zdjęcia na blogu i po więcej do strefy klienta. Życzę miłego dnia i miłego oglądania.'
                    }
                    slug={"fotograf-na-wesele-rabka-zdroj-kosciol-sw-marii-magdaleny"}
                    title={"FOTOGRAF NA WESELE RABKA ZDRÓJ, KOŚCIÓŁ ŚW. MARII MAGDALENY - KAMILA i ADRIAN"}
                    tags={"fotograf na wesele Rabka Zdrój, kościół św. Marii Magdaleny w Rabce, sala weselna Kabanos w Spytkowicach"}
                    date={"8 lipca 2021"}
                    menuNames={"KAMILA i ADRIAN"}
                    menuTitle={"FOTOGRAF NA WESELE RABKA ZDRÓJ, KOŚCIÓŁ ŚW. MARII MAGDALENY"}
                    leadNames={"SYLWIA i MICHAŁ"}
                    leadTitle={"WESELE W STYLU BOHO, SALA DWORZYSZCZE WOLA, KRAKÓW"}
                    leadUrl={"/wesele-w-stylu-boho-sala-dworzyszcze-wola-krakow"}
                    leadImage={"url(" + process.env.staticImagesPath + "dworzyszcze_wola_reportaz_slubny_pod_krakowem_start.jpg)"}
                />
            </div>
        );
    }
}
