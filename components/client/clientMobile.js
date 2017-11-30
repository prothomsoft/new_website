import React, { Component } from 'react';
import styled from 'styled-components'
import LazyLoad from 'react-lazy-load';
import Link from 'next/link'
import MyLinkClientAreaOthers from '../menu/myLinkClientAreaOthers'
import MyLinkClientAreaMobile from '../menu/myLinkClientAreaMobile'

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
    this.showClientArea = this.showClientArea.bind(this);
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

  showClientArea() {        
    window.open('http://sk.99foto.pl', '_blank');
  }
  
  render() {

    return (
        <div>
            <article>
                <header>
                    <h1 className="quote-title">STREFA KLIENTA</h1>
                </header>
                <Link href="#"><div className="porfolioImage"><MyLinkClientAreaMobile onCustomClick={this.showClientArea} src="/static/portfolio/hotel_qubus_krakow_sesja_zdjeciowa_portfolio.jpg"></MyLinkClientAreaMobile></div></Link>
                <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>SESJA ZDJĘCIOWA LAWENDOWE POLE<br/>EWELINA i KAMIL</p></div></Link>
                <Link href="#"><div className="porfolioImage"><MyLinkClientAreaMobile onCustomClick={this.showClientArea} src="/static/portfolio/sala_weselna_nedan_pcim_reportaz_slubny_portfolio.jpg"></MyLinkClientAreaMobile></div></Link>
                <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>REPORTAŻ ŚLUBNY JORDANÓW<br/>ANNA i KRZYSZTOF</p></div></Link>
                <Link href="#"><div className="porfolioImage"><MyLinkClientAreaMobile onCustomClick={this.showClientArea} src="/static/portfolio/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_portfolio.jpg"></MyLinkClientAreaMobile></div></Link>                    
                <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>WESELE W GÓRALSKIM KLIMACIE<br/>IWONA i MARCIN</p></div></Link>

                <Link href="#"><div className="porfolioImage"><MyLinkClientAreaMobile onCustomClick={this.showClientArea} src="/static/portfolio/wesele_na_polu_golfowym_w_paczoltowicach_portfolio.jpg"></MyLinkClientAreaMobile></div></Link>
                <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>WESELE NA POLU GOLFOWYM<br/>JOANNA i GRZEGORZ</p></div></Link>
                <Link href="#"><div className="porfolioImage"><MyLinkClientAreaMobile onCustomClick={this.showClientArea} src="/static/portfolio/dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_portfolio.jpg"></MyLinkClientAreaMobile></div></Link>
                <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>DEKORACJA SALI W STYLU RUSTYKALNYM<br/>KINGA i MACIEK</p></div></Link>
                <Link href="#"><div className="porfolioImage"><MyLinkClientAreaMobile onCustomClick={this.showClientArea} src="/static/portfolio/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_portfolio.jpg"></MyLinkClientAreaMobile></div></Link>
                <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>SESJA ZDJĘCIOWA SŁOWACKIE GÓRY<br/>IWONA i MARCIN</p></div></Link>

                <Link href="#"><div className="porfolioImage"><MyLinkClientAreaMobile onCustomClick={this.showClientArea} src="/static/portfolio/sesja_zdjeciowa_dwor_tomaszowice_krakow_portfolio.jpg"></MyLinkClientAreaMobile></div></Link>                        
                <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>SESJA ZDJĘCIOWA W KRAKOWIE<br/>KAROLINA i BARTEK</p></div></Link>  
                <Link href="#"><div className="porfolioImage"><MyLinkClientAreaMobile onCustomClick={this.showClientArea} src="/static/portfolio/sesja_slubna_w_plenerze_park_krajobrazowy_w_ojcowie_i_okolice_portfolio.jpg"></MyLinkClientAreaMobile></div></Link>
                <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>PARK KRAJOBRAZOWY W OJCOWIE<br/>ALEKSANDRA i PAWEŁ</p></div></Link>
                <Link href="#"><div className="porfolioImage"><MyLinkClientAreaMobile onCustomClick={this.showClientArea} src="/static/portfolio/monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_portfolio.jpg"></MyLinkClientAreaMobile></div></Link>                    
                <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>RESTAURACJA CHOCHOŁOWY DWÓR<br/>MONIKA i RAFAŁ</p></div></Link>

                <Link href="#"><div className="porfolioImage"><MyLinkClientAreaMobile onCustomClick={this.showClientArea} src="/static/portfolio/sesja_narzeczenska_krakow_portfolio.jpg"></MyLinkClientAreaMobile></div></Link>
                <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>SESJA NARZECZEŃSKA KRAKÓW<br/>KINGA i MACIEK</p></div></Link>
                <Link href="#"><div className="porfolioImage"><MyLinkClientAreaMobile onCustomClick={this.showClientArea} src="/static/portfolio/slub_cywilny_i_wesele_w_plenerze_witkowa_chata_krakow_portfolio.jpg"></MyLinkClientAreaMobile></div></Link>
                <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>ŚLUB CYWILNY i WESELE W PLENERZE<br/>KINGA i JULIEN</p></div></Link>
                <Link href="#"><div className="porfolioImage"><MyLinkClientAreaMobile onCustomClick={this.showClientArea} src="/static/portfolio/dom_weselny_marion_wesele_tarnow_i_zdjecia_slubne_portfolio.jpg"></MyLinkClientAreaMobile></div></Link>
                <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>ZDJĘCIA ŚLUBNE MARION TARNÓW<br/>ANNA i MICHAŁ</p></div></Link>

                <div className="spacer_small"></div>

                <Link href='#'>
                    <MyLinkClientAreaOthers onCustomClick={this.showClientArea} text="LOGOWANIE DO STREFY KLIENTA"></MyLinkClientAreaOthers>                        
                </Link>
                
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