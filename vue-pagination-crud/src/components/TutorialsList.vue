<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
            type="text"
            class="form-control"
            placeholder="Search by title"
            v-model="searchTitle"
        />
        <div class="input-group-append">
          <button
              class="btn btn-outline-secondary"
              type="button"
              @click="page = 1; retrieveTutorials();"
          >
            Search
          </button>
        </div>
      </div>
    </div>

    <div class="col-md-12">
      <div class="mb-3">
        Items per Page:
        <select v-model="pageSize" @change="handlePageSizeChange($event)">
          <option v-for="size in pageSizes" :key="size" :value="size">
            {{ size }}
          </option>
        </select>
      </div>

      <b-pagination
          v-model="page"
          :total-rows="count"
          :per-page="pageSize"
          prev-text="Prev"
          next-text="Next"
          @change="handlePageChange"
      ></b-pagination>
    </div>

    <div class="col-md-6">
      <h4>Tutorials List</h4>
      <ul class="list-group" id="tutorials-list">
        <li
            class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(tutorial, index) in tutorials"
            :key="index"
            @click="setActiveTutorial(tutorial, index)"
        >
          {{ tutorial.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "tutorials-list",
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: "",

      page: 1,
      count: 0,
      pageSize: 3,

      pageSizes: [3, 6, 9],
    };
  },
}
</script>
