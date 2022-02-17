import Api from "./Api";

const url = "/post";

const getListPost = () => {
  return Api.get(url);
};

const DonatePostApi = { getListPost };

export default DonatePostApi;
