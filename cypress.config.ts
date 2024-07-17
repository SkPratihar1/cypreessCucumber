// import { defineConfig } from "cypress";

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
// import { defineConfig } from 'cypress';

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       require('./cypress/plugins/index.ts')(on, config);
//     },
//     specPattern: 'cypress/e2e/**/*.feature',
//     supportFile: 'cypress/support/index.ts',
//   },
// });


// import { defineConfig } from 'cypress'
// import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
// import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
// import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'


// async function setupNodeEvents(
//     on: Cypress.PluginEvents,
//     config: Cypress.PluginConfigOptions
// ): Promise<Cypress.PluginConfigOptions> {
//     await addCucumberPreprocessorPlugin(on, config)

//     on(
//         'file:preprocessor',
//         createBundler({
//             plugins: [createEsbuildPlugin(config)],
//         })
//     )

//     return config
// }

// export default defineConfig({
//     e2e: {
//         specPattern: '**/*.feature',
//         setupNodeEvents,
//     },
// })


// import { defineConfig } from "cypress";
// import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
// import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
// import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";


// async function setupNodeEvents(
//   on: Cypress.PluginEvents,
//   config: Cypress.PluginConfigOptions
// ): Promise<Cypress.PluginConfigOptions> {
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   await addCucumberPreprocessorPlugin(on, config);

//   on(
//     "file:preprocessor",
//     createBundler({
//       plugins: [createEsbuildPlugin(config)],
//     })
//   );

//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;
// }

// export default defineConfig({
//   e2e: {
//     baseUrl: "https://healthtech-admin.x-studio.io",
//     specPattern: "cypress/e2e/features/**/*.feature",
//     setupNodeEvents,
//   },

// });


// import { defineConfig } from "cypress";
// import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
// import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
// import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
// import { nodeExternalsPlugin } from "esbuild-node-externals";

// async function setupNodeEvents(
//   on: Cypress.PluginEvents,
//   config: Cypress.PluginConfigOptions
// ): Promise<Cypress.PluginConfigOptions> {
//   await addCucumberPreprocessorPlugin(on, config);

//   on(
//     "file:preprocessor",
//     createBundler({
//       plugins: [
//         createEsbuildPlugin(config),
//         nodeExternalsPlugin({
//           allowList: ['@cucumber/messages', 'uuid']
//         })
//       ],
//       platform: 'node',
//       external: ['path', 'fs', 'os'], // Mark Node.js built-ins as external
//     })
//   );

//   return config;
// }

// export default defineConfig({
//   e2e: {
//     baseUrl: "https://leadhawkv3.laravel-studio.io/",
//     specPattern: "**/*.feature",
//     setupNodeEvents,
//   },
// });




// import { defineConfig } from "cypress";
// import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
// import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
// import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
// import { nodeExternalsPlugin } from "esbuild-node-externals";

// async function setupNodeEvents(
//   on: Cypress.PluginEvents,
//   config: Cypress.PluginConfigOptions
// ): Promise<Cypress.PluginConfigOptions> {
//   await addCucumberPreprocessorPlugin(on, config);

//   on(
//     "file:preprocessor",
//     createBundler({
//       plugins: [
//         createEsbuildPlugin(config),
//         nodeExternalsPlugin({
//           allowList: ['@cucumber/messages', 'uuid']
//         })
//       ],
//       // Ensure correct platform and externals setup
//       platform: 'node',
//       external: ['path', 'fs', 'os'], // Mark Node.js built-ins as external
//     })
//   );

//   return config;
// }

// export default defineConfig({
//   e2e: {
//     baseUrl: "https://leadhawkv3.laravel-studio.io",
//     specPattern: "**/*.feature",
//     setupNodeEvents,
//   },
// });


// 

import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import * as xlsx from 'node-xlsx';
import * as fs from 'fs';
import * as path from 'path';

interface ReadXlsxOptions {
  file: string;
  sheet: string;

}

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  // Register the readXlsx task
  on('task', {
   
    readXlsx({ file, sheet }: ReadXlsxOptions) {
      const filePath = path.resolve(file);
      const workSheetsFromFile = xlsx.parse(fs.readFileSync(filePath));
      const sheetData = workSheetsFromFile.find(sheetObj => sheetObj.name === sheet)?.data;
      console.log("hjd",sheetData)
      return sheetData;
    }
  });

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    baseUrl: "https://leadhawkv3.laravel-studio.io",
    env: {
      adminEmail:"test+1@itobuz.com",
      adminPassword:"Itobuz#1234"
    },
    viewportHeight: 1080,
    viewportWidth: 1440,
    specPattern: "**/*.feature",
    fixturesFolder: 'cypress/fixtures',
    setupNodeEvents,
  },
});
