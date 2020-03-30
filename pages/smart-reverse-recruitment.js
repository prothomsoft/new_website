import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/smart_reverse_recruitment_2.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0001.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0003.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0005.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0007.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0009.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0014.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0015.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0018.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0024.jpg", height: 1278 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0025.jpg", height: 1277 },
            { imageSrc: "https://99foto.pl/static/blog/2020/03/smart_reverse_recruitment_event_0026.jpg", height: 1277 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Fotograf na event firmowy Kraków, Reverse Recruitment w SmartRecruiters"}
                    headDescription={
                        "Reverse Recruitment to event skupiający uwagę osób związanych z branżą HR, którego celem było zapoznanie kandydatów z dobrymi praktykami pozwalającymi skutecznie znaleźć pracę."
                    }
                    headKeywords={"Fotograf na event firmowy Kraków, Reverse Recruitment w SmartRecruiters"}
                    headUrl={"https://99foto.pl/smart-reverse-recruitment/"}
                    entryContentP1={
                        "Reverse Recruitment po raz drugi. Event skupiający uwagę osób związanych z branżą HR, którego celem było zapoznanie kandydatów z dobrymi praktykami pozwalającymi skutecznie znaleźć prace."
                    }
                    entryContentP2={""}
                    slug={"smart-reverse-recruitment"}
                    title={"FIRMA SMARTRECRUITERS - WIGILIA FIRMOWA"}
                    tags={"Fotograf na event firmowy Kraków, Reverse Recruitment w SmartRecruiters"}
                    date={"27 marca 2019"}
                    menuNames={"FIRMA SMARTRECRUITERS"}
                    menuTitle={"REVERSE RECRUITMENT"}
                    leadNames={"SMARTRECRUITERS"}
                    leadTitle={"FIRMA SMARTRECRUITERS - WIGILIA FIRMOWA"}
                    leadUrl={"/wigilia-firmowa-smartrecruiters-2019"}
                    leadImage={"url(/static/wigilia_smart_2019.jpg)"}
                />
            </div>
        );
    }
}
