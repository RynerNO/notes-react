import axios from 'axios';
import {QUINTA_API, QUINTA_DB_ID, QUINTA_APP_ID} from './config'
export const fetchData = async () => {
    try {
    
      const response = await axios.get(
        `https://quintadb.com/apps/${QUINTA_DB_ID}/dtypes/entity/${QUINTA_APP_ID}.json?rest_api_key=${QUINTA_API}&per_page=200`
      );

        return response.data.records;
      
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };