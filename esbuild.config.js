// const esbuild = require('esbuild');
// const { nodeExternalsPlugin } = require('esbuild-node-externals');

// esbuild.build({
//   entryPoints: [
//     './cypress/e2e/step_definitions/**/*.ts', 
//     // Add other entry points if needed
//   ],
//   bundle: true,
//   platform: 'node',
//   outdir: 'dist', // Specify output directory
//   plugins: [nodeExternalsPlugin({
//     allowList: ['@cucumber/messages', 'uuid']
//   })],
//   external: ['path', 'fs', 'os'], // Mark Node.js built-ins as external
// }).catch(() => process.exit(1));
