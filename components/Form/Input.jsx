import React, { useState } from 'react';

export default function Input({ label, onChange, ...props }) {

  const [value, setValue] = useState('');

  return (
    <>
      <label>
        {label}
        <input
            value={age}
            onChange={e => {
                setValue(e.target.value)
            }}
            onBlur={onBlur}
            type="number"
            props
        />

      </label>
    </>
  );
}
