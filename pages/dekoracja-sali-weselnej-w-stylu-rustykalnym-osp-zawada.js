import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_0181.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_001.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_007.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_004.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_008.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_006.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_010.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_011.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_012.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_014.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_015.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_018.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_021.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_022.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_023.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_025.jpg", height: 566 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_032.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_035.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_036.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_037.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_038.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_042.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_040.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_041.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_043.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_046.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_048.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_049.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_047.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_050.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_051.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_052.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_054.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_056.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_055.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_057.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_058.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_063.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_061.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_062.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_064.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_065.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_066.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_067.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_068.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_069.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_070.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_071.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_072.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_074.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_075.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_076.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_077.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_078.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_073.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_079.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_080.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_081.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_082.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_083.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_085.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_086.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_087.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_088.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_089.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_084.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_090.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_091.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_092.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_093.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_094.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_095.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_096.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_097.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_098.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_099.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_101.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_100.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_117.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_102.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_103.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_104.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_105.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_116.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_106.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_107.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_114.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_108.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_109.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_115.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_110.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_111.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_112.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_113.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_118.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_119.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_120.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_121.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_122.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_123.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_130.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_126.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_127.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_124.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_131.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_129.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_128.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_132.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_133.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_134.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_135.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_136.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_137.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_138.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_139.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_140.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_141.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_142.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_143.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_144.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_145.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_146.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_147.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_148.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_149.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_151.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_152.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_153.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_163.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_154.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_150.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_159.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_156.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_155.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_157.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_158.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_160.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_161.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_162.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_165.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_164.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_168.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_166.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_167.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_169.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_170.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_171.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_172.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_173.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_174.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_175.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_176.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_177.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/06/dekoracja_sali_weselnej_styl_rustykalny_178.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Dekoracja sali weselnej, styl rustykalny, OSP Zawada"}
                    headDescription={"Bordowy Fiat 125p. Aniołowie, którzy wystrzelili czerwone serca w kosmos. Balony, białe balony, które żyły krótko, ale wszyscy zapamiętamy je na długo."}
                    headKeywords={"dekoracja sali weselnej,styl rustykalny,osp zawada,fotograf ślubny myślenice"}
                    headUrl={"https://99foto.pl/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada/"}
                    entryContentP1={
                        'Liczba atrakcji i miejsc do odwiedzenia w położonych niedaleko od Krakowa Myślenicach była długa, więc tym razem ślubna sobota rozpoczęła się wcześnie rano. Świetna pogoda, bezchmurne niebo i lato w pełni zapowiadało niezwykle udany dzień i super zdjęcia w kolejnej niezapomnianej, opowiedzianej od początku do końca historii ślubnej. Przygotowania Kingi rozpoczęły się w sercu Myślenic w <a href="https://www.facebook.com/Akademia-Urody-916777441721706" target="_blank" rel="nofollow">Salonie Akademii Urody</a> pod okiem fryzjera Damiana Pulchnego. Pięć stanowisk w pełni obsadzonych i zakaz palenia wynikający z ilości lakieru we wdychanym powietrzu. Gdy fryzura nabrała kształtów i została solidnie utrwalona udaliśmy się do wizażystki Ani Starowicz i jej <a href="https://www.facebook.com/SOHOStudioUrody/" target="_blank" rel="nofollow">Studia Urody SOHO</a>. W garażu Maćka czekał już wypieszczony, wypolerowany do granic możliwości, bordowy Fiat 125p. Kolekcjonerskie detale znalazły swoje miejsce obok klasycznej białej koszuli i granatowego garnituru. Maciek był gotowy do akcji, tym razem jednak nie strażackiej.'
                    }
                    entryContentP2={
                        'Balony, białe balony, żyły krótko, ale wszyscy zapamiętamy je na długo, nie lubiły słońca. Suknia ślubna powiewająca na wietrze w pełnym zieleni ogrodzie, wianek i pełne różnokolorych kwiatów bukiety, piękna biżuteria to okoliczności w których Kinga dotarła do etapu pełnej gotowości. Rozpoczęło się pełne emocji błogosławieństwo, po którym udaliśmy się do <a href="https://www.zarabie.com/" target="_blank" rel="nofollow">Kościoła św. Franciszka z Asyżu w Myślenicach &#8211; Zarabiu</a>. Po wyjściu z kościoła na Kingę i Maćka czekali aniołowie, którzy puścili czerwone serca w kosmos i pracowicie zajmowali się zabawianiem dzieciaków bańkami mydlanymi. Wiele uśmiechów, moc gorących życzeń i super auto zawiozło Młodych do <a href="https://ospzawada.pl/" target="_blank" rel="nofollow">Sali Balowej OSP Zawada</a>. Dekoracja sali weselnej to istny majstersztyk. Styl rustykalny i znowu niesamowita dbałość o najdrobniejsze detale. Młodych przywitali rodzice, kieliszki nie trafiły żadnej żarówki i rozpoczął się mistrzowski pierwszy taniec. <a href="https://facebook.com/zespolavantago" target="_blank" rel="nofollow">Zespół Muzyczny Avantago</a> doskonale dbał o frekwencję na parkiecie. Zabawa trwała do białego rana, a w przerwie od szaleństw na parkiecie dorwaliśmy ostatnie promienie zachodzącego słońca. Film kręcili Piotrek i Kasia z <a href="https://pk-wideofilmowanie.pl/" target="_blank" rel="nofollow">PK wideoFilmowanie</a>, współpracowało się z nimi doskonale i jestem pewny, że każda sekunda filmu będzie doskonała. Wielkie, wielkie dziękuję za ten wyjątkowy dzień, ciepłe przyjęcie i genialną atmosferę. Miłego oglądania, a po więcej zdjęć zapraszam gości weselnych do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada"}
                    title={"DEKORACJA SALI WESELNEJ W STYLU RUSTYKALNYM, OSP ZAWADA - KINGA i MACIEK"}
                    tags={"dekoracja sali weselnej,styl rustykalny,osp zawada,fotograf ślubny myślenice"}
                    date={"6 czerwca 2017"}
                    menuNames={"KINGA i MACIEK"}
                    menuTitle={"DEKORACJA SALI WESELNEJ W STYLU RUSTYKALNYM, OSP ZAWADA"}
                    leadNames={"ANNA i KRZYSZTOF"}
                    leadTitle={"SALA WESELNA NEDAN PCIM - REPORTAŻ ŚLUBNY - ANNA i KRZYSZTOF"}
                    leadUrl={"/sala-weselna-nedan-pcim-reportaz-slubny"}
                    leadImage={"url(/static/sala_weselna_nedan_pcim_reportaz_slubny_start.jpg)"}
                />
            </div>
        );
    }
}
