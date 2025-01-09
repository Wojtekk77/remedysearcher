import React, { useCallback, useMemo } from "react";
import RepertorySymptomNameCell from '@components/RepertorySymptomNameCell';
import { repertorySymptomDeleteColumn, repertorySymptomName, repertorySymptomProperty } from '@app/repertoryzacja/repertoryColumns.jsx';


const useRepertorySelectedSymptomColumns = ({ session, handleDeleteClick }) => {

  const renderCell = useCallback(({ formattedValue, value, row }) => {
      return <RepertorySymptomNameCell row={row} value={formattedValue} />
  },[]);

  // Memoize the column definitions
  const columns = useMemo(() => [
    repertorySymptomName(renderCell, session?.user),
    repertorySymptomProperty(),
    repertorySymptomDeleteColumn(handleDeleteClick)
  ], [session?.user]);

  return { columns };
};

export default useRepertorySelectedSymptomColumns;