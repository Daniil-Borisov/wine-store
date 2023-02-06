import { useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import { languageMenu } from '@/lib/locals';
import Cookies from 'js-cookie';
import { ACTIVE_NAV_LINK_CLASSES } from '../../const/classes-const'


export default function LanguageSwitcher() {
  const router = useRouter();
  const { asPath, locale, locales } = router;

  let filterItem = languageMenu?.filter((element) =>
    locales?.includes(element?.id)
  );

  const currentSelectedItem = locale
    ? filterItem?.find((o) => o?.value === locale)!
    : filterItem[2];
  const [selectedItem, setSelectedItem] = useState(currentSelectedItem);  

  function handleItemClick(value: any) {
    Cookies.set('NEXT_LOCALE', value.id, { expires: 365 });
    setSelectedItem(value);
    router.push(asPath, undefined, {
      locale: value.id,
    });
  }

  return (
    <ul className='flex'>
      <li className={`mr-2 cursor-pointer px-1  ${selectedItem.id === 'es' ? ACTIVE_NAV_LINK_CLASSES : ''}`} onClick={()=>handleItemClick({id: 'es'})}>ESP</li>
      <li className={`cursor-pointer px-1 ${selectedItem.id === 'ca' ? ACTIVE_NAV_LINK_CLASSES : ''}`} onClick={()=>handleItemClick({id: 'ca'})}>CAT</li>
    </ul>
  );
}
