import React, { useCallback, useMemo } from "react";
import RepertorySymptomNameCell from '@components/RepertorySymptomNameCell';
import { repertorySymptomDeleteColumn, repertorySymptomName, repertorySymptomProperty, repertorySymptomStrengthColumn } from '@app/repertoryzacja/repertoryColumns.jsx';

const useRepertorySelectedSymptomColumns = ({ session, handleDeleteClick, setStrengthToSelectedRepertorySymptomIds }) => {

  const renderCell = useCallback(({ formattedValue, row }) => {
      return <RepertorySymptomNameCell row={row} value={formattedValue} />
  },[]);

  // Memoize the column definitions
  const columns = useMemo(() => [
    repertorySymptomName(renderCell, session?.user, 300),
    repertorySymptomProperty(120),
    // repertorySymptomMandatoryColumn(),
    repertorySymptomStrengthColumn(setStrengthToSelectedRepertorySymptomIds),
    repertorySymptomDeleteColumn(handleDeleteClick),
  ], [session?.user]);

  return { columns };
};

export default useRepertorySelectedSymptomColumns;