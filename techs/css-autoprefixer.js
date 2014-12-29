var autoprefixer = require('autoprefixer-core');

module.exports = require('enb/lib/build-flow').create()
    .name('css-autoprefixer')
    .defineRequiredOption('sourceTarget')
    .optionAlias('sourceTarget', 'source')
    .defineOption('destTarget')
    .optionAlias('destTarget', 'target')
    .defineOption('browserSupport')
    .target('destTarget', '?.css')
    .useSourceText('sourceTarget')
    .builder(function (css) {
        var prefixer = autoprefixer({
            browsers: this._browserSupport || autoprefixer.default
        });

        return prefixer.process(css, {
            from: this._sourceTarget,
            to:   this._destTarget
        }).css;
    })
    .createTech();
