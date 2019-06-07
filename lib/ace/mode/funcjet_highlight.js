

define(function(require, exports, module) {
    "use strict";
    
    var oop = require("../lib/oop");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
    
    var FuncjetHighlightRules = function() {
    
        var keywords = (
            "\$|\#"
        );
    
        var builtinConstants = (
            "true|false|nope"
        );
    
        var builtinFunctions = (
            "if|while|map|filter|reduce|parseInt"
        );
    
        //var futureReserved = "";
        var keywordMapper = this.$keywords = this.createKeywordMapper({
            "support.function": builtinFunctions,
            "constant.language": builtinConstants,
            "keyword": keywords
        }, "identifier");
        
        this.$rules = {
            "start" : [
                {
                    token: keywordMapper,
                    regex: /[a-zA-Z_]+[a-zA-Z_0-9]*/
                },
                {
                    token: "constant.numeric.float",
                    regex: /(0|[1-9][0-9]*)\.[0-9]+/
                },
                {
                    token: "constant.numeric.integer",
                    regex: /0|[1-9][0-9]*/,
                    next: "start"
                },
                {
                    token: "string",
                    regex: /'.*'/,
                    next: "start"
                },
                {
                    token: "paren.lparen",
                    regex: /[[{:]/,
                    next: "start"
                },
                {
                    token: "paren.rparen",
                    regex: /[\]}\.]/,
                    next: "start"
                }
            ]
        };
        this.normalizeRules();
    };
    
    oop.inherits(FuncjetHighlightRules, TextHighlightRules);
    
    exports.FuncjetHighlightRules = FuncjetHighlightRules;
    });
    