<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
            <li>
                <router-link to="/tensorflow">Go to tensorflow</router-link>
            </li>
            <li>
                <el-button @click="visible = true" type="primary">Button</el-button>
                <el-dialog :visible.sync="visible" title="Hello world">
                    <p>Try Element</p>
                </el-dialog>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                visible: false
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
