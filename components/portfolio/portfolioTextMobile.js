import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";

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

export default class PortfolioTextMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: "0"
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }

    render() {
        return (
            <div>
                <article>
                    <header>
                        <h2 className="quote-title">EMOCJE, UCZUCIA I KOLORY</h2>
                    </header>
                    <p>
                        Śluby, sesje zdjęciowe to znakomita okazja do tworzenia, odkrywania nowych miejsc, poznawania ciekawych ludzi, poszukiwania idealnego światła, rejestrowania wydarzeń pełnych
                        autentycznych emocji. Fotograf ślubny w mojej definicji to osoba mająca we krwi kreatywność i umiejętność łatwego nawiązywania kontaktu z ludźmi, wnikliwy obserwator
                        pozostający w cieniu wydarzeń i rejestrujący bieg zdarzeń z największą dyskrecją. Fotografia ślubna to pasja, którą rozwijam każdego dnia obserwując pracę najlepszych
                        fotografów ślubnych w branży, poszukując nowych miejsc na niezapomniane sesje zdjęciowe, obserwując powstające i znikające trendy w fotografii ślubnej.
                    </p>
                    <p>
                        Często mówimy o fotografowaniu sercem, jednak moim zdaniem świat sztuki, wrażliwość artystyczna, niezwykłość to nie wszystko. Fotograf ślubny chętnie śledzi premiery sprzętowe
                        w świecie komputerów, aparatów, obiektywów, programów do obróbki zdjęć i sprzętu oświetleniowego. W ten sposób zdobywam informacje i doskonale mój warsztat, rozbudowywuję
                        zaplecze sprzętowe, a to wszystko ogromnie ułatwia moją pracę. Stosowanie nowości technicznych w praktyce pozwala mi utrzymać dystans od zdjęć wykonanych przez innych
                        uczestników ślubu. Fotografią ślubną zajmuję się już blisko dziesięt lat i uwielbiam miasto Kraków jako główne miejsce mojej działalności.
                    </p>
                    <p>
                        Mam pomysł jak wykonane przeze mnie zdjęcia ślubne powinny wyglądać za rok czy dwa lata i plan jak mogę ten cel osiągnąć i zrealizować. Upór i konsekwencja w dążeniu do
                        wcześniej wyznaczonego celu pozwalają mi być w miejscu, w którym jestem i na pewno pozwolą pokonywać kolejne wyzwania i realizować nowe cele. Etap na którym jestem czyni mnie
                        szczęśliwym. W przyszłości chciałbym robić dokładnie to samo, co przez ostatnie kilka lat, tylko być w tym coraz lepszy. Wielokrotnie miałem przyjemność rozmawiać z parami,
                        które w moich zdjęciach doceniły fotografowane ludzkie emocje, łzy wzruszenia podczas ceremonii, uśmiechy czy też radość z szalonej zabawy.
                    </p>
                    <p>
                        Pary te opowiadały mi o pozytywnym przyjęciu mojej osoby w gronie ich najbliższych znajomych i rodziny. Komplementowały żywe kolory i umiejętnie wykorzystane światło zarówno
                        zastane jak i pochodzące z lamp błyskowych. To jak patrzę i jakie mam nastawienie ma ogromny wpływ na moją pracę. Pary wybierając fotografa najpierw patrzą na zdjęcia potem
                        chcą poznać mnie jako człowieka by sprawdzić czy będą się dobrze czuć w moim towarzystwie. Dla mnie to ważne. Nikt nie lubi stresu, dlatego nasze sesje zdjęciowe przebiegają w
                        przyjemnej atmosferze. Zawsze planujemy nasze plenery, a podczas robienia zdjęć daję Wam pełną swobodę w wyrażaniu emocji i zachęcam do odsłonięcia części siebie.
                    </p>
                    <p>
                        Wybierając fotografa ślubnego kierujcie się sercem, ale weźcie też pod uwagę jego umiejętności, doświadczenie i zaangażowanie. Koniecznie skonfrontujcie to z Waszymi
                        oczekiwaniami. Pamiętajmy, że tak ważnego wydarzenia jak Wasz ślub nie będzie drugi raz, a zdjęcia jakie zrobi Wam wybrany fotograf ślubny pozostaną z Wami na zawsze.
                        Serdecznie zachęcam do odwiedzenia{" "}
                        <Link href="/blog">
                            <a>mojego bloga</a>
                        </Link>
                        . Przeglądając umieszczone tam zdjęcia ocenisz mój sposób postrzegania otaczającego nas świata. Polecam Kraków i okolice. Serdecznie zapraszam.
                    </p>
                </article>

                <style jsx>{`            
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
            article h2 {                
                font-size: 1.5em;
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
                margin: 0 10px;
            } 
             
        `}</style>
            </div>
        );
    }
}
