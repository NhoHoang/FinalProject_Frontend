import Api from "./Api";

const url = "/donator/donatorpost";

const create = (
  fullName,
  email,
  address,
  phone,
  post,
  moneyDonation,
  message
) => {
  const body = {
    fullName: fullName,
    email: email,
    address: address,
    phone: phone,
    post: post,
    moneyDonation: moneyDonation,
    message: message,
  };
  return Api.post(url, body);
};

const donatorApi = { create };
export default donatorApi;
