<template>
	<div>
		<header>
			<div class="header">
				<img src="../assets/logo.png" alt="Travel" class="logo">
				<p class="headMessage">Друзья, мои походы пока еще <br> не закончились, делюсь с вами!</p>
				<button class="btn1">
					Событие +
				</button>
				<button class="btn2">
					Обновить
				</button>
			</div>
		</header>

		<section>

		</section>

		<footer>

		</footer>
	</div>
</template>

<script>
export default {
	
}
</script>

<style>
	body {
		margin: 0;
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
	border: 2px solid #a9d85f;
	font-size: 16pt;
	color:#ffffff;
	margin-left: 32px;
	}
</style>
