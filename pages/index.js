import Homepage from "../components/homepage";
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
      let slides = [];
      slides = [            
            process.env.staticImagesPath + "lomnicki_staw_portfolio_start.jpg",
            process.env.staticImagesPath + "ogrod_botaniczny.jpg",
            process.env.staticImagesPath + "pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg",
            process.env.staticImagesPath + "plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.jpg",
            process.env.staticImagesPath + "fotograf_slubny_rabka_zdroj.jpg"
      ];
      
      let headTitle = "Fotograf ślubny Kraków ✔️ Tomasz Prokop";
      let headDescription = "Kliknij ⬆️ sprawdź moje portfolio. Pełne emocji reportaże ślubne ❤️ piękne zdjęcia plenerowe. Serdecznie zapraszam. Fotograf ślubny Kraków.";
      let headKeywords = "fotograf ślubny Kraków, fotograf na wesele, fotografia ślubna Kraków, zdjęcia plenerowe";
      let headUrl = "https://99foto.pl";
      
      
      return <Homepage
          slides={slides}
          headTitle={headTitle}
          headDescription={headDescription}
          headKeywords={headKeywords}
          headUrl={headUrl}
          backgroundImage={"url(" + process.env.staticImagesPath + "sesja_slubna_jesienia.jpg)"}
          leadNames={"PATRYCJA i KRZYSZTOF"}
          leadTitle={"PLENER ŚLUBNY NA RYNKU W KRAKOWIE"}
          leadUrl={"/plener-slubny-na-rynku-w-krakowie"}
          leadImage={"url(" + process.env.staticImagesPath + "plener_slubny_na_rynku_w_krakowie.jpg)"}
      />        
}

export default Index;