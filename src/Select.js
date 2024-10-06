import React, {useState} from 'react';

const Select = props => {
  const {selectedValue, setSelectedValue, options} = props;

  const [open, setOpen] = useState(false);

  return (
    <div className='select-wrapper'>
      <div className='select-box' onClick={() => setOpen(!open)}>
        <span className='select-text'>{selectedValue}</span>
        <span className='select-icon'></span>
      </div>
      {open &&
      <div className='select-options-wrapper'>
        {(options && options.length > 0) &&
        options.map(item => (
          <div
            key={item}
            className='select-option'
            onClick={() => {
              setSelectedValue(item);
              setOpen(false);
            }}
          >
            {item}
          </div>
        ))
        }
      </div>}
    </div>
  );
}

export default Select;