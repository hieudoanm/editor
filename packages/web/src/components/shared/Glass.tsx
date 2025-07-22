import {
  FC,
  ReactNode,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  SelectHTMLAttributes,
} from 'react';

const baseSharedClasses = `
  border border-white/20
  bg-white/10
  backdrop-blur-lg
  shadow-lg shadow-black/30
  text-white placeholder:text-neutral-400
  transition duration-300
  focus:outline-none focus:ring-2 focus:ring-white/30
`;

export const Button: FC<
  {
    children: ReactNode;
    className?: string;
  } & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ type = 'button', children, className = '', disabled, ...props }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-full px-6 py-2 font-semibold ${baseSharedClasses} ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} ${className} `}
      {...props}>
      {children}
    </button>
  );
};

const Card: FC<{ children: ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/30 backdrop-blur-lg transition-all duration-300 sm:p-8 ${className} `}>
      {children}
    </div>
  );
};

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ className = '', ...props }) => {
  return <input className={`w-full rounded-full px-4 py-2 ${baseSharedClasses} ${className} `} {...props} />;
};

const TextArea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ className = '', ...props }) => {
  return (
    <textarea
      rows={4}
      className={`w-full resize-none rounded-xl px-4 py-3 ${baseSharedClasses} ${className} `}
      {...props}
    />
  );
};

const Select: FC<SelectHTMLAttributes<HTMLSelectElement>> = ({ className = '', children, ...props }) => {
  return (
    <select
      className={`w-full rounded-full bg-white/10 px-4 py-2 text-white ${baseSharedClasses} appearance-none ${className} `}
      {...props}>
      {children}
    </select>
  );
};

export const Glass = {
  Button,
  Card,
  Input,
  TextArea,
  Select,
};
