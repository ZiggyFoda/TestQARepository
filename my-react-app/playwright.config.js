// playwright.config.js
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './playwright-tests', // Archivo de donde estan las pruebas

  // Corre en los 3 browsers de abajo
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  // Global test configuration
  use: {
    headless: true, // Set to false if you want to see the browser UI
    screenshot: 'only-on-failure', // Captura de pantalla si falla
    video: 'retain-on-failure', // Captura un video de la prueba si falla
  },

  // # de intentos
  retries: 1,

  // Directorio para las capturas o videos
  outputDir: 'test-results/',

  // Configuracion del reporte
  reporter: 'list', 
};

module.exports = config;
