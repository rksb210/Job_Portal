// const multer = require('multer')
// const { v4: uuidv4 } = require('uuid');
// const serverpath = multer.diskStorage({
//     destination : (req,file,path)=>{
//         path(null,"./public/images")
//     },
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype === 'application/pdf') {
//             cb(null, true);
//         } else {
//             cb(new Error('Only PDF files are allowed'));
//         }
//     },
//     filename : (req,file,path)=>{
//         console.log("FILE:",file)
//         const newfilename = `${uuidv4()}${file.originalname.substring(file.originalname.lastIndexOf('.pdf'))}`
//         // const newfilename = `${uuidv4()}${file.originalname}`
//         path(null,newfilename)
//     }
// })
// const upload = multer({storage:serverpath})
// module.exports = upload

const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const serverpath = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    console.log("filllllll",file.originalname)
    //   const newFilename = `${uuidv4()}.pdf`;
    //   const newFilename = file.originalname;
       const newFilename = `${uuidv4()}${file.originalname.substring(file.originalname.lastIndexOf('.'))}`

      cb(null, newFilename);
  },  
});

const fileFilter= (req, file, cb) => {
    if (file.mimetype === "application/pdf" || file.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      return cb(null, true);
    } else {
      return cb(new Error("Only PDF and Docs files are allowed"));
    }
  }

const upload = multer({ storage: serverpath, fileFilter });

module.exports = upload;
