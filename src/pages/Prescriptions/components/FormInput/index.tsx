import React from 'react';
import style from './style.module.scss';
import ErrorTooltip from '../../../../components/ErrorToolTip';

interface IProps {
  error: string | null;
  placeholder?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<any>) => void;
  onBlur?: (e: React.FocusEvent<any, Element>) => void;
  value?: string;
  type?: string;
  options?: string[];
}

const FormInput = ({ error, options, ...props }: IProps) => {
  return (
    <ErrorTooltip title={error} placement='top-start' arrow>
      {!options ? (
        <input className={!error ? style.FormInput : style.FormInput__Error} {...props} />
      ) : (
        <select
          className={!error ? style.FormInput : style.FormInput__Error}
          name='gender'
          {...props}
        >
          {options.map((option, index) => {
            return (
              <option
                key={index + 1 * Math.random()}
                value={option.toLowerCase()}
                hidden={index === 0}
              >
                {option}
              </option>
            );
          })}
        </select>
      )}
    </ErrorTooltip>
  );
};

FormInput.defaultProps = {
  type: 'text',
};
export default FormInput;
