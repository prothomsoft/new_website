import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {
    let slide = [{
      imageUrl: "/static/dwor_szlachecki_sieciechowice_reportaz_slubny_miechow_start.jpg"
    }];

    let images = [
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0075.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0002.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0004.jpg", height: 527 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0003.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0005.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0007.jpg", height: 762 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0006.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0008.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0009.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0010.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0011.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0012.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0013.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0014.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0015.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0016.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0017.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0019.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0018.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0020.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0021.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0022.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0023.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0024.jpg", height: 850 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0025.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0027.jpg", height: 527 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0026.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0028.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0029.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0030.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0033.jpg", height: 805 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0032.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0034.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0031.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0036.jpg", height: 806 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0035.jpg", height: 850 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0037.jpg", height: 527 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0038.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0039.jpg", height: 527 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0040.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0042.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0041.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0043.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0044.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0045.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0046.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0050.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0047.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0048.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0049.jpg", height: 527 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0051.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0052.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0053.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0054.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0055.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0056.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0057.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0058.jpg", height: 527 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0059.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0060.jpg", height: 527 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0061.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0066.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0062.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0063.jpg", height: 527 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0064.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0065.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0067.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0068.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0069.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0070.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0071.jpg", height: 527 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0072.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0073.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0074.jpg", height: 763 },        
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0076.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0077.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0078.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0079.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0080.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0081.jpg", height: 527 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0082.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0095.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0083.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0084.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0085.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0086.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0087.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0088.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0091.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0092.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0089.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0093.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0097.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0094.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0096.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0099.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0101.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0100.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0102.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0098.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0103.jpg", height: 527 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0104.jpg", height: 762 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0105.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0106.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0107.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0108.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0109.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0110.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0111.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0112.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0113.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0114.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0115.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0116.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0117.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0118.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0119.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0120.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0121.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0122.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0123.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0124.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0125.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0126.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0127.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0128.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0129.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0130.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0131.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0132.jpg", height: 1054 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0133.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0134.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0135.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0136.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0139.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0137.jpg", height: 851 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0138.jpg", height: 526 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0140.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0141.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0142.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0143.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0144.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0145.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0147.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0148.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0149.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0150.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0151.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0152.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0153.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0154.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0155.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0156.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0157.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0158.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0159.jpg", height: 805 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0160.jpg", height: 527 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0161.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0162.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0163.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0164.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0165.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0166.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0167.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0168.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0169.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0170.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0171.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0172.jpg", height: 382 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0174.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0173.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0175.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0176.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0177.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0178.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0189.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0179.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0180.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0181.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0182.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0183.jpg", height: 383 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0184.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0185.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0186.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0187.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0188.jpg", height: 763 },
        { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/dwor_szlachecki_sieciechowice_zdjecia_slubne_0146.jpg", height: 763 }        
      
  ];

  
  

    return (
      <div>
        <Blogpage slide={slide}
          images={images}
          headTitle={'Dwór Szlachecki Sieciechowice, reportaż ślubny Miechów'}
          headDescription={'Wykup Panny Młodej z górnej półki. Czego ten drużba tam nie przyniósł. Były dynie, ananasy, indyki i procenty. Dwór Szlachecki Sieciechowice. Zapraszam.'}
          headKeywords={'dwór szlachecki sieciechowice,fotograf ślubny miechów'}
          headUrl={'http://99foto.pl/dwor-szlachecki-sieciechowice-reportaz-slubny-miechow/'}

          entryContentP1={'Na mojej mapie ślubów mocno zaznacza się Kraków, Jordanów, Proszowice, Tarnów, tym razem jednak wybrałem się na północ i drogą na Warszawę dotarłem do Miechowa. Właśnie tam w <a href="https://www.facebook.com/StudioKosmetyczneAtelierUrody/" target="_blank">Studio Kosmetycznym Atelier Urody Strefa Piękna</a> rozpoczęły się przygotowania do jednego z piękniejszych ślubów w jakim miałem okazję uczestniczyć, ślubu Oli i Pawła. Ułożenie fryzury trwało trochę ponad godzinkę i po tym czasie tuż za rogiem odnaleźliśmy kolejne Atelier tym razem <a href="https://www.facebook.com/Kosmetologia-Lecznicza-Atelier-194251304264357/" target="_blank">Kosmetologię Leczniczą w Miechowie</a>, gdzie dziewczyny wizażystki same pomalowane jak na ślub, wykonały wspaniałe makijaże Oli i jej mamie. Plan dnia był świetnie przygotowany i jego kolejnym punktem było sfotografowanie przygotowań u Pawła. Krótkie błogosławieństwo i białe BMW podjechało pod dom rodzinny Oli. Tutaj zaczęła się zabawa, wykup Panny młodej, jakiego pomimo sporej ilości ślubów na moim koncie jeszcze nie widziałem. Czego ten drużba weselny się tam nie przyniósł. Były dynie, ananasy, indyk i trochę procentów.'}
          entryContentP2={'Bracia w gustownych przebraniach, które uzupełniały sandały i białe skarpety na chwilę zamknęli drzwi Vana i wypróbowali potencjał Pawła. Dał radę bo w końcu udało się wykupić Olę. Buziak, błogosławieństwo i udaliśmy się do <a href="http://www.parafia.golcza.com.pl/" target="_blank">Kościóła NMP w Gołczy</a>. Ładny jasny kościół, piękne kazanie i szczęście rysujące się na twarzach młodych, tyle zapamiętałem. Po życzeniach rodzice Państwa Młodych przywitali ich chlebem i solą. Przywitanie odbyło się w <a href="http://www.szlacheckidwor.com.pl/" target="_blank">Szlacheckim Dworze Sieciechowice</a> &#8211; ogromnej sali, która może pomieści ponad dwustu gości. Pierwszy taniec i kilka nie wyciągniętych z rękawa lecz solidnie wyćwiczonych figur tanecznych. Pełny parkiet przez całą imprezę i <a href="http://www.top-music.com.pl/" target="_blank">Zespół muzyczny TOP-MUSIC</a>, który nie dał gościom posiedzieć przy stolikach nawet pięciu minut. Były też oczywiście zabawy, pociąg, odgadywanie piosenek, oczepiny z odcinaniem wstązek kolejnym kandydatkom na przyszłe żony, podziękowania dla rodziców i przepyszny tort weselny. Ścieżkę audio i video zapewnił Krzysiek z <a href="http://www.mkvideo.pl/" target="_blank">MK Studio Video Filmowanie</a>. Niesamowity dzień, spędzony w wybornym towarzystwie. Olu i Pawle cieszę się bardzo, że mogłem być tam z Wami w tych najważniejszych chwilach Waszego życia. Zapraszam do oglądania wybranych zdjęć. Po więcej zapraszam do strefy klienta z hasłem z mojej wizytówki.'}

          slug={'dwor-szlachecki-sieciechowice-reportaz-slubny-miechow'}

          title={'DWÓR SZLACHECKI SIECIECHOWICE, REPORTAŻ ŚLUBNY MIECHÓW - OLA i PAWEŁ'}
          tags={'Dwór Szlachecki Sieciechowice, fotograf ślubny Miechów'}
          date={'31 sierpnia 2017'}

          menuNames={'OLA i PAWEŁ'}
          menuTitle={'DWÓR SZLACHECKI SIECIECHOWICE, REPORTAŻ ŚLUBNY MIECHÓW'}          

          leadNames={'JUSTYNA i DAMIAN'}
          leadTitle={'SESJA ZDJĘCIOWA ZAKRZÓWEK, SKAŁKI TWARDOWSKIEGO KRAKÓW'}
          leadUrl={'/sesja-zdjeciowa-zakrzowek-skalki-twardowskiego-krakow'} 
          leadImage={'url(/static/sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_start.jpg)'}
          
          />
      </div>
    );
  }
}