import {useState, useEffect} from 'react';
import Singlepage from "../components/singlepage";

 
const SlubPageComponent = () => {
    return <Singlepage
        headTitle={"Fotografia ślubna Kraków"}
        headDescription={"Fotografia ślubna Kraków, chwila, światło i kadr. Reportaż ślubny pełny kolorów i autentycznych emocji."}
        headKeywords={"fotografia ślubna kraków, reportaż ślubny, ślub w plenerze"}
        headUrl={"https://99foto.pl/fotografia-slubna-krakow/"}
        componentContentName={"slub"}
        backgroundImage={"url(https://res.cloudinary.com/cloud99fotopl/image/fetch/f_auto,q_auto/https://99foto.pl/static/bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg)"}
        leadNames={"ANNA i PIOTR"}
        leadTitle={"BAZYLIKA BOŻEGO CIAŁA KRAKÓW, FOTOREPORTAŻ ŚLUBNY"}
        leadUrl={"/bazylika-bozego-ciala-krakow-fotoreportaz-slubny"}
        leadImage={"url(https://res.cloudinary.com/cloud99fotopl/image/fetch/f_auto,q_auto/https://99foto.pl/static/bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg)"}
        />
  }

export default SlubPageComponent;