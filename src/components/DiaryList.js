import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";
import MyButton from "./MyButton";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const filterOptionList = [
  { value: "all", name: "모두 표시" },
  { value: "good", name: "좋은 감정만 표시" },
  { value: "bad", name: "안좋은 감정만 표시" },
];

const ControlMenu = React.memo(({ value, onChange, optionList }) => {
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
});

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");

  const getProcessedDiaryList = () => {
    // 리스트 깊은복사
    const copyList = JSON.parse(JSON.stringify(diaryList));
    // 필터 메뉴에 따른 필터링 과정
    const filteredList =
      filter === "all"
        ? copyList
        : copyList.filter((it) =>
            filter === "good" ? it.emotion <= 3 : it.emotion > 3
          );
    // 정렬 메뉴에 따른 정렬 과정
    const sortedList = filteredList.sort((a, b) =>
      sortType === "latest"
        ? Number(b.date) - Number(a.date)
        : Number(a.date) - Number(b.date)
    );
    return sortedList;
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </div>
        <div className="right_col">
          <MyButton
            type={"positive"}
            text={"새 일기 쓰기"}
            onClick={() => navigate("/new")}
          />
        </div>
      </div>

      {getProcessedDiaryList().map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
