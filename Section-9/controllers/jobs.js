const getAllJobs = async (req, res) => {
    res.status(200).json({ msg: "All jobs" });
};

const getJob = async (req, res) => {
    res.status(200).json({ msg: "Single Job" });
};

const createJob = async (req, res) => {
    res.status(200).json({ msg: "Job created" });
};

const updateJob = async (req, res) => {
    res.status(200).json({ msg: "Job updated" });
};

const deleteJob = async (req, res) => {
    res.status(200).json({ msg: "Job deleted" });
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
