<script>
export default {
  mounted() {
    window.kakao && window.kakao.maps ? this.initMap() : this.addKakaoMapScript()
  },
  methods: {
    addKakaoMapScript() {
      const script = document.createElement('script')
      script.onload = () => kakao.maps.load(this.initMap)
      script.src =
        'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=b6860c134c993bfea6eef021fdad9f8c'
      document.head.appendChild(script)
    },
    initMap() {
      var container = document.getElementById('map')
      var options = {
        center: new kakao.maps.LatLng(35.3351575394625, 129.01074046469583),
        level: 2
      }

      kakao.maps.Map(container, options)
      // var markerPosition = new kakao.maps.LatLng(35.3351575394625, 129.01074046469583)
      // var marker = new kakao.maps.Marker({
      //   position: markerPosition
      // })
      marker.setMap(map)
    }
  }
}
</script>

<template>
  <div>
    <h1>지도입니다</h1>
    <div>
      <div id="map" class="map"></div>
    </div>
  </div>
</template>
