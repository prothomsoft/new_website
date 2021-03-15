import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sala_weselna_babie_lato_gdow_1.jpg"
            }
        ];

        let images = [

            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0002.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0003.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0004.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0006.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0007.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0008.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0011.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0012.jpg", height: 567 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0015.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0014.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0016.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0017.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0018.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0019.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0020.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0023.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0022.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0024.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0028.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0030.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0031.jpg", height: 806 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0032.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0033.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0034.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0035.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0039.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0040.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0041.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0042.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0044.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0047.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0049.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0050.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0053.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0054.jpg", height: 806 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0056.jpg", height: 851 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0058.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0057.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0067.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0059.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0062.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0061.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0069.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0071.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0073.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0074.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0078.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0080.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0081.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0085.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0086.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0087.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0088.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0089.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0093.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0094.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0095.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0096.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0097.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0090.jpg", height: 566 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0099.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0100.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0091.jpg", height: 566 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0102.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0103.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0105.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0106.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0108.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0109.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0110.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0111.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0112.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0114.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0116.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0118.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0117.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0119.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0121.jpg", height: 761 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0120.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0123.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0124.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0125.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0122.jpg", height: 763 }

        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Reportaż ślubny sala weselna Babie Lato Gdów"}
                    headDescription={"Sala weselna Babie Lato Gdów. Czerwcowa pogoda, cieplutko i wesele w gronie rodziny i bliskich przyjaciół. Paulina i Kamil, piękni, młodzi, szczęśliwi. Zapraszam."}
                    headKeywords={"Reportaż ślubny sala weselna Babie Lato Gdów, dobry fotograf ślubny Biertowice"}
                    headUrl={"https://99foto.pl/reportaz-slubny-sala-weselna-babie-lato-gdow-cieplutko/"}
                    entryContentP1={
                        'Długa, długa historia, która swój początek ma blisko trzy lata temu we wrześniu 2016 roku na <a href="https://99foto.pl/julita-i-pawel-reportaz-slubny-kosciol-na-skalce-krakow/">ślubie Julity i Pawła</a>. Oglądając dokładnie wpis na moim blogu wśród zacnego grona królująch na parkiecie przyjaciół doszukacie się Pauliny. Ponieważ nic, a nic się nie zmieniła przez ten czas nie będzie to trudne zadanie. W ubiegłym roku spotkaliśmy się na sesji narzeczeńskiej i spotkamy się jeszcze co najmniej raz na sesji ślubnej w plenerze. Może nie będę pisał, że zostali oni dla siebie stworzeni, ale uwierzcie mi na słowo, że Paulina i Kamil wybitnie do siebie pasują i zupełnie nie dziwi mnie fakt, że zostali parą. Czerwiec i tropikalna pogoda, wachlarze tnące powietrze, wiatraki rozręcone na maksa, takie lato mamy w tym roku. Ale po kolei. Przygotowania zaczęliśmy w salonie <a href="https://www.facebook.com/kaniafryzjerstwo" target="_blank" rel="nofollow">Przemysław Kania Fryzjerstwo Profesjonalne</a>, gdzie Przemek (mistrz Europy we fryzjerstwie OMC Hairworld odbywających się w Paryżu) osobiście zadbał o idealną fryzurę Pauliny. W tym samym miejscu na dosłownie kwadracie Paulina dostała też swoją nową twarz. W trakcie dołączył do nas <a href="http://effectstudio.eu" target="_blank" rel="nofollow">Łukasz z EffectStudio</a>, który na luzie w klapeczkach zwijał kolejne kadry tworząc niezapomniany film ślubny. Przecisnęliśmy się ozdobioną białymi wstążkami aleją do domu Pauliny by chwilę później Zakopianką pomknąć prosto na przygotowania Kamila.'
                    }
                    entryContentP2={
                        'Spinki, mucha, marynarka ubrane bardzo sprawnie z fachową pomocą drużby. Następnie wróciliśmy na błogosławieństwo, po którym wszyscy udali się do <a href="http://www.izdebnik.diecezja.pl" target="_blank" rel="nofollow">Kościoła pod wezwaniem św. Małgorzaty dziewicy i męczennicy w Izdebniku</a>. Po wyjściu z Kościoła wykonaliśmy zdjęcie grupowe i Para Młoda zaprosiła gości weselnych do <a href="http://babielato-gdow.pl" target="_blank" rel="nofollow">Domu Weselnego Babie Lato w Gdowie</a>. Zespół serwował szlagiery weselnych parkietów i świetnie prowadził zabawy weselne. Gościem specjalnym stał się zaprojektowany przez Kamila robot, który co prawda sam butelki napełnić nie umiał, ale kolejki serwował koncertowo. Bardzo dziękuję za ten wyjątkowy dzień, ciepłe przyjęcie i wspaniałą atmosferę. Życzę miłego oglądania i lajkowania na <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow noopener noreferrer">Facebook</a> lub <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow noopener noreferrer">Insta</a>. Po więcej zdjęć zapraszam do strefy klienta. Można je obejrzeć wpisując hasło z mojej wizytówki.'
                    }
                    slug={"reportaz-slubny-sala-weselna-babie-lato-gdow-cieplutko"}
                    title={"REPORTAŻ ŚLUBNY SALA WESELNA BABIE LATO GDÓW, CIEPLUTKO - PAULINA i KAMIL"}
                    tags={"Reportaż ślubny sala weselna Babie Lato Gdów, dobry fotograf ślubny Biertowice"}
                    date={"20 czerwca 2019"}
                    menuNames={"PAULINA i KAMIL"}
                    menuTitle={"REPORTAŻ ŚLUBNY SALA WESELNA BABIE LATO GDÓW, CIEPLUTKO"}
                    leadNames={"MONIKA i MARTIN"}
                    leadTitle={"WESELE MIĘDZYNARODOWE PROSZOWICE i POLSKIE TRADYCJE WESELNE"}
                    leadUrl={"/wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne"}
                    leadImage={"url(/static/sala_weselna_biala_wilczyca_kocmyrzow.jpg)"}
                />
            </div>
        );
    }
}