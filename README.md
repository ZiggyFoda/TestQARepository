# TestQARepository

#Cypress

![image](https://github.com/user-attachments/assets/8822e88c-aecb-4701-9599-b390169b2b70)
Prueba de Login End-to-End (Cypress):

Fue creada una prueba en Cypress para asegurar de que cuando un usuario no autenticado intenta acceder al panel de usuario, es redirigido a la página de login.
La prueba verifica la interacción con el formulario.
npx cypress run

#Playwright

![image](https://github.com/user-attachments/assets/ff0f4525-74c1-4178-82fa-3f15fc38d37c)

Prueba de Persistencia de Sesión (Playwright):

Fue Desarrollada una prueba en Playwright para verificar que la sesión del usuario persiste después de recargar la página.
La prueba simula el inicio de sesión, la navegación al panel de usuario, recarga la página y confirma que el usuario sigue en el panel de usuario sin ser redirigido a la página de login.
npx playwright test
