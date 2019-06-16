<template>
	<div>
		<header-app />
		<section>
			<div class="content" v-for="(post, id) in posts" :key="id">
				<div class="displayPosts" >
						<v-icon class ="icon" @click="deletePost(post.id)">close</v-icon>
					<div class="wrapper">
						<div class="realTime">{{post.data().realTime}}</div>
						<div class="title">{{post.data().title}}</div> 
					</div>
					<div class="wrapper">
						<div class="place">{{post.data().place}}</div>
						<div class="message">{{post.data().message}}</div>
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
            this.posts.unshift(doc);
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });			
		},
		deletePost(doc) {
			if (confirm("Вы точно хотите удалить пост?"))
				{
					db.collection("posts").doc(doc).delete().then(() => {
					console.log("Document successfully deleted!");
					}).catch((error) => {
							console.error("Error removing document: ", error);
					});
				}
			else {

			}	
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
