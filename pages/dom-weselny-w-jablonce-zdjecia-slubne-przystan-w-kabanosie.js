import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/dom-weselny-w-jablonce-zdjecia-slubne-przystan-w-kabanosie-start.jpg"
            }
        ];

        let images = [
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0003.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0014.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0015.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0018.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0022.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0023.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0024.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0027.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0029.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0032.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0034.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0042.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0045.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0046.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0049.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0052.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0054.jpg", height: 806 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0057.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0065.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0068.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0069.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0070.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0072.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0074.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0078.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0082.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0088.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0091.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0097.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0106.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0116.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0117.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0120.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0127.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0138.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0140.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0145.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0146.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0147.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0115.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Dom weselny w Jabłonce, zdjęcia ślubne Przystań w Kabanosie"}
                    headDescription={"Przedsylwestrowa zabawa w Karczmie Pod Kogutkiem. Reportaż ślubny z ceremonii zaślubin w Makowie Podhalańskim."}
                    headKeywords={"Dom weselny w Jabłonce, zdjęcia ślubne Przystań w Kabanosie, fotograf na wesele Jabłonka"}
                    headUrl={"https://99foto.pl/dom-weselny-w-jablonce-zdjecia-slubne-przystan-w-kabanosie/"}
                    entryContentP1={
                        'Sobota rano, jeszcze zima, początek ferii zimowych w małopolsce, na Zakopiance full, korek od Rabki Zdrój, jadę do Jabłonki sfotografować ślub Joli i Tomka razem z ich prześwietnymi dzieciakami Wiktorem i Milenką. Fryzjer umknął mojej uwadze, natomiast makijaż sfotografowałem w gabinecie kosmetycznym <a href="https://www.facebook.com/VitaGabinetKosmetycznyStudioPaznokciSolarium/" target="_blank" rel="nofollow">VITA Naturalne Piękno w Jabłonce</a>. Dziewczyny Basia i Jola znały się nie od dziś. Nie wiem czy makijaż był wcześniej próbowany, ale wyszedł perfekcyjnie. Nadszedł czas na przygotowania u Tomka. Krótka chwila na poszukiwanie białego domu, na tyle nowego, że w nawigacji jeszcze się nie pojawił i świetna atmosfera, którą tworzyli wspólnie rodzice i brat Tomka. Muszka, garnitur, buty szybko zajęły swoje miejsce i nie przeszkodziła w tym trwająca Olimpiada i skaczący Kamil Stoch. Na klatce schodowej w drzwiach mieszkania Joli powitały mnie uśmiechnięte dzieciaki. Szybko przyzwyczaiły się do obecności Pana fotografa, a Milenka bardzo chętnie pozowała i chciała mieć dużo, dużo zdjęć. Iza pomogła Joli zawiązać suknie ślubną i dopasować pozostałe ważne dodatki. Tomek zjawił się w samą porę i zaczęło się błogosławieństwo.'
                    }
                    entryContentP2={
                        'Prawdziwie rodzinna atmosfera i same pozytywne emocje w powietrzu. Po błogosławieństwie udaliśmy się do <a href="https://www.diecezja.pl/parafie/lista-parafii/20-jablonka/parafia-przemienienia-panskiego.html" target="_blank" rel="nofollow">Kościoła Przemienienia Pańskiego w Jabłonce</a> w całości poświęconemu Papieżowi Janowi Pawłowi II. Wiktor i Milenka dzielnie poprowadzili rodziców do ołtarza, a ksiądz przywitał ich ciepło w zakrystii. Ceremonia przebiegła z uśmiechem na ustach i widać było wielką radość Joli i Tomka, jakby długo czekali na to sakramentalne TAK. Wesele odbyło się w Domu Weselnym w Jabłonce znanym pod nazwą <a href="https://przystanwkabanosie.pl/pl/page/27/Restauracja_Jablonka/" target="_blank" rel="nofollow">Przystań w Kabanosie</a>. Po góralsku i nie tylko przygrywał <a href="https://facebook.com/kapelazwyk" target="_blank" rel="nofollow">Zespół Zwyk</a>. Było Despacito, Sławomir i inne weselne szlagiery. Zespół zafundował też zabawę z pończochami, która skutecznie rozbawiła gości weselnych. Oczepiny wyłoniły kolejną parę, która wkrótce pojawi się przed ołtarzem, a zabawa trwała do rana. Działo się dużo jak to w górach. Jolu i Tomku cieszę się bardzo, że mogłem być tam z Wami w tych najważniejszych chwilach Waszego życia. Macie super dzieciaki. Zapraszam do oglądania wybranych zdjęć. Po więcej zapraszam do strefy klienta z hasłem z mojej wizytówki, które można było tradycyjnie już odnaleźć przy ekspresie do kawy.'
                    }
                    slug={"dom-weselny-w-jablonce-zdjecia-slubne-przystan-w-kabanosie"}
                    title={"DOM WESELNY W JABŁONCE, ZDJĘCIA ŚLUBNE PRZYSTAŃ W KABANOSIE - JOLA i TOMEK"}
                    tags={"Dom weselny w Jabłonce, zdjęcia ślubne Przystań w Kabanosie, fotograf na wesele Jabłonka"}
                    date={"10 luty 2017"}
                    menuNames={"JOLA i TOMEK"}
                    menuTitle={"DOM WESELNY W JABŁONCE, ZDJĘCIA ŚLUBNE PRZYSTAŃ W KABANOSIE"}
                    leadNames={"KINGA i MACIEK"}
                    leadTitle={"DEKORACJA SALI WESELNEJ W STYLU RUSTYKALNYM, OSP ZAWADA"}
                    leadUrl={"/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada"}
                    leadImage={"url(/static/dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.jpg)"}
                />
            </div>
        );
    }
}
