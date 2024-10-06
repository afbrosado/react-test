import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';

const MyInput = () => {
    const [value, setValue] = React.useState("");

    const onChange = e => {
        setValue(e.target.value);
    };

    return <input value={value} onChange={onChange} />;
}

export function MyEditor() {
    const [editorState, setEditorState] = React.useState(EditorState.createEmpty());

    const _onBoldClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
      }
   
    return (
            <div>
                 <button onClick={_onBoldClick.bind(this)}>Bold</button>
                <Editor editorState={editorState} onChange={setEditorState} />
            </div>
    )
}