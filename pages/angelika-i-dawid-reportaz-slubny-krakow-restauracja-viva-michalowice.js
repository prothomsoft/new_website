import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {
    let slide = [{
      imageUrl: "/static/angelika_i_dawid_reportaz_slubny_krakow_restauracja_viva_michalowice_start.jpg"
    }];

    let images = [
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0042.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0001.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0002.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0003.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0004.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0008.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0005.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0006.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0009.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0007.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0010.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0011.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0012.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0013.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0014.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0015.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0016.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0017.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0018.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0019.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0020.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0021.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0022.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0023.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0024.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0025.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0027.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0028.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0029.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0030.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0031.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0032.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0150.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0035.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0034.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0037.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0038.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0039.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0040.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0041.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0043.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0044.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0045.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0046.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0047.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0048.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0049.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0050.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0051.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0053.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0054.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0052.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0055.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0056.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0057.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0058.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0059.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0060.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0061.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0062.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0063.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0151.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0066.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0067.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0068.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0069.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0070.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0071.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0072.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0073.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0074.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0075.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0076.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0077.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0078.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0079.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0080.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0082.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0081.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0084.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0083.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0086.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0085.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0087.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0088.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0089.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0095.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0090.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0091.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0104.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0092.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0093.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0094.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0096.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0097.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0098.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0099.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0100.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0101.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0105.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0102.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0103.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0106.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0107.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0108.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0109.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0115.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0111.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0112.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0113.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0114.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0116.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0117.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0120.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0118.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0119.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0121.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0122.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0110.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0123.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0124.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0125.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0126.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0127.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0129.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0128.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0130.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0131.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0132.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0133.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0135.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0134.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0137.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0136.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0138.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0139.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0140.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0141.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0142.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0143.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0144.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0145.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0146.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0147.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/08/fotograf_slubny_krakow_0149.jpg", height: 762 }
    ];

    return (
      <div>
        <Blogpage slide={slide}
          images={images}
          headTitle={'Reportaż ślubny Restauracja Viva Michałowice'}
          headDescription={'Dużo radości i szczęścia, piękny dzień i piękne wspomnienia. Angelika i Dawid. Najszczęśliwszy dzień w życiu tej wielce zakochanej pary.'}
          headKeywords={'fotograf ślubny kraków,reportaż ślubny kraków'}
          headUrl={'http://99foto.pl/angelika-i-dawid-reportaz-slubny-krakow-restauracja-viva-michalowice/'}

          entryContentP1={'Tym razem zapraszam na reportaż ślubny Angeliki i Dawida, który miałem przyjemność fotografować w ubiegłą sobotę w Michałowicach. Zdjęcia z przygotowań Angeliki rozpoczęliśmy w Zielonkach na &#8222;Krakowskich Przedmieściach&#8221; w Salonie Fryzjerskim u Pawła. Angelika okazała się być nie tylko zawodową fryzjerką, ale i świetną wizażystką. W kilka minut wykonała swój makijaż i czasu wystarczyło jeszcze na delikatne poprawki w makijażu siostry i mamy, które towarzyszyły jej podczas przygotowań w salonie. Uwaga, szef salonu Paweł i Klaudia tego samego dnia okazali się królami parkietu, i jestem przekonany, że fotograf na ich ślubie będzie miał mocno z górki. Prosto z salonu pojechaliśmy do domu rodzinnego Angeliki, by sfotografować dalszy ciąg przygotowań, a następnie do Dawida, który na piętrze wrzucił na siebie wszystkie elementy ślubnej garderoby. Krótkie błogosławieństwo i wspólnie pojechaliśmy odebrać Pannę Młodą.'}
          entryContentP2={'Ślub odbył się w USC w Iwanowicach, gdzie młodzi założyli obrączki, powiedzieli sobie TAK i doświadczyli pierwszego małżeńskiego pocałunku. Impreza odbyła się w <a href="http://vivasportklub.pl/restauracja">Restauracji Viva</a> w Michałowicach. Klasycznie poleciały kieliszki z szampana, Dawid przeniósł Angelikę przez próg i po pełnych emocji życzeniach, goście weselni zostali zaproszeni na obiad. Dalej za sprawą DJ Jacka &#8211; mistrza w dekoracji dymem i muzyce, którą proponował gościom weselnym dobra zabawa trwała do białego rana. Młodzi przygotowali szereg atrakcji, był pociąg, tort, pieczony świniak, podziękowania dla rodziców, oczepiny i kilka zabaw towarzyszących. Serdecznie zapraszam do oglądania historii Angeliki i Dawida. Więcej zdjęć w strefie klienta z hasłem z mojej wizytówki.'}

          slug={'angelika-i-dawid-reportaz-slubny-krakow-restauracja-viva-michalowice'}

          title={'REPORTAŻ ŚLUBNY KRAKÓW, RESTAURACJA VIVA MICHAŁOWICE - ANGELIKA i DAWID'}
          tags={'fotograf ślubny kraków,reportaż ślubny kraków'}
          date={'12 sierpnia 2016'}

          menuNames={'ANGELIKA i DAWID'}
          menuTitle={'REPORTAŻ ŚLUBNY KRAKÓW, RESTAURACJA VIVA MICHAŁOWICE'}

          leadNames={'KINGA i MACIEK'}
          leadTitle={'DEKORACJA SALI WESELNEJ W STYLU RUSTYKALNYM, OSP ZAWADA'}
          leadUrl={'/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada'} 
          leadImage={'url(/static/dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.jpg)'}
          />
      </div>
    );
  }
}