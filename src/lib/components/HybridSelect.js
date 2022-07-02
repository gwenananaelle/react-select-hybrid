// @flow
import "core-js/stable"
import "./style.css"
import * as React from "react"
import { useState } from "react"
import NativeSelect from "./NativeSelect"
import CustomSelect from "./CustomSelect"

type Option = {
  value: string,
  label: string,
}
type Props = {
  title: string,
  options: Array<Option>,
}

export default function HybridSelect(props: Props): React.Node {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)

  return (
    <div className="select">
      <span className="select-label" id="select-label">
        {props.title}
      </span>
      <div className="select-wrapper">
        <NativeSelect
          title={props.title}
          options={props.options}
          selectedOptionIndex={selectedOptionIndex}
          setSelectedOptionIndex={setSelectedOptionIndex}
        />
        <CustomSelect
          title={props.title}
          options={props.options}
          selectedOptionIndex={selectedOptionIndex}
          setSelectedOptionIndex={setSelectedOptionIndex}
        />
      </div>
    </div>
  )
}
HybridSelect.defaultProps = {
  title: "Placeholder Label",
  options: [
    { label: "option 1", value: "1" },
    { label: "option 2", value: "2" },
    { label: "option 3", value: "3" },
  ],
}
