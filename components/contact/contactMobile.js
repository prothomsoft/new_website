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
                    <div className="spacer"></div>
                    <div>
                    <p>TOMASZ PROKOP - FOTOGRAF ŚLUBNY KRAKÓW</p>
                    <p>TELEFON: <Link href='tel:+48663275222'><a>663 275 222</a></Link></p>
                    <p>EMAIL: <Link href='mailto:tomasz@99foto.pl'><a>TOMASZ@99FOTO.PL</a></Link></p>                                            
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
                    height: 750px;
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