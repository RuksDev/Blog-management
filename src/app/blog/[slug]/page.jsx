import styles from "./singlePostPage.module.css"
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { getPost } from "@/lib/data.js";


//** FETCH DATA WITH AN API **

const getData = async (slug) => {
    
//     // this cache set works when we click Blog page in every single time refreshed   
//     // const res = await fetch ("https://jsonplaceholder.typicode.com/posts", {cache: "no-store"}); 

    const res = await fetch (`http://localhost:3000/api/blog/${slug}`);
    // that 3600 are seconds  


    if (!res.ok){
        throw new Error("Something Went Wrong ");
    }
    return res.json()
}

export const generateMetadata = async ({params}) => {
    const {slug} = params;

    const post = await getPost(slug);

    return {
        title:post.title,
        description: post.desc,
    }

};


const SinglePostPage = async ({params}) => {

    const {slug} = params;
//** FETCH DATA WITH AN API **
const post = await getData(slug);

//** FETCH DATA WITH-OUT AN API **
// const post = await getPost(slug);

    console.log(post)

    return (
        <div className={styles.container}>
           { post.img && <div className={styles.imgContainer}>
            <Image src={post.img} 
            alt="" 
            fill 
            className={styles.img} 
            />
           </div>}
           <div className={styles.textContainer}>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.detail}>
               {post && (<Suspense fallback ={<div>Loading...</div>}>
                <PostUser userId={post.userId}/>
                </Suspense>
                )}
                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Published</span>
                    <span className={styles.detailValue}>{post.createdAt.toString().slice(4,21)}</span>
                </div>
            </div>
            <div className={styles.content}>
                {post.desc}
          </div>
           </div>
        </div>
    )
}

export default SinglePostPage; 


 {/* <div className={styles.detailText}> -> line 54
                    <span className={styles.detailTitle}>Author</span>
                    <span className={styles.detailValue}>Terry Anderson</span>
                </div> */}