import React, {Component} from "react";
import Camera from 'react-html5-camera-photo';
import {makeStyles} from "@material-ui/core/styles";
import 'react-html5-camera-photo/build/css/index.css';

const useStyles = makeStyles({

});

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

        }
    }

    handleTakePhoto (dataUri) {
        // Do stuff with the photo...
        console.log(dataUri);
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
    render() {
        return(
            <div>
                <Camera
                    onTakePhoto = { (dataUri) => { this.handleTakePhoto(dataUri); } }
                    onTakePhotoAnimationDone = { (dataUri) => { this.handleTakePhotoAnimationDone(dataUri); } }
                    onCameraError = { (error) => { this.handleCameraError(error); } }
                    onCameraStart = { (stream) => { this.handleCameraStart(stream); } }
                    onCameraStop = { () => { this.handleCameraStop(); } }
                />
            </div>
        );
    }
}

ImgDetection = withMyHook(ImgDetection);
export default ImgDetection;