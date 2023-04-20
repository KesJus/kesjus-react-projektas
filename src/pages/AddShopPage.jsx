import { addDoc, collection } from '@firebase/firestore';
import NewPostForm from '../posts/NewPostForm';
import { db } from '../auth/firebase';
import { toast } from 'react-hot-toast';

function AddShopPage() {
  //
  function handleNewPost(newPostObj) {
    const hookPostRef = collection(db, 'hookPosts');
    addDoc(hookPostRef, newPostObj).then(() => {
      toast.success('doc created');
    });
  }

  return (
    <div className="container">
      <h1 className="display-3 mt-3">AddShopPage</h1>
      <p>This is AddShopPage</p>
      <NewPostForm onNewPost={handleNewPost} />
    </div>
  );
}

export default AddShopPage;
