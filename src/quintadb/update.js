import axios from "axios";
import { QUINTA_API, FIELDS, ENTITY_ID, QUINTA_DB_ID } from "./config";
export const updateEntry = (entry_id, title, text) => {
  console.log("Saving to DB");
  const data = {
    values: {
      entity_id: ENTITY_ID,
    },
  };
  data.values[FIELDS["title"]] = title;
  data.values[FIELDS["text"]] = text;
  return axios
    .put(
      `https://quintadb.com/apps/${QUINTA_DB_ID}/dtypes/${entry_id}.json?rest_api_key=${QUINTA_API}`,
      data
    )
    .catch((error) => {
      console.error(error);
    });
};
