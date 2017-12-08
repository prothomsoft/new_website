import React from 'react';
import styled from 'styled-components'
import Link from 'next/link'
import Fetch from 'isomorphic-unfetch'

export default class ContactMobile extends React.Component {
    constructor() {
        super();

        this.state = {
            sender: '',
            senderUsed: 'form-input',
            email: '',
            emailUsed: 'form-input',
            message: '',
            messageUsed: 'form-input',            
            messageSent: false
        }        
    }

    handleChange = (e) => {
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    };

    handleBlur = (e) => {
        if (e.target.name === 'sender') {
            e.target.value === '' ? this.setState({ senderUsed: 'form-input' }) : this.setState({ senderUsed: 'form-input used' });
        }
        if (e.target.name === 'email') {
            e.target.value === '' ? this.setState({ emailUsed: 'form-input' }) : this.setState({ emailUsed: 'form-input used' });
        }
        if (e.target.name === 'message') {
            e.target.value === '' ? this.setState({ messageUsed: 'form-input' }) : this.setState({ messageUsed: 'form-input used' });
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();

        let formData = {
            formSender: this.state.sender,
            formEmail: this.state.email,
            formMessage: this.state.message
        }

        if (formData.formSender.length < 1 || formData.formEmail.length < 1 || formData.formMessage.length < 1) {
            return false;
        }
        
        var esc = encodeURIComponent;
        var query = Object.keys(formData)
            .map(k => esc(k) + '=' + esc(formData[k]))
            .join('&');
        
        var sUrlWithParams = "http://prothomsoft.com/test.php" + "?" + query;
        Fetch(sUrlWithParams, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });

        this.setState({ sender: '',
            senderUsed: 'form-input',
            email: '',
            emailUsed: 'form-input',
            message: '',
            messageUsed: 'form-input',            
            messageSent: true 
        });
    };

    render() {
        let displayFormConfirmation = ''
        let displayForm = ''       

        if(this.state.messageSent) { 
            displayFormConfirmation = 'block'
            displayForm = 'none'
        } else {
            displayFormConfirmation = 'none'
            displayForm = 'block'
        }

        return (
            <article>
                    <header>
                       <h2>KONTAKT</h2> 
                    </header>            

                    <div style={{display: `${displayFormConfirmation}`}}>
                        <p>TWOJA WIADOMOŚĆ ZOSTAŁA WYSŁANA.</p>
                        <p>DZIĘKUJĘ ZA PYTANIE. ODPOWIEM BARDZO SZYBKO.</p>                        
                    </div>                    

                    <div style={{display: `${displayForm}`}}>
                    <p>ZAINTERESOWAŁA CIĘ MOJA OFERTA, CHCESZ POZNAĆ DOSTĘPNOŚĆ TERMINU I ZAPYTAĆ O CENĘ PAKIETU?</p>
                    <p>WYPEŁNIJ PROSZĘ PONIŻSZY FORMULARZ KONTAKTOWY I WYŚLIJ WIADOMOŚĆ</p>                            
                    <div className="spacer"></div>

                    <form className='react-form' onSubmit={this.handleSubmit}>

                        <div className="group">
                            <input id='formSender' className={this.state.senderUsed} name='sender' type='text' required onChange={this.handleChange} onBlur={this.handleBlur} value={this.state.sender} />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Twoje imię i nazwisko</label>
                        </div>

                        <div className="group">
                            <input id='formEmail' className={this.state.emailUsed} name='email' type='text' pattern="[a-zA-Z0-9_]+(?:\.[A-Za-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?!([a-zA-Z0-9]*\.[a-zA-Z0-9]*\.[a-zA-Z0-9]*\.))(?:[A-Za-z0-9](?:[a-zA-Z0-9-]*[A-Za-z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?" required onChange={this.handleChange} onBlur={this.handleBlur} value={this.state.email} />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Twój adres e-mail</label>
                        </div>

                        <div className="group">
                            <textarea id='formMessage' className={this.state.messageUsed} name='message' required onChange={this.handleChange} onBlur={this.handleBlur} value={this.state.message} />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Twoja wiadomość</label>
                        </div>

                        <div className="submitPad">
                            <input type="submit" value="WYŚLIJ WIADOMOŚĆ" />
                        </div>    

                    </form>
                    </div>
                    <div className="spacer_large"></div>
                    <div>
                        <p>TOMASZ PROKOP - <Link href='http://99foto.pl'><a alt="Fotograf ślubny Kraków">FOTOGRAF ŚLUBNY KRAKÓW</a></Link></p>
                        <p>TELEFON: <Link href='tel:+48663275222'><a>663 275 222</a></Link></p>
                        <p>EMAIL: <Link href='mailto:tomasz@99foto.pl'><a>TOMASZ@99FOTO.PL</a></Link></p>
                        <div className="spacer_small"></div>
                        <p>OBSERWUJ MNIE:</p>
                        <p><Link href='https://www.instagram.com/99foto.pl'><a target="_blank" alt="Obserwuj mnie na Instagram"><svg width="46px" height="30px" viewBox="0 0 21 20"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="modules/footer" fill="white"><path d="M10.5940426,1.78066298 C13.2985325,1.78066298 13.6226661,1.79055556 14.6862295,1.8380399 C15.3295933,1.84491822 15.9669305,1.96003797 16.5702562,2.17834438 C17.0091157,2.33914687 17.40668,2.5916962 17.7351114,2.91830878 C18.0691378,3.23977595 18.3282565,3.62781058 18.4947996,4.05595457 C18.714576,4.64502829 18.8310075,5.26609577 18.8391915,5.89300522 C18.8898374,6.93667158 18.8999666,7.24927686 18.8999666,9.89059362 C18.8999666,12.5319104 18.8898374,12.8445157 18.8391915,13.888182 C18.8310075,14.5150915 18.714576,15.1361589 18.4947996,15.7252327 C18.3282565,16.1533767 18.0691378,16.5414113 17.7351114,16.8628785 C17.40668,17.189491 17.0091157,17.4420404 16.5702562,17.6028428 C15.9669305,17.8211493 15.3295933,17.936269 14.6862295,17.9431473 C13.6226661,17.9906317 13.2985325,18.0005242 10.5940426,18.0005242 C7.88955274,18.0005242 7.56541912,17.9906317 6.50185569,17.9431473 C5.85849189,17.936269 5.22115477,17.8211493 4.61782903,17.6028428 C4.17896952,17.4420404 3.78140525,17.189491 3.45297384,16.8628785 C3.11894746,16.5414113 2.85982875,16.1533767 2.69328567,15.7252327 C2.47350927,15.1361589 2.35707772,14.5150915 2.34889371,13.888182 C2.29824783,12.8445157 2.28811865,12.5319104 2.28811865,9.89059362 C2.28811865,7.24927686 2.29824783,6.93667158 2.34889371,5.89300522 C2.35707772,5.26609577 2.47350927,4.64502829 2.69328567,4.05595457 C2.85982875,3.62781058 3.11894746,3.23977595 3.45297384,2.91830878 C3.78140525,2.5916962 4.17896952,2.33914687 4.61782903,2.17834438 C5.22115477,1.96003797 5.85849189,1.84491822 6.50185569,1.8380399 C7.56541912,1.79055556 7.88955274,1.78066298 10.5940426,1.78066298 L10.5940426,1.78066298 Z M10.5940426,2.24931048e-13 C7.83890686,2.24931048e-13 7.49451489,0.0118710866 6.42082228,0.0593554328 C5.57966755,0.0760232403 4.74746168,0.231552672 3.95943262,0.519360037 C3.28298896,0.765769239 2.67073882,1.15528054 2.16656854,1.6599736 C1.64940049,2.15418052 1.24847362,2.75232489 0.99158418,3.41293738 C0.702946526,4.18299457 0.545544529,4.99406265 0.525642104,5.81386464 C0.474996226,6.86940209 0.464867051,7.20574954 0.464867051,9.89257213 C0.464867051,12.5793947 0.474996226,12.9157422 0.525642104,13.9712796 C0.545544529,14.7910816 0.702946526,15.6021497 0.99158418,16.3722069 C1.24847362,17.0328194 1.64940049,17.6309637 2.16656854,18.1251707 C2.67073882,18.6298637 3.28298896,19.019375 3.95943262,19.2657842 C4.74746168,19.5535916 5.57966755,19.709121 6.42082228,19.7257888 C7.49451489,19.7732732 7.83890686,19.7851443 10.5940426,19.7851443 C13.3491784,19.7851443 13.6935703,19.7732732 14.7672629,19.7257888 C15.6084177,19.709121 16.4406236,19.5535916 17.2286526,19.2657842 C17.9050963,19.019375 18.5173464,18.6298637 19.0215167,18.1251707 C19.5390954,17.6332403 19.9371447,17.0342251 20.1863719,16.3722069 C20.4838589,15.6042035 20.6448638,14.7922223 20.6624431,13.9712796 C20.713089,12.9157422 20.7232182,12.5793947 20.7232182,9.89257213 C20.7232182,7.20574954 20.713089,6.86940209 20.6624431,5.81386464 C20.6448638,4.99292201 20.4838589,4.18094073 20.1863719,3.41293738 C19.9371447,2.75091913 19.5390954,2.15190398 19.0215167,1.6599736 C18.5173464,1.15528054 17.9050963,0.765769239 17.2286526,0.519360037 C16.4406236,0.231552672 15.6084177,0.0760232403 14.7672629,0.0593554328 C13.6935703,0.0118710866 13.3491784,0 10.5940426,0 L10.5940426,2.24931048e-13 Z M10.5940426,4.81273634 C7.7220874,4.81546747 5.3959128,7.09099537 5.39777664,9.89586644 C5.39964049,12.7007375 7.72883733,14.9733147 10.6007938,14.9724052 C13.4727502,14.9714958 15.8004375,12.6974438 15.8004389,9.89257213 C15.7999017,8.54461966 15.2510381,7.25209871 14.2746203,6.29941624 C13.2982024,5.34673377 11.9742343,4.81194904 10.5940426,4.81273634 L10.5940426,4.81273634 Z M10.5940426,13.1897664 C9.22828029,13.190967 7.99631611,12.3883931 7.47280947,11.1564115 C6.94930284,9.92442996 7.23739316,8.50576141 8.20269843,7.562155 C9.1680037,6.61854858 10.6203429,6.33591026 11.882261,6.84607891 C13.1441791,7.35624756 13.9670575,8.55871157 13.9670581,9.89257213 C13.9675955,10.7666891 13.6124948,11.6051985 12.9799026,12.2235709 C12.3473104,12.8419432 11.4890662,13.1895042 10.5940426,13.1897664 Z M17.2185234,4.61191713 C17.2185234,5.26753913 16.6743251,5.79902578 16.0030224,5.79902578 C15.3317197,5.79902578 14.7875213,5.26753913 14.7875213,4.61191713 C14.7875213,3.95629512 15.3317197,3.42480847 16.0030224,3.42480847 C16.6743251,3.42480847 17.2185234,3.95629512 17.2185234,4.61191713 Z"></path></g></g></svg></a></Link>
                        <Link href='https://facebook.com/99foto'><a target="_blank" alt="Obserwuj mnie na Facebook"><svg width="31px" height="30px" viewBox="0 0 11 20"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill-rule="nonzero" fill="white"><path d="M6.99704718,20 L6.99704718,10.8737864 L10.0582986,10.8737864 L10.5170453,7.3168579 L6.99704718,7.3168579 L6.99704718,5.04854369 C6.99704718,4.01588703 7.27935279,3.31862312 8.76145724,3.31862312 L10.640554,3.31862312 L10.640554,0.141218005 C10.3141381,0.0970873786 9.19373771,0 7.89689631,0 C5.17970482,0 3.32707426,1.65931156 3.32707426,4.69549868 L3.32707426,7.3168579 L0.257000758,7.3168579 L0.257000758,10.8737864 L3.32707426,10.8737864 L3.32707426,20 L6.99704718,20 L6.99704718,20 Z"></path></g></g></svg></a></Link></p>
                    </div>
                    <div className="spacer"></div>
                
            <style jsx>{`

                .submitPad {
                    text-align: left;
                    padding: 20p 0 30px 0;
                }

                article {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;                    
                    font-family: 'Oswald';                    
                    width: 100%;
                    height: 790px;
                    color #FFF;
                    padding:40px;                    
                }

                p {
                    font-size: 16px;
                    margin: 5px 0;
                }                
                                
                .quote-title::before,
                .quote-title::after {
                    content: '';
                    display: block;
                    border: 1px solid #666666;                    
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
                
                .spacer {
                    height: 40px;
                }

                .spacer_small {
                    height: 20px;
                }

                .spacer_large {
                    height: 60px;
                }

                .header h1 {
                    padding: 10 0 0px 0;
                    margin :0px;
                    text-align: center;
                    color: #FFF;                    
                }


                .group { 
                    position:relative; 
                    margin-bottom:35px; 
                }

                label 				{
                  color:#FFF; 
                  font-size:16px;
                  font-weight:normal;
                  position:absolute;
                  pointer-events:none;
                  left:5px;
                  top:10px;
                  transition:0.2s ease all;
                }

                input[type=submit] {
                    position:relative;
                    vertical-align: middle;
                    color: #FFF;
                    display: inline-block;
                    height: 60px;
                    line-height: 40px;
                    text-align: center;
                    transition: 0.5s;
                    padding: 0 20px;
                    cursor: pointer;
                    border: 2px solid #FFF;
                    -webkit-transition:0.5s;
					-moz-transition:0.5s;
					-o-transition:0.5s;
					-ms-transition:0.5s;
                    font-family: 'Oswald';
                    background-color: #000;
                    width:100%;
                    font-size: 16px;
                  }

                  input[type=submit]:hover {
                    border: 2px solid #FFF;
                    background-color: #FFF;
                    color: #000;
                  }

                input[type=text] {
                    font-size:13px;
                    padding:10px 10px 10px 5px;
                    display:block;
                    width:100%;
                    border:none;
                    border-bottom:1px solid #757575;
                    background-color: #000;
                    color: #FFF;
                }
                input[type=text]:focus 		{ outline:none; }

                input[type=text] {                    
                    box-shadow:none;
                }
                
                input[type=text]:-moz-placeholder {
                    box-shadow:none !important;
                }
                                
                input[type=text]:valid { border-bottom: 1px solid #30A990;}

                textarea 				{
                    font-size:13px;
                    padding:10px 10px 10px 5px;
                    display:block;
                    width:100%;
                    border:none;
                    border-bottom:1px solid #757575;
                    background-color: #000;
                    color: #FFF;
                    line-height:1.42857;
                    font-family:Arial,Helvetica,sans-serif;
                    height:80px;
                }
                textarea:focus 		{ outline:none; }
                                
                textarea:valid { border-bottom: 1px solid #30A990;}

                textarea {                    
                    box-shadow:none;
                }
                
                textarea:-moz-placeholder {
                    box-shadow:none !important;
                }

                .bar 	{ position:relative; display:block; width:100%; }
                .bar:before, .bar:after 	{
                  content:'';
                  height:2px;
                  width:0;
                  bottom:1px; 
                  position:absolute;
                  background:#0DC0F5; 
                  transition:0.2s ease all;
                }
                .bar:before {
                  left:50%;
                }
                .bar:after {
                  right:50%; 
                }
                
                input[type=text]:valid ~ .bar:before, input[type=text]:valid ~ .bar:after{
                  background: #30A990 !important;
                }

                textarea:valid ~ .bar:before, textarea:valid ~ .bar:after{
                    background: #30A990 !important;
                }
                
                .highlight {
                  position:absolute;
                  height:60%; 
                  width:100px; 
                  top:25%; 
                  left:0;
                  pointer-events:none;
                  transition:0.2s ease all;
                  opacity:0.5;
                }
                                
                input[type=text]:focus ~ label, input[type=text].used ~ label 		{
                  top:-20px;
                  font-size:14px;
                  color:#FFF;
                }
                
                
                input[type=text]:valid ~ label , input[type=text]:valid.used ~ label{
                  color: #30A990;
                }
                
                input[type=text]:focus ~ .bar:before {
                  width:50%;
                }
                input[type=text]:focus ~ .bar:after {
                  width:50%;
                }
                
                input[type=text]:focus ~ .highlight {
                  -webkit-animation:inputHighlighter 0.3s ease;
                }
                
                input[type=text]:valid ~ .hightlight {
                    -webkit-animation:validHighlighter 0.3s ease;
                }


                textarea:focus ~ label, textarea.used ~ label 		{
                    top:-20px;
                    font-size:14px;
                    color:#FFF;
                }
                
                
                textarea:valid ~ label , textarea:valid.used ~ label{
                color: #30A990;
                }
                
                textarea:focus ~ .bar:before {
                width:50%;
                }
                textarea:focus ~ .bar:after {
                width:50%;
                }
                
                textarea:focus ~ .highlight {
                -webkit-animation:inputHighlighter 0.3s ease;
                }
                
                textarea:valid ~ .hightlight {
                    -webkit-animation:validHighlighter 0.3s ease;
                }
                                
                @-webkit-keyframes inputHighlighter {
                    from { background:#5264AE; }
                  to 	{ width:0; background:transparent; }
                }
                
                @-webkit-keyframes validHighlighter {
                    from { background:#30A990 !important; }
                  to 	{ width:0; background:transparent; }
                }
                
            `}</style>
            </article>

        )
    }
};