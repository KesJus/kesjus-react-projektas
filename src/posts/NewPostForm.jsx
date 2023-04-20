import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useAuthCtx } from '../auth/AuthProvider';


function NewPostForm({ onNewPost }) {
  const { user } = useAuthCtx();

  const formik = useFormik({
    initialValues: {
      shopName: 'Shop 1',
      town: 'London',
      startYear: '',
      description: 'Description of shop 1',
      imageUrl: 'https://picsum.photos/id/1/400/300',
      // tagInput: '',
    },
    onSubmit: (values) => {
      const newPost = {
        shopName: values.shopName,
        town: values.town,
        startYear: Number(new Date(values.startYear)),
        description: values.description,
        imageUrl: values.imageUrl,
        // tags: values.tagInput.split(',').map((t) => t.trim()),
        userUid: user.uid,
      };
      console.log('newPost ===', newPost);
      onNewPost(newPost);
      // Code to submit the new post data to the server here
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-2">
        <label className="form-label" htmlFor="shopName">
          Shop name
        </label>
        <input
          type="text"
          id="shopName"
          name="shopName"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.shopName}
        />
      </div>
      <div className="mb-2">
        <label className="form-label" htmlFor="town">
          Town
        </label>
        <input
          type="text"
          id="town"
          name="town"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.town}
        />
      </div>
      <div className="mb-2">
        <label className="form-label" htmlFor="startYear">
          Start Year
        </label>
        <input
          type="startYear"
          id="startYear"
          name="startYear"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.startYear}
        />
      </div>
      <div className="mb-2">
        <label className="form-label" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
      </div>
      <div className="mb-2">
        <label className="form-label" htmlFor="imageUrl">
          Image URL
        </label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.imageUrl}
        />
      </div>
      {/* <div className="mb-2">
        <label className="form-label" htmlFor="tags">
          Tags
        </label>
        <div className="input-group mb-3">
          <input
            type="text"
            id="tagInput"
            name="tagInput"
            className="form-control"
            placeholder="Add tag"
            onChange={formik.handleChange}
            value={formik.values.tagInput}
          />
        </div>
      </div> */}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default NewPostForm;
