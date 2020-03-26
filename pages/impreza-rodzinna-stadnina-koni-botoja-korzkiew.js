import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/impreza-rodzinna-stadnina-koni-botoja-korzkiew-start.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0001.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0002.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0003.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0004.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0005.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0006.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0007.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0008.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0009.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0010.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0011.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0012.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0013.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0014.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0015.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0016.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0017.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0018.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0019.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0020.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0021.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0022.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0023.jpg", height: 806 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0024.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0025.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0026.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0027.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0028.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0029.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0030.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0031.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0032.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0033.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0034.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0035.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0036.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0037.jpg", height: 806 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0038.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0039.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0040.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0041.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0042.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0043.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0044.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0045.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0046.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0047.jpg", height: 805 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0048.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0049.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0050.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0051.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0052.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0053.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0054.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0055.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0056.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0057.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0058.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0059.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0060.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0061.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0062.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0063.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0064.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0065.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0066.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0067.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0068.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0069.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0070.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0071.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0072.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0073.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0074.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0075.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0076.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0077.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0078.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0079.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0080.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0081.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0082.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0083.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0084.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0085.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0086.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0087.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0088.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0089.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0090.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0091.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0092.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0093.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0094.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0095.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0096.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0097.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0098.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0099.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0100.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0101.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0102.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0103.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0104.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0105.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0106.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0107.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0108.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0109.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0110.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0111.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0112.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0113.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0114.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0115.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0116.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0117.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0118.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0119.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0120.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0121.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2018/06/impreza_rodzinna_stadnina_koni_botoja_krakow_0122.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Impreza rodzinna w Stadninie Koni Botoja Korzkiew"}
                    headDescription={
                        "Impreza firmowa w Stadninie Koni Botoja w Korzkwi. Świetne miejsce na rodzinne spotkanie, grilowanie i jazdę konną. Serdecznie zapraszam na reportaż z ich najważniejszego dnia. Miłego oglądania."
                    }
                    headKeywords={"Impreza rodzinna w Stadninie Koni Botoja Korzkiew"}
                    headUrl={"http://wp.99foto.pl/impreza-rodzinna-stadnina-koni-botoja-korzkiew/"}
                    entryContentP1={
                        "Słoneczny piątek, w który miałem przyjemność fotografować imprezę rodzinną w Stadninie Koni Botoja w Korzkwi. Dużo atrakcji dla całej rodziny, animatorzy z milionem przeróżnych pomysłów, jazda konna, świeże powietrze zdala od Krakowa, grilowane pyszności i mnóstwo uśmiechów przeszczęśliwych dzieciaków. Takie rzeczy tylko w Smartach. Miłego oglądania."
                    }
                    entryContentP2={""}
                    slug={"impreza-rodzinna-stadnina-koni-botoja-korzkiew"}
                    title={"IMPREZA RODZINNA STADNINA KONI BOTOJA KORZKIEW - SMARTRECRUITERS"}
                    tags={"Impreza rodzinna w Stadninie Koni Botoja Korzkiew"}
                    date={"15 czerwca 2018"}
                    menuNames={"SMARTRECRUITERS"}
                    menuTitle={"IMPREZA RODZINNA STADNINA KONI BOTOJA KORZKIEW"}
                    leadNames={"IZABELA i ARKADIUSZ"}
                    leadTitle={"SESJA ŚLUBNA JESIENIĄ - PAŁAC GOETZÓW OKOCIMSKICH"}
                    leadUrl={"/sesja-slubna-jesienia-palac-goetzow-okocimskich"}
                    leadImage={"url(/static/sesja_slubna_jesienia.jpg)"}
                />
            </div>
        );
    }
}
