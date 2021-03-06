var Humanizer;
(function (Humanizer) {
    "use strict";
    Array.prototype.humanize = function () {
        switch (arguments.length) {
            case 0:
                return Humanizer.Configuration.Configurator.getCollectionFormatters().humanize(this);
            case 1:
                if (typeof arguments[0] === "string") {
                    return Humanizer.Configuration.Configurator.getCollectionFormatters().humanize(this, arguments[0]);
                }
                else {
                    var df = arguments[0];
                    return Humanizer.Configuration.Configurator.getCollectionFormatters().humanize(this, df);
                }
            case 2:
                return Humanizer.Configuration.Configurator.getCollectionFormatters().humanize(this, arguments[0], arguments[1]);
            default:
                throw new Error("Unknown call");
        }
    };
})(Humanizer || (Humanizer = {}));
//# sourceMappingURL=collectionHumanizeExtensions.js.map