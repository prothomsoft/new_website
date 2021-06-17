import React from "react";

export default class RodoMobile extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <article>
                    <header>
                        <h1 className="quote-title">POLITYKA PRYWATNOŚCI - RODO</h1>
                    </header>

                    <p>
                        Nawiązując współpracę ze mną, podpisując umowę, wysyłając zapytanie za pomocą formularza na stronie internetowej lub przez email, przekazujecie mi swoje dane osobowe, których
                        staję się administratorem i które jestem zobowiązany przetwarzać zgodnie z obowiązującym prawem. Dnia 25 maja 2018 roku w życie weszło rozporządzenie Parlamentu Europejskiego
                        2016/679 z dnia 27 kwietnia 2016 roku nazwane RODO, które narzuca na wszystkich przedsiębiorców nowe prawa i obowiązki w związku z przetwarzaniem danych osobowych.
                    </p>
                    <p>
                        Jako profesjonalny fotograf ślubny prowadzący legalnie swoją działalność gospodarczą na terenie Unii Europejskiej wprowadziłem szereg regulacji i zabezpieczeń, aby Twoje dane
                        były przechowywane zgodnie z regułami RODO. Wprowadziłem zasadę minimalizacji pobieranych danych przy jednoczesnym zabezpieczeniu ich najlepszymi dostępnymi metodami.
                    </p>
                    <h2 className="quote-title">Kto jest administratorem Twoich danych osobowych?</h2>
                    <p>
                        Administratorem danych osobowych jest Tomasz Prokop - Fotograf Ślubny Kraków, 31-231 Kraków, ul. Bociana 4A/35. Kontakt w sprawach związanych z ochroną danych osobowych możliwy
                        jest za pośrednictwem adresu email:{" "}
                        <a href="mailto:tomasz@99foto.pl" target="_blank" rel="noreferrer">
                            tomasz@99foto.pl
                        </a>
                        . Bardzo chętnie odpowiem na dodatkowe pytania.
                    </p>
                    <h2 className="quote-title">Skąd mam Twoje dane osobowe?</h2>
                    <p>
                        Otrzymałem je od Ciebie w różnych sytuacjach na przykład telefonicznie, przez email, gdy wypełniłeś formularz na mojej stronie internetowej, gdy wysłałeś do mnie wiadomość z
                        mediów społecznościowych lub podpisałeś ze mną umowę dotyczącą wykonania reportażu ślubnego lub sesji zdjęciowej.
                    </p>

                    <h2 className="quote-title">W jakim celu wykorzystuję Twoje dane osobowe?</h2>
                    <p>W trakcie mojej pracy Twoje dane osobowe są używane do następujących celów:</p>

                    <p>
                        - realizacji postanowień umowy czyli wykonania fotografii, wydrukowania wykonanych zdjęć, zamieszczenia zdjęć w strefie klienta z hasłem dostępu
                        <br />- kontaktu z Tobą w celach związanych z realizacją zawartej przez nas umowy
                        <br />- w trakcie zlecenia utrwalania Twojego wizerunku w postaci fotografii
                        <br />- za dodatkową zgodą wyrażoną w umowie publikacji Twojego wizerunku w formie zdjęć na mojej stronie internetowej lub w mediach społecznościowych
                    </p>

                    <h2 className="quote-title">Jakie są Twoje prawa w zakresie przetwarzania danych osobowych?</h2>
                    <p>Masz prawo dostępu, modyfikacji, usunięcia oraz prawo do wyrażenia sprzeciwu wobec przetwarzania Twoich danych osobowych.</p>

                    <h2 className="quote-title">Czy udostępniam Twoje dane osobowe?</h2>
                    <p>
                        Twoich danych osobowych nie udostępniam nikomu. To najważniejsza polityka mojej działalności. Nikt nie może podejrzeć treści naszych umów czy zobaczyć listy kontaktów.
                        Fotografie przekazuję tylko osobom upoważnionym do tego w zawartej przez nas umowie.
                    </p>
                    <h2 className="quote-title">Jak długo przechowuję Twoje dane osobowe?</h2>
                    <p>
                        Twoje dane osobowe przechowywane są przez czas obowiązywania umowy zawartej z Tobą, a także w zależności od przeznaczenia w celach wykonania obowiązków wynikających z przepisów
                        prawa, w tym w szczególności podatkowych i rachunkowych, dochodzenie roszczeń oraz zapobieganie nadużyciom i oszustwom, maksymalnie 6 lat od dnia zakończenia wykonania umowy.
                    </p>

                    <h2 className="quote-title">Jak zabezpieczam Twoje dane osobowe?</h2>
                    <p>
                        Dostęp do poczty, mediów społecznościowych, plików z danymi jest zabezpieczony hasłem i ograniczony tylko do dwóch urządzeń w mojej firmie. Dyski twarde, na których przechowuję
                        fotografie są zabezpieczone przed dostępem fizycznym. Archiwa fotografii są zanonimizowane, skatalogowane i każda sesja zabezpieczona jest hasłem dostępu.
                    </p>

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
                     
                `}</style>
            </div>
        );
    }
}
