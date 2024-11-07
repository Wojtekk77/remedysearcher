import React, { useState, useCallback, useContext, useEffect } from "react";
import RepertorySymptomItemAI from './RepertorySymptomItemAI';
import { generalDeleteModel, generalGetModel, generalUpdateModel } from '@utils';
import EditableText from '@components/Form/EditableText';
import { ParentChildrenContext } from './page';


const repSymptomField = ['name', 'parent', 'isParent', 'orderNumber'];
const nothingChange = (a, b, fields = repSymptomField) => {
  for (const field of fields) {
    if (typeof a[field] !== typeof b[field] || a[field]?.toString() !== b[field]?.toString()) {
      return false
    }
  }
  return true;
}

const RepertorySymptomAI = ({
  repertorySymptom: repertorySymptomRaw,
  setDialogData,
  setDialogOpen,
  setDialogModelProperties,
  setDialogConfirmationAction,
  createRepertorySymptomItem,
  updateRepSymptom,
  refetchImage,
}) => {


  const { children, parent, handleSetParent, handleSetChildren, handleSaveParency, handleCombineRepSymptoms, addRepertorySymptom } = useContext(ParentChildrenContext);
  const [repertorySymptom, setRepertorySymptom] = useState(repertorySymptomRaw);
  const [loading, setLoading] = useState(false);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  
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


  const deleteRepSymptomItem = useCallback(async ({ apiPath, values }) => {
    return generalDeleteModel({ values, apiPath });
}, []);
    

  useEffect(() => {
    if (repertorySymptomRaw && repertorySymptom && !nothingChange(repertorySymptomRaw, repertorySymptom)) {
      setRepertorySymptom(repertorySymptomRaw)
    }
    
  }, [repertorySymptomRaw])

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
        deleteRepSymptomItem={deleteRepSymptomItem}
        showRemoveButton={showRemoveButton}
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
                              setLoading(true)
                              await handleSaveParency({ parent, children })
                              await refetchImage();
                              handleSetParent({ _id: repertorySymptom._id })
                              setLoading(false)
                              // await handleRefetch({ _id: repertorySymptom._id })
                            }}
                          >
                            { loading ? 'Zapisywanie...' : 'Zapisz' }
                          </button>
                        )}

                      </>
              }
              {
                repertorySymptom.parent && <p className='addButton editButton' style={{ backgroundColor: repertorySymptom.parent && '#c06dfc', marginRight: 5 }}>Dz</p>
              }
              <EditableText key={repertorySymptom?.name} style={{ fontWeight: 'bold', fontSize: 15, minWidth: '50%' }} initialText={repertorySymptom?.name} onUpdate={updateRepSymptom} _id={repertorySymptom._id} fieldName="name" />
            </div>
            {/* <p style={{ color: '#339' , marginLeft: 10, fontWeight: 'bold', fontStyle: 'italic', fontSize: 13}}>{repertorySymptom?.parentName || ''}</p> */}
            {/* <EditableText key={repertorySymptom?.parentName} style={{ color: '#339' , marginLeft: 10, fontWeight: 'bold', fontStyle: 'italic', fontSize: 13}} initialText={repertorySymptom?.parentName || ''} onUpdate={updateRepSymptom} _id={repertorySymptom._id} fieldName="parentName" /> */}

            
            <div style={{ display: 'flex' }}>

              { (parent === repertorySymptom._id.toString() && children?.length) && (

                <button
                  type='button'
                  onClick={async () => {
                    setLoading(true)
                    await handleCombineRepSymptoms({ parent, children })
                    await refetchImage();
                    setLoading(false)
                  }}
                  style={{ marginLeft: 15}}
                  className='addButton editButton'
                >
                  Połącz
                </button>
              )}
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
              <button
                onClick={async () => {
                  await addRepertorySymptom({ values: { imagePath: repertorySymptom.imagePath, property: repertorySymptom.property, name: 'NAZWA', parentName: '', orderNumber: repertorySymptom.orderNumber + 0.1 } });
                  await refetchImage();
                }}
                className="addButton"
                style={{ marginLeft:5, marginRight: 5 }}
              >
                +
              </button>
              <button
                onClick={async () => {
                  setShowRemoveButton(!showRemoveButton)
                  // await handleRefetch({ _id: repertorySymptom._id })
                }}
                className="addButton removeButton"
                style={{ marginLeft: 1, marginRight: 3 }}
              >
                - i
              </button>
              {/* <button style={{ marginLeft: 3 }}>{repertorySymptom?.orderNumber}</button> */}
              <EditableText key={repertorySymptom?.orderNumber} initialText={repertorySymptom?.orderNumber} onUpdate={updateRepSymptom} _id={repertorySymptom._id} fieldName="orderNumber" />

            </div>
            
          </div>
          {
              <div style={{ display: 'flex', marginTop: 1, background: '#eee', borderTop: '0.5px dashed', minHeight: 16 }}>
                
                <p style={{ display: 'flex', maxWidth: 500, flexWrap: 'wrap', fontSize: 14 }}>
                  {repertorySymptomItems}
                  <button
                    style={{ marginLeft: 5 }}
                    onClick={async () => { 
                        await createRepertorySymptomItem({ values: { repertorySymptom: repertorySymptom?._id, strength: 1 }})
                        await handleRefetch({ _id: repertorySymptom?._id })
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
