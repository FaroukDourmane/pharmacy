<script>
	import { Router, Route } from "svelte-navigator";
	import Header from './layouts/Header.svelte';
	import Footer from './layouts/Footer.svelte';
	import Home from './pages/Home.svelte';
	import Contact from './pages/Contact.svelte';
	import Category from './pages/Category.svelte';
	import Article from './pages/Article.svelte';
	import About from './pages/About.svelte';
	import Quality from './pages/Quality.svelte';

	let qualityBox = true;
</script>

<main>
	<Router>
		<Header qualityBox={qualityBox} />
			<Route path="/"> <Home bind:qualityBox={qualityBox}  /> </Route>
			<Route path="/contact"> <Contact bind:qualityBox={qualityBox} /> </Route>
			<Route path="/category/:id" let:params> <Category id={params.id} bind:qualityBox={qualityBox} /> </Route>
			<Route path="/article/:id" let:params> <Article id={params.id} bind:qualityBox={qualityBox} /> </Route>
			<Route path="/about"> <About bind:qualityBox={qualityBox} /> </Route>
			<Route path="/quality"> <Quality bind:qualityBox={qualityBox} /> </Route>
		<Footer />
	</Router>
</main>
