import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sala_weselna_biala_wilczyca_kocmyrzow.jpg"
            }
        ];

        let images = [

            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0001.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0002.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0003.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0004.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0005.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0006.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0007.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0009.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0010.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0011.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0012.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0014.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0015.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0017.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0018.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0019.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0020.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0021.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0022.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0023.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0024.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0026.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0029.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0031.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0032.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0033.jpg", height: 526 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0034.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0036.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0037.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0038.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0040.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0041.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0042.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0043.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0045.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0046.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0048.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0049.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0050.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0051.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0053.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0052.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0054.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0055.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0056.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/06/sala_weselna_biala_wilczyca_kocmyrzow_0057.jpg", height: 763 }

        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Wesele międzynarodowe Proszowice i polskie tradycje weselne"}
                    headDescription={"Sala weselna Biała Wilczyca Kocmyrzów. Międzynarodowe wesele połączone z polskimi tradycjami weselnymi. Monika i Martin, piękni, młodzi, szczęśliwi. Zapraszam."}
                    headKeywords={"Wesele międzynarodowe, polskie tradycje weselne, fotograf na wesele Proszowice"}
                    headUrl={"https://99foto.pl/wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne/"}
                    entryContentP1={
                        'Bardzo dobrze wspominam studenckie czasy i zupełnie niezwiązane z nauką wakacyjne wyjazdy zagraniczne. To właśnie tam wśród ciągnących się w nieskończoność ścieżek fasolowych znalazłem prawdziwą motywację do tego by nauczyć się języka angielskiego. Nigdy nie sądziłem, że umiejętność ta będzie tak ważna w mojej karierze fotografa ślubnego. Branża ślubna się zmienia, mamy coraz więcej wesel w okresie zimowym, rośnie świadomość klientów poszukujących dobrego fotografa ślubnego, który wykona ich wymarzone zdjęcia. Mamy też coraz więcej par młodych, które decydują się na zaproszenie gości innych narodowości do Polski i zorganizowanie międzynarodowego ślubu i wesela właśnie w naszym kraju. Międzynarodowa ekipa przyjaciół jest na pewno gwarancją udanej zabawy. Jako lokalni patrioci doskonale znamy polskie tradycje weselne. Każdy z nas wielokrotnie gościł na ślubach w bliższej lub dalszej rodzinie, weselach znajomych i kolegów z pracy. Nasi zagraniczni goście natomiast na naszych polskich weselach bawią się świetnie ponieważ doceniają wszystko to, co nam już zwyczajnie spowszedniało. Tak, bardzo często nie doceniamy pysznego jedzenia, dekoracji wykonanych z żywych kwiatów, muzyki, która odsłuchana w Spotifaju wielokrotnie napędza nas do tańca. Dla zagranicznych gości, którzy przyjeżdżają do naszego kraju na wesela, elementy te wywołują fascynacje tym co się dzieje, jak się dzieje i ile się dzieje. Ten krótki wstęp prowadzi nas prosto do Proszowic...'
                    }
                    entryContentP2={
                        'Właśnie tam w domu rodzinnym Moniki rozpoczęliśmy przygotowania do tego międzynarodowego ślubu i wesela. Makijaż, fryzjer, ubieranie sukni i oczekiwanie na przyjazd Pana Młodego, wszystko z uśmiechem na ustach  i tym czymś w oczach. Rodzinnie, wspaniale i na luzie, tylko tak można oddać atmosferę tego przedpołudnia w kilku słowach. Ceremonia zaślubin odbyła się w <a href="http://parafiaproszowice.com.pl/" target="_blank" rel="nofollow">Kościele pw. Wniebowzięcia NMP i św. Jana Chrzciciela</a> w Proszowicach. Piękny gotycki Kościół wypełniony po brzegi zaproszonymi na ceremonię gośćmi. Kazanie w języku polskim i przesłanie wygłoszone pod koniec ceremonii w języku angielskim. Uśmiechy i emocje w momencie wypowiadania słów przysięgi małżeńskiej. Gdy część oficjalna dobiegła końca Monika i Martin zaprosili gości do oddalonej tylko 15 kilometrów od Krakowa <a href="https://wedding.pl/sale-weselne/biala-wilczyca-1" target="_blank" rel="nofollow">Sali Weselnej Biała Wilczyca</a>. Wystrzały armatnie powitały przybyłych na impreze gości. W trakcie życzeń serwowano lemoniadę i zimne lody, było więc pysznie. Grupa LIMONCELLO dzielnie walczyła na parkiecie do upadłego. Odpowiednią muzę na najwyższym poziome serwował <a href="https://www.facebook.com/zespolfunkey/" target="_blank" rel="nofollow">Zespół FunKey</a>. Na zdjęcia grupowe wbiliśmy w złotej godzinie, czyli najlepszej możliwej porze dnia. Dużo się działo i potwierdzam, że międzynarodowe towarzystwo i wesele międzynarodowe jest gwarancją dobrej, co ja piszę najlepszej zabawy. Serdecznie zapraszam na zdjęcia. Więcej znajdziecie w strefie klienta wpisując hasło z mojej wizytówki. Życzy się miłego oglądania i lajkowania na <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow">Facebook</a> lub <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow">Insta</a>.'
                    }
                    slug={"wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne"}
                    title={"WESELE MIĘDZYNARODOWE PROSZOWICE i POLSKIE TRADYCJE WESELNE - MONIKA i MARTIN"}
                    tags={"Wesele międzynarodowe, polskie tradycje weselne, fotograf na wesele Proszowice"}
                    date={"6 czerwca 2019"}
                    menuNames={"MONIKA i MARTIN"}
                    menuTitle={"WESELE MIĘDZYNARODOWE PROSZOWICE i POLSKIE TRADYCJE WESELNE"}
                    leadNames={"MARLENA i MACIEK"}
                    leadTitle={"KAROLINKA BYSTRA PODHALAŃSKA, POGODOWI SZCZĘŚCIARZE"}
                    leadUrl={"/sala-weselna-karolinka-bystra-podhalanska"}
                    leadImage={"url(/static/restauracja_karolinka_bystra_podhalanska.jpg)"}
                />
            </div>
        );
    }
}