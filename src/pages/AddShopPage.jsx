import { addDoc, collection } from "@firebase/firestore";
import NewPostForm from "../posts/NewPostForm";
import { db } from "../auth/firebase";
import { toast } from "react-hot-toast";

function AddShopPage() {
  function handleNewPost(newPostObj) {
    // const shopsRef = collection(db, 'hookPosts');
    const shopsRef = collection(db, "shops");
    addDoc(shopsRef, newPostObj).then(() => {
      toast.success("doc created");
    });
  }

  return (
    <div className="container">
      <div className="head">
        <div>
          {" "}
          <h2>. . .</h2>
          <h2 className="display-3 mt-3">Add Shop Page</h2>
        </div>

        <p>
          <em>You can add your implementation here...</em>
        </p>
      </div>
      <NewPostForm onNewPost={handleNewPost} />
    </div>
  );
}

export default AddShopPage;
