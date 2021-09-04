
    function getData(){
    
    var request = new XMLHttpRequest()

    request.open('GET', 'https://api.adviceslip.com/advice', true);
    request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
  
    console.log(data);

  if (request.status >= 200 && request.status < 400) {

    $('#advice').html(data.slip.advice);

    $('#twitterlink').attr("href","https://twitter.com/share?text="+data.slip.advice);
    $('#whatsapplink').attr("href","https://whatsapp://send?text="+data.slip.advice);

  } else {
    console.log('error')
  }

}

request.send()

}


