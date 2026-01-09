import * as React from "react";

import { Option } from "./types";

export interface Props {
  defaultOption: string;
  options: Option[];
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>, value: string) => void;
}

const Dropdown: React.FC<Props> = ({
  defaultOption,
  options,
  label,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e, e.target.value);
  };

  return (
    <div
      style={{
        flex: 1,
        display: "flex", // ← 横方向に伸ばす
        alignItems: "center", // ← ボタンと高さを揃える
      }}
    >
      <label
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        {label && (
          <span
            style={{
              marginRight: "10px",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </span>
        )}

        <select
          onChange={handleChange}
          style={{
            flex: 1,
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxSizing: "border-box",
          }}
        >
          <option value="">{defaultOption}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Dropdown;
