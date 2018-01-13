import React, { Component } from 'react';
import styled from 'styled-components'
import LazyLoad from 'react-lazy-load';
import Link from 'next/link'

const CaptionSectionWrapper = styled.div`

    margin: 0 auto;
    width: 1160px; 
    text-align: justify;   
    position: absolute;
    left: 0;
    top: 10%;
    width: 100%;
    text-align: center;

    @media (max-width: 1160px) {
        width: 100%;
        position: absolute;
        left: 0;
        top: 10%;
        width: 100%;
        text-align: center;
    }
`;

export default class PortfolioMobile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            width: '0'
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }

    render() {

        return (
            <div>
                <article>
                    <header>
                        <h1 className="quote-title">STREFA KLIENTA</h1>
                    </header>
                    {this.props.clients.map((client, key) =>
                        <div>
                            <Link><a href={client.url1} target="_blank"><div className="porfolioImage"><img src={client.image1} /></div></a></Link>
                            <Link><a href={client.url1} target="_blank"><div className="porfolioCaption"><p className="textCenter" dangerouslySetInnerHTML={{ __html: client.title1 }} /></div></a></Link>
                            <Link><a href={client.url2} target="_blank"><div className="porfolioImage"><img src={client.image2} /></div></a></Link>
                            <Link><a href={client.url2} target="_blank"><div className="porfolioCaption"><p className="textCenter" dangerouslySetInnerHTML={{ __html: client.title2 }} /></div></a></Link>
                            <Link><a href={client.url3} target="_blank"><div className="porfolioImage"><img src={client.image3} /></div></a></Link>
                            <Link><a href={client.url3} target="_blank"><div className="porfolioCaption"><p className="textCenter" dangerouslySetInnerHTML={{ __html: client.title3 }} /></div></a></Link>
                        </div>
                    )}
                    <div className="spacer_small"></div>
                    <Link><a href='http://sk.99foto.pl' className="btn" target="_blank">LOGOWANIE DO STREFY KLIENTA</a></Link>
                    <div className="spacer"></div>
                </article>
                <style jsx>{`

            .btn {width: 100%}

            .textCenter {
                text-align:center;
            }

            .porfolioImage {                
                cursor: pointer;
            }

            .porfolioCaption {
                cursor: pointer;                
                margin: 0 20px 0 20px;
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

            .spacer_small {
                height: 30px;
            }

            .spacer {
                height: 50px;
            }
            
            p {
                font-size: 16px;
                margin: 10px 0;
                text-align: justify;                
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
        );
    }
}