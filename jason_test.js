app.use(express.json());
app.post('/rest',function(request,response){
    request.accepts('application/json');
 
    // input message handling
    json = request.body;
    console.log('name is :'+json.name);
    console.log('address is :'+json.address);
 
    // output message
    response.json({result:'success'});
 
});
