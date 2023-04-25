import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuthCtx } from "../auth/AuthProvider";

function NewPostForm({ onNewPost }) {
  const { user } = useAuthCtx();
  const ErrorMsg = "error";
  const formik = useFormik({
    initialValues: {
      shopName: "Shop 1",
      town: "London",
      startYear: "2013",
      description: "Description of shop 1",
      imageUrl: "https://picsum.photos/id/1/400/300",
    },
    validationSchema: Yup.object({
      shopName: Yup.string().min(4).trim().required(" name is required"),
      town: Yup.string().min(4).trim().required(" town is required"),
      startYear: Yup.number()
        .min(1970, " year from 1970")
        .max(2022, " till 2022 only")
        .required(" year min 1970, max 2022"),
      description: Yup.string().min(6).max(50).trim().required(" at least 6 letters long"),
      imageUrl: Yup.string().min(5).trim().required(" at least 5 letters long"),
    }),
    onSubmit: (values) => {
      const newPost = {
        shopName: values.shopName,
        town: values.town,
        startYear: values.startYear,
        description: values.description,
        imageUrl: values.imageUrl,
        userUid: user.uid,
      };
      console.log("newPost ===", newPost);
      onNewPost(newPost);
      // Code to submit the new post data to the server here
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="inputs-pd">
        <label className="form-label" htmlFor="shopName">
          Shop Name&nbsp;
        </label>
        <input
          type="text"
          id="shopName"
          name="shopName"
          className="form-control"
          value={formik.values.shopName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.shopName && formik.errors.shopName && (
          <ErrorMsg>{formik.errors.shopName}</ErrorMsg>
        )}
      </div>
      <div className="inputs-pd">
        <label className="form-label" htmlFor="town">
          Town&nbsp;
        </label>
        <input
          type="text"
          id="town"
          name="town"
          className="form-control"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.town}
        />
        {formik.touched.town && formik.errors.town && <ErrorMsg>{formik.errors.town}</ErrorMsg>}
      </div>
      <div className="inputs-pd">
        <label className="form-label form-input" htmlFor="startYear">
          Start Year&nbsp;
        </label>
        <input
          type="number"
          id="startYear"
          name="startYear"
          className="form-control form-input"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.startYear}
        />
        {formik.touched.startYear && formik.errors.startYear && (
          <ErrorMsg>{formik.errors.startYear}</ErrorMsg>
        )}
      </div>
      <div className="inputs-pd">
        <label className="form-label" htmlFor="description">
          Description&nbsp;
        </label>
        <textarea
          id="description"
          name="description"
          className="form-control"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description && (
          <ErrorMsg>{formik.errors.description}</ErrorMsg>
        )}
      </div>
      <div className="">
        <label className="form-label" htmlFor="imageUrl">
          Image URL&nbsp;
        </label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          className="form-control"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.imageUrl}
        />
        {formik.touched.imageUrl && formik.errors.imageUrl && (
          <ErrorMsg>{formik.errors.imageUrl}</ErrorMsg>
        )}
      </div>

      <button type="submit" className="">
        Submit
      </button>
    </form>
  );
}
export default NewPostForm;
