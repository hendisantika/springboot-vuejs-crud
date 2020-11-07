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
