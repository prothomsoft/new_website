import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: process.env.staticImagesPath + "slub-w-lanckoronie-restauracja-old-joker-jaroszowice-start.jpg"
            }
        ];

        let images = [
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0005.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0009.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0010.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0013.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0015.jpg", height: 530 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0023.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0018.jpg", height: 806 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0019.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0021.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0024.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0025.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0027.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0029.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0030.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0031.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0033.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0034.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0036.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0038.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0041.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0043.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0045.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0047.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0049.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0054.jpg", height: 806 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0055.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0056.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0058.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0059.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0062.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0065.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0067.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0072.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0074.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0076.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0078.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0080.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0083.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0085.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0089.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0091.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0092.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0093.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0119.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0096.jpg", height: 806 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0097.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0098.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0100.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0106.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0110.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0112.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0114.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0118.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0125.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Ślub w Lanckoronie, Restauracja Old Joker Jaroszowice"}
                    headDescription={
                        "Tonący w wielu odcieniach zieleni piękny ślub w Lanckoronie. Eleganckie wnętrza Restauracji Old Joker w Jaroszowicach. Serdecznie zapraszam na reportaż Alicji i Grzegorza. Miłego oglądania."
                    }
                    headKeywords={"Ślub w Lanckoronie, Restauracja Old Joker Jaroszowice"}
                    headUrl={"https://99foto.pl/slub-w-lanckoronie-restauracja-old-joker-jaroszowice/"}
                    entryContentP1={
                        'Ten reportaż rozpoczynam od zdjęcia pełnego słońca i soczystej zieleni, którego celem jest wprowadzenie Was w typowy dla Lanckorony klimat, który towarzyszył nam przez cały ślubny dzień. Alicja i Grzesiek mieszkają teraz w Anglii, jednak nie wyobrażają sobie życia w miejscu innym niż ich ukochane rodzinne miasto. Obiecali, że na pewno kiedyś wrócą do Lanckorony na dłużej do Polski. Podczas pleneru, na który wybraliśmy się do <a href="https://www.wawel.krakow.pl/pl/" target="_blank" rel="nofollow">Zamku Królewskiego na Wawelu</a> i na podziwianie zachodu słońca z <a href="https://podgorze.pl/kopiec-krakusa/" target="_blank" rel="nofollow">Kopca Krakusa</a> dowiedziałem się, że ich wspólna historia pisze się już bardzo długo. W jednym z jej punktów pewnego pięknego dnia Grzegorz przygotował niespodziankę i oświadczył się Alicji w <a href="https://restauracja-padre.pl/padre-krakow/" target="_blank" rel="nofollow">Restauracji Padre</a> na Krakowskim Rynku. W ubiegłą sobotę dotarliśmy do kolejnego ważnego etapu, do dnia ślubu, który połączył Alicję i Grzegorza na zawsze. Dzień ten rozpoczął się w Salonie Kosmetycznym i Fryzjerskim w Sułkowicach. Makijaż wykonała bardzo miła Pani Ula. Chwilę później miejsce Alicji zajęła jej siostra Sabina i salon kosmetyczny zaczął żyć własnym życiem. Ubieranie sukni ślubnej, przygotowania u Grzegorza, pełne emocji błogosławieństwa i wspólne zdjęcia grupowe to preludium do najważniejszego momentu, sakramentalnego TAK, które Para Młoda wypowiedziała w <a href="https://www.parafia.lanckorona.pl/" target="_blank" rel="nofollow">Kościele narodzenia św. Jana Chrzciciela w Lanckoronie</a>.'
                    }
                    entryContentP2={
                        'Dodatkową atrakcją były utwory wykonywane przez Anię z <a href="https://www.facebook.com/aniaspiewaigra/" target="_blank" rel="nofollow">Oprawa Muzyczna Ślubów Kraków</a>, gitarka i śpiew brzmiały bosko. Lawina kwiatów przy wyjściu z kościoła i Alicja zaprosiła gości do <a href="https://www.oldjoker.pl/" target="_blank" rel="nofollow">Restauracji Old Joker</a> w Jaroszowicach pod Wadowicami. Zdjęcie grupowe, moc gorących życzeń i minutę po obiedzie Para Młoda otworzyła parkiet pierwszym tańcem. <a href="https://www.facebook.com/zespolmuzycznypokusa/" target="_blank" rel="nofollow">Zespół muzyczny Pokusa</a>, który pozdrawiam, stanął na wysokości zadania i dbał o dobry nastrój gości. Taniec stał się motywem przewodnim oczepin, a jak się pewnie domyślacie nie zabrakło pysznego torta i innych atrakcji, które z pewnością pozwoliły gościom weselnym zapamiętać ten ślub na długo. Alicjo i Grzegorzu, dzięki za zaufanie i umożliwienie mi fotografowania Waszego ślubu. Kilka zdjęć z tego dnia i kilka fotek ze wspomnianego już krakowskiego pleneru poniżej. Miłego oglądania. Więcej zdjęć jak zwykle w strefie klienta, do której hasło znajdziecie na mojej wizytówce.'
                    }
                    slug={"slub-w-lanckoronie-restauracja-old-joker-jaroszowice"}
                    title={"ŚLUB W LANCKORONIE, RESTAURACJA OLD JOKER JAROSZOWICE - ALICJA i GRZEGORZ"}
                    tags={"Ślub w Lanckoronie, Restauracja Old Joker Jaroszowice, fotograf na wesele Wadowice"}
                    date={"26 maja 2018"}
                    menuNames={"ALICJA i GRZEGORZ"}
                    menuTitle={"ŚLUB W LANCKORONIE, RESTAURACJA OLD JOKER JAROSZOWICE"}
                    leadNames={"MAŁGORZATA I RAFAŁ"}
                    leadTitle={"PLENER ŚLUBNY SŁOWACJA, ŁOMNICKI STAW"}
                    leadUrl={"/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso"}
                    leadImage={"url(/static/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.jpg)"}
                />
            </div>
        );
    }
}
