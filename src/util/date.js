// 날짜를 문자열 형태(yyyy-mm-dd)로 바꾸는 함수
export const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};
