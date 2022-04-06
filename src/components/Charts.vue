<template>
    <div id="main">
        <div id="top">
            <div id="header"><h1>Statistics</h1></div>
            <div id="choices">
                <div id="levelTitle">
                    <h2> Student Level: </h2>
                    <select v-model="level">
                        <option value="" disabled selected>Select Student Level</option>
                        <option>Primary 5</option>
                        <option>Primary 6</option>             
                    </select>

                <select v-model="subject">
                    <option value="" disabled selected>Select Subject</option>
                    <option>Maths</option>
                    <option>Science</option>
                    <option>English</option>
                </select>
                <select v-model="chapter">
                    <option value="" disabled selected>Select Chapter</option>
                    <option>Chapter 1</option>
                    <option>Chapter 2</option>
                    <option>Chapter 3</option>
                    <option>Chapter 4</option>
                    <option>Chapter 5</option>
                    <option>Chapter 6</option>     
                    <option>Chapter 7</option>
                    <option>Chapter 8</option>                    
                </select><br><br>
                <button id="getstats" @click="getStats(level, subject, chapter)">Get Stats</button><br><br>
            </div>
            </div>
        </div>
        <div v-if="!loading" id="plot"></div>
    </div>
</template>

<script>
import Plotly from 'plotly.js-dist-min'
import firebaseApp from "../firebase.js"
import { getFirestore, collection, getDocs } from "firebase/firestore"
const db = getFirestore(firebaseApp)


export default{
    // mounted() {
        // async function foo() {
        //     var y0 = [1,2,3,4,5];
        //     var y1 = [6,7,8,9,10];

        //     let traces = [
        //         {
        //             y: y0,
        //             type: "box",
        //             name: "Class 1"
        //         },
        //         {
        //             y: y1,
        //             type: "box",
        //             name: "Class 2"
        //         }
        //     ];

        //     let layout = {
        //         title: "Sample Box Plot",
        //     };

        //     let config = { respoinsive: true };
            
        //     Plotly.newPlot("plot", traces, layout, config);
            
        // }
        // foo()
    data() {
        return {

        };
    },
    methods: {
        async getStats(level, subject, chapter) {
            let docRef = await getDocs(collection(db, "Students"))
            let class1 = []
            let class2 = []

            docRef.forEach((docs) => {
                var result;
                var scores;
                let d = docs.data()
                if (d.role == "P5Student") {
                    if (subject == "Maths") {
                        scores = d.scores.math
                        if (chapter == "Chapter 1") {
                            result = scores.Chap1
                        } if (chapter == "Chapter 2") {
                            result = scores.Chap2
                        } if (chapter == "Chapter 3") {
                            result = scores.Chap3
                        }
                    } if (subject == "English") {
                         scores = d.scores.eng
                        if (chapter == "Chapter 1") {
                            result = scores.Chap1
                        } if (chapter == "Chapter 2") {
                            result = scores.Chap2
                        } if (chapter == "Chapter 3") {
                            result = scores.Chap3
                        }
                    } if (subject == "Science") {
                         scores = d.scores.sci
                        if (chapter == "Chapter 1") {
                            result = scores.Chap1
                        } if (chapter == "Chapter 2") {
                            result = scores.Chap2
                        } if (chapter == "Chapter 3") {
                            result = scores.Chap3
                        }
                    }
                }  if (d.role == "P6Student") {
                    if (subject == "Maths") {
                        scores = d.scores.math
                        if (chapter == "Chapter 1") {
                            result = scores.Chap1
                        } if (chapter == "Chapter 2") {
                            result = scores.Chap2
                        } if (chapter == "Chapter 3") {
                            result = scores.Chap3
                        }
        
                    } if (subject == "English") {
                         scores = d.scores.eng
                        if (chapter == "Chapter 1") {
                            result = scores.Chap1
                        } if (chapter == "Chapter 2") {
                            result = scores.Chap2
                        } if (chapter == "Chapter 3") {
                            result = scores.Chap3
                        }
                    } if (subject == "Science") {
                         scores = d.scores.sci
                        if (chapter == "Chapter 1") {
                            result = scores.Chap1
                        } if (chapter == "Chapter 2") {
                            result = scores.Chap2
                        } if (chapter == "Chapter 3") {
                            result = scores.Chap3
                        }
                    }
                }
                class1.push(result)
            })

            let traces = [
                {
                    y: class1,
                    type: "box",
                    name: level + " " + subject + " " + chapter,
                },
                {
                    y: class2,
                    type: "box",
                    name: "Class 2"
                }
            ];

            let layout = {
                title: String(level) + " " + String(subject) + " " + String(chapter) + " Statistics",
            };

            let config = { responsive: true };
            Plotly.newPlot("plot", traces, layout, config);
        }
    }
    // }
}
</script>

<style scoped>
#getstats {
    background-color: #00bcd4;
    color: white;
    border: none;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    transition-duration: 0.1s;
    font-size: 18px;
}
#plot {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    border: 1px black solid;
}

#getstats:hover {
    background-color: #fb8332
}
.select, .button {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    display: inline-block;
}
#levelTitle {
    margin: -10px 0px 0px 0px;
}
#main {
    margin-top: 50px;
    margin-left: 185px;
    display: inline-block;
    width: 700px;
}

h1 {
    font-size: 40px;
}

#choices {
    font-size: 20px;
    display: inline-block;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    width: 400px;
}

</style>