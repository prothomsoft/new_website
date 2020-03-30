import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/krakowska_sesja_poslubna_renaty_i_jacka_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2015/10/sesja_poslubna_krakow_0033.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_002.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_003.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_005.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_007.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_009.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_011.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_014.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_015.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_017.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_018.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_019.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_021.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Krakowska sesja ślubna Renaty i Jacka"}
                    headDescription={"Wszystkich, którym debata przedwyborcza podniosła ciśnienia , serdecznie zapraszam na mojego bloga i wpis plenerowy Renaty i Jacka."}
                    headKeywords={"sesja ślubna kazimierz,plener ślubny w krakowie"}
                    headUrl={"https://99foto.pl/krakowska-sesja-poslubna-renaty-i-jacka/"}
                    entryContentP1={
                        "Trzy dni po udanej zabawie w Pałacu Śmiłowice spotkaliśmy się ponownie, tym razem w Krakowie na ślubnej sesji plenerowej. Padający poniedziałkowy śnieg, którego nikt nie spodziewał się na początku października przekreślił nasz początkowy plan na poniedziałkowy spacer po Rynku i Kazimierzu. Pogoda we wtorek okazała się na nasze szczęście o niebo lepsza i szybką decyzją postanowiliśmy zrealizować plan na sesję właśnie tego dnia. Spotkaliśmy się pod Teatrem Słowackiego."
                    }
                    entryContentP2={
                        "Po krótkim wprowadzeniu z pozowania, wędrując przez Rynek dotarliśmy na Kazimierz, aż do Kładki Bernatki. Spacerując rozmawialiśmy o rzeczach mniej i bardziej technicznych (bo Jacek okazał się być moim kolegą po fachu). Mam nadzieję, że Renata i Jacek będą dobrze wspominać ten dzień. Miłego oglądania i po więcej zapraszam do strefy klienta."
                    }
                    slug={"krakowska-sesja-poslubna-renaty-i-jacka"}
                    title={"KRAKOWSKA SESJA ŚLUBNA - RENATA i JACEK"}
                    tags={"sesja ślubna kazimierz,plener ślubny w krakowie"}
                    date={"20 października 2015"}
                    menuNames={"RENATA i JACEK"}
                    menuTitle={"KRAKOWSKA SESJA ŚLUBNA"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={"url(/static/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg)"}
                />
            </div>
        );
    }
}
