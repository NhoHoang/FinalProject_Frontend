import Api from "./Api";

const url = "/post";

const getListPost = () => {
  return Api.get(url);
};

const getPostById = (id) => {
  return Api.get(`${url}/${id}`);
};

const DonatePostApi  = {getListPost, getPostById };
export default DonatePostApi ;

