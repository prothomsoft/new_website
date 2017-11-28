import React from 'react';
import Link from 'next/link'
import MyLinkClientAreaOthers from '../menu/myLinkClientAreaOthers'

import MyLinkClientArea from '../menu/myLinkClientArea'
import styled from 'styled-components'
import LazyLoad from 'react-lazy-load';

export default class ClientDesktop extends React.Component {
    constructor() {
        super();
        this.showClientArea = this.showClientArea.bind(this);
    }

    showClientArea() {        
        window.open('http://sk.99foto.pl', '_blank');
    }

    render() {
        return (
            <div>
                <article>
                    <header>
                        <h1 className="quote-title">GALERIE ZDJĘĆ ZABEZPIECZONE HASŁEM</h1>
                    </header>
                    <div style={{display: 'flex'}}>
                        <Link href="#"><div className="porfolioImage"><MyLinkClientArea onCustomClick={this.showClientArea} src="/static/portfolio_dtp/hotel_qubus_krakow_sesja_zdjeciowa_portfolio.jpg"></MyLinkClientArea></div></Link>
                        <Link href="#"><div className="porfolioImage"><MyLinkClientArea onCustomClick={this.showClientArea} src="/static/portfolio_dtp/sala_weselna_nedan_pcim_reportaz_slubny_portfolio.jpg"></MyLinkClientArea></div></Link>
                        <Link href="#"><div className="porfolioImage"><MyLinkClientArea onCustomClick={this.showClientArea} src="/static/portfolio_dtp/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_portfolio.jpg"></MyLinkClientArea></div></Link>                    
                    </div>
                    <div style={{display: 'flex'}}>
                        <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>SESJA ZDJĘCIOWA LAWENDOWE POLE<br/>EWELINA i KAMIL</p></div></Link>
                        <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>REPORTAŻ ŚLUBNY JORDANÓW<br/>ANNA i KRZYSZTOF</p></div></Link>
                        <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>WESELE W GÓRALSKIM KLIMACIE<br/>IWONA i MARCIN</p></div></Link>
                    </div>
                    <div style={{display: 'flex'}}>                        
                        <Link href="#"><div className="porfolioImage"><MyLinkClientArea onCustomClick={this.showClientArea} src="/static/portfolio_dtp/wesele_na_polu_golfowym_w_paczoltowicach_portfolio.jpg"></MyLinkClientArea></div></Link>
                        <Link href="#"><div className="porfolioImage"><MyLinkClientArea onCustomClick={this.showClientArea} src="/static/portfolio_dtp/dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_portfolio.jpg"></MyLinkClientArea></div></Link>
                        <Link href="#"><div className="porfolioImage"><MyLinkClientArea onCustomClick={this.showClientArea} src="/static/portfolio_dtp/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_portfolio.jpg"></MyLinkClientArea></div></Link>
                    </div>
                    <div style={{display: 'flex'}}>                        
                        <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>WESELE NA POLU GOLFOWYM<br/>JOANNA i GRZEGORZ</p></div></Link>
                        <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>DEKORACJA SALI W STYLU RUSTYKALNYM<br/>KINGA i MACIEK</p></div></Link>
                        <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>SESJA ZDJĘCIOWA SŁOWACKIE GÓRY<br/>IWONA i MARCIN</p></div></Link>
                    </div>                    
                    <div style={{display: 'flex'}}>
                        <Link href="#"><div className="porfolioImage"><MyLinkClientArea onCustomClick={this.showClientArea} src="/static/portfolio_dtp/dom_weselny_marion_wesele_tarnow_i_zdjecia_slubne_portfolio.jpg"></MyLinkClientArea></div></Link>
                        <Link href="#"><div className="porfolioImage"><MyLinkClientArea onCustomClick={this.showClientArea} src="/static/portfolio_dtp/sesja_slubna_w_plenerze_park_krajobrazowy_w_ojcowie_i_okolice_portfolio.jpg"></MyLinkClientArea></div></Link>
                        <Link href="#"><div className="porfolioImage"><MyLinkClientArea onCustomClick={this.showClientArea} src="/static/portfolio_dtp/monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_portfolio.jpg"></MyLinkClientArea></div></Link>                    
                    </div>
                    <div style={{display: 'flex'}}>
                        <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>ZDJĘCIA ŚLUBNE MARION TARNÓW<br/>ANNA i MICHAŁ</p></div></Link>
                        <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>PARK KRAJOBRAZOWY W OJCOWIE<br/>ALEKSANDRA i PAWEŁ</p></div></Link>
                        <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>RESTAURACJA CHOCHOŁOWY DWÓR<br/>MONIKA i RAFAŁ</p></div></Link>
                    </div>
                    <div style={{display: 'flex'}}>                
                        <Link href="#"><div className="porfolioImage"><MyLinkClientArea onCustomClick={this.showClientArea} src="/static/portfolio_dtp/sesja_narzeczenska_krakow_portfolio.jpg"></MyLinkClientArea></div></Link>
                        <Link href="#"><div className="porfolioImage"><MyLinkClientArea onCustomClick={this.showClientArea} src="/static/portfolio_dtp/slub_cywilny_i_wesele_w_plenerze_witkowa_chata_krakow_portfolio.jpg"></MyLinkClientArea></div></Link>
                        <Link href="#"><div className="porfolioImage"><MyLinkClientArea onCustomClick={this.showClientArea} src="/static/portfolio_dtp/sesja_zdjeciowa_dwor_tomaszowice_krakow_portfolio.jpg"></MyLinkClientArea></div></Link>                        
                    </div>
                    <div style={{display: 'flex'}}>                    
                        <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>SESJA NARZECZEŃSKA KRAKÓW<br/>KINGA i MACIEK</p></div></Link>
                        <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>ŚLUB CYWILNY i WESELE W PLENERZE<br/>KINGA i JULIEN</p></div></Link>
                        <Link href='#'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>SESJA ZDJĘCIOWA W KRAKOWIE<br/>KAROLINA i BARTEK</p></div></Link>                                                
                    </div>

                    <div className="spacer_small"></div>

                    <Link href='#'>
                        <MyLinkClientAreaOthers onCustomClick={this.showClientArea} text="KLIKNIJ I WEJDŹ DO STREFY KLIENTA"></MyLinkClientAreaOthers>                        
                    </Link>
                                        
                    <div className="spacer"></div>
                </article>
                
                <style jsx>{`

                    .porfolioImage {
                        position:relative;                
                        width:420px;
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
                        width:420px;
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