# React Router의 커스텀 훅들

## useParams()

- url로 전달 받은 변수를 가져올 수 있는 커스텀 훅
- Route에서 path 끝에 /:id를 붙이면 id를 변수로 쓸 수 있음

```jsx
// Route를 다음과 같이 path를 설정
<Route path="/diary/:id" element={<Diary />} />;

// Diary 컴포넌트에는 다음과 같이 하면 id를 받을 수 있음
const { id } = useParams();

// 만약 url을 /diary/1로 접속하면 id의 값은 1이 되는 것임
```

## useSearchParams()

- url의 쿼리 스트링을 받아올 수 있는 커스텀 훅
- 쿼리스트링 : url의 물음표 뒷쪽 변수들
  - /diary?id=1&mode=dark
  - id=1 과 mode=dark가 쿼리스트링의 변수들이다.
- useParams()와 다르게 따로 Route에 path를 설정 안해줘도 됨

```jsx
// useSearchParams() 사용하는 법
// 배열로 리턴되며, 첫 번째 인자는 쿼리스트링의 변수들을 모아놓은 것이고,
// 두 번째 인자는 변수를 변경할 수 있는 함수다
const [searchParams, setSearchParams] = useSearchParams();

// 변수 가져오는 법
// 쿼리스트링은 ?id=1&mode=dark
const id = searchParams.get("id"); // 1
const mode = searchParams.get("mode"); // 'dark'

// set 함수 사용 법
// 아래 함수를 사용하면 ?who=woojk 형태로 바뀐다.
setSearchParams({ who: "woojk" });
```

## useNavigate()

- 페이지를 이동시키는 커스텀 훅

```jsx
const navigate = useNavigate();

// /home으로 이동
navigate("/home");

// 뒤로가기
navigate(-1);
```
