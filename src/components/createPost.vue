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
				v-model="eventName"
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
						v-model="place"
						label="Место"
					>
					</v-text-field>
				</v-flex>
				<v-flex
					xs12
					md3>
					<v-text-field
						v-model="realTime"
						label="Время"
					></v-text-field>
				</v-flex>
			</v-layout>
			<v-textarea
				v-model="description"
				label="Описание"
				height="160"
			></v-textarea>									
			<v-layout >
				<v-checkbox
					v-model="checkbox"
					label="Пометить событие как важное"
				></v-checkbox>

				<button class="btn4"> Готово</button>
				<button class="btn3">Удалить</button>
			</v-layout>
		</v-form>
	</v-dialog>
</template>

<script>

export default {
	data() {
		return {
			modal: false,
			eventName: '',
			place: '',
			time: new Date(),
			description: '',
			checkbox: false
		}
		
	},
	computed: {
		realTime() {
			function addZero(i) {
				if (i < 10) {
					i = '0' + i
				}
				return i
			}
			let now = new Date();
			let result = addZero(now.getHours()) + ":" + addZero(now.getMinutes());
			return result	
		}
	}
}
</script>
