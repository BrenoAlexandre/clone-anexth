import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import style from './style.module.scss';

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

const FormInput = ({
  error,
  placeholder,
  name,
  onChange,
  onBlur,
  value,
  type,
  options,
}: IProps) => {
  return (
    <Tooltip title={error} placement='top-start' arrow>
      {!options ? (
        <input
          className={!error ? style.FormInput : style.FormInput__Error}
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      ) : (
        <select
          className={!error ? style.FormInput : style.FormInput__Error}
          placeholder='Gênero'
          name='gender'
          onChange={onChange}
          onBlur={onBlur}
          value={value}
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
    </Tooltip>
  );
};

FormInput.defaultProps = {
  type: 'text',
};
export default FormInput;
