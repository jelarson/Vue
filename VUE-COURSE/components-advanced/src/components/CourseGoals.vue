<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal" test="hello"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            goals: ['finish the course', 'Learn Vue'],
        }
    },
}
</script>