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
import SingleListPost from '../posts/SingleListPost';
import Loader from '../ui/loader/Loader';

function ShopPage() {
//   return (
//     <div>
//       <h2>. . .</h2>
//       <h2>Shops Page</h2>
//       <p><em>You see all your projects for sale here</em></p>
//     </div>
//   );
// }
const [filerVal, setFilerVal] = useState('all');
// parsiusti postus
const postCollRef = collection(db, 'hookPosts');

// const q = query(postCollRef, orderBy('author', 'desc'));
const q =
  filerVal === 'all'
    ? query(postCollRef, orderBy('author', 'desc'))
    : query(postCollRef, where('tags', 'array-contains', filerVal));

const [value, loading, error] = useCollection(q);
// console.log('value ===', value);
const docsWithUid =
  value && value.docs.map((doc) => ({ uid: doc.id, ...doc.data() }));

console.log('error ===', error);

let sortOrder = 'desc';
function toggleSortOrder() {

  sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';

  getSortedData();
}
function getSortedData() {
console.log('order by date-->', sortOrder)    
//visi postai: postCollRef = collection(db, 'hookPosts');
// const q = query(postCollRef, orderBy('author', 'desc'));

//kai: query(postCollRef, orderBy('author', 'desc'))
console.log('postCollRef ===', postCollRef);
// collection(db, 'hookPosts')
//     // firebase.firestore().collection('hookPosts')
//       .orderBy('date', sortOrder)
//       .get()
//       .then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//           console.log(`${doc.id} => ${doc.data()}`);
//         });
//       })
//       .catch((error) => {
//         console.error('Error getting documents: ', error);
//       });
}
return (
  <div className="container">
    <h2>Shop page</h2>
    <p><em>you can see all of shops here</em></p>
    <Loader show={loading} />
    <button className="btn btn-dark"
    onClick={() => toggleSortOrder()}
    >order by date</button>
    <button
      className="btn btn-outline-dark btn-sm"
      onClick={() => setFilerVal('all')}
    >
      all
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
    </button> */}
    <button
      className="btn btn-outline-dark btn-sm"
      onClick={() => setFilerVal('other')}
    >
      kazkas
    </button>
    <ul className="list-group">
      {value &&
        docsWithUid.map((pObj) => (
          <li className="list-group-item list-group-item-dark" key={pObj.uid}>
            <SingleListPost item={pObj} />
          </li>
        ))}
    </ul>
  </div>
);
}
export default ShopPage;
