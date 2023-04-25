import React from "react";
import { db } from "../auth/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

function SingleListsPost({ item }) {
  // parsiusti
  const postCollRef = collection(db, "shops");
  const q = query(postCollRef, orderBy("town", "desc"));
  const [value, loading, error] = useCollection(q);
  const docsWithUid = value && value.docs.map((doc) => ({ uid: doc.id, ...doc.data() }));
  useEffect(() => {}, []);
  console.log("docsWithUid ===", docsWithUid);
  return (
    <div className="">
      {loading && <h2>Loading...</h2>}
      <ul className="grid-3">
        {value &&
          docsWithUid.map((pObj) => (
            <li key={pObj?.uid}>
              <img src={pObj.imageUrl} className="card-img-top w-50" alt="..." />
              <p>{pObj?.imageUrl}</p>
              <h1>{pObj?.shopName}</h1>
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
