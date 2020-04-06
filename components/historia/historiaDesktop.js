import React from "react";
import Link from "next/link";
import LazyLoad from "react-lazy-load";

export default class HistoriaDesktop extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <article>
                    <header>
                        <h1 className="quote-title">KILKA HISTORII</h1>
                    </header>
                    <div style={{ display: "flex" }}>
                        <Link href="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img alt="bazylika bożego ciała kraków fotoreportaż ślubny" src={"/static/portfolio_dtp/bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                        <Link href="/hotel-zameczek-ksiaz-wielki-i-slubne-iskierki-milosci">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img alt="fotograf ślubny Kraków" src={"/static/portfolio_dtp/hotel_zameczek_ksiaz_wielki.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                        <Link href="/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img alt="ślub w stylu glamour" src={"/static/portfolio_dtp/dworek_fantazja_skomielna_biala_fotograf.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link href="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny">
                            <div className="porfolioCaption">
                                <p style={{ textAlign: "center" }}>
                                    REPORTAŻ ŚLUBNY KRAKÓW
                                    <br /> ANNA i PIOTR
                                </p>
                            </div>
                        </Link>
                        <Link href="/hotel-zameczek-ksiaz-wielki-i-slubne-iskierki-milosci">
                            <div className="porfolioCaption">
                                <h3 style={{ textAlign: "center" }}>
                                    FOTOGRAFIA ŚLUBNA KRAKÓW <br /> KATARZYNA i PAWEŁ
                                </h3>
                            </div>
                        </Link>
                        <Link href="/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour">
                            <div className="porfolioCaption">
                                <p style={{ textAlign: "center" }}>
                                    ŚLUB W STYLU GLAMOUR
                                    <br />
                                    PATRYCJA i KRZYSZTOF
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link href="/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img alt="wesele w góralskim klimacie" src={"/static/portfolio_dtp/wesele_w_goralskim_klimacie_willa_orchidea_waksmund_portfolio.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                        <Link href="/sesja-slubna-jesienia-palac-goetzow-okocimskich">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img alt="sesja zdjęciowa pałac goetzów brzesko" src={"/static/portfolio_dtp/plener_slubny_palac_goetzow_brzesko.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                        <Link href="/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img alt="sesja zdjęciowa w górach" src={"/static/portfolio_dtp/plener_slubny_slowacja.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link href="/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach">
                            <div className="porfolioCaption">
                                <p style={{ textAlign: "center" }}>
                                    WESELE W GÓRALSKIM KLIMACIE
                                    <br /> NATALIA i KAMIL
                                </p>
                            </div>
                        </Link>
                        <Link href="/sesja-slubna-jesienia-palac-goetzow-okocimskich">
                            <div className="porfolioCaption">
                                <p style={{ textAlign: "center" }}>
                                    SESJA ŚLUBNA JESIENIĄ - PAŁAC GOETZÓW
                                    <br /> IZABELA i ARKADIUSZ
                                </p>
                            </div>
                        </Link>
                        <Link href="/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso">
                            <div className="porfolioCaption">
                                <p style={{ textAlign: "center" }}>
                                    SESJA ZDJĘCIOWA W GÓRACH
                                    <br /> MAŁGORZATA i RAFAŁ
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link href="/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img alt="fotograf na wesele kraków" src={"/static/portfolio_dtp/ogrod_botaniczny.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                        <Link href="/park-mogilany-i-moc-buziakow-skapanych-w-promieniach-slonca">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img alt="sesja ślubna kraków" src={"/static/portfolio_dtp/sesja_narzeczenska_klasztor_w_tyncu.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                        <Link href="/wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img alt="wesele międzynarodowe, polskie tradycje weselne" src={"/static/portfolio_dtp/sala_weselna_biala_wilczyca_kocmyrzow.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link href="/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa">
                            <div className="porfolioCaption">
                                <h4 style={{ textAlign: "center" }}>
                                    FOTOGRAF NA WESELE KRAKÓW <br />
                                    DAJANA i SYLWESTER
                                </h4>
                            </div>
                        </Link>
                        <Link href="/park-mogilany-i-moc-buziakow-skapanych-w-promieniach-slonca">
                            <div className="porfolioCaption">
                                <p style={{ textAlign: "center" }}>
                                    SESJA ŚLUBNA KRAKÓW
                                    <br /> TERESA i ANDRZEJ
                                </p>
                            </div>
                        </Link>
                        <Link href="/wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne">
                            <div className="porfolioCaption">
                                <p style={{ textAlign: "center" }}>
                                    WESELE MIĘDZYNARODOWE KRAKÓW
                                    <br /> MONIKA i MARTIN
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="spacer" />
                </article>

                <style jsx>{`
                    .porfolioImage {
                        position: relative;
                        width: 420px;
                        margin: 0 20px;
                        border: 2px solid transparent;
                        transition: border 0.5s;
                        cursor: pointer;
                    }

                    .porfolioImage:hover {
                        border: 2px solid #fff;
                    }

                    .porfolioImage:focus {
                        outline: none;
                    }

                    .porfolioCaption {
                        cursor: pointer;
                        position: relative;
                        width: 420px;
                        margin: 0 20px;
                    }

                    .porfolioCaption h3 {
                        font-family: Oswald;
                        font-style: normal;
                        font-weight: normal;
                        line-height: 1.4;
                        text-rendering: optimizelegibility;
                        font-size: 16px;
                        padding: 0 20px 0 20px;
                        margin: 10px 0;
                    }

                    .porfolioCaption h4 {
                        font-family: Oswald;
                        font-style: normal;
                        font-weight: normal;
                        line-height: 1.4;
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
                        font-family: "Oswald";
                        width: 1140px;
                    }

                    article h1 {
                        color: #fff;
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
                        content: "";
                        display: block;
                        border: 1px solid #33b59a;
                    }

                    .quote-title {
                        display: flex;
                        align-items: center;
                        color: #ffffff;
                        padding: 10px 0 10px 0;
                    }

                    .quote-title::before,
                    .quote-title::after {
                        flex-grow: 1;
                        margin: 0 10px;
                    }

                    .porfolioCaption h4 {
                        font-family: Oswald;
                        font-style: normal;
                        font-weight: normal;
                        line-height: 1.4;
                        text-rendering: optimizelegibility;
                        font-size: 16px;
                        padding: 0 20px 0 20px;
                        margin: 10px 0;
                    }
                `}</style>
            </div>
        );
    }
}
