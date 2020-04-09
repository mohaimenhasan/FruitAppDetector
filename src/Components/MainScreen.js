import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typical from 'react-typical';
import Button from "@material-ui/core/Button";
import Eggplant from './eggplant.png';
import Particles from 'react-particles-js';
import ImgDetection from "./ImgDetection";

const particlesParam = {
    "particles": {
        "number": {
            "value": 50
        },
        "size": {
            "value": 3
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
};

const useStyles = makeStyles({
    imgStyle:{
        marginTop: "-65vh",
        height: "40vw"
    },
    textStyle:{
        color: "white",
        marginTop: "-90vh"
    }
});

function withMyHook(Component){
    return function WrappedComponent(props){
        const classes = useStyles();
        return <Component {...props} classes={classes}/>
    }
}

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    changeScreen(event){
        this.props.appContext.setState({
            currentScreen: <ImgDetection appContext={this.props.appContext}/>
        });
    }

    render(){
        const classes = this.props.classes;
        return(
            <div>
                <Particles params={particlesParam}/>
                <img className={classes.imgStyle} alt={"Eggplant Icon"} src={Eggplant}/>
                <div className={classes.textStyle}>
                    <h1> Hi this is Mohaimen </h1>
                    <h2>
                        Find your Inner <br/> {' '}
                        <Typical
                            steps={
                                [
                                    'Fruit', 1000,
                                    'Passion', 1000,
                                    'Meme', 1000
                                ]}
                            loop={Infinity}
                            wrapper="b"
                        />
                    </h2>
                    <Button variant="contained" color="primary" onClick={(event) => this.changeScreen(event)}>
                        Try It
                    </Button>
                </div>
            </div>

        )
    }
}


MainScreen = withMyHook(MainScreen);
export default MainScreen;

/*
 */