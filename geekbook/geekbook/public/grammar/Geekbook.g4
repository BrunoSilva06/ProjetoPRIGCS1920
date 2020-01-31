grammar Geekbook;

profile : nome  numero  email  password  curso   (homepage)? (cv)? (bio)?
        ;
nome: 'nome:' STRING ';';
numero: 'numero:' STRING ';';
email: 'email:' EMAIL ';';
password: 'password:' STRING ';';
curso: 'curso:' STRING ';';
homepage: 'homepage:' URL ';';
cv: 'cv:' URL ';';
bio: 'bio:' TEXT ';';

URL: 'http'[s]?'://'[a-zA-Z0-9.~/]+;
STRING: [a-zA-Z0-9]+;
DOMAIN: [a-zA-Z]+;
FILENAME: [a-zA-Z0-9]+(.)[A-Za-z]+;
EMAIL: [a-zA-Z.-]+('@')[a-zA-Z0-9.]+;
INT : [0-9]+;
TEXT: [']~('\'')*['];
WS : [ \r\t\n] -> skip;

