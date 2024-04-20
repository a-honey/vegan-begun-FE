<script setup lang="ts"></script>

<template>
  <section>
    <div class="container">
      <h1>한입감자전</h1>
      <div class="img-container">
        <img src="/한입감자전.jpg" />
      </div>
    </div>
    <div class="content-container">
      <div class="item-container">
        <label> 성분표 </label>
        <p>
          감자(국산), 곡류가공품(밀가루(밀: 미국산), 튀김양념믹스(중국산), 옥수수가루,
          합성팽창제(탄산수소나트륨, 산성피로인산나트륨, 전분, 제일인산칼슘, 스테아린산칼슘),
          볶음쌀가루), 대두유(대두유(외국산), 전분가공품(감자전분(외국산)), 건조감자분말(미국산),
          설탕, 정제소금
        </p>
      </div>
      <div class="item-container">
        <label>알레르기</label>
        <p>대두, 밀</p>
      </div>
      <div class="item-container">
        <label>내용량</label>
        <p>400g</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 20px;
}
.img-container {
  width: 100%;
  height: 700px;
  overflow: hidden;
  border-radius: 10px;
}

img {
  width: 100%;
}

h1 {
  font-size: 23px;
  font-weight: 700;
  margin-bottom: 10px;
}

.content-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
}

.item-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid gray;
  padding: 20px;
  border-radius: 20px;
}
.item-container > label {
  font-size: 18px;
  font-weight: 700;
}
</style>
