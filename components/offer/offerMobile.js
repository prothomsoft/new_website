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
                    <section>                            
                    <h1>KONTAKT I CENA</h1>                            
                        <h2 className="quote-title">REPORTAŻ ŚLUBNY OBEJMUJĄCY</h2>
                        <blockquote>przygotowania, błogosławieństwo</blockquote>
                        <blockquote>ceremonię w kościele lub USC</blockquote>
                        <blockquote>przyjęcie weselne do oczepin włącznie (do godz. 1.00)</blockquote>
                        <blockquote>sesję poślubną w wybranym dniu po ślubie</blockquote>                            
                        <h2 className="quote-title">OTRZYMUJECIE</h2>
                        <blockquote>fotoksiążkę - 120 stron w twardej oprawie, format 30x30cm - około 350 zdjęć</blockquote>
                        <blockquote>450 zdjęć na płycie DVD w etui - wszystkie zdjęcia poddane są starannej obróbce graficznej</blockquote>
                        <blockquote>prezentację zdjęć ślubnych na płycie DVD w etui</blockquote>
                        <blockquote>dojazd w dniu ślubu GRATIS</blockquote>
                        <blockquote>internetową galerię zdjęć w strefie klienta zabezpieczoną hasłem</blockquote>
                        <div className="spacer">&nbsp;</div>
                    </section>
            
                </article>
                <style jsx>{`
                    section {
                        display: flex;                        
                        flex-direction: column;
                        justify-content: center;
                        text-align: center;                        
                        font-family: 'Oswald';
                        width: 100%;
                        color #BEBEBE;
                    }
                    section h1{
                        color: #FFF;
                    }
                    
                    blockquote {
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