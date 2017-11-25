import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {
    let slide = [{
      imageUrl: "/static/kasia_i_dariusz_zdjecia_slubne_w_domu_weselnym_willa_podlesie_start.jpg"
    }];

    let images = [
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0066.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0001.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0002.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0003.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0004.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0005.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0006.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0007.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0008.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0009.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0010.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0011.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0012.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0013.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0014.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0015.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0016.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0017.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0019.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0018.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0020.jpg", height: 805 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0021.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0022.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0023.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0024.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0025.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0026.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0027.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0028.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0029.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0030.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0031.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0032.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0033.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0034.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0035.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0036.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0037.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0038.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0039.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0040.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0041.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0042.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0043.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0044.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0045.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0046.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0048.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0047.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0049.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0050.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0051.jpg", height: 526 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0052.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0053.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0054.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0055.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0056.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0057.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0058.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0059.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0060.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0061.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0062.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0063.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0064.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0065.jpg", height: 805 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0067.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0068.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0069.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0070.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0071.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0072.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0073.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0074.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0075.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0076.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0077.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0078.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0079.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0080.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0081.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0082.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0083.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0084.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0085.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0086.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0087.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0088.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0089.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0090.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0091.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0092.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0093.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0094.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0095.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0096.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0097.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0098.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0099.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0100.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0101.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0102_1.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0105.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0103.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0104.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0106.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0107.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0108.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0109.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0110.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0112.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0114.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0115.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0116.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0117.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0118.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0119.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0113.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0111.jpg", height: 762 }
    ];

    return (
      <div>
        <Blogpage slide={slide}
          images={images}
          headTitle={'Fotograf na wesele Willa Podlesie Rzuchowa'}
          headDescription={'Wielki dzień, nie zabrakło uśmiechów, wyjątkowej magii i świetnej zabawy. Zobaczcie sami jak Kasia i Darek stali się najszczęśliwszymi ludźmi na świecie...'}
          headKeywords={'fotograf na wesele tarnów,fotograf na wesele willa podlesie,fotograf ślubny kraków'}
          headUrl={'http://99foto.pl/kasia-i-dariusz-zdjecia-slubne-w-domu-weselnym-willa-podlesie/'}

          entryContentP1={'Tym razem trochę dalej bo nie Kraków, a Tarnów. W rolach głównych Kasia, Darek i ich mała córeczka Lidia. Przygotowania zaczęliśmy od makijażu w studiu tegorocznej mistrzyni świata wizażu <a href="https://www.facebook.com/klaudiaklosmakeupartist/" target="_blank">Klaudi Kłos</a>. Następnie, fryzura i kilka minut po godzinie dwunastej dotarliśmy do domu rodzinnego Kasi. Atmosfera była wyjątkowo wesoła, czyli pełny luz. Darek zaskoczył wszystkich, zjawiając się trochę wcześniej. Chwilę później przybyli goście z Grecji, którzy jak się okazało później zaskoczyli wszystkich świetnie wykonanym greckim show. Z biegiem czasu gości przybywało.'}
          entryContentP2={'Po rodzinnym błogosławieństwie udaliśmy się do <a href="http://www.tarnowiec.diecezja.tarnow.pl/index_a.html" target="_blank">Kościoła pw. Św. Józefa Rzemieślnika w Tarnowcu</a>, gdzie odbył się ślub. Wyjątkowy klimat, piękna msza i co najważniejsze, uśmiech na twarzach największych szczęściarzy tego dnia.  Po ceremonii udaliśmy się na salę weselną. Wesele odbyło się w Domu Weselnym <a href="https://www.facebook.com/WillaPodlesie/" target="_blank">Willa Podlesie</a> w Rzuchowej. Co tu dużo mówić&#8230; goście zdecydowanie dopisali, zabawa była wyjątkowo udana. Innymi słowy, działo się! Przy TAKIM zespole, z TAKIMI gośćmi i TAKIMI Młodymi, wesele musiało być GENIALNE. Działo się naprawdę wiele, a pakiet w przerwach parował z gorąca (no prawie). Fotografowi, aż żal było kończyć pracę&#8230; Serdeczne pozdrowienia dla Waszej trójki, gości weselnych i zespołu. Miłego oglądania.'}

          slug={'kasia-i-dariusz-zdjecia-slubne-w-domu-weselnym-willa-podlesie'}

          title={'ZDJĘCIA ŚLUBNE W DOMU WESELNYM WILLA PODLESIE - KASIA i DAREK'}
          tags={'fotograf na wesele tarnów,fotograf na wesele willa podlesie,fotograf ślubny kraków'}
          date={'27 kwietnia 2016'}

          menuNames={'KASIA i DAREK'}
          menuTitle={'ZDJĘCIA ŚLUBNE W DOMU WESELNYM WILLA PODLESIE'}

          leadNames={'KAROLINA i BARTEK'}
          leadTitle={'SESJA ZDJĘCIOWA DWÓR TOMASZOWICE, OPERA, KAZIMIERZ'}          
		  leadUrl={'/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz'} 
          leadImage={'url(/static/sesja_zdjeciowa_dwor_tomaszowice_krakow_start.jpg)'}
          />
      </div>
    );
  }
}