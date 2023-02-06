import { Image } from '@/components/ui/image';
import cn from 'classnames';
import Link from '@/components/ui/link';
import LogoIcon from '../../assets/logo.svg';

interface Logo {
  className: string;
  headerClassName: string;
}

const Logo: React.FC<Logo> = ({ className, headerClassName, ...props }) => {
  return (
    <Link href="/" className={cn('inline-flex', headerClassName)} {...props}>
      <span
        className={cn(
          'relative h-10 w-32 overflow-hidden md:w-[260px] 2xl:w-[290px] ',
          className
        )}
      >
        <Image
          src={LogoIcon}
          layout="fill"
          objectFit="contain"
          loading="eager"
        />
      </span>
    </Link>
  );
};

export default Logo;
