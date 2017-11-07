import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';
import Link from 'next/link'
import InstagramEmbed from 'react-instagram-embed'

export default class FooterDesktop extends Component {

  constructor(props) {
    super(props)
    this.state = {
        width: '0'
    }    
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);    
  }

  updateWindowDimensions() {  
    this.setState({ width: window.innerWidth });
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);    
  }

  componentWillUnmount() {        
      window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  render() {

    let heightFooterLogo = null
    
    if(this.state.width < 1160) {
      heightFooterLogo = 0
    } else {
      heightFooterLogo = 100
    }

    return (
      <div className="footerContainer">
        <div className="footer">
          <div className="box frame">
            <div className="tableHelper">
              <div className="cellHelper">
              <h1>KONTAKT</h1>
              <h2>663 275 222</h2>
              <h2>
              <Link href='mailto:tomasz@99foto.pl'>
                                    <a>TOMASZ@99FOTO.PL</a>
                                </Link>
                
                </h2>              
              </div>
            </div>
          </div>
          <div className="boxCenter frame">
          <div className="tableHelper">
              <div className="cellHelper"><center>
                <LazyLoad width={120} offsetVertical={300}><img src={'/static/99foto_logo.svg'} /></LazyLoad>
                </center>
              </div>
            </div>
          </div>
          <div className="box frame">
          <div className="tableHelper">
              <div className="cellHelper">
              <h1>OBSERWUJ MNIE</h1>
              <h2>INSTAGRAM</h2>
              <h2>FACEBOOK</h2>              
              </div>
            </div>
          </div>                  
        </div>

        <div className="spacer"></div>

        <div className="instagram">
        
        </div>

        <div className="spacer"></div>

        <div className="center white">
          &copy; 2017 <Link href='/'><a target="_blank">99FOTO.PL</a></Link> | <Link href='/fotografia-slubna-krakow'><a target="_blank">Fotografia ślubna Kraków</a></Link> | <Link href='/sesja-zdjeciowa-krakow'><a target="_blank">Sesja zdjęciowa Kraków</a></Link>
        </div>

        <div className="spacer"></div>

        

        <div className="center">
          <Link href='/kontakt'><a className="btn">Zapytaj o cenę i datę</a></Link>
        </div>

        

        
        <style jsx>{`

        .white {
          color: #FFF;
        }

        .center {
          text-align: center;
        }

        h1, h2 {
          color #FFF;
        }

        .footerContainer {          
          padding: 10px 0 40px 0;
        }

        .footer {          
          text-align: center;
          height:210px;                              
        }

        .boxCenter {
          width:34%;
          border-left: 1px solid #BEBEBE;
          border-right: 1px solid #BEBEBE;
        }

        .box {          
          width:33%;
          height:210px;
          float: left;
          text-align: center;
        }

        .frame {          
          height:210px;
          float: left;
          text-align: center;
        }

        .center {
          text-align: center;
        }

        .spacer {
          height: 30px;
        }

        .instagram {
          height: 230px;
          border: 1px solid #BEBEBE;
        }
             
        `}</style>
      </div>
    );
  }
}

function getProperLazyLoad(imgSrc, height) {
  if(height === 0) {
    return <LazyLoad offsetVertical={300}><img src={imgSrc} /></LazyLoad>
  } else {
    return <LazyLoad width={130} height={200} offsetVertical={300}><img src={imgSrc} /></LazyLoad>
  }  
}