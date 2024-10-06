import React, {useState} from 'react';
import BarcodeScannerComponent from "react-webcam-barcode-scanner";

const BarcodeReader = () => {

  const [code, setCode] = useState('')

  const [data, setData] = React.useState('Not Found');

  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text)
        }}
      />
      <p>{data}</p>
    </>
  )
}

export default BarcodeReader;