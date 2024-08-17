import { useEffect, useState } from 'react';
import { fetchProviders } from '../apiServices';
import { Provider } from '../types';

const useFetchProviders = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [providers, setProviders] = useState<Provider[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await fetchProviders();
        setProviders(data);
        setLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Failed to fetch providers');
        setLoading(false);
      }
    })();
  }, []);

  return { loading, providers, error };
};

export default useFetchProviders;
