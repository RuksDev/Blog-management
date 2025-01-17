import { Post, User } from "./models";
import { connectToDb } from "./utils";

import { unstable_noStore } from "next/cache";
// TEMPORARY DATA


// const users =[
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Jane'},
//     {id: 3, name: 'Luke'},
    
// ];

// const posts = [
//     {id: 1, title: "Post 1", body: "......", userId: 1},
//     {id: 2, title: "Post 2", body: "......", userId: 1},
//     {id: 3, title: "Post 3", body: "......", userId: 3},
//     {id: 4, title: "Post 4", body: "......", userId: 2},
//     {id: 5, title: "Post 5", body: "......", userId: 2},
// ]

export const getPosts = async () => {
    try {

        connectToDb();
        const posts = await Post.find()
        return posts; 
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch posts!");
        
    }
    
};
export const getPost = async (slug) => {
    try {

        connectToDb();
        const post = await Post.findOne({slug})
        return post; 
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch posts!");
        
    } 
    
};

export const getUser = async (id) => {
    
    try {
        await connectToDb();
        unstable_noStore();
        const user = await User.findById(id); 
        if (!user) throw new Error("User not found");
        return user; 
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch user!");
    }
};

export const getUsers = async () => {
    try {
        await connectToDb();
        const users = await User.find(); // Use User.find() to get all users
        return users; 
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch users!");
    }
};

