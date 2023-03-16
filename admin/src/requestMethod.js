import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjhkODI2NWI0NTNlNjI3YjJiNDQ5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzQxNDA3MCwiZXhwIjoxNjc3NjczMjcwfQ.LZINZop8vuc3cRvwMw7gezYAF5L2g2ZiQdoN3Bx0GcM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
