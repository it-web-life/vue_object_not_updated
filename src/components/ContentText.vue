<template>
  <div class="content">
    <template v-if="Object.keys(textContent).length">
      <!-- データ取得ボタン1で取得したデータの表示領域 -->
      <div
        v-if="textContent.textObject1"
        class="item"
      >
        <h2>{{ textContent.textObject1.title }}</h2>
        <p class="subtitle">{{ textContent.textObject1.subTitle }}</p>
        <p>
          {{ textContent.textObject1.bodyText }}
        </p>
      </div>

      <!-- データ取得ボタン2で取得したデータの表示領域 -->
      <div
        v-if="textContent.textObject2"
        class="item"
      >
        <h2>{{ textContent.textObject2.title }}</h2>
        <p class="subtitle">{{ textContent.textObject2.subTitle }}</p>
        <p>
          {{ textContent.textObject2.bodyText }}
        </p>
      </div>
    </template>

    <div><button @click = "onClick1">データ取得ボタン1</button></div>
    <div><button @click = "onClick2">データ取得ボタン2</button></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ContentText',
  data: function() {
    return {
      textContent: {},
    }
  },
  methods: {
    async getData1() {
      // APIからobjectdata1を取得
      const { data } = await axios.get('http://localhost:3000/api/objectdata1');
      console.log('data1', data);

      if (data) {
        // this.$setを使ってリアクティブにする
        this.$set(this.textContent, 'textObject1', JSON.parse(JSON.stringify(data)));
      }

      console.log('this.textContent', this.textContent);
    },
    async getData2() {
      // APIからobjectdata2を取得
      const { data } = await axios.get('http://localhost:3000/api/objectdata2');
      console.log('data2', data);

      if (data) {
        // this.$setを使ってリアクティブにする
        this.textContent.textObject2 = JSON.parse(JSON.stringify(data));
      }

      // 表示を強制更新する
      // this.$forceUpdate();
      console.log('this.textContent', this.textContent);
    },
    // データ取得ボタン1のクリックイベント
    onClick1 () {
      this.getData1();
    },
    // データ取得ボタン2のクリックイベント
    onClick2 () {
      this.getData2();
    }
  }
}
</script>

<style scoped>
  .item {
    width: 100%;
    max-width: 600px;
    margin: 50px auto;
  }

  .subtitle {
    font-weight: bold;
  }
</style>
