import React from "react";
import { Link } from "react-router-dom";
import { useAuthCtx } from "../auth/AuthProvider";
import { deleteDoc, doc } from "@firebase/firestore";
import { db } from "../auth/firebase";
import { toast } from "react-hot-toast";

import { collection, orderBy, query } from "firebase/firestore";
import { useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
// import { db } from '../firebase/firebase';

function SingleListsPost({ item }) {
  // parsiusti postus
  const postCollRef = collection(db, "shops");
  const q = query(postCollRef, orderBy("town", "desc"));
  const [value, loading, error] = useCollection(q);
  console.log("value ===", value);
  const docsWithUid = value && value.docs.map((doc) => ({ uid: doc.id, ...doc.data() }));
  useEffect(() => {}, []);
  console.log("docsWithUid ===", docsWithUid);
  return (
    <div className="card">
      {loading && <h2>Loading...</h2>}
      <ul className="grid-3">
        {value &&
          docsWithUid.map((pObj) => (
            <li key={pObj?.uid}>
              <img src={pObj.imageUrl} className="card-img-top w-50" alt="..." />
              <p>{pObj?.imageUrl}</p>
              <h2>{pObj?.shopName}</h2>
              <em>{pObj?.description}</em>
              <p>
                {pObj?.town}, {pObj.startYear}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SingleListsPost;
