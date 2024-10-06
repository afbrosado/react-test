import React, {useEffect, useState, useRef} from "react";
import Resizer from "react-image-file-resizer";
import {makeStyles} from "@material-ui/core/styles";

const CONTAINER_WIDTH = 500;
const CONTAINER_HEIGHT = 750;

const ReactImageResize = () => {
  const classes = useStyles();
  const containerRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState("");
  const [size, setSize] = useState({x: 474, y: 474});
  const [resizeCursor, setResizeCursor] = useState(false);
  const [ratio, setRatio] = useState(1);

  const fileChangedHandler = event => {
    let file;
    let width;
    let height;
    if (event.target.files[0]) {
      file = event.target.files[0]
    }
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const image = new Image();
        image.src = reader.result;
        image.onload = () => {
          let r = image.width / image.height;
          if ((image.width > CONTAINER_WIDTH && image.height <= CONTAINER_HEIGHT) || (image.height > CONTAINER_HEIGHT && image.width <= CONTAINER_WIDTH)) {
            width = CONTAINER_WIDTH;
            height = CONTAINER_WIDTH / r;
          }
          if (image.width > CONTAINER_WIDTH && image.height > CONTAINER_HEIGHT) {
            let scaleFactor;
            if (image.width > image.height) {
              scaleFactor = CONTAINER_WIDTH / image.width
              width = CONTAINER_WIDTH;
              height = image.height * scaleFactor;
            } else {
              scaleFactor = CONTAINER_HEIGHT / image.height;
              width = image.width * scaleFactor;
              height = CONTAINER_HEIGHT
            }
          }
          if(image.width < CONTAINER_WIDTH && image.height < CONTAINER_HEIGHT) {
            width = image.width;
            height = image.height;
          }
         setSize({x: width, y: height})
        }
      }
      reader.readAsDataURL(file);
      try {
        Resizer.imageFileResizer(
          file,
          width,
          height,
          "JPEG",
          100,
          0,
          (uri) => {
            setSelectedImage(uri);
          },
          "base64",
          width,
          height
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getRatio = () => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = selectedImage;
      img.onload = () => {
        resolve(img)
      };
      img.onerror = reject;
    })
  };

  const handler = (mouseDownEvent) => {
    if (resizeCursor) {
      const startSize = size;
      const startPosition = {x: mouseDownEvent.pageX, y: mouseDownEvent.pageY};

      function onMouseMove(mouseMoveEvent) {
        setSize(currentSize => ({
          x: startSize.x - startPosition.x + mouseMoveEvent.pageX,
          y: (startSize.x - startPosition.x + mouseMoveEvent.pageX) / ratio
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

  const handleCrop = () => {
    const container = containerRef.current;
    const image = container.querySelector('img');

    // Create a canvas element with the desired dimensions
    const canvas = document.createElement('canvas');
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    // Draw the contents of the div onto the canvas
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // Export the canvas as an image
    const dataUrl = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'cropped-image.jpg';
    link.click();
  }

  useEffect(() => {
    if (selectedImage) {
      getRatio()
        .then(res => {
          let ratio = res.width / res.height
          setRatio(ratio)
        })
        .catch(error => console.log(error))
    }
  }, [selectedImage])

  return (
    <div className="App">
      <input type="file" onChange={fileChangedHandler}/>
      <div ref={containerRef} className={classes.container}>
        {selectedImage &&
        <img
          src={selectedImage}
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
      <button onClick={handleCrop} style={{marginTop: 40}}>Crop</button>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 50,
    width: CONTAINER_WIDTH,
    height: CONTAINER_HEIGHT,
    border: "1px solid black",
    background: "#6495ED"
  },
  imageCursor: {
    cursor: "se-resize"
  }
}));
export default ReactImageResize;
