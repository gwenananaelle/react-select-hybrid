// @flow
import "core-js/stable"
import * as React from "react"
import { useState } from "react"

type Option = {
  value: string,
  label: string,
}

type Props = {
  title: string,
  options: Array<Option>,
  selectedOptionIndex: number,
  setSelectedOptionIndex: Function,
}

export default function CustomSelect(props: Props): React.Node {
  const [isActive, toggleIsActive] = useState(false)

  const optionList = props.options.map((option: Option, index: number) => (
    <div
      className="custom-select-option"
      key={option.value + index}
      onMouseDown={e => {
        props.setSelectedOptionIndex(index)
        toggleIsActive(false)
      }}
    >
      {option.label}
    </div>
  ))

  return (
    <div
      className={
        isActive
          ? "custom-select isActive js-selectCustom"
          : "custom-select js-selectCustom"
      }
      aria-hidden={isActive ? "true" : "false"}
    >
      <div
        className="custom-select-trigger"
        tabIndex="1"
        onClick={() =>
          isActive ? toggleIsActive(false) : toggleIsActive(true)
        }
        onBlur={e => {
          isActive && toggleIsActive(false)
        }}
      >
        {props.options[props.selectedOptionIndex].label}
      </div>
      <div className="custom-select-options">{optionList}</div>
    </div>
  )
}
