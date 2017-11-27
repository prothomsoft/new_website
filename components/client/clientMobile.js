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
                <Link href='/wesele-na-polu-golfowym-w-paczoltowicach'><div className="porfolioImage"><LazyLoad offsetVertical={300}><img src={'/static/wesele_na_polu_golfowym_w_paczoltowicach_portfolio.jpg'} /></LazyLoad></div></Link>
                <Link href='/wesele-na-polu-golfowym-w-paczoltowicach'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>WESELE NA POLU GOLFOWYM<br/>JOANNA i GRZEGORZ</p></div></Link>
                <Link href='/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada'><div className="porfolioImage"><LazyLoad offsetVertical={300}><img src={'/static/dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_portfolio.jpg'} /></LazyLoad></div></Link>
                <Link href='/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>DEKORACJA SALI W STYLU RUSTYKALNYM<br/>KINGA i MACIEK</p></div></Link>
                <Link href='/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja'><div className="porfolioImage"><LazyLoad offsetVertical={300}><img src={'/static/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_portfolio.jpg'} /></LazyLoad></div></Link>                      
                <Link href='/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>SESJA ZDJĘCIOWA SŁOWACKIE GÓRY<br/>IWONA i MARCIN</p></div></Link>
                <Link href='/hotel-qubus-krakow-sesja-zdjeciowa'><div className="porfolioImage"><LazyLoad offsetVertical={300}><img src={'/static/hotel_qubus_krakow_sesja_zdjeciowa_portfolio.jpg'} /></LazyLoad></div></Link>
                <Link href='/hotel-qubus-krakow-sesja-zdjeciowa'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>SESJA ZDJĘCIOWA LAWENDOWE POLE<br/>EWELINA i KAMIL</p></div></Link>
                <Link href='/sala-weselna-nedan-pcim-reportaz-slubny'><div className="porfolioImage"><LazyLoad offsetVertical={300}><img src={'/static/sala_weselna_nedan_pcim_reportaz_slubny_portfolio.jpg'} /></LazyLoad></div></Link>
                <Link href='/sala-weselna-nedan-pcim-reportaz-slubny'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>REPORTAŻ ŚLUBNY JORDANÓW<br/>ANNA i KRZYSZTOF</p></div></Link>
                <Link href='/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice'><div className="porfolioImage"><LazyLoad offsetVertical={300}><img src={'/static/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_portfolio.jpg'} /></LazyLoad></div></Link>
                <Link href='/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>WESELE W GÓRALSKIM KLIMACIE<br/>IWONA i MARCIN</p></div></Link>
                <Link href='/sesja-narzeczenska-krakow'><div className="porfolioImage"><LazyLoad offsetVertical={300}><img src={'/static/sesja_narzeczenska_krakow_portfolio.jpg'} /></LazyLoad></div></Link>
                <Link href='/sesja-narzeczenska-krakow'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>SESJA NARZECZEŃSKA KRAKÓW<br/>KINGA i MACIEK</p></div></Link>
                <Link href='/slub-cywilny-i-wesele-w-plenerze-witkowa-chata-krakow'><div className="porfolioImage"><LazyLoad offsetVertical={300}><img src={'/static/slub_cywilny_i_wesele_w_plenerze_witkowa_chata_krakow_portfolio.jpg'} /></LazyLoad></div></Link>
                <Link href='/slub-cywilny-i-wesele-w-plenerze-witkowa-chata-krakow'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>ŚLUB CYWILNY i WESELE W PLENERZE<br/>KINGA i JULIEN</p></div></Link>
                <Link href='/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz'><div className="porfolioImage"><LazyLoad offsetVertical={300}><img src={'/static/sesja_zdjeciowa_dwor_tomaszowice_krakow_portfolio.jpg'} /></LazyLoad></div></Link>
                <Link href='/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>SESJA ZDJĘCIOWA W KRAKOWIE<br/>KAROLINA i BARTEK</p></div></Link>                                                
                <div className="spacer"></div>
            </article>             
        <style jsx>{`

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