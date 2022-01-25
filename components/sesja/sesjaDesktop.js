import React from "react";
import Link from "next/link";
import Image from 'next/image';

export default class OfferDesktop extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <article>
                    <header>
                        <h1 className="quote-title">SESJA ZDJĘCIOWA KRAKÓW - WSKAZÓWKI I REKOMENDACJE MIEJSC </h1>
                    </header>
                    <p>
                        Odwiedzając moją stronę internetową trafiliście do fotografa, który od zawsze proponuje i z całego serca namawia na sesje zdjęciowe w Krakowie. Trafiliście do fotografa, który
                        swoim portfolio udowadnia, że nie trzeba jechać na koniec świata by zrobić niezapomniane zdjęcia ślubne. Kraków znany w zimie głównie ze smogu już wiosną zamienia się w piękne,
                        chętnie odwiedzane przez turystów i pełne historii miasto. Fajnych miejsc na sesję zdjęciową nie trzeba tu poszukiwać długo. Łatwo odnajdziemy każdy styl by uwiecznić w nim
                        Waszą miłość.
                    </p>
                    <Image alt="sesja ślubna Ogród Botaniczny Kraków" src={"/static/portfolio/ogrod_botaniczny.jpg"} width={1140} height={760} />
                    <p>
                        Na północ od Krakowa rozciągają się atrakcje turystyczne Jury Krakowsko-Częstochowskiej reprezentowane przez Ojcowski Park Narodowy, Zamek w Pieskowej Skale, Dwór w
                        Tomaszowicach czy Zamek w Korzkwi. Zachód Krakowa to Zalew w Kryspinowie, Dolina Bolechowicka, Zamek w Przegorzałach, Kopiec Kościuszki i Skałki Twardowskiego. Południe to Park
                        w Mogilanach, Kopiec Kraka i Park Bednarskiego. Wschód Krakowa natomiast to industrialne klimaty Nowej Huty oraz Muzeum Lotnictwa na Czyżynach.
                    </p>
                    <Image alt="sesja zdjęciowa Kraków" src={"/static/portfolio/portfolio_0002.jpg"} width={1140} height={851} />
                    <p>
                        Centrum to kwintesencja Krakowa czyli Bulwary Wiślane, klimatyczny Kazimierz, Plac Nowy, kluby i restauracje reprezentowane przez Mleczarnię, Alchemię, Starą Zajezdnie i Studio
                        Qulinarne. Stare Miasto i niezliczona ilość uliczek, Wawel, Planty, Zaułek Czartoryskich, Opera Krakowska, Sukiennice i Rynek Główny, Browar Lubicz, Hotel Stary - wymieniać
                        przeróżne miejsca można długo.
                    </p>
                    <Image alt="plener śłubny Bulwary Wiślane" src={"/static/portfolio/plener_0002.jpg"} width={1140} height={761} />
                    <p>
                        Przygotowując się do sesji zdjęciowej i szukając odpowiedzi na pytanie gdzie można zrobić sesję fotograficzną w Krakowie, wpiszcie miejsca z powyższego paragrafu, a gwarantuję,
                        że znajdziecie coś dla Was. Niezliczona ilość zakątków, ciekawych miejsc tych bardziej znanych i dopiero czekających na odkrycie.
                    </p>
                    <Image alt="sesja ślubna Zamek w Korzkwi" src={"/static/portfolio/portfolio_0014.jpg"} width={1140} height={760} />
                    <p>
                        Sesja zdjęciowa w Krakowie to przede wszystkim dobry plan w układaniu którego bardzo chętnie Wam pomogę, konsultując logistykę miejsc, podpowiadając pory dnia, które będą
                        najlepsze dla danej lokalizacji. Zdjęcia z pleneru mają być niezwykłe i niepowtarzalne dlatego warto poświęcić chwilę na znalezienie odpowiednich rekwizytów, które nadadzą
                        sesji oryginalności.
                    </p>
                    <Image alt="oryginalne zdjęcia z pleneru ślubnego" src={"/static/portfolio/portfolio_0008.jpg"} width={1140} height={760} />
                    <p>Warto też przygotować makijaż i fryzurę zbliżone do tego z dnia ślubu . Pamiętajcie też, by koniecznie zabrać ze sobą dobry humor - jest to bardzo ale to bardzo ważne.</p>
                    <Image alt="sesja zdjęciowa Pałac Goetza Brzesko" src={"/static/portfolio/sesja_zdjeciowa_palac_goetzow_brzesko.jpg"} width={1140} height={760} />
                    <p>
                        Fotografia jest moją pasją od lat. Jak nie trudno zgadnąć skala kreatywności poczas sesji zdjęciowych sięga zenitu. Kilka chwil w dzień poprzedzający Waszą sesję zdjęciową
                        warto spędzić na przeanalizowaniu moich i istniejacych już w internecie prac innych fotografów ślubnych wykonanych w miejscach lub okolicach miejsc do których się wybieramy.
                    </p>
                    <Image alt="ciekawe miejsca na sesje plenerową w Krakowie" src={"/static/portfolio/portfolio_0007.jpg"} width={1140} height={760} />
                    <p>
                        Budowanie kreatywności, poszukiwanie szczerości i wyjątkowości w kadrze to ciągła praca. Wierzcie mi, że im dalej jestem, tym więcej pracy widzę przed sobą. Każda kolejna sesja
                        zdjęciowa buduje świadomość tego co mam mieć w kadrze i jak mam tego szukać. Tysiące przeglądniętych zdjęć pozwalają zdefiniować kadr, znaleźć inspirację i odpowiedzieć na
                        pytanie co i jak chcę pokazywać.
                    </p>
                    <Image alt="budowanie kreatywności w fotografii ślubnej" src={"/static/portfolio/sesja_zdjeciowa_krakow_2_portfolio.jpg"} width={1140} height={760} />
                    <p>
                        Trzy godziny fotografowania, najczęściej dwa lub trzy wybrane miejsca w Krakowie i okolicach, blisko pięćset zdjęć, z których starannie selekcjonuję blisko sto zdjęć do obróbki
                        graficznej. Emocje, emocje i jeszcze raz emocje. Zero ustawek i balast sprzętowy ograniczony do niezbędnego minimum. Osobiście czerpię prawdziwą przyjemność w poszukiwaniu
                        prawdziwych emocji w moich zdjęciach, zdobywania Waszego zaufania i odnajdywaniu kadrów w przeróżnych miejscach dzięki niekończącej się magii światła.
                    </p>
                    <Image alt="magia fotografii ślubnej" src={"/static/portfolio/portfolio_0009.jpg"} width={1140} height={760} />
                    <p>
                        Plener ślubny w Krakowie to najlepszy moment na upamiętnienie tych najpiękniejszych i najromantyczniejszych chwil na fotografiach. To chwila na oderwanie się od rzeczywistości
                        i wcielenie w rolę rozluźnionego modela. Spotkajmy się w Krakowie, wspólnie znajdźmy chwilę, światło, kadr, zachowajmy je na zawsze. Serdecznie zapraszam.
                    </p>
                    <Image alt="chwila, światło, kadr w fotografii ślubnej" src={"/static/portfolio/portfolio_300.jpg"} width={1140} height={760} />
                </article>

                <article>
                    <header>
                        <h2 className="quote-title">REFERENCJE - FACEBOOK</h2>
                    </header>
                    <p>
                        Od samego początku współpraca z Tomkiem przebiegała idealnie :) Pełen pomysłów w głowie i zapału do pracy, a przy okazji napełniony dobrą energią, która dodała nam "powera" w
                        tym ważnym dla nas dniu! Błyskawiczna obsługa z pięknymi zdjęciami :) Jak tylko wybierać to zdecydowanie Tomka ! :) Dziękujemy i na pewno kiedyś jeszcze się zobaczymy.{" "}
                        <Link href="/hotel-qubus-krakow-sesja-zdjeciowa">Ewelina i Kamil</Link>.
                    </p>
                    <Image alt="sesja zdjęciowa kraków" src={"/static/portfolio/sesja_zdjeciowa_krakow_5_portfolio.jpg"} width={1140} height={760} />
                    <p>
                        Serdecznie polecamy. Niezwykle profesjonalne podejście, bardzo miła atmosfera i przepiękne zdjęcia! Długo zastanawialiśmy się nad wyborem fotografa, ale wiemy, że nie mogliśmy
                        lepiej wybrać. Tomku, dziękujemy za piękną pamiątkę i serdecznie pozdrawiamy. <Link href="/hotel-margerita-magiczny-wystroj-sali-weselnej-w-krakowie">Natalia i Piotr</Link>.
                    </p>
                    <Image alt="sesja ślubna na Rynku Głównym w Krakowie" src={"/static/portfolio/chan_kristina_sesja_slubna_krakow.jpg"} width={1140} height={760} />
                    <p>
                        Dziękujemy bardzo za przepiękną pamiątkę, zdjęcia rewelacja, choć ten dzień bardzo szybko minął przez bardzo duże emocje nie wiele pamietamy ale dzięki Tomkowi są zatrzymane
                        wszystkie chwilę na zdjęciach. Jakość, szybkość w realizacji materiału wszystko na SZÓSTKĘ Z DUŻYM PLUSEM. Jeszcze raz dziękujemy bardzo i będziemy zawsze polecać!. Natalia i
                        Krzysztof.
                    </p>
                    <Image alt="plener ślubny Kopiec Krakusa" src={"/static/portfolio/kopiec_krakusa_sesja_slubna.jpg"} width={1140} height={760} />
                    <p>
                        Dziękujemy, dziękujemy, dziękujemy. Byliśmy pewni że nasza współpraca z Tomkiem przebiegnie idealnie i tak właśnie było. Polecamy wszystkim z całego serca!!!{" "}
                        <Link href="/zielone-wzgorze-koniusza-tak-w-promieniach-slonca">Karola i Mati</Link>.
                    </p>
                    <Image alt="plener ślubny w stadninie koni" src={"/static/portfolio/plener_slubny_konie.jpg"} width={1140} height={555} />
                    <p>
                        Z całego serca polecamy Tomka jako fotografa ślubnego! Miła i profesjonalna współpraca, świetne ujęcia i bardzo szybka realizacja - po tygodniu mieliśmy już zdjęcia do
                        oglądania - coś pięknego. Bardzo polecamy tym, którzy się jeszcze zastanawiają. Olga i Dawid.
                    </p>
                    <Image alt="dyskretna sesja zdjęciowa w Krakowie" src={"/static/portfolio/sesja_zdjeciowa_krakow_7_portfolio.jpg"} width={1140} height={760} />
                    <p>
                        Pełen profesjonalizm i zaangażowanie! Dyskretna i bardzo efektowna praca Tomka robi wrażenie tak jak Jego zdjęcia :) spokój i usmiech :) świetna współpraca! Dziękujemy Tomek.{" "}
                        <Link href="/sylwia-i-bartek-sesja-poslubna-krakow">Sylwia i Bartek</Link>.
                    </p>
                    <Image alt="profesjonalizm, zaangażowanie w fotografii ślubnej" src={"/static/portfolio/anna_piotr_slub_krakow_reverted.jpg"} width={1140} height={760} />
                    <p>
                        Tomku dziekujemy jesteśmy oczarowani zdjęciami. W 100% polecamy Tomka pełen profesjonalizm, otwartość i zaangażowanie w to co robi jest na najwyższym poziomie. Agnieszka i
                        Mateusz.
                    </p>
                    <Image alt="zielone wzgórze koniusza, sala weselna" src={"/static/portfolio/portfolio_0003.jpg"} width={1140} height={525} />
                    <p>
                        Najlepszy Fotograf na świecie !!! Jesteśmy o tym przekonani na 100%! Uchwyci każdą piękną chwilę, wszystkie zdjęcia naturalne, pełne pasji, magiczne, robione z sercem... Jako
                        człowiek - świetny Gość ! :) Tacy ludzie to skarb :) Pokochaliśmy Tomka od pierwszego wrażania :) Dziękujemy za wszystko i polecamy z całych serduszek. Edyta i Dawid.
                    </p>
                    <Image alt="zimowa sesja ślubna w Krakowie" src={"/static/portfolio/pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg"} width={1140} height={760} />
                    <p>
                        Tomek super fotograf!!! Robi przepiękne zdjęcia. Już na pierwszym spotkaniu wiedziałam, że wybór Tomka to był strzał w 10. Jest profesjonalistą, a jak się ogląda jego zdjęcia
                        to aż łezka w oku się kręci. Będziemy mieć super pamiątkę. Dziękujemy jeszcze raz za wspaniałą współprace. Polecamy z calego serca! Ola i Rafał.
                    </p>
                    <Image alt="super fotograf w Krakowie" src={"/static/portfolio/portfolio_0011.jpg"} width={1140} height={760} />
                    <p>
                        Tomka poznałam 5 lat temu przy okazji ślubu i wesela przyjaciółki. Już wtedy zwróciła moją uwagę jakość jego zdjęć, ich naturalność, ujęte w nich emocje. Tomek nie prosił
                        uczestników o pozowanie do zdjęć, ale raczej robił je w locie, a dodatkowo dbał o dobrą atmosferę. Uznaliśmy z Mężem, że dostosujemy datę naszej uroczystości do jego
                        dostępności i jesteśmy bardzo zadowoleni z tej współpracy. Zdjęcia były piękne (ślub, wesele, sesja plenerowa), dobrze obrobione i szybko pojawiły się na stronie internetowej.
                        Tomek bez problemu poradził sobie z wyzwaniami, takimi jak odblaski od okularów (powłoka blue care). Serdecznie polecamy! Anna i Grzegorz.
                    </p>
                    <Image alt="sesja zdjęciowa na łódkach szczyrbskie jezioro" src={"/static/portfolio/sesja_zdjeciowa_szczyrbskie.jpg"} width={1140} height={525} />
                    <p>
                    Tomku póki co Ryśka nie ma w domu i nie widział zdjęć a ja rano przez chwilę tylko miałam dostęp do internetu ale zdjęcia są SUPER. Nie wiem czy wszycy tak reagują ale mnie bardzo wzruszyły te zdjęcia i przeniosły do tego pamiętnego dnia... Mają niesamowitą magię... Patrycja i Ryszard.
                    </p>
                    <Image alt="sesja zdjęciowa w pieninach wysoki wierch" src={"/static/portfolio/portfolio_2021_1.jpg"} width={1140} height={760} />
                    <p>
                        Otwarty, profesjonalny i cierpliwy, polecamy Tomka każdemu! Zdjęcia które wykonuje są piękne i klimatyczne, współprace z nim będziemy bardzo miło wspominać.{" "}
                        <Link href="/sala-bankietowa-triana-mogilany-reportaz-slubny-podstolice">Paulina i Paweł</Link>.
                    </p>
                    <Image alt="sesja zdjęciowa Dwór Tomaszowice Kraków" src={"/static/portfolio/sesja_zdjeciowa_dwor_tomaszowice_krakow_portfolio.jpg"} width={1140} height={760} />
                    <p>
                        Gorące podziękowania dla Tomka za wspaniałą pamiątkę z naszego wesela, które odbyło się 15 sierpnia tego roku. Współpraca, podejście do tematu, zaangażowanie na bardzo wysokim
                        poziomie. Materiał z wesela otrzymaliśmy w ekspresowym terminie. Wszystkim serdecznie polecamy!{" "}
                        <Link href="/patrycja-i-michal-sesja-narzeczenska-pieskowa-skala">Patrycja i Michał</Link>.
                    </p>
                    <Image alt="Plener ślubny na Słowacji" src={"/static/portfolio/plener_slubny_slowacja.jpg"} width={1140} height={760} />
                    <p>
                    Niesamowicie się cieszymy, że to właśnie Tomek "łapał chwile" na naszym ślubie! ❤️ Pasja i profesjonalizm widoczne są na każdym zdjęciu, i każde z nich można oprawić i powiesić na ścianie. Dodatkowo pozytywne nastawienie, serdeczność i uśmiech zdecydowanie ułatwiają przeżycie tego dnia bez dodatkowego stresu, ponieważ Tomek od pierwszej rozmowy sprawia wrażenie jakby znało się go długi, długi czas. Niesamowicie szybki czas realizacji, zdjęcia otrzymaliśmy dokładnie po 7 dniach. Polecam z całego serca, bardzo się cieszę że na siebie trafiliśmy i że to właśnie Tomek towarzyszył nam w tym ważnym dla nas dniu! jeszcze raz DZIĘKUJEMY! {" "}
                        <Link href="/wymarzony-plener-slubny-w-krakowie-sprawdzone-miejsca">Patrycja i Grzegorz</Link>.
                    </p>
                    <Image alt="Plener ślubny na Kaprowym" src={"/static/portfolio/sesja_plenerowa_kasprowy.jpg"} width={1140} height={761} />
                    <p>
                        Tomek jest świetnym fotografem. Każdy ważny moment jest uchwycony w magiczny sposób. Nie ma zdjęcia, które by sie powtarzało. Efekty mówią same za siebie, wystarczy tylko
                        popatrzeć na bloga. Atmosfera, która stwarza jest rewelacyjna. Gorąco polecam.{" "}
                        <Link href="/wesele-tarnow-dwor-bistuszowa-i-staropolski-klimat-slubny">Aleksandra i Przemek</Link>.
                    </p>
                    <Image alt="dobry fotograf ślubny kraków" src={"/static/portfolio/slubne_portfolio_3.jpg"} width={1140} height={527} />
                    <p>
                        Tomku, z całego serca dziękujemy za cudowne zdjęcia z naszego ślubu. Lepszych nie mogliśmy sobie wymarzyć. Jesteśmy totalnie oczarowani relacją, która dla nas stworzyłeś.
                        Idealnie uchwycone chwile, oryginalne i niebanalne kadry, naturalność, swoboda i spontaniczność – to wszystko składa się na naszą piękną historię, którą ujęcie po ujęciu możemy
                        przeżywać na nowo za każdym razem kiedy wracamy do Twoich zdjęć. <Link href="/plener-w-beskidach-sesja-slubna-w-beskidzie-slaskim">Magdalena i Jonasz</Link>.
                    </p>
                    <Image alt="atmosfera podczas pleneru ślubnego" src={"/static/portfolio/sesja_zdjeciowa_krakow_3_portfolio.jpg"} width={1140} height={760} />
                    <p>
                        Tomku, dziękujemy ogromnie za przepiękną pamiątkę jaką mamy dzięki Tobie. Twoje zaangażowanie i ogrom pomysłów widać w każdym ujęciu. Nie mogliśmy wymarzyć sobie lepszego
                        fotografa. Polecamy wszystkim! <Link href="/fotograf-slubny-krzeszowice-cztery-pory-roku-alwernia">Aleksandra i Grzegorz</Link>.
                    </p>
                    <Image alt="sesja ślubna jesienią" src={"/static/portfolio/sesja_slubna_jesienia.jpg"} width={1140} height={760} />
                    <p>
                        Serdecznie polecamy Tomka! To świetny, niezwykle profesjonalny fotograf, który jest zaangażowany w swoją pracę, a przy tym jest przesympatyczny i zawsze uśmiechnięty. Zdjęcia
                        otrzymaliśmy w ekspresowym tempie, na każdym z nich Tomek uchwycił piękne chwile z naszego dnia. Zdjęcia są przepiękną pamiątką! Tomku, to była przyjemność z Tobą
                        współpracować! Jeszcze raz dziękujemy za przepiękne zdjęcia <Link href="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny">Anna i Piotr</Link>.
                    </p>
                    <Image alt="plener ślubny w górach" src={"/static/portfolio/plener_slubny_w_gorach.jpg"} width={1140} height={760} />
                    <p>
                        Chcielibyśmy bardzo podziękować za pełen profesjonalizm zarówno w dniu ślubu jak i na sesji! Rewelacyjne zdjęcia, super współpraca, nie da się ukryć że Tomasz robi to, co lubi
                        i robi to z pasją i zamiłowaniem do fotografii! Polecamy pod każdym względem! <Link href="/pomysl-na-sesje-zimowa-w-krakowie-dwor-jana-matejki">Natalia i Łukasz</Link>
                    </p>
                </article>
                <style jsx>{`
                    article {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        text-align: center;
                        font-family: 'Oswald';
                        width: 1140px;
                        color #BEBEBE;
                        margin: 25px 0 0 0;
                    }
                    article h1 {
                        color: #FFF;
                    }
                    article header h2 {
                        font-size: 2.5em;
                    }

                    .spacer {
                        height: 50px;
                    }
                    p {
                        font-size: 16px;
                        margin: 20px 0;
                        text-align: justify;
                    }
                    .quote-title::before,
                    .quote-title::after {
                        content: '';
                        display: block;
                        border: 1px solid #33B59A;
                    }
                    .quote-title {
                        margin: 10px 0 0px 0;
                        display: flex;
                        align-items: center;
                        color: #FFFFFF;
                        padding: 0px 0 0px 0;
                    }
                    .quote-title::before,
                    .quote-title::after {
                        flex-grow: 1;
                        margin: 0 10px;
                    }
                `}</style>
            </div>
        );
    }
}
