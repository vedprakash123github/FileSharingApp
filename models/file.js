const mongoose =require('mongoose');
const Schema=mongoose.Schema;

//create the schema in the Db to store the file
//here in this function schema various fields are declared to store the information abot the file upload in the tables in the dataabse. 
// So consider these fields as the columns of the table;
const fileSchema = new Schema({
    filename: { type: String, required: true },
    path: { type: String, required: true },
    size: { type: Number, required: true },
    uuid: { type: String, required: true },
    sender: { type: String, required: false },
    receiver: { type: String, required: false },
}, { timestamps: true });

//schema => blue print for the row(docuemnt) in mongoDb
//model => takes the schema and creates the document
module.exports= mongoose.model('File',fileSchema); //name of model will be "File" and the collection created inside the Db will be named as "Files";
                                                    // the model will take schema as arguement eg. fileSchema