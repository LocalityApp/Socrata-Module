const axios = require('axios');

class Socrata{
  constructor(){
  
  }
  getData(URL){
    axios.get(URL).then(response => {
      
    });
  }
}

exports.module = Socrata;
