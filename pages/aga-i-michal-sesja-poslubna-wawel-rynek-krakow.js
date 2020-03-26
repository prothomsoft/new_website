import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/aga_i_michal_sesja_poslubna_wawel_rynek_krakow_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rynek_wawel_krakow_0003.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rynek_wawel_krakow_0002.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rynek_wawel_krakow_0001.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rynek_wawel_krakow_0004.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rynek_wawel_krakow_0005.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rynek_wawel_krakow_0006.jpg", height: 852 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rynek_wawel_krakow_0007.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rynek_wawel_krakow_0008.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rynek_wawel_krakow_0010.jpg", height: 851 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rynek_wawel_krakow_0009.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rynek_wawel_krakow_0011.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rynek_wawel_krakow_0012.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rynek_wawel_krakow_0013.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rynek_wawel_krakow_0014.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rynek_wawel_krakow_0015.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rynek_wawel_krakow_0016.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rynek_wawel_krakow_0017.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rynek_wawel_krakow_0018.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rynek_wawel_krakow_0019.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rynek_wawel_krakow_0020.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rynek_wawel_krakow_0021.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_rynek_wawel_krakow_0022.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/09/99FOTOPL_SPM_087.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Plener ślubny w sercu Krakowa. Krakowski Rynek Główny i Wawel."}
                    headDescription={"Plener ślubny na Krakowskim Rynku, zdjęcia ślubne Wawel. Zapraszam do oglądania."}
                    headKeywords={"plener ślubny krakowski rynek, zdjęcia ślubne wawel"}
                    headUrl={"http://wp.99foto.pl/aga-i-michal-sesja-poslubna-wawel-rynek-krakow/"}
                    entryContentP1={
                        "Kraków i jego najbardziej znane miejsce na plener czyli Rynek i Wawel przez wielu określane są mianem miejsc oklepanych. Dlatego też młodzi najczęściej mało entuzjastycznie przyjmują propozycję sesji ślubnej właśnie tam. Tymczasem wędrując przez Kraków z aparatem można odkryć wiele ciekawych zakamarków, co więcej dysponując odrobiną czasu i wychodząc ze strefy komfortu w poszukiwaniu nowych ujęć, można odkryć nowe kadry i ciekawe miejsca. Mam nadzieję, że było dokładnie tak i tym razem."
                    }
                    entryContentP2={
                        "Agnieszka i Michał wychowali się w Krakowie, a na Wawelu spędzali swój szkolny wolny czas i bardzo się cieszę, że pomimo tego krakowski Rynek i Wawel był dla nich wciąż atrakcyjnym, a momentami może nawet sentymentalnym miejscem na plener. Spacer rozpoczęliśmy od Teatru Słowackiego skąd przez Rynek dotarliśmy do Wawelu. Zapraszam na zdjęcia i miłego oglądania."
                    }
                    slug={"aga-i-michal-sesja-poslubna-wawel-rynek-krakow"}
                    title={"PLENER ŚLUBNY WAWEL RYNEK KRAKÓW - AGNIESZKA i MICHAŁ"}
                    tags={"plener ślubny krakowski rynek,zdjęcia ślubne wawel"}
                    date={"27 września 2015"}
                    menuNames={"AGNIESZKA i MICHAŁ"}
                    menuTitle={"PLENER ŚLUBNY WAWEL RYNEK KRAKÓW"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={"url(/static/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg)"}
                />
            </div>
        );
    }
}
