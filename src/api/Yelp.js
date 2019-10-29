import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    //Yelp setting
    Authorization:
      "Bearer 7jFFPMqk3w_IpC4FQ9K73WAl9-LXA8Ivz3KU9tg2RjZWKgAf1HQbx6kNxJ0tP8h2koh3tFxUuhNGK6zXuffQzx8czFKSmGP4Jcg_v4JoKb4_6gwk5OC8R2WxvQKxXXYx"
  }
});
