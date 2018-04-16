<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
            <li>
                <router-link to="/">Go to home</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import * as tf from '@tensorflow/tfjs';

    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your tensorflow.js Model'
            }
        },
        mounted() {
            // Define a model for linear regression.
            const model = tf.sequential();
            model.add(tf.layers.dense({units: 1, inputShape: [1]}));

            // Prepare the model for training: Specify the loss and the optimizer.
            model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

            // Generate some synthetic data for training.
            const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
            const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

            // Train the model using the data.
            model.fit(xs, ys).then(() => {
                // Use the model to do inference on a data point the model hasn't seen before:
                model.predict(tf.tensor2d([5], [1, 1])).print();
            });
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
