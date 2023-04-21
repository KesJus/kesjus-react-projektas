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
      startYear: '2013',
      description: 'Description of shop 1',
      imageUrl: 'https://picsum.photos/id/1/400/300',
    },
    validationSchema: Yup.object({
      shopName: Yup.string().min(4).trim().required(),
      town: Yup.string().min(4).trim().required(),
      startYeard: Yup.number().min(1970).max(2022).required(),
      description: Yup.string().min(6).trim().required(),
      imageUrl: Yup.string().min(5).trim().required(),
    }),
    onSubmit: (values) => {
      const newPost = {
        shopName: values.shopName,
        town: values.town,
        startYear: Number(values.startYear),
        description: values.description,
        imageUrl: values.imageUrl,
        userUid: user.uid,
      };
      console.log('newPost ===', newPost);
      onNewPost(newPost);
      // Code to submit the new post data to the server here
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="">
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
      <div className="">
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
      <div className="">
        <label className="form-label" htmlFor="startYear">
          Start Year
        </label>
        <input
          type="startYear"
          id="startYear"
          name="startYear"
          className="form-control"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.startYear}
        />
        {formik.touched.startYear && formik.errors.startYear ? (
  <div className="invalid-feedback">{formik.errors.startYear}</div>
) : null}
      </div>
      <div className="">
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
      <div className="">
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
      <button type="submit" className="">
        Submit
      </button>
    </form>
  );
}
export default NewPostForm;
