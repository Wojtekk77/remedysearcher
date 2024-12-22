import { capitalizeFirstLetter } from '@utils';
import React, { useMemo } from 'react';
import Icon from './Icon';

// Utility to create styles based on depth
export const createStyle = (depth) => {
  const styleMap = {
    0: { marginLeft: '5rem', fontStyle: 'italic' },
    1: { marginLeft: '4rem' },
    2: { marginLeft: '3rem' },
    3: { marginLeft: '2rem', fontWeight: '500' },
    4: { marginLeft: '1rem', fontWeight: '600' },
    5: { fontWeight: '800' },
  };

  return styleMap[depth];
};

// Utility to create styles based on depth
export const formatValue = (depth, value) => {

    if (depth < 4) {
        return value;
    }

    const formatMap = {
      4: capitalizeFirstLetter(value),
      5: value.toUpperCase(),
    };
  
    return formatMap[depth];
  };

const RepertorySymptomNameCell = ({ value, row, expandRepertorySymptom }) => {
    const { depth, selected } = row;
    const style = useMemo(() => createStyle(depth), [depth]); // Memoize the style object
    const formattedValue = useMemo(() => formatValue(depth, value), [depth, value]); // Memoize the style object

  return (
    <div style={{ ...style, display: 'flex', cursor: 'pointer', textDecoration: selected && 'underline', color: selected && '#aa00bb' }} onClick={() => { row.isParent && expandRepertorySymptom({ ...row }) }} >
        {formattedValue} { row.isParent && expandRepertorySymptom ? <Icon icon="expandMore" /> : null }
    </div>
  );
};

export default RepertorySymptomNameCell;