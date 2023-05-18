// import React, { useState } from 'react';

// const SellerDetailsForm = () => {
//   const [formData, setFormData] = useState({
//     Business: '',
//     ContactName: '',
//     ContactNo: '',
//     Address: '',
//     GST: '',
//     Email: '',
//     NameAsBank: '',
//     BankName: '',
//     BankAccNo: '',
//     Branch: '',
//     IFSC: '',
//     PANCard: '',
//     msme: null,
//   });

//   const handleChange = (e) => {
//     if (e.target.name === 'msme') {
//       setFormData({ ...formData, [e.target.name]: e.target.files[0] });
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="Business">Business:</label>
//       <input type="text" id="Business" name="Business" value={formData.Business} onChange={handleChange} required />

//       <label htmlFor="ContactName">Contact Name:</label>
//       <input type="text" id="ContactName" name="ContactName" value={formData.ContactName} onChange={handleChange} required />

//       <label htmlFor="ContactNo">Contact Number:</label>
//       <input type="tel" id="ContactNo" name="ContactNo" value={formData.ContactNo} onChange={handleChange} required />

//       <label htmlFor="Address">Address:</label>
//       <textarea id="Address" name="Address" value={formData.Address} onChange={handleChange} required />

//       <label htmlFor="GST">GST:</label>
//       <input type="text" id="GST" name="GST" value={formData.GST} onChange={handleChange} required />

//       <label htmlFor="Email">Email:</label>
//       <input type="Email" id="Email" name="Email" value={formData.Email} onChange={handleChange} required />

//       <label htmlFor="NameAsBank">Name as per Bank:</label>
//       <input type="text" id="NameAsBank" name="NameAsBank" value={formData.NameAsBank} onChange={handleChange} required />

//       <label htmlFor="BankName">Bank Name:</label>
//       <input type="text" id="BankName" name="BankName" value={formData.BankName} onChange={handleChange} required />

//       <label htmlFor="BankAccNo">Bank Account Number:</label>
//       <input type="text" id="BankAccNo" name="BankAccNo" value={formData.BankAccNo} onChange={handleChange} required />

//       <label htmlFor="Branch">Branch:</label>
//       <input type="text" id="Branch" name="Branch" value={formData.Branch} onChange={handleChange} required />

//       <label htmlFor="IFSC">IFSC Code:</label>
//       <input type="text" id="IFSC" name="IFSC" value={formData.IFSC} onChange={handleChange} required />

//       <label htmlFor="PANCard">PAN Card:</label>
//       <input type="text" id="PANCard" name="PANCard" value={formData.PANCard} onChange={handleChange} required />

//       <label htmlFor="msme">MSME:</label>
//       <input type="file" id="msme" name="msme" onChange={handleChange} required />

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default SellerDetailsForm;



// !important up to now

import React, { useState } from 'react';
import './SellerDetails.css';
import axios from 'axios';

const SellerDetailsForm = () => {
  const initialFormData = {
    Business: '',
    ContactName: '',
    ContactNo: '',
    Address: '',
    GST: '',
    Email: '',
    NameAsBank: '',
    BankName: '',
    BankAccNo: '',
    Branch: '',
    IFSC: '',
    PANCard: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [sellerList, setSellerList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      // Editing existing seller
      const updatedSellerList = [...sellerList];
      updatedSellerList[editingIndex] = { ...formData };
      setSellerList(updatedSellerList);
      setEditingIndex(null);
      const sellerId = sellerList[editingIndex]._id; // Assuming the seller object has an '_id' field
  axios
    .put(`http://localhost:4000/sellersdetails/update/${sellerId}`, formData) // Replace '/api/sellersdetails/update' with your actual API endpoint
    .then((response) => {
      console.log(response.data); // The updated seller document
    })
    .catch((error) => {
      console.error(error);
      // Handle any error behavior
    });
    } else {
      // Adding new seller
      axios
        .post('http://localhost:4000/sellersdetails/add', formData) // Replace '/api/sellersdetails/add' with your actual API endpoint
        .then((response) => {
          console.log(response.data); // The saved seller document
          setSellerList((prevSellerList) => [...prevSellerList, response.data]);
          resetForm();
        })
        .catch((error) => {
          console.error(error);
          // Handle any error behavior
        });
    }
  };

  const handleEdit = (index) => {
    setFormData({ ...sellerList[index] });
    setEditingIndex(index);
    setFormVisible(true);
  };

  const handleDelete = (index) => {
    const sellerId = sellerList[index]._id; // Assuming the seller object has an '_id' field
    axios
      .delete(`http://localhost:4000/sellersdetails/delete/${sellerId}`) // Replace '/api/sellersdetails/delete' with your actual API endpoint
      .then(() => {
        const updatedSellerList = [...sellerList];
        updatedSellerList.splice(index, 1);
        setSellerList(updatedSellerList);
      })
      .catch((error) => {
        console.error(error);
        // Handle any error behavior
      });
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setFormVisible(false);
  };

  const showForm = () => {
    resetForm();
    setFormVisible(true);
  };

  const hideForm = () => {
    setFormVisible(false);
  };

  return (
    <div>
      <button onClick={showForm}>Add Seller</button>

      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <label htmlFor="Business">Business:</label>
          <input
            type="text"
            id="Business"
            name="Business"
            value={formData.Business}
            onChange={handleChange}
            required
          />

          <label htmlFor="ContactName">Contact Name:</label>
          <input
            type="text"
            id="ContactName"
            name="ContactName"
            value={formData.ContactName}
            onChange={handleChange}
            required
          />

          <label htmlFor="ContactNo">Contact Number:</label>
          <input
            type="text"
            id="ContactNo"
            name="ContactNo"
            value={formData.ContactNo}
            onChange={handleChange}
            required
          />

          <label htmlFor="Address">Address:</label>
          <textarea
            id="Address"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
            required
          />

          <label htmlFor="GST">GST:</label>
          <input
            type="text"
            id="GST"
            name="GST"
            value={formData.GST}
            onChange={handleChange}
            required
          />
          <label htmlFor="Email">Email:</label>
          <input
            type="Email"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            required
          />

          <label htmlFor="NameAsBank">Name as per Bank:</label>
          <input
            type="text"
            id="NameAsBank"
            name="NameAsBank"
            value={formData.NameAsBank}
            onChange={handleChange}
            required
          />

          <label htmlFor="BankName">Bank Name:</label>
          <input
            type="text"
            id="BankName"
            name="BankName"
            value={formData.BankName}
            onChange={handleChange}
            required
          />

          <label htmlFor="BankAccNo">Bank Account Number:</label>
          <input
            type="number"
            id="BankAccNo"
            name="BankAccNo"
            value={formData.BankAccNo}
            onChange={handleChange}
            required
          />

          <label htmlFor="Branch">Branch:</label>
          <input
            type="text"
            id="Branch"
            name="Branch"
            value={formData.Branch}
            onChange={handleChange}
            required
          />

          <label htmlFor="IFSC">IFSC Code:</label>
          <input
            type="text"
            id="IFSC"
            name="IFSC"
            value={formData.IFSC}
            onChange={handleChange}
            required
          />

          <label htmlFor="PANCard">PAN Card:</label>
          <input
            type="text"
            id="PANCard"
            name="PANCard"
            value={formData.PANCard}
            onChange={handleChange}
            required
          />

          <button type="submit">
            {editingIndex !== null ? 'Update Seller' : 'Add Seller'}
          </button>
          <button onClick={hideForm}>Cancel</button>
        </form>
      )}

      {/* Seller List */}
      <ul>
        {sellerList.map((seller, index) => (
          <li key={index}>
            <span>Business: {seller.Business}</span>
            <span>Contact Name: {seller.ContactName}</span>
            <span>Contact Number: {seller.ContactNo}</span>
            <span>Address: {seller.Address}</span>
            <span>GST: {seller.GST}</span>
            <span>Email: {seller.Email}</span>
            <span>Name as per Bank: {seller.NameAsBank}</span>
            <span>Bank Name: {seller.BankName}</span>
            <span>Bank Account Number: {seller.BankAccNo}</span>
            <span>Branch: {seller.Branch}</span>
            <span>IFSC Code: {seller.IFSC}</span>
            <span>PAN Card: {seller.PANCard}</span>
            {/* Additional attributes can be added here */}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellerDetailsForm;
