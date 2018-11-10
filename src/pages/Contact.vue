<template>
  <div>
    <Header />
    <form name="contact" action="" method="post" netlify>
      <input type="hidden" name="contact" value="contact">
    </form>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  name: 'Contact',
  components: {
    Header,
  },
  head () {
    return {
      title: 'Contact Us',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'Contact for Suggestions, Recommendations, or just let us how were doing'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container {
	display: grid;
	grid-template-columns: 10% 1fr 10%;
	grid-template-rows: 40% auto;
	text-align: center;
	margin-top: 20px;
}

.contact {
	grid-column-start: 2;
	grid-column-end: 3;
	min-height: 60vh;
}

h1 {
	margin: 12px;
}
</style>
