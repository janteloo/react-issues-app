import axios from "axios";

const GITHUB_ISSUES_URL = "https://api.github.com/search/issues";

export const fetchIssues = async (filter) => {
  const response = {
    isSuccess: false,
    errorMessage: "",
    data: [],
  };
  try {
    const apiResponse = await axios.get(getUrlWithFilters(filter));
    const { items } = apiResponse.data;
    return { ...response, isSuccess: true, data: items };
  } catch (error) {
    let errorMessage = error.message;
    if (error.response) {
      const { data } = error.response;
      errorMessage = data.message;
    }
    return { ...response, isSuccess: false, errorMessage };
  }
};

const getUrlWithFilters = (filter) => {
  return `${GITHUB_ISSUES_URL}?q=repo:facebook/react state:open ${filter}&per_page=10`;
};
