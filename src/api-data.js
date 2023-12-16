import axios from 'axios';

export const handleData = async (answer, setResolve, setReject, setStat) => {
  const baseURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${answer}`;

  try {
    setStat('loading');
    const request = await axios.get(baseURL);
    const data = request?.data[0]?.meanings[0]?.definitions[0]?.definition;
    setStat(data !== undefined || null ? 'success' : 'undefined');
    setResolve(data);
    // console.log(data);
  } catch (reject) {
    console.log(`Error Timeout ${reject}`);
    setStat('error');
    setReject('Something went wrong');
  }
};
