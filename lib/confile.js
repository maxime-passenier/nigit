var fs = require('fs');

var confile = function(fileName, autoStore){
  if( autoStore == null ) {
    autoStore = true;
  }
  fileName = fileName + '.json';
  var filePath = fileName;
  try {
    var stat = fs.accessSync(filePath, fs.F_OK);
    var file = fs.readFileSync(filePath);
    var content = JSON.parse(file);
  } catch (e) {
    fs.writeFileSync(filePath, '{}');
    var content = {};
  }

  var store = function(){
    fs.writeFileSync(filePath, JSON.stringify(content));
  };

  var set = function(key, value){
    content[key] = value;
    if(autoStore) {
      store();
    }
  };

  var get = function(key){
    return content[key]
  };

  return {
    set: set,
    get: get,
    store: store
  }
};

exports.new = confile;
