import React from 'react';
import Link from 'next/link'
import styled from 'styled-components'

export default class OfferMobile extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <div>
                <article>
                    <header>
                        <h1>OFERTA I CENA</h1>                            
                    </header>
                        <h2 className="quote-title">REPORTAŻ ŚLUBNY OBEJMUJĄCY</h2>
                        <p>przygotowania, błogosławieństwo</p>
                        <p>ceremonię w kościele lub USC</p>
                        <p>przyjęcie weselne do oczepin włącznie (do godz. 1.00)</p>
                        <p>sesję poślubną w wybranym dniu po ślubie</p>                            
                        <h2 className="quote-title">OTRZYMUJECIE</h2>
                        <p>fotoksiążkę - 120 stron w twardej oprawie, format 30x30cm - około 350 zdjęć</p>
                        <p>450 zdjęć na płycie DVD w etui - wszystkie zdjęcia poddane są starannej obróbce graficznej</p>
                        <p>prezentację zdjęć ślubnych na płycie DVD w etui</p>
                        <p>dojazd w dniu ślubu GRATIS</p>
                        <p>internetową galerię zdjęć w strefie klienta zabezpieczoną hasłem</p>
                        <div className="spacer">&nbsp;</div>                    
            
                </article>
                <style jsx>{`
                    article {
                        display: flex;                        
                        flex-direction: column;
                        justify-content: center;
                        text-align: center;                        
                        font-family: 'Oswald';
                        width: 100%;
                        color #BEBEBE;
                    }
                    article h1{
                        color: #FFF;
                    }
                    
                    p {
                        font-size: 16px;
                        margin: 10px 0;
                    }                
                                    
                    .quote-title::before,
                    .quote-title::after {
                        content: '';
                        display: block;
                        border: 1px solid #33B59A;                    
                    }
                    
                    .quote-title {
                        margin: 30px 0;
                        display: flex;
                        align-items: center;
                        color: #FFFFFF;
                        padding: 20px 0 20px 0;
                    }
                    
                    .quote-title::before,
                    .quote-title::after {
                        flex-grow: 1;
                        margin: 0 20px;
                    }               

                    .spacer {
                        height: 60px;
                    }
                `}</style>
            </div>

        )
    }
};