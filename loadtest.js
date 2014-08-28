var loadtest = require('loadtest');
var _ = require('underscore');

var url = "http://localhost:3000/api/" 

var default_options = { 
  maxRequests: 20000,
  concurrency: 20,
}

var get_libraries = {
  url: url + 'libraries/',
};

var get_count_libraries = {
  url: url + 'libraries/count',
}

var get_count_books = {
  url: url + 'books/count',
}

var get_books = {
  url: url + 'books/',
}

function callback(error, result, request){
 
 console.log(request);
 console.log(result);
 console.log(error);
}

function _loadtest(options){
  loadtest.loadTest(options, function(error, result)
    {
      if (error)
        {
          return callback(error, options.url);
        }
      return callback(null, result, options.url);
  });
}

function extend(options){
  return JSON.parse((JSON.stringify(default_options) + JSON.stringify(options)).replace(/}{/g,","));
}
_loadtest(extend(get_books));
_loadtest(extend(get_libraries));
_loadtest(extend(get_count_books));
_loadtest(extend(get_count_libraries));
