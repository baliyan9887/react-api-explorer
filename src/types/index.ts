export interface ProviderDetails {
  title: string;
  description: string;
  swaggerUrl: string;
  url: string;
  contact: {
    email: string;
    name: string;
    url: string;
  };
}

export interface Provider {
  name: string;
}
