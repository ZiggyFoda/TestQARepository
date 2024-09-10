describe('Flujo de Login - Redirección de usuario no autenticado', () => {
    it('Debe redirigir al login si el usuario no está autenticado y accede al panel de usuario', () => {
      // Intentar acceder al panel de usuario sin autenticarse
      cy.visit('http://localhost:3000/user-panel');
      
      // Verificar que se redirige a la página de login, chequea si en la URL incluye /login
      cy.url().should('include', '/login');
      
      // Verificar que el formulario de login esté presente, debido a que la pagina puede cargar pero el formulario no
      cy.get('form').should('exist');
    });
  });