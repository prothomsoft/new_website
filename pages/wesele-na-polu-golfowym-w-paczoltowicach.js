import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {
    let slide = [{
      imageUrl: "/static/wesele_na_polu_golfowym_w_paczoltowicach_start.jpg"
    }];

    let images = [
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0042.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0001.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0002.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0003.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0004.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0005.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0006.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0007.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0008.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0009.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0010.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0011.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0012.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0014.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0013.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0015.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0016.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0017.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0018.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0019.jpg", height: 806 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0020.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0021.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0022.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0023.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0024.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0025.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0026.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0027.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0028.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0029.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0030.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0031.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0033.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0032.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0035.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0034.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0036.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0037.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0038.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0039.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0041.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0040.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0168.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0043.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0044.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0045.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0046.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0047.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0055.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0048.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0049.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0050.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0056.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0054.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0051.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0052.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0053.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0057.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0058.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0059.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0060.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0061.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0062.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0063.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0064.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0065.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0066.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0067.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0068.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0069.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0070.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0071.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0072.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0073.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0074.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0075.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0076.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0077.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0078.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0079.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0080.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0081.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0082.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0083.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0084.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0085.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0086.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0087.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0088.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0089.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0090.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0091.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0092.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0093.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0094.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0095.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0096.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0097.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0098.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0099.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0100.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0101.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0102.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0108.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0103.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0104.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0105.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0106.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0107.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0109.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0110.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0111.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0112.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0113.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0114.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0115.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0116.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0117.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0118.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0119.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0120.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0121.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0122.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0123.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0124.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0125.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0126.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0128.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0129.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0130.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0131.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0132.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0133.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0134.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0135.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0136.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0137.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0138.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0139.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0140.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0141.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0142.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0143.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0144.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0145.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0146.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0148.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0169.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0151.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0152.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0153.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0154.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0155.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0156.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0157.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0158.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0159.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0160.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0161.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0162.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0163.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0164.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0165.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0166.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0167.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0127.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/07/wesele_na_polu_golfowym_w_paczoltowicach_0150.jpg", height: 763 }
    ];

    return (
      <div>
        <Blogpage slide={slide}
          images={images}
          headTitle={'Wesele na polu golfowym w Paczółtowicach'}
          headDescription={'To wesele na polu golfowym w Paczółtowicach definiuje szaloną zabawę. Tym razem Highway to Hell zgniótł hity Zenka Martyniuka. Zapraszam na bloga.'}
          headKeywords={'krakow valley golf,pole golfowe paczółtowice,wesele na polu golfowym'}
          headUrl={'http://99foto.pl/wesele-na-polu-golfowym-w-paczoltowicach/'}

          entryContentP1={'Usytuowanie z dala od ulicznego ruchu przy pięknych, zielonych polach golfowych sprawia, że Krakow Valley Golf jest wymarzonym miejscem do organizowania zarówno hucznych jak i kameralnych przyjęć weselnych oraz bankietów i bali. Tak na swojej stronie internetowej swoją największą bo mieszczącą do 250 gości weselnych Salę Golfową reklamuje <a href="http://www.krakow-valley.com/idm,243,wesela.html" target="_blank">Krakow Valley Golf &#038; Country Club w Paczółtowicach</a>. I powiem Wam, że wszystko się zgadza, ale zacznijmy od początku. Przygotowania rozpoczęliśmy w na ulicy poselskiej w Krakowie już o godzinie dziewiątej rano. Dawid starannie i profesjonalnie ułożył włosy Asi, natomiast wizażystka Ania wykonała świetny makijaż z mega konturowaniem. Wszystko to w jedno przedpołudnie w Salonie Fryzjerskim <a href="https://www.facebook.com/HEDONIK/" target="_blank">HEDONIK Hair Studio</a>. Część dalsza przygotowań odbyła się w mieszkaniu Asi w prawdziwie rodzinnej atmosferze.'}
          entryContentP2={'Podczas ubierania sukni ślubnej, biżuterii i butów bardzo przydały się pomocne dłonie druhny Ani i mamy Asi. Grzegorzowi w dopinaniu mankietów i prostowaniu muchy pomagał Paweł. Asia tradycyjnie budowała napięcie i Grzegorz zobaczył ją w sukni ślubnej tuż przed samym błogosławieństwem. Uśmiech na twarzach młodych mówił wszystko. Gdy rodzice skończyli błogosławieństwo udaliśmy się do <a href="http://www.parafiapaczoltowice.pl/" target="_blank">Kościoła pw. Narodzenia NMP w Paczółtowicach</a>. Jest to piękny drewniany kościół, którego punktem centralnym jest obraz Matki Boskiej z Dzieciątkiem.  Odsłonięcie tego obrazu rozpoczęło ceremonię zaślubin Joanny i Grzegorza. Ksiądz wygłosił piękne kazanie, młodzi powiedzieli sobie sakramentalne TAK i zostali obsypani kompletnie wszystkim (leciał ryż, piniądze i kwiatowo, sercowe weselne konfetti). Zabawa na parkiecie rozpoczęła się pierwszym tańcem, na potrzeby którego Zespół Muzyczny <a href="https://www.facebook.com/JaMajka-901432853226130/" target="_blank">JaMajka</a> przygotował specjalny cover, znacząco odbiegający od klasycznego ślubnego repertuaru w stylu Zenka Martyniuka (wszyscy wiedzą o co chodzi). Chwilę później grając Highway To Hell na dobrym gazie (oczywiście w przenośni) po raz kolejny udowodnili, że Rock and Roll is a King. Na parkiecie działo się dużo, a stolik muzykantów był wyjątkowo pełny gości prześcigujących się w selekcji utworów i wymyślnych dedykacjach. Świetni bardzo otwarci ludzie i szalona (to słowo naprawdę tu pasuje) zabawa do białego rana. Miłego oglądania, a po więcej zdjęć zapraszam do strefy klienta.'}

          slug={'wesele-na-polu-golfowym-w-paczoltowicach'}

          title={'WESELE NA POLU GOLFOWYM W PACZÓŁTOWICACH - JOANNA i GRZEGORZ'}
          tags={'krakow valley golf,pole golfowe paczółtowice,wesele na polu golfowym'}
          date={'27 lipca 2017'}

          menuNames={'JOANNA i GRZEGORZ'}
          menuTitle={'WESELE NA POLU GOLFOWYM W PACZÓŁTOWICACH'}

          leadNames={'IWONA i MARCIN'}
          leadTitle={'WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE'}
          leadUrl={'/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice'} 
          leadImage={'url(/static/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg)'}
          />
      </div>
    );
  }
}