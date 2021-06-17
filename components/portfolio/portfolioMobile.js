import React, { Component } from "react";
import styled from "styled-components";
import Image from 'next/image';
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

export default class PortfolioMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: "0",
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
                        <h1 className="quote-title">FOTOGRAF ŚLUBNY KRAKÓW</h1>
                    </header>
                    <p>
                        Mam na imię Tomek i jestem fotografem ślubnym. Mieszkam w Krakowie z moją żoną Anią i trójką kochanych dzieciaków. Fotografia ślubna od zawsze była moją największą pasją, która
                        przy odrobinie szczęścia stała się moim sposobem na życie. Uwielbiam fotografować szczęśliwych ludzi, odwiedzać nowe miejsca i poszukiwać idealnego światła. Fotografię ślubną
                        traktuję jako niesamowitą przygodę, która pozwala mi spełniać marzenia. Jestem przekonany, że najlepsze zdjęcia są jeszcze przede mną.
                    </p>
                    <p>
                        Serdecznie zapraszam do odwiedzenia{" "}
                        <Link passHref href="/blog">
                            <a>mojego bloga</a>
                        </Link>{" "}
                        i obejrzenia pełnych reportaży ślubnych, sesji zdjęciowych, zdjęć pełnych kolorów i autentycznych emocji. Moje prace wyróżnia reporterskie podejście do fotografii czyli jak
                        najmniej ustawianych, reżyserowanych zdjęć, jak najwięcej kadrów przedstawiających emocje i spontaniczne reakcje. Oglądając moje prace sami ocenicie czy moje zdjęcia się Wam
                        spodobają. Fotografuję w Krakowie i bliskich okolicach. Wspólnie znajdźmy chwilę, światło, kadr, zachowajmy je na zawsze.
                    </p>
                    <div className="spacer_small" />
                </article>
                <article>
                    <header>
                        <h2 className="quote-title">POLECANE REPORTAŻE</h2>
                    </header>
                    <Link passHref href="/wesele-w-zakopanem-hotel-mercure-kasprowy-ich-troje">
                        <div className="porfolioImage">
                            <Image alt="wesele w zakopanem, hotel mercury kasprowy, zespół ich troje na weselu" src={"/static/portfolio/hotel_mercure_kasprowy_zakopane.jpg"} width={1140} height={760}  placeholder="blur" blurDataURL="/static/portfolio/hotel_mercure_kasprowy_zakopane.jpg"/>
                        </div>
                    </Link>
                    <Link passHref href="/wesele-w-zakopanem-hotel-mercure-kasprowy-ich-troje">
                        <div className="porfolioCaption">
                            <p>
                                WESELE W ZAKOPANEM HOTEL KASPROWY 
                                <br />PATRYCJA i TOMASZ
                            </p>
                        </div>
                    </Link>
                    <Link passHref href="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny">
                        <div className="porfolioImage">
                            
                                <Image alt="fotograf ślubny Kraków" src={"/static/portfolio/bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg"} width={1140} height={760} placeholder="blur" blurDataURL="/static/portfolio/bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg"/>
                            
                        </div>
                    </Link>
                    <Link passHref href="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny">
                        <div className="porfolioCaption">
                            <h3>
                                FOTOGRAF ŚLUBNY KRAKÓW 
                                <br />ANNA i PIOTR
                            </h3>
                        </div>
                    </Link>
                    <Link passHref href="/sesja-slubna-jesienia-palac-goetzow-okocimskich">
                        <div className="porfolioImage">
                            <Image alt="sesja zdjęciowa pałac goetzów brzesko" src={"/static/portfolio/plener_slubny_palac_goetzow_brzesko.jpg"} width={1140} height={760} placeholder="blur" blurDataURL="/static/portfolio/plener_slubny_palac_goetzow_brzesko.jpg"/>
                        </div>
                    </Link>
                    <Link passHref href="/sesja-slubna-jesienia-palac-goetzow-okocimskich">
                        <div className="porfolioCaption">
                            <p>
                                SESJA ŚLUBNA JESIENIĄ - PAŁAC GOETZÓW
                                <br /> IZABELA i ARKADIUSZ
                            </p>
                        </div>
                    </Link>
                    <Link passHref href="/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour">
                        <div className="porfolioImage">
                            <Image alt="dekoracja sali w stylu rustykalnym" src={"/static/portfolio/dworek_fantazja_skomielna_biala_fotograf.jpg"} width={1140} height={760} placeholder="blur" blurDataURL="/static/portfolio/dworek_fantazja_skomielna_biala_fotograf.jpg"/>
                        </div>
                    </Link>
                    <Link passHref href="/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour">
                        <div className="porfolioCaption">
                            <p>
                                ŚLUB W STYLU GLAMOUR
                                <br /> PATRYCJA i KRZYSZTOF
                            </p>
                        </div>
                    </Link>
                    <Link passHref href="/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso">
                        <div className="porfolioImage">
                            <Image alt="sesja zdjęciowa w górach" src={"/static/portfolio/plener_slubny_slowacja.jpg"} width={1140} height={760} placeholder="blur" blurDataURL="/static/portfolio/plener_slubny_slowacja.jpg"/>
                        </div>
                    </Link>
                    <Link passHref href="/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso">
                        <div className="porfolioCaption">
                            <p>
                                SESJA ZDJĘCIOWA W GÓRACH
                                <br />MAŁGORZATA i RAFAŁ
                            </p>
                        </div>
                    </Link>
                    <Link passHref href="/wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne">
                        <div className="porfolioImage">
                            <Image alt="wesele międzynarodowe kraków" src={"/static/portfolio/sala_weselna_biala_wilczyca_kocmyrzow.jpg"} width={1140} height={760} placeholder="blur" blurDataURL="/static/portfolio/sala_weselna_biala_wilczyca_kocmyrzow.jpg" />
                        </div>
                    </Link>
                    <Link passHref href="/wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne">
                        <div className="porfolioCaption">
                            <p>
                                WESELE MIĘDZYNARODOWE KRAKÓW
                                <br />MONIKA i MARTIN
                            </p>
                        </div>
                    </Link>
                    <Link passHref href="/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa">
                        <div className="porfolioImage">
                            <Image alt="fotograf na wesele kraków" src={"/static/portfolio/ogrod_botaniczny.jpg"} width={1140} height={760} placeholder="blur" blurDataURL="/static/portfolio/ogrod_botaniczny.jpg" />
                            </div>
                    </Link>
                    <Link passHref href="/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa">
                        <div className="porfolioCaption">
                            <h4>
                                FOTOGRAF NA WESELE KRAKÓW 
                                <br />DAJANA i SYLWESTER
                            </h4>
                        </div>
                    </Link>
                    <Link passHref href="/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach">
                        <div className="porfolioImage">
                            <Image alt="wesele w góralskim klimacie" src={"/static/portfolio/wesele_w_goralskim_klimacie_willa_orchidea_waksmund_portfolio.jpg"} width={1140} height={760} placeholder="blur" blurDataURL="/static/portfolio/wesele_w_goralskim_klimacie_willa_orchidea_waksmund_portfolio.jpg" />
                            </div>
                    </Link>
                    <Link passHref href="/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach">
                        <div className="porfolioCaption">
                            <p>
                                WESELE W GÓRALSKIM KLIMACIE
                                <br /> NATALIA i KAMIL
                            </p>
                        </div>
                    </Link>
                    <Link passHref href="/plener-slubny-na-rynku-w-krakowie">
                        <div className="porfolioImage">
                            <Image alt="Plener ślubny na Rynku w Krakowie" src={"/static/portfolio/plener_0002.jpg"} width={1140} height={760} placeholder="blur" blurDataURL="/static/portfolio/plener_0002.jpg"/>
                        </div>
                    </Link>
                    <Link passHref href="/plener-slubny-na-rynku-w-krakowie">
                        <div className="porfolioCaption">
                            <p>
                                PLENER ŚLUBNY NA RYNKU W KRAKOWIE <br /> PATRYCJA i KRZYSZTOF
                            </p>
                        </div>
                    </Link>
                    <Link passHref href="/park-mogilany-i-moc-buziakow-skapanych-w-promieniach-slonca">
                        <div className="porfolioImage">
                            <Image alt="sesja zdjęciowa w Krakowie" src={"/static/portfolio/sesja_narzeczenska_klasztor_w_tyncu.jpg"} width={1140} height={760} placeholder="blur" blurDataURL="/static/portfolio/sesja_narzeczenska_klasztor_w_tyncu.jpg"/>
                        </div>
                    </Link>
                    <Link passHref href="/park-mogilany-i-moc-buziakow-skapanych-w-promieniach-slonca">
                        <div className="porfolioCaption">
                            <p>
                                SESJA ŚLUBNA KRAKÓW
                                <br /> TERESA i ANDRZEJ
                            </p>
                        </div>
                    </Link>
                </article>

                <style jsx>{`

            .porfolioImage {
                cursor: pointer;
            }

            .porfolioCaption {
                cursor: pointer;
                margin: 0 10px;
            }

            .porfolioCaption p {
                text-align: center;
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
                text-align: center;
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
                text-align: center;
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
                margin: 0 10px;
            }
        `}</style>
            </div>
        );
    }
}
