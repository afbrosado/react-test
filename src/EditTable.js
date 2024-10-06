import React, {useState} from "react";
import {Button, TextField} from "@material-ui/core";

const EditTable = () => {

  const [data, setData] = useState({name: "Andre", age: "28", country: "PT"});
  const [initialData, setInitialData] = useState({name: "Andre", age: "28", country: "PT"});
  const [draftData, setDraftData] = useState({name: "Andre", age: "28", country: "PT"});
  const [edit, setEdit] = useState(false);

  const handleCancel = () => {
    setData(initialData);
    setDraftData(initialData);
    setEdit(false);
  };
  console.log(data.name)
  console.log(draftData.name)
  console.log(initialData.name)
  return (
    <>
      <Button onClick={() => setEdit(true)}>
        Edit
      </Button>
      <Button onClick={handleCancel}>
        Cancel
      </Button>
      {[1].map(item => {
        if (!edit) {
          return (
            <>
              <div>
                {data.name}
              </div>
              <div>
                {data.age}
              </div>
              <div>
                {data.country}
              </div>
            </>
          )
        }
        return (
          <>
            <div>
              <TextField
                value={draftData.name}
                onChange={e => setDraftData({...draftData, ["name"]: e.target.value})}
              />
            </div>
            <div>
              <TextField
                value={draftData.age}
                onChange={e => setDraftData({...draftData, ["age"]: e.target.value})}
              />
            </div>
            <div>
              <TextField
                value={draftData.country}
                onChange={e => setDraftData({...draftData, ["country"]: e.target.value})}
              />
            </div>
          </>
        )
      })}
    </>
  );
};

export default EditTable;
