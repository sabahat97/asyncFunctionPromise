let passedPromise = new Promise ((result , reject) => {
    return result ("Do Preparation..."), reject ("Passed");
});

console.log("Exam is Coming Soon!")

setTimeout(() => {
    async function exam(){
        let promise = await passedPromise
        console.log(promise)
}
exam()
}, 3000);
