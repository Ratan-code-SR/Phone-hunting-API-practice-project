// api calling
const searchButton = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=phone`)
    const data = await res.json();
    // console.log(data);
    const phones = data.data;
    // console.log(phones);
    displayPhone(phones)
}


const displayPhone = (phones) => {
    const displayContainer = document.getElementById("display-container");

    phones.forEach(phones => {
        const div = document.createElement("div");
        div.innerHTML = `
        
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="${phones.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phones.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
        `
        displayContainer.appendChild(div)
        // console.log(phones);
    });




}