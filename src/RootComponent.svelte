<script>
    import Router, {link} from 'svelte-spa-router'
    
    import App from './App.svelte'
    import Child from './Child.svelte'

    const routes = {
        '/': App,
        '/child': Child,
        '*': App
    }
</script>
<div>
    <a href="/" use:link>home</a>
    <a href="/child" use:link>child</a>
</div>

<Router {routes}/>