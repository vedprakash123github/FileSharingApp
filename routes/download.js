const router=require('express').Router();
const File=require('../models/file');

router.get('/:uuid',async (req,res)=>{
    const file=await File.findOne({uuid:req.params.uuid});
    //if the required file is not found then show the error message.
    if(!file){
        return res.render('download',{error: "Link has been expired."});
    }
    const filePath=`${__dirname}/../${file.path}`;
    console.log("this is email download");
    res.download(filePath);
    console.log("download complete");
});

module.exports = router;