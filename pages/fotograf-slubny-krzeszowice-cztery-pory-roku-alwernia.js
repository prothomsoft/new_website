import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/fotograf_slubny_krzeszowice_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0002.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0001.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0003.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0004.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0005.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0006.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0007.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0008.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0009.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0010.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0011.jpg", height: 402 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0012.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0013.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0015.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0014.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0016.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0017.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0136.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0137.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0020.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0018.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0021.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0022.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0023.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0024.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0025.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0026.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0027.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0028.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0029.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0030.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0031.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0032.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0033.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0034.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0035.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0036.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0037.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0038.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0039.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0040.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0041.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0042.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0043.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0044.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0045.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0046.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0047.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0048.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0049.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0051.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0052.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0053.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0054.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0055.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0050.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0056.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0057.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0058.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0059.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0060.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0061.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0062.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0063.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0064.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0065.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0066.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0067.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0068.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0069.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0070.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0071.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0072.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0073.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0074.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0075.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0076.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0077.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0078.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0079.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0080.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0081.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0082.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0083.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0084.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0085.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0086.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0087.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0088.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0089.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0090.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0091.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0092.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0094.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0095.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0096.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0097.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0098.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0099.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0100.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0101.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0102.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0103.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0104.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0106.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0105.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0107.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0111.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0108.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0118.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0110.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0119.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0112.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0113.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0114.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0115.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0116.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0117.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0130.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0120.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0122.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0121.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0123.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0124.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0125.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0126.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0127.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0129.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0128.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0131.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0132.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0133.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0134.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/07/fotograf_slubny_krzeszowice_0135.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Fotograf ślubny Krzeszowice, Cztery Pory Roku Alwernia"}
                    headDescription={
                        "Reportaż ze ślubu Oli i Grzegorza w Restauracji Cztery Pory Roku w Alwerni. Uroczystość zaślubin w Kościele pw. św. Marcina z Tours w Krzeszowicach. Fotograf ślubny zaprasza do oglądania."
                    }
                    headKeywords={"fotograf ślubny Krzeszowice, cztery pory roku Alwernia"}
                    headUrl={"http://99foto.pl/fotograf-slubny-krzeszowice-cztery-pory-roku-alwernia/"}
                    entryContentP1={
                        'Nasza znajomość z Olą i Grześkiem rozpoczęła się wspólną wyprawą do Ogrodu Pełnego Lawendy w Ostrowie na ich sesję narzeczeńską. Podczas sesji towarzyszył nam piesek Sako. Czas płynie szybko, więc ten ważny dzień, ślubna sobota nadeszła jeszcze szybciej. Makijaż Oli wykonała Kasia w swoim salonie makijażu <a href="https://www.facebook.com/Kasia-Kardas-Make-Up-155460148296115" target="_blank">Katarzyna Kardas Make-Up</a> w Nawojowej Górze. Było wesoło i mega profesjonalnie. Następnie już razem z Darkiem z <a href="http://dbfilm.pl/" target="_blank">Filmy i Teledyski Ślubne Kraków DBFILM</a>, który filmowo dokumentował przygotowania, ceremonie i zabawę weselną udaliśmy się do Grzegorza. Niecałe piętnaście minut wystarczyło nam na wpięcie spinek do mankietów, poprawienie muszki, założenie marynarki i zawiązanie butów. W przygotowaniach Oli pomagała jej mama, pięknie dobrane detale w moim ulubionym błękitnym kolorze wyglądały niesamowicie.  Pełne emocji błogosławieństwo rozpoczęło się krótko po przyjeździe Grzegorza, który następnie porwał Olę do <a href="http://marcinkrzeszowice.pl/" target="_blank">Kościóła pw. św. Marcina z Tours</a> w Krzeszowicach. Dodam jeszcze, że za każdym razem, gdy ktoś z gości próbował otworzyć parasol, deszcz przestawał padać, więc na zdjęciach nie ma go wcale.'
                    }
                    entryContentP2={
                        'Piękny, jasny kościół, wspaniała ceremonia ślubna i wypowiedziane pewnie z uśmiechem na ustach sakramentalne TAK. Po wyjściu z kościoła zrobiliśmy zdjęcie grupowe, a Para młoda przyjęła gorące życzenia od swoich gości. Dalsza część imprezy czyli szalona zabawa weselna odbyła się <a href="http://alwernia-4poryroku.pl/" target="_blank">Restauracji Cztery Pory Roku w Alwernii</a>. Wspaniała sala weselna i super ogród z łatwością pomieścił wszystkich gości. Muzycznie było ambitnie bo grał jeden z moich ulubionych zespółów - <a href="http://www.somgorsy.pl/" target="_blank">Zespół muzyczny Somgorsy</a>. Gabrysia jak zwykle nie tylko śpiewała świetnie, ale równie dobrze prowadziła zabawy weselne. Atrakcją była fotobudka, pociąg, tort weselny i wiadomo o północy oczepiny. Świetnie zorganizowana impreza, wspaniali otwarci ludzie, których fotografowanie było czystą przyjemnością. Olu i Grześku dziękuję za zaufanie i zapraszam na zdjęcia. Miłego oglądania.'
                    }
                    slug={"fotograf-slubny-krzeszowice-cztery-pory-roku-alwernia"}
                    title={"FOTOGRAF ŚLUBNY KRZESZOWICE, CZTERY PORY ROKU ALWERNIA - ALEKSANDRA i GRZEGORZ"}
                    tags={"fotograf ślubny Krzeszowice, cztery pory roku Alwernia"}
                    date={"14 lipca 2018"}
                    menuNames={"ALEKSANDRA i GRZEGORZ"}
                    menuTitle={"FOTOGRAF ŚLUBNY KRZESZOWICE, CZTERY PORY ROKU ALWERNIA"}
                    leadNames={"NATALIA i KAMIL"}
                    leadTitle={"SALA WESELNA WILLA ORCHIDEA WAKSMUND - ŚLUB NA PODHALU"}
                    leadUrl={"/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach"}
                    leadImage={"url(/static/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach-start.jpg)"}
                />
            </div>
        );
    }
}
