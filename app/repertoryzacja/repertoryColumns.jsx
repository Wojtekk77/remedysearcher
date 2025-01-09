import React from 'react';
import { GridActionsCellItem } from '@node_modules/@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { REMEDY_PROPERTY_NAME } from '@common/constants';
import Icon from '@components/Icon';

export const repertorySymptomName = (renderCell, user) => {
    return ({
        id: 'name',
        key: 'name',
        headerName: 'Objaw',
        field: 'name',
        minWidth: 330,
        editable: user?.isAdmin,
        renderCell
    })
};

export const repertorySymptomProperty = () => {
    return ({
        id: 'property',
        headerName: '',
        field: 'property',
        minWidth: 150,
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
    })
};

export const repertorySymptomColumns = (renderCell, renderIcon, user) => [
    repertorySymptomName(renderCell, user),
    repertorySymptomProperty(renderIcon),
];