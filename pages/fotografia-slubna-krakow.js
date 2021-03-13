import {useState, useEffect} from 'react';
import Singlepage from "../components/singlepage";
import { isWebPSupport } from "../components/utils/checkWebP";
 
const SlubPageComponent = () => {
    const [supported, setSupported] = useState(false);
    useEffect(() => {
        isWebPSupport(result => {
          setSupported(result)
        })        
      }, [])
    return <Singlepage
        headTitle={"Fotografia ślubna Kraków"}
        headDescription={"Fotografia ślubna Kraków, chwila, światło i kadr. Reportaż ślubny pełny kolorów i autentycznych emocji."}
        headKeywords={"fotografia ślubna kraków, reportaż ślubny, ślub w plenerze"}
        headUrl={"https://99foto.pl/fotografia-slubna-krakow/"}
        componentContentName={"slub"}
        backgroundImage={supported ? "url(/static/webp/bazylika-bozego-ciala-krakow-fotoreportaz-slubny.webp)" : "url(/static/bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg)"}
        leadNames={"ANNA i PIOTR"}
        leadTitle={"BAZYLIKA BOŻEGO CIAŁA KRAKÓW, FOTOREPORTAŻ ŚLUBNY"}
        leadUrl={"/bazylika-bozego-ciala-krakow-fotoreportaz-slubny"}
        leadImage={supported ? "url(/static/webp/bazylika-bozego-ciala-krakow-fotoreportaz-slubny.webp)" : "url(/static/bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg)"}
        />
  }

export default SlubPageComponent;