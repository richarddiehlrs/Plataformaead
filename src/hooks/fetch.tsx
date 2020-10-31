import useSWR from 'swr';
import api from 'services/api';

export function useFetch<Data = any, Error = any>(url: string): { data: any, error: any } {
  const { data, error } = useSWR(url, async (reqUrl) => {
    const response = await api.get(reqUrl);

    return response.data;
  }, {
    revalidateOnReconnect: true,
    revalidateOnFocus: true,
  });

  return { data, error };
}
