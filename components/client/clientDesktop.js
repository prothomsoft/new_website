import React from 'react';
import Link from 'next/link'
import styled from 'styled-components'
import LazyLoad from 'react-lazy-load';

export default class ClientDesktop extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <article>
                    <header>
                        <h1 className="quote-title">GALERIE ZDJĘĆ ZABEZPIECZONE HASŁEM</h1>
                    </header>
                    {this.props.clients.map((client, key) =>
                        <div>
                            <div style={{ display: 'flex' }}>
                                <Link><a href={client.url1} target="_blank"><div className="porfolioImage"><img src={client.image1} /></div></a></Link>
                                <Link><a href={client.url2} target="_blank"><div className="porfolioImage"><img src={client.image2} /></div></a></Link>
                                <Link><a href={client.url3} target="_blank"><div className="porfolioImage"><img src={client.image3} /></div></a></Link>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <Link><a href={client.url1} target="_blank"><div className="porfolioCaption"><p className="textCenter" dangerouslySetInnerHTML={{ __html: client.title1 }} /></div></a></Link>
                                <Link><a href={client.url2} target="_blank"><div className="porfolioCaption"><p className="textCenter" dangerouslySetInnerHTML={{ __html: client.title2 }} /></div></a></Link>
                                <Link><a href={client.url3} target="_blank"><div className="porfolioCaption"><p className="textCenter" dangerouslySetInnerHTML={{ __html: client.title3 }} /></div></a></Link>
                            </div>
                        </div>
                    )}
                    <div className="spacer_small"></div>
                    <Link><a href='http://sk.99foto.pl' className="btn" target="_blank">LOGOWANIE DO STREFY KLIENTA</a></Link>
                    <div className="spacer"></div>
                </article>

                <style jsx>{`

                    .btn {width: 100%}

                    .textCenter {
                        text-align: center;
                    }

                    .porfolioImage {
                        position:relative;                
                        width:340px;
                        margin: 0 20px 0 20px;
                        border: 2px solid transparent;
                        transition: border 0.5s;
                        cursor: pointer;
                    }
            
                    .porfolioImage:hover {
                        border: 2px solid #FFF;                
                    }
        
                    .porfolioImage:focus {
                        outline:none;
                    }
        
                    .porfolioCaption {
                        cursor: pointer;
                        position:relative;                
                        width:340px;
                        margin: 0 20px 0 20px;
                    }
        
                    article {                        
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        text-align: center;                        
                        font-family: 'Oswald';
                        width: 1140px;                
                    }

                    article h1{
                        color: #FFF;
                    }

                    .spacer_small {
                        height: 30px;
                    }
                    
                    .spacer {
                        height: 60px;
                    }
                    
                    p {
                        font-size: 16px;
                        margin: 10px 0;
                        text-align: justify;
                        padding: 0 20px 0 20px;
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
                        margin: 0 20px;
                    }               
                    
                `}</style>
            </div>

        )
    }
};