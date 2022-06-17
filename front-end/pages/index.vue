<template>
  <div>
    <div>
      <form-filter></form-filter>
    </div>
    <div class="mt-3">
      <items :items="items" />
    </div>
  </div>
</template>

<script>
import FormFilter from "../components/items/FormFilter.vue";
import Items from "../components/items/Items.vue";

export default {
  name: "index-page",
  components: { FormFilter, Items },
  auth: false,
  data() {
    return {
      items: [
        {
          id: 1,
          srcImage:
            "https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg",
          price: "abcccc",
          address: "adadad/adadad",
          name: "name 1",
          createdAt: "2020/11/11 03:03:03",
        },
        {
          id: 2,
          srcImage:
            "https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg",
          price: "abcccc",
          address: "adadad/adadad",
          name: "ame2",
          createdAt: "2020/11/11 03:03:03",
        },
        {
          id: 3,
          srcImage:
            "https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg",
          price: "abcccc",
          address: "adadad/adadad",
          name: "name 3",
          createdAt: "2020/11/11 03:03:03",
        },
        {
          id: 4,
          srcImage:
            "https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg",
          price: "abcccc",
          address: "adadad/adadad",
          name: "name 4",
          createdAt: "2020/11/11 03:03:03",
        },
      ],
    };
  },
};
</script>
