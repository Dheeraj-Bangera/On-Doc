const { exec } = require('child_process');
const path = require("path")
const getPrediction = async(req,res)=>{
    try {
    const {symptoms}=req.body;
    const symptomString = symptoms.join(',')
    // const scriptPath = path.join(__dirname,  'main.py'); 
    const pythonModelPath = path.join(__dirname);
    const command = `python main.py ${symptomString}`;
        console.log(command)
        exec(command,  { cwd: pythonModelPath },(error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                res.status(500).json({ error: 'An error occurred while processing the request.' });
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                res.status(500).json({ error: 'An error occurred while processing the request.' });
                return;
            }
            console.log(`Output: ${stdout}`);
            // Assuming the prediction is returned as stdout, you can send it as response
           return res.status(200).json({ prediction: stdout.trim()});
        });
    }catch(error){
        console.log(error)
        res.status(400).send(error)
    }


}


module.exports=getPrediction
