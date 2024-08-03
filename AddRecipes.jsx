import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipes = () => {
  // Inline styles
  const containerStyle = {
    marginLeft: "220px",
    marginTop: "100px",
    marginRight: "100px",
    marginBottom: "100px",
    maxWidth: "800px",
    padding: "20px",
    backgroundColor: "transparent",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
  };

  const titleStyle = {
    color: "white",
    fontFamily: "Avenir, sans-serif",
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "20px",
  };

  const inputStyle = {
    display: "block",
    width: "100%",
    marginBottom: "20px",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontSize: "1rem",
    color: "white",
  };

  const buttonStyle = {
    display: "block",
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007BFF",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
    textAlign: "center",
    marginTop: "10px",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  // Navigation hook
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    // Example logout logic, replace with your actual logic
    localStorage.removeItem('userToken'); // Remove token or session
    navigate('/recipes'); // Redirect to homepage or login page
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>ADD RECIPE</h1>
      <form>
        <label style={labelStyle} htmlFor="recipe-name">Recipe Name</label>
        <input style={inputStyle} id="recipe-name" type="text" placeholder="Enter recipe name" />

        <label style={labelStyle} htmlFor="description">Description</label>
        <input style={inputStyle} id="description" type="text" placeholder="Enter description" />

        <label style={labelStyle} htmlFor="image-upload">Upload Image</label>
        <input style={inputStyle} id="image-upload" type="file" />

        <label style={labelStyle} htmlFor="ingredients">Ingredients</label>
        <input style={inputStyle} id="ingredients" type="text" placeholder="Enter ingredients" />

        <label style={labelStyle} htmlFor="category">Category of your recipe</label>
        <input style={inputStyle} id="category" type="text" placeholder="Enter category" />

        <button
          style={buttonStyle}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007BFF'}
          type="submit"
        >
          Submit
        </button>
      </form>
      
     
    </div>
  );
};

export default AddRecipes;
