export const PROVIDERS_API = 'https://api.apis.guru/v2/providers.json';
export const PROVIDERS_DETAILS_API = (providerName: string) =>
  `https://api.apis.guru/v2/${providerName}.json`;
