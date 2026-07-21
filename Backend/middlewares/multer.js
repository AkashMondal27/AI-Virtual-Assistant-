import multer from 'multer';

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public')
    },
     
    filename: function(req,file,cd){
        cd(null, file.originalname)
    }
})


const upload=multer({storage:storage})
export default upload;

/*  through this the image will be uploaded to the public directory */