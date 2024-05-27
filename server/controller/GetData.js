const Data = require("../models/Data");

exports.GetData = async (req, res) => {
  try {
    const fetchedData = await Data.find();
    console.log(fetchedData);
    if (!fetchedData) {
      return res.status(404).json({
        message: "No data found",
      });
    }

    return res.status(200).json({
      message: "Data fetched successfully",
      data: fetchedData,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

