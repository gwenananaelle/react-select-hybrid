// @flow
import "core-js/stable"
import * as React from "react"

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

export default function NativeSelect(props: Props): React.Node {
  const optionList = props.options.map((option, index) => (
    <option value={option.value} key={option.value + index} index={index}>
      {option.label}
    </option>
  ))
  function handleOnChange(e) {
    console.log(e.target.value)
    const index = props.options.findIndex(
      option => option.value === e.target.value
    )
    props.setSelectedOptionIndex(index)
  }
  return (
    <>
      <select
        id="native-select"
        className="native-select"
        aria-labelledby="select-abel"
        value={props.options[props.selectedOptionIndex].value}
        onChange={e => handleOnChange(e)}
      >
        {optionList}
      </select>
    </>
  )
}
