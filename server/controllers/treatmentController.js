const Treatment = require('../models/treatmentModel');

// Create a new treatment
exports.createTreatment = async (req, res) => {
  const { name, quantity, price, description1, description2 } = req.body;
  
  try {
    const newTreatment = new Treatment({
      name,
      quantity,
      price,
      description1,
      description2,
    });

    await newTreatment.save();
    res.status(201).json({ success: true, message: 'Treatment data saved successfully', data: newTreatment });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to save treatment data.', error: error.message });
  }
};

// Get all treatment data
exports.getTreatmentData = async (req, res) => {
  try {
    const treatments = await Treatment.find();
    res.json({ success: true, data: treatments });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch treatment data.', error: error.message });
  }
};

// Update treatment data by ID
exports.updateTreatment = async (req, res) => {
  const { name, quantity, price, description1, description2 } = req.body;
  const id = req.params.id;

  try {
    const existingTreatment = await Treatment.findById(id);

    if (!existingTreatment) {
      return res.status(404).json({ success: false, message: 'Treatment data not found.' });
    }

    existingTreatment.name = name;
    existingTreatment.quantity = quantity;
    existingTreatment.price = price;
    existingTreatment.description1 = description1;
    existingTreatment.description2 = description2;

    await existingTreatment.save();
    res.json({ success: true, message: 'Treatment data updated successfully', data: existingTreatment });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update treatment data.', error: error.message });
  }
};

// Delete treatment data by ID
exports.deleteTreatment = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedTreatment = await Treatment.findByIdAndDelete(id);

    if (!deletedTreatment) {
      return res.status(404).json({ success: false, message: 'Treatment data not found.' });
    }

    res.json({ success: true, message: 'Treatment data deleted successfully', data: deletedTreatment });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete treatment data.', error: error.message });
  }
};
