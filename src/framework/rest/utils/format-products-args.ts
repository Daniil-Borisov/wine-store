import { ProductQueryOptions } from '@/types';
import { PRODUCTS_PER_PAGE } from '@/framework/client/variables';

export const formatProductsArgs = (options?: Partial<ProductQueryOptions>) => {
  // Destructure
  const {
    limit = PRODUCTS_PER_PAGE,
    price,
    categories,
    name,
    searchType,
    searchQuery,
    text,
    ...restOptions
  } = options || {};

  return {
    page_size: limit,
    ...(price && { min_price: price as string }),
    ...(name && { name: name.toString() }),
    ...(categories && { categories: categories.toString() }),
    ...(searchQuery && { keyword: searchQuery.toString() }),
    ...(text && { name: text.toString() }),
    ...restOptions,
  };
};
