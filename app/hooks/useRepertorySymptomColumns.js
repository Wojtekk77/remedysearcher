import React, { useCallback, useMemo } from "react";
import { GRID_CHECKBOX_SELECTION_COL_DEF, GridActionsCellItem } from "@mui/x-data-grid";
import { REMEDY_PROPERTY_NAME } from "@common/constants";
import Icon from "@components/Icon";
import RepertorySymptomNameCell from '@components/RepertorySymptomNameCell';
import { repertorySymptomColumns } from '@app/repertoryzacja/helpers';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
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

const useRepertorySymptomColumns = ({ session, filterModel, checkbox = false, handleDeleteClick }) => {
  // Create a custom cell renderer for highlighting text
  const renderCell = useCallback((params) => {
      return highlightText({ value: params.formattedValue, row: params.row });
    },
    [filterModel?.quickFilterValues] // Assuming `filterModel.quickFilterValues` is relevant
  );

  // Create a custom icon renderer
  const renderIcon = useCallback(({ value, row }) => {
      return row.depth === 5 ? (
        <>
          <span style={{ marginRight: "0.4rem" }}>
            {REMEDY_PROPERTY_NAME[value]}
          </span>
          <Icon property={value} />
        </>
      ) : null;
    },
    []
  );

  // Memoize the column definitions
  const columns = useMemo(() => [
      ...checkbox ? [{
        ...GRID_CHECKBOX_SELECTION_COL_DEF,
        width: 50,
      }] : [],
      ...repertorySymptomColumns(renderCell, renderIcon, session?.user),
      ...handleDeleteClick ? [
        {
          field: 'actions',
          type: 'actions',
          headerName: '',
          width: 50,
          cellClassName: 'actions',
          renderCell: ({ row }) => {

            return (
              <GridActionsCellItem
                icon={<DeleteIcon />}
                label="Delete"
                onClick={handleDeleteClick(row._id)}
                color="inherit"
              />
            )
          }
        }
      ] : [],
    ],
    [renderCell, renderIcon, session?.user]
  );

  return { columns };
};

export default useRepertorySymptomColumns;