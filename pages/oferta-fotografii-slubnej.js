import Singlepage from "../components/singlepage";

const OfferPageComponent = () => {
      return <Singlepage
      headTitle={"Oferta fotografii ślubnej i sesji zdjęciowej"}
      headDescription={"Oferta fotografii ślubnej i sesji zdjęciowej. Kraków i bliskie okolice. Żywe kolory i autentyczne emocje. Kliknij i sprawdź moje portfolio."}
      headKeywords={"oferta fotografii ślubnej, oferta sesji zdjęciowej, kraków, wieliczka, jordanów, miechów, tarnów, skawina"}
      headUrl={"https://99foto.pl/oferta-fotografii-slubnej/"}
      componentContentName={"offer"}
      backgroundImage={"url(" + process.env.staticImagesPath + "wydruki_fotograf_krakow_start.jpg)"}
      leadNames={"DAJANA i SYLWESTER"}
      leadTitle={"OGRÓD BOTANICZNY W KRAKOWIE, ŚLUBNA SESJA ZDJĘCIOWA"}
      leadUrl={"/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa"}
      leadImage={"url(" + process.env.staticImagesPath + "ogrod_botaniczny.jpg)"}
  />

}

export default OfferPageComponent;