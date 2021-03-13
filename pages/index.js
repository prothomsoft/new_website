import { useState, useEffect } from 'react';
import Homepage from "../components/homepage";
import { isWebPSupport } from "../components/utils/checkWebP";

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
            {
                imageUrl: "/static/webp/lomnicki_staw_portfolio_start.webp",
            },
            {
                imageUrl: "/static/webp/ogrod_botaniczny.webp",
            },
            {
                imageUrl: "/static/webp/pomysl_na_sesje_slubna_zimowa_w_krakowie.webp",
            },
            {
                imageUrl: "/static/webp/fotograf_slubny_rabka_zdroj.webp",
            },
            {
                imageUrl: "/static/webp/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.webp",
            },
            {
                imageUrl: "/static/webp/natalia_marcin_i_maja_reportaz_slubny_gosciniec_branicki_start.webp",
            },
            {
                imageUrl: "/static/webp/dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.webp",
            },
        ];
      } else {
        slides = [
            {
                imageUrl: "/static/lomnicki_staw_portfolio_start.jpg",
            },
            {
                imageUrl: "/static/ogrod_botaniczny.jpg",
            },
            {
                imageUrl: "/static/pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg",
            },
            {
                imageUrl: "/static/fotograf_slubny_rabka_zdroj.jpg",
            },
            {
                imageUrl: "/static/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.jpg",
            },
            {
                imageUrl: "/static/natalia_marcin_i_maja_reportaz_slubny_gosciniec_branicki_start.jpg",
            },
            {
                imageUrl: "/static/dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.jpg",
            },
        ];
      }
      

    return <div>
        <Homepage
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
    </div>;

}

export default Index;