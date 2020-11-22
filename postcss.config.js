module.exports = {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth:375,
        viewportHeight:667,
        unitPrecision:5,
        viewportUnit:'vm',
        selectorBlackList:[],
        minPixelValue:100000,
        mediaQuery:false,
        // exclude:[/maintabbar/]
      }
    }
  }
