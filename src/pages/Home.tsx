import Post from "../components/Post";

function Home() {
  const postList = Array.from({ length: 9 }); // 더미, 테스트용
  return (
    <>
      {postList.map((_, i) => (
        <Post key={i} />
      ))}
    </>
  );
}

export default Home;
