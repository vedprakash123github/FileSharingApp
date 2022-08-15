const connectDb=require('./config/db');
const file = require('./models/file');
const File=require('./models/file');
const fs=require('fs');
connectDb();
async function deleteData()
{
    const pastDate=new Date(Date.now()-(24*60*60*1000));
    const files=await File.find({createdAt: { $lt: pastDate } });
    // const files=await File.find({filename:"1659977331483-867604380.docx"});
    // console.log(files.uuid);
   
    if(files.length)
    {
        for(const file of files)
        {
            try{
                fs.unlinkSync(file.path); //remove file from upload foleder on the system local;
                await file.remove();
                console.log(`successfully deleted ${file.filename}`);
            }catch(err)
            {
                console.log(`Error while deleting file ${err}`);
            }
        }
    }
}
deleteData(process.exit);
