import { useState, useEffect, Fragment } from 'react';
import Homepage from "../components/homepage";
import {isWebPSupport} from "../components/utils/checkWebP";
import styled from "styled-components";

const SectionWrapper = styled.div`
    margin: 0 auto;
    width: 1160px;
    text-align: justify;
    padding: 20px 10px 0px 10px;
    @media (max-width: 1160px) {
        width: 100%;
    }
`;

const Index = () => {
    const [supported, setSupported] = useState(false);
    useEffect(() => {
        isWebPSupport(result => {
          setSupported(result)
        })
      }, [])

      let slides = [];
      if(supported) {
        slides = [            
                "/static/webp/lomnicki_staw_portfolio_start.webp",
                "/static/webp/ogrod_botaniczny.webp",
                "/static/webp/pomysl_na_sesje_slubna_zimowa_w_krakowie.webp",
                "/static/webp/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.webp",
                "/static/webp/fotograf_slubny_rabka_zdroj.webp"
        ];
      } else {
        slides = [            
                "/static/lomnicki_staw_portfolio_start.jpg",
                "/static/ogrod_botaniczny.jpg",
                "/static/pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg",
                "/static/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.jpg",
                "/static/fotograf_slubny_rabka_zdroj.jpg"
        ];
      }

      let headTitle = "Fotograf ślubny Kraków: Tomasz Prokop";
      let headDescription = "Fotograf ślubny Kraków. Piękne zdjęcia, pełne emocji reportaże ślubne. Sprawdź moją ofertę i portfolio. Album w cenie pakietu. Serdecznie zapraszam.";
      let headKeywords = "fotograf ślubny Kraków, fotograf na wesele";
      let headUrl = "https://99foto.pl";
      
      
      return <Homepage
          slides={slides}
          headTitle={headTitle}
          headDescription={headDescription}
          headKeywords={headKeywords}
          headUrl={headUrl}
          backgroundImage={supported ? "url(/static/webp/sesja_slubna_jesienia.webp)" : "url(/static/sesja_slubna_jesienia.jpg)"}
          leadNames={"PATRYCJA i KRZYSZTOF"}
          leadTitle={"PLENER ŚLUBNY NA RYNKU W KRAKOWIE"}
          leadUrl={"/plener-slubny-na-rynku-w-krakowie"}
          leadImage={supported ? "url(/static/webp/plener_slubny_na_rynku_w_krakowie.webp)" : "url(/static/plener_slubny_na_rynku_w_krakowie.jpg)"}
      />        
}

export default Index;