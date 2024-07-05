import config from '../config/config';

 

export const fetchData = async () => {
  // Mock JSON data
  const mockData = {
    user: {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com"
    },
    posts: [
      { id: 1, title: "Post 1", content: "This is the content of post 1." },
      { id: 2, title: "Post 2", content: "This is the content of post 2." }
    ]
  };

  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000);
  });
};

// export const fetchData = async () => {
//   const response = await fetch(`https://api.example.com/data?token=${config.API_TOKEN}`);
//   const data = await response.json();
//   return data;
// };


