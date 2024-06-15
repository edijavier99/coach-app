import React, { useState } from "react";
import "../styles/createArticle.css";

const CreateArticle = () => {
  const cloudName = 'dhyrv5g3w';
  const uploadPreset = 'ptwmh2mt';
  const [article, setArticle] = useState({
    article_title: "",
    article_subtitle: "",
    article_description: "",
    article_category: "fitness" // Valor predeterminado
  });

  const [files, setFiles] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticle({
      ...article,
      [name]: value
    });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      updateDropzoneFileList(file);
      previewImage(file);
    }
  };

  const previewImage = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDropzoneDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDropzoneDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      updateDropzoneFileList(file);
      previewImage(file);
    }
  };

  const updateDropzoneFileList = (file) => {
    setFiles([file]);
  };

  const handleReset = () => {
    setArticle({
      article_title: "",
      article_subtitle: "",
      article_description: "",
      article_category: "fitness"
    });
    setFiles([]);
    setImagePreview(null);
  };

  const uploadToCloudinary = async (file) => {
    const folder = "BlogJesus";  // Especifica el nombre de la carpeta aquí
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
    formData.append('folder', folder);

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      return data.secure_url;
    } else {
      throw new Error('Failed to upload image');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let article_image_url = '';
    if (files.length > 0) {
      try {
        const file = files[0];
        article_image_url = await uploadToCloudinary(file);
      } catch (error) {
        console.error("Error uploading image:", error);
        return;
      }
    }

    const currentDate = new Date().toISOString().split('T')[0];  // Formato YYYY-MM-DD
    const articleData = {
      ...article,
      article_image_url,
      article_day_posted: currentDate  // Añadir la fecha actual
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/myapp/api/articles/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(articleData)
      });

      if (response.ok) {
        const data = await response.json();
        handleReset(); 
      } else {
        console.error("Error saving article:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving article:", error);
    }
  };

  return (
    <form id="create-article" onSubmit={handleSubmit}>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="article-title" className="form-label">Article Title</label>
          <input
            id="article-title"
            name="article_title"
            type="text"
            className="form-control"
            placeholder="Enter Article Title"
            value={article.article_title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="article-subtitle" className="form-label">Article Subtitle</label>
          <input
            id="article-subtitle"
            name="article_subtitle"
            type="text"
            className="form-control"
            placeholder="Enter Article Subtitle"
            value={article.article_subtitle}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="article-description" className="form-label">Article Description</label>
        <textarea
          id="article-description"
          name="article_description"
          className="form-control"
          placeholder="Enter Article Description"
          value={article.article_description}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="article-category" className="form-label">Category</label>
        <select
          id="article-category"
          name="article_category"
          className="form-select"
          value={article.article_category}
          onChange={handleInputChange}
          required
        >
          <option value="fitness">Fitness</option>
          <option value="health">Health</option>
          <option value="mindset">Mindset</option>
          <option value="nutrition">Nutrition</option>
        </select>
      </div>

      <div
        className={`dropzone-area p-3 rounded ${imagePreview ? "has-image" : ""}`}
        onDragOver={handleDropzoneDrag}
        onDragLeave={handleDropzoneDrag}
        onDrop={handleDropzoneDrop}
      >
        {imagePreview ? (
          <img src={imagePreview} alt="Uploaded" className="uploaded-image mb-3" />
        ) : (
          <div className="text-center">
            <div className="file-upload-icon mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              </svg>
            </div>
            <p>Click to upload or drag and drop</p>
            <input
              type="file"
              id="upload-file"
              name="uploaded-file"
              className="d-none"
              onChange={handleFileInputChange}
            />
            <label htmlFor="upload-file" className="btn btn-outline-primary">
              Choose File
            </label>
            <p className="message mt-3">
              {files.length > 0 ? `${files[0].name}, ${files[0].size} bytes` : "No Files Selected"}
            </p>
          </div>
        )}
      </div>
      <div className="dropzone-actions mt-4 d-flex justify-content-between">
        <button type="reset" className="btn btn-secondary" onClick={handleReset}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
};

export default CreateArticle;
