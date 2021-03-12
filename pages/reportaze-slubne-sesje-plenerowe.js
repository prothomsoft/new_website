import React from "react";
import Singlepage from "../components/singlepage";

export default class HistoriaPageComponent extends React.Component {
    render() {
        return (
            <div>
                <Singlepage
                    headTitle={"Reportaż ślubny i sesja plenerowa, portfolio fotografa ślubnego"}
                    headDescription={"Portfolio fotografa ślubnego, w którym zobaczycie wybrane reportaże ślubne i sesje plenerowe. Zapraszam."}
                    headKeywords={"reportaże ślubne i sesje plenerowe, portfolio fotografa ślubnego"}
                    headUrl={"https://99foto.pl/sesja-slubna-jesienia-palac-goetzow-okocimskich/"}
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
