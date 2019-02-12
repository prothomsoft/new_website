import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/ania_i_krzysiek_zdjecia_slubne_w_domu_weselnym_u_niedzwiedzia_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0001.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0002.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0004.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0005.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0006.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0008.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0009.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0010.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0011.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0013.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0014.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0015.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0017.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0019.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0021.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0020.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0022.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0024.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0027.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0030.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0029.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0031.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0032.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0034.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0036.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0038.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0039.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0041.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0042.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0044.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0046.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0048.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0049.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0050.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0051.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0052.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0054.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0055.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0056.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0057.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0059.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0061.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0062.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0063.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0064.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0065.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0066.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0067.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0068.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0069.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0070.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0071.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0072.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0073.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0074.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0075.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0076.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0077.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0078.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0080.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0079.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0081.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0082.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0083.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0084.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0085.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0086.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0087.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0088.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0089.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0090.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0091.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0093.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0092.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0094.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0095.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0096.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0097.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0098.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0099.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0100.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0101.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0102.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0103.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0104.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0105.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0106.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0107.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0108.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0109.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0110.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0111.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0112.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0113.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0114.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2016/05/fotograf_na_wesele_krakow_0115.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Zdjęcia ślubne w Domu Weselnym U Niedźwiedzia"}
                    headDescription={"Mega weselna petarda ślubna Ani i Krzyśka. Piękni, młodzi, wspaniałe miejsca i przeszalona muzyczna banda... serdecznie zapraszam!"}
                    headKeywords={"fotograf na wesele kraków, zdjęcia ślubne w domu weselnym u niedźwiedzia, fotograf na wesele kraków"}
                    headUrl={"https://99foto.pl/ania-i-krzysiek-zdjecia-slubne-w-domu-weselnym-u-niedzwiedzia/"}
                    entryContentP1={
                        'Ślub Ani i Krzyśka odbył się w długi weekend majowy. Na przygotowania wybrałem się do domu rodzinnego Ani do Lachowic. Zaczęliśmy od zdjęć z makijażu, który z każdą minutą podkreślał niezwykłą urodę Ani. Chwilę później pojawił się Krzysiek i rozpoczęło się pierwsze w tym dniu błogosławieństwo. Zapowiedzi pogodowe na ten dzień okazały się zupełnie nietrafione i mieliśmy piękną pogodę od początku do końca. Drugie błogosławieństwo odbyło się już u Krzyśka w Krakowie. Na ceremonię w dobrym nastroju spacerkiem udaliśmy się do <a href="https://krakow.saletyni.pl/" target="_blank" rel="nofollow">Kościoła pw. Matki Bożej Saletyńskiej</a>. Obrączki, przez które trochę wcześniej mi się dostało do ołtarza dostarczyła mała gwiazda całej imprezy.'
                    }
                    entryContentP2={
                        'Po ciekawym kazaniu w cudownej atmosferze i jeszcze lepszych humorach, Ania i Krzysiek powiedzieli sobie TAK. Następnie zrobiliśmy zdjęcie grupowe i młodzi odebrali moc gorących życzeń od swoich gości. Zabawa weselna odbyła się w <a href="https://www.uniedzwiedzia.pl/" target="_blank" rel="nofollow">Domu Weselnym U Niedźwiedzia</a>. <a href="https://www.facebook.com/zespolselavi/" target="_blank" rel="nofollow">Zespół SeLaVi</a> zachwycał gości rozpiętością swojego repertuaru od &#8222;Nothing else matters&#8221; w mistrzowskim wykonaniu do &#8222;Ona widzi we mnie piniądz&#8221;, które słyszałem premierowo w tym sezonie. Ten wieczór stanowczo przejdzie do historii. Działo się mnóstwo i wszędzie. Niesamowity wieczór, niesamowici ludzie. Dziękuję, że mogłem być tego dnia z Wami! Po więcej zdjęć zapraszam do strefy klienta. Miłego oglądania.'
                    }
                    slug={"ania-i-krzysiek-zdjecia-slubne-w-domu-weselnym-u-niedzwiedzia"}
                    title={"ZDJĘCIA ŚLUBNE W DOMU WESELNYM U NIEDŹWIEDZIA - ANIA i KRZYSIEK"}
                    tags={"fotograf na wesele kraków, zdjęcia ślubne w domu weselnym u niedźwiedzia, fotograf na wesele kraków"}
                    date={"6 maja 2016"}
                    menuNames={"ANIA i KRZYSIEK"}
                    menuTitle={"ZDJĘCIA ŚLUBNE W DOMU WESELNYM U NIEDŹWIEDZIA"}
                    leadNames={"MONIKA i RAFAŁ"}
                    leadTitle={"ZDJĘCIA ŚLUBNE KRAKÓW, RESTAURACJA CHOCHOŁOWY DWÓR"}
                    leadUrl={"/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor"}
                    leadImage={"url(/static/monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_start.jpg)"}
                />
            </div>
        );
    }
}
