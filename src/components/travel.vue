<template>
	<div>
		<header-app />
		<section>
			<div class="content">

			</div>	
		</section>

		<footer>
		</footer>
	</div>
</template>

<script>
import HeaderApp from './headerApp'
export default {
	components: {
		HeaderApp
	}
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
		border: 3px solid #a9d85f;
		font-size: 16pt;
		color:#ffffff;
		margin-left: 32px;
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
