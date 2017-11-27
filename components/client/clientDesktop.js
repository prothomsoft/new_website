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
                        <h1 className="quote-title">POLECANE REPORTAŻE I SESJE ŚLUBNE </h1>
                    </header>
                    <div style={{display: 'flex'}}>                        
                        <Link href='/wesele-na-polu-golfowym-w-paczoltowicach'><div className="porfolioImage"><LazyLoad height={225} offsetVertical={300}><img src={'/static/wesele_na_polu_golfowym_w_paczoltowicach_portfolio.jpg'} /></LazyLoad></div></Link>
                        <Link href='/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada'><div className="porfolioImage"><LazyLoad height={225} offsetVertical={300}><img src={'/static/dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_portfolio.jpg'} /></LazyLoad></div></Link>
                        <Link href='/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja'><div className="porfolioImage"><LazyLoad height={225} offsetVertical={300}><img src={'/static/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_portfolio.jpg'} /></LazyLoad></div></Link>                        
                    </div>
                    <div style={{display: 'flex'}}>
                        <Link href='/wesele-na-polu-golfowym-w-paczoltowicach'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>WESELE NA POLU GOLFOWYM<br/>JOANNA i GRZEGORZ</p></div></Link>
                        <Link href='/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>DEKORACJA SALI W STYLU RUSTYKALNYM<br/>KINGA i MACIEK</p></div></Link>
                        <Link href='/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>SESJA ZDJĘCIOWA SŁOWACKIE GÓRY<br/>IWONA i MARCIN</p></div></Link>
                    </div>
                    <div style={{display: 'flex'}}>
                        <Link href='/hotel-qubus-krakow-sesja-zdjeciowa'><div className="porfolioImage"><LazyLoad height={226} offsetVertical={300}><img src={'/static/hotel_qubus_krakow_sesja_zdjeciowa_portfolio.jpg'} /></LazyLoad></div></Link>
                        <Link href='/sala-weselna-nedan-pcim-reportaz-slubny'><div className="porfolioImage"><LazyLoad height={226} offsetVertical={300}><img src={'/static/sala_weselna_nedan_pcim_reportaz_slubny_portfolio.jpg'} /></LazyLoad></div></Link>
                        <Link href='/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice'><div className="porfolioImage"><LazyLoad height={226} offsetVertical={300}><img src={'/static/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_portfolio.jpg'} /></LazyLoad></div></Link>
                    </div>
                    <div style={{display: 'flex'}}>
                        <Link href='/hotel-qubus-krakow-sesja-zdjeciowa'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>SESJA ZDJĘCIOWA LAWENDOWE POLE<br/>EWELINA i KAMIL</p></div></Link>
                        <Link href='/sala-weselna-nedan-pcim-reportaz-slubny'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>REPORTAŻ ŚLUBNY JORDANÓW<br/>ANNA i KRZYSZTOF</p></div></Link>
                        <Link href='/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>WESELE W GÓRALSKIM KLIMACIE<br/>IWONA i MARCIN</p></div></Link>
                    </div>
                    <div style={{display: 'flex'}}>                        
                        <Link href='/sesja-narzeczenska-krakow'><div className="porfolioImage"><LazyLoad height={225} offsetVertical={300}><img src={'/static/sesja_narzeczenska_krakow_portfolio.jpg'} /></LazyLoad></div></Link>
                        <Link href='/slub-cywilny-i-wesele-w-plenerze-witkowa-chata-krakow'><div className="porfolioImage"><LazyLoad height={225} offsetVertical={300}><img src={'/static/slub_cywilny_i_wesele_w_plenerze_witkowa_chata_krakow_portfolio.jpg'} /></LazyLoad></div></Link>
                        <Link href='/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz'><div className="porfolioImage"><LazyLoad height={225} offsetVertical={300}><img src={'/static/sesja_zdjeciowa_dwor_tomaszowice_krakow_portfolio.jpg'} /></LazyLoad></div></Link>
                    </div>
                    <div style={{display: 'flex'}}>                    
                        <Link href='/sesja-narzeczenska-krakow'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>SESJA NARZECZEŃSKA KRAKÓW<br/>KINGA i MACIEK</p></div></Link>
                        <Link href='/slub-cywilny-i-wesele-w-plenerze-witkowa-chata-krakow'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>ŚLUB CYWILNY i WESELE W PLENERZE<br/>KINGA i JULIEN</p></div></Link>
                        <Link href='/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>SESJA ZDJĘCIOWA W KRAKOWIE<br/>KAROLINA i BARTEK</p></div></Link>                                                
                    </div>
                    <div style={{display: 'flex'}}>                        
                        <Link href='/dom-weselny-marion-wesele-tarnow-i-zdjecia-slubne'><div className="porfolioImage"><LazyLoad height={225} offsetVertical={300}><img src={'/static/dom_weselny_marion_wesele_tarnow_i_zdjecia_slubne_portfolio.jpg'} /></LazyLoad></div></Link>
                        <Link href='/sesja-slubna-w-plenerze-park-krajobrazowy-w-ojcowie-i-okolice'><div className="porfolioImage"><LazyLoad height={225} offsetVertical={300}><img src={'/static/sesja_slubna_w_plenerze_park_krajobrazowy_w_ojcowie_i_okolice_portfolio.jpg'} /></LazyLoad></div></Link>                        
                        <Link href='/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor'><div className="porfolioImage"><LazyLoad height={225} offsetVertical={300}><img src={'/static/monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_portfolio.jpg'} /></LazyLoad></div></Link>                        
                    </div>
                    <div style={{display: 'flex'}}>
                        <Link href='/dom-weselny-marion-wesele-tarnow-i-zdjecia-slubne'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>ZDJĘCIA ŚLUBNE MARION TARNÓW<br/>ANNA i MICHAŁ</p></div></Link>
                        <Link href='/sesja-slubna-w-plenerze-park-krajobrazowy-w-ojcowie-i-okolice'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>PARK KRAJOBRAZOWY W OJCOWIE<br/>ALEKSANDRA i PAWEŁ</p></div></Link>
                        <Link href='/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>RESTAURACJA CHOCHOŁOWY DWÓR<br/>MONIKA i RAFAŁ</p></div></Link>
                    </div>                    
                    <div className="spacer">&nbsp;</div>
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
                    
                    .spacer {
                        height: 40px;
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