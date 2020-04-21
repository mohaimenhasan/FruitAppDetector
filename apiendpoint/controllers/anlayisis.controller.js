// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');
const fs = require('fs');

// Creates a client
const client = new vision.ImageAnnotatorClient();

exports.test = function(req, res, next){
    res.send("Hello darkness my old friend");
};

exports.getFruit = async function (req, res, next) {
    try{
        const fileName = __dirname+'/test.jpg';
        const request = {
            image: {content: fs.readFileSync(fileName)},
        };
        const [result] = await client.objectLocalization(request);
        const objects = result.localizedObjectAnnotations;
        let objs_to_return = [];
        objects.forEach(object => {
            objs_to_return.push({
                name: object.name,
                confidence: object.score
            });
            const vertices = object.boundingPoly.normalizedVertices;
            vertices.forEach(v => console.log(`x: ${v.x}, y:${v.y}`));
        });
        console.log(objs_to_return);
        res.send(objs_to_return);
    }catch(exc){
        console.log("ERROR IS:");
        console.log("------------------------------------------------------------");
        console.log(exc);
        console.log("------------------------------------------------------------");
        res.send("Bad Req");
    }
};