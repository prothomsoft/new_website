import Singlepage from "../components/singlepage";

export default class HistoriaPageComponent extends React.Component {
    render() {
        return (
            <div>
                <Singlepage
                    headTitle={"Historie ślubne, portfolio fotografa ślubnego"}
                    headDescription={"Portfolio fotografa ślubnego, w którym zobaczycie wybrane historie ślubne i sesje plenerowe. Zapraszam."}
                    headKeywords={"historie ślubne, reportaż ślubny kraków, portfolio fotografa ślubnego"}
                    headUrl={"http://wp.99foto.pl/sesja-slubna-jesienia-palac-goetzow-okocimskich/"}
                    componentContentName={"historia"}
                    backgroundImage={"url(/static/sesja_slubna_jesienia.jpg)"}
                    leadNames={"IZABELA i ARKADIUSZ"}
                    leadTitle={"SESJA ŚLUBNA JESIENIĄ - PAŁAC GOETZÓW"}
                    leadUrl={"/sesja-slubna-jesienia-palac-goetzow-okocimskich"}
                    leadImage={"url(/static/sesja_slubna_jesienia.jpg)"}
                />
            </div>
        );
    }
}
