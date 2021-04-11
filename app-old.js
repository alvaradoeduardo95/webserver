const http = require('http');

//CREACION DEL SERVIDOR
http.createServer( (req, res) =>{
    
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});

    res.write( 'id, nombre\n');
    res.write( '1, Eduardo\n');
    res.write( '2, Jaciel\n');
    res.write( '3, Pedro\n');
    res.end();

}).listen( 8080 )


console.log("Esuchando el Puerto 8080");