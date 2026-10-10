<script>

import Router from 'svelte-spa-router'
import Home from './pages/Home.svelte'
import Typing from './pages/Typing.svelte'
import Result from './pages/Result.svelte'

const routes = {
  '/': Home,
  '/typing': Typing,
  '/result': Result,
}

</script>

<Router {routes} />