const Job=require('../models/Job')

module.exports = {
    createJob: async (req, res) => {
        const newJob=new Job(req.body);

        try {
            const savedJob= await newJob.save();
            const {__v,createdAt,updatedAt, ...newJobInfo}=savedJob._doc;
            res.status(201).json(newJobInfo);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    updateJob: async (req, res) => {
    try{
        const updateJob= await Job.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{ new: true}
        );
        const {__v,createdAt,updatedAt, ...updatedJobInfo }=updateJob._doc;
        res.status(200).json({...updatedJobInfo});
    } catch (error) {
        res.status(500).json(error)
    }
    },


}