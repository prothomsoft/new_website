import { useState, useEffect } from 'react';
import Homepage from "../components/homepage";
import { isWebPSupport } from "../components/utils/checkWebP";
import FontFaceObserver from "fontfaceobserver";
import Loader from "../components/loader";
import Layout from "../components/layout";
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
    const [font, setFont] = useState(false);
    useEffect(() => {
        isWebPSupport(result => {
          setSupported(result)
        })

        let link = document.createElement("link");
        link.href = "https://fonts.googleapis.com/css?family=Oswald:400&subset=latin,latin-ext";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        Promise.all([new FontFaceObserver("Oswald").load()]).then(
            () => {
                setFont(true)
            }
        );
              
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

      let componentOne = <Layout><SectionWrapper><Loader /></SectionWrapper></Layout>
      if(font) {
          componentOne = <Homepage
          slides={slides}
          headTitle={"Fotograf ślubny Kraków: Tomasz Prokop"}
          headDescription={"Fotograf ślubny Kraków. Piękne zdjęcia, pełne emocji reportaże ślubne. Sprawdź moją ofertę i portfolio. Album w cenie pakietu. Serdecznie zapraszam."}
          headKeywords={"fotograf ślubny Kraków, fotograf na wesele"}
          headUrl={"https://99foto.pl"}
          backgroundImage={supported ? "url(/static/webp/sesja_slubna_jesienia.webp)" : "url(/static/sesja_slubna_jesienia.jpg)"}
          leadNames={"PATRYCJA i KRZYSZTOF"}
          leadTitle={"PLENER ŚLUBNY NA RYNKU W KRAKOWIE"}
          leadUrl={"/plener-slubny-na-rynku-w-krakowie"}
          leadImage={supported ? "url(/static/webp/plener_slubny_na_rynku_w_krakowie.webp)" : "url(/static/plener_slubny_na_rynku_w_krakowie.jpg)"}
      />
      }     

    return componentOne    
}

export default Index;