var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Humanizer;
(function (Humanizer) {
    var Configuration;
    (function (Configuration) {
        var OrdinalizerRegistry = (function (_super) {
            __extends(OrdinalizerRegistry, _super);
            function OrdinalizerRegistry() {
                _super.call(this, new Humanizer.Localisation.Ordinalizers.DefaultOrdinalizer());
                this.register("en", new Humanizer.Localisation.Ordinalizers.EnglishOrdinalizer());
                this.register("en-US", new Humanizer.Localisation.Ordinalizers.EnglishOrdinalizer());
            }
            return OrdinalizerRegistry;
        })(Configuration.LocaliserRegistry);
        Configuration.OrdinalizerRegistry = OrdinalizerRegistry;
    })(Configuration = Humanizer.Configuration || (Humanizer.Configuration = {}));
})(Humanizer || (Humanizer = {}));
//# sourceMappingURL=ordinalizerRegistry.js.map