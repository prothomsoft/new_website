import Singlepage from "../components/singlepage";

export default class SlubPageComponent extends React.Component {
    render() {
        return (
            <div>
                <Singlepage
                    headTitle={"Fotografia ślubna Kraków"}
                    headDescription={"Fotografia ślubna Kraków, chwila, światło i kadr. Reportaż ślubny pełny kolorów i autentycznych emocji."}
                    headKeywords={"fotografia ślubna kraków, reportaż ślubny, ślub w plenerze"}
                    headUrl={"http://wp.99foto.pl/fotografia-slubna-krakow/"}
                    componentContentName={"slub"}
                    backgroundImage={"url(/static/sala_weselna_biala_wilczyca_kocmyrzow.jpg)"}
                    leadNames={"MONIKA i MARTIN"}
                    leadTitle={"WESELE MIĘDZYNARODOWE i POLSKIE TRADYCJE WESELNE"}
                    leadUrl={"/wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne"}
                    leadImage={"url(/static/sala_weselna_biala_wilczyca_kocmyrzow.jpg)"}
                />
            </div>
        );
    }
}
