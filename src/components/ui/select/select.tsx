import { forwardRef } from 'react';
import ReactSelect, { Props } from 'react-select';
import { selectStyles } from './select.styles';

type Ref = any;

const Select = forwardRef<Ref, Props>((props, ref) => (
  <>
    <ReactSelect ref={ref} styles={selectStyles} {...props} />
    {props.error && <p className={'text-xs text-red-500'}>{props.error}</p>}
  </>
));

Select.displayName = 'Select';
export default Select;
