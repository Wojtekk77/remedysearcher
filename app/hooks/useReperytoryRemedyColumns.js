import React, { useMemo } from "react";

const useReperytoryRemedyColumns = ({ session }) => {


  // Memoize the column definitions
  const columns = useMemo(() => [
    {
      id: 'remedy',
      key: 'remedy',
      headerName: 'Remedium',
      field: 'remedy',
      minWidth: 330,
      editable: session?.user?.isAdmin,
      renderCell: ({ value }) => <span>{value. name}</span>

    },
    {
      id: 'strength',
      key: 'strength',
      headerName: 'Siła',
      field: 'strength',
      minWidth: 330,
      editable: session?.user?.isAdmin,
      renderCell: ({ row, value }) => <span>{row.count}^{row.powerCount}: {row.count ** row.powerCount}</span>
    }
  ], []);

  return { columns };
};

export default useReperytoryRemedyColumns;