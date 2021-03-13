import { useState, useEffect } from 'react';
import Singlepage from "../components/singlepage";
import { isWebPSupport } from "../components/utils/checkWebP";

const HistoriaPageComponent = () => {
    const [supported, setSupported] = useState(false);
    useEffect(() => {
        isWebPSupport(result => {
          setSupported(result)
        })        
      }, [])
      return <Singlepage
          headTitle={"Reportaż ślubny i sesja plenerowa, portfolio fotografa ślubnego"}
          headDescription={"Portfolio fotografa ślubnego, w którym zobaczycie wybrane reportaże ślubne i sesje plenerowe. Zapraszam."}
          headKeywords={"reportaże ślubne i sesje plenerowe, portfolio fotografa ślubnego"}
          headUrl={"https://99foto.pl/sesja-slubna-jesienia-palac-goetzow-okocimskich/"}
          componentContentName={"historia"}
          backgroundImage={supported ? "url(/static/webp/sesja_slubna_jesienia.webp)" : "url(/static/sesja_slubna_jesienia.jpg)"}
          leadNames={"IZABELA i ARKADIUSZ"}
          leadTitle={"SESJA ŚLUBNA JESIENIĄ - PAŁAC GOETZÓW"}
          leadUrl={"/sesja-slubna-jesienia-palac-goetzow-okocimskich"}
          leadImage={supported ? "url(/static/webp/sesja_slubna_jesienia.webp)" : "url(/static/sesja_slubna_jesienia.jpg)"}
      />  
}

export default HistoriaPageComponent;