import { useState, useEffect } from "react";
import Blogpage from "../components/blogpage";
import { isWebPSupport } from "../components/utils/checkWebP";

const BlogPageComponent = () => {
    const [supported, setSupported] = useState(false);
    useEffect(() => {
        isWebPSupport((result) => {
            setSupported(result);
        });
    }, []);

    let slide = [];

    if (supported) {
        slide = [
            {
                imageUrl: "/static/webp/sesja_slubna_palac_goetza.webp",
            },
        ];
    } else {
        slide = [
            {
                imageUrl: "/static/sesja_slubna_palac_goetza.jpg",
            },
        ];
    }

    let images = [
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_001.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_002.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_003.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_020.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_012.jpg", height: 851 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_008.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_016.jpg", height: 805 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_006.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_024.jpg", height: 594 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_011.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_014.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_017.jpg", height: 526 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_018.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_015.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_023.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_009.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_022.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_005.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_004.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_007.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_013.jpg", height: 762 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_021.jpg", height: 527 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_019.jpg", height: 762 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_010.jpg", height: 763 },
    ];

    return (
        <Blogpage
            slide={slide}
            images={images}
            headTitle={"Pałac Goetz, miejsce na wesele i plener ślubny marzeń"}
            headDescription={"Zapraszam Was do Brzeska. Pałac Goetz, miejsce na eleganckie wesele i plener ślubny marzeń. Serdecznie zapraszam na bloga..."}
            headKeywords={"Pałac Goetz Brzesko, eleganckie wesele w pałacu, plener ślubny marzeń"}
            headUrl={"https://99foto.pl/palac-goetz-wesele-plener-slubny/"}
            entryContentP1={
                "Zapraszam Was do Brzeska. Pałac Goetz to miejsce niecodzienne i idealne na plener ślubny. Nie wiem czy filantrop i mecenas sztuki Albin Goetz planował, że wzniesiony przez niego okazały pałac w przyszłości będzie pełnił rolę liceum ogólnokształcącego, doprowadzony do ruiny przetrwa trudne czasy i w końcu odzyska dawny blask, stając się miejscem idealnym na wesele czy plener ślubny. Jest to bez wątpienie jedno z najbardziej popularnych miejsc plenerowych w Małopolsce. Koszt związany z możliwością wykonania zdjęć ślubnych w pałacu gwarantuje względny spokój tego miejsca. Gdyby nie to kolejka chętnych do zdjęć par młodych i towarzyszących im fotografów ślubnych byłaby nie krótsza od tej na Kasprowy Wierch w Zakopanem."
            }
            entryContentP2={
                "Pałac Goetz jest miejscem niezwykłym. Znajdziemy tam nie tylko monumentalne schody, ale też wytworną czytelnię wykorzystywaną w produkcjach filmowych, przepiękny ogród i kaplicę, w której każdego roku kilka par młodych przyrzeka sobie miłość na zawsze. Sesja ślubna, którą za moment obejrzycie spełnia marzenia Anny i Pawła. Przeglądając internet trafili oni na mojego bloga i jeden z wpisów o sesji ślubnej w Pałacu Goetz. Pomimo, że nie fotografowałem ich ślubu blogowe zdjęcia podpowiedziały im, że dam radę i zatrzymamy czas na ponadczasowych fotografiach. Serdecznie zapraszam na kilka zdjęć z tego pleneru i jak zwykle życzę miłego oglądania."
            }
            slug={"palac-goetz-wesele-plener-slubny"}
            title={"PAŁAC GOETZ MIEJSCE NA WESELE i PLENER ŚLUBNY MARZEŃ - ANNA i PAWEŁ"}
            tags={"Pałac Goetz Brzesko, eleganckie wesele w pałacu, plener ślubny marzeń"}
            date={"14 marca 2021"}
            menuNames={"ANNA i PAWEŁ"}
            menuTitle={"PAŁAC GOETZ MIEJSCE NA WESELE i PLENER ŚLUBNY MARZEŃ"}
            leadNames={"TERESA i ANDRZEJ"}
            leadTitle={"PLENER ŚLUBNY W KRAKOWSKIM OGRODZIE BOTANICZNYM"}
            leadUrl={"/plener-slubny-w-krakowskim-ogrodzie-botanicznym"}
            leadImage={supported ? "url(/static/webp/plener_slubny_krakowski_ogrod_botaniczny.webp)" : "url(/static/plener_slubny_krakowski_ogrod_botaniczny.jpg)"}
        />
    );
};

export default BlogPageComponent;
