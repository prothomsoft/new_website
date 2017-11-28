import Singlepage from '../components/singlepage'

export default class HistoriaPageComponent extends React.Component {
    render() {
        
        return (
          <div>
            <Singlepage
              headTitle={'Historie ślubne, portfolio fotografa ślubnego'}
              headDescription={'Portfolio fotografa ślubnego, w którym zobaczycie wybrane historie ślubne i sesje plenerowe. Zapraszam.'}
              headKeywords={'historie ślubne, reportaż ślubny kraków, portfolio fotografa ślubnego'}
              headUrl={'http://99foto.pl/sesja-zdjeciowa-krakow/'}
              componentContentName={'historia'}                            

              backgroundImage={'url(/static/sala_weselna_nedan_pcim_reportaz_slubny_start.jpg)'}              

              leadNames={'ANNA i KRZYSZTOF'}
              leadTitle={'SALA WESELNA NEDAN PCIM - REPORTAŻ ŚLUBNY'}
              leadUrl={'/sala-weselna-nedan-pcim-reportaz-slubny'} 
              leadImage={'url(/static/sala_weselna_nedan_pcim_reportaz_slubny_start.jpg)'}
              />
          </div>
        );
    }
}