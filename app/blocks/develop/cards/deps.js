
module.exports = {

    modules: [
      {
        from: 'app/modules/',
        inject: [ 'lightpick.css' ],
    },
      {
        from: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/',
        inject: [ 'moment.min.js' ],
    },
    {
        from: 'app/modules/',
        inject: [ 'lightpick.js' ],
    },

    ]  

  }