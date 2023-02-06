import { useState } from 'react';
import cn from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';
import { MinusIcon } from '@/components/icons/minus-icon';
import { PlusIcon } from '@/components/icons/plus-icon';
import { heightCollapse } from '@/lib/motion/height-collapse';
import { useTranslation } from 'next-i18next';
import { Disclosure } from '@headlessui/react';

type CollapseProps = {
  i: number;
  title: string;
  content: string;
  translatorNS: string;
  expanded: number;
  setExpanded: any;
};

const Collapse: React.FC<CollapseProps> = ({
  i,
  expanded,
  setExpanded,
  title,
  content,
  translatorNS,
}) => {
  const isOpen = i === expanded;
  // active state style
  const activeClass = isOpen ? 'shadow-sm' : '';

  const { t } = useTranslation('faq');

  return (
    <div
      className={cn(
        'mb-2.5 rounded border border-solid border-border-200 bg-light transition-all hover:border-border-base',
        activeClass
      )}
    >
      <motion.header
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
        className="flex cursor-pointer items-center justify-between rounded py-4 px-5 transition-colors"
      >
        <h2 className="text-sm font-semibold leading-relaxed text-heading md:text-base">
          {translatorNS ? t(title) : title}
        </h2>
        {isOpen ? (
          <MinusIcon
            className="flex-shrink-0 stroke-2"
            width={18}
            height={18}
          />
        ) : (
          <PlusIcon className="flex-shrink-0 stroke-2" width={20} height={20} />
        )}
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="from"
            animate="to"
            exit="from"
            variants={heightCollapse()}
          >
            <div className="px-5 pb-4 text-sm leading-7 text-body-dark md:pt-1 md:text-base md:leading-loose">
              {translatorNS ? t(content) : content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

type AccordionProps = {
  translatorNS: string;
  items: {
    title: string;
    content: string;
  }[];
  noTitle: boolean;
};

const Accordion: React.FC<AccordionProps> = ({
  items,
  translatorNS,
  noTitle,
}) => {
  const [expanded, setExpanded] = useState<number>(0);
  const { t } = useTranslation();
  return (
    <div className="px-4 py-10 xl:py-20">
      {!noTitle ? (
        <h2 className="mb-9 text-center text-[30px] font-semibold text-heading xl:mb-7 xl:text-[45px]">
          {t('nav-menu-faq')}
        </h2>
      ) : (
        ''
      )}
      {items.map(({ title, content }, index) => {
        return (
          content && (
            <Collapse
              i={index}
              key={title}
              title={title}
              content={content}
              expanded={expanded}
              setExpanded={setExpanded}
              translatorNS={translatorNS}
            />
          )
        );
      })}
    </div>
  );
};

export default Accordion;
