<script>
	import { Router, Route } from "svelte-navigator";
	import Header from './layouts/Header.svelte';
	import Footer from './layouts/Footer.svelte';
	import Home from './pages/Home.svelte';
</script>

<main>
	<Router>
		<Header />
		<Route path="/"> <Home /> </Route>
		<Footer />
	</Router>
</main>
