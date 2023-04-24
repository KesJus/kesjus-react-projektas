import {
  collection,
  deleteDoc,
  doc,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../auth/firebase';
import SingleListsPost from '../posts/SingleListsPost';
import Loader from '../ui/loader/Loader';

function ShopPage() {
  const [filerVal, setFilerVal] = useState('all');
  // parsiusti postus
  // const postCollRef = collection(db, 'hookPosts');
  const postCollRef = collection(db, 'posts');

  // const q = query(postCollRef, orderBy('author', 'desc'));
  const q =
    filerVal === 'all'
      ? query(postCollRef, orderBy('author', 'desc'))
      : query(postCollRef, where('tags', 'array-contains', filerVal));

  const [value, loading, error] = useCollection(q);
  // console.log('value ===', value);
  const docsWithUid =
    value && value.docs.map((doc) => ({ uid: doc.id, ...doc.data() }));

  return (
    <div className="container">
    <p><em>you can see all of shops here</em></p>
    <Loader show={loading} />
      <button
        className="btn btn-outline-dark btn-sm"
        onClick={() => setFilerVal('all')}
      >
        Shops page
      </button>
      {/* <button
        className="btn btn-outline-dark btn-sm"
        onClick={() => setFilerVal('css')}
      >
        css
      </button>
      <button
        className="btn btn-outline-dark btn-sm"
        onClick={() => setFilerVal('boxing')}
      >
        boxing
      </button>
      <button
        className="btn btn-outline-dark btn-sm"
        onClick={() => setFilerVal('kazkas')}
      >
        kazkas
      </button> */}

      <ul className="list-group">
        {value &&
          docsWithUid.map((pObj) => (
            <li className="list-group-item list-group-item-dark" key={pObj.uid}>
              <SingleListsPost item={pObj} />
            </li>
          ))}
      </ul>
      
    </div>
  );
}


export default ShopPage;
