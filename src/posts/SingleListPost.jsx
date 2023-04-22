import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthCtx } from '../auth/AuthProvider';
import { deleteDoc, doc } from '@firebase/firestore';
import { db } from '../auth/firebase';
import { toast } from 'react-hot-toast';

function SingleListPost({ item }) {
  const { user } = useAuthCtx();
  // console.log('item ===', item);
  // const date=new Date(item.date)
  // const options = {
  //   timeZone: 'Europe/Vilnius',
  //   hour12: false,
  //   year: 'numeric',
  //   month: 'long',
  //   // day: 'numeric',
  //   // hour: 'numeric',
  //   // minute: 'numeric',
  //   // second: 'numeric',
  // };
  // const formattedDate = date.toLocaleString('lt-LT',options);
  // console.log('formattedDate ===', formattedDate);
  // const ndata=new Date({item.date})

// const localDate={today.toLocaleDateString()}
// console.log('data:',localDate)
  async function deletePost() {
    deleteDoc(doc(db, 'hookPosts', item.uid)).then(() => {
      toast.success('post was deleted');
    });
  }

  return (
    <div className="card">
      <img src={item?.imageUrl} className="card-img-top w-50" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.shopName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{item.town}</h6>
        <p className="card-text">{item.startYear}</p>
        {/* <p className="card-text">{item.date}</p>
        {/* <p>{formattedDate}</p> */}
        {/* <h3 className="lead">Tags:</h3> */}
        <div className="d-flex gap-2 mb-3">
          {item?.tags.map((tag) => (
            <span key={tag} className="badge fs-6  bg-info text-dark">
              {tag}
            </span>
          ))}
        </div>
        {/* rodyti delete mygtuka tik autoriui */}
        {user.uid === item.userUid && (
          <button onClick={deletePost} className="btn btn-danger">
            Delete
          </button>
        )}
        <Link to={`/posts/${item.uid}`} className="btn btn-primary">
          Read more...
        </Link>
      </div>
    </div>
  );
}

export default SingleListPost;
