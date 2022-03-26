<template>
    <div id="main">
        <div id="header"><h1>Math5A</h1></div>
        <div id="content">
            <table>
                <tr>
                    <th>Student Name</th>
                    <th>Score</th>
                    <th>Contact No.</th>
                    <th>Email Address</th>
                </tr>
                <tr>
                    <td>StudentA</td>
                    <td>45</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>StudentB</td>
                    <td>43</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>StudentC</td>
                    <td>40</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>StudentD</td>
                    <td>37</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>StudentE</td>
                    <td>20</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
#main {
    position: absolute;
    left: 350px;
    top: 90px;
    display: inline-block;
}

#header {
    float: left;
    margin-bottom: 20px;
}

h1 {
    font-size: 40px;
}

th, tr {
    font-size: 20px;
    font-weight: bold;
}

tr {
    height: 100px;
}

table {
    width: 1500px;
}

table, th, td {
    border-bottom: 1px solid black;
    border-collapse: collapse;
}

a {
    color: #00bcd4;
}

a:visited, a:link, a:active {
    text-decoration: none;
}

#content {
    float: left;
    margin-top: -10px;
    max-height: 510px;
    max-width: 900px;
    overflow-y: scroll;
    overflow-x: scroll;
    background-color: #ececec;
}

</style>