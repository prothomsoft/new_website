import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';
import Link from 'next/link'

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
        <div>
          <article>
            <section className="pseudo-elements">
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
                    <h2>&nbsp;</h2>              
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
                    <h2>&nbsp;</h2>                                  
                    </div>
                  </div>
                </div>                  
              </div>
            </section>
          </article>
          <div className="spacer">&nbsp;</div>       
        <style jsx>{`

        section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          margin-top: 20px;
          font-family: 'Oswald';
          height: 280px;
          width: 1140px;
          color #FFF;                    
        }

        blockquote {
          font-size: 14px;
          margin: 5px 0;
        }                
                      
        .quote-title::before,
        .quote-title::after {
          content: '';
          display: block;
          border: 1px solid #666666;                    
        }

        .pseudo-elements::before,
        .pseudo-elements::after {
          content: '';
          display: block;                    
        }

        .quote-title {
          display: flex;
          align-items: center;
          color: #FFFFFF;
        }

        .quote-title::before,
        .quote-title::after {
          flex-grow: 1;
          margin: 0 20px;
        }               

        .pseudo-elements {                    
          box-sizing: border-box;
          padding: 5px;
          border: 5px solid #FF9900;
          position: relative;                    
        }

        .pseudo-elements::before {
          border: none;
          height: 6px;
          width: 380px;
          background: #000;
          position: absolute;
          top:-5px;                    
          left:0;
          right:0;
          margin: auto;
          xbox-shadow: 0 275px 0 #000;
        }

        .pseudo-elements::after {
          border: none;
          height: 0px;
          width: 6px;
          background: #000;
          position: absolute;
          left:-5px;
          top:0;
          bottom:0;
          margin: auto;
          box-shadow: 1135px 0 0 #000;
        }

        .spacer {
          height:20px;
        }

        .header h1 {
          padding: 10 0 0px 0;
          margin :0px;
          text-align: center;
          color: #FFF;                    
        }


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
          xborder-left: 1px solid #666;
          xborder-right: 1px solid #666;
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