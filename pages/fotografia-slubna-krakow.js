import Singlepage from "../components/singlepage";

export default class SlubPageComponent extends React.Component {
    render() {
        return (
            <div>
                <Singlepage
                    headTitle={"Fotografia ślubna Kraków"}
                    headDescription={"Fotografia ślubna Kraków, chwila, światło i kadr. Reportaż ślubny pełny kolorów i autentycznych emocji."}
                    headKeywords={"fotografia ślubna kraków, reportaż ślubny, ślub w plenerze"}
                    headUrl={"https://99foto.pl/fotografia-slubna-krakow/"}
                    componentContentName={"slub"}
                    backgroundImage={"url(/static/bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg)"}
                    leadNames={"ANNA i PIOTR"}
                    leadTitle={"BAZYLIKA BOŻEGO CIAŁA KRAKÓW, FOTOREPORTAŻ ŚLUBNY"}
                    leadUrl={"/bazylika-bozego-ciala-krakow-fotoreportaz-slubny"}
                    leadImage={"url(/static/bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg)"}
                />
            </div>
        );
    }
}
