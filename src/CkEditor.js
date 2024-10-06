import React from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function () {

  const [data, setData] = React.useState("<p>Hello world</p>")

  const editorConfiguration = {
    toolbar: [ 'bold', 'italic' ]
  };

  return (
    <div className="App">
      <h2>Using CKEditor 5 build in React</h2>
      <CKEditor
        editor={ ClassicEditor }
        data={data}
        onReady={ editor => {
          // You can store the "editor" and use when it is needed.
          console.log( 'Editor is ready to use!', editor );
        } }
        onChange={ ( event, editor ) => {
          const data = editor.getData();
          console.log( { data } );
        } }
      />
    </div>
  )
}