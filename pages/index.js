import Homepage from "../components/homepage";

export default class Index extends React.Component {
    render() {
        let slides = [
            {
                imageUrl: "/static/lomnicki_staw_portfolio_start.jpg"
            },
            {
                imageUrl: "/static/ogrod_botaniczny.jpg"
            },
            {
                imageUrl: "/static/sala_weselna_nedan_pcim_reportaz_slubny_start.jpg"
            },
            {
                imageUrl: "/static/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.jpg"
            },
            {
                imageUrl: "/static/hotel_margerita_krakow_magiczny_wystroj_sali_weselnej_w_krakowie-start.jpg"
            },
            {
                imageUrl: "/static/dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.jpg"
            },
            {
                imageUrl: "/static/pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg"
            },
            {
                imageUrl: "/static/natalia_marcin_i_maja_reportaz_slubny_gosciniec_branicki_start.jpg"
            }
        ];

        return (
            <div>
                <Homepage
                    slides={slides}
                    headTitle={"Fotograf ślubny Kraków: Tomasz Prokop"}
                    headDescription={"Fotograf ślubny Kraków. Piękne zdjęcia, pełne emocji reportaże ślubne. Sprawdź moją ofertę i portfolio. Album w cenie pakietu. Serdecznie zapraszam."}
                    headKeywords={"fotograf ślubny Kraków, fotograf na wesele"}
                    headUrl={"https://99foto.pl"}
                    backgroundImage={"url(/static/sesja_slubna_jesienia.jpg)"}
                    leadNames={"MARTA i MARCIN"}
                    leadTitle={"FOTOGRAF ŚLUBNY KRAKÓW, FIRST LOOK NA DACHU WIEŻOWCA"}
                    leadUrl={"/tiffany-wola-filipowska-first-look-na-dachu-wiezowca"}
                    leadImage={"url(/static/restauracja_tiffany_wola_filpowska.jpg)"}
                />
            </div>
        );
    }
}
