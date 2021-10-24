const commentsNode = $("#comments");

const commentsurl = "https://jsonplaceholder.typicode.com/comments";

let comments = [];

$.get(commentsurl, (response) => {
    comments = response;
    console.log(comments)
    comments.forEach((comment) => {
        commentsNode.append(`<div class="comments">
            <h3>${comment.name}</h3> 
            <h4> ${comment.body}</h4>
        </div> `
        )
    })
});