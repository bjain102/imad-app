var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    var articleOne: {
      title: 'Article One|Bharath Jain',
      heading: 'Article One',
      content: `<p>
                This is my first article.
                </p>`
    },
    var articleTwo: {
              title: 'Article Second|Bharath Jain',
      heading: 'Article Second',
      content: `<p>
                This is my second article.
                </p>`
    },
    var articleThree: {
              title: 'Article Three|Bharath Jain',
      heading: 'Article Three',
      content: `<p>
                This is my third article.
                </p>`
    }
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = 
        `<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name = "viewport" content = "width-device-width, initial-scale = 1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class = "container">
            <a href = "/">Home</a> 
        <hr/>
        
        <h3>
            ${heading}
        </h3>
        
        <div>
            Today's date
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
    </html>`
    ;
    return  htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
