import API from "./api.config";


async function login_by_phone(payload: any) {
  try {
    const res = await API.post("/login_by_phone", payload);
    return res.data;
  } catch (err: any) {
    console.error(err);
    return err?.response?.data;
  }
}
async function login_by_email(payload: any) {
  try {
    const res = await API.post("/login_by_email", payload);
    return res.data;
  } catch (err: any) {
    console.error(err);
    return err?.response?.data;
  }
}
async function like_unlike_post(postId: any) {
  try {
    const res = await API.post(`/posts/${postId}/like-unlike`);
    return res.data;
  } catch (err: any) {
    console.error(err);
    return err?.response?.data;
  }
}
async function get_posts() {
  try {
    const res = await API.get("/home/posts");
    return res.data;
  } catch (err: any) {
    console.error(err);
    return err?.response?.data;
  }
}


export default {
  login_by_phone,
  login_by_email,
  get_posts,
  like_unlike_post
};
