// const columns = [
//     { field: 'col1', headerName: 'Column 1', width: 150 },
//     { field: 'col2', headerName: 'Column 2', width: 150, renderCell: ({ row }) => (<p>{row.col2}</p>), },
//     { field: 'col3', headerName: 'Custom column 3', width: 150, valueGetter: (params) => {
//       console.log(params);
//       return `${params.row.col3?.name}_my ui`;
//     }, },

// https://mui.com/x/react-data-grid/column-definition/#rendering-cells
// Using renderCell, requires paying attention to the following points. If the type of the value returned by valueGetter does not correspond to the column's type, you should:
import DOMPurify from 'dompurify';

import CustomizedDialogs from '@components/Dialog';
import {
	FaBeer,
	FaBrain,
	FaHandPointRight,
	FaSadTear,
	FaSmileBeam,
    FaChevronDown,
    FaChevronUp,
    SquareCaretDown,
    FaExternalLinkAlt
} from 'react-icons/fa';


// handle sorting by providing sortComparator to the column.
// set a valueFormatter providing a representation for the value to be used when exporting the data.
export const createColumns = (remedy) => {
	// {
	// 		żółć3: { remedyId: desc.remedy, remedyName: desc.remedyName, sentenceNumbers: [], usedWords: [], description: '' }
	// }
	const columns = [
		{
            id: 'remedyNameMain',
            key: 'remedyName',
			headerName: 'Nazwa',
			field: 'remedyName',
            minWidth: 180,
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
                return (
                    <div className='flex flex-row cursor-pointer'>
                        <CustomizedDialogs 
                            icon={<FaExternalLinkAlt className='mt-0.5 ml-2' />}
                            value={row[key]?.sentenceNumbers?.length}
                            dialogText={DOMPurify.sanitize(row[key]?.description)}
                            dialogHeader={`${row[key]?.remedyName}: ${key}`}
                        />
                    </div>

                )
            },
            sortComparator: (a, b) => {
                return parseInt(a?.sentenceNumbers?.length) - parseInt(b?.sentenceNumbers?.length);
            },
            width: 80,
            minWidth: parseInt(key.length * 10),
            renderHeader: () => {
                const keys = key.split(' ')
                if (keys.length > 2) {
                    return (
                        <div style={{ lineHeight: "1.5em" }}>
                            <span>{`${keys[0]} ${keys[1]}`}</span>
                            <br />
                            <span>{keys.slice(2).join(' ')}</span>
                        </div>
                    )
                }

                return <div className="break-normal leading-6">{key}</div>
            },
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
