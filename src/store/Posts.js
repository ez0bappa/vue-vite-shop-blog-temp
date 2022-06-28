import { defineStore } from "pinia";
import PostsEventService from "../services/PostsEventService";

export const usePostStore = defineStore("Post", {
    state: () => {
        return {
            
        }
    },
    actions: {
        async createPost(post) {
            createposts: {
                PostsEventService.createPost(post)
            }
        }
    },
    getters: {
        
    },
})