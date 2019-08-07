import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/bazylika_bozego_ciala_krakow_fotoreportaz_slubny.jpg"
            }
        ];

        let images = [

            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/08/fotograf_na_wesele_krakow_0001.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/08/fotograf_na_wesele_krakow_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/08/fotograf_na_wesele_krakow_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/08/fotograf_na_wesele_krakow_0004.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/08/fotograf_na_wesele_krakow_0005.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/08/fotograf_na_wesele_krakow_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/08/fotograf_na_wesele_krakow_0007.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/08/fotograf_na_wesele_krakow_0008.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/08/fotograf_na_wesele_krakow_0009.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/08/fotograf_na_wesele_krakow_0010.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/08/fotograf_na_wesele_krakow_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/08/fotograf_na_wesele_krakow_0012.jpg", height: 763 }

        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Bazylika Bożego Ciała Kraków, Fotoreportaż Ślubny"}
                    headDescription={"Bazylika Bożego Ciała na Krakowskim Kazimierzu - miejsce na ślub wymarzone. Sierpniowa pogoda i ślub w gronie rodziny i bliskich przyjaciół. Zapraszam."}
                    headKeywords={"kraków kościoły na ślub, kościół kraków kazimierz, bazylika bożego ciała"}
                    headUrl={"https://99foto.pl/bazylika-bozego-ciala-krakow-fotoreportaz-slubny/"}
                    entryContentP1={
                        'Sierpień to gorący miesiąc ślubny z er w nazwie. Myśle więc, że dobrym pomysłem będzie rozpoczęcie go od pokazania na blogu fotoreportażu ślubnego, który w całości odbył się w naszym pięknym mieście Krakowie. Chciałem swoją gawęde rozpocząć od przedstawienia trzech wspaniałych krakowskich kościołów - <a href="http://mariacki.com/" target="_blank" rel="nofollow">Kościoła Mariackiego</a>, <a href="http://kolegiata-anna.pl/" target="_blank" rel="nofollow">Kościoła św. Anny</a> oraz <a href="http://apostolowie.pl/" target="_blank" rel="nofollow">Kościoła św. Piotra i Pawła</a>. Natomiast przedmiotem mojej troski szczegółnej jest przede wszystkim <a href="http://www.bozecialo.net/index.php/bazylika" target="_blank" rel="nofollow">Bazylika Bożego Ciała w Krakowie</a>, w której odbyła się ceremonia zaślubin Anny i Piotra. Bazylika, którą można zwiedzać i podziwiać godzinami, chłonąc historię tego miejsca, poznając i odkrywając tam wiele niezwykłych artefaktów. Poszukując kościoła na ślub w Krakowie na Kazimierzu koniecznie rozważcie atrakcje turystyczną małopolski <a href="http://www.bozecialo.net/index.php/bazylika" target="_blank" rel="nofollow">Bazylikę Bożego Ciała w Krakowie</a>. Słoneczny dzień przerywany intensywnymi i trwającymi tylko kilka minut opadami deszczu rozpoczęliśmy na ulicy Cystersów w <a href="http://klaru.pl/" target="_blank" rel="nofollow">Klaru Lashes Makeup Nails</a>. Makijaż wykonała Klaudia Rusek w swoim przestronnym studio. Delikatny makijaż tylko podkreślił niezwykłą urodę Ani.'
                    }
                    entryContentP2={
                        'Następnie Ania ubrała suknię ślubną, biżuterię i podwiązkę. Wszystko to miało miejsce w pachnącym nowością mieszkaniu na osiedlu Avia w Krakowie. Chwilkę później odbyło się błogosławieństwo, pełne emocji i nie pozbawione luzu. Tuż za ścianą deszczu, który w momencie przejazdu nie oszczędzał ozdób wpiętych do czarnego BMW Pary Młodej, czekał na Anie i Piotra wspomniany już w mojej gawędzie wspaniały kościół. Piękna ceremonia, wspaniałe kazanie, przysięga wypowiedziana z pamięci (brawa za odwagę) i sakramentalne TAK. Zdjęcie grupowe i życzenia pod kościołem fotografowane nie tylko przeze mnie, ale też zaciekawionych polskim ślubem obcokrajowców odwiedzających Kraków. Impreza sterowana przez DJ-ów, wystartowała. Zaistniała korelacja pomiędzy gośćmi na parkiecie i ciasteczkami na stole ze słodkościami. Goście pojawiali się, a ciasteczka znikały równie szybko. Wszystko to w idealnie przystosowanej do imprez weselnych sali bankietowej <a href="https://www.junior.krakow.pl/wesela-i-imprezy-okolicznosciowe/" target="_blank" rel="nofollow">Hotelu Junior</a>. Ten ważny dzień i moc jego atrakcji zarejestrowały nie tylko moje dwa aparaty. Krzyś z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">CAMDESIGN - Nowoczesny film ślubny</a> rejestrował skrzętnie każdą minutkę, stając na głowie by pokonać mnie w kategoriach niezwykłości kadru i odnajdywania najlepszego światła - kiedyś zobaczę czy zwyciężył. Aniu i Piotrze, dziękuję Wam za zaufanie przy wyborze fotografa ślubnego. Wszystkich gości weselnych zapraszam do oglądania najciekawszych moim zdaniem zdjęć na moim blogu. Zdjęcia grupowe i dużo więcej znajdziecie natomiast w strefie klienta wpisując hasło z mojej wizytówki. Gorąco zachęcam do lajkowania i udostępniania wpisu na <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow noopener noreferrer">Facebook</a> lub <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow noopener noreferrer">Insta</a> i życzę miłego oglądania.'
                    }
                    slug={"bazylika-bozego-ciala-krakow-fotoreportaz-slubny"}
                    title={"BAZYLIKA BOŻEGO CIAŁA KRAKÓW, FOTOREPORTAŻ ŚLUBNY - ANNA i PIOTR"}
                    tags={"kraków kościoły na ślub, kościół kraków kazimierz, bazylika bożego ciała"}
                    date={"8 sierpnia 2019"}
                    menuNames={"ANNA i PIOTR"}
                    menuTitle={"BAZYLIKA BOŻEGO CIAŁA KRAKÓW, FOTOREPORTAŻ ŚLUBNY"}
                    leadNames={"MARLENA i ADAM"}
                    leadTitle={"MIEJSKA SESJA NARZECZEŃSKA, PIĘKNI, MŁODZI i ZAKOCHANI"}
                    leadUrl={"/miejska-sesja-narzeczenska-piekni-mlodzi-i-zakochani"}
                    leadImage={"url(/static/sesja_narzeczenska_krakow_kazimierz.jpg)"}
                />
            </div>
        );
    }
}