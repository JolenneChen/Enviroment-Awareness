"use client"

import * as React from "react"

interface ToggleProps {
  label?: string
  defaultChecked?: boolean
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  className?: string
}

export function Toggle({
  label,
  defaultChecked = false,
  checked,
  onChange,
  disabled = false,
  className = "",
}: ToggleProps) {
  const [isChecked, setIsChecked] = React.useState(defaultChecked)
  const isControlled = checked !== undefined
  const isOn = isControlled ? checked : isChecked

  const handleChange = () => {
    if (disabled) return
    const newValue = !isOn
    if (!isControlled) {
      setIsChecked(newValue)
    }
    onChange?.(newValue)
  }

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        role="switch"
        aria-checked={isOn}
        disabled={disabled}
        onClick={handleChange}
        className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full p-0.5 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#001711] focus-visible:ring-offset-2 ${
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        } ${isOn ? "bg-[#1e40af]" : "bg-[#93c5fd]"}`}
      >
        <span
          className={`inline-flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 ${
            isOn ? "translate-x-5" : "translate-x-0"
          }`}
        >
          {isOn && (
            <svg
              className="h-3 w-3 text-[#1e3a8a]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </span>
      </button>
      {label && (
        <span className={`text-sm font-medium text-gray-700 ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}>
          {label}
        </span>
      )}
    </div>
  )
}