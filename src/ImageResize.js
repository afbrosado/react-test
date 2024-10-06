import React, {useRef, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";

const ImageResize = () => {
  const classes = useStyles();
  const imageRef = useRef(null);

  const [size, setSize] = useState({x: 474, y: 474});
  const [resizeCursor, setResizeCursor] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handler = (mouseDownEvent) => {
    if (resizeCursor) {
      const startSize = size;
      const startPosition = {x: mouseDownEvent.pageX, y: mouseDownEvent.pageY};

      function onMouseMove(mouseMoveEvent) {
        setSize(currentSize => ({
          x: startSize.x - startPosition.x + mouseMoveEvent.pageX,
          y: startSize.y - startPosition.y + mouseMoveEvent.pageY
        }));
      }

      function onMouseUp() {
        document.body.removeEventListener("mousemove", onMouseMove);
        // uncomment the following line if not using `{ once: true }`
        document.body.removeEventListener("mouseup", onMouseUp);
      }

      document.body.addEventListener("mousemove", onMouseMove);
      document.body.addEventListener("mouseup", onMouseUp, {once: true});
    }
  };

  const handleMouseOver = e => {
    let img = e.target.getBoundingClientRect();
    let x = e.clientX - img.left; //x position within the element.
    let y = e.clientY - img.top;  //y position within the element.
    if (x >= size.x - 5 && y >= size.y - 5) {
      setResizeCursor(true);
    } else {
      setResizeCursor(false);
    }
  };
  console.log(selectedImage)
  return (
    <>
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
        }}
      />
      <div className={classes.container}>
        {selectedImage &&
        <img
          ref={imageRef}
          src={URL.createObjectURL(selectedImage)}
          alt='image'
          draggable="false"
          className={resizeCursor ? classes.imageCursor : {}}
          onMouseDown={handler}
          onMouseOver={handleMouseOver}
          onMouseMove={handleMouseOver}
          width={size.x}
          height={size.y}
        />
        }
      </div>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 50,
    width: "500px",
    height: "750px",
    border: "1px solid black",
    background: "#6495ED"
  },
  imageCursor: {
    cursor: "se-resize"
  }
}));

export default ImageResize;
