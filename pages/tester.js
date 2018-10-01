import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/helada_oswiecim.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0001.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0002.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0003.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0004.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0005.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0006.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0007.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0008.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0009.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0010.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0011.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0012.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0013.jpg", height: 806 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0014.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0015.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0016.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0017.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0018.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0019.jpg", height: 402 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0020.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0021.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0022.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0023.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0024.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0025.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0026.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0027.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0028.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0029.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0030.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0031.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0032.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0033.jpg", height: 852 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0034.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0035.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0036.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0042.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0037.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0038.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0039.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0040.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0043.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0041.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0044.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0045.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0046.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0047.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0048.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0049.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0050.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0051.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0052.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0053.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0054.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0055.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0056.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0057.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0058.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0059.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0060.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0061.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0062.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0063.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0064.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0065.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0066.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0067.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0068.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0069.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0070.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0071.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0072.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0073.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0074.jpg", height: 402 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0075.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0076.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0077.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0078.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0079.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0080.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0081.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0082.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0083.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0084.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0085.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0086.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0087.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0088.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0089.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0090.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0091.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0092.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0093.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0094.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0095.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0096.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0098.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0099.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0100.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0101.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0102.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0103.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0104.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0105.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0106.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0107.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0108.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0109.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0110.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0111.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0112.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0113.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0114.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0115.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0116.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0117.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0120.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0118.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0119.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0121.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0122.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0123.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0124.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0125.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0126.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0127.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0128.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0129.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0130.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0131.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0132.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0133.jpg", height: 382 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0134.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0135.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0136.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0149.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0137.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0138.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0139.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0140.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0141.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0142.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0147.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0143.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0144.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0145.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0146.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0148.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0150.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/helada_sala_bankietowa_oswiecim_0151.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Helada sala weselna, Fotograf ślubny Oświęcim"}
                    headDescription={"Helada sala weselna Oświęcim. Dużo emocji i świetnie zorganizowany ślub Magdaleny i Damiana. Zapraszam do oglądania."}
                    headKeywords={"Helada sala weselna, fotograf ślubny Oświęcim"}
                    headUrl={"http://99foto.pl/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa/"}
                    entryContentP1={"123"}
                    entryContentP2={"123"}
                    slug={"ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa"}
                    title={"SALA WESELNA HELADA, FOTOGRAF ŚLUBNY OŚWIĘCIM - MAGDALENA i DAMIAN"}
                    tags={"Helada sala weselna, Fotograf ślubny Oświęcim"}
                    date={"30 września 2018"}
                    menuNames={"MAGDALENA i DAMIAN"}
                    menuTitle={"SALA WESELNA HELADA, FOTOGRAF ŚLUBNY OŚWIĘCIM"}
                    leadNames={"MARTA i MARCIN"}
                    leadTitle={"WESELE POD KRAKOWEM, FIRST LOOK NA DACHU WIEŻOWCA"}
                    leadUrl={"/tiffany-wola-filipowska-first-look-na-dachu-wiezowca"}
                    leadImage={"url(/static/restauracja_tiffany_wola_filpowska.jpg)"}
                />
            </div>
        );
    }
}
