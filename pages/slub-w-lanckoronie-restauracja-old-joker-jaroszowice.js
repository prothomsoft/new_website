import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/slub-w-lanckoronie-restauracja-old-joker-jaroszowice-start.jpg"
            }
        ];

        let images = [{ imageSrc: "http://99foto.pl/wp-content/uploads/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0001.jpg", height: 763 }];

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
                    headUrl={"http://99foto.pl/slub-w-lanckoronie-restauracja-old-joker-jaroszowice/"}
                    entryContentP1={
                        'Ten reportaż rozpoczynam od zdjęcia pełnego słońca i soczystej zieleni, którego celem jest wprowadzenie Was w typowy dla Lanckorony klimat, który towarzyszył nam przez cały ślubny dzień. Alicja i Grzesiek mieszkają teraz w Anglii, jednak nie wyobrażają sobie życia w miejscu innym niż ich ukochane rodzinne miasto. Obiecali, że na pewno kiedyś wrócą do Lanckorony na dłużej do Polski. Podczas pleneru, na który wybraliśmy się do <a href="http://www.wawel.krakow.pl/pl/" target="_blank">Zamku Królewskiego na Wawelu</a> i na podziwianie zachodu słońca z <a href="http://podgorze.pl/kopiec-krakusa/" target="_blank">Kopca Krakusa</a> dowiedziałem się, że ich wspólna historia pisze się już bardzo długo. W jednym z jej punktów pewnego pięknego dnia Grzegorz przygotował niespodziankę i oświadczył się Alicji w <a href="http://restauracja-padre.pl/padre-krakow/" target="_blank">Restauracji Padre</a> na Krakowskim Rynku. W ubiegłą sobotę dotarliśmy do kolejnego ważnego etapu, do dnia ślubu, który połączył Alicję i Grzegorza na zawsze. Dzień ten rozpoczął się w Salonie Kosmetycznym i Fryzjerskim w Sułkowicach. Makijaż wykonała bardzo miła Pani Ula. Chwilę później miejsce Alicji zajęła jej siostra Sabina i salon kosmetyczny zaczął żyć własnym życiem. Ubieranie sukni ślubnej, przygotowania u Grzegorza, pełne emocji błogosławieństwa i wspólne zdjęcia grupowe to preludium do najważniejszego momentu, sakramentalnego TAK, które Para Młoda wypowiedziała w <a href="http://www.parafia.lanckorona.pl/" target="_blank">Kościele narodzenia św. Jana Chrzciciela w Lanckoronie</a>.'
                    }
                    entryContentP2={
                        'Dodatkową atrakcją były utwory wykonywane przez Anię z <a href="https://www.facebook.com/aniaspiewaigra/" target="_blank">Oprawa Muzyczna Ślubów Kraków</a>, gitarka i śpiew brzmiały bosko. Lawina kwiatów przy wyjściu z kościoła i Alicja zaprosiła gości do <a href="http://www.oldjoker.pl/" target="_blank">Restauracji Old Joker</a> w Jaroszowicach pod Wadowicami. Zdjęcie grupowe, moc gorących życzeń i minutę po obiedzie Para Młoda otworzyła parkiet pierwszym tańcem. <a href="https://www.facebook.com/zespolmuzycznypokusa/" target="_blank">Zespół muzyczny Pokusa</a>, który pozdrawiam, stanął na wysokości zadania i dbał o dobry nastrój gości. Taniec stał się motywem przewodnim oczepin, a jak się pewnie domyślacie nie zabrakło pysznego torta i innych atrakcji, które z pewnością pozwoliły gościom weselnym zapamiętać ten ślub na długo. Alicjo i Grzegorzu, dzięki za zaufanie i umożliwienie mi fotografowania Waszego ślubu. Kilka zdjęć z tego dnia i kilka fotek ze wspomnianego już krakowskiego pleneru poniżej. Miłego oglądania. Więcej zdjęć jak zwykle w strefie klienta, do której hasło znajdziecie na mojej wizytówce.'
                    }
                    slug={"slub-w-lanckoronie-restauracja-old-joker-jaroszowice"}
                    title={"ŚLUB W LANCKORONIE, RESTAURACJA OLD JOKER JAROSZOWICE - ALICJA i GRZEGORZ"}
                    tags={"Ślub w Lanckoronie, Restauracja Old Joker Jaroszowice, fotograf na wesele Wadowice"}
                    date={"26 maja 2018"}
                    menuNames={"ALICJA i GRZEGORZ"}
                    menuTitle={"ŚLUB W LANCKORONIE, RESTAURACJA OLD JOKER JAROSZOWICE"}
                    leadNames={"RENATA i MICHAŁ"}
                    leadTitle={"SALA WESELNA FOLWARK ZALESIE, REPORTAŻ ŚLUBNY WIELICZKA"}
                    leadUrl={"/sala-weselna-folwark-zalesie-reportaz-slubny-wieliczka"}
                    leadImage={"url(/static/sala-weselna-folwark-zalesie-reportaz-slubny-wieliczka-start.jpg)"}
                />
            </div>
        );
    }
}
