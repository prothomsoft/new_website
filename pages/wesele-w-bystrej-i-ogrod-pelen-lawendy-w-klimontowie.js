import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: process.env.staticImagesPath + "karolinka_bystra_podhalanska_wesele.jpg",
            },
        ];

        let images = [
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0002.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0012.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0010.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0014.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0015.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0016.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0017.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0019.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0024.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0028.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0029.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0039.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0033.jpg", height: 382 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0035.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0036.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0048.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0049.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0051.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0053.jpg", height: 382 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0055.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0059.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0061.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0064.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0066.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0067.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0068.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0069.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0071.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0074.jpg", height: 382 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0079.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0082.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0083.jpg", height: 526 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0086.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0088.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0091.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0095.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0096.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0098.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0101.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0108.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0109.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0111.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0115.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0117.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0120.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0123.jpg", height: 382 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0122.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/karolinka_bystra_podhalanska_wesele_0127.jpg", height: 763 },
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Wesele w Bystrej i Ogród Pełen Lawendy w Klimnotowie"}
                    headDescription={"Nowoczesnw sala weselna Karolinka w Bystrej. Ostatnie promienie zachodzącego słońca w Ogrodzie Pełnym Lawendy w Klimontowie. Serdecznie zapraszam."}
                    headKeywords={"wesele w bystrej, ogród pełen lawendy klimontów, plener o zachodzie słońca"}
                    headUrl={"https://99foto.pl/wesele-w-bystrej-i-ogrod-pelen-lawendy-w-klimontowie/"}
                    entryContentP1={
                        "Niedziela i popołudniowa kawa to najlepszy moment by wygodnie usiąść w fotelu i zaglądnąć na bloga i do strefy klienta tak po prostu dla przypomnienia sobie wydarzeń ubiegłej soboty. Tym razem w jednym wpisie blogowym zawarłem wybrane zdjęcia ślubne i dla wytrwałych w scrollowaniu kilka zdjęć z pleneru, który zrobiliśmy w tygodniu po ślubie w Ogrodzie Pełnym Lawendy w Klimontowie. Osoby, które śledzą mojego bloga i wpisy na facebooku wiedzą, że bardzo często odwiedzam okolice Jordanowa, Bystrej, Naprawy i Krzczonowa. Tym razem miałem przyjemność fotografowąć piękny ślub Natalii i Tomasza. Niedługo spotykamy się w podobnym składzie na ślubie Kasi i Michała, a za rok balujemy u Patrycji i Bartka. Mam nadzieję, że przy Statule Wolności w Karolince spotkamy się w tym składzie jeszcze nie raz. Kto był ten wie, że wieżę Eiffla można zobaczyć nie tylko w Paryżu."
                    }
                    entryContentP2={
                        "Dzień rozpoczęliśmy od makijażu w Mszanie, następnie sprintem wybraliśmy się do Krzczonowa na przygotowania Natalii i Naprawy dopiąć przygotowania Tomasza na ostatni guzik. Przyjaciele Pary Młodej stanęli na wysokości zadania i przygotowali niesamowite bramy wyciągając drobne zabawki ze swoich garaży. Tomasz jedną skrzynkę zostawił strażakom i imprezę w Bystrej uznaliśmy za otwartą. Robert i Przemek starannie dobierali muzę i pobili rekord w ilości przeprowadzonych konkursów. Goście bawili się świętnie do białego rana i poprawiali temat jeszcze dnia następnego. Serdecznie zapraszam na kilka zdjęć z tego dnia i kilka zdjęć ze słonecznego pleneru na Lawendowym Polu w Klimontowie. W strefie klienta znajdziecie rekordową ilość zdjęć. Miłego oglądania."
                    }
                    slug={"wesele-w-bystrej-i-ogrod-pelen-lawendy-w-klimontowie"}
                    title={"WESELE W BYSTREJ I OGRÓD PEŁEN LAWENDY W KLIMONTOWIE - NATALIA i TOMASZ"}
                    tags={"wesele w bystrej, ogród pełen lawendy klimontów, plener o zachodzie słońca"}
                    date={"05 lipca 2020"}
                    menuNames={"NATALIA i TOMASZ"}
                    menuTitle={"WESELE W BYSTREJ I OGRÓD PEŁEN LAWENDY W KLIMONTOWIE"}
                    leadNames={"PATRYCJA i KRZYSZTOF"}
                    leadTitle={"DWOREK FANTAZJA SKOMIELNA BIAŁA i ŚLUB W STYLU GLAMOUR"}
                    leadUrl={"/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour"}
                    leadImage={"url(/static/dworek_fantazja_skomielna_biala_fotograf.jpg)"}
                />
            </div>
        );
    }
}
