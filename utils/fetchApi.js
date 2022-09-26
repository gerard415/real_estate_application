
import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '4f83a3bb3dmsh3343ddb19eec474p1d8e6djsn7abee3a9d25a' ,
    },
  });
    
  return data; 
}