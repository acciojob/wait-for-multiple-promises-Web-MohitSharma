//your JS code here. If required.
let output = document.getElementById("output")


let promise1 = new Promise((resolve , reject)=>{
	setTimeout(()=>{
		resolve(2)
	},2000)
})

let promise2 = new Promise((resolve , reject)=>{
	setTimeout(()=>{
		resolve(3)
	},3000)
})

let promise3 = new Promise((resolve , reject)=>{
	setTimeout(()=>{
		resolve(1)
	},1000)
})


Promise.all([promise1 , promise2, promise3]).then((data)=>{
	output.innerHTML = `
        <tr>
            <td>Promise 1</td>
            <td>${data[0]}</td>
        </tr>

        <tr>
            <td>Promise 2</td>
            <td>${data[1]}</td>
        </tr>

        <tr>
            <td>Promise 3</td>
            <td>${data[2]}</td>
        </tr>

        <tr>
            <td>Total</td>
            <td>${Math.max(...data)}</td>
        </tr>
    `;

})





