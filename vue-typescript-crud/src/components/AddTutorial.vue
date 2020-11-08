<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
            id="title"
            v-model="tutorial.title"
            class="form-control"
            name="title"
            required
            type="text"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
            id="description"
            v-model="tutorial.description"
            class="form-control"
            name="description"
            required
        />
      </div>

      <button class="btn btn-success" @click="saveTutorial">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import TutorialDataService from "../services/TutorialDataService";

@Component
export default class AddTutorial extends Vue {
  private tutorial: any = {
    id: null,
    title: "",
    description: "",
    published: false,
  };
  private submitted: boolean = false;
  saveTutorial() {
    var data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
    };
    TutorialDataService.create(data)
        .then((response) => {
          this.tutorial.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
  }
  newTutorial() {
    this.submitted = false;
    this.tutorial = {};
  }
}
</script>

<style scoped>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
