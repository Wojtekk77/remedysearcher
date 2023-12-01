// const columns = [
//     { field: 'col1', headerName: 'Column 1', width: 150 },
//     { field: 'col2', headerName: 'Column 2', width: 150, renderCell: ({ row }) => (<p>{row.col2}</p>), },
//     { field: 'col3', headerName: 'Custom column 3', width: 150, valueGetter: (params) => {
//       console.log(params);
//       return `${params.row.col3?.name}_my ui`;
//     }, },

// https://mui.com/x/react-data-grid/column-definition/#rendering-cells
// Using renderCell, requires paying attention to the following points. If the type of the value returned by valueGetter does not correspond to the column's type, you should:

// handle sorting by providing sortComparator to the column.
// set a valueFormatter providing a representation for the value to be used when exporting the data.
export const createColumns = (remedy) => {
	// {
	// 		żółć3: { remedyId: desc.remedy, remedyName: desc.remedyName, sentenceNumbers: [], usedWords: [], description: '' }
	// }
	const columns = [
		{
            key: 'remedyName',
			headerName: 'Nazwa',
			field: 'remedyName',
            // renderCell: ({ row }) => (<p>{row.remedyName}</p>),
		},
	];

	Object.entries(remedy || {})?.forEach(([key, value], i) => {
		// key = 'żółć',
		// value = { word: 'żółć', usedWords: [żółć, żółci, żółcią], description: 'text', type: 'mind' }
		if (typeof value !== 'object') { // totalPoints and remedyName will be taken differently
			return;
		}
		columns.push({
            key: `${key}_${i}`,
			id: `${key}_${i}`,
            field: key,
			headerName: key,
            renderCell: ({ row }) => {
                return (<p>{row[key]?.sentenceNumbers?.length}</p>)
            },
            sortComparator: (a, b, c) => {
                console.log(a, b, c, 'a, b, c')
                return parseInt(a?.sentenceNumbers?.length) - parseInt(b?.sentenceNumbers?.length);
            },
			// Cell: ({ wordWithObj, cell, state, value }) => {
			// 	if (value?.description) {
			// 		// return value?.description;
			// 		return findSentencedAndHighlight({
			// 			text: value?.description,
			// 			usedWords: value?.usedWords,
			// 			state,
			// 			word: value?.word,
			// 			wordOccurrence: value?.sentenceNumbers?.length,
			// 		}); //`${accessor}: ${value?.sentenceNumbers?.length}`; 
			// 	}
			// 	// console.log(value, 'VALUE IN CREATOR')
			// }, //value.sentenceNumbers.length, // findSentencedAndHighlight({ text: cell.value, wordsFamily: { [key]: wordsFamily[key] }, state }),
			// // Filter: SliderColumnFilter,
			// filter: 'equals',
		})
	})

	columns.push({
        key: 'totalPoints',
        id: 'totalPoints',
        field: 'totalPoints',
        headerName: 'Suma pkt',
	})

	return columns;
}
