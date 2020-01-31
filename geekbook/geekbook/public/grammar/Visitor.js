const GeekbookVisitor = require('./GeekbookVisitor').GeekbookVisitor;
var User = require('../../models/user');


class Visitor extends GeekbookVisitor {
    
    

  start(ctx) {
      var texto = this.visitProfile(ctx);
    console.log(texto);
    return this.visitProfile(ctx);
  }
  
  
 
}

module.exports = Visitor;