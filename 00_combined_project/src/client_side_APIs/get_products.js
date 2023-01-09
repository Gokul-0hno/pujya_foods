export default async function getProducts() {
    const endPoint = "https://silly-begonia-aeede0.netlify.app/.netlify/functions/products"
    fetch(endPoint)
    .then((response) => response.json())
    .then((data) => console.log(data));
}