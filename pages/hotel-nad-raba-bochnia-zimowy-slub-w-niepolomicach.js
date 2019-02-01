import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/hotel_nad_raba_bochnia.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/01/restauracja_nad_raba_brzesko_0009.jpg", height: 763 },            
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/01/restauracja_nad_raba_brzesko_0010.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/01/restauracja_nad_raba_brzesko_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/01/restauracja_nad_raba_brzesko_0004.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/01/restauracja_nad_raba_brzesko_0003.jpg", height: 763 },            
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/01/restauracja_nad_raba_brzesko_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/01/restauracja_nad_raba_brzesko_0008.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2019/01/restauracja_nad_raba_brzesko_0012.jpg", height: 762 },
           
           
          
            
          
            
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Hotel nad Rabą Bochnia, Zimowy ślub w Niepołomicach"}
                    headDescription={
                        "Hotel nad Rabą Bochnia, Zimowy ślub w Niepołomicach. Piękne kwiaty w środku zimy i mega wesoła grupa przyjaciół na ślubie Adrianny i Arkadiusza. Zapraszam do oglądania."
                    }
                    headKeywords={"Hotel nad Rabą Bochnia, Gospoda nad Rabą Bochnia wesela, zimowy ślub w Niepołomicach"}
                    headUrl={"https://99foto.pl/hotel-nad-raba-bochnia-zimowy-slub-w-niepolomicach/"}
                    entryContentP1={"tekst1"}
                    entryContentP2={"tekst2"}
                    slug={"hotel-nad-raba-bochnia-zimowy-slub-w-niepolomicach"}
                    title={"HOTEL NAD RABĄ BOCHNIA, ZIMOWY ŚLUB W NIEPOŁOMICACH - ADRIANNA I ARKADIUSZ"}
                    tags={"Hotel nad Rabą Bochnia, Gospoda nad Rabą Bochnia wesela, zimowy ślub w Niepołomicach"}
                    date={"29 stycznia 2019"}
                    menuNames={"ADRIANNA I ARKADIUSZ"}
                    menuTitle={"HOTEL NAD RABĄ BOCHNIA, ZIMOWY ŚLUB W NIEPOŁOMICACH"}
                    leadNames={"NATALIA i ŁUKASZ"}
                    leadTitle={"POMYSŁ NA SESJĘ ZIMOWĄ W KRAKOWIE - DWÓR JANA MATEJKI"}
                    leadUrl={"/pomysl-na-sesje-zimowa-w-krakowie-dwor-jana-matejki"}
                    leadImage={"url(/static/pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg)"}
                />
            </div>
        );
    }
}
