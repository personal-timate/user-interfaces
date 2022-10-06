export interface ManagementEnvironment {
  production: boolean;
  authUrl: string;
  realm: string;
  clientId: string;
  coreServiceUrl: string;
  services: {
    keycloak: any;
  };
}
