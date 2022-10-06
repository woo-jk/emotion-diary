const EmotionItem = ({
  emotion_id,
  emotion_img,
  emotion_description,
  onClick,
  isSelected,
}) => {
  return (
    <div
      // onClick 프롭스는 에디터 컴포넌트의 상태를 바꾸는 함수
      onClick={() => onClick(emotion_id)}
      // isSelected는 이 아이템이 선택 됐는지 안됐는지 넘겨주는 프롭스다.
      className={[
        "EmotionItem",
        isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`,
      ].join(" ")}
    >
      <img src={emotion_img} alt={emotion_description} />
      <span>{emotion_description}</span>
    </div>
  );
};

export default EmotionItem;
