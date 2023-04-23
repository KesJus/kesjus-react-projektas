import { addDoc, collection } from '@firebase/firestore';
import NewPostForm from '../posts/NewPostForm';
import { db } from '../auth/firebase';
import { toast } from 'react-hot-toast';

function AddShopPage() {
  function handleNewPost(newPostObj) {
    const shopsRef = collection(db, 'hookPosts');
    addDoc(shopsRef, newPostObj).then(() => {
      toast.success('doc created');
    });
  }

  return (
    <div className="container">
        <h2>. . .</h2>
      <h2 className="display-3 mt-3">Add Shop Page</h2>
      <p><em>You can add your implementation here...</em></p>
      <NewPostForm onNewPost={handleNewPost} />
    </div>
  );
}

export default AddShopPage;
