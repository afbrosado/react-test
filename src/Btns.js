import React from "react";
import {Typography} from "@material-ui/core";
import PrintIcon from "@material-ui/icons/Print";
import TabletIcon from '@material-ui/icons/Tablet';

export const Btns = () => {
  return (
    <div style={{display: "flex"}}>
      <div style={{display: "flex", backgroundColor: "#28a745", color: "#ffffff", padding: "10px 20px", maxWidth: 190, alignItems: "center", borderRadius: "4px", maxHeight: 55, cursor: "pointer"}}>
      <TabletIcon style={{fontSize: 38}}/>
      <Typography variant="body2" style={{textAlign: "left", marginLeft: 16, fontWeight: "bold"}}>Signera och skicka digitalt till labet</Typography>
      </div>
      <div style={{marginLeft: 30, display: "flex", backgroundColor: "#727272", color: "#ffffff", padding: "10px 20px", maxWidth: 190, alignItems: "center", borderRadius: "4px", maxHeight: 55, cursor: "pointer"}}>
        <PrintIcon style={{fontSize: 38}}/>
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: 16}}>
          <Typography variant="body2" align="left" style={{fontWeight: "bold"}}>Skriv ut remiss</Typography>
          <Typography variant="caption" style={{textAlign: "left"}}>Notera att ingenting skickas till labet digitalt.</Typography>
        </div>
      </div>
    </div>
  );
}