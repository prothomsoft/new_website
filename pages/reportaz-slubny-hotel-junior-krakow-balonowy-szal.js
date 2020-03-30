import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/reportaz-slubny-hotel-junior-krakow-balonowy-szal-start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0003.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0005.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0007.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0011.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0012.jpg", height: 567 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0014.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0016.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0018.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0019.jpg", height: 566 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0021.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0023.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0025.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0027.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0031.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0032.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0033.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0035.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0036.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0038.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0041.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0042.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0043.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0045.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0046.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0047.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0050.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0049.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0048.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0051.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0052.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0054.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0055.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0067.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0056.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0057.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0059.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0061.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0062.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0063.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0064.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0065.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0066.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0068.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0069.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0070.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0071.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0076.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0072.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0073.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0074.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0075.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0077.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0078.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0079.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0080.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0081.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0084.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0083.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0085.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0087.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0088.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0086.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0091.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0106.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0104.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0089.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0090.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0092.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0093.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0097.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0094.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0095.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0096.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0099.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0100.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0101.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0102.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0103.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0105.jpg", height: 762 },
            ,
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0107.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0108.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0109.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0110.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0111.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0112.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0113.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0114.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0115.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0116.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0117.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0118.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0119.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0120.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0121.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0122.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0123.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0124.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0125.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0126.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0127.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0128.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0129.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0130.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0132.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0131.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0133.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0134.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0136.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0137.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0138.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0139.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0140.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0142.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0141.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0143.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0135.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0144.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2018/06/fotograf_slubny_skawina_0145.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Reportaż ślubny Hotel Junior Kraków, balonowy szał"}
                    headDescription={
                        "Czy widzieliście kiedyś ponad sto wypełnionych helem, świecących ledowych serduchowych baloników wystrzelonych w kosmos kilka minut po północy? Jeżeli nie to zapraszam do wkliknięcia w reportaż ze ślubu Magdy i Piotrka. Miłego oglądania."
                    }
                    headKeywords={"Reportaż ślubny Hotel Junior Kraków, balonowy szał"}
                    headUrl={"https://99foto.pl/reportaz-slubny-hotel-junior-krakow-balonowy-szal/"}
                    entryContentP1={
                        'Duży dom, profesjonalna fryzjerka i makijażystka oraz niezastąpieni pomocnicy pełni humoru, plus kilka czelendżing tasków i klimat pod przygotowania mamy zapewniony. Tak w dużym skrócie mógłbym przedstawić początek piątkowych przygotowań Magdy, które miały miejsce w Skawinie. Przed dwunastą kiedy już fryzura i makijaż były gotowe, a na mojej karcie pamięci w aparacie zapisany finalny look, wybraliśmy się do Piotrka. Miało być tam kilku ziomków i spoko klimat... i tak właśnie było. Drużbowie w liczności połowy przeciętnej klasy w szkole podstawowej założyli takie same muchy, a kiedy wbili się w garnitury to wyglądali lepiej niż reprezentacja Polski na plakacie Vistuli. Nie zabrakło też krótkiego błogosławieństwa i kilku tradycyjnych przyśpiewek zaserwowanych przez Sławka, który z zawodową taśmą kręcił imprezą do przodu. Kolor różowy zdominował mieszkanie rodziców Magdy. Dziewczyny sprawnie przypieły welon, butonierki i po krótkim błogosławieństwie udaliśmy się do <a href="https://www.szymonijuda.pl/" target="_blank" rel="nofollow">Kościoła Świętych Apostołów Szymona i Judy Tadeusza w Skawinie</a>.'
                    }
                    entryContentP2={
                        'Księża przywitali Parę Młodą w zachrystii, dopełniono formalności i ceremonia zaślubin wystartowała. Po sakramentanym TAK nadeszła pora na klasyczne wyjście z kościoła przez szpaler starannie ułożony przez druhny i drużbów ślubnych. Następnie czerwony Mustang przewiózł Magdę i Piotra do <a href="https://junior.krakow.pl/">Hotel Junior w Krakowie</a>, rodzice przywitali Parę Młodą chlebem i solą, brat Piotrka mocno powalczył z petardą i rozpoczęły się życzenia. Były gorące, jak atmosfera całego ślubu i bez nawet 10 sekund nieprzerwanych salwą śmiechu. Pierwszy taniec otworzył parkiet, na którym swoje instrumenty rozłożył <a href="https://www.primaband.pl" target="_blank" rel="nofollow">Zespół muzyczny Prima Band</a>. Minutkę przed burzą, której jednak nie było, wyskoczyliśmy na zdjęcia grupowe i plenerowe. Dalej były już same atrakcje, tort weselny, zabawy oczepinowe i wiśnia na torcie, dmuchane helem i podświetlane ledami baloniki, które poleciały wysoko, wysoko, bardzo wysoko. Były osoby, który widziały, że ułożyły się w powietrzu w krzałt serca... no cóż mój aparat nie był, aż tak spostrzegawczy. Nie mogę zapomnieć dodać, że każdą minutę tych niezwykłych wydarzeń filmował mój dobry kolega Krzysiek z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">Pracowni Filmu Ślubnego CAMDESIGN</a>, którego bardzo wszystkim przyszłym param młodym polecam. Magdo i Piotrze, dziękuję, że mogłem być tam z Wami i zapraszam na zdjęcia. Tym razem działo się tak dużo, że blisko 600 zdjęć znajdziecie w strefie klienta wpisując hasło z mojej wizytówki. Miłego oglądania.'
                    }
                    slug={"reportaz-slubny-hotel-junior-krakow-balonowy-szal"}
                    title={"REPORTAŻ ŚLUBNY HOTEL JUNIOR KRAKÓW, BALONOWY SZAŁ - MAGDALENA i PIOTR"}
                    tags={"Reportaż ślubny Hotel Junior Kraków, fotograf na wesele Skawina"}
                    date={"2 czerwca 2018"}
                    menuNames={"MAGDALENA i PIOTR"}
                    menuTitle={"REPORTAŻ ŚLUBNY HOTEL JUNIOR KRAKÓW, BALONOWY SZAŁ"}
                    leadNames={"MAŁGORZATA I RAFAŁ"}
                    leadTitle={"PLENER ŚLUBNY SŁOWACJA, ŁOMNICKI STAW"}
                    leadUrl={"/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso"}
                    leadImage={"url(/static/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.jpg)"}
                />
            </div>
        );
    }
}
