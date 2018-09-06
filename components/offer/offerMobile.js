import React from "react";
import Link from "next/link";
import LazyLoad from "react-lazy-load";

export default class OfferMobile extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <article>
                    <header>
                        <h1 className="quote-title">OFERTA FOTOGRAFII ŚLUBNEJ</h1>
                    </header>
                    <h2>REPORTAŻ ŚLUBNY OBEJMUJĄCY</h2>
                    <p>przygotowania, błogosławieństwo</p>
                    <p>ceremonię w kościele lub USC</p>
                    <p>przyjęcie weselne do oczepin włącznie (do godz. 1.00)</p>
                    <p>sesję poślubną w wybranym dniu po ślubie</p>
                    <div className="spacer">&nbsp;</div>
                    <h2>OTRZYMUJECIE</h2>
                    <p>fotoksiążkę - minimum 120 stron w twardej oprawie, format 30x30cm - około 350 zdjęć</p>
                    <p>minimum 450 zdjęć na płycie DVD w etui - wszystkie zdjęcia poddane są starannej obróbce graficznej</p>
                    <p>prezentację multimedialną zdjęć ślubnych na płycie DVD w etui</p>
                    <p>dojazd w dniu ślubu GRATIS</p>
                    <p>internetową galerię zdjęć w strefie klienta zabezpieczoną hasłem</p>
                </article>

                <article>
                    <header>
                        <h1 className="quote-title">OFERTA SESJI ZDJĘCIOWEJ</h1>
                    </header>
                    <h2>SESJA ZDJĘCIOWA OBEJMUJĄCA</h2>
                    <p>trzy godziny fotografowania</p>
                    <p>dwa lub trzy wybrane miejsca plenerowe</p>
                    <p>&nbsp;</p>
                    <div className="spacer_more">&nbsp;</div>
                    <h2>OTRZYMUJECIE</h2>
                    <p>minimum 80 zdjęć na płycie DVD w etui - wszystkie zdjęcia poddane są starannej obróbce graficznej</p>
                    <p>dojazd do 30 km na sesję zdjęciową GRATIS</p>
                    <p>internetową galerię zdjęć w strefie klienta zabezpieczoną hasłem</p>
                    <div className="spacer" />
                </article>

                <style jsx>{`
                    .porfolioImage {                
                        cursor: pointer;
                    }
        
                    .porfolioCaption {
                        cursor: pointer;                
                        margin: 0 10px;
                    }
                    
                    article {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        text-align: center;                        
                        font-family: 'Oswald';
                        width: 100%;
                        color #BEBEBE;
                        margin: 20px 0 0 0;
                    }
                    article h1{
                        color: #FFF;
                        font-size: 26px;
                    }
                    article h2 {
                        color: #FFF;
                    }
        
                    .spacer {
                        height: 50px;
                    }
                    
                    p {
                        font-size: 16px;
                        margin: 10px 0;
                        text-align: center;
                    }                
                                    
                    .quote-title::before,
                    .quote-title::after {
                        content: '';
                        display: block;
                        border: 1px solid #33B59A;                    
                    }
                    
                    .quote-title {                
                        display: flex;
                        align-items: center;
                        color: #FFFFFF;
                        padding: 10px 0 10px 0;
                    }
                    
                    .quote-title::before,
                    .quote-title::after {
                        flex-grow: 1;
                        margin: 0 10px;
                    } 
                     
                `}</style>
            </div>
        );
    }
}
