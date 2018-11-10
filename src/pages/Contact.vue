<template>
  <div>
    <Header />
    <div class="container">
      <div class="content">
        <form class="contact" name="contact" netlify-honeypot="bot-field" action="" method="post" netlify>
          <input type="hidden" name="contact" value="contact">
          <h1 class="title">
            Contact Us
          </h1>
          <label class="form-label" for="name">
            Name:
          </label>
          <input class="form-field" name="name" id="name" />
          <label class="form-label" for="email">
            Email:
          </label>
          <input class="form-field" name="email" id="email" />
          <label class="form-label" for="message">
            Message:
          </label>
          <textarea class="form-text" rows="6" name="message" id="message" placeholder="Suggestions are welcome"></textarea>
          <p class="hidden">
            <label>Don’t fill this out: <input name="bot-field"></label>
          </p>
          <input class="form-button" type="submit" value="Send message" />
        </form>
      </div>
    </div>
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
	color: #30313f;
}

.content {
	grid-column-start: 2;
	grid-column-end: 3;
	grid-row-start: 1;
	grid-row-end: 1;
	display: flex;
	flex-flow: column wrap;
}

.contact {
	background-color: #fafaff;
	height: 75vh;
	width: 40vw;
	margin: 0 auto;
	box-shadow: 0 5px 100px rgba(50, 50, 93, 0.1),
		0 5px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
}

h1 {
	padding-top: 16px;
	text-align: center;
	margin-bottom: 16px;
}

.hidden {
	display: none;
}

.form-label {
	display: block;
	text-align: left;
	margin-left: 32px;
	font-weight: 600;
}

.form-field,
.form-text {
	background-color: #eaeaee;
	margin: 16px 16px;
	width: 90%;
	border-radius: 5px;
}

.form-field {
	height: 30px;
}

#message {
	resize: none;
}

.form-button {
	background-color: #dddddd;
	height: 64px;
	width: 50%;
	font-size: 24px;
	font-weight: 700;
}
</style>
