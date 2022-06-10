<template>
  <div>
    <h1>Tạo bài đăng</h1>
    <b-row class="justify-content-center">
      <b-col sm="12" md="4">
        <b-card>
          <b-form>
            <b-form-group label="Tiêu đề">
              <b-form-input> </b-form-input>
            </b-form-group>
            <b-form-group label="Hình Tiêu đề">
              <b-form-input> </b-form-input>
            </b-form-group>
            <b-form-group label="Giá">
              <b-form-input> </b-form-input>
            </b-form-group>
            <b-form-group label="Địa chỉ">
              <b-form-input> </b-form-input>
            </b-form-group>
          </b-form>
        </b-card>
      </b-col>
      <b-col sm="12" md="8">
        <b-card>
          <b-form>
            <div>
              <image-review
                v-for="(i, index) in images.length + 1"
                :key="index"
                @input="onChooseImage"
                @remove="onRemove"
                :index="index"
                class="mb-1"
              ></image-review>
            </div>
          </b-form>
          <div class="mt-3">
            <ckeditor
              :editor="editor"
              v-model="editorData"
              :config="editorConfig"
            ></ckeditor>
          </div>
          <div class="text-right mt-4">
            <b-row>
              <b-col>
                <b-button variant="primary" block @click="createPost">
                  Save
                </b-button>
              </b-col>
              <b-col><b-button block>Cancel</b-button></b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ImageReview from "../../../components/image-preview/ImageReview.vue";
export default {
  layout: "admin",
  components: { ImageReview },
  data() {
    return {
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {},
      images: [],
    };
  },
  methods: {
    createPost() {
      console.log("createPost");
    },
    onChooseImage(image) {
      console.log(image);
      this.images = [...this.images, image];
    },
    onRemove(index) {
      this.images.splice(index, 1);
    },
  },
};
</script>