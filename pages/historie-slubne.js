import Singlepage from '../components/singlepage'

export default class HistoriaPageComponent extends React.Component {
    render() {
        
        return (
          <div>
            <Singlepage
              headTitle={'Historie ślubne TO DO'}
              headDescription={'Historie ślubne Kraków TO DO'}
              headKeywords={'historie ślubne kraków TO DO'}
              headUrl={'http://99foto.pl/sesja-zdjeciowa-krakow/'}
              componentContentName={'historia'}                            

              backgroundImage={'url(/static/dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.jpg)'}              

              leadNames={'KINGA i MACIEK'}
              leadTitle={'DEKORACJA SALI WESELNEJ W STYLU RUSTYKALNYM, OSP ZAWADA'}
              leadUrl={'dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada'} 
              leadImage={'url(/static/dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.jpg)'}
              />
          </div>
        );
    }
}