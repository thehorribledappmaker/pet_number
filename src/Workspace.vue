<template>
  <div>
    <h2>Hi {{greet}}</h2>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      input_text: '',
    };
  },
  computed: {
    ...mapGetters(['greet']),
    // encodedText({ input_text }) {
    //   let cleanSVG = DOMPurify.sanitize(input_text);
    //   // let cleanSVG = input_text;
    //   this.cleanSVG = cleanSVG;
    //   // let output = new TextEncoder('utf-8').encode(input_text);
    //   let output = new TextEncoder('utf-8').encode(cleanSVG);
    //   let original_len = output.byteLength;
    //   let compressed = pako.deflate(output);
    //   let compressed_len = compressed.byteLength;
    //   this.encoded_text = Buffer.from(compressed);
    //   // this.encoded_text = compressed;
    //   let rate = compressed_len / original_len;
    //   // let decoded = pako.inflate(compressed, { to: 'string' });
    //   return JSON.stringify({
    //     original_len,
    //     compressed_len,
    //     rate
    //     // compressed: compressed.join()
    //   });
    // },
    // encodedTopics({ topics }) {
    //   let output = topics.map(x => {
    //     let output = new TextEncoder('utf-8').encode(x);
    //     return Buffer.from(output);
    //   });
    //   // if (output.length == 2) {
    //   //   output.push(Buffer.alloc(1, 0, 'hex'));
    //   // }
    //   return output;
    // }
  },
  mounted() {
    console.log('Workspace mounted');
  }
};
</script>