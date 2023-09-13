<template>
	<br />
	<div class="formcontainer">
		<div class="containerH">
			<h1>
				Add an event! <br />
				<span class="smallerH1">enter details below</span>
			</h1>
		</div>
		<div class="form">
			<div class="formbox">
				<p class="formbuble">Task:</p>

				<input
					style="font-size: 2vh"
					type="text"
					name="task"
					placeholder="Enter your Task "
					v-model="input_content"
				/>
			</div>
			<br />

			<input
				style="color: #d9d9d9; font-size: 2vh"
				class="loginB"
				type="submit"
				value="Add Task"
				@click="addTask"
			/>
			<br />

			<button style="font-size: 2vh" class="Or" @click="cancelForm">
				Cancel
			</button>
			<br />
		</div>
	</div>
</template>

<script>
export default {
	name: "ToDoForm",
	emits: ["cancelevent"],
	props: {
		addTodo: Function,
	},
	data() {
		return {
			input_content: "",
		};
	},

	methods: {
		addTask() {
			if (this.input_content.trim() === "") {
				return;
			}
			this.addTodo({
				content: this.input_content,
				done: false,
				createdAt: new Date().getTime(),
			});

			this.input_content = "";
		},
		cancelForm() {
			this.$emit("cancelevent");
		},
	},
};
</script>
