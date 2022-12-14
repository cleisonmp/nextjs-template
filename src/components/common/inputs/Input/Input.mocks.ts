import { InputComponentProps } from './input'

const base: InputComponentProps = {
  id: 'input',
  name: 'input',
  label: 'Default Props',
  type: 'text',
  hasBorder: true,
  rounded: true,
  disabled: false,
  helperText: '',
  inputProps: {
    textSize: 'text-base',
    textColor: 'text-app-text',
    borderColor: 'border-app-border',
    bgColor: 'bg-transparent',
    autofillBg: 'autofill:bg-transparent',
    shadow: 'shadow-sm',
    invalidBorderColor: 'invalid:border-app-error',
    invalidTextColor: 'invalid:text-app-error',
    focusBorderColor: 'focus:border-app-info',
    disabledBgColor: 'disabled:bg-app-backgroundDisabled',
    disabledTextColor: 'disabled:text-app-textDisabled',
    disabledBorderColor: 'disabled:border-app-borderDisabled',
    disabledShadow: 'disabled:shadow-none',
  },
  labelProps: {
    textColor: 'text-app-label',
    bgColor: 'bg-app-background',
    focusColor: 'peer-focus:text-app-info',
    invalidTextColor: 'peer-invalid:text-app-error',
    disabledTextColor: 'peer-disabled:text-app-textDisabled',
  },
  errorLabelProps: {
    textColor: 'text-app-error',
    disabledTextColor: 'text-app-textDisabled',
  },
}

export const mockInputComponentProps = {
  base,
}
