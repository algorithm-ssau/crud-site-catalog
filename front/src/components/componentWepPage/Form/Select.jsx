import React from 'react';

const Select = (props) => (
  <div className="form-group">
    <label htmlFor={props.name}>
      {' '}
      {props.title}
      {' '}
    </label>
    <select
      id={props.name}
      name={props.name}
      value={props.value}
      onChange={props.handleChange}
      className="form-control"
    >
      <option value="" disabled>
        {props.placeholder}
      </option>
      {props.options.map((option) => (
        <option key={option.value} value={option.value} label={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
