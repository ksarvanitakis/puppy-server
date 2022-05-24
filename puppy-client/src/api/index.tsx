import axios from "axios"


const base = "http://localhost:3001"

export const getPuppies = async () => {
    const url = `${base}/api/puppies`;
    const res = await axios.get(url);
    return res.data;
  };
