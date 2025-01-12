import { TextField } from 'payload'
// import { InputField } from './InputField'

export const validateHexColor = (value: string | string[] | null | undefined): string | true => {
  if (typeof value === 'string') {
    const isValidHex = /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(value)
    return isValidHex ? true : `${value} is not a valid hex color`
  } else if (Array.isArray(value)) {
    for (const val of value) {
      const isValidHex = /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(val)
      if (!isValidHex) {
        return `${val} is not a valid hex color`
      }
    }
    return true
  }
  return 'Value is not a valid hex color'
}

const colorField: TextField = {
  name: 'color',
  type: 'text',
  index: true,
  label: 'Color',
  validate: validateHexColor,
  required: true,
  admin: {
    components: {
      Cell: '@/fields/color-picker/Cell#Cell',
      Field: {
        path: '@/fields/color-picker/InputField#InputField',
      },
    },
  },
}

export default colorField
