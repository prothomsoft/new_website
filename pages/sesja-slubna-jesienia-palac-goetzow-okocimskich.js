import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sesja_slubna_jesienia.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0027.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0010.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0014.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0017.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0021.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0023.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0015.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0005.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0032.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0034.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0037.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0036.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0042.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0026.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sesja ślubna jesienią, Pałac Goetzów Okocimskich"}
                    headDescription={"Sesję ślubną Izy i Arka zaplanowaliśmy w Gabinecie Kurii Metropolitarnej w Krakowie, gdzie kilka miesięcy wcześniej urzędował Janusz Gajos. Zapraszam na bloga."}
                    headKeywords={"pałac goetzów okocimskich, plener ślubny pomysły, sesja ślubna kraków gdzie, sesja ślubna jesienią"}
                    headUrl={"https://99foto.pl/sesja-slubna-jesienia-palac-goetzow-okocimskich/"}
                    entryContentP1={
                        'Ostatnio głośno o filmie "KLER" Wojciecha Smarzowskiego. Jeżeli widzieliście film lub jego zapowiedź to pewnie pamiętacie świetną rolę Janusza Gajosa, który w roli biskupa urzęduje w gabinecie Kurii Metropolitarnej w Krakowie. Żeby nie było nudno plener ślubny Izy i Arka rozpoczęliśmy dokładnie w tym samym miejscu, pięknej pałacowej bibliotece Pałacu Goetzów w Brzesku. <a href="https://www.palacgoetz.pl/" target="_blank" rel="nofollow">Pałac Goetzów Okocimskich w Brzesku</a> to jeden z cenniejszych zabytków Małopolski. Obiekt wybudowany przez Jana Albina Goetza od 2008 roku stał się własnością prywatną i jak się można domyślić wygenerowało to sporo pozytywnych zmian.  Miejsce to na co dzień zamknięte dla zwiedzających, okazjonalnie udostępniane na potrzeby profesjonalnych sesji zdjęciowych lub przyjęć ślubnych jest obiektem niezwykłym, który przenosi odwiedzających w świat pełen piękna i wspaniałej architektury charakteryzującej się dbałością o najmniejszy detal.'
                    }
                    entryContentP2={
                        'Wynajmując obiekt <a href="https://www.palacgoetz.pl/" target="_blank" rel="nofollow">Pałacu Goetzów Okocimskich w Brzesku</a> na sesję ślubną jesienią mamy do dyspozycji wszystkie pomieszczenia czyli wspomnianą już pałacową bibliotekę, kaplicę, ogród zimowy, palmiarnie, pokoje gościnne oraz oczywiście epickie schody. Należy również wspomnieć o wspaniale zagospodarowanym parku w stylu angielskim z przepięknym starym drzewostanem, który oświetlony promieniami słońca staje się bajkową scenerią dla postaci w strojach ślubnych. Obecnie w Pałacu mieści się luksusowy pięciogwiazdkowy hotel i SPA, w którym skorzystać można nie tylko z typowych zabiegów odnowy biologicznej ale również zaserwować sobie jedyną w swoim rodzaju kąpiel piwną. Jeżeli tylko planujecie sesję ślubną jesienią, chcecie zrobić ją blisko Krakowa w pałacowych klimatach i budżet poweselny się zgadza to lepszego miejsca nie znajdziecie. Serdecznie zapraszam na zdjęcia. Miłego oglądania.'
                    }
                    slug={"sesja-slubna-jesienia-palac-goetzow-okocimskich"}
                    title={"SESJA ŚLUBNA JESIENIĄ - PAŁAC GOETZÓW OKOCIMSKICH - IZABELA i ARKADIUSZ"}
                    tags={"pałac goetzów okocimskich, plener ślubny pomysły, sesja ślubna kraków gdzie, sesja ślubna jesienią"}
                    date={"10 października 2018"}
                    menuNames={"IZABELA i ARKADIUSZ"}
                    menuTitle={"SESJA ŚLUBNA JESIENIĄ - PAŁAC GOETZÓW OKOCIMSKICH"}
                    leadNames={"DAJANA i SYLWESTER"}
                    leadTitle={"OGRÓD BOTANICZNY W KRAKOWIE - ŚLUBNA SESJA ZDJĘCIOWA - DAJANA i SYLWESTER"}
                    leadUrl={"/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa"}
                    leadImage={"url(/static/ogrod_botaniczny.jpg)"}
                />
            </div>
        );
    }
}
