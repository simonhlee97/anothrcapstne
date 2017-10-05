<template>
    <div id="add-blog">
        <h2>Post a Sports Story</h2>
        <form v-if="!submitted">
            <label>Story Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Story Content:</label>
            <textarea v-model.lazy.trim="blog.content"></textarea>
            <div id="checkboxes">
                <p>Categories:</p>
                <label>NCAA Football</label>
                <input type="checkbox" value="collFootball" v-model="blog.categories" />
                <label>NCAA Basketball</label>
                <input type="checkbox" value="collBasketball" v-model="blog.categories" />
                <label>NBA</label>
                <input type="checkbox" value="nba" v-model="blog.categories" />
                <label>MLB</label>
                <input type="checkbox" value="mlb" v-model="blog.categories" />
                <label>NFL</label>
                <input type="checkbox" value="nfl" v-model="blog.categories" />
                <label>Tennis</label>
                <input type="checkbox" value="tennis" v-model="blog.categories" />
                <label>Golf</label>
                <input type="checkbox" value="golf" v-model="blog.categories" />
            </div>
            <label>Author:</label>
            <select v-model="blog.author">
                <option v-for="author in authors">{{ author }}</option>
            </select>
            <hr />
            <button v-on:click.prevent="post">Publish</button>
        </form>
        <div v-if="submitted">
            <h3>Congrats! Your story has been published.</h3>
        </div>
    </div>
</template>

<script>
// Imports

export default {
    data () {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                author: ''
            },
            authors: ['Simon', 'John Walker', 'Rex Do', 'Dr Evil', 'Homer Simpson'],
            submitted: false
        }
    },
    methods: {
        post: function(){
            this.$http.post('https://leecapstone-12830.firebaseio.com/posts.json', this.blog).then(function(data){
                console.log(data);
                this.submitted = true;
            });
        }
    }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 700px;
    padding: 20px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea, select{
    display: block;
    width: 100%;
    padding: 8px;
}
textarea{
    height:200px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
    margin-top: 0;
}
hr{
    display: none;
}
button{
    display: block;
    margin: 20px 0;
    background: crimson;
    color: #fff;
    border: 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
}
</style>
