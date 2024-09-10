// playwright-tests/session-persistence.spec.js
const { test, expect } = require('@playwright/test');

test('Usuario se mantiene loggeado a la sesion', async ({ page }) => {
  // Se dirige a la pagina de loggin
  await page.goto('http://localhost:3000/login'); 

  // Llena el formulario con un correo de test o contrasena
  await page.fill('input[type="email"]', 'test@example.com'); 
  await page.fill('input[type="password"]', 'password123');
  
  // Le da login
  await page.click('button[type="submit"]');
  
  // Espera para que la pagina cargue la de user-panel
  await page.waitForURL('http://localhost:3000/user-panel'); 

  // Se asegura que el usuario se encuentra en la pagina correcta y no fue redirigido a la de login
  await expect(page.url()).toBe('http://localhost:3000/user-panel'); 

  await page.reload(); //Se hace una actualizacon en la pagina para asegurar que sigue loggeado.

  await expect(page.url()).toBe('http://localhost:3000/user-panel'); // Vuelve a confirmar si el usuario sigue en la pagina de user-panel
});

