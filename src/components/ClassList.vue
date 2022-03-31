<template>
    <div id="main">
        <div id="header"><h1>Home</h1></div>
        <div id="content">
            <table>
                <tr>
                    <th>Class</th>
                    <th>No. of Students</th>
                    <th>Timetable</th>
                </tr>
                <tr>
                    <td><a href="/teacherscs">Math5A</a></td>
                    <td>16</td>
                    <td>Monday 10:00-12:00</td>
                </tr>
                <tr>
                    <td><a href="/teacherscs">Math5B</a></td>
                    <td>24</td>
                    <td>Monday 14:00-16:00</td>
                </tr>
                <tr>
                    <td><a href="/teacherscs">Math6A</a></td>
                    <td>19</td>
                    <td>Tuesday 10:00-12:00</td>
                </tr>
                <tr>
                    <td><a href="/teacherscs">Math6B</a></td>
                    <td>25</td>
                    <td>Tuesday 12:00-14:00</td>
                </tr>
                <tr>
                    <td><a href="/teacherscs">Math6C</a></td>
                    <td>22</td>
                    <td>Thursday 14:00-16:00</td>
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
    display: inline-block;
    width: 875px;
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
    background-color: #ececec;
}
</style>