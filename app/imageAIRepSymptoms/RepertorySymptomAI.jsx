import React, { useState, useCallback, useContext } from "react";
import RepertorySymptomItemAI from './RepertorySymptomItemAI';
import { generalGetModel, generalUpdateModel } from '@utils';
import EditableText from '@components/Form/EditableText';
import { ParentChildrenContext } from './page';


const RepertorySymptomAI = ({
  repertorySymptom: repertorySymptomRaw,
  setDialogData,
  setDialogOpen,
  setDialogModelProperties,
  setDialogConfirmationAction,
  createRepertorySymptomItem,
  updateRepSymptom,
}) => {

  const { children, parent, handleSetParent, handleSetChildren, handleSaveParency } = useContext(ParentChildrenContext);
  const [repertorySymptom, setRepertorySymptom] = useState(repertorySymptomRaw);
  
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
      },
    });
    const sorted = repSymptom[0].repertorySymptomItems.sort((a, b) => a.shortName.localeCompare(b.shortName));
    setRepertorySymptom({ ...repSymptom[0], repertorySymptomItems: sorted })
  }, [])

  const updateRepSymptomItem = useCallback(async ({ _id, values }) => {
      return generalUpdateModel({ _id, values, modelName: 'repertorySymptomItem' });
  }, []);

  const repertorySymptomItems = repertorySymptom?.repertorySymptomItems?.sort((a, b) => a.shortName.localeCompare(b.shortName))?.map(repertorySymptomItem => {
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
            <div style={{ display: 'flex'}}>
              {
                  parent && repertorySymptom._id.toString() !== parent
                    ? <button
                        type='button'
                        onClick={() => handleSetChildren({ _id: repertorySymptom._id })}
                        className='addButton editButton'
                        style={{ backgroundColor: parent === repertorySymptom.parent ? '#c06dfc' : children.includes(repertorySymptom._id.toString()) ? '#950af8' : null, marginRight: 5 }}
                      >
                        Dziecko
                      </button>
                    : 
                      <>
                        <button 
                          type='button'
                          onClick={() => handleSetParent({ _id: repertorySymptom._id })}
                          className='addButton editButton'
                          style={{ backgroundColor: repertorySymptom.isParent ? '#ffe438' : '#a3911b', color: repertorySymptom.isParent ? '#000000' : '#ffffff', marginRight: 5}}
                        >
                          Rodzic
                        </button>
                        {parent && (
                          <button
                            className='addButton editButton'
                            style={{ color: '#333', backgroundColor: '#d1ec20', marginRight: 5 }}
                            onClick={async () => {
                              await handleSaveParency({ parent, children })
                              await handleRefetch({ _id: repertorySymptom._id })
                            }}
                          >
                            Zapisz
                          </button>
                        )}
                      </>
              }
              <EditableText key={repertorySymptom?.name} style={{ fontWeight: 'bold', fontSize: 15, minWidth: '50%' }} initialText={repertorySymptom?.name} onUpdate={updateRepSymptom} _id={repertorySymptom._id} fieldName="name" />
            </div>
            {/* <p style={{ color: '#339' , marginLeft: 10, fontWeight: 'bold', fontStyle: 'italic', fontSize: 13}}>{repertorySymptom?.parentName || ''}</p> */}
            {/* <EditableText key={repertorySymptom?.parentName} style={{ color: '#339' , marginLeft: 10, fontWeight: 'bold', fontStyle: 'italic', fontSize: 13}} initialText={repertorySymptom?.parentName || ''} onUpdate={updateRepSymptom} _id={repertorySymptom._id} fieldName="parentName" /> */}

            
            <div>

            
              <button
                type='button'
                onClick={() => {
                  setDialogConfirmationAction(() => handleRefetch)
                  setDialogModelProperties({ apiPath: 'generalUpdate', modelName: 'repertorySymptom', id: repertorySymptom._id })
                  setDialogData(repertorySymptom)
                  setDialogOpen(true)
                }}
                style={{ marginLeft: 15}}
                className='addButton editButton'
              >
                Edytuj
              </button>
              <button
                className="addButton editButton"
                style={{ marginLeft: 5, backgroundColor: repertorySymptom.toFix ? '#ee110d' : '#b97f29' }}
                onClick={async () => {
                  await updateRepSymptom({ _id: repertorySymptom._id , values: { toFix: !repertorySymptom.toFix } });
                  await handleRefetch({ _id: repertorySymptom._id })
                }}
              >
                XXX
              </button>
            </div>
            
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
