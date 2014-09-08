# Welcome to mi9client
  

#### mi9client is an example of client application for mi9service

This is an example of consuming the exercise web service developed by Mehdi and hosted at [http://awesomeservice.apphb.com](http://awesomeservice.apphb.com).

The client application is written in Node.js on Express, Jade template and uses JQUERY for Ajax calls and  hosted on Heroku at [http://mi9client.heroku.com](http://mi9client.heroku.com).

The service is originally written in C# with ASP.Net Web Api 5.1.0 and the source code is avaialbe on github in the following repo:
[https://github.com/mehdiromi/mi9service](https://github.com/mehdiromi/mi9service)


How does this client app work?

* The initial input data is being read with a GET ajax call from a Node.js api from this service on [http://mi9client.heroku.com/samplerequest](http://mi9client.heroku.com/samplerequest) and updates input DOM element.
* The input data then is POSTed to the service on [http://awesomeservice.apphb.com](http://awesomenode.apphb.com) via ajax and updates the output DOM element.
* If any error occures, the error DOM element gets updates.


### Javascript ajax call :

On page load, a simple function reads the input data and then POST it to the service.

```
$(document).ready(function() {
            ReadDataAndPost();
        });

```


ReadDataAndPost initially calls [http://mi9client.heroku.com/samplerequest](http://mi9client.heroku.com/samplerequest) to GET the input data

```
function ReadDataAndPost() {
    var sampleInput;
    $.ajax({
        url: "samplerequest",
        type: 'GET',
        //data: JSON.stringify(Data),
        //crossDomain: true,
        async: true,
        cache: false,
        dataType: "json",
        //contentType: "application/json; charset=utf-8",
        success: function (data) {
            sampleInput = data;
            $("#input").html(JSON.stringify(sampleInput));
            //Post Data
            CallService(sampleInput);
        },
        error: function (error) {
            $("#input").html(error.responseText);
        }
    });
}
```

When input data ready, then it POSTs to the service at [http://awesomeservice.apphb.com](http://awesomeservice.apphb.com), and displays the returned data:
```
function CallService(sampleInput) {
    $.ajax({
        url: "http://awesomeservice.apphb.com",
        type: 'POST',            
        data: JSON.stringify(sampleInput),
        async: true,
        cache: false,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        beforeSend: function () {
        },
        success: function (data) {
            $("#output").html(JSON.stringify(data));
        },
        error: function (error) {
            $("#output").html(error.responseText);
        },
        complete: function () {               
        }
    });
}

```


### Installation

1. If you are hosting on Heroku, simply clone the repository and follow the instuction below in the command line or bash:
    * heroku create
    * git init
    * git add .
    * git commit -a
    * git heroku master
    and that' it!

2. If running locally, 
    * Download and install Node.js from [http://nodejs.org/download/](http://nodejs.org/download/)
    * make sure you have express, stylus, jade install  or use nmp install.
    * run node app.js


Thank you for reading this document.


This application is written by Mehdi Romi (mehdi.romi@gmail.com) and uses free resources for development and hosting.