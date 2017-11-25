import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {
    let slide = [{
      imageUrl: "/static/marlena_i_dawid_zdjecia_slubne_z_goralskiego_slubu_w_osadzie_kamienica_start.jpg"
    }];

    let images = [
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0001.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0003.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0002.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0004.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0005.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0008.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0006.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0007.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0009.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0012.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0010.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0013.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0011.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0016.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0014.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0015.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0017.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0018.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0019.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0021.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0020.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0022.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0023.jpg", height: 806 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0025.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0026.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0027.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0028.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0029.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0030.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0031.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0032.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0033.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0034.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0035.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0036.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0037.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0038.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0039.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0040.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0041.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0042.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0043.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0044.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0045.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0046.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0047.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0048.jpg", height: 395 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0049.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0050.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0051.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0052.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0053.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0054.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0055.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0056.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0057.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0058.jpg", height: 816 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0059.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0060.jpg", height: 816 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0061.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0062.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0064.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0065.jpg", height: 816 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0066.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0067.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0068.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0069.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0070.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0071.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0072.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0073.jpg", height: 816 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0063.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0074.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0075.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0076.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0077.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0078.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0079.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0080.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0081.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0083.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0082.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0084.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0085.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0086.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0087.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0088.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0089.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0090.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0091.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0092.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0093.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0094.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0095.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0096.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0097.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0098.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0099.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0100.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0101.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0102.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0103.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0104.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0105.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0106.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0107.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0108.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0109.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0110.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0111.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0112.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0113.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0114.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0115.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0116.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0117.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0118.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0119.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0120.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0121.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0122.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0123.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0124.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0125.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0126.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0127.jpg", height: 763 },     
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0161.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0129.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0130.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0131.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0132.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0133.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0134.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0135.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0136.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0137.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0138.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0139.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0140.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0141.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0142.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0143.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0144.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0145.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0146.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0147.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0148.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0149.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0150.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0151.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0152.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0153.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0154.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0155.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0160.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0157.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0158.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0159.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0156.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/09/fotograf_na_wesele_krakow_0128.jpg", height: 763 }
    ];

    return (
      <div>
        <Blogpage slide={slide}
          images={images}
          headTitle={'Zdjęcia ślubne, góralski ślub w osadzie kamienica'}
          headDescription={'Ostatnia sobota to powrót w tamte strony i góralski ślub Marleny i Dawida w miejscowości Kamienica. Górale to potrafią się bawić. Fotograf ślubny zaprasza.'}
          headKeywords={'fotograf na wesele kraków,reportaż ślubny kraków'}
          headUrl={'http://99foto.pl/marlena-i-dawid-zdjecia-slubne-z-goralskiego-slubu-w-osadzie-kamienica/'}

          entryContentP1={'Jakieś siedem lat temu w miejscowości Maniowy goście bawili się na moim weselu. Ostatnia sobota to powrót w tamte góralskie strony i góralski ślub Marleny i Dawida w miejscowości Kamienica, przez którą w drodze do Krościenka przejeżdżałem już setki razy. Przygotowanie rozpoczęliśmy w <a href="https://www.facebook.com/Salon-Fryzjerski-anette-1464590760459423/" target="_blank">Salonie Fryzjerskim Annete</a> w Szczawie. Gdy fryzura była już gotowa pojechaliśmy do domu Marleny, gdzie kontynuowaliśmy przygotowania. Góralscy drużbowie znali setki przyśpiewek i w finlandzkim tonie długo nie pozwalali wyjść Marlenie z domu. Błogosławieństwo i chwilę później byliśmy już w drodze do <a href="http://www.parafia-kamienica-tarnow.pl/" target="_blank">Kościoła Przemienienia Pańskiego w Kamienicy</a>. Po drodze na młodych czekały trzy bramy przygotowane z największą starannością i według góralskiej tradycji.'}
          entryContentP2={'W kościele okazało się, że atmosfera niczym nie różniła się od tej w domu. Od pierwszych minut dało się wyczuć przyjacielskie relacje księży i młodych, jak się potem dowiedziałem budowane przez lata ich uczestnictwa w życiu religijnym parafii. Na mszy nie zabrakło oczywiście pięknej oprawy muzycznej. W <a href="http://www.osada-kamienica.ns48.pl/" target="_blank">Osadzie Kamienica</a> rodzice przywitali młodych chlebem i solą. <a href="http://www.jarezytko.pl/pl_PL/" target="_blank">Zespół Jare Zytko</a> dbał o świetny klimat na parkiecie. Szalona zabawa i super ekipa z góralską kulturą w sercach potwierdza, że czasem warto wybrać się dalej niż Kraków. Wasz fotograf ślubny dziękuję za ten wyjątkowy dzień, ciepłe przyjęcie i genialną atmosferę. Miłego oglądania, a po więcej zdjęć zapraszam gości weselnych do strefy klienta z hasłem z mojej wizytówki.'}

          slug={'marlena-i-dawid-zdjecia-slubne-z-goralskiego-slubu-w-osadzie-kamienica'}

          title={'ZDJĘCIA ŚLUBNE Z GÓRALSKIEGO ŚLUBU W OSADZIE KAMIENICA - MARLENA i DAWID'}
          tags={'fotograf na wesele kraków,reportaż ślubny kraków'}
          date={'2 września 2016'}

          menuNames={'MARLENA i DAWID'}
          menuTitle={'ZDJĘCIA ŚLUBNE Z GÓRALSKIEGO ŚLUBU W OSADZIE KAMIENICA'}

          leadNames={'IWONA I MARCIN'}
          leadTitle={'SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA'}
          leadUrl={'/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja'} 
          leadImage={'url(/static/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg)'}
          />
      </div>
    );
  }
}