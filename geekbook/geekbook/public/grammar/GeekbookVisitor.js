// Generated from Geekbook.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by GeekbookParser.

function GeekbookVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

GeekbookVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
GeekbookVisitor.prototype.constructor = GeekbookVisitor;

// Visit a parse tree produced by GeekbookParser#profile.
GeekbookVisitor.prototype.visitProfile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GeekbookParser#nome.
GeekbookVisitor.prototype.visitNome = function(ctx) {
  return ctx.STRING().getText();
};


// Visit a parse tree produced by GeekbookParser#numero.
GeekbookVisitor.prototype.visitNumero = function(ctx) {
  return ctx.STRING().getText();
};


// Visit a parse tree produced by GeekbookParser#email.
GeekbookVisitor.prototype.visitEmail = function(ctx) {
  return ctx.EMAIL().getText();
};


// Visit a parse tree produced by GeekbookParser#password.
GeekbookVisitor.prototype.visitPassword = function(ctx) {
  return ctx.STRING().getText();
};


// Visit a parse tree produced by GeekbookParser#curso.
GeekbookVisitor.prototype.visitCurso = function(ctx) {
  return ctx.STRING().getText();
};


// Visit a parse tree produced by GeekbookParser#homepage.
GeekbookVisitor.prototype.visitHomepage = function(ctx) {
  return ctx.URL().getText();
};


// Visit a parse tree produced by GeekbookParser#cv.
GeekbookVisitor.prototype.visitCv = function(ctx) {
  return ctx.URL().getText();
};


// Visit a parse tree produced by GeekbookParser#bio.
GeekbookVisitor.prototype.visitBio = function(ctx) {
  return ctx.TEXT().getText();
};



exports.GeekbookVisitor = GeekbookVisitor;