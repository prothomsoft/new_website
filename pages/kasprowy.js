import React from 'react';
import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: process.env.staticImagesPath + "kaprowy_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0001.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0002.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0003.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0004.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0006.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0007.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0008.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0009.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0012.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0011.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0013.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0014.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0015.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0032.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0016.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0018.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0019.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0020.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0029.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0030.jpg", height: 851 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0031.jpg", height: 762 },           
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0021.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0022.jpg", height: 805 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0024.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0025.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0026.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0027.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0028.jpg", height: 382 },            
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0033.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0034.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0036.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0035.jpg", height: 382 },          
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0037.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0038.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0039.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0040.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0041.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0042.jpg", height: 527 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0043.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0044.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0045.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0046.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0047.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0048.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0049.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0050.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0051.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0053.jpg", height: 805 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0054.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0066.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0055.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0056.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0057.jpg", height: 762 },            
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0059.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0058.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0060.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0061.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0062.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0069.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0064.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0065.jpg", height: 762 },           
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0067.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0068.jpg", height: 762 },           
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0070.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0071.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0073.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0074.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0075.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0076.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0077.jpg", height: 742 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0078.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0085.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0080.jpg", height: 762 },                     
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0082.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0083.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0084.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0086.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0081.jpg", height: 526 },  
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0087.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0088.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0089.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0090.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0091.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0092.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0093.jpg", height: 805 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0094.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0095.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0096.jpg", height: 382 },           
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0098.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0099.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0100.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0101.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0102.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0103.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0104.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0105.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0106.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0107.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0194.jpg", height: 852 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0097.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0109.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0110.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0111.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0112.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0115.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0114.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0113.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0116.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0117.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0118.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0119.jpg", height: 527 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0120.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0126.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0121.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0122.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0123.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0124.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0125.jpg", height: 526 },      
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0129.jpg", height: 762 },             
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0127.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0128.jpg", height: 762 },   
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0130.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0131.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0132.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0133.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0134.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0135.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0136.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0137.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0138.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0142.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0140.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0139.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0141.jpg", height: 526 },            
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0143.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0144.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0145.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0146.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0147.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0148.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0149.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0150.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0151.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0153.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0152.jpg", height: 382 },           
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0154.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0155.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0156.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0157.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0158.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0159.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0160.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0161.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0162.jpg", height: 567 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0163.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0164.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0165.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0166.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0167.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0169.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0168.jpg", height: 382 },           
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0170.jpg", height: 527 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0171.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0172.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0173.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0174.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0175.jpg", height: 805 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0176.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0177.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0178.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0179.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0180.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0181.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0182.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0183.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0184.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0185.jpg", height: 851 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0186.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0188.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0189.jpg", height: 382 },            
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0191.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0190.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0192.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/01/fotograf_slubny_jordanow_0193.jpg", height: 762 }               
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sylwestrowy ślub, Sala Bankietowa Impresja Jordanów"}
                    headDescription={"Sylwestrowy ślub, szampańska zabawa w sali Bankietowej Impresja w Jordanowie i fotograf na wesele. Reportaż ze ślubu Justyny i Damiana. Zapraszam na bloga i do oglądania."}
                    headDescription={"Sylwestrowy ślub, szampańska zabawa w sali Bankietowej Impresja w Jordanowie i fotograf na wesele. Reportaż ze ślubu Justyny i Damiana. Zapraszam na bloga i do oglądania."}
                    headKeywords={"Sylwestrowy ślub, Sala Bankietowa Impresja Jordanów, fotograf weselny"}
                    headUrl={"https://99foto.pl/sylwestrowy-slub-sala-bankietowa-impresja-jordanow/"}
                    entryContentP1={
                        'Jest taki wieczór w roku, podczas którego wielu z nas imprezuje w Zakopanem, niektórzy bawią się w białej sali, każdy postanawia dokonać rzeczy niemożliwych i oczywiście leją się strumienie szampana. Powiem Wam, że jest to świetna okazja, żeby połączyć ten jeszcze świąteczny, a już noworoczny czas i wykorzystać go do organizacji własnego przyjęcia weselnego. Wasi goście pojawią się na sali weselnej od razu nastawieni na szampańską zabawę, będą gwarantowane fajerwerki, a po północy otworzy się puszka gorących życzeń. Wiecie już chyba dlaczego weterani branży ślubnej Justyna i Damian zdecydowali się zorganizować własny ślub właśnie w ten dzień. Był to strzał w dziesiątkę i świetna zabawa zagwarantowana.'
                    }
                    entryContentP2={
                        'Dzień rozpoczęliśmy od przygotowań Justyny, następnie wybraliśmy się do Damiana. Błogosławieństwo i wyruszyliśmy do Kościoła św. Sebastiana w Skomielnej Białej. Bardzo ciekawe kazanie, na trzy ważne tematy zaproponowane przez Parę Młodą (zapamiętałem, że w biznesie nie ma miękkiej gry). Sakramentalne TAK, obowiązkowe zdjęcie grupowe i Para Młoda zaprosiła swoich gości do <a href="http://www.impresja-jordanow.pl/" target="_blank" rel="nofollow">Sali Bankietowej Impresja w Jordanowie</a>. Biały jak śnieg DJ Grzegorz, głosem smerfa ważniaka rozpoczął imprezę. Atrakcji było tak dużo, że trudno je wszystkie zliczyć. Pierwszy taniec, po którym Agustin Egurrola musiałby dać dyszkę, magik, Familiada, podziękowanie dla rodziców przeprowadzone smerfowo, masa zdjęc grupowych z postaciami z bajek, oczywiście szampan, ognie i szalone oczepiny. Kamerował Szymon z <a href="https://www.bestmoviefilm.pl/" target="_blank" rel="nofollow">Best Movie Film</a>. Serdecznie dziękuję Wam za zaufanie i mam nadzieję, że zdjęcia się spodobają. Zapraszam do pozostawienia like na <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow">Facebook</a> lub <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow">Instagram</a>.'
                    }
                    slug={"sylwestrowy-slub-sala-bankietowa-impresja-jordanow"}
                    title={"SYLWESTROWY ŚLUB, SALA BANKIETOWA IMPRESJA JORDANÓW - JUSTYNA i DAMIAN"}
                    tags={"Sylwestrowy ślub, Sala Bankietowa Impresja Jordanów, fotograf weselny"}
                    date={"7 stycznia 2022"}
                    menuNames={"JUSTYNA i DAMIAN"}
                    menuTitle={"SYLWESTROWY ŚLUB, SALA BANKIETOWA IMPRESJA JORDANÓW"}
                    leadNames={"ANNA i TOMASZ"}
                    leadTitle={"WYMARZONY PLENER ŚLUBNY W KRAKOWIE, SPRAWDZONE MIEJSCA"}
                    leadUrl={"/wymarzony-plener-slubny-w-krakowie-sprawdzone-miejsca"}
                    leadImage={"url(" + process.env.staticImagesPath + "plener_slubny_park_mogilany.jpg)"}
                />
            </div>
        );
    }
}
