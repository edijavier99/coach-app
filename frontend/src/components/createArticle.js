import React, { useState } from "react";
import "../styles/createArticle.css";

const CreateArticle = () => {
  const [files, setFiles] = useState([]);
  const [imagePreview, setImagePreview] = useState(null); // Estado para la vista previa de la imagen

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
    setFiles([]);
    setImagePreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el artículo al servidor
    console.log("Article Title:", e.target.articleTitle.value);
    console.log("Article Subtitle:", e.target.articleSubtitle.value);
    console.log("Article Description:", e.target.articleDescription.value);
    if (files.length > 0) {
      console.log("File:", files[0]);
    }
  };

  return (
    <form id="create-article" onSubmit={handleSubmit}>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="article-title" className="form-label">Article Title</label>
          <input id="article-title" name="articleTitle" type="text" className="form-control" placeholder="Enter Article Title" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="article-subtitle" className="form-label">Article Subtitle</label>
          <input id="article-subtitle" name="articleSubtitle" type="text" className="form-control" placeholder="Enter Article Subtitle" required />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="article-description" className="form-label">Article Description</label>
        <textarea id="article-description" name="articleDescription" className="form-control" placeholder="Enter Article Description" required />
      </div>

      <div
        className={`dropzone-area p-3  rounded ${imagePreview ? "has-image" : ""}`}
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
            <p className="message mt-3">{files.length > 0 ? `${files[0].name}, ${files[0].size} bytes` : "No Files Selected"}</p>
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
