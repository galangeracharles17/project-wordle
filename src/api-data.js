import axios from 'axios';

export const handleData = async (answer, setResolve, setReject) => {
  const baseURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${answer}`;

  try {
    const request = await axios.get(baseURL);
    const data = request.data[0].meanings[0].definitions[0].definition;
    setResolve(data);
    // console.log(data);
  } catch (reject) {
    console.log(`Error Timeout ${reject}`);
    setReject('Meaning is not available. Sorry :<');
  }
};
