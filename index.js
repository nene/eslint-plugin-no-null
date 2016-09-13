/**
 * @fileoverview Rule to disallow null literals, to encourage using undefined instead.
 * @author Rene Saarsoo
 */
"use strict";

module.exports = {
    rules: {
        "no-null": {
            create: function(context) {
                return {
                    Literal: function(node) {
                        if (node.raw === "null") {
                            context.report({
                                node: node,
                                message: "Use undefined instead of null"
                            });
                        }
                    }
                };
            }
        }
    }
};
