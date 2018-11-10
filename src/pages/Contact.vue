<template>
  <div>
    <Header />
    <div class="container">
      <div class="content">
        <h1 class="title">
          Contact Us
        </h1>
        <form class="contact" name="contact" netlify-honeypot="bot-field" action="" method="post" netlify>
          <input type="hidden" name="contact" value="contact">

          <label class="form-label" for="name">
            Name:
          </label>
          <input class="form-field" name="name" id="name" required />
          <label class="form-label" for="email">
            Email:
          </label>
          <input class="form-field" type="email" name="email" id="email" required />
          <label class="form-label" for="message">
            Message:
          </label>
          <textarea class="form-text" rows="6" name="message" id="message" placeholder="Suggestions are welcome" required></textarea>
          <p class="hidden">
            <label>Don’t fill this out: <input name="bot-field"></label>
          </p>
          <input class="form-button" type="submit" value="Send Message" />
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
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}

.content {
	grid-column-start: 2;
	grid-column-end: 3;
	grid-row-start: 0;
	grid-row-end: 1;
	display: flex;
	flex-flow: column wrap;
}

.contact {
	background-color: #fafaff;
	height: 425px;
	width: 40vw;
	margin: 0 auto;
	padding-top: 16px;
}

h1 {
	text-align: center;
	margin-bottom: 32px;
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
	border-radius: 2.5%;
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
	width: 45%;
	font-size: 1.5rem;
	font-weight: 700;
	position: relative;
	overflow: hidden;
	transform: translate3d(0, 0, 0);
	border-radius: 2.5%;
}

.form-button:hover {
	background: #d5d5d8 radial-gradient(circle, transparent 1%, #d5d5d8 1%)
		center/15000%;
}

.form-button:after {
	content: "";
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	pointer-events: none;
	background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
	background-repeat: no-repeat;
	background-position: 50%;
	transform: scale(10, 10);
	opacity: 0;
	transition: transform 0.5s, opacity 1s;
}

.form-button:active:after {
	transform: scale(0, 0);
	opacity: 0.2;
	transition: 0s;
}

@media screen and (max-width: 768px) {
	.container {
		grid-template-columns: 10px 1fr 10px;
	}
	.contact {
		width: 90%;
	}

	.form-button {
		background-color: #dddddd;
		height: 64px;
		width: 45%;
		font-size: 1.25rem;
		text-align: center;
	}
}

@media screen and (min-width: 769px) and (max-width: 960px) {
	.container {
		grid-template-columns: 10px 1fr 10px;
	}
	.contact {
		width: 45%;
	}

	.form-button {
		background-color: #dddddd;
		height: 64px;
		width: 55%;
		font-size: 1.25rem;
		text-align: center;
	}
}

@media screen and (max-width: 576px) {
	.form-button {
		width: 40%;
		font-size: 1.25rem;
	}
}
</style>
