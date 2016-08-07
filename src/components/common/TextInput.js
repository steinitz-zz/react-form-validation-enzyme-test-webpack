import React, {PropTypes} from 'react';

const TextInput = ({name, label, onChange, placeholder, value, error}) =>
{
  let wrapperClass = 'form-group';
  if (error && error.length > 0)
  {
    wrapperClass += " " + 'has-error';
  }
  
  const labelJsx = label ? <label htmlFor={name}>{label}</label> : null;

  return (
    <div className={wrapperClass}>
      {labelJsx}
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control dark-form-control"
          placeholder={placeholder}
          defaultValue={value}
          onChange={onChange}/>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name:         PropTypes.string.isRequired,
  label:        PropTypes.string,
  onChange:     PropTypes.func.isRequired,
  placeholder:  PropTypes.string,
  value:        PropTypes.string,
  error:        PropTypes.string
};

export default TextInput;
