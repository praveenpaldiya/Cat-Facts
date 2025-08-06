let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let fact = await getFacts();
    // console.log(fact);
    p = document.querySelector("#facts");
    p.innerText = fact;
});
let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("Error - ", e);
        return "No fact found";
    }
};