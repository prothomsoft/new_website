import Homepage from '../components/homepage'

export default class Index extends React.Component {  
    render() {
        let slides = [{
            imageUrl: '/static/sala_weselna_nedan_pcim_reportaz_slubny_start.jpg'            
          }, {
            imageUrl: '/static/fotograf_slubny_krakow_slider_homepage_start.jpg'           
          }, {
            imageUrl: '/static/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg'            
          }, {
            imageUrl: '/static/dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.jpg'
          }, {
            imageUrl: '/static/julita_i_pawel_reportaz_slubny_kosciol_na_skalce_krakow_start.jpg'
          }, {
            imageUrl: '/static/natalia_marcin_i_maja_reportaz_slubny_gosciniec_branicki_start.jpg'            
          }, {
            imageUrl: '/static/sesja_narzeczenska_krakow_start.jpg'
          }, {
            imageUrl: '/static/monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_start.jpg'
          }, {
            imageUrl: '/static/slub_cywilny_i_wesele_w_plenerze_witkowa_chata_krakow_start.jpg'
          }, {
            imageUrl: '/static/ania_i_maciek_wesele_w_domu_weselnym_szlachecki_dwor_sieciechowice_start.jpg'
          }];

        return (
          <div>
            <Homepage slides={slides}
            headTitle={'Fotograf ślubny Kraków'}
            headDescription={'Fotograf ślubny Kraków. Piękne zdjęcia, pełne emocji reportaże ślubne. Sprawdź moją ofertę i portfolio. Album w cenie pakietu. Serdecznie zapraszam.'}
            headKeywords={'fotograf ślubny Kraków, fotograf na wesele'}
            headUrl={'http://99foto.pl'}

            backgroundImage={'url(/static/wesele_na_polu_golfowym_w_paczoltowicach_start.jpg)'}            

            leadNames={'IWONA i MARCIN'}
            leadTitle={'FOTOGRAF ŚLUBNY KRAKÓW I WESELE PO GÓRALSKU'}
            leadUrl={'wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice'} 
            leadImage={'url(/static/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg)'}
            />
          </div>
        );
    }
}