function uncamelize(str, separator) {
   
    if(typeof(separator) == "undefined") {
      separator = " ";
    }
   
    var str = str.replace(/[A-Z]/g, function (letter) 
    {
      return separator + letter.toLowerCase();
    });
    
    return str.replace("/^" + separator + "/", '');
  }
  console.log(uncamelize('helloWorld'));
  console.log(uncamelize('helloWorld','-'));
  console.log(uncamelize('helloWorld','_'));