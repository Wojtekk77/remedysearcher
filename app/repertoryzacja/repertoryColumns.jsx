import React from 'react';
import { GridActionsCellItem } from '@node_modules/@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { REMEDY_PROPERTY_NAME } from '@common/constants';
import Icon from '@components/Icon';
import StrengthBar from '@components/StrengthBar';
import { Checkbox } from '@node_modules/@mui/material';

export const repertorySymptomName = (renderCell, user, width) => {
    return ({
        id: 'name',
        key: 'name',
        headerName: 'Objaw',
        field: 'name',
        sortable: false,
        minWidth: width || 330,
        editable: user?.isAdmin,
        renderCell
    })
};

export const repertorySymptomProperty = (width) => {
    return ({
        id: 'property',
        headerName: 'Przynależność',
        field: 'property',
        minWidth: width || 150,
        sortable: false,
        // editable: true,
        renderCell: ({ value, row }) => {
            return row.depth === 5 ? (
              <>
                <span style={{ marginRight: "0.4rem" }}>
                  {REMEDY_PROPERTY_NAME[value]}
                </span>
                <Icon property={value} />
              </>
            ) : null;
        }
    })
};

export const repertorySymptomDeleteColumn = (handleDeleteClick) => {
    return ({
        field: 'actions',
        type: 'actions',
        headerName: '',
        width: 60,
        sortable: false,
        cellClassName: 'actions',
        renderCell: ({ row }) => {

          if (!row.selected) {
            return null
          }

          return (
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label="Delete"
              onClick={handleDeleteClick(row._id)}
              color="inherit"
            />
          )
        }
    })
};

export const repertorySymptomStrengthColumn = (onClick) => {
  return ({
      field: 'strength',
      type: 'strength',
      headerName: 'Siła',
      width: 70,
      sortable: false,
      cellClassName: 'actions',
      renderCell: ({ row }) => {

        if (!row.selected) {
          return null
        }

        return (
          <StrengthBar strength={0} onClick={onClick} repertorySymptomId={row._id} />
        );
      }
  })
};

export const repertorySymptomMandatoryColumn = () => {
  return ({
      field: 'mandatory',
      type: 'mandatory',
      headerName: 'Obowiązkowy',
      width: 20,
      sortable: false,
      cellClassName: 'actions',
      renderCell: ({ row }) => {

        return (
          <Checkbox sx={{ '&.MuiCheckbox-root': { padding: '4px' }}} />
        );
      }
  })
};

export const repertorySymptomColumns = (renderCell, renderIcon, user) => [
    repertorySymptomName(renderCell, user),
    repertorySymptomProperty(renderIcon),
];