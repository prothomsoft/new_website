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
`

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
                    <h1 className="quote-title"> FOTOGRAF ŚLUBNY KRAKÓW </h1>
                </header>                
                <p>Zaczynając studia grałem na gitarze elektrycznej i planowałem zostać inżynierem dźwięku. Rynek pracy zweryfikował te plany i w ten oto sposób zostałem zawodowym programistą. Kilka lat temu pomyślałem, że aby być szczęśliwym człowiekiem nie tylko w domu ale i w pracy, muszę odpowiedzieć sobie na pytanie co lubię w życiu robić i zacząć to robić. W ten oto prosty sposób narodziła się moja pasja do fotografowania. Mam na imię Tomek i jako fotograf ślubny chciałbym móc moimi zdjęciami opowiedzieć Waszą historię ślubną.</p>
                <p>Serdecznie zapraszam do odwiedzenia <Link href='/blog'><a>mojego bloga</a></Link> i obejrzenia pełnych reportaży ślubnych, sesji zdjęciowych, zdjęć pełnych kolorów i autentycznych emocji. Oglądając moje prace sami ocenicie czy moje zdjęcia się Wam spodobają. Fotografuję w Krakowie i bliskich okolicach. Wspólnie znajdźmy chwilę, światło, kadr, zachowajmy je na zawsze.</p>                
                <div className="spacer_small"></div>
            </article>
            <article>
                <header>
                    <h2 className="quote-title">POLECANE REPORTAŻE</h2>
                </header>
                <Link href='/wesele-na-polu-golfowym-w-paczoltowicach'><div className="porfolioImage"><LazyLoad offsetVertical={300}><img alt='fotograf ślubny kraków' src={'/static/portfolio/wesele_na_polu_golfowym_w_paczoltowicach_portfolio.jpg'} /></LazyLoad></div></Link>
                <Link href='/wesele-na-polu-golfowym-w-paczoltowicach'><div className="porfolioCaption"><h4 style={{textAlign: 'center'}}> FOTOGRAF ŚLUBNY KRAKÓW <br/>JOANNA i GRZEGORZ</h4></div></Link>                
                <Link href='/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada'><div className="porfolioImage"><LazyLoad offsetVertical={300}><img alt='dekoracja sali w stylu rustykalnym' src={'/static/portfolio/dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_portfolio.jpg'} /></LazyLoad></div></Link>
                <Link href='/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>DEKORACJA SALI W STYLU RUSTYKALNYM<br/> KINGA i MACIEK</p></div></Link>
                <Link href='/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja'><div className="porfolioImage"><LazyLoad offsetVertical={300}><img alt='sesja zdjęciowa w górach' src={'/static/portfolio/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_portfolio.jpg'} /></LazyLoad></div></Link>                      
                <Link href='/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>SESJA ZDJĘCIOWA W GÓRACH<br/> IWONA i MARCIN</p></div></Link>                
                <Link href='/hotel-qubus-krakow-sesja-zdjeciowa'><div className="porfolioImage"><LazyLoad offsetVertical={300}><img alt='sesja ślubna lawendowe pole' src={'/static/portfolio/hotel_qubus_krakow_sesja_zdjeciowa_portfolio.jpg'} /></LazyLoad></div></Link>
                <Link href='/hotel-qubus-krakow-sesja-zdjeciowa'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>SESJA ŚLUBNA LAWENDOWE POLE<br/> EWELINA i KAMIL</p></div></Link>
                <Link href='/sala-weselna-nedan-pcim-reportaz-slubny'><div className="porfolioImage"><LazyLoad offsetVertical={300}><img alt='reportaż ślubny jordanów' src={'/static/portfolio/sala_weselna_nedan_pcim_reportaz_slubny_portfolio.jpg'} /></LazyLoad></div></Link>
                <Link href='/sala-weselna-nedan-pcim-reportaz-slubny'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>REPORTAŻ ŚLUBNY JORDANÓW<br/> ANNA i KRZYSZTOF</p></div></Link>
                <Link href='/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice'><div className="porfolioImage"><LazyLoad offsetVertical={300}><img alt='wesele w góralskim klimacie' src={'/static/portfolio/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_portfolio.jpg'} /></LazyLoad></div></Link>
                <Link href='/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>WESELE W GÓRALSKIM KLIMACIE<br/> IWONA i MARCIN</p></div></Link>
                <Link href='/sesja-narzeczenska-krakow'><div className="porfolioImage"><LazyLoad offsetVertical={300}><img alt='sesja narzeczeńska kraków' src={'/static/portfolio/sesja_narzeczenska_krakow_portfolio.jpg'} /></LazyLoad></div></Link>
                <Link href='/sesja-narzeczenska-krakow'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>SESJA NARZECZEŃSKA KRAKÓW<br/>KINGA i MACIEK</p></div></Link>
                <Link href='/slub-cywilny-i-wesele-w-plenerze-witkowa-chata-krakow'><div className="porfolioImage"><LazyLoad offsetVertical={300}><img alt='fotograf ślubny Kraków' src={'/static/portfolio/slub_cywilny_i_wesele_w_plenerze_witkowa_chata_krakow_portfolio.jpg'} /></LazyLoad></div></Link>
                <Link href='/slub-cywilny-i-wesele-w-plenerze-witkowa-chata-krakow'><div className="porfolioCaption"><h3 style={{textAlign: 'center'}}> FOTOGRAF ŚLUBNY KRAKÓW <br/>KINGA i JULIEN</h3></div></Link>
                <Link href='/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz'><div className="porfolioImage"><LazyLoad offsetVertical={300}><img alt='sesja zdjęciowa w Krakowie' src={'/static/portfolio/sesja_zdjeciowa_dwor_tomaszowice_krakow_portfolio.jpg'} /></LazyLoad></div></Link>
                <Link href='/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz'><div className="porfolioCaption"><p style={{textAlign: 'center'}}>SESJA ZDJĘCIOWA W KRAKOWIE<br/> KAROLINA i BARTEK</p></div></Link>                                                
            </article>
            
        <style jsx>{`

            .porfolioImage {                
                cursor: pointer;
            }

            .porfolioCaption {
                cursor: pointer;                
                margin: 0 20px 0 20px;
            }

            .porfolioCaption h3 {
                font-family:Oswald;
                font-style:normal;
                font-weight:normal;
                line-height:1.4;  
                text-rendering: optimizelegibility;
                font-size: 16px;  
                padding: 0 20px 0 20px;              
                margin: 10px 0;
            }

            .porfolioCaption h4 {
                font-family:Oswald;
                font-style:normal;
                font-weight:normal;
                line-height:1.4;  
                text-rendering: optimizelegibility;
                font-size: 16px;  
                padding: 0 20px 0 20px;              
                margin: 10px 0;
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
            article h1 {                
                font-size: 1.5em;                
            }            
            article h2 {                
                font-size: 1.5em;                
            }            

            .spacer {
                height: 50px;
            }

            .spacer_small {
                height: 10px;
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