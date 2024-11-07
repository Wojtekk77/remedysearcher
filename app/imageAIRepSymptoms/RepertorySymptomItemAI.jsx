"use client";

import React, { useState, useCallback } from "react";
import { capitalizeFirstLetter, generalGetModel } from '@utils';


const RepertorySymptomItemAI = ({
  repertorySymptomItem,
  updateRepertorySymptomItem,
  setDialogData,
  setDialogOpen,
  setDialogModelProperties,
  setDialogConfirmationAction,
  handleRefetchParent,
  showRemoveButton,
  deleteRepSymptomItem,
}) => {
  
  const [repSymptomItem, setRepSymptomItem] = useState(repertorySymptomItem);

  const handleIncreaseStrength = useCallback(async (rSI) => {
    const newStrength = ((rSI.strength + 1) % 5) || 1;
    const updatedRepSymptpomItem = await updateRepertorySymptomItem({ _id: rSI._id, values: { strength: newStrength } });
    setRepSymptomItem(updatedRepSymptpomItem)
  }, [])

  const handleRefetchParentAndItem = useCallback(async () => {
    const repertorySymptomItem = await generalGetModel({ _id: repSymptomItem._id, modelName: 'repertorySymptomItem' });
    await handleRefetchParent({ _id: repertorySymptomItem?.repertorySymptom });
    setRepSymptomItem(repertorySymptomItem);
  }, [])


  if (!repSymptomItem) {
    return null;
  }

  const style = {
    
    whiteSpace: 'nowrap',
    fontStyle: repSymptomItem?.strength === 2 ? 'italic' : 'normal',
    fontWeight: repSymptomItem?.strength === 3 || repSymptomItem?.strength === 4 ? 'bold' : 'normal',
  } 

  return (
      <span style={{ marginLeft: 5, }}>
        <button
            style={{ ...style  }}
            onClick={() => handleIncreaseStrength(repSymptomItem)}
            className="shortName"
        >
            {`${repSymptomItem.strength === 4 && '*' || ''}${capitalizeFirstLetter(repSymptomItem.shortName)}.,`}
        </button>
        {
          showRemoveButton ?
          <button
            style={{ width: 12 }}
            className='addButton removeButton'
            onClick={async () => {
              await deleteRepSymptomItem({ apiPath: `repertorySymptomItem/${repSymptomItem._id}`, values: { _id: repSymptomItem._id } })
              await handleRefetchParent({ _id: repertorySymptomItem?.repertorySymptom });
            }}
          >
          -
          </button> :
          <button
            style={{ width: 12 }}
            className='addButton editButton'
            onClick={() => {
              setDialogModelProperties({ apiPath: `repertorySymptomItem/${repSymptomItem._id}`, modelName: 'repertorySymptomItem', id: repSymptomItem._id })
              setDialogData(repSymptomItem)
              setDialogConfirmationAction(() => handleRefetchParentAndItem)
              setDialogOpen(true) 
            }}
          >
            #
          </button>
        }

        
      </span>
  )
};

export default RepertorySymptomItemAI;
