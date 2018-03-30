import Singlepage from "../components/singlepage";

export default class MisjaPageComponent extends React.Component {
    render() {
        return (
            <div>
                <Singlepage
                    headTitle={"Plener ślubny Kraków"}
                    headDescription={"Fotograf ślubny z Krakowa. Zapraszam do zapoznania się z portfolio i skorzystania z mojej oferty. Gwarantuję wysokość jakość usług i konkurencyjne ceny."}
                    headKeywords={"sesja zdjęciowa kraków,fotograf na wesele kraków"}
                    headUrl={"http://99foto.pl/misja-i-faq/"}
                    componentContentName={"misja"}
                    backgroundImage={"url(/static/wesele_na_polu_golfowym_w_paczoltowicach_start.jpg)"}
                    leadNames={"JOANNA i GRZEGORZ"}
                    leadTitle={"WESELE NA POLU GOLFOWYM W PACZÓŁTOWICACH"}
                    leadUrl={"/wesele-na-polu-golfowym-w-paczoltowicach"}
                    leadImage={"url(/static/wesele_na_polu_golfowym_w_paczoltowicach_start.jpg)"}
                />
            </div>
        );
    }
}
