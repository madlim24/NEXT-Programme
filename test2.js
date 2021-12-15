const axios = require('axios');
        var input1 = latitude;
        var input2 = longitude;
        //var api = 'https://api.positionstack.com/v1/reverse';
        var apikey = '02ba8e2c6d1246c71db29c52c47e6c5e';
        var params = input1 + input2 + apikey;
      const params = {
        access_key: '02ba8e2c6d1246c71db29c52c47e6c5e',
        query: '1600 Pennsylvania Ave NW'
      }

      axios.get('https://api.positionstack.com/v1/reverse', {params})
        .then(response => {
          console.log(response.data);
        }).catch(error => {
          console.log(error);
        });