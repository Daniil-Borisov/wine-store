import type { CategoryPaginator, CategoryQueryOptions } from '@/types';
import { useQuery } from 'react-query';
import client from './client';
import { API_ENDPOINTS } from './client/api-endpoints';
import { mapPaginatorData } from '@/framework/utils/data-mappers';
import { useRouter } from "next/router";

export function useCategories() {
  const { locale } = useRouter();  

  const formattedOptions = {
    language: locale
  }

  const {
    data
  } = useQuery(
    [API_ENDPOINTS.CATEGORIES, formattedOptions],
    ({ queryKey }) =>
      client.categories.all(queryKey[1]),
  );  
  
  return {
    categories: data?.data.categories
  };
}
