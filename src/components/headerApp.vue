<template>
	<div>
		<header>
			<div class="header">
				<img src="../assets/logo.png" alt="Travel" class="logo">
				<p class="headMessage">Друзья, мои походы пока еще <br> не закончились, делюсь с вами!</p>
				<create-post />
				<!-- <button class="btn1">
					Событие +
				</button> -->
				<button class="btn2" @click="reload">
					Обновить
				</button>
			</div>
		</header>
	</div>
</template>

<script>

import createPost from './createPost'
export default {
	components: {
		createPost
	},
	methods: {
		reload() {
			window.location.reload();
		}
	}
}
</script>
