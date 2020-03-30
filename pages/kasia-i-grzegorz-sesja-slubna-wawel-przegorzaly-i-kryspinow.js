import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/kasia_i_grzegorz_sesja_slubna_wawel_przegorzaly_i_kryspinow_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0001.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0002.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0005.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0006.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0008.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0010.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0011.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0013.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0014.jpg", height: 761 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0017.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0020.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0021.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0024.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/08/plener_slubny_krakow_0016.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sesja ślubna Wawel, Przegorzały i Kryspinów"}
                    headDescription={"Miłe popołudnie w fajnych miejscach, dobrych humorach i przy świetnej pogodzie. Plener ślubny Kasi i Grzegorza na Wawelu, Przegorzałach i Kryspinowie."}
                    headKeywords={"sesja ślubna kraków,sesja ślubna przegorzały"}
                    headUrl={"https://99foto.pl/kasia-i-grzegorz-sesja-slubna-wawel-przegorzaly-i-kryspinow/"}
                    entryContentP1={
                        'Kasia i Grzegorz na plener ślubny wybrali się do Krakowa. Jako fotograf ślubny zaproponowałem trasę naszego popołudniowego spaceru. Tym razem zaczęliśmy zdjęcia na Wawelu, gdzie udało mi się wymyślić kilka fajnych nowych kadrów i jestem z nich bardzo zadowolony. Następnie w drodze na łąkę z widokiem na Klasztor Kamedułów zatrzymaliśmy się w Zamku Przegorzały i zrobiliśmy zdjęcie panoramy Krakowa z tarasu w <a href="https://www.uziyada.krakow.pl" target="_blank" rel="nofollow">Restauracji u Ziyada</a>. Plener kończyliśmy w Kryspinowie korzystając z ostatnich promieni zachodzącego słońca.'
                    }
                    entryContentP2={
                        "Naszej plenerowej wyprawie towarzyszyli Przemek i Agnieszka. Agnieszka dzielnie pomagała rozśmieszając Kasię, natomiast Przemek asystował łapiąc zajączki z blendy. Myślę, że wszyscy spędziliśmy miłe popołudnie w fajnych miejscach, dobrych humorach i świetnej pogodzie. Zapraszam na zdjęcia z tej wyprawy plenerowej i życzę miłego oglądania."
                    }
                    slug={"kasia-i-grzegorz-sesja-slubna-wawel-przegorzaly-i-kryspinow"}
                    title={"SESJA ŚLUBNA WAWEL, PRZEGORZAŁY i KRYSPINÓW - KASIA i GRZEGORZ"}
                    tags={"sesja ślubna kraków,sesja ślubna przegorzały"}
                    date={"30 sierpnia 2016"}
                    menuNames={"KASIA i GRZEGORZ"}
                    menuTitle={"SESJA ŚLUBNA WAWEL, PRZEGORZAŁY i KRYSPINÓW"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={"url(/static/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg)"}
                />
            </div>
        );
    }
}
