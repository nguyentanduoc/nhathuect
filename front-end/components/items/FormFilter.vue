<template>
  <div>
    <b-card class="shadow">
      <b-form inline>
        <b-form-input
          id="input-price"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="500"
        ></b-form-input>

        <b-form-input
          id="input-price"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="1.000"
        ></b-form-input>

        <b-form-select
          id="select-province"
          v-model="form.province"
          :options="provinceOptions"
          class="mb-2 mr-sm-2 mb-sm-0"
        >
        </b-form-select>
        <b-button id="search" variant="primary">Tìm</b-button>
        <b-button id="search" variant="outline-secondary" class="ml-1"
          >Huyr</b-button
        >
        <!-- <b-form-group label="Giá">
              <b-form-input></b-form-input>
              <b-form-input></b-form-input>
            </b-form-group>
            <b-form-group label="Quận/Huyện" class="ml-2">
              <b-form-select v-model="form.province" :options="provinceOptions">
              </b-form-select>
            </b-form-group>
            <b-form-group label="Loại" class="ml-2">
              <b-form-select v-model="form.type" :options="typeOptions">
              </b-form-select>
            </b-form-group>
            <b-form-group class="ml-2">
              <label for="">&nbsp;</label>
              <b-button>Tìm</b-button>
            </b-form-group> -->
      </b-form>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "form-filter",
  data() {
    return {
      provinceOptions: [
        { value: "", text: "Ninh Kiều" },
        { value: "a", text: "Cái Răng" },
      ],
      typeOptions: [
        { value: "", text: "Trọ" },
        { value: "a", text: "Nhà" },
      ],
      form: {
        province: "",
        type: "",
      },
    };
  },
};
</script>