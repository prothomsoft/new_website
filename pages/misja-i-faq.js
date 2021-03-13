import { useState, useEffect } from 'react';
import Singlepage from "../components/singlepage";
import { isWebPSupport } from "../components/utils/checkWebP";

const MisjaPageComponent = () => {
    const [supported, setSupported] = useState(false);
    useEffect(() => {
        isWebPSupport(result => {
          setSupported(result)
        })        
      }, [])
      return <Singlepage
      headTitle={"Plener ślubny Kraków"}
      headDescription={"Fotograf ślubny z Krakowa. Zapraszam do zapoznania się z portfolio i skorzystania z mojej oferty. Gwarantuję wysokość jakość usług i konkurencyjne ceny."}
      headKeywords={"sesja zdjęciowa kraków,fotograf na wesele kraków"}
      headUrl={"https://99foto.pl/misja-i-faq/"}
      componentContentName={"misja"}
      backgroundImage={supported ? "url(/static/webp/dworek_fantazja_skomielna_biala_fotograf.webp)" : "url(/static/dworek_fantazja_skomielna_biala_fotograf.jpg)"}
      leadNames={"PATRYCJA i KRZYSZTOF"}
      leadTitle={"DWOREK FANTAZJA SKOMIELNA BIAŁA i ŚLUB W STYLU GLAMOUR"}
      leadUrl={"/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour"}
      leadImage={supported ? "url(/static/webp/dworek_fantazja_skomielna_biala_fotograf.webp)" : "url(/static/dworek_fantazja_skomielna_biala_fotograf.jpg)"}
  />
}

export default MisjaPageComponent;