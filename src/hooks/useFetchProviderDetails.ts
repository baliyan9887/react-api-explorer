import { useEffect, useState } from 'react';
import { fetchProviderDetails } from '../apiServices';
import { ProviderDetails } from '../types';

const useFetchProviderDetails = (providerName: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [providerDetails, setProviders] = useState<ProviderDetails>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      if (providerName === null) return;
      try {
        setLoading(true);
        const data = await fetchProviderDetails(providerName);
        setProviders(data);
        setLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Failed to fetch providers');
        setLoading(false);
      }
    })();
  }, [providerName]);

  return { loading, providerDetails, error };
};

export default useFetchProviderDetails;
