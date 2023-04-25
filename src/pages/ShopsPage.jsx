import { collection, orderBy, query, where } from "firebase/firestore";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../auth/firebase";
import SingleListsPost from "../posts/SingleListsPost";
import Loader from "../ui/loader/Loader";

function ShopsPage() {
  const [filerVal, setFilerVal] = useState("all");
  // parsiusti
  const postCollRef = collection(db, "shops");
  console.log("postCollRef ===", postCollRef);
  // const q = query(postCollRef, orderBy('author', 'desc'));
  const q =
    filerVal === "all"
      ? query(postCollRef, orderBy("author", "desc"))
      : query(postCollRef, where("tags", "array-contains", filerVal));
  const [value, loading, error] = useCollection(q);
  const docsWithUid = value && value.docs.map((doc) => ({ uid: doc.id, ...doc.data() }));
  console.log("docsWithUid ===", docsWithUid);
  return (
    <div className="container">
      <p>
        <em>you can see all of shops here</em>
      </p>
      <Loader show={loading} />
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

export default ShopsPage;
