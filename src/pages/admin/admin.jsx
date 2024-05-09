import { useAdminUpload } from "../../hooks/useAdminUpload";
import "./admin.scss";
import { useState } from "react";

const Admin = () => {
  const { upload, isPending, isSuccess, isError } = useAdminUpload();

  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageInput = (e) => {
    setFormValues((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("hello world");
    upload({ ...formValues });
  };

  return (
    <div className="admin">
      <h1>Admin</h1>
      <form onSubmit={handleSubmit}>
        <div className="admin__input-group">
          <label>Title</label>
          <input
            name="title"
            value={formValues.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="admin__input-group">
          <label>Thumbnail</label>
          <input
            name="description"
            type="file"
            onChange={handleImageInput}
            required
          />
        </div>
        <div className="admin__input-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formValues.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className="admin__button" disabled={isPending}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Admin;
