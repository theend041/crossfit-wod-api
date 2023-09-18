const recordService = require("../services/recordService")

const getRecordsForWorkout = (req, res) => {
    const {params : { workoutId }} = req;
    if(!workoutId) {
      res
      .status(400)
      .send({ status: "FAIED", data: { error: "Parameter ':workoutId' can not be empty"  } });
    }
    try {
      const workoutRecord = recordService.getRecordForWorkout(workoutId);
      res.send({ status: "OK", data: workoutRecord })
    } catch (error) {
      res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } })
    }
  }

  module.exports = { getRecordsForWorkout }