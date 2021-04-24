import React from 'react';
import './styles.css';
import {useState} from 'react';
import Navbar from './Navbar';
//import { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div>
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <h1>Create post</h1>

            <form action="" method="POST" onSubmit={handleSubmit}>
              <div class="form-group has-error">
                <label className="title" for="slug">
                  Title *
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="slug"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </div>

              <div class="form-group">
                <label className="title" for="title">
                  URL <span class="require">*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="title"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                />
              </div>

              <div class="form-group">
                <label className="title " for="description">
                  Description
                </label>
                <input
                  rows="5"
                  class="form-control"
                  name="description"
                  className="description"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </div>

              <div class="form-group">
                <button
                  type="submit"
                  className="btn-1"
                  class="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Create
                </button>
                <button class="btn btn-default">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePost;
