import React, { useCallback, useMemo } from "react";
import { GRID_CHECKBOX_SELECTION_COL_DEF, GridActionsCellItem } from "@mui/x-data-grid";
import { REMEDY_PROPERTY_NAME } from "@common/constants";
import Icon from "@components/Icon";
import { repertorySymptomColumns } from '@app/repertoryzacja/helpers';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

const useReperytoryRemedyColumns = ({ session, filterModel, checkbox = false, handleDeleteClick }) => {


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