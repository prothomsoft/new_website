import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: process.env.staticImagesPath + "dworzyszcze_wola_reportaz_slubny_pod_krakowem_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0001.jpg", height: 526 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0002.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0003.jpg", height: 566 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0006.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0005.jpg", height: 763 },          
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0007.jpg", height: 566 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0008.jpg", height: 506 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0010.jpg", height: 506 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0011.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0013.jpg", height: 526 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0014.jpg", height: 850 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0015.jpg", height: 527 },         
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0016.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0018.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0020.jpg", height: 390 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0021.jpg", height: 558 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0023.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0022.jpg", height: 523 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0025.jpg", height: 852 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0027.jpg", height: 383 },  
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0028.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0030.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0032.jpg", height: 763 }, 
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0031.jpg", height: 763 },          
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0038.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0049.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0054.jpg", height: 383 },         
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0058.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0061.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0062.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0063.jpg", height: 850 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0065.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0068.jpg", height: 806 },          
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0069.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0072.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0074.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0075.jpg", height: 566 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0076.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0077.jpg", height: 763 },           
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0079.jpg", height: 730 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0081.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0082.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0084.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0085.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0086.jpg", height: 382 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0087.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0088.jpg", height: 382 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0089.jpg", height: 735 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0090.jpg", height: 526 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0093.jpg", height: 864 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0095.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0097.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0098.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0099.jpg", height: 851 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0102.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0103.jpg", height: 763 },        
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0105.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0104.jpg", height: 382 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0115.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0116.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0120.jpg", height: 850 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0123.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0124.jpg", height: 526 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0128.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0131.jpg", height: 382 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0132.jpg", height: 382 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0133.jpg", height: 763 },          
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0136.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0138.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0141.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0140.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0139.jpg", height: 763 }, 
            { imageSrc: "/static/blog/2021/06/dworzyszcze_wola_reportaz_slubny_pod_krakowem_0142.jpg", height: 763 }
                 
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Wesele w stylu boho, sala Dworzyszcze Wola, Kraków"}
                    headDescription={"Sala weselna Dworzyszcze Wola, Kraków, wesele w stylu boho Sylwii i Michała. Wymarzone wesele w stylu rustykalnym blisko Krakowa. Zapraszam do oglądania."}
                    headKeywords={"wesele w stylu boho, wesele w stodole, ślub w klimacie rustykalnym"}
                    headUrl={"https://99foto.pl/wesele-w-stylu-boho-sala-dworzyszcze-wola-krakow/"}
                    entryContentP1={
                        'Francuskie "bohème" tłumaczone na język polski jako "cyganeria" stanowi zalążek etymologiczny słowa i stylu "boho". Tym samym styl ten reprezentuje swobodę, nonszalancję, zawiera w sobie mnóstwo różnorodnych elementów folkowych i bez wątpienia jest nacechowany wpływami kultury hipisowskiej. Jakie czynniki zdecydowały o popularności tej stylistyki ślubnej w Małopolsce i Krakowie nie wiem. Jedno jest pewne styl boho na weselach króluje nieprzerwanie od kilku już lat. Pary młode organizują przyjęcia w stylu boho korzystając ze starannie zaadaptowanych, nieużywanych od lat stodół czy też specjalnie w tym celu zaprojektowanych i wybudowanych sal weselnych. Dobrze gdy miejsca te sąsiadują z jeziorem czy ukryte są w leśnej dżungli, pozwala to uciec od zgiełku miasta i na moment przenieść się bliżej natury - doświadczyć bohemy na własnej skórze. Cegła, drewno oraz duże przeszklenia tworzą ciepłe rustykalne wnętrza w którym goście weselni poczują się wyjątkowo. Doskonałym miejscem na tego typu przyjęcie ślubne jest <a href="http://dworzyszczewola.pl/" target="_blank" rel="nofollow">Dwór Dworzyszcze Wola</a> położony 25 minut drogi od centrum Krakowa. Opisując scenerię takiego śłubu nie możemy zapomnieć o kwiatach w bukiecie Panny Młodej, dekorujących wystrój sali, dobranych nie przypadkowo i nawiązujących do natury. Dekoracyjne lampki, lampiony to serce stylistyki boho, girlandy z żarówek snujące się nad parkietem, to elementy o których również warto pamiętać. Nie zapominajmy też o starannym przygotowaniu nakryć stołu oraz innych atrakcjach, które pozwolą umilić czas naszych gości. Fotografia ślubna w stylu boho charakteryzuje się niepowtarzalną atmosferą, łączy w sobie ruch, opowieść o Waszej miłości w romantycznym świetle blasku świec, tworząc niepowtarzalny album, który wytrzyma próbę czasu.'
                    }
                    entryContentP2={
                        'Tymczasem zostawmy tą poetykę uwielbianą przez wielkiego brata i wróćmy na ziemie. Ślub Sylwii i Michała był wyjątkowy z kilku względów. Limoncello słowo klucz od którego warto zacząć, czyli wspaniali przyjaciele, którzy wzruszali się, wspierali i wypełniali parkiet do ostatniego milimetra. Subtelne przygotowania i niezastąpiona Paulina, piękna ceremonia w <a href="https://parafiaproszowice.com.pl/" target="_blank" rel="nofollow">kościele pw. Wniebowzięcia Najświętszej Maryi Panny w Proszowicach</a> i ogień na parkiecie w sali weselnej <a href="http://dworzyszczewola.pl/" target="_blank" rel="nofollow">Dwór Dworzyszcze Wola</a>. Bezcenne wspomnienia i kilka zdjęć dzięki którym możemy wrócić myślami do tych niezapomnianych chwil. Sylwii i Michałowi dziękuję za zaufanie, Monice i Martinowi, których ślub odnajdziecie na moim blogu za marketing, a wszystkim gościom za setki oddanych w zamian emocji. Zapraszam do lajkowania, udostępniania i na zdjęcia poniżej z których przyznam jestem wyjątkowo zadowolony. Życzę miłego oglądania.'
                    }
                    slug={"wesele-w-stylu-boho-sala-dworzyszcze-wola-krakow"}
                    title={"WESELE W STYLU BOHO, SALA DWORZYSZCZE WOLA, KRAKÓW - SYLWIA i MICHAŁ"}
                    tags={"wesele w stylu boho, wesele w stodole, ślub w klimacie rustykalnym"}
                    date={"28 czerwca 2021"}
                    menuNames={"SYLWIA i MICHAŁ"}
                    menuTitle={"WESELE W STYLU BOHO, SALA DWORZYSZCZE WOLA, KRAKÓW"}
                    leadNames={"ŻANETA i SEBASTIAN"}
                    leadTitle={"DOM WESELNY BIAŁA PERŁA RADZIEMICE, REPORTAŻ ŚLUBNY"}
                    leadUrl={"/dom-weselny-biala-perla-radziemice-reportaz-slubny"}
                    leadImage={"url(" + process.env.staticImagesPath + "dom-weselny-biala-perla-radziemice-reportaz-slubny.jpg)"}
                />
            </div>
        );
    }
}
