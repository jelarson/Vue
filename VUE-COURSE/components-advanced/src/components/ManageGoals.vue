<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" ref="goal"/>
        <button @click="setGoal">Set Goal</button>
        <teleport to="body">
            <ErrorAlert v-if="inputIsInvalid">
                <template #default>
                    <h2>Input is invalid!</h2>
                    <p>Please enter at least a few characters...</p>
                    <button @click="confirmError">Okay</button>
                </template>
            </ErrorAlert>
        </teleport>
    </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';
export default {
    data() {
        return {
            inputIsInvalid: false,
        }
    },
    methods: {
        setGoal() {
            const enteredValue = this.$refs.goal.value;
            if (enteredValue == '') {
                // alert('Input Must Not Be Empty!');
                this.inputIsInvalid = true;
            }
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    }, 
    components: {
        ErrorAlert,
    }
}
</script>