const clock = document.getElementById('clock')
setInterval(() => {
    let date = new Date() // we have to add this code inside the function body.
    clock.innerHTML = date.toLocaleString('en-IN', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    })
}, 1000 )