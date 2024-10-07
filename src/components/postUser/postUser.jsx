import React from 'react';
import styles from "./postUser.module.css"
import {getUser} from "@/lib/data.js";
import Image from 'next/image';


//** FETCH DATA WITH AN API **

// const getData = async (userId) => {
    
//     // this cache set works when we click Blog page in every single time refreshed   
//     // const res = await fetch ("https://jsonplaceholder.typicode.com/posts", {cache: "no-store"}); 

//     const res = await fetch (`https://jsonplaceholder.typicode.com/users/${userId}`, {cache:'no-store'});
//     // that 3600 are seconds  


//     if (!res.ok){
//         throw new Error("Something Went Wrong ");
//     }
//     return res.json()
// }

const PostUser = async ({userId}) => {
//** FETCH DATA WITH AN API **
// const user = await getData(userId);

//** FETCH DATA WITH-OUT AN API **
const users = await getUser(userId);



  return (
    <div className={styles.container}>

    <Image src={users.img ? users.img : "/noavatar.png"} 
                alt="" 
                width={50}
                height={50}
                className={styles.avatar} />
        <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{users.username}</span>
      </div>
    </div>
  );
}

export default PostUser;