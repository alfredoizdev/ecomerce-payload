'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { Button, useField, usePreferences } from '@payloadcms/ui'
import { TextFieldClientProps } from 'payload'
import { validateHexColor } from './config'
const defaultColors = ['#0F0F0F', '#9A9A9A', '#F3F3F3', '#FF6F76', '#FDFFA4', '#B2FFD6', '#F3DDF3']

import './styles.scss'
import { Label } from '@radix-ui/react-label'

const preferenceKey = 'color-picker-colors'
const baseClass = 'custom-color-picker'

export const InputField: React.FC<TextFieldClientProps> = ({ path }) => {
  const { value, setValue } = useField<string>({ path })
  const [isAdding, setIsAdding] = React.useState(false)
  const [colorOptions, setColorOptions] = useState(defaultColors)
  const [colorToAdd, setColorToAdd] = useState('')
  const { getPreference, setPreference } = usePreferences()

  useEffect(() => {
    const mergeColorsFromPreferences = async () => {
      const colorPreferences = await getPreference<string[]>(preferenceKey)
      if (colorPreferences) {
        setColorOptions(colorPreferences)
      }
    }
    mergeColorsFromPreferences()
  }, [getPreference, setColorOptions])

  const handleAddColor = useCallback(() => {
    setIsAdding(false)
    setValue(colorToAdd)

    // prevent adding duplicates
    if (colorOptions.indexOf(colorToAdd) > -1) return

    const newOptions = colorOptions
    newOptions.unshift(colorToAdd)

    // update state with new colors
    setColorOptions(newOptions)
    // store the user color preferences for future use
    setPreference(preferenceKey, newOptions)
  }, [colorOptions, setPreference, colorToAdd, setIsAdding, setValue])

  return (
    <div className={baseClass}>
      {isAdding && (
        <>
          <Label htmlFor={'colorToAdd'}>Add a color</Label>
          <input
            className={`${baseClass}__input`}
            id="colorToAdd"
            type="text"
            placeholder="#000000"
            onChange={(e) => setColorToAdd(e.target.value)}
            value={colorToAdd}
          />
          <Button
            className={`${baseClass}__btn`}
            buttonStyle="primary"
            iconPosition="left"
            iconStyle="with-border"
            size="small"
            onClick={handleAddColor}
            disabled={validateHexColor(colorToAdd) !== true}
          >
            Add
          </Button>
          <Button
            className={`${baseClass}__btn`}
            buttonStyle="secondary"
            iconPosition="left"
            iconStyle="with-border"
            size="small"
            onClick={() => setIsAdding(false)}
          >
            Cancel
          </Button>
        </>
      )}
      {!isAdding && (
        <>
          <ul style={{ display: 'flex', listStyle: 'none', padding: 0, marginTop: '25px' }}>
            {colorOptions.map((color, i) => (
              <li key={i} style={{ margin: '0 5px' }}>
                <button
                  type="button"
                  className={`chip ${color === value ? 'chip--selected' : ''} chip--clickable`}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: color,
                    border: color === value ? '2px solid black' : '1px solid gray',
                    cursor: 'pointer',
                  }}
                  aria-label={`Select color ${color}`}
                  onClick={() => setValue(color)}
                />
              </li>
            ))}
          </ul>
          <Button
            className="add-color"
            icon="plus"
            buttonStyle="icon-label"
            iconPosition="left"
            iconStyle="with-border"
            onClick={() => setIsAdding(true)}
          />
        </>
      )}
    </div>
  )
}
