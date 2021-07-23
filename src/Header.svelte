<script>
    import {timeSince} from './store/time'
    import {countStore} from './store/counter'
</script>
<header>
    Wellcome
    <h1>{countStore.value}</h1>
    <!-- <p>Current time: {$timeSince} -->
    <!-- </p> -->
</header>