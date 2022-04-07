let BASE_URL = "";
const TIMEOUT = 10000;

if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://httpbin.org";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "https://api.github.com";
} else {
  BASE_URL = "http://localhost:3000";
}

export { BASE_URL, TIMEOUT };
