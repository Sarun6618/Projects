const express = require('express');
const router = express.Router();
const SellerDetails = require('../models/SellerDetails');

// POST /sellersdetails/add
router.post('/sellersdetails/add', (req, res) => {
  const formData = req.body;

  // Create a new seller document
  const newSeller = new SellerDetails(formData);

  // Save the seller to the database
  newSeller.save()
    .then(savedSeller => {
      res.status(201).send(savedSeller);
      console.log('Saved');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error saving seller');
    });
});

// PUT /sellersdetails/update/:id
router.put('/sellersdetails/update/:id', (req, res) => {
  const sellerId = req.params.id;
  const updatedSeller = req.body;

  SellerDetails.findByIdAndUpdate(sellerId, updatedSeller, { new: true })
    .then(updatedSeller => {
      res.json(updatedSeller);
      console.log('updated');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error updating seller');
    });
});

// DELETE /sellersdetails/delete/:id
router.delete('/sellersdetails/delete/:id', (req, res) => {
    const sellerId = req.params.id;
  
    SellerDetails.findByIdAndRemove(sellerId)
      .then(() => {
        res.sendStatus(204);
        console.log('Deleted')
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Error deleting seller');
      });
  });

module.exports = router;
