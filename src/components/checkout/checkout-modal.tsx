import { threeDSAtom } from '@/store/checkout';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const CheckoutModal = () => {
  const formRef = useRef(null);
  const [threeDS] = useAtom(threeDSAtom);
  const { pathname } = useRouter();
  const turl = `${window.location.origin}/checkout-success`;

  useEffect(() => {
    formRef.current.submit();
  });

  return (
    <div className="h-[800px] max-h-screen w-[600px] max-w-full bg-white">
      <form
        id={'3dform'}
        ref={formRef}
        action={threeDS?.issuer_url}
        method="POST"
        target="iframe"
      >
        <input type="hidden" name="PaReq" value={threeDS.pa_req} />
        <input type="hidden" name="MD" value={threeDS.md} />
        <input type="hidden" name="TermUrl" value={turl} />
      </form>

      <iframe
        className="h-full w-full max-w-full"
        name="iframe"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default CheckoutModal;
