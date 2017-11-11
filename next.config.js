module.exports = {
    exportPathMap: function () {
      return {
        '/': { page: '/' },
        '/blog': { page: '/blog' },
        '/kontakt': { page: '/kontakt' },        
        '/blog/page/1': { page: '/blog', query: { page: "1" } },
        '/blog/page/2': { page: '/blog', query: { page: "2" } },
        '/blog/page/3': { page: '/blog', query: { page: "3" } },
        '/blog/page/4': { page: '/blog', query: { page: "4" } },
        '/blog/page/5': { page: '/blog', query: { page: "5" } },
        '/opactwo-cystersow-w-mogile-sesja-zdjeciowa-kasprowy': { page: '/opactwo-cystersow-w-mogile-sesja-zdjeciowa-kasprowy' },
        '/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja': { page: '/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja' }
      }
    }
  }