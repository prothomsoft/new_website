import Singlepage from "../components/singlepage";

export default class SlubPageComponent extends React.Component {
    render() {
        return (
            <div>
                <Singlepage
                    headTitle={"Fotografia ślubna Kraków"}
                    headDescription={"Fotografia ślubna Kraków, trójkąt zależności pomiędzy chwilą, światłem i kadrem. Chwilę tworzą ludzie, światło to kontekst, kadr to poczucie estetyki fotografa."}
                    headKeywords={"fotografia ślubna kraków,fotograf ślubny kraków"}
                    headUrl={"https://99foto.pl/fotografia-slubna-krakow/"}
                    componentContentName={"slub"}
                    backgroundImage={"url(/static/slub_cywilny_i_wesele_w_plenerze_witkowa_chata_krakow_start.jpg)"}
                    leadNames={"KINGA i JULIEN"}
                    leadTitle={"ŚLUB CYWILNY i WESELE W PLENERZE- WITKOWA CHATA KRAKÓW"}
                    leadUrl={"/slub-cywilny-i-wesele-w-plenerze-witkowa-chata-krakow"}
                    leadImage={"url(/static/slub_cywilny_i_wesele_w_plenerze_witkowa_chata_krakow_start.jpg)"}
                />
            </div>
        );
    }
}
