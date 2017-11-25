import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {
    let slide = [{
      imageUrl: "/static/sabina_i_wiesiek_zdjecia_slubne_dworek_fantazja_skomielna_biala_start.jpg"
    }];

    let images = [
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0001.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0002.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0003.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0004.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0005.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0006.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0007.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0008.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0009.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0010.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0011.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0012.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0013.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0014.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0015.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0016.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0017.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0018.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0019.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0020.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0021.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0022.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0023.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0024.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0025.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0026.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0027.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0028.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0029.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0030.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0031.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0032.jpg", height: 526 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0033.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0034.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0035.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0036.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0038.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0037.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0039.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0040.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0041.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0059.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0042.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0043.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0044.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0045.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0046.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0047.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0048.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0049.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0050.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0051.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0052.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0053.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0054.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0056.jpg", height: 806 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0055.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0057.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0058.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0060.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0062.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0061.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0063.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0064.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0065.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0066.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0067.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0069.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0068.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0070.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0071.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0072.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0073.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0074.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0075.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0076.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0077.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0078.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0079.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0080.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0081.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0082.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0083.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0084.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0085.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0086.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0087.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0088.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0089.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0090.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0091.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0092.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0093.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0094.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0095.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0096.jpg", height: 809 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0097.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0098.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0099.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0100.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0101.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0102.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0103.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0104.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0105.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0106.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0107.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0108.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0109.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0110.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0111.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0112.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0113.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0114.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0115.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0116.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0117.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0118.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0119.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0120.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0121.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0123.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0122.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0124.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0126.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0125.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0127.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0128.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0129.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0130.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0131.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0132.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0133.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0134.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0135.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0136.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0137.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0139.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0138.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0140.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0141.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0142.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0143.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0144.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0145.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/fotograf_slubny_jordanow_0146.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_dworek_tomaszowice_0001.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_dworek_tomaszowice_0002.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_dworek_tomaszowice_0003.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_dworek_tomaszowice_0004.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_dworek_tomaszowice_0007.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_dworek_tomaszowice_0005.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_dworek_tomaszowice_0006.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_dworek_tomaszowice_0008.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_dworek_tomaszowice_0010.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_dworek_tomaszowice_0009.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_dworek_tomaszowice_0012.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_dworek_tomaszowice_0016.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_dworek_tomaszowice_0015.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_dworek_tomaszowice_0014.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_dworek_tomaszowice_0013.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_dworek_tomaszowice_0011.jpg", height: 763 }
    ];

    return (
      <div>
        <Blogpage slide={slide}
          images={images}
          headTitle={'Ślub w Dworku Fantazja w Skomielnej Białej'}
          headDescription={'Jesienny ale słoneczny sobotni dzień, świat pokryty ogromem mieniących się w słońcu złotych liści i ulica Mickiewicza w Jordanowie. Miłego oglądania.'}
          headKeywords={'reportaż ślubny jordanów,fotograf na wesele jordanów'}
          headUrl={'http://99foto.pl/sabina-i-wiesiek-zdjecia-slubne-dworek-fantazja-skomielna-biala/'}

          entryContentP1={'Jesienny ale słoneczny sobotni dzień, świat pokryty ogromem mieniących się w słońcu złotych liści i ulica Mickiewicza w Jordanowie, pierwszy przystanek w najważniejszym dla Sabiny i Wieśka dniu. Przygotowania i piękny makijaż ślubny wykonany przez wizażystkę Patrycję, tysiące złotych rad od kamerzysty gaduły Arka z <a href="http://allemedia.pl" target="_blank">Allemedia</a>, którego pozdrawiam &#8211; tak zaczęliśmy. Nie był to mój pierwszy ślub w tych stronach i jak już wielokrotnie pisałem na blogu jestem zachwycony otwartością i gościnnością ludzi w tych stronach. Towarzyszyliśmy też Wieśkowi podczas przygotowań i pełnego wzruszeń błogosławieństwa. Chwilę później już wszyscy razem obserwowaliśmy dumnego Tatę Sabiny, który prowadził córkę do ołtarza.'}
          entryContentP2={'Po pięknej ceremoni, zrobiliśmy duże zdjęcie grupowe i udaliśmy się do sali weselnej w <a href="http://www.dworekfantazja.pl/" target="_blank">Dworku Fantazja w Skomielnej Białej</a>. Sabina i Wiesiek przygotowali dużo atrakcji dla swoich gości, tort, pieczonego świniaka, zabawy z rekwizytami, życzenia urodzinowe dla siostry i podziękowania dla rodziców. Daniel jeden z gości, w jednej chwili uklęknął i oświadczył się swojej ukochanej Kindze. Dziś cały facebook już o tym wie, ale wtedy były mega emocje i niespodzianka, również dla obecnych na sali rodziców. Szalona zabawa i super ekipa potwierdziła, że czasem warto wybrać się dalej niż Kraków. Wasz fotograf ślubny dziękuję za ten wyjątkowy dzień, ciepłe przyjęcie i genialną atmosferę. Miłego oglądania, a po więcej zdjęć zapraszam gości weselnych do strefy klienta z hasłem z mojej wizytówki. Na końcu wpisu bonus i kilka klatek plenerowych.'}

          slug={'sabina-i-wiesiek-zdjecia-slubne-dworek-fantazja-skomielna-biala'}

          title={'ZDJĘCIA ŚLUBNE DWOREK FANTAZJA SKOMIELNA BIAŁA - SABINA i WIESIEK'}
          tags={'reportaż ślubny jordanów,fotograf na wesele jordanów'}
          date={'29 października 2016'}

          menuNames={'SABINA i WIESIEK'}
          menuTitle={'ZDJĘCIA ŚLUBNE DWOREK FANTAZJA SKOMIELNA BIAŁA'}

          leadNames={'KAROLINA i BARTEK'}
          leadTitle={'ZDJĘCIA ŚLUBNE RESTAURACJA STEK SKAWINA'}
          leadUrl={'/zdjecia-slubne-restauracja-stek-skawina'} 
          leadImage={'url(/static/zdjecia_slubne_restauracja_stek_skawina_start.jpg)'}
          />
      </div>
    );
  }
}