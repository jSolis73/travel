<template>
	<div>
		<header-app />
		<section>
			<div class="content" v-for="(post, id) in posts" :key="id">
				<h3>{{post.message}}</h3>
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
	mounted() {
		db.collection('posts')
  }
}
</script>

<style>
	body {
		margin: 0 auto;
		padding:0;
	}
	.header {
		background: url(../assets/head.png) no-repeat center top ;
		height: 302px;
		
	}
	.logo {
		padding-left: 228px;
		padding-top: 48px;
	}
	.headMessage {
		font-size: 40px;
		color: #ffffff;
		padding-left: 720px;
		margin-top: 0px;
	}
	.btn1 {
		width: 165px;
		height: 52px;
		background-color: #a9d85f;
		border-radius: 5px;
		border: none;
		font-size: 16pt;
		color:#ffffff;
		margin-left: 228px;
	}
	.btn2 {
		width: 165px;
		height: 52px;
		background: transparent;
		border-radius: 5px;
		border: 3px solid #a9d85f;
		font-size: 16pt;
		color:#ffffff;
		margin-left: 32px;
	}
	.btn3 {
		width: 100px;
		height: 40px;
		background: transparent;
		border-radius: 5px;
		border: 3px solid #a9d85f;
		font-size: 13pt;
		color:#a3a3a3;
		margin-left: 32px;
	}
	.btn4 {
		width: 100px;
		height: 40px;
		background-color: #a9d85f;
		border-radius: 5px;
		border: none;
		font-size: 13pt;
		color:#ffffff;
		margin-left: 228px;
	}
	footer {
		background: url(../assets/footer.png) no-repeat center top ;
		height: 74px;
		width: 100%;
		position: absolute;
  	left: 0;
  	bottom: 0;
	}
	.content {
  	padding-bottom: 80px;
	}	
</style>
