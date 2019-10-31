import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/hotel_zameczek_ksiaz_wielki.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/09/hotel_zameczek_ksiaz_wielki_0002.jpg", height: 527 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Dworek Fantazja Skomielna Biała i Ślub w Stylu Glamour"}
                    headDescription={"Elegancki Dworek Fantazja w Skomielnej Białej. Klasyczne, jasne wnętrza były idealne do uzyskania pełnego blasku klimatu glamour. Zapraszam do kopalni emocji ślubnych Patrycji i Krzysztofa."}
                    headKeywords={"wesele glamour, ślub w stylu glamour, dworek fantazja skomielna biała"}
                    headUrl={"https://99foto.pl/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour/"}
                    entryContentP1={
                        'Fotograf, reportaż ślubny, marzenia, połączenie pięknej, kochającej się Pary Młodej, gości z którymi łączą ich emocjonalne więzy, charyzmatyczego księdza i miejsca przyjęcia, które swą estetyką stworzyło stylowe tło dla nadchodzących wydarzeń. Może to sprawka jesieni, ale jeszcze w ubiegłym tygodniu myślałem, że fotografując tak wiele ślubów widziałem już niemal wszystko. Patrycja i Krzysiek udowodnili, że tak nie jest, że każda Para Młoda jest inna, a miłość dwojga ludzi za każdym razem jest wyrażana inaczej. Pewnie właśnie dzięki temu za każdym razem powstaje nowa historia i motywacja do pokazania sekwencji obrazków ukazujących uczucia, emocje, wszystkie te najwspanialsze rzeczy, którymi my ludzie możemy siebie nawzajem obdarowywać. Zacznijmy od początku, czyli od miejsca, które odwiedziłem już wiele razy, Studia Makijażu <a href="https://www.facebook.com/patrycjaantoszmakeup/" target="_blank" rel="nofollow">Patrycji Antosz</a> w Jordanowie. Patrycja nie byłaby sobą gdyby kilku gadżetów w Studio nie przybyło. Ilość softboxów, blend za pomocą których Patrycja czaruje makijażami followersów na instagramie, pozwoliła moim fotograficznym akcesoriom odpoczywać w samochodzie do następnego ślubu. Nie muszę pisać, że makijaż jak zwykle wyszedł bosko. Przygotowania do ślubu, które odbyły się w gronie rodzinnym w promieniach ciepłego październikowego słońca przerosły moje najśmielsze oczekiwania.'
                    }
                    entryContentP2={
                        'Para Młoda zadbała o każdy detal. Mina Krzysia z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">Camdesign - profesjonalny film ślubny</a>, z którym podczas ślubów współpracowałem wielokrotnie, jednoznacznie wskazywała, że kręci materiał życia. Piękna i elegancka suknia z kolekcji <a href="https://www.justinalexander.com/pl/" target="_blank" rel="nofollow">Justin Alexander</a>, delikatna biżuteria – wszystko ze sobą idealnie współgrało. Czas na tort z wiśnią, który pojawił się w niespodziewanym momencie i już mówię dlaczego. Ceremoni kościelnych widziałem w życiu już wiele, ale ta, która miała miejsce tego dnia w <a href="http://skomielna.pl/node/24" target="_blank" rel="nofollow">Kościele św. Sebastiana w Skomielnej Białej</a> była na pewno niezwykła. Wszystko to za sprawą nikogo innego jak księdza, który udzielał ślubu Parze Młodej. Był to ksiądz, który śmiało możemy powiedzieć, że porwał cały kościół. Poprowadził ceremonię z energią, zaangażowaniem, radością, nie szczędził żartów i przypomniał historię znajomości głównych bohaterów tego ważnego dnia. Kazanie wywołało uśmiech, który gościł na twarzy każdego uczestnika tego show. Patrycja i Krzysiek pokazali nam, jak pięknym i radosnym wydarzeniem może być tradycyjny ślub kościelny, kiedy najpiękniejszą dekoracją są prawdziwe emocje. Niezwykłe uczucie uświadomić sobie, że za kilkanaście czy kilkadziesiąt lat, poprzez właśnie te zdjęcia, wspomnienia szczęścia wszechobecnego tego dnia oraz pięknych chwil powrócą. Miejscem gdzie goście weselni spędzili wieczór, noc, a niektórzy doczekali promieni wschodzącego słońca był elegancki Dworek Fantazja w Skomielnej Białej. Klasyczne, jasne wnętrza były idealne do uzyskania pełnego blasku klimatu glamour. Dominowały kolory złoty i biały, uzupełnione elementami zieleni. Tempo imprezy podkręcał <a href="http://obsesjaband.pl/" target="_blank" rel="nofollow">Zespół muzyczny Obsesja</a>. Pasjonaci, którzy wiedzieli co zagrać, kiedy zagrać i jak zagrać. Powiem więcej nie potrzebowali prądu by zapełnić parkiet. Wiele atrakcji i Patrycja, której energia tego dnia udzieliła się wszystkim. Świetna impreza, która na długo zostanie w mojej pamięci. Zapraszam na zdjęcia.'
                    }
                    slug={"dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour"}
                    title={"DWOREK FANTAZJA SKOMIELNA BIAŁA i ŚLUB W STYLU GLAMOUR - PATRYCJA i KRZYSZTOF"}
                    tags={"wesele glamour, ślub w stylu glamour, dworek fantazja skomielna biała"}
                    date={"3 listopada 2019"}
                    menuNames={"PATRYCJA I KRZYSZTOF"}
                    menuTitle={"DWOREK FANTAZJA SKOMIELNA BIAŁA i ŚLUB W STYLU GLAMOUR"}
                    leadNames={"KATARZYNA i PAWEŁ"}
                    leadTitle={"HOTEL ZAMECZEK KSIĄŻ WIELKI, ŚLUBNE ISKIERKI MIŁOŚCI - "}
                    leadUrl={"/hotel-zameczek-ksiaz-wielki-i-slubne-iskierki-milosci"}
                    leadImage={"url(/static/hotel_zameczek_ksiaz_wielki.jpg)"}
                />
            </div>
        );
    }
}