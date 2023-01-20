import axios from "axios";
export const signup = async (
  firstname,
  lastname,
  username,
  email,
  timezone,
  password,
  talentSignup
) => {
  try {
    console.log("j");
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/signup`,
      {
        firstname,
        lastname,
        username,
        email,
        timezone,
        password,
        talentSignup,
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
