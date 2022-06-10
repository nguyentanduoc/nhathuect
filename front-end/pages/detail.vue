<template>
  <div>
    <b-row class="justify-content-center">
      <b-col sm="12" md="12" lg="8">
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
        <b-card>
          <b-row>
            <b-col cols="9" data-spy="scroll">
              <b-carousel
                id="carousel-1"
                :interval="10000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
              >
                <!-- Text slides with image -->
                <b-carousel-slide
                  img-src="https://picsum.photos/1024/480/?image=52"
                ></b-carousel-slide>

                <!-- Slides with custom text -->
                <b-carousel-slide
                  img-src="https://picsum.photos/1024/480/?image=54"
                >
                </b-carousel-slide>

                <!-- Slides with image only -->
                <b-carousel-slide
                  img-src="https://picsum.photos/1024/480/?image=58"
                ></b-carousel-slide>

                <!-- Slides with img slot -->
                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                <b-carousel-slide>
                  <template #img>
                    <img
                      class="d-block img-fluid w-100"
                      width="1024"
                      height="480"
                      src="https://picsum.photos/1024/480/?image=55"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>

                <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                <b-carousel-slide
                  caption="Blank Image"
                  img-blank
                  img-alt="Blank image"
                >
                </b-carousel-slide>
              </b-carousel>
              Căn hộ studio 1-2pn đầy đủ nội thất Q2 7 triệu/tháng- 30 m2 Lưu
              tin like location Đường Thảo Điền, Phường Thảo Điền, Thành phố Thủ
              Đức, Tp Hồ Chí MinhXem bản đồ Hot hot hot❗️❗️❗️ 💯 Là kiểu
              phòng studio và 1pn-2pn hiện đại thoáng mát lại thêm full nội thất
              thì tại sao chúng ta lại không ghé qua xem và ở 1 lần nhỉ??? ✏️
              Cho thuê căn hộ dịch vụ - full nội thất : tivi tủ lạnh máy giặt tủ
              áo bàn làm việc - phòng vệ sinh sạch sẽ hiện đại - giường to dành
              cho gia đình - an ninh tuyệt đối camera bảo vệ - có bãi giữ xe máy
              và oto ✏️ Gần khu dân cư các khu TTTM vincom thảo điền Metro Q2 -
              Gần các dịch vụ ăn uống và giải trí ✏️ Nằm ở khu vực di chuyển
              thuận tiện đi các quận nội thành và thủ đức q9 Các dạng phòng đa
              dạng như studio cao cấp. 1pn xịn sò. 2pn rộng rãi. Tất cả đều rất
              SANG CHẢNH và TIỆN LỢI Nằm ở các khu vực chính như BÌNH AN. THẢO
              ĐIỀN. NGUYỄN DUY TRINH. ĐẢO KIM CƯƠNG Liên hệ để được tư vấn trực
              tiếp (call/zalo) Nhấn để hiện số: 096315 ***
            </b-col>
            <b-col>
              <div>
                <b-button variant="primary">
                  <b-icon icon="phone"></b-icon>
                  090909090
                </b-button>
              </div>
              <div class="mt-1">
                <b-button>
                  <b-icon icon="envelope"></b-icon>
                  090909090
                </b-button>
              </div>
              <div class="mt-1">
                <b-button> Đặt </b-button>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      breadcrumbs: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Detail",
          active: true,
        },
      ],
    };
  },
};
</script>