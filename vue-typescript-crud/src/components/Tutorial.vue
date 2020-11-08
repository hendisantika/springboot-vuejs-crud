<template>
  <div v-if="currentTutorial" class="edit-form">
    <h4>Tutorial</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input
            id="title"
            v-model="currentTutorial.title"
            class="form-control"
            type="text"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
            id="description"
            v-model="currentTutorial.description"
            class="form-control"
            type="text"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentTutorial.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button
        v-if="currentTutorial.published"
        class="badge badge-primary mr-2"
        @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button
        v-else
        class="badge badge-primary mr-2"
        @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="badge badge-danger mr-2" @click="deleteTutorial">
      Delete
    </button>

    <button class="badge badge-success" type="submit" @click="updateTutorial">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br/>
    <p>Please click on a Tutorial...</p>
  </div>
</template>
