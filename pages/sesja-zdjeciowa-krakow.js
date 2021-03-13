import { useState, useEffect } from 'react';
import Singlepage from "../components/singlepage";
import { isWebPSupport } from "../components/utils/checkWebP";
 
const SesjaPageComponent = () => {
    const [supported, setSupported] = useState(false);
    useEffect(() => {
        isWebPSupport(result => {
          setSupported(result)
        })        
      }, [])
    return <Singlepage
        headTitle={"Sesja zdjęciowa Kraków"}
        headDescription={"Sesja zdjęciowa w Krakowie to atrakcje turystyczne w pięknym miejscu. Spotkajmy się, wspólnie znajdźmy chwilę, światło, kadr, zachowajmy je na zawsze."}
        headKeywords={"sesja zdjęciowa kraków, plener ślubny w krakowie"}
        headUrl={"https://99foto.pl/sesja-zdjeciowa-krakow/"}
        componentContentName={"sesja"}
        slug={"sesja-slubna-w-pieskowej-skale-i-zamek-korzkiew"}
        title={"ŚLUBNA SESJA ZDJĘCIOWA W KRAKOWIE - KRISTINA i ALEKSANDR"}
        date={"19 WRZEŚNIA 2018"}
        tags={"ŚLUBNA SESJA ZDJĘCIOWA W KRAKOWIE"}
        backgroundImage={supported ? "url(/static/webp/plener_slubny_zamek_pieskowa_skala.webp)" : "url(/static/plener_slubny_zamek_pieskowa_skala.jpg)"}
        leadNames={"KRISTINA i ALEKSANDR"}
        leadTitle={"SESJA ŚLUBNA, PLENER ŚLUBNY W KRAKOWIE"}
        leadUrl={"/sesja-slubna-w-pieskowej-skale-i-zamek-korzkiew"}
        leadImage={supported ? "url(/static/webp/plener_slubny_zamek_pieskowa_skala.webp)" : "url(/static/plener_slubny_zamek_pieskowa_skala.jpg)"}
    />
  }

export default SesjaPageComponent;