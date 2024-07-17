

class AuthUtils {
    static login(username: string, password: string) {
        cy.visit('/auth');
        cy.get('input[name="username"]',{timeout:3000}).type(username);
        cy.get('input[name="password"]',{timeout:3000}).type(password);
        cy.get('button[type="submit"]',{timeout:3000}).click();
    }
  }
  
  export default AuthUtils;