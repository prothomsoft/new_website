import React from "react";
import Link from "next/link";
import LazyLoad from "react-lazy-load";

export default class HistoriaMobile extends React.Component {
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
                    <Link href="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny">
                        <div className="porfolioImage">
                            <LazyLoad offsetVertical={300}>
                                <img alt="fotograf ślubny Kraków" src={"/static/portfolio/bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg"} />
                            </LazyLoad>
                        </div>
                    </Link>
                    <Link href="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny">
                        <div className="porfolioCaption">
                            <h3 style={{ textAlign: "center" }}>
                                FOTOGRAF ŚLUBNY KRAKÓW <br />
                                ANNA i PIOTR
                            </h3>
                        </div>
                    </Link>
                    <Link href="/sesja-slubna-jesienia-palac-goetzow-okocimskich">
                        <div className="porfolioImage">
                            <LazyLoad offsetVertical={300}>
                                <img alt="sesja zdjęciowa pałac goetzów brzesko" src={"/static/portfolio/plener_slubny_palac_goetzow_brzesko.jpg"} />
                            </LazyLoad>
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
                    <Link href="/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour">
                        <div className="porfolioImage">
                            <LazyLoad offsetVertical={300}>
                                <img alt="dekoracja sali w stylu rustykalnym" src={"/static/portfolio/dworek_fantazja_skomielna_biala_fotograf.jpg"} />
                            </LazyLoad>
                        </div>
                    </Link>
                    <Link href="/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour">
                        <div className="porfolioCaption">
                            <p style={{ textAlign: "center" }}>
                                ŚLUB W STYLU GLAMOUR
                                <br /> PATRYCJA i KRZYSZTOF
                            </p>
                        </div>
                    </Link>
                    <Link href="/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso">
                        <div className="porfolioImage">
                            <LazyLoad offsetVertical={300}>
                                <img alt="sesja zdjęciowa w górach" src={"/static/portfolio/plener_slubny_slowacja.jpg"} />
                            </LazyLoad>
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
                    <Link href="/wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne">
                        <div className="porfolioImage">
                            <LazyLoad offsetVertical={300}>
                                <img alt="wesele międzynarodowe kraków" src={"/static/portfolio/sala_weselna_biala_wilczyca_kocmyrzow.jpg"} />
                            </LazyLoad>
                        </div>
                    </Link>
                    <Link href="/wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne">
                        <div className="porfolioCaption">
                            <p style={{ textAlign: "center" }}>
                                WESELE MIĘDZYNARODOWE KRAKÓW
                                <br />
                                MONIKA i MARTIN
                            </p>
                        </div>
                    </Link>
                    <Link href="/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa">
                        <div className="porfolioImage">
                            <LazyLoad offsetVertical={300}>
                                <img alt="fotograf na wesele kraków" src={"/static/portfolio/ogrod_botaniczny.jpg"} />
                            </LazyLoad>
                        </div>
                    </Link>
                    <Link href="/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa">
                        <div className="porfolioCaption">
                            <h4 style={{ textAlign: "center" }}>
                                FOTOGRAF NA WESELE KRAKÓW <br />
                                DAJANA i SYLWESTER
                            </h4>
                        </div>
                    </Link>
                    <Link href="/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach">
                        <div className="porfolioImage">
                            <LazyLoad offsetVertical={300}>
                                <img alt="wesele w góralskim klimacie" src={"/static/portfolio/wesele_w_goralskim_klimacie_willa_orchidea_waksmund_portfolio.jpg"} />
                            </LazyLoad>
                        </div>
                    </Link>
                    <Link href="/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach">
                        <div className="porfolioCaption">
                            <p style={{ textAlign: "center" }}>
                                WESELE W GÓRALSKIM KLIMACIE
                                <br /> NATALIA i KAMIL
                            </p>
                        </div>
                    </Link>
                    <Link href="/plener-slubny-na-rynku-w-krakowie">
                        <div className="porfolioImage">
                            <LazyLoad offsetVertical={300}>
                                <img alt="Plener ślubny na Rynku w Krakowie" src={"/static/portfolio/plener_0002.jpg"} />
                            </LazyLoad>
                        </div>
                    </Link>
                    <Link href="/plener-slubny-na-rynku-w-krakowie">
                        <div className="porfolioCaption">
                            <p style={{ textAlign: "center" }}>
                                PLENER ŚLUBNY NA RYNKU W KRAKOWIE <br /> PATRYCJA i KRZYSZTOF
                            </p>
                        </div>
                    </Link>
                    <Link href="/park-mogilany-i-moc-buziakow-skapanych-w-promieniach-slonca">
                        <div className="porfolioImage">
                            <LazyLoad offsetVertical={300}>
                                <img alt="sesja zdjęciowa w Krakowie" src={"/static/portfolio/sesja_narzeczenska_klasztor_w_tyncu.jpg"} />
                            </LazyLoad>
                        </div>
                    </Link>
                    <Link href="/park-mogilany-i-moc-buziakow-skapanych-w-promieniach-slonca">
                        <div className="porfolioCaption">
                            <p style={{ textAlign: "center" }}>
                                SESJA ŚLUBNA KRAKÓW
                                <br />
                                TERESA i ANDRZEJ
                            </p>
                        </div>
                    </Link>
                    <div className="spacer" />
                </article>
                <style jsx>{`
                    .porfolioImage {
                        cursor: pointer;
                    }

                    .porfolioCaption {
                        cursor: pointer;
                        margin: 0 10px;
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
                    article h1{
                        color: #FFF;
                        font-size: 26px;
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
