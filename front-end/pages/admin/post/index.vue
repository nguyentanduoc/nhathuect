<template>
  <div>
    <div class="text-right">
      <b-button @click="$router.push({ path: '/admin/post/create' })">
        <i class="fa fa-plus"></i>
        Tạo bài đăng
      </b-button>
    </div>
    <b-card>
      <b-form>
        <b-row>
          <b-col>
            <label for="date">Ngày Đăng</label>
            <b-form-input></b-form-input>
          </b-col>
          <b-col>
            <label for="date">Ngày Đăng</label>
            <b-form-input></b-form-input>
          </b-col>
          <b-col>
            <label for="date">Ngày Đăng</label>
            <b-form-input></b-form-input>
          </b-col>
          <b-col>
            <label for="date">Ngày Đăng</label>
            <b-form-input></b-form-input>
          </b-col>
          <b-col>
            <label for="date">&nbsp;</label>
            <b-button>Search</b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-card>
    <b-card class="mt-3">
      <b-table :items="items">
        <template #cell(srcImage)="data" borderless>
          <b-img :src="data.value" width="200px"></b-img>
        </template>
      </b-table>
    </b-card>
  </div>
</template>
<script>
export default {
  layout: "admin",
  data() {
    return {
      fields: [],
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