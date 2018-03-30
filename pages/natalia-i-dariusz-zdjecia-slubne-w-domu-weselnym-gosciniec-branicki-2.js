import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/natalia_i_dariusz_zdjecia_slubne_w_domu_weselnym_gosciniec_branicki_2_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0001.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0002.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0003.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0004.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0005.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0006.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0007.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0008.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0009.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0010.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0011.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0012.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0013.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0014.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0015.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0016.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0017.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0018.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0019.jpg", height: 526 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0020.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0021.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0022.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0023.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0024.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0025.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0026.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0027.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0028.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0029.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0030.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0031.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0035.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0032.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0034.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0033.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0036.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0037.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0038.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0039.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0049.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0040.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0048.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0047.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0041.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0042.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0044.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0043.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0050.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0046.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0045.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0053.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0051.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0052.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0054.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0055.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0056.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0057.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0058.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0059.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0060.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0061.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0062.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0063.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0064.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0065.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0066.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0067.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0068.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0069.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0070.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0071.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0072.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0073.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0074.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0075.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0076.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0077.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0078.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0079.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0080.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0081.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0082.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0083.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0084.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0085.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0086.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0087.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0088.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0089.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0090.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0091.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0092.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0093.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0094.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0095.jpg", height: 526 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0097.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0098.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0099.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0100.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0101.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0102.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0103.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0104.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0105.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0106.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0107.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Zdjęcia Ślubne w Domu weselnym Gościniec Branicki"}
                    headDescription={"Serdecznie zapraszam na otwarcie sezonu 2k16 do Domu weselnego Gościniec Branicki na wspaniały ślub Natalii i Darka. Dużo fajnego działo się tego dnia."}
                    headKeywords={"zdjęcia ślubne gościniec branicki,fotograf na wesele kraków,fotograf ślubny kraków"}
                    headUrl={"http://99foto.pl/natalia-i-dariusz-zdjecia-slubne-w-domu-weselnym-gosciniec-branicki-2/"}
                    entryContentP1={
                        'Połowa kwietnia i niezwykle udany początek nowego sezonu ślubnego. Wszystko to dzięki Natalii i Darkowi, którzy w ubiegłą sobotę powiedzieli sobie TAK. Tego dnia wstałem i wiedziałem, że będzie to wspaniały dzień. Przygotowania zaczęliśmy od zaledwie podkreślenia urody Natalii w jej domu rodzinnym. Żadnych oznak stresu, świetny humor i uśmiech na twarzy. Darek przyjechał planowo, a razem z nim przybyli jego rodzice. Ropoczęło się błogosławieństwo po którym udaliśmy się do <a href="http://www.wzgorza.diecezja.krakow.pl" target="_blank">Kościoła Miłosierdzia Bożego na Wzgórzach Krzesławickich</a>, gdzie odbył się ślub.'
                    }
                    entryContentP2={
                        'Pomimo wyniosłej atmosfery i całej powagi sytuacji, uśmiechów nie zabrakło. Po życzeniach i zdjęciu grupowym udaliśmy się na salę weselną w <a href="http://gosciniec-branicki.pl/" target="_blank">Domu weselnym &#8211; Gościeniec Branicki</a>, gdzie na młodych czekali już rodzice, witając ich chlebem i solą. Wesele&#8230; istne szaleństwo, od pierwszych utworów. Doskonała ekipa, wspaniali goście, naprawdę rewelacyjny wieczór, który chyba nie tylko ja wspominam najlepiej. Bardzo dziękuję Natalii i Darkowi, za to, że mogłem towarzyszyć im w tym szczególnym dniu, naprawdę była to dla mnie przyjemność. Na szczęście to nie koniec przygód i czeka nas jeszcze sesja plenerowa&#8230; Tymczasem zapraszam na reportaż i do strefy klienta po więcej zdjęć z tego dnia!'
                    }
                    slug={"natalia-i-dariusz-zdjecia-slubne-w-domu-weselnym-gosciniec-branicki-2"}
                    title={"ZDJĘCIA ŚLUBNE W DOMU WESELNYM GOŚCINIEC BRANICKI - NATALIA i DAREK"}
                    tags={"zdjęcia ślubne gościniec branicki,fotograf na wesele kraków,fotograf ślubny kraków"}
                    date={"21 kwietnia 2016"}
                    menuNames={"NATALIA i DAREK"}
                    menuTitle={"ZDJĘCIA ŚLUBNE W DOMU WESELNYM GOŚCINIEC BRANICKI"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={"url(/static/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg)"}
                />
            </div>
        );
    }
}
