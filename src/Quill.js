import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import LinkIcon from '@material-ui/icons/Link';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Modal from '@material-ui/core/Modal';

function insertImage() {
    const cursorPosition = this.quill.getSelection().index;
    this.quill.insertText(cursorPosition, "★");
    this.quill.setSelection(cursorPosition + 1);
}

function insertLink() {
    const cursorPosition = this.quill.getSelection().index;
    this.quill.insertText(cursorPosition, "L");
    this.quill.setSelection(cursorPosition + 1);
}

function insertFile() {
    const cursorPosition = this.quill.getSelection().index;
    this.quill.insertText(cursorPosition, "F");
    this.quill.setSelection(cursorPosition + 1);
}

const CustomToolbar = ({linkClick, imageClick, fileClick}) => (
    <div id="toolbar">
      <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
        <option value="1"/>
        <option value="2"/>
        <option value="3"/>
        <option value="4"/>
        <option value="5"/>
        <option value="6"/>
        <option selected/>
      </select>
      <button className="ql-bold"/>
      <button className="ql-italic"/>
      <button className="ql-strike"/>
      <button className="ql-blockquote"/>
      <button className="ql-bullet">
        <FormatListBulletedIcon/>
      </button>
      {/* Check out to add ordered list */}
     {/*  <button className="ql-ordered">
        <FormatListNumberedIcon/>
      </button> */}
      <button className="ql-insertLink">
        <LinkIcon onClick={linkClick}/>
      </button>
      <button className="ql-image">
        <ImageOutlinedIcon onClick={imageClick}/>
      </button>
      <button className="ql-insertFile">
        <AttachFileIcon onClick={fileClick}/>
      </button>
    </div>
  );

const Editor = () => {

    const [editorHtml, setEditorHtml] = useState("");
    const [open, setOpen] = useState(false);

    const handleChange = (html) => {
      console.log(editorHtml)
      setEditorHtml(html);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleLinkClick = () => {
        setOpen(true);
    }

    const handleInsertImageClick = () => {
        setOpen(true);
    }

    const handleFileClick = () => {
        setOpen(true);
    }
  
    return (
      <>
        <div>
            <CustomToolbar 
                imageClick={handleInsertImageClick}
                linkClick={handleLinkClick}
                fileClick={handleFileClick}
            />
            <ReactQuill
                onChange={handleChange}
                modules={Editor.modules}
                formats={Editor.formats}
                theme={"snow"} // pass false to use minimal theme
            />
            <Modal open={open} onClose={handleClose}>
                <h3>Hello</h3>
            </Modal>
        </div>
      </>
    );
}  

Editor.modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {
        insertImage: insertImage,
        insertLink: insertLink,
        insertFile: insertFile
      }
    },

};

Editor.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color"
];

export default Editor;