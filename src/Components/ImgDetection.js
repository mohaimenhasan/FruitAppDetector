import React, {Component} from "react";
import { Camera } from "./camera";
import HomeIcon from '@material-ui/icons/Home';
import {makeStyles} from "@material-ui/core/styles";
import CameraIcon from '@material-ui/icons/Camera';
import Button from '@material-ui/core/Button';
import MainScreen from "./MainScreen";

const useStyles = makeStyles((theme)=>({
    button: {
        margin: theme.spacing(3),
    },
    cameraStyle: {
        borderStyle: "dotted",
        borderColor: "red",
        borderWidth: 5
    }
}));

function withMyHook(Component){
    return function WrappedComponent(props){
        const classes = useStyles();
        return <Component {...props} classes={classes}/>
    }
}

class ImgDetection extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cameraColor: "primary",
            cameraText: "Turn Camera On",
            cameraOn: false,
            photoData: null
        }
    }

    changeToMain(event){
        this.props.appContext.setState({
            currentScreen: <MainScreen appContext={this.props.appContext}/>
        })
    }


    flipCamera(){
        if(this.state.cameraOn === false){
            this.setState({
                cameraText: "Turn Camera Off",
                cameraOn: true,
                cameraColor: "secondary"
            })
        }else{
            this.setState({
                cameraColor: "primary",
                cameraText: "Turn Camera On",
                cameraOn: false
            })
        }
    }

    handleTakePhoto (dataUri) {
        // Do stuff with the photo...
        //console.log(dataUri);
        this.setState({
            photoData: dataUri
        });
        console.log(this.state.photoData);
    }

    handleTakePhotoAnimationDone (dataUri) {
        // Do stuff with the photo...
        console.log('takePhoto');
    }

    handleCameraError (error) {
        console.log('handleCameraError', error);
    }

    handleCameraStart (stream) {
        console.log('handleCameraStart');
    }

    handleCameraStop () {
        console.log('handleCameraStop');
    }

    clearPhotoData (){
        this.setState({
            photoData: null
        })
    }

    render() {
        const classes = this.props.classes;
        return(
            <div>
                {this.state.cameraOn && (
                    <Camera
                        onCapture={imgData => this.handleTakePhoto(imgData)}
                        onClear={()=> this.clearPhotoData()}
                    />
                )}
                <Button
                    variant="contained"
                    color={this.state.cameraColor}
                    size="large"
                    className={classes.button}
                    startIcon={<CameraIcon />}
                    onClick={(event) => this.flipCamera(event)}
                >
                    {this.state.cameraText}
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.button}
                    startIcon={<HomeIcon />}
                    onClick={(event) => this.changeToMain(event)}
                >
                    Back to Home Screen
                </Button>
            </div>
        );
    }
}

ImgDetection = withMyHook(ImgDetection);
export default ImgDetection;