import type { ChangeEvent } from "react"

export interface NumberInputProps {
  label: React.ReactNode | string
  value: number
  min: number
  max?: number
  step?: number
  onChange: (value: ChangeEvent<HTMLInputElement>) => void
}

const NumberInput = ({
  label,
  value,
  min,
  max,
  step,
  onChange
}: NumberInputProps) => {
  return (
    <label className="d-flex align-items-center justify-content-between">
      <span className="text-nowrap">{label}</span>
      <input
        type="number"
        className="gilroy-regular"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
      />
    </label>
  )
}

export { NumberInput as default }
