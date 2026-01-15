async function fetchData<T = any>(url: string): Promise<T> {
  const response = await fetch(url);
  const data = await response.json();
  return data as T;
}

async function fetchDefault() {
  const date = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
  console.log(date);
}

fetchDefault();

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function fetchPost() {
  const post = await fetchData<Post>(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  console.log(post);
}

fetchPost();
