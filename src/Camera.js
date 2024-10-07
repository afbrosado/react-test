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
        selectedDeviceId,
        videoInputDevices,
        setSelectedDeviceId,
    } = props;

    const codeReader = new BrowserMultiFormatReader();

    const startCamera = async () => {

        const constraints = {
            video: {
                facingMode: {exact: 'environment'}
            }
        };

        try {
            await codeReader.decodeFromConstraints(constraints, 'video', (result, err) => {
                if (result) {
                    handleCapture(result.text);
                    codeReader.reset(); // Stop scanning after the barcode is found
                    handleClose();
                }

                if (err && !(err instanceof NotFoundException)) {
                    console.error(err);
                }
            });
        } catch (err) {
            console.error('Error accessing the camera:', err);
            try {
                const fallbackConstraints = {
                    video: true // Use the default video camera
                };

                await codeReader.decodeFromConstraints(fallbackConstraints, 'video', (result, err) => {
                    if (result) {
                        handleCapture(result.text);
                        codeReader.reset(); // Stop scanning after the barcode is found
                        handleClose();
                    }
                    if (err && !(err instanceof NotFoundException)) {
                        console.error(err);
                    }
                });
            } catch (fallbackErr) {
                console.error('Error accessing the default camera:', fallbackErr);

            }
        }

        /*   codeReader.decodeFromVideoDevice(selectedDeviceId, "video", (result, err) => {
               if(result) {
                   handleCapture(result.text);
                   codeReader.reset();
                   handleClose();
               }
           })*/
    }

    useEffect(() => {
        startCamera();
        return () => {
            codeReader.reset(); // Stop the video stream when the component unmounts
        };
    }, []);

    return (
        <Grid item xs={12}>
            <video id="video" width="300" height="225"></video>

         {/*   {videoInputDevices.length > 0 &&
                <Select
                    value={selectedDeviceId}
                    onChange={e => setSelectedDeviceId(e.target.value)}
                >
                    {videoInputDevices.map((device, index) => (
                        <MenuItem key={index} value={device.deviceId}>{device.label}</MenuItem>
                    ))}
                </Select>
            }*/}
        </Grid>
    )
}

const Camera = () => {
    const classes = useStyles();
    const codeReader = new BrowserMultiFormatReader();

    const [open, setOpen] = useState(false);
    const [isScanning, setIsScanning] = useState(false);
    const [barcode, setBarcode] = useState("");
    const [videoInputDevices, setVideoInputDevices] = useState([]);
    const [selectedDeviceId, setSelectedDeviceId] = useState('');

    /*useEffect(() => {
        codeReader.listVideoInputDevices()
            .then(devices => {
                console.log(devices)
                setVideoInputDevices(devices);
                //Set default device
                if (devices.length > 0) {
                    setSelectedDeviceId(devices[0].deviceId);
                }
            })
            .catch(err => {
                console.log("Error listing video input devices: ", err);
            })

        return () => {
            codeReader.reset();
        };
    }, []);*/


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
                               /* selectedDeviceId={selectedDeviceId}
                                videoInputDevices={videoInputDevices}
                                setSelectedDeviceId={setSelectedDeviceId}
                                codeReader={codeReader}*/
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