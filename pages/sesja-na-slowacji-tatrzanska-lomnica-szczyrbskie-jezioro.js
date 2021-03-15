import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sesja_slubna_na_slowacji.jpg"
            }
        ];

        let images = [
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0004.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0002.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0005.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0006.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0011.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0018.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0031.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0012.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0029.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0030.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0039.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0032.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0034.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0038.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0041.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/10/sesja_slubna_na_slowacji_0043.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sesja ślubna na Słowacji, Tatrzańska Łomnica, Jezioro Szczyrbskie"}
                    headDescription={"Piękne miejsca w Wysokich Tatrach czyli Tatrzańska Łomnica i Jezioro Szczyrbskie. Sesja ślubna Edyty i Roberta na Słowacji. Zapraszam na bloga."}
                    headKeywords={"sesja ślubna Słowacja, Tatrzańska Łomnica, Jezioro Szczyrbskie, sesja zdjęciowa w Wysokich Tatrach"}
                    headUrl={"https://99foto.pl/sesja-na-slowacji-tatrzanska-lomnica-szczyrbskie-jezioro/"}
                    entryContentP1={
                        'Trafić dobrą pogodę w Tatrach, szczególnie jesienią, być tam w momencie gdy górskie szczyty oświetlają ciepłe promienie słońca, a liście mienią się w kolorach złota, to rzecz niełatwa. Jednak nie po raz pierwszy i mam taką nadzieję nie po raz ostatni, udało się nam upolować taki idealny dzień i do naszej codzienności dołożyć kilka przemiłych wspomnień i kolorowych fotograficznych kadrów. Dzień rozpoczął się wcześnie rano. Po drodze z Krakowa wiadomo duża flat white i zdrapki na Orlenie, rozmowy o przyszłych planach z Edytą i Robertem i jedno wielkie ładowanie akumulatorów boskim widokiem gór, który najnormalniej w świecie uwielbiam. Przekroczyliśmy granicę ze Słowacją i kolejką górską dostaliśmy się na Tatrzańską Łomnicę. Góry zaskakują. Tak było również i tym razem. Łomnicki Staw, który zwykle przypominał Morskie Oko niemalże zniknął. Pozwoliło nam to na rajd po kamieniach i dostęp do miejsc wcześniej niedostępnych.'
                    }
                    entryContentP2={
                        'Wykorzystując zapas czasu, delektując się promieniami słońca i wdychając powietrze, o jakim w Krakowie można tylko pomarzyć, wdrapaliśmy się dość wysoko niemalże pod sam szczyt. Po dobrych czterech godzinach zjechaliśmy na dół, ponieważ w naszym planie dnia był jeszcze zachód słońca nad Szczyrbskim Jeziorem. Kierując się opiniami, które można znaleźć na forach fotograficznych miejsce to jest najpopularniejszym miejscem plenerowym tego i ubiegłego roku. Myślę, że udało nam się wykorzystać jego potencjał i stworzyć kilka klasyków ze schroniskiem i skocznią narciarską w tle. Był to z pewnością dzień wykorzystany na maksa, zwłaszcza, że następnego dnia w górach spadł śnieg. Na koniec powiem Wam, że w sumie to dobrze, że tydzień wcześniej górale zamknęli wyjazd kolejką na Kasprowy Wierch, po prostu tak miało być. Serdecznie zapraszam do oglądania zdjęć z sesji zdjęciowej Edyty i Roberta i życzę miłego oglądania.'
                    }
                    slug={"sesja-na-slowacji-tatrzanska-lomnica-szczyrbskie-jezioro"}
                    title={"SESJA NA SŁOWACJI, TATRZAŃSKA ŁOMNICA, SZCZYRBSKIE JEZIORO - EDYTA i ROBERT"}
                    tags={"sesja ślubna Słowacja, Tatrzańska Łomnica, Jezioro Szczyrbskie, sesja zdjęciowa w Wysokich Tatrach"}
                    date={"8 października 2019"}
                    menuNames={"EDYTA i ROBERT"}
                    menuTitle={"SESJA NA SŁOWACJI, TATRZAŃSKA ŁOMNICA, SZCZYRBSKIE JEZIORO"}
                    leadNames={"TERESA i ANDRZEJ"}
                    leadTitle={"PARK MOGILANY, BUZIAKI SKĄPANE W PROMIENIACH SŁOŃCA"}
                    leadUrl={"/park-mogilany-i-moc-buziakow-skapanych-w-promieniach-slonca"}
                    leadImage={"url(/static/sesja_narzeczenska_klasztor_w_tyncu.jpg)"}
                />
            </div>
        );
    }
}