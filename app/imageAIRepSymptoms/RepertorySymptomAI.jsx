import React, { useState, useCallback } from 'react';
import RepertorySymptomItemAI from './RepertorySymptomItemAI';
import { generalGetModel, generalUpdateModel } from '@utils';
import EditableText from '@components/Form/EditableText';


const RepertorySymptomAI = ({
  repertorySymptom: repertorySymptomRaw,
  setDialogData,
  setDialogOpen,
  setDialogModelProperties,
  setDialogConfirmationAction,
  createRepertorySymptomItem,
  updateRepSymptom,
}) => {


  const [repertorySymptom, setRepertorySymptom] = useState(repertorySymptomRaw);
  const [editRepertorySymptomName, setEditRepertorySymptomName] = useState(false);
  
  const handleRefetch = useCallback(async ({ _id }) => {
    const repSymptom = await generalGetModel({
      modelName: 'repertorySymptom',
      _id,
      lookup: { 
        $lookup: {
          from: 'repertorysymptomitems',
          localField: '_id',
          foreignField: 'repertorySymptom',
          as: 'repertorySymptomItems',
        },
      }
    });
    const sorted = repSymptom[0].repertorySymptomItems.sort((a, b) => a.shortName.localeCompare(b.shortName));
    setRepertorySymptom({ ...repSymptom[0], repertorySymptomItems: sorted })
  }, [])

  const updateRepSymptomItem = useCallback(async ({ _id, values }) => {
      return generalUpdateModel({ _id, values, modelName: 'repertorySymptomItem' });
  }, []);

  const repertorySymptomItems = repertorySymptom?.repertorySymptomItems?.map(repertorySymptomItem => {
    return (
      <RepertorySymptomItemAI
        key={repertorySymptomItem._id}
        repertorySymptomItem={repertorySymptomItem}
        updateRepertorySymptomItem={updateRepSymptomItem}
        setDialogData={setDialogData}
        setDialogOpen={setDialogOpen}
        setDialogModelProperties={setDialogModelProperties}
        handleRefetchParent={handleRefetch}
        setDialogConfirmationAction={setDialogConfirmationAction}
      />
    );
  });

  return (
    <div style={{ marginBottom: 3 }}>

    
      <div style={{ border: 'groove' }}>
        <div>
          <div style={{ display: 'flex', minWidth: '100%', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#16d0e8' }}>

            <EditableText style={{ fontWeight: 'bold', fontSize: 15, minWidth: '50%' }} initialText={repertorySymptom?.name} onUpdate={updateRepSymptom} _id={repertorySymptom._id} fieldName="name" />
            {/* <p style={{ color: '#339' , marginLeft: 10, fontWeight: 'bold', fontStyle: 'italic', fontSize: 13}}>{repertorySymptom?.parentName || ''}</p> */}
            <EditableText style={{ color: '#339' , marginLeft: 10, fontWeight: 'bold', fontStyle: 'italic', fontSize: 13}} initialText={repertorySymptom?.parentName || ''} onUpdate={updateRepSymptom} _id={repertorySymptom._id} fieldName="parentName" />

            <button
              type='button'
              onClick={() => {
                setDialogConfirmationAction(() => handleRefetch)
                setDialogModelProperties({ apiPath: 'generalUpdate', modelName: 'repertorySymptom', id: repertorySymptom._id })
                setDialogData(repertorySymptom)
                setDialogOpen(true)
              }}
              style={{ marginLeft: 15}}
              className='addButton editButton'>Edytuj</button>
          </div>
          {
              <div style={{ display: 'flex', marginTop: 1, background: '#eee', borderTop: '0.5px dashed', minHeight: 16 }}>
                
                <p style={{ display: 'flex', maxWidth: 500, flexWrap: 'wrap', fontSize: 14 }}>
                  {repertorySymptomItems}
                  <button
                    style={{ marginLeft: 5 }}
                    onClick={() => { 
                        createRepertorySymptomItem({ values: { repertorySymptom: repertorySymptom?._id, strength: 1 }})
                        handleRefetch({ _id: repertorySymptom?._id })
                      }
                    }
                    className='addButton'
                  >
                    +
                  </button>
                </p>

              </div>
          }
        </div>
      </div>
    </div>
  )
};

export default RepertorySymptomAI;
