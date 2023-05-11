import axios from 'axios';
import {QUINTA_API, FIELDS, ENTITY_ID, QUINTA_DB_ID} from './config'
export const createEntry = (title, text) => {
const data = {
    values: {
      entity_id: ENTITY_ID,
    },
  };
  data.values[FIELDS['title']] = title;
  data.values[FIELDS["text"]] = text;
  axios
    .post(`https://quintadb.com/apps/${QUINTA_DB_ID}/dtypes.json?rest_api_key=${QUINTA_API}`, data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}