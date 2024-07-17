// import  startDevServer  from '@cypress/webpack-dev-server';
// const webpackPreprocessor = require('@cypress/webpack-preprocessor');
// const webpackConfig = require('../../webpack.config');


// module.exports = (on: any, config: any) => {
//   const options = webpackPreprocessor.defaultOptions;

//   on('file:preprocessor', webpackPreprocessor(options));

//   // Configure startDevServer correctly
//   on('dev-server:start', (options) => {
//     const startDevServerOptions = {
//       options,
//       webpackConfig,
//       specs: [], // If you have specific specs to include
//       cypressConfig: config,
//       devServerEvents: on,
//     };
    
//     return startDevServer(startDevServerOptions);
//   });

//   return config;
// };

// const webpackPreprocessor = require('@cypress/webpack-preprocessor');
// const webpackOptions = require('../../webpack.config');

// module.exports = (on: any) => {
//   on('file:preprocessor', webpackPreprocessor(webpackOptions));
// };


import cucumber from 'cypress-cucumber-preprocessor';

module.exports = (on: any) => {
  on('file:preprocessor', cucumber());
};


import * as xlsx from 'node-xlsx';
import * as fs from 'fs';
import * as path from 'path';

interface ReadXlsxOptions {
  file: string;
  sheet: string;
}

export default (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  on('task', {
    readXlsx({ file, sheet }: ReadXlsxOptions) {
      const filePath = path.resolve(file);
      const workSheetsFromFile = xlsx.parse(fs.readFileSync(filePath));
      const sheetData = workSheetsFromFile.find(sheetObj => sheetObj.name === sheet)?.data;
      return sheetData;
    }
  });
};