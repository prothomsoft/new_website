import Singlepage from "../components/singlepage";
 
const SlubPageComponent = () => {
    return <Singlepage
        headTitle={"Fotografia ślubna Kraków"}
        headDescription={"Fotografia ślubna Kraków, chwila, światło i kadr. Reportaż ślubny pełny kolorów i autentycznych emocji."}
        headKeywords={"fotografia ślubna kraków, reportaż ślubny, ślub w plenerze"}
        headUrl={"https://99foto.pl/fotografia-slubna-krakow/"}
        componentContentName={"slub"}
        backgroundImage={"url(" + process.env.staticImagesPath + "bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg)"}
        leadNames={"ANNA i PIOTR"}
        leadTitle={"BAZYLIKA BOŻEGO CIAŁA KRAKÓW, FOTOREPORTAŻ ŚLUBNY"}
        leadUrl={"/bazylika-bozego-ciala-krakow-fotoreportaz-slubny"}
        leadImage={"url(" + process.env.staticImagesPath + "bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg)"}
        />
  }

export default SlubPageComponent;