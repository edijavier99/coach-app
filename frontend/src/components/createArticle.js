import React, { useState } from "react";
import "../styles/createArticle.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateArticle = () => {
  const cloudName = 'dhyrv5g3w';
  const uploadPreset = 'ptwmh2mt';
  const [article, setArticle] = useState({
    title: "",
    subtitle: "",
    description: "",
    category: "fitness",
    second_paragraph: "",
  });

  const [files, setFiles] = useState({
    image: null,
    secondImage: null,
    imagePreview: null,
    secondImagePreview: null,
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setArticle(prev => ({ ...prev, [name]: value }));
  };

  const handleQuillChange = (name, value) => {
    setArticle(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (name, e) => {
    const file = e.target.files[0];
    if (file) {
      updateFileState(name, file);
      previewImage(file, name === 'image' ? 'imagePreview' : 'secondImagePreview');
    }
  };

  const handleDrop = (name, e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      updateFileState(name, file);
      previewImage(file, name === 'image' ? 'imagePreview' : 'secondImagePreview');
    }
  };

  const handleDropzoneDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const previewImage = (file, previewName) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFiles(prev => ({ ...prev, [previewName]: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const updateFileState = (name, file) => {
    setFiles(prev => ({ ...prev, [name]: file }));
  };

  const handleReset = () => {
    setArticle({
      title: "",
      subtitle: "",
      description: "",
      category: "fitness",
      second_paragraph: ""
    });
    setFiles({
      image: null,
      secondImage: null,
      imagePreview: null,
      secondImagePreview: null,
    });
  };

  const uploadToCloudinary = async (file) => {
    const folder = "BlogJesus";
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
    formData.append('folder', folder);

    const response = await fetch(url, { method: 'POST', body: formData });
    if (response.ok) {
      const data = await response.json();
      return data.secure_url;
    } else {
      throw new Error('Failed to upload image');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let image_url = '';
    let image_url_tow = '';
    if (files.image) {
      try {
        image_url = await uploadToCloudinary(files.image);
      } catch (error) {
        console.error("Error uploading image:", error);
        return;
      }
    }

    if (files.secondImage) {
      try {
        image_url_tow = await uploadToCloudinary(files.secondImage);
      } catch (error) {
        console.error("Error uploading second image:", error);
        return;
      }
    }

    const articleData = {
      ...article,
      image_url,
      image_url_tow,
      slug: article.title.toLowerCase().replace(/ /g, '-')
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}blog/post/create/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(articleData)
      });

      if (response.ok) {
        console.log(articleData);
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
          <label htmlFor="title" className="form-label">Article Title</label>
          <input
            id="title"
            name="title"
            type="text"
            className="form-control"
            placeholder="Enter Article Title"
            value={article.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="subtitle" className="form-label">Article Subtitle</label>
          <input
            id="subtitle"
            name="subtitle"
            type="text"
            className="form-control"
            placeholder="Enter Article Subtitle"
            value={article.subtitle}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">Article First Paragraph</label>
        <ReactQuill
          id="description"
          name="description"
          className="form-control"
          placeholder="First Paragraph"
          value={article.description}
          onChange={(value) => handleQuillChange('description', value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="second_paragraph" className="form-label">Article Second Paragraph</label>
        <ReactQuill
          id="second_paragraph"
          name="second_paragraph"
          className="form-control"
          placeholder="Second Paragraph"
          value={article.second_paragraph}
          onChange={(value) => handleQuillChange('second_paragraph', value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category</label>
        <select
          id="category"
          name="category"
          className="form-select"
          value={article.category}
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
        className={`dropzone-area p-3 rounded ${files.imagePreview ? "has-image" : ""}`}
        onDragOver={handleDropzoneDrag}
        onDragLeave={handleDropzoneDrag}
        onDrop={(e) => handleDrop('image', e)}
      >
        {files.imagePreview ? (
          <img src={files.imagePreview} alt="Uploaded" className="uploaded-image mb-3" />
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
              onChange={(e) => handleFileChange('image', e)}
            />
            <label htmlFor="upload-file" className="btn btn-outline-primary">
              Choose File
            </label>
            <p className="message mt-3">
              {files.image ? `${files.image.name}, ${files.image.size} bytes` : "No Files Selected"}
            </p>
          </div>
        )}
      </div>

      <div
        className={`dropzone-area p-3 rounded ${files.secondImagePreview ? "has-image" : ""}`}
        onDragOver={handleDropzoneDrag}
        onDragLeave={handleDropzoneDrag}
        onDrop={(e) => handleDrop('secondImage', e)}
      >
        {files.secondImagePreview ? (
          <img src={files.secondImagePreview} alt="Uploaded" className="uploaded-image mb-3" />
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
              id="upload-second-file"
              name="uploaded-second-file"
              className="d-none"
              onChange={(e) => handleFileChange('secondImage', e)}
            />
            <label htmlFor="upload-second-file" className="btn btn-outline-primary">
              Choose File
            </label>
            <p className="message mt-3">
              {files.secondImage ? `${files.secondImage.name}, ${files.secondImage.size} bytes` : "No Files Selected"}
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
