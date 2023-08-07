import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

template: `<div id="qr-code-full-region"></div>`,
mounted () {
  const config = {
    fps: this.fps,
    qrbox: this.qrbox,
  };
  const html5QrcodeScanner = new Html5QrcodeScanner('qr-code-full-region', config);
  html5QrcodeScanner.render(this.onScanSuccess);
},
methods: {
  onScanSuccess (decodedText, decodedResult) {
    this.$emit('result', decodedText, decodedResult);
  }
}
});