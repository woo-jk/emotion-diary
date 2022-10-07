import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const diaryList = useContext(DiaryStateContext);
  const [originData, setOriginData] = useState();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      // console.log(targetDiary);
      // console.log(new Date(targetDiary.date).toISOString());
      // console.log(new Date(targetDiary.date).toLocaleString());
      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  return (
    <div>
      <h2>
        {originData && <DiaryEditor isEdit={true} originData={originData} />}
      </h2>
    </div>
  );
};

export default Edit;
