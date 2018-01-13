import Singlepage from '../components/singlepage'

export default class ClientPageComponent extends React.Component {
    render() {

        let clients = [
              
            // row 1
            { image1: "/static/portfolio_dtp/szafrantu-reportaz-slubny-zabierzow-bochenski-magda-waldek.jpg", 
              url1: 'http://sk.99foto.pl/logowanie/magdawaldek.html',
              title1: 'REPORTAŻ ŚLUBNY SZAFRANTU NIEPOŁOMICE<br/>MAGDALENA i WALDEMAR',
              image2: "/static/portfolio_dtp/karczma-pod-kogutkiem-reportaz-slubny-makow-podhalanski-portfolio.jpg", 
              url2: 'http://sk.99foto.pl/logowanie/gosiarafal.html',
              title2: 'REPORTAŻ ŚLUBNY MAKÓW PODHALAŃSKI<br/>MAŁGORZATA i RAFAŁ',
              image3: "/static/portfolio_dtp/ewa_mateusz_hotel_lenart_portfolio.jpg", 
              url3: 'http://sk.99foto.pl/logowanie/ewamateusz.html',
              title3: 'WESELE W HOTELU LENART WIELICZKA<br/>EWA i MATEUSZ'},

              // row 2
              { image1: "/static/portfolio/wesele_na_polu_golfowym_w_paczoltowicach_portfolio.jpg", 
              url1: 'http://sk.99foto.pl/logowanie/joannagrzegorz.html',
              title1: 'WESELE NA POLU GOLFOWYM<br/>JOANNA i GRZEGORZ',
              image2: "/static/portfolio/dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_portfolio.jpg", 
              url2: 'http://sk.99foto.pl/logowanie/kingamaciek.html',
              title2: 'DEKORACJA SALI W STYLU RUSTYKALNYM<br/>KINGA i MACIEK',
              image3: "/static/portfolio/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_portfolio.jpg", 
              url3: 'http://sk.99foto.pl/logowanie/iwonamarcin.html',
              title3: 'SESJA ZDJĘCIOWA SŁOWACKIE GÓRY<br/>IWONA i MARCIN'},

              // row 3
              { image1: "/static/portfolio/sesja_zdjeciowa_dwor_tomaszowice_krakow_portfolio.jpg", 
              url1: 'http://sk.99foto.pl/logowanie/karolinabartek.html',
              title1: 'SESJA ZDJĘCIOWA W KRAKOWIE<br/>KAROLINA i BARTEK',
              image2: "/static/portfolio/sesja_slubna_w_plenerze_park_krajobrazowy_w_ojcowie_i_okolice_portfolio.jpg", 
              url2: 'http://sk.99foto.pl/logowanie/olapawel.html',
              title2: 'PARK KRAJOBRAZOWY W OJCOWIE<br/>ALEKSANDRA i PAWEŁ',
              image3: "/static/portfolio/monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_portfolio.jpg", 
              url3: 'http://sk.99foto.pl/logowanie/monikarafal.html',
              title3: 'RESTAURACJA CHOCHOŁOWY DWÓR<br/>MONIKA i RAFAŁ'},

               // row 4
               { image1: "/static/portfolio/sesja_narzeczenska_krakow_portfolio.jpg", 
               url1: 'http://sk.99foto.pl/logowanie/kingamacieksn.html',
               title1: 'SESJA NARZECZEŃSKA KRAKÓW<br/>KINGA i MACIEK',
               image2: "/static/portfolio/slub_cywilny_i_wesele_w_plenerze_witkowa_chata_krakow_portfolio.jpg", 
               url2: 'http://sk.99foto.pl/logowanie/kingajulien.html',
               title2: 'ŚLUB CYWILNY i WESELE W PLENERZE<br/>KINGA i JULIEN<',
               image3: "/static/portfolio/dom_weselny_marion_wesele_tarnow_i_zdjecia_slubne_portfolio.jpg", 
               url3: 'http://sk.99foto.pl/logowanie/annamichal.html',
               title3: 'ZDJĘCIA ŚLUBNE MARION TARNÓW<br/>ANNA i MICHAŁ'},
        ];
        
        return (
          <div>
            <Singlepage
             clients={clients}
            
              headTitle={'Strefa klienta'}
              headDescription={'Galeria zdjęć zabezpieczona hasłem. Wasze historie ślubne i reportaże. Dostęp tylko dla Was.'}
              headKeywords={'strefa klienta, historie ślubne'}
              headUrl={'http://99foto.pl/strefa-klienta/'}
              componentContentName={'client'}

              backgroundImage={'url(/static/sesja_zdjeciowa_dwor_tomaszowice_krakow_start.jpg)'}

              leadNames={'KAROLINA i BARTEK'}
              leadTitle={'SESJA ZDJĘCIOWA DWÓR TOMASZOWICE, OPERA, KAZIMIERZ'}
              leadUrl={'/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz'} 
              leadImage={'url(/static/sesja_zdjeciowa_dwor_tomaszowice_krakow_start.jpg)'}              
              />
          </div>
        );
    }
}