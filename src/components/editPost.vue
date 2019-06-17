<template>
	<v-dialog 
		width="615px"
		persistent
		v-model="modal"
		>
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

				<button class="btn4" @click.prevent="changePost(post)"> Сохранить</button>
				<button 
					class="btn3"
					@click.prevent="modal=false">Отмена</button>
			</v-layout>
		</v-form>
	</v-dialog>
</template>

<script>
import {db,fb} from '../main'
import {eventBus} from '../main'
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
	created() {
		eventBus.$on('editPost', () => {
			this.modal=true;
		})
	},

}
</script>

