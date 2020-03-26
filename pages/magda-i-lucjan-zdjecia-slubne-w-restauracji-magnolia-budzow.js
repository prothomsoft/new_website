import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/magda_i_lucjan_zdjecia_slubne_w_restauracji_magnolia_budzow_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0002.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0004.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0003.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0005.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0006.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0007.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0009.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0008.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0010.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0011.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0012.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0013.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0014.jpg", height: 757 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0015.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0016.jpg", height: 757 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0017.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0018.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0019.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0020.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0021.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0022.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0023.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0024.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0025.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0027.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0026.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0028.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0029.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0030.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0031.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0032.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0033.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0034.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0035.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0036.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0037.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0038.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0039.jpg", height: 851 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0040.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0041.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0042.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0043.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0044.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0045.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0046.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0001.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0047.jpg", height: 757 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0048.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0049.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0050.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0051.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0052.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0053.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0054.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0055.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0056.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0057.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0058.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0059.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0060.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0061.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0062.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0063.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0064.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0065.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0066.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0067.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0068.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0069.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0070.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0071.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0072.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0073.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0074.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0075.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0076.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0077.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0078.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0079.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0080.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0081.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0082.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0083.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0084.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0085.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0086.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0087.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0088.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0089.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0090.jpg", height: 851 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0091.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0092.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0093.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0094.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0095.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0096.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0097.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0098.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0099.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0100.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0101.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0102.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0103.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0104.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0105.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0106.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0107.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0108.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0109.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0110.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0111.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0112.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0113.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0114.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0115.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0116.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0117.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0118.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0119.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0120.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0121.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0122.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0123.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0124.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2015/06/restauracja_magnolia_budzow_0125.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Zdjęcia ślubne Restauracja Magnolia Budzów"}
                    headDescription={"W niedzielne deszczowe popołudnie zapraszam na nowy wpis na moim blogu. Tym razem historia ślubna Magdy mamy Kacpra i Lucjana kibica Wisły Kraków."}
                    headKeywords={"zdjęcia ślubne restauracja magnolia budzów,fotograf na wesele stronie,fotograf na ślub zakrzów"}
                    headUrl={"http://wp.99foto.pl/magda-i-lucjan-zdjecia-slubne-w-restauracji-magnolia-budzow/"}
                    entryContentP1={
                        'Magdę, Kacpra i Lucjana mieliście okazję już poznać podczas <a href="http://wp.99foto.pl/magda-lucjan-i-kacperek-sesja-narzeczenska-krakow/" target="blank">sesji narzeczeńskiej</a>, którą wykonaliśmy w Ogrodzie Botanicznym w Krakowie. Dzisiaj część druga naszej wspólnej przygody, a niedługo będzie też i trzecia. Ten oto najważniejszy dzień rozpoczęliśmy w Wadowicach, gdzie <a href="https://www.facebook.com/pages/Lena-Czechowicz-Make-up-Fun/416942605060114" target="_blank" rel="nofollow">Lena Czechowicz</a> wykonała mistrzowski makijaż. Przygotowania do ślubu i błogosławieństwo miało miejsce w Stroniu, w domu rodzinnym Lucjana. Dalej pierwsza brama, na której Lucjana zaskoczyli klubowi koledzy. Były race, śpiewy oraz celny strzał do bramki.'
                    }
                    entryContentP2={
                        'Ksiądz z uśmiechem na ustach przeprowadził młodych przez ceremonię i wkrótce potem znaleźliśmy się w <a href="https://magnolia-restauracja.pl/" target="blank">Restauracji Magnolia</a> w miejscowości Budzów. Zespół muzyczny z Rzeszowa dawał radę i parkiet zapełniał się bardzo szybko. Humory dopisywały, co jak myślę udało się też uwiecznić na zdjęciach. Pozdrowienia dla Wszystkich gości i miłego oglądania. Pamiętajcie, że więcej zdjęć znajdziecie w strefie klienta – o hasło pytajcie Magdę lub Lucjana.'
                    }
                    slug={"magda-i-lucjan-zdjecia-slubne-w-restauracji-magnolia-budzow"}
                    title={"ZDJĘCIA ŚLUBNE W RESTAURACJI MAGNOLIA BUDZÓW - MAGDA i LUCJAN"}
                    tags={"zdjęcia ślubne restauracja magnolia budzów,fotograf na wesele stronie,fotograf na ślub zakrzów"}
                    date={"28 czerwca 2015"}
                    menuNames={"MAGDA i LUCJAN"}
                    menuTitle={"ZDJĘCIA ŚLUBNE W RESTAURACJI MAGNOLIA BUDZÓW"}
                    leadNames={"MONIKA i RAFAŁ"}
                    leadTitle={"ZDJĘCIA ŚLUBNE KRAKÓW, RESTAURACJA CHOCHOŁOWY DWÓR"}
                    leadUrl={"/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor"}
                    leadImage={"url(/static/monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_start.jpg)"}
                />
            </div>
        );
    }
}
