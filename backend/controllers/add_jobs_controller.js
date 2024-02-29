// const httpStatus = require("http-status");
const Add_jobs_Model = require("../models/Add_Jobs_Model");
const Apply_Job_Model = require("../models/Apply_job_Model");

const getData = async (req, res) => {
  const data = await Add_jobs_Model.find({});
  const total_employer = data.length
  console.log("total",total_employer)
  res.status(200).json({ msg: "Getting data", data: data , total:total_employer });
  console.log(data);
};

const postData = async (req, res) => {
  console.log("body:", req.body);
  const data = await Add_jobs_Model.create(
    req.body
    //  title:req.body.title,
    //  companyname:req.body.companyname,
    //  skills:req.body.skills,
    //  salary:req.body.salary,
    //  jobposted:req.body.jobposted,
    //  numberofvaccancies:req.body.numberofvaccancies,
    //  location:req.body.location,
    //  experience:req.body.experience,
    //  description:req.body.description,
    //  aboutcompany:req.body.aboutcompany,
  );
  res.status(200).json({ msg: "Added Successfully" });
  console.log("data:", data);
};

const deleteData = async (req,res)=>{
  const id = req.params.id
   await Add_jobs_Model.findByIdAndDelete(id);
   res.status(200).json({msg:'Deleted successfully',status:true})
};

const patchData = async (req,res) => {
  const id = req.params.id
  await Add_jobs_Model.findByIdAndUpdate(id,req.body)
  res.status(200).json({msg:'Updated successfully',status:true})

}

const applyJob = async (req, res) => {
  console.log("file:", req.file);
  console.log("body:", req.body);
  const data = await Apply_Job_Model.create(req.body,req.file);
  res.status(200).json({ msg: "Added Successfully" });
  console.log("data:", data);
};


module.exports = { getData, postData ,deleteData , patchData, applyJob};
