
module.exports = {

    modules: [
    {
        from: 'https://code.jquery.com/',
        inject: [ 'jquery-3.4.1.min.js' ],
    },
      {
        from: './app/datepicker-bootstrap/',
        inject: [ 'bootstrap-datepicker.min.js' ], // Этот файл будет подключен на странице отдельно
    },
    {
        from: './app/datepicker-bootstrap/',
        inject: [ 'bootstrap-datepicker.min.css' ],
    },

    ]  
  }