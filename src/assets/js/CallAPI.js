import axios from "axios";

export  async function fetchProduct() {
    try {
        let {data} = await axios.get('http://localhost:3001/products');
        return data.reverse();
    }catch(error) {
        console.log(error);
    }
}