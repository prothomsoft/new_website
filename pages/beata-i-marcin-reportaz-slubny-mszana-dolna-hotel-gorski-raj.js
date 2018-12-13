import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/beata_i_marcin_reportaz_slubny_mszana_dolna_hotel_gorski_raj_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/beata.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0002.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0003.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0005.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0008.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0007.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0009.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0012.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0013.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0017.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0018.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0019.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0021.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0022.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0023.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0027.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0028.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0030.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0031.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0032.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0033.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0035.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0036.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0038.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0039.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0041.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0042.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0043.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0044.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0046.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0048.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0049.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0050.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0051.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0052.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0054.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0055.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0056.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0057.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0058.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0059.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0060.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0061.jpg", height: 806 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0062.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0063.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0064.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0065.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0131.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0067.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0068.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0069.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0070.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0071.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0072.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0073.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0074.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0075.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0076.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0077.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0078.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0079.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0080.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0081.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0132.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0083.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0084.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0085.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0086.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0087.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0088.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0089.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0090.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0091.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0092.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0093.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0094.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0095.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0096.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0097.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0098.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0099.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0100.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0101.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0102.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0103.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0104.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0105.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0108.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0107.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0110.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0109.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0111.jpg", height: 806 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0112.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0113.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0115.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0116.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0117.jpg", height: 806 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0118.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0119.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0120.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0121.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0122.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0123.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0124.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0125.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0126.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0127.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0128.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0129.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0114.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/06/reportaz_slubny_krakow_0106.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Reportaż ślubny Kraków, zdjęcia w Hotelu Górski Raj"}
                    headDescription={"Malowniczo położony Niedźwiedź i konkurujący z najpiękniejszymi w Krakowie Kościół Św. Michała w Mszanie Dolnej. Serdecznie zapraszam na reportaż ślubny."}
                    headKeywords={"reportaż ślubny kraków,fotograf ślubny kraków,zdjęcia ślubne w hotelu górski raj niedźwiedź"}
                    headUrl={"https://99foto.pl/beata-i-marcin-reportaz-slubny-mszana-dolna-hotel-gorski-raj/"}
                    entryContentP1={
                        'Drugi raz w tym roku odwiedzam Mszanę Dolną i przepiękny <a href="https://www.parafiamszanadolna.pl/" target="_blank">Kościół Św. Michała</a>, który z powodzeniem może konkurować z Krakowskimi perełkami, jakimi są <a href="https://kolegiata-anna.pl/" target="_blank">Kościół Św. Anny</a> czy <a href="https://www.mariacki.com/index.php/pl/" target="_blank">Bazylika Mariacka</a>. Do wykonania reportażu ponad rok wcześniej zaprosili mnie Beata i Marcin. Zdjęcia zaczęliśmy od przygotowań. Fryzura, staranny i delikatny makijaż oraz ubieranie sukni ślubnej odbyło się w dobrych humorach i rodzinnej atmosferze. Już chwilę później pędziłem do Niedźwiedzia, a dokładniej mówiąc do <a href="https://www.gorskiraj.com" target="_blank">Hotelu Górski Raj</a> gdzie odbyły się przygotowania Pana Młodego.'
                    }
                    entryContentP2={
                        'iedy już Marcin odebrał swoją przyszłą żonę, błogosławieństwo od rodziców i upewnił się, że w samochodzie jest wystarczająco dużo sprzętów, żeby przebrnąć przez bramy udaliśmy się do <a href="https://www.parafiamszanadolna.pl/" target="_blank">Kościoła Świętego Michała</a> w Mszanie Dolnej. Podczas ceremoni młodzi powiedzieli sobie sakramentalne TAK i z uśmiechem na ustach udali się do sali weselnej. Tam tradycyjnie rodzice przywitali ich chlebem i solą. Zabawa trwała do samego rana, a DJ serwował gościom weselnym niespotykaną ilość zabaw i niespodzianek (włączając w to po mistrzowsku przeprowadzony konkurs z grosikiem i ekspresem do kawy). Wspaniały wieczór i przepiękny dzień pełny wspomnień. Zapraszam zatem na krótką historię Beaty i Marcina! Miłego oglądania.'
                    }
                    slug={"beata-i-marcin-reportaz-slubny-mszana-dolna-hotel-gorski-raj"}
                    title={"REPORTAŻ ŚLUBNY MSZANA DOLNA - HOTEL GÓRSKI RAJ - BEATA i MARCIN"}
                    tags={"reportaż ślubny kraków,fotograf ślubny kraków,zdjęcia ślubne w hotelu górski raj niedźwiedź"}
                    date={"3 listopada 2017"}
                    menuNames={"BEATA i MARCIN"}
                    menuTitle={"REPORTAŻ ŚLUBNY MSZANA DOLNA - HOTEL GÓRSKI RAJ"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"ZDJĘCIA ŚLUBNE RESTAURACJA STEK SKAWINA"}
                    leadUrl={"/zdjecia-slubne-restauracja-stek-skawina"}
                    leadImage={"url(/static/zdjecia_slubne_restauracja_stek_skawina_start.jpg)"}
                />
            </div>
        );
    }
}
