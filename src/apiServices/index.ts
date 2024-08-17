import { fetchData } from '../utils';
import { Provider, ProviderDetails } from '../types';
import { PROVIDERS_API, PROVIDERS_DETAILS_API } from '../constant/api';

interface FetchProviderResponse {
  data: string[];
}

export const fetchProviders = async (): Promise<Provider[]> => {
  const response = await fetchData<FetchProviderResponse>(PROVIDERS_API); // Fetches an array of strings
  // Map the array of strings to an array of `Provider` objects containing only `name`
  const providers = response.data.map((providerName: string) => ({
    name: providerName,
  }));
  return providers;
};

export const fetchProviderDetails = async (
  providerName: string,
): Promise<ProviderDetails> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = await fetchData<any>(PROVIDERS_DETAILS_API(providerName));
  const {
    info: {
      title,
      description,
      'x-logo': { url },
      contact,
    },
    swaggerUrl,
  } = data.apis[Object.keys(data.apis)[0]];
  return {
    title,
    url,
    swaggerUrl,
    contact,
    description,
  };
};
