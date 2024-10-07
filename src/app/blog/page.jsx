
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";
import {getPosts} from "@/lib/data.js";

//** FETCH DATA WITH AN API **

const getData = async () => {
    
//     // this cache set works when we click Blog page in every single time refreshed   
//     // const res = await fetch ("https://jsonplaceholder.typicode.com/posts", {cache: "no-store"}); 

    const res = await fetch ("http://localhost:3000/api/blog", {next:{revalidate:3600}});
    // that 3600 are seconds  


    if (!res.ok){
        throw new Error("Something Went Wrong ");
    }
    return res.json()
}


const BlogPage = async () => {
    //** FETCH DATA WITH AN API **
    const posts = await getData()

    //** FETCH DATA WITH-OUT AN API **
    // const posts = await getPosts(); 

    return (
        <div className={styles.container}>
            {posts.map ((post) => (
                <div className={styles.post} key={post.id}>    
            <PostCard post={post} />
            </div>
            ))}
            
        </div>
    );
}

export default BlogPage;


