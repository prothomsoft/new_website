import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/kasia_i_pawel_zimowa_sesja_slubna_w_gorach_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0001.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0004.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0005.jpg", height: 335 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0006.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0009.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0010.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0015.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0018.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0020.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0022.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0023.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0024.jpg", height: 806 },
            { imageSrc: "https://99foto.pl/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0017.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Zimowa sesja ślubna w górach"}
                    headDescription={"Trochę nam wczoraj tyłki zmarzły, ale warto było, żeby odetchnąć świeżym powietrzem i zrobić kilka niezapomnianych zdjęć. Miłego oglądania."}
                    headKeywords={"zimowa sesja ślubna w górach,plener ślubny czarna góra"}
                    headUrl={"https://99foto.pl/kasia-i-pawel-zimowa-sesja-slubna-w-gorach/"}
                    entryContentP1={
                        "Minus trzydzieści na termometrach w górach, pełno śniegu, czyste niebo i świecące słońce. Stok na Czarnej Górze pełny narciarzy. Po drugiej stronie tego wzniesienia fajowa panorama tatr i bielutki, zupełnie niewydeptany śnieg. Trochę nam tyłki zmarzły tego dnia, ale warto było, żeby odetchnąć świeżym powietrzem i zrobić kilka niezapomnianych zdjęć."
                    }
                    entryContentP2={
                        "Na plener wyjechaliśmy o godzinie ósmej rano z Krakowa. Po drodze zabraliśmy dróżkę Anię, której za pomoc przy zdjęciach bardzo dziękuję. Paweł dzielnie przemierzał śnieg w butach ślubnych bez czapki. Natomiast wszystkie Panie mogą brać przykład z Kasi, bo rok po ślubie, a suknia wciąż pasuje. Miłego oglądania."
                    }
                    slug={"kasia-i-pawel-zimowa-sesja-slubna-w-gorach"}
                    title={"ZIMOWA SESJA ŚLUBNA W GÓRACH - KASIA i PAWEŁ"}
                    tags={"zimowa sesja ślubna w górach,plener ślubny czarna góra"}
                    date={"8 stycznia 2017"}
                    menuNames={"KASIA i PAWEŁ"}
                    menuTitle={"ZIMOWA SESJA ŚLUBNA W GÓRACH"}
                    leadNames={"OLA i PAWEŁ"}
                    leadTitle={"DWÓR SZLACHECKI SIECIECHOWICE, REPORTAŻ ŚLUBNY MIECHÓW"}
                    leadUrl={"/dwor-szlachecki-sieciechowice-reportaz-slubny-miechow"}
                    leadImage={"url(/static/dwor_szlachecki_sieciechowice_reportaz_slubny_miechow_start.jpg)"}
                />
            </div>
        );
    }
}
