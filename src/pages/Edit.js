import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);

  const mode = searchParams.get("mode");
  console.log(mode);

  return (
    <div>
      <h2>Edit</h2>
      <p>일기 수정 페이지입니다.</p>
      <button onClick={() => setSearchParams({ who: "woo-jk" })}>
        쿼리스트링 바꾸기
      </button>
      <button onClick={() => navigate("/home")}>홈으로 가기</button>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
};

export default Edit;
