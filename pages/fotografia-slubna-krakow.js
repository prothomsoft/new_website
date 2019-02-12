import Singlepage from "../components/singlepage";

export default class SlubPageComponent extends React.Component {
    render() {
        return (
            <div>
                <Singlepage
                    headTitle={"Fotografia ślubna Kraków"}
                    headDescription={"Fotografia ślubna Kraków, trójkąt zależności pomiędzy chwilą, światłem i kadrem. Reportaż ślubny pełny kolorów i autentycznych emocji."}
                    headKeywords={"fotografia ślubna kraków, reportaż ślubny, ślub w plenerze"}
                    headUrl={"https://99foto.pl/fotografia-slubna-krakow/"}
                    componentContentName={"slub"}
                    backgroundImage={"url(/static/slub_cywilny_i_wesele_w_plenerze_witkowa_chata_krakow_start.jpg)"}
                    leadNames={"KINGA i JULIEN"}
                    leadTitle={"FOTOGRAFIA ŚLUBNA KRAKÓW - ŚLUB W PLENERZE"}
                    leadUrl={"/slub-cywilny-i-wesele-w-plenerze-witkowa-chata-krakow"}
                    leadImage={"url(/static/slub_cywilny_i_wesele_w_plenerze_witkowa_chata_krakow_start.jpg)"}
                />
            </div>
        );
    }
}
