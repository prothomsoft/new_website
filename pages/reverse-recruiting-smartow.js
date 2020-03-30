import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/reverse_recruiting_smart.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0002.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0004.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0006.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0010.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0012.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0017.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0019.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0020.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2019/10/reverse_recruiting_smart_0024.jpg", height: 762 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Fotograf na event firmowy Kraków, Reverse Recruitment Event w SmartRecruiters"}
                    headDescription={
                        "Reverse Recruitment to event skupiający uwagę osób związanych z branżą HR, którego celem było zapoznanie kandydatów z dobrymi praktykami pozwalającymi skutecznie znaleźć pracę."
                    }
                    headKeywords={"Fotograf na event firmowy Kraków, Reverse Recruitment Event w SmartRecruiters"}
                    headUrl={"https://99foto.pl/reverse-recruiting-smartow/"}
                    entryContentP1={
                        "Reverse Recruitment to event skupiający uwagę osób związanych z branżą HR, którego celem było zapoznanie kandydatów z dobrymi praktykami pozwalającymi skutecznie znaleźć prace."
                    }
                    entryContentP2={""}
                    slug={"reverse-recruiting-smartow"}
                    title={"FIRMOWE SPOTKANIE SMARTÓW - REVERSE RECRUITMENT"}
                    tags={"Fotograf na event firmowy Kraków, reverse recruitment smart recruiters"}
                    date={"29 października 2019"}
                    menuNames={"SMARTRECRUITERS"}
                    menuTitle={"FIRMOWE SPOTKANIE SMARTÓW - REVERSE RECRUITMENT"}
                    leadNames={"SMARTRECRUITERS"}
                    leadTitle={"FIRMOWE SPOTKANIE SMARTÓW - TURNIEJ PIŁKARZYKÓW"}
                    leadUrl={"/firmowe-spotkanie-smartow"}
                    leadImage={"url(/static/impreza_smartow.jpg)"}
                />
            </div>
        );
    }
}
