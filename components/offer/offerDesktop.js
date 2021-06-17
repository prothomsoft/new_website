import React from "react";
import Link from "next/link";
import Image from 'next/image';

export default class OfferDesktop extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <article>
                    <header>
                        <h1 className="quote-title">OFERTA FOTOGRAFII ŚLUBNEJ</h1>
                    </header>

                    <div className="container">
                        <div className="column left">
                            <Link href="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny">
                                <div className="porfolioImage">
                                    <Image alt="portret panny młodej" src={"/static/portfolio/portret_panny_mlodej.jpg"} width={336} height={225} placeholder="blur" blurDataURL="/static/portfolio/portret_panny_mlodej.jpg"/>                                    
                                </div>
                            </Link>

                            <Link href="/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour">
                                <div className="porfolioImage">
                                    <Image alt="sala weselna Mszana Dolna" src={"/static/portfolio/aleksandra_mszana_dolna.jpg"}  width={336} height={225} placeholder="blur" blurDataURL="/static/portfolio/aleksandra_mszana_dolna.jpg"/>
                                </div>
                            </Link>
                        </div>
                        <div className="column right">
                            <h2>REPORTAŻ ŚLUBNY OBEJMUJĄCY</h2>
                            <p>przygotowania, błogosławieństwo</p>
                            <p>ceremonię w kościele lub USC</p>
                            <p>przyjęcie weselne do oczepin włącznie (do godz. 1.00)</p>
                            <p>sesję ślubną w wybranym dniu po ślubie</p>
                            <div className="spacer">&nbsp;</div>
                            <h2>OTRZYMUJECIE</h2>
                            <p>fotoksiążkę - minimum 120 stron w twardej oprawie, format 30x30cm</p>
                            <p>pendrive w etui - minimum 450 zdjęć poddanych starannej obróbce graficznej</p>
                            <p>dojazd w dniu ślubu GRATIS</p>
                            <p>internetową galerię zdjęć w strefie klienta zabezpieczoną hasłem</p>
                        </div>
                    </div>
                </article>

                <article>
                    <header>
                        <h3 className="quote-title">OFERTA SESJI ZDJĘCIOWEJ</h3>
                    </header>

                    <div className="container">
                        <div className="column left">
                            <Link href="/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa">
                                <div className="porfolioImage">
                                    <Image alt="sesja plenerowa w ogrodzie botanicznym" src={"/static/portfolio/plener_0002.jpg"}  width={336} height={225} placeholder="blur" blurDataURL="/static/portfolio/plener_0002.jpg" />
                                </div>
                            </Link>
                            <Link href="/sesja-slubna-jesienia-palac-goetzow-okocimskich">
                                <div className="porfolioImage">
                                    <Image alt="sesja slubna palac goetzow okocimskich" src={"/static/portfolio/pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg"}  width={336} height={225} placeholder="blur" blurDataURL="/static/portfolio/pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg"/>
                                </div>
                            </Link>
                            <div className="spacer">&nbsp;</div>
                        </div>
                        <div className="column right">
                            <p>&nbsp;</p>
                            <h2>SESJA ZDJĘCIOWA OBEJMUJĄCA</h2>
                            <p>trzy godziny fotografowania</p>
                            <p>dwa lub trzy wybrane miejsca plenerowe</p>
                            <p>&nbsp;</p>
                            <div className="spacer_more">&nbsp;</div>
                            <h2>OTRZYMUJECIE</h2>
                            <p>pendrive w etui - minimum 80 zdjęć poddanych starannej obróbce graficznej</p>
                            <p>dojazd do 30 km na sesję zdjęciową GRATIS</p>
                            <p>internetową galerię zdjęć w strefie klienta zabezpieczoną hasłem</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                        </div>
                        <div className="spacer">&nbsp;</div>
                    </div>
                </article>

                <style jsx>{`
                    .container {
                        display: flex;
                        justify-content: space-around;
                        align-items: stretch;
                        width: 1140px;
                    }

                    .column.left {
                        width: 340px;
                        flex-shrink: 0;
                    }

                    .column.right {
                        width: 800px;
                        flex-shrink: 0;
                    }

                    .porfolioImage {
                        position: relative;
                        margin: 10px 0 25px 0;
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
                        margin: 0 10px;
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
                        font-size: 2.5em;
                        text-align: left;
                    }

                    article h2 {
                        color: #fff;
                        padding: 0px 20px 10px 20px;
                        text-align: center;
                    }

                    article h3 {
                        color: #fff;
                        font-size: 2.5em;
                    }

                    .spacer {
                        height: 60px;
                    }

                    .spacer_more {
                        height: 85px;
                    }

                    p {
                        font-size: 16px;
                        margin: 10px 0;
                        text-align: center;
                        padding: 0 20px 0 20px;
                    }

                    .alignJustify {
                        text-align: justify;
                    }

                    .alignRight {
                        padding-top: 35px;
                        text-align: right;
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
                `}</style>
            </div>
        );
    }
}
