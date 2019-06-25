// tslint:disable-next-line:no-var-requires
const { override, fixBabelImports } = require('customize-cra');
module.exports = override(
      fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      }),
    );
