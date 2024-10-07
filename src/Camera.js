import React, {useEffect, useState} from "react";
import {AppBar, Toolbar, Grid, Button, Typography, TextField, Select, MenuItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Menu as MenuIcon} from "@material-ui/icons";
import {BrowserMultiFormatReader, NotFoundException} from '@zxing/library';
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";

const useStyles = makeStyles(theme => ({
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        backgroundColor: "#ffffff"
    },
    logo: {
        cursor: 'pointer',
        maxHeight: 50,
        width: 90
    },
    toolbarActions: {
        display: 'flex',
        alignItems: 'center'
    },
    menuIconMobile: {
        height: 40,
        width: 40,
        cursor: "pointer",
        fill: "#ff0000"
    },
    mainMobile: {
        height: "100%",
        padding: "0 40px"
    },
    grid: {
        flexDirection: "row",
        width: "100%",
        height: "100%"
    },
    mainContainer: {
        paddingBottom: 30
    },
    row: {
        marginBottom: 20
    },
    backButton: {
        color: "#000000"
    },
    backIcon: {
        fill: "#000000"
    },
}));

/*const BarcodeReader = props => {
    const {handleClose, handleCapture} = props;

    const scanBarcode = () => {
        const codeReader = new BrowserMultiFormatReader()

        const constraints = {
            video: {
                facingMode: "environment"
            }
        };

        codeReader.decodeFromConstraints(constraints, "video", (result, err) => {
            if (result) {
                handleCapture(result.text);
                console.log(result.text)
                codeReader.reset();
                handleClose();
            }
            if (err && !(err instanceof NotFoundException)) {
                console.error('Error during scanning:', err);  // Log any errors except NotFoundException
            }
        })
            .catch(err => {
                console.error('Error accessing environment camera, falling back to default camera:', err);

                // Fallback to the default camera if environment camera is not available
                codeReader.decodeFromVideoDevice(null, 'video', (result, err) => {
                    if (result) {
                        handleCapture(result.text);
                        codeReader.reset();
                        handleClose();
                    }
                    if (err && !(err instanceof NotFoundException)) {
                        console.error('Error during fallback scanning:', err);
                    }
                });
            })
    };

    useEffect(() => {
        scanBarcode();
    }, []);

    return (
        <Grid item xs={12}>
            <video id="video" width="300" height="200"></video>
        </Grid>
    )
}*/

const BarcodeReader = props => {
    const {
        handleClose,
        handleCapture,
    } = props;

    const [selectedCamera, setSelectedCamera] = useState("");

    const getBackCamerasWithZoom = async () => {
        try {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const videoDevices = devices.filter(
                (device) => device.kind === "videoinput"
            );

            // Filter back-facing cameras based on the label
            const backFacingCameras = videoDevices.filter((device) => device.label.toLowerCase().includes("back") || device.label.toLowerCase().includes("environment"));

            if (backFacingCameras.length === 0) {
                setSelectedCamera(videoDevices[0].deviceId);
                return;
            }

            let cameraWithMaxZoom = null;
            let maxZoomValue = 1;

            // Check zoom capabilities for each back camera
            for (let camera of backFacingCameras) {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { deviceId: { exact: camera.deviceId } },
                });

                const videoTrack = stream.getVideoTracks()[0];
                const capabilities = videoTrack.getCapabilities();

                // If the camera supports zoom, check the max zoom value
                if (capabilities.zoom) {
                    const currentMaxZoom = capabilities.zoom.max;
                    if (currentMaxZoom > maxZoomValue) {
                        maxZoomValue = currentMaxZoom;
                        cameraWithMaxZoom = camera;
                    }
                }

                // Stop the video track after checking capabilities
                videoTrack.stop();
            }

            if (cameraWithMaxZoom) {
                setSelectedCamera(cameraWithMaxZoom.deviceId);
            } else {
                // Fallback to the first available camera if none support zoom
                setSelectedCamera(backFacingCameras[0].deviceId);
            }
        } catch (err) {
            console.error("Error accessing devices:", err);
        }
    }

    const startScanner = async () => {
        const codeReader = new BrowserMultiFormatReader();
        try {
            await codeReader.decodeFromVideoDevice(
                selectedCamera,
                "video",
                (result, err) => {
                    if (result) {
                        console.log("Barcode detected:", result.text);
                        handleCapture(result.text);
                        codeReader.reset(); // Stop scanning after barcode detection
                        handleClose();
                    }
                    if (err && !(err instanceof NotFoundException)) {
                        console.error(err);
                    }
                }
            );
        } catch (err) {
            console.error("Error starting the scanner:", err);
        }
    };

    useEffect(() => {
        getBackCamerasWithZoom();
    }, []);

    useEffect(() => {
        if(selectedCamera) {
            startScanner();
        }
    }, [selectedCamera])

    return (
        <Grid item xs={12}>
            <video id="video" width="300" height="225"></video>
        </Grid>
    )
}

const Camera = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [isScanning, setIsScanning] = useState(false);
    const [barcode, setBarcode] = useState("");

    return (
        <>
            <AppBar
                position="fixed"
                className={classes.appBar}
                elevation={3}
            >
                <Toolbar style={{justifyContent: 'space-between'}}>
                    <img alt="Logo" src="/images/logo.png" className={classes.logo}/>
                    <div className={classes.toolbarActions}>
                        <MenuIcon className={classes.menuIconMobile} onClick={() => setOpen(true)}/>
                    </div>
                </Toolbar>
            </AppBar>
            <main className={classes.mainMobile}>
                <Grid container className={classes.grid} style={{paddingTop: 120}}>
                    <>
                        {isScanning &&
                            <BarcodeReader
                                handleClose={() => setIsScanning(false)}
                                handleCapture={e => setBarcode(e)}
                            />
                        }
                        <Grid item xs={12} md={12}>
                            <Grid container className={classes.mainContainer}>
                                <Grid item xs={12} className={classes.row}>
                                    <Button
                                        className={classes.backButton}
                                        startIcon={<KeyboardBackspaceIcon className={classes.backIcon}/>}
                                    >
                                        Ga tillbaka
                                    </Button>
                                </Grid>
                                <Grid item xs={7} className={classes.row} style={{width: '100%'}}>
                                    <Typography
                                        variant="h5"><b>A-Clinic Foundation, test</b></Typography>
                                </Grid>
                                <Grid item xs={5} className={classes.row} style={{width: '100%'}}>
                                    <Typography
                                        variant="h5"
                                        style={{textAlign: 'right', fontSize: '20px'}}
                                    >
                                        <b>Antal skapade remisser</b> 0
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.barcodeInputWrap}>
                                        <TextField
                                            variant="outlined"
                                            name="barcode"
                                            label="Skanna eller mata in ID-nummer"
                                            InputProps={{
                                                classes: {
                                                    notchedOutline: classes.notchedOutline
                                                }
                                            }}
                                            inputProps={{maxLength: 10}}
                                            value={barcode}
                                            className={`${classes.paddingLeft} ${classes.barcodeTextInput}`}
                                            InputLabelProps={{classes: {root: classes.textFieldInputLabel}}}
                                            placeholder="Skanna eller mata in ID-nummer"
                                            onChange={(e) => {
                                                if (Number.isInteger(Number(e.target.value))) {
                                                    setBarcode(e.target.value)
                                                }

                                            }}
                                        />
                                        <Button
                                            style={{
                                                backgroundColor: "green",
                                                marginTop: 9,
                                                borderTopLeftRadius: 0,
                                                borderBottomLeftRadius: 0,
                                                maxHeight: 58,
                                            }}
                                            onClick={() => setIsScanning(true)}
                                        >
                                            <CameraAltOutlinedIcon
                                                style={{fill: "white", width: "36px", height: "36px"}}/>
                                        </Button>
                                    </div>
                                </Grid>

                            </Grid>
                        </Grid>
                    </>
                </Grid>
            </main>
        </>
    )
}

export default Camera;