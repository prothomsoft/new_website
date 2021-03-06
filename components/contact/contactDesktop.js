import React from "react";
import Link from "next/link";
import Image from 'next/image';
import aws from 'aws-sdk';

aws.config.update({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    region:process.env.region
});

export default class ContactDesktop extends React.Component {
    constructor() {
        super();

        this.state = {
            sender: "",
            senderUsed: "form-input",
            email: "",
            emailUsed: "form-input",
            message: "",
            messageUsed: "form-input",
            messageSent: false
        };
    }

    handleChange = e => {
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    };

    handleBlur = e => {
        if (e.target.name === "sender") {
            e.target.value === "" ? this.setState({ senderUsed: "form-input" }) : this.setState({ senderUsed: "form-input used" });
        }
        if (e.target.name === "email") {
            e.target.value === "" ? this.setState({ emailUsed: "form-input" }) : this.setState({ emailUsed: "form-input used" });
        }
        if (e.target.name === "message") {
            e.target.value === "" ? this.setState({ messageUsed: "form-input" }) : this.setState({ messageUsed: "form-input used" });
        }
    };

    handleSubmit = e => {
        e.preventDefault();

        let ses = new aws.SES();

        let params = {
            Destination: {
                ToAddresses: [
                "Tomasz Prokop <tomasz@99foto.pl>"
            ]
            }, 
            Message: {
                Body: {
                    Html: {
                    Charset: "UTF-8", 
                    Data: this.state.message
                    }
                }, 
                Subject: {
                    Charset: "UTF-8", 
                    Data: "Wiadomość od Tomasz Prokop (99FOTO.PL)"
                }
            }, 
            Source: "Tomasz Prokop <tomasz@99foto.pl>",
            ReplyToAddresses: [
                this.state.sender + " <" + this.state.email + ">"
            ]
        };

        if (this.state.sender.length < 1 || this.state.email.length < 1 || this.state.message.length < 1) {
            return false;
        }

        ses.sendEmail(params, function(err, data) {
            if (err)  {
                console.log(err, err.stack);
            }
            else  {
                console.log(data);
            }  
        });        

        this.setState({
            sender: "",
            senderUsed: "form-input",
            email: "",
            emailUsed: "form-input",
            message: "",
            messageUsed: "form-input",
            messageSent: true
        });
    };

    render() {
        let displayFormConfirmation = "";
        let displayForm = "";

        if (this.state.messageSent) {
            displayFormConfirmation = "block";
            displayForm = "none";
        } else {
            displayFormConfirmation = "none";
            displayForm = "block";
        }

        return (
            <article>
                <header>
                    <h2>KONTAKT</h2>
                </header>

                <div style={{ display: `${displayFormConfirmation}` }}>
                    <p>TWOJA WIADOMOŚĆ ZOSTAŁA WYSŁANA.</p>
                    <p>DZIĘKUJĘ ZA PYTANIE. ODPOWIEM BARDZO SZYBKO.</p>
                    <div className="spacer_confirmation" />
                </div>

                <div style={{ display: `${displayForm}` }}>
                    <p>ZAINTERESOWAŁA CIĘ MOJA OFERTA, CHCESZ POZNAĆ DOSTĘPNOŚĆ TERMINU i ZAPYTAĆ O CENĘ PAKIETU?</p>
                    <p>WYPEŁNIJ PROSZĘ PONIŻSZY FORMULARZ KONTAKTOWY i WYŚLIJ WIADOMOŚĆ</p>
                    <div className="spacer" />

                    <form className="react-form" onSubmit={this.handleSubmit}>
                        <div className="group">
                            <input
                                id="formSender"
                                className={this.state.senderUsed}
                                name="sender"
                                type="text"
                                required
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                value={this.state.sender}
                            />
                            <span className="highlight" />
                            <span className="bar" />
                            <label htmlFor="formSender">Twoje imię i nazwisko</label>
                        </div>

                        <div className="group">
                            <input
                                id="formEmail"
                                className={this.state.emailUsed}
                                name="email"
                                type="text"
                                pattern="[a-zA-Z0-9_]+(?:\.[A-Za-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?!([a-zA-Z0-9]*\.[a-zA-Z0-9]*\.[a-zA-Z0-9]*\.))(?:[A-Za-z0-9](?:[a-zA-Z0-9-]*[A-Za-z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?"
                                required
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                value={this.state.email}
                            />
                            <span className="highlight" />
                            <span className="bar" />
                            <label htmlFor="formEmail">Twój adres e-mail</label>
                        </div>

                        <div className="group">
                            <textarea id="formMessage" className={this.state.messageUsed} name="message" required onChange={this.handleChange} onBlur={this.handleBlur} value={this.state.message} />
                            <span className="highlight" />
                            <span className="bar" />
                            <label htmlFor="formMessage">Twoja wiadomość</label>
                        </div>

                        <div style={{ textAlign: "left", paddingTop: "20px" }}>
                            <input type="submit" value="WYŚLIJ WIADOMOŚĆ" />
                        </div>
                    </form>
                </div>
                <div className="spacer" />
                <div className="containerCenter">
                    <div className="floatLeft">
                        <p>
                            TOMASZ PROKOP -{" "}
                            <Link href="https://99foto.pl"><a>FOTOGRAF ŚLUBNY KRAKÓW</a>
                            </Link>
                        </p>
                        <p>ul. Bociana 4A/35, 31-231 Kraków</p>
                        <p>
                            TELEFON:{" "}
                            <Link href="tel:+48663275222"><a>+48 663 275 222</a>
                            </Link>{" "}
                            &nbsp; EMAIL:{" "}
                            <Link href="mailto:tomasz@99foto.pl"><a>TOMASZ@99FOTO.PL</a>
                            </Link>
                        </p>
                        <p>NIP: 8133336677 &nbsp; REGON: 369770278</p>
                        <p>
                            <Link href="/polityka-prywatnosci-rodo"><a>POLITYKA PRYWATNOŚCI - RODO</a>
                            </Link>
                        </p>
                    </div>
                    <div className="floatLeft">
                        <div className="spacer_small" />
                        <p>OBSERWUJ MNIE</p>
                        <div className="icon_container">
                            <div className="square">
                            <a target="_blank" href="https://www.weselezklasa.pl/ogloszenia-weselne/tomasz-prokop-fotograf-slubny,35325/" rel="nofollow">
                                    <div className="float_right">
                                        <Image alt="wesele z klasą" src={"/static/icons/wesele_z_klasa.jpg"} width={43} height={43} placeholder="blur" blurDataURL={"/static/icons/wesele_z_klasa.jpg"}/>
                                    </div>
                                </a>
                            
                               
                            </div>
                            <div className="square">
                            <a target="_blank" href="https://www.instagram.com/99foto.pl" rel="nofollow">
                                    <div className="float_right">
                                        <Image alt="profil na instagramie" src={"/static/icons/instagram_icon.jpg"} width={43} height={43} placeholder="blur" blurDataURL={"/static/icons/instagram_icon.jpg"} />
                                    </div>
                                </a>
                            </div>
                            <div className="square">
                            <a target="_blank" href="https://facebook.com/99foto" rel="nofollow">
                                    <div className="float_right">
                                        <Image alt="profil na facebook" src={"/static/icons/facebook_icon.jpg"} width={43} height={43} placeholder="blur" blurDataURL={"/static/icons/facebook_icon.jpg"} />
                                    </div>
                                </a>
                            </div>
                            <div className="square_space">
                                <a target="_blank" href="https://www.slubnaglowie.pl/katalog/firma/tomasz-prokop_6663" rel="nofollow">
                                    <div className="float_right">
                                        <Image alt="slub na głowie" src={"/static/icons/slub_na_glowie.jpg"} width={43} height={43} placeholder="blur" blurDataURL={"/static/icons/slub_na_glowie.jpg"}/>                                        
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer" />
                <style jsx>{`
                .icon_container {                    
                    width: 100%;
                    text-align:center;
                    padding-top: 5px;
                } 
                .float_right{
                    float: right;                    
                }
                .square {                    
                    width: 58px;                    
                    display:inline-block;
                }
                .square_space {
                    width: 58px;                    
                    display:inline-block;                     
                }

                .floatLeft {
                    float: left;
                    width: 50%;                    
                }

                .padding1 {
                    padding:8px 0 0 0;
                }               

                article {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;                    
                    font-family: 'Oswald';                    
                    width: 100%;
                    height: 740px;
                    color #FFF;
                    padding:0 100px 0 100px;                    
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
                    margin: 0 10px;
                }               

                .spacer_small {
                    height: 15px;
                }

                .spacer {
                    height: 30px;                    
                }

                .spacer_confirmation {
                    height: 370px;
                }

                .header h1 {
                    padding: 10px 0 0 0;
                    margin :0px;
                    text-align: center;
                    color: #FFF;                    
                }

                .group { 
                    position:relative; 
                    margin-bottom:35px; 
                }

                label {
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
                    line-height:1.4;
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
        );
    }
}
