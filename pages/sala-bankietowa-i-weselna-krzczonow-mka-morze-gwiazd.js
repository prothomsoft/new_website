import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sala_bankietowa_i_weselna_krzczonow_mka_morze_gwiazd_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0003.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0006.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0034.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0012.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0014.jpg", height: 806 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0018.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0036.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0035.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0037.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0029.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0032.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0038.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0041.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0042.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0043.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0046.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0048.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0049.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0050.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0051.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0052.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0054.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0055.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0056.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0057.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0062.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0061.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0063.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0064.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0065.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0066.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0067.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0068.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0069.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0070.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0072.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0073.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0074.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0077.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0076.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0075.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0078.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0079.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0080.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0081.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0084.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0083.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0085.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0086.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0087.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0088.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0089.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0090.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0091.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0094.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0092.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0093.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0095.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0096.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0097.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0098.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0099.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0100.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0101.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0102.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0104.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0103.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0105.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0106.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0107.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0108.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0109.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0111.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0110.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0112.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0113.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0114.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0115.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0117.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0118.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0119.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0120.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0121.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0122.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0123.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0124.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0125.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0126.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0127.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0128.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0129.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0130.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0131.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0133.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0134.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0135.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0136.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0137.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0138.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0139.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0140.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0141.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0144.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0143.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0147.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0145.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0149.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0142.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/sesja_weselna_bankietowa_krzczonow_0150.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sala bankietowa Krzczonów, sala weselna Pcim"}
                    headDescription={"Sala bankietowa w Krzczonowie, czyli niebo pełne gwiazd. Reportaż ślubny Magdy i Grześka. Serdecznie zapraszam."}
                    headKeywords={"fotograf ślubny myślenice,sala weselna krzczonów,sala bankietowa pcim"}
                    headUrl={"https://99foto.pl/sala-bankietowa-i-weselna-krzczonow-mka-morze-gwiazd/"}
                    entryContentP1={
                        'Tym razem zapraszam do rozsławionego przez brytyjskiego komika Johna Cleese podkrakowskiego Pcimia, gdzie od samego rana do wydarzeń jednego z najważniejszych dni w swoim życiu przygotowywała się Magda. Zaczęliśmy od makijażu w domu Panny Młodej, gdzie <a href="https://www.facebook.com/catchthecolours/" target="_blank" rel="nofollow">Made by me &#8211; Ewa Kobiałka</a> podkreśliła urodę Magdy.  Dużo uśmiechów i świetna atmosfera towarzyszyła nam również podczas ubierania sukni ślubnej, butów, podwiązki i biżuterii. Z pomocą Ani i Agnieszki cała operacja odbyła się bardzo sprawnie. Krótkie błogosławieństwo u Grześka, dłuższe u Magdy i chwilę później wszyscy znaleźliśmy się w <a href="https://www.parafiapcim.pl" target="_blank" rel="nofollow">Kościele św. Mikołaja w Pcimiu</a>. Piękna ceremonia ślubna podczas której Magda i Grzegorz powiedzieli TAK.'
                    }
                    entryContentP2={
                        'Kilka kropel deszczu przeszkodziło nam w życzeniach pod kościołem, więc ogrom uśmiechów, żartów, uścisków spadł na młodych na sali weselnej. Rodzice przywitali młodych chlebem i solą, Grzegorz przeniósł Magde przez próg i zabawa w <a href="https://www.facebook.com/mka.salabankietowa/" target="_blank" rel="nofollow">Domu Weselnym MKA Sala Bankietowa w Krzczonowie</a> uznaliśmy za otwartą. Gorącą atmosferę na parkiecie zapewniał zespół <a href="https://" target="_blank" rel="nofollow">Ja Majka</a>. Dzieciaki świetnie bawiły się pod opieką przemiłej animatorki, natomiast goście weselni zachwycali się nad kolejnymi atrakcjami wieczoru, których nie brakowało. Bardzo dziękuję za ten wyjątkowy dzień, ciepłe przyjęcie i wspaniałą atmosferę. Miłego oglądania, a po więcej zdjęć zapraszam gości weselnych do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"sala-bankietowa-i-weselna-krzczonow-mka-morze-gwiazd"}
                    title={"SALA WESELNA KRZCZONÓW MKA - MORZE GWIAZD - MAGDA i GRZEGORZ"}
                    tags={"fotograf ślubny myślenice,sala weselna krzczonów,sala bankietowa pcim"}
                    date={"16 czerwca 2017"}
                    menuNames={"MAGDA i GRZEGORZ"}
                    menuTitle={"SALA WESELNA KRZCZONÓW MKA - MORZE GWIAZD"}
                    leadNames={"NATALIA i TOMASZ"}
                    leadTitle={"SESJA ZDJĘCIOWA KOPIEC KRAKA, PRZEGORZAŁY, KRYSPINÓW"}
                    leadUrl={"/sesja-zdjeciowa-kopiec-kraka-przegorzaly-kryspinow"}
                    leadImage={"url(/static/sesja_zdjeciowa_kopiec_kraka_przegorzaly_kryspinow_start.jpg)"}
                />
            </div>
        );
    }
}
