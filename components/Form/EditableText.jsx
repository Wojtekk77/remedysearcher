import React, { useState } from 'react';

const EditableText = ({ initialText, onUpdate, _id, fieldName, style }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [textValue, setTextValue] = useState(initialText);

  const handleBlur = () => {
    setIsEditing(false);
    if (initialText !== textValue) {
      onUpdate({ _id, values: { [fieldName]: textValue } });
    }
  };

  return (
    <>
      {isEditing ? (
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          onBlur={handleBlur}
          className="search_input peer"
          autoFocus={true}
          style={{ minWidth: '50%' }}
        />
      ) : (
        <p
          onDoubleClick={() => setIsEditing(true)}
          style={style}
        >
          {textValue}
        </p>
      )}
    </>
  );
};

export default EditableText;
