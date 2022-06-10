<template>
  <div class="image-review">
    <b-row class="justify-align-right">
      <b-col cols="6">
        <b-img v-show="previewImage" :src="`${previewImage}`" width="200px">
        </b-img>
      </b-col>
      <b-col cols="6" class="my-auto">
        <div class="d-flex">
          <b-form-file
            accept="image/*"
            ref="fileInput"
            type="file"
            @input="pickFile"
          />
          <b-button class="ml-1" :disabled="!previewImage" @click="clearFiles">
            <i class="fa fa-subtract"></i>
          </b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "image-review",
  props: {
    index: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      previewImage: null,
    };
  },
  methods: {
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
    clearFiles() {
      this.$refs["fileInput"].reset();
      this.previewImage = null;
      this.$emit("remove", this.index);
    },
  },
};
</script>

<!-- <style lang="scss" scoped>
.custom-file-input {
    background-color: aqua;
}
</style> -->