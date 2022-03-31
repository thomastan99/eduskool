<template>
    <div id="main">
        <div id="top">
            <div id="header"><h1>Statistics</h1></div>
            <div id="choices">
                <select v-model="subject">
                <option value="" disabled selected>Please select subject</option>
                <option>eng</option>
                <option>math</option>
                <option>sci</option>
            </select>
            
            <select v-model="topic">
                <option value="" disabled selected>Please select topic</option>
                <option>chap1</option>
                <option>chap2</option>
                <option>chap3</option>                
            </select>
            
            <button @click="getStats(subject, topic)">Get Stats</button><br><br>

            <span>Selected: {{ subject + " " + topic }}</span>
            </div>
        </div>
        <div id="plot">
        </div>
    </div>
</template>

<script>
import Plotly from 'plotly.js-dist-min'
// import firebaseApp from "../firebase.js"
// import { getFirestore, collection, getDocs } from "firebase/firestore"

// const db = getFirestore(firebaseApp)

export default{
    mounted() {
        async function foo() {
            var y0 = [1,2,3,4,5];
            var y1 = [6,7,8,9,10];

            let traces = [
                {
                    y: y0,
                    type: "box",
                    name: "Class 1"
                },
                {
                    y: y1,
                    type: "box",
                    name: "Class 2"
                }
            ];

            let layout = {
                title: "Sample Box Plot",
            };

            let config = { respoinsive: true };
            
            Plotly.newPlot("plot", traces, layout, config);
            
        }
        foo()

        // async function getStats(subject, topic) {
        //     let z = await getDocs(collection(db, "Students"))
        //     let class1 = []
        //     let class2 = []

        //     z.forEach((docs) => {
        //         let d = docs.data()
        //         let scores = d.scores
        //         let c = d.class
        //         console.log(scores)
                
        //         if (c == "class1") {
        //             class1.push(scores.get(String(subject)).get(String(topic)))
        //         }

        //         else {
        //             class2.push(scores.get(String(subject)).get(String(topic)))
        //         }
                
        //     })

        //     let traces = [
        //         {
        //             y: class1,
        //             type: "box",
        //             name: "Class 1"
        //         },
        //         {
        //             y: class2,
        //             type: "box",
        //             name: "Class 2"
        //         }
        //     ];

        //     let layout = {
        //         title: String(subject) + " " + String(topic) + " Statistics",
        //     };

        //     let config = { responsive: true };
            
        //     Plotly.newPlot("plot", traces, layout, config);
        // }
        // getStats()
    }
}
</script>

<style scoped>
#main {
    margin-top: 60px;
    margin-left: 175px;
    display: inline-block;
    width: 800px;
}

#header {
    float: left;
}

#top {
    border-bottom: 1px solid grey;
}

#choices {
    display: inline-block;
    margin-top: 20px;
    margin-left: -150px;
    width: 400px;
}

#test {
    float: left;
}
</style>