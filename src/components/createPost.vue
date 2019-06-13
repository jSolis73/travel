<template>
	<v-dialog 
		width="615px"
		persistent
		v-model="modal"
		>
		<button class="btn1" slot="activator">
			Событие +
		</button>
		<v-form
			class="pa-3 pt-4"
			style="background: white"
			>
			<v-flex xs12 offset-xs10>
				<v-btn dark
						   @click="modal=false">
					<v-icon color="white" background="white">close</v-icon>
				</v-btn>
			</v-flex>
			<v-text-field
				v-model="post.title"
				label="Событие"
			></v-text-field>
			<v-layout
				wrap
      	justify-space-between
			>
				<v-flex
					xs12
					md8>
					<v-text-field
						v-model="post.place"
						label="Место"
					>
					</v-text-field>
				</v-flex>
				<v-flex
					xs12
					md3>
					<v-text-field
						v-model="post.realTime"
						label="Время"
					></v-text-field>
				</v-flex>
			</v-layout>
			<v-textarea
				v-model="post.message"
				label="Описание"
				height="160"
			></v-textarea>									
			<v-layout >
				<v-checkbox
					v-model="post.checkbox"
					label="Пометить событие как важное"
				></v-checkbox>

				<button class="btn4" @click.prevent="addData"> Готово</button>
				<button class="btn3">Удалить</button>
			</v-layout>
		</v-form>
	</v-dialog>
</template>

<script>
import {db,fb} from '../main'
export default {
	data() {
		return {
			modal: false,
			post: {
				message: '',
				checkbox: false,	
				title: '',
				place: '',
				realTime: ''	
			}
		}
		
	},
	methods: {
		addData() {
			db.collection("posts").add(this.post)
			.then((docRef) => {
					console.log("Document written with ID: ", docRef.id);
					this.reset
			})
			.catch(function(error) {
					console.error("Error adding document: ", error);
			});
			this.modal = false
		}
	}
}
</script>
