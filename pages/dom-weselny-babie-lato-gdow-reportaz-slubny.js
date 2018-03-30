import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/dom_weselny_babie_lato_gdow_reportaz_slubny_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0131.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0156.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0002.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0005.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0008.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0007.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0009.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0003.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0006.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0010.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0012.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0013.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0004.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0011.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0014.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0020.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0021.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0022.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0023.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0024.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0026.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0025.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0027.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0030.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0028.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0031.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0029.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0032.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0033.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0159.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0035.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0036.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0037.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0038.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0039.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0040.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0041.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0042.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0043.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0044.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0045.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0046.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0047.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0048.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0049.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0050.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0051.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0052.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0053.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0054.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0055.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0065.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0071.jpg", height: 757 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0056.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0057.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0059.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0058.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0060.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0061.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0062.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0063.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0064.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0066.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0067.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0068.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0069.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0070.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0072.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0073.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0015.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0074.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0075.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0076.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0079.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0077.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0078.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0080.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0081.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0082.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0083.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0084.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0085.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0086.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0087.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0088.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0089.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0090.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0091.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0092.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0093.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0094.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0095.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0096.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0097.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0098.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0099.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0100.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0101.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0102.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0103.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0104.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0105.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0106.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0107.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0108.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0109.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0110.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0150.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0151.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0152.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0153.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0154.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/dom_weselny_babie_lato_gdow_0155.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0120.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0121.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0122.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0123.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0124.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0125.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0126.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0127.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0128.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0129.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0130.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0132.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0134.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0135.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0136.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0137.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0138.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0140.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0139.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0141.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0143.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0142.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0144.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0145.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/babie_lato_gdow_0133.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Dom Weselny Babie Lato Gdów"}
                    headDescription={"Bryan Adams i All For Love, taką dedykacją na Facebook w piątkowy wieczór Tomasz zbudował klimat sobotniego ślubu. Co było dalej sprawdźcie na moim blogu."}
                    headKeywords={"babie lato gdów,fotograf piaski nowe kraków"}
                    headUrl={"http://99foto.pl/dom-weselny-babie-lato-gdow-reportaz-slubny/"}
                    entryContentP1={
                        'Bryan Adams i All For Love, taką dedykacją na Facebook w piątkowy wieczór Tomasz zbudował klimat sobotniego ślubu.  Co było dalej? Wymarzona pogoda, trochę słońca i orzeźwiające podmuchy majowego wiatru. Tym razem reportaż ślubny rozpoczęliśmy w Krakowie, a dokładniej na Woli Duchackiej w <a href="http://annaptak.com.pl" target="_blank">Salonie Fryzjerskim Anny Ptak</a>. Od godziny 10 rano trwały tam przygotowania, podczas których panie fryzjerka i wizażystka pracowały nad perfekcyjnym makijażem i pięknym upięciem włosów Natalii. Świetnie ułożony plan dnia, pozwolił mi poznać i dłuższą chwilę porozmawiać z rodzicami Natalii, których serdecznie pozdrawiam. Kilka minut po dwunastej dołączyła do nas druhna Ewa, która razem z mamą Natalii pomogła jej ubrać suknię ślubną, buty, podwiązkę i biżuterię. Kilka zdjęć u Tomka, który mieszkał tuż za rogiem, a dalej już tylko emocje i łzy wzruszenia podczas wspólnego błogosławieństwa rodziców.'
                    }
                    entryContentP2={
                        'Po błogosławieństwie wolnym krokiem, wszyscy udaliśmy się do <a href="http://parafiapiaskinowe.pl" target="_blank">Kościoła Matki Bożej Różańcowej w Krakowie</a>. To już drugi raz (pierwszy to <a href="http://99foto.pl/gosia-i-kuba-zdjecia-slubne-w-restauracji-savana-lezkowice/" target="_blank">ślub Gosi i Kuby</a>), kiedy młodzi w zakrystii czuli się niemalże tak swobodnie jak w domu. Ceremonia zaślubin była celebrowana przez kilku ksieży. Nie zabrakło pięknego kazania, oprawy muzycznej w wykonaniu scholi złożonej ze znajomych z duszpasterstwa i najważniejszego momentu, sakramentalnego TAK, które połączyło młodych na zawsze. Podczas życzeń dało się słyszeć dowcipne przemowy, których następstwem były salwy śmiechu. Natalia i Tomek zaprosili swoich gości do <a href="http://babielato-gdow.pl" target="_blank">Domu Weselnego Babie Lato w Gdowie</a>. Tradycyjnie rodzice przywitali młodych chlebem i solą, kieliszki rozbiły się gładko i po zdjęciu grupowym rozpoczął się uroczysty obiad. Na sali weselnej gości przywitał <a href="http://www.vocal.com.pl" target="_blank">Zespół muzyczny VOCAL z Żywca</a>. Pierwszy taniec i bardzo miła część wieczoru, niespodzianka skrywana przed młodymi do końca, pokaz multimedialny i występ w dopieszczonej co do szczegółu choreografii. Na parkiecie działo się bardzo dużo i było widać, że goście weselni bawili się doskonale. Na pewno też można pozazdrościć Natalii i Tomkowi wspaniałych rodziców i bardzo oddanej grupy najbliższych przyjaciół. Bardzo dziękuję za ten wyjątkowy dzień, ciepłe przyjęcie i wspaniałą atmosferę. Miłego oglądania, a po więcej zdjęć zapraszam gości weselnych do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"dom-weselny-babie-lato-gdow-reportaz-slubny"}
                    title={"DOM WESELNY BABIE LATO GDÓW - REPORTAŻ ŚLUBNY - NATALIA i TOMASZ"}
                    tags={"babie lato gdów,fotograf piaski nowe kraków"}
                    date={"1 czerwca 2017"}
                    menuNames={"NATALIA i TOMASZ"}
                    menuTitle={"DOM WESELNY BABIE LATO GDÓW - REPORTAŻ ŚLUBNY"}
                    leadNames={"OLA i PRZEMEK"}
                    leadTitle={"WESELE TARNÓW, DWÓR BISTUSZOWA i STAROPOLSKI KLIMAT ŚLUBNY"}
                    leadUrl={"/wesele-tarnow-dwor-bistuszowa-i-staropolski-klimat-slubny"}
                    leadImage={"url(/static/wesele-tarnow_dwor_bistuszowa_i_staropolski_klimat_slubny_start.jpg)"}
                />
            </div>
        );
    }
}
