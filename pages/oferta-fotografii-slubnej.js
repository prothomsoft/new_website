import { useState, useEffect } from 'react';
import Singlepage from "../components/singlepage";
import { isWebPSupport } from "../components/utils/checkWebP";

const OfferPageComponent = () => {
    const [supported, setSupported] = useState(false);
    useEffect(() => {
        isWebPSupport(result => {
          setSupported(result)
        })        
      }, [])
      return <Singlepage
      headTitle={"Oferta fotografii ślubnej i sesji zdjęciowej"}
      headDescription={"Oferta fotografii ślubnej i sesji zdjęciowej. Kraków i bliskie okolice. Żywe kolory i autentyczne emocje. Kliknij i sprawdź moje portfolio."}
      headKeywords={"oferta fotografii ślubnej, oferta sesji zdjęciowej, kraków, wieliczka, jordanów, miechów, tarnów, skawina"}
      headUrl={"https://99foto.pl/oferta-fotografii-slubnej/"}
      componentContentName={"offer"}
      backgroundImage={supported ? "url(/static/webp/wydruki_fotograf_krakow_start.webp)" : "url(/static/wydruki_fotograf_krakow_start.jpg)"}
      leadNames={"DAJANA i SYLWESTER"}
      leadTitle={"OGRÓD BOTANICZNY W KRAKOWIE, ŚLUBNA SESJA ZDJĘCIOWA"}
      leadUrl={"/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa"}
      leadImage={supported ? "url(/static/webp/ogrod_botaniczny.webp)" : "url(/static/ogrod_botaniczny.jpg)"}
  />

}

export default OfferPageComponent;