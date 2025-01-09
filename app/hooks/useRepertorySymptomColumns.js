import React, { useCallback, useMemo } from "react";
import { GRID_CHECKBOX_SELECTION_COL_DEF } from "@mui/x-data-grid";
import RepertorySymptomNameCell from '@components/RepertorySymptomNameCell';
import { repertorySymptomName, repertorySymptomProperty } from '@app/repertoryzacja/repertoryColumns';

export const highlightText = ({ filterModel, value, row, expandRepertorySymptom }) => {
  
  if (!filterModel?.quickFilterValues || filterModel?.quickFilterValues.length === 0) {
    return <RepertorySymptomNameCell row={row} value={value} expandRepertorySymptom={expandRepertorySymptom} />;
  }

  let highlightedValue = value;

  // Split the value into parts so we can highlight multiple matches
  let segments = [highlightedValue];
  
  filterModel.quickFilterValues.forEach((filter) => {
    const quickFilterValue = filter.toLowerCase();
    segments = segments.flatMap(segment => {
      if (typeof segment !== 'string') return [segment]; // If segment is a React element, leave it as is
      
      const parts = [];
      let remainingText = segment;
      let matchIndex;
      
      while ((matchIndex = remainingText.toLowerCase().indexOf(quickFilterValue)) !== -1) {
        if (matchIndex > 0) {
          parts.push(remainingText.slice(0, matchIndex));
        }
        parts.push(<mark key={Math.random()}>{remainingText.slice(matchIndex, matchIndex + quickFilterValue.length)}</mark>);
        remainingText = remainingText.slice(matchIndex + quickFilterValue.length);
      }
      
      if (remainingText) {
        parts.push(remainingText);
      }
      
      return parts;
    });
  });
  
  return <span>{segments}</span>;
};

const useRepertorySymptomColumns = ({ session, filterModel, expandRepertorySymptom }) => {
  // Create a custom cell renderer for highlighting text
  const renderCell = useCallback((params) => {
      return highlightText({ value: params.formattedValue, row: params.row, expandRepertorySymptom });
    },
    [filterModel?.quickFilterValues] // Assuming `filterModel.quickFilterValues` is relevant
  );

  // Memoize the column definitions
  const columns = useMemo(() => [
      {
        ...GRID_CHECKBOX_SELECTION_COL_DEF,
        width: 50,
      },
      repertorySymptomName(renderCell, session?.user),
      repertorySymptomProperty()
    ],[renderCell, session?.user]);

  return { columns };
};

export default useRepertorySymptomColumns;