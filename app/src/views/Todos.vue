<template>
  <div
    class="todos-page vh-100 w-100 d-flex justify-content-center align-items-center"
  >
    <div class="col-md-6">
      <div class="text-bg-info p-4">
        <div class="row mb-4">
          <div class="col-sm-9">
            <input v-model="form.task" type="text" class="form-control" placeholder="Todo Title" aria-label="todo">
          </div>
          <div class="col-sm">
            <button @click="createUserTodo(form), form.task = null" :disabled="!form.task" class="btn btn-light w-100"> Create New </button>
          </div>
        </div>
        <ul class="list-group">
          <li
          v-for="(todo, index) in todos"
          :key="todo.id"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            {{todo.task}}
            <div class="d-flex">
              <span @click="deleteTodo({id:todo.id, index: index})" role="button" class="badge bg-danger rounded-pill me-3">delete</span>
              <div class="form-check form-switch">
                <input :checked="todo.completed" @change="updateTodoCompletion(todo.id)" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" >
                <label class="form-check-label" for="flexSwitchCheckChecked"></label>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Todos",
  data() {
    return {
      form:{
        task: null
      }
    };
  },
  computed:{
    ...mapGetters({
      todos: "todos/userTodos"
    })
  },
  methods: {
    ...mapActions({
      getTodos: "todos/getUserTodos",
      updateTodoCompletion: "todos/updateTodoCompletion",
      createUserTodo: "todos/createUserTodo",
      deleteTodo: "todos/deleteTodo",
    }),
  },
  async created() {
    await this.getTodos();
  },
};
</script>