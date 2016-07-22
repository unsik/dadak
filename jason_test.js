var http = require('http')
   ,qs = require('querystring');
http.createServer(function (req, res) {
   if( req.url == '/' && req.method == 'POST'){
       var postBody = '';
       req.on('data', function (data) {
           postBody += data;
        });
       req.on('end', function () {
           var post = qs.parse(postBody);
           //post데이터확인
           console.log(post['postname']);
       });
       res.end('true');
   }else{
       res.writeHead(404, {'Content-Type': 'text/plain'});
       res.end('404 ERROR');
   }
}).listen(8001);
