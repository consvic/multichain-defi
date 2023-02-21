import { ButtonProps } from './Button.types'

export function Button({
  children,
  className,
  ...buttonProps
}: ButtonProps): JSX.Element {
  return (
    <button
      className={`text-sm text-slate-600 rounded-lg bg-slate-200 disabled:bg-slate-400 disabled:text-slate-500 px-4 py-3 shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)] ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  )
}
