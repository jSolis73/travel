<template>
	<div>
		<header-app />
		<section>
			<div class="content" v-for="(post, id) in posts" :key="id">
				<div class="displayPosts">
						<v-icon class ="icon">close</v-icon>
					<div class="wrapper">
						<div class="realTime">{{post.realTime}}</div>
						<div class="title">{{post.title}}</div> 
					</div>
					<div class="wrapper">
						<div class="place">{{post.place}}</div>
						<div class="message">{{post.message}}</div>
					</div>
				</div>
			</div>	
		</section>

		<footer>
		</footer>
	</div>
</template>

<script>
import HeaderApp from './headerApp'

import {fb, db} from '../main'
export default {
	data() {
		return {
			posts: []
		}
	},
	components: {
		HeaderApp
	},
	methods: {
		readData() {
		db.collection("posts")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            this.posts.unshift(doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });			
		}
	},
	created() {
		this.readData()
  }
}
</script>

<style>
	 @import '../assets/style.css';
</style>
