import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/fotograf_slubny_dobczyce.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0002.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0004.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0006.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0013.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0014.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2020/01/fotograf_slubny_dobczyce_0020.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sala Wesela Alexia Ochojno, fotograf na wesele Dobczyce"}
                    headDescription={"123"}
                    headKeywords={"alexia ochojno, nowoczesna sala weselna, ślub w mogilanach, fotograf na wesele dobczyce"}
                    headUrl={"https://99foto.pl/sala-weselna-alexia-ochojno-emocje-i-swietna-zabawa/"}
                    entryContentP1={
                        '123'
                    }
                    entryContentP2={
                        '123'
                    }
                    slug={"sala-weselna-alexia-ochojno-emocje-i-swietna-zabawa"}
                    title={"SALA WESELNA ALEXIA OCHOJNO, EMOCJE i ŚWIETNA ZABAWA - EWELINA i JAKUB"}
                    tags={"alexia ochojno, nowoczesna sala weselna, ślub w mogilanach, fotograf na wesele dobczyce"}
                    date={"26 stycznia 2020"}
                    menuNames={"EWELINA i JAKUB"}
                    menuTitle={"SALA WESELNA ALEXIA OCHOJNO, EMOCJE i ŚWIETNA ZABAWA"}
                    leadNames={"AMANDA i JACEK"}
                    leadTitle={"WE ARE ALL FRIENDS HERE ŁĘTOWNIA, KRZCZONÓW, SPYTKOWICE"}
                    leadUrl={"/we-are-all-friends-here-letownia-krzczonow-spytkowice"}
                    leadImage={"url(/static/przystan_kabanos_spytkowice.jpg)"}
                />
            </div>
        );
    }
}