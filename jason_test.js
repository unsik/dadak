app.post('/pushData', function(req, res){
var chunk = '';

req.on('data', function(data){

chunk = JSON.parse(data);
});
req.on('end',function(){

console.log("name : "+chunk.name + " , phone : "+chunk.phone);
});
res.write("OK");
res.end();
});
