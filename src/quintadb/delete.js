import axios from "axios";
import { QUINTA_API, QUINTA_DB_ID } from "./config";
export const deleteEntry = (entry_id) => {
  axios
    .delete(
      `https://quintadb.com/apps/${QUINTA_DB_ID}/dtypes/${entry_id}.json?rest_api_key=${QUINTA_API}`
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
