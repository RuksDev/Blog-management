"use server";

import { connectToDb } from "./utils";
import { Post } from "./models";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { User } from "./models";
import bcrypt from "bcryptjs";




export const addPost = async (previousState, formData) => {
    

    // const title = formData.get ("title"); 
    // const desc = formData.get("desc");
    // const slug = formData.get("slug");

    const { title, desc, slug, userId} = Object.fromEntries(formData);

    try {
        connectToDb()
        const newPost = new Post ({
            title,
            desc, 
            slug,
            userId,
        });

        await newPost.save();
        console.log("Save to db")
        revalidatePath("/blog")
        revalidatePath("/admin")
        
    } catch (error) {
        console.log(error);
        return {error: "Something went to wrong!"};
        
    }
};

export const deletePost = async (formData) => {
        

        const { id } = Object.fromEntries (formData);
        
        try {
            connectToDb();

            await Post.findByIdAndDelete (id);
            console.log("delete from db")
            revalidatePath("/blog")
            revalidatePath("/admin")
        } catch (error) {
            console.log(error);
            return {error: "something went wrong!"};
            
        }

    }

    export const addUser = async (previousState, formData) => {
        
        const { username, email, password, img} = Object.fromEntries(formData);
    
        try {
            connectToDb()
            const newUser = new User ({
                username,
                email, 
                password, 
                img,
            });
    
            await newUser.save();
            console.log("Save to db")
            revalidatePath("/admin")
            
        } catch (error) {
            console.log(error);
            return {error: "Something went to wrong!"};
            
        }
    };
    
    export const deleteUser = async (formData) => {
            
    
            const { id } = Object.fromEntries (formData);
            
            try {
                connectToDb();

                await User.deleteMany({ userId: id });
    
                await User.findByIdAndDelete (id);
                console.log("delete from db")
                revalidatePath("/admin")
            } catch (error) {
                console.log(error);
                return {error: "something went wrong!"};
                
            }
    
        }

export const handleGithubLogin = async () => {
        "use server";
        await signIn("github");
    };
export const handleLogout = async () => {
        "use server";
        await signOut();
    };


    export const register = async (previousState, formData) => {
        const {username, email, password, img, passwordRepeat} = Object.fromEntries(formData);

        if (password !== passwordRepeat) {
            // return "password does not match"
            return {error: "Password does not match"};
        }
        
        try {
            connectToDb();
            const user = await User.findOne({username})

            if (user) {
                return {error: "Username already exists"}; 
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);


            const newUser = new User ({
                username,
                email,
                password: hashedPassword, 
                img,
            });

            await newUser.save();
            console.log("saved to db");

            return {success: true}; 

    } catch (error) {
        console.log(error);
        return {error: "Something went to wrong"};

    }
};

    export const login = async (previousState, formData) => {
        const {username, password} = Object.fromEntries(formData);

        
        try {
            await signIn("credentials",{username, password});
    } catch (error) {
        console.log(error);

        if (error.message.includes("CredentialsSignin")) {
            return {error: "invalid username or password"}
        }

        throw error;

    }
};

