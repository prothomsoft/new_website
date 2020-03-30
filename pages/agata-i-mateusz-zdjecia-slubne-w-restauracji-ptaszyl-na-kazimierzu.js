import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/agata_i_mateusz_zdjecia_slubne_w_restauracji_ptaszyl_na_kazimierzu_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0001.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0003.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0004.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0005.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0006.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0010.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0020.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0021.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0022.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0024.jpg", height: 851 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0027.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0029.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0030.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0033.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0031.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0032.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0036.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0037.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0038.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0041.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0042.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0043.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0044.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0045.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0046.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0048.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0050.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0049.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0052.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0051.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0054.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0055.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0056.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0057.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0063.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0064.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0065.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0066.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0067.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0068.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0069.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0070.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0061.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0071.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0074.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0075.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0062.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0076.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0077.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0078.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0079.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0080.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0081.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0083.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0082.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0086.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0084.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0088.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0089.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0087.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0090.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2015/08/fotograf_na_slub_cywilny_kazimierz_krakow_0085.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Reportaż ślubny w Krakowie"}
                    headDescription={"Dzisiaj na blogu reportaż z Kazimierza i Restauracji Ptaszyl Agata i Mateusz zaprosili gości na melexy. Moc pozytywnych emocji. Serdecznie zapraszam."}
                    headKeywords={"zdjęcia ślubne w restauracji ptaszyl,fotograf na ślub cywilny kraków,zdjęcia ślubne kazimierz"}
                    headUrl={"https://99foto.pl/agata-i-mateusz-zdjecia-slubne-w-restauracji-ptaszyl-na-kazimierzu/"}
                    entryContentP1={
                        "W dzisiejszym ślubnym wpisie historia Agaty i Mateusza. Przygotowania zrobiliśmy w mieszkaniu Agaty i Mateusza. Agata stosując moją sprawdzoną metodę &#8211; jeżeli chcesz mieć coś zrobione dobrze zrób to sam &#8211; zrezygnowała z usług makijażystki i pomalowała się sama. Makijaż wyszedł profesjonalnie, a w połączeniu z pięknym uśmiechem i krótką sukienką Agata wyglądała świetnie &#8211; mina Mateusza, gdy to wszystko zobaczył bezcenna. Po osiągnięciu stanu gotowości udaliśmy się do Urzędu Stanu Cywilnego na Lubelskiej, gdzie Agata i Mateusz dopełnili formalności."
                    }
                    entryContentP2={
                        'Po wyjściu młodzi utonęli w fontannie pieniędzy rzucanych przez zaproszonych gości. Atrakcją był przejazd Melexami przez Rynek na Kazimierz do <a href="https://ptaszyl.pl/" target="_blank" rel="nofollow">Restauracji Ptaszyl</a>. Agata była bardzo szczęśliwa i genialnie pokazywała swoje emocje. W Ptaszylu klimat Kazimierza unosił się w powietrzu, a tańcom nie było końca. Pozdrawiam gości i zapraszam po więcej zdjęć do strefy klienta.'
                    }
                    slug={"agata-i-mateusz-zdjecia-slubne-w-restauracji-ptaszyl-na-kazimierzu"}
                    title={"ZDJĘCIA ŚLUBNE W RESTAURACJI PTASZYL NA KAZIMIERZU - AGATA i MATEUSZ"}
                    tags={"zdjęcia ślubne w restauracji ptaszyl,fotograf na ślub cywilny kraków,zdjęcia ślubne kazimierz"}
                    date={"6 sierpnia 2015"}
                    menuNames={"AGATA i MATEUSZ"}
                    menuTitle={"ZDJĘCIA ŚLUBNE W RESTAURACJI PTASZYL NA KAZIMIERZU"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"SESJA ZDJĘCIOWA DWÓR TOMASZOWICE, OPERA, KAZIMIERZ"}
                    leadUrl={"/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz"}
                    leadImage={"url(/static/sesja_zdjeciowa_dwor_tomaszowice_krakow_start.jpg)"}
                />
            </div>
        );
    }
}
