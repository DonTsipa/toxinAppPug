
module.exports = {

    modules: [
      {
        from: 'node_modules/lightpick/css',
        inject: [ 'lightpick.css' ],
    },
      {
        from: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/',
        inject: [ 'moment.min.js' ],
    },
    {
        from: 'node_modules/lightpick',
        inject: [ 'lightpick.js' ],
    },

    ]  

  }