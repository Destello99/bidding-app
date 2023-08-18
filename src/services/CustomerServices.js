import httpClient from "../http-comman"
const create = (data) => {
    // console.log("in create");
    // alert('in create')
    return httpClient.post('', data);
    // return ""
  };

  export default {create}