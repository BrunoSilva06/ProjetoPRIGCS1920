// Generated from Geekbook.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var GeekbookVisitor = require('./GeekbookVisitor').GeekbookVisitor;

var grammarFileName = "Geekbook.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0013C\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u001b\n\u0002\u0003\u0002",
    "\u0005\u0002\u001e\n\u0002\u0003\u0002\u0005\u0002!\n\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0002\u0002\u000b\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0002\u0002\u0002<\u0002\u0014",
    "\u0003\u0002\u0002\u0002\u0004\"\u0003\u0002\u0002\u0002\u0006&\u0003",
    "\u0002\u0002\u0002\b*\u0003\u0002\u0002\u0002\n.\u0003\u0002\u0002\u0002",
    "\f2\u0003\u0002\u0002\u0002\u000e6\u0003\u0002\u0002\u0002\u0010:\u0003",
    "\u0002\u0002\u0002\u0012>\u0003\u0002\u0002\u0002\u0014\u0015\u0005",
    "\u0004\u0003\u0002\u0015\u0016\u0005\u0006\u0004\u0002\u0016\u0017\u0005",
    "\b\u0005\u0002\u0017\u0018\u0005\n\u0006\u0002\u0018\u001a\u0005\f\u0007",
    "\u0002\u0019\u001b\u0005\u000e\b\u0002\u001a\u0019\u0003\u0002\u0002",
    "\u0002\u001a\u001b\u0003\u0002\u0002\u0002\u001b\u001d\u0003\u0002\u0002",
    "\u0002\u001c\u001e\u0005\u0010\t\u0002\u001d\u001c\u0003\u0002\u0002",
    "\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e \u0003\u0002\u0002",
    "\u0002\u001f!\u0005\u0012\n\u0002 \u001f\u0003\u0002\u0002\u0002 !\u0003",
    "\u0002\u0002\u0002!\u0003\u0003\u0002\u0002\u0002\"#\u0007\u0003\u0002",
    "\u0002#$\u0007\r\u0002\u0002$%\u0007\u0004\u0002\u0002%\u0005\u0003",
    "\u0002\u0002\u0002&\'\u0007\u0005\u0002\u0002\'(\u0007\r\u0002\u0002",
    "()\u0007\u0004\u0002\u0002)\u0007\u0003\u0002\u0002\u0002*+\u0007\u0006",
    "\u0002\u0002+,\u0007\u0010\u0002\u0002,-\u0007\u0004\u0002\u0002-\t",
    "\u0003\u0002\u0002\u0002./\u0007\u0007\u0002\u0002/0\u0007\r\u0002\u0002",
    "01\u0007\u0004\u0002\u00021\u000b\u0003\u0002\u0002\u000223\u0007\b",
    "\u0002\u000234\u0007\r\u0002\u000245\u0007\u0004\u0002\u00025\r\u0003",
    "\u0002\u0002\u000267\u0007\t\u0002\u000278\u0007\f\u0002\u000289\u0007",
    "\u0004\u0002\u00029\u000f\u0003\u0002\u0002\u0002:;\u0007\n\u0002\u0002",
    ";<\u0007\f\u0002\u0002<=\u0007\u0004\u0002\u0002=\u0011\u0003\u0002",
    "\u0002\u0002>?\u0007\u000b\u0002\u0002?@\u0007\u0012\u0002\u0002@A\u0007",
    "\u0004\u0002\u0002A\u0013\u0003\u0002\u0002\u0002\u0005\u001a\u001d",
    " "].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'nome:'", "';'", "'numero:'", "'email:'", "'password:'", 
                     "'curso:'", "'homepage:'", "'cv:'", "'bio:'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, "URL", "STRING", "DOMAIN", "FILENAME", "EMAIL", 
                      "INT", "TEXT", "WS" ];

var ruleNames =  [ "profile", "nome", "numero", "email", "password", "curso", 
                   "homepage", "cv", "bio" ];

function GeekbookParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

GeekbookParser.prototype = Object.create(antlr4.Parser.prototype);
GeekbookParser.prototype.constructor = GeekbookParser;

Object.defineProperty(GeekbookParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

GeekbookParser.EOF = antlr4.Token.EOF;
GeekbookParser.T__0 = 1;
GeekbookParser.T__1 = 2;
GeekbookParser.T__2 = 3;
GeekbookParser.T__3 = 4;
GeekbookParser.T__4 = 5;
GeekbookParser.T__5 = 6;
GeekbookParser.T__6 = 7;
GeekbookParser.T__7 = 8;
GeekbookParser.T__8 = 9;
GeekbookParser.URL = 10;
GeekbookParser.STRING = 11;
GeekbookParser.DOMAIN = 12;
GeekbookParser.FILENAME = 13;
GeekbookParser.EMAIL = 14;
GeekbookParser.INT = 15;
GeekbookParser.TEXT = 16;
GeekbookParser.WS = 17;

GeekbookParser.RULE_profile = 0;
GeekbookParser.RULE_nome = 1;
GeekbookParser.RULE_numero = 2;
GeekbookParser.RULE_email = 3;
GeekbookParser.RULE_password = 4;
GeekbookParser.RULE_curso = 5;
GeekbookParser.RULE_homepage = 6;
GeekbookParser.RULE_cv = 7;
GeekbookParser.RULE_bio = 8;


function ProfileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GeekbookParser.RULE_profile;
    return this;
}

ProfileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProfileContext.prototype.constructor = ProfileContext;

ProfileContext.prototype.nome = function() {
    return this.getTypedRuleContext(NomeContext,0);
};

ProfileContext.prototype.numero = function() {
    return this.getTypedRuleContext(NumeroContext,0);
};

ProfileContext.prototype.email = function() {
    return this.getTypedRuleContext(EmailContext,0);
};

ProfileContext.prototype.password = function() {
    return this.getTypedRuleContext(PasswordContext,0);
};

ProfileContext.prototype.curso = function() {
    return this.getTypedRuleContext(CursoContext,0);
};

ProfileContext.prototype.homepage = function() {
    return this.getTypedRuleContext(HomepageContext,0);
};

ProfileContext.prototype.cv = function() {
    return this.getTypedRuleContext(CvContext,0);
};

ProfileContext.prototype.bio = function() {
    return this.getTypedRuleContext(BioContext,0);
};

ProfileContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GeekbookVisitor ) {
        return visitor.visitProfile(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GeekbookParser.ProfileContext = ProfileContext;

GeekbookParser.prototype.profile = function() {

    var localctx = new ProfileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, GeekbookParser.RULE_profile);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        this.nome();
        this.state = 19;
        this.numero();
        this.state = 20;
        this.email();
        this.state = 21;
        this.password();
        this.state = 22;
        this.curso();
        this.state = 24;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===GeekbookParser.T__6) {
            this.state = 23;
            this.homepage();
        }

        this.state = 27;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===GeekbookParser.T__7) {
            this.state = 26;
            this.cv();
        }

        this.state = 30;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===GeekbookParser.T__8) {
            this.state = 29;
            this.bio();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NomeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GeekbookParser.RULE_nome;
    return this;
}

NomeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NomeContext.prototype.constructor = NomeContext;

NomeContext.prototype.STRING = function() {
    return this.getToken(GeekbookParser.STRING, 0);
};

NomeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GeekbookVisitor ) {
        return visitor.visitNome(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GeekbookParser.NomeContext = NomeContext;

GeekbookParser.prototype.nome = function() {

    var localctx = new NomeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, GeekbookParser.RULE_nome);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        this.match(GeekbookParser.T__0);
        this.state = 33;
        this.match(GeekbookParser.STRING);
        this.state = 34;
        this.match(GeekbookParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NumeroContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GeekbookParser.RULE_numero;
    return this;
}

NumeroContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumeroContext.prototype.constructor = NumeroContext;

NumeroContext.prototype.STRING = function() {
    return this.getToken(GeekbookParser.STRING, 0);
};

NumeroContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GeekbookVisitor ) {
        return visitor.visitNumero(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GeekbookParser.NumeroContext = NumeroContext;

GeekbookParser.prototype.numero = function() {

    var localctx = new NumeroContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, GeekbookParser.RULE_numero);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
        this.match(GeekbookParser.T__2);
        this.state = 37;
        this.match(GeekbookParser.STRING);
        this.state = 38;
        this.match(GeekbookParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EmailContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GeekbookParser.RULE_email;
    return this;
}

EmailContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmailContext.prototype.constructor = EmailContext;

EmailContext.prototype.EMAIL = function() {
    return this.getToken(GeekbookParser.EMAIL, 0);
};

EmailContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GeekbookVisitor ) {
        return visitor.visitEmail(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GeekbookParser.EmailContext = EmailContext;

GeekbookParser.prototype.email = function() {

    var localctx = new EmailContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, GeekbookParser.RULE_email);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 40;
        this.match(GeekbookParser.T__3);
        this.state = 41;
        this.match(GeekbookParser.EMAIL);
        this.state = 42;
        this.match(GeekbookParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PasswordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GeekbookParser.RULE_password;
    return this;
}

PasswordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PasswordContext.prototype.constructor = PasswordContext;

PasswordContext.prototype.STRING = function() {
    return this.getToken(GeekbookParser.STRING, 0);
};

PasswordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GeekbookVisitor ) {
        return visitor.visitPassword(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GeekbookParser.PasswordContext = PasswordContext;

GeekbookParser.prototype.password = function() {

    var localctx = new PasswordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, GeekbookParser.RULE_password);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        this.match(GeekbookParser.T__4);
        this.state = 45;
        this.match(GeekbookParser.STRING);
        this.state = 46;
        this.match(GeekbookParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CursoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GeekbookParser.RULE_curso;
    return this;
}

CursoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CursoContext.prototype.constructor = CursoContext;

CursoContext.prototype.STRING = function() {
    return this.getToken(GeekbookParser.STRING, 0);
};

CursoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GeekbookVisitor ) {
        return visitor.visitCurso(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GeekbookParser.CursoContext = CursoContext;

GeekbookParser.prototype.curso = function() {

    var localctx = new CursoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, GeekbookParser.RULE_curso);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        this.match(GeekbookParser.T__5);
        this.state = 49;
        this.match(GeekbookParser.STRING);
        this.state = 50;
        this.match(GeekbookParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function HomepageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GeekbookParser.RULE_homepage;
    return this;
}

HomepageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HomepageContext.prototype.constructor = HomepageContext;

HomepageContext.prototype.URL = function() {
    return this.getToken(GeekbookParser.URL, 0);
};

HomepageContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GeekbookVisitor ) {
        return visitor.visitHomepage(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GeekbookParser.HomepageContext = HomepageContext;

GeekbookParser.prototype.homepage = function() {

    var localctx = new HomepageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, GeekbookParser.RULE_homepage);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        this.match(GeekbookParser.T__6);
        this.state = 53;
        this.match(GeekbookParser.URL);
        this.state = 54;
        this.match(GeekbookParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CvContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GeekbookParser.RULE_cv;
    return this;
}

CvContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CvContext.prototype.constructor = CvContext;

CvContext.prototype.URL = function() {
    return this.getToken(GeekbookParser.URL, 0);
};

CvContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GeekbookVisitor ) {
        return visitor.visitCv(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GeekbookParser.CvContext = CvContext;

GeekbookParser.prototype.cv = function() {

    var localctx = new CvContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, GeekbookParser.RULE_cv);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this.match(GeekbookParser.T__7);
        this.state = 57;
        this.match(GeekbookParser.URL);
        this.state = 58;
        this.match(GeekbookParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BioContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GeekbookParser.RULE_bio;
    return this;
}

BioContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BioContext.prototype.constructor = BioContext;

BioContext.prototype.TEXT = function() {
    return this.getToken(GeekbookParser.TEXT, 0);
};

BioContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GeekbookVisitor ) {
        return visitor.visitBio(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GeekbookParser.BioContext = BioContext;

GeekbookParser.prototype.bio = function() {

    var localctx = new BioContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, GeekbookParser.RULE_bio);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this.match(GeekbookParser.T__8);
        this.state = 61;
        this.match(GeekbookParser.TEXT);
        this.state = 62;
        this.match(GeekbookParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.GeekbookParser = GeekbookParser;
