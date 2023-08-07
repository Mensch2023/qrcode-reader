<template>
  <qrcode-scanner
    :qrbox="250" 
    :fps="10" 
    style="width: 500px;"
    @result="onScan"
  />
</template>

<script>
export default {
  methods: {
    onScan (decodedText, decodedResult) {
      // handle the message here :)
    }
  }
}
</script>