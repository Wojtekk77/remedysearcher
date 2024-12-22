const repertorySymptomName = (renderCell, user) => {
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

const repertorySymptomProperty = (renderIcon) => {
    return ({
        id: 'property',
        headerName: '',
        field: 'property',
        minWidth: 150,
        // editable: true,
        renderCell: renderIcon,
    })
};

export const repertorySymptomColumns = (renderCell, renderIcon, user) => [
    repertorySymptomName(renderCell, user),
    repertorySymptomProperty(renderIcon),
];