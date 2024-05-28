<script setup lang="ts">
import logo from '../assets/logo.png'
</script>

<template>
  <section>
    <img
      :src="logo"
      alt="vegan-begun"
      width="
    200px"
    />
    <div class="container">
      <h1>To. 방문자 여러분께</h1>
      <p>안녕하세요!</p>
      <p>
        우리 웹사이트에 오신 것을 환영합니다.
        <span>Vegan-Begun</span>은 비건 라이프스타일을 소개하고, 이를 실천하기 쉽고 즐겁게 만들기
        위해 모인 팀이자 웹사이트의 이름입니다.
      </p>
      <label> 비건이란 무엇인가요? </label>
      <p>
        비건이란, 동물성 제품을 전혀 섭취하지 않고, 동물 착취를 배제하는 삶을 지향하는 사람들을
        말합니다.
      </p>

      <label> 비건 실천은 어렵고 비싸다? </label>
      <p>
        아뇨! 비건 식단은 다양하고 맛있을 뿐만 아니라, 경제적일 수도 있습니다. 우리 웹사이트는
        비건의 장점을 알리기 위해 편의점이나 마트에서 일상적으로 구매할 수 있는 비건 식품과 브랜드
        정보를 제공합니다.
      </p>
      <label>외국인과 논비건에게도 열린 정보</label>
      <p>
        우리는 전 세계의 다양한 사람들을 환영합니다. 물론, 비건을 실천하지 않더라도 누구나 자신의
        방식대로 환경 보호와 동물권을 지지할 수 있다고 믿습니다.
      </p>
      <p>지속 가능한 미래를 위해 노력하는 여러분을 Vegan-Begun이 응원합니다. Vegan Begun!</p>
      <h3>From. Vegan-Begun 팀 일동</h3>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
}

label {
  font-size: 25px;
  font-weight: 600;
}

span {
  font-size: 25px;
  font-weight: 700;
}
</style>
