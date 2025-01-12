import React, { useMemo } from "react";
import Link from '@node_modules/next/link';

const useRemedyColumns = ({ session }) => {


  // Memoize the column definitions
  const columns = useMemo(() => [
    {
      id: 'name',
      key: 'name',
      headerName: 'Remedium',
      field: 'remedyName',
      minWidth: 230,
      editable: session?.user?.isAdmin,
      renderCell: ({ value, row }) => <Link href={`remedium/${row._id}`}>{value}</Link>

    },
  ], []);

  return { columns };
};

export default useRemedyColumns;