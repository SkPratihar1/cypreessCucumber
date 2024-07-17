declare namespace Cypress {
    interface CypressEnv {
      adminEmail: string;
      adminPassword: string;
      admin?: boolean; // Optional property
    }
  }