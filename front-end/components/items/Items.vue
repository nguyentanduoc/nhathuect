<template>
  <div>
    <b-card
      v-for="item in items"
      :key="item.id"
      class="mb-3 shadow shadow-custom card-custom"
      no-body
      @click="detail"
    >
      <b-row>
        <b-col sm="3" md="3" lg="3">
          <b-img fluid :src="item.srcImage" width="200px"></b-img>
        </b-col>
        <b-col class="my-auto">
          <div class="font-weight-bold">
            <h3>{{ item.name }}</h3>
          </div>
          <div class="font-weight-bold text-primary">
            {{ item.price }}
          </div>
          <div class="">{{ item.address }}</div>
          <div class="font-italic">Date post :{{ item.createdAt }}</div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "items",
  props: {
    items: {
      type: Array,
      require: true,
    },
  },
  methods: {
    detail() {
      this.$router.push({ name: "detail" });
    },
  },
};
</script>