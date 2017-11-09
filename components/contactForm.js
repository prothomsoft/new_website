import React from 'react';
import styled from 'styled-components'
import Link from 'next/link'
import Fetch from 'isomorphic-unfetch'


const SectionWrapper = styled.div`
img {
    max-width: 100%;
    height: auto;
}

margin: 0 auto;
width: 1160px; 
text-align: justify;   
padding: 20px 10px 0px 10px;    

.LazyLoad {
    opacity: 0;
    transition: all 1s ease-in-out;

    &.is-visible {
        opacity: 1;
    }
}
@media (max-width: 1160px) {
    width: 100%;
}
`;

export default class ContactForm extends React.Component {
    constructor() {
        super();

        this.state = {
            sender: '',
            senderUsed: 'form-input',
            email: '',
            emailUsed: 'form-input',
            message: '',
            messageUsed: 'form-input',
            type: null
        }
        this.showFixedMobileMenu = this.showFixedMobileMenu.bind(this);
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

    showFixedMobileMenu(e) {
        e.onSubmit
        alert("123");
    }

    handleSubmit = (e, message) => {
        e.preventDefault();

        let formData = {

            formSender: this.state.sender,
            formEmail: this.state.email,
            formMessage: this.state.message
        }

        if (formData.formSender.length < 1 || formData.formEmail.length < 1 || formData.formMessage.length < 1) {
            return false;
        }

        console.log(formData);

        var payload = {
            email: 'foo',
            pass: 'bar',
            option: 'dupa'
        };
        
        var data = new FormData();
        data.append( "json", JSON.stringify( payload ) );
        

        Fetch("http://prothomsoft.com/test.php", {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },            
            body: data
        }).then(response => console.log(response))

        /*$.ajax({
          url: '/some/url',
          dataType: 'json',
          type: 'POST',
          data: formData,
          success: function(data) {
            if (confirm('Thank you for your message. Can I erase the form?')) {
              document.querySelector('.form-input').val('');
            }
          },
          error: function(xhr, status, err) {
            console.error(status, err.toString());
            alert('There was some problem with sending your message.');
          }
        });*/

        /*this.setState({
            sender: '',
            email: '',            
            message: ''
        });*/
    };



    render() {
        return (
            <SectionWrapper>
                <div style={{ color: '#FFF', height: '130px', width: '400px', textAlign: 'left' }}>Cena usługi (zdjęcia ślubne, narzeczeńskie, rodzinne, portretowe) zależy m.in. od miejsca i daty wydarzenia. Dlatego aby ją ustalić potrzebuję kilku danych z poniższego formularza. Odpisuję najczęściej do kilku godzin, często po paru minutach.</div>
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
                        <textarea id='formMessage' className={this.state.messageUsed} name='message' type='text' required onChange={this.handleChange} onBlur={this.handleBlur} value={this.state.message} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Twoja wiadomość</label>
                    </div>

                    <input type="submit" value="Wyślij wiadomość" />

                </form>
                <style jsx>{`
                .group { 
                    position:relative; 
                    margin-bottom:45px; 
                }

                label 				{
                  color:#FFF; 
                  font-size:18px;
                  font-weight:normal;
                  position:absolute;
                  pointer-events:none;
                  left:5px;
                  top:10px;
                  transition:0.2s ease all;
                }
                input[type=submit] {
                    -webkit-border-radius: 4;
                    -moz-border-radius: 4;
                    border-radius: 4px;        
                    color: #ffffff;
                    background: #000;
                    padding: 8px 16px 8px 16px;
                    border: solid #B3B3B3 1px;
                    text-decoration: none;
                  }
                  
                  input[type=submit]:hover {
                    border: solid #FFF 1px;
                    text-decoration: none;
                  }

                input[type=text] {
                    font-size:13px;
                    padding:10px 10px 10px 5px;
                    display:block;
                    width:400px;
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
                                
                input[type=text]:valid { border-bottom: 1px solid #4fc24f;}

                textarea 				{
                    font-size:13px;
                    padding:10px 10px 10px 5px;
                    display:block;
                    width:400px;
                    border:none;
                    border-bottom:1px solid #757575;
                    background-color: #000;
                    color: #FFF;
                    line-height:1.42857;
                    font-family:Arial,Helvetica,sans-serif;
                    height:100px;
                }
                textarea:focus 		{ outline:none; }
                                
                textarea:valid { border-bottom: 1px solid #4fc24f;}

                textarea {                    
                    box-shadow:none;
                }
                
                textarea:-moz-placeholder {
                    box-shadow:none !important;
                }

                .bar 	{ position:relative; display:block; width:400px; }
                .bar:before, .bar:after 	{
                  content:'';
                  height:2px;
                  width:0;
                  bottom:1px; 
                  position:absolute;
                  background:#FFF; 
                  transition:0.2s ease all;
                }
                .bar:before {
                  left:50%;
                }
                .bar:after {
                  right:50%; 
                }
                
                input[type=text]:valid ~ .bar:before, input[type=text]:valid ~ .bar:after{
                  background: #4fc24f !important;
                }

                textarea:valid ~ .bar:before, textarea:valid ~ .bar:after{
                    background: #4fc24f !important;
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
                  color: #4fc24f;
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
                color: #4fc24f;
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
                    from { background:#4fc24f !important; }
                  to 	{ width:0; background:transparent; }
                }                
                
            `}</style>
            </SectionWrapper>

        )
    }
};