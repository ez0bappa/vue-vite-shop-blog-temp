<script>
import { defineComponent } from '@vue/runtime-core'
import { v4 as uuidv4 } from 'uuid'
import { usePostStore } from '../../../../store/Posts'

export default defineComponent({
  data() {
    return {
      categories: [
        'sustainability',
        'nature'
      ],
      post: {
        id: '',
        title: '',
        name: '',
        description: ''
      }
    }
  },
  setup () {
    const store = usePostStore()
    
    function onSubmit() {
        const post = {
            ...this.post,
            id: uuidv4(),
        }
        
        store.createPost(post)
        
    }

    return {
        store,
        onSubmit
    }
  },
  methods: {
    // onSubmit() {
    //   const post = {
    //     ...this.post,
    //     id: uuidv4(),
    //     // organizer: this.$store.state.user
    //   }
    // console.log(post)
    //   this.$store
    //     .dispatch('createPost', post)
    //     .then(() => {
    //       this.$router.push({
    //         name: 'EventDetails',
    //         params: { id: post.id }
    //       })
    //     })
    //     .catch(error => {
    //       this.$router.push({
    //         name: 'ErrorDisplay',
    //         params: { error: error }
    //       })
    //     })
    // }
  }
})
</script>

<template>
    <h5 class="mb-3 pb-3">Add Post</h5>
    <div class="container">
        <div class="row">
            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div class="add-post">
                    <div class="add-post-section">
                        <div class="col-12 mt-3 pt-3">
                            <form @submit.prevent="onSubmit">
                                <!-- Post title -->
                                <div class="row g-3 align-items-center">
                                    <div class="col-4 text-start">
                                        <label for="name" class="col-form-label">Post Title</label>
                                    </div>
                                    <div class="col-4">
                                        <input type="text" id="name" v-model="post.title" class="form-control" placeholder="Enter post title...">
                                    </div>
                                    <div class="col-4">
                                        <span id="passwordHelpInline" class="form-text">
                                            Must be 8-20 characters long.
                                        </span>
                                    </div>
                                </div><br>

                                <!-- Post Name -->
                                <div class="row g-3 align-items-center">
                                    <div class="col-4 text-start">
                                        <label for="name" class="col-form-label">Post name</label>
                                    </div>
                                    <div class="col-4">
                                        <input type="text" id="name" v-model="post.name" class="form-control" placeholder="Enter post name...">
                                    </div>
                                    <div class="col-4">
                                        <span id="passwordHelpInline" class="form-text">
                                            Must be 8-20 characters long.
                                        </span>
                                    </div>
                                </div><br>

                                <!-- Description -->
                                <div class="row g-3 align-items-center">
                                    <div class="col-4 text-start">
                                        <label for="description" class="col-form-label">Description</label>
                                    </div>
                                    <div class="col-4">
                                        <input type="textarea" v-model="post.description" class="form-control" placeholder="Enter description...">
                                    </div>
                                    <div class="col-4">
                                        
                                    </div>
                                </div><br>
                                
                                <!-- Submit button -->
                                <div class="row g-3 align-items-center mt-4 text-center">
                                    <div class="col-md-12 text-center">
                                        <div class="col-sm-12 form-froup">
                                            <button type="submit" @click.prevent="onSubmit" class="btn btn-success ms-2">Add post</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="form-container">
    <form @submit.prevent="onSubmit">
    <label>Select a category: </label>
    <select v-model="post.category">
    <option
    v-for="option in categories"
    :value="option"
    :key="option"
    :selected="option === post.category"
    >
    {{ option }}
    </option>
    </select>

    <h3>Name & describe your post</h3>

    <label>Title</label>
    <input v-model="post.title" type="text" placeholder="Title" />

    <label>Description</label>
    <input
    v-model="post.description"
    type="text"
    placeholder="Description"
    />

    <h3>Where is your post?</h3>

    <label>Location</label>
    <input v-model="post.location" type="text" placeholder="Location" />

    <h3>When is your post?</h3>
    <label>Date</label>
    <input v-model="post.date" type="text" placeholder="Date" />

    <label>Time</label>
    <input v-model="post.time" type="text" placeholder="Time" />

    <button type="submit">Submit</button>
    </form>
    </div> -->
</template>