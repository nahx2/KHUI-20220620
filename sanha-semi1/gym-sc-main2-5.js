const firebaseConfig = {
  apiKey: "AIzaSyDtVA_IYoYtVpeDuUF_UmKLFwOlg44CAic",
  authDomain: "terrgym-demo-bac70.firebaseapp.com",
  databaseURL:
    "https://terrgym-demo-bac70-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "terrgym-demo-bac70",
  storageBucket: "terrgym-demo-bac70.appspot.com",
  messagingSenderId: "679211028162",
  appId: "1:679211028162:web:d6839267c5c25146ccb55b",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const postDB = db.collection("ntc");
let query = postDB.orderBy("write_date", "desc");
const unit = 3;

// query // 데이터베이스에서 날짜 값 기준 내림차순으로 데이터를 정렬하였다.
//   .limit(unit) // 정렬한 데이터중 3개의 데이터만 선택하고
//   .get() // 가져온다.
//   .then((snapshot) => {
//     // firestore 서버에서 비동기로 3개의 데이터를 가져옴.

//     let post_list = [];

//     snapshot.forEach((item) => {
//       let _post = item.data();

//       post_list.push(_post);
//     });
//     dispatch(setPost(post_list));
//   });

//   const initialState = { 
//     list: [], // 최종적으로 담을 배열.
//     paging : { start: null, next: null, size: 3 },
//     // start : 시작점 정보, next: 다음 목록에 대한 정보, size: 몇개씩 가져올 것인지.
//     is_loading: false, // paging으로 목록을 가지고 오는 중인지 아닌지에 대한 여부.
//   }

//   const initialState = {
//     paging : { start: null, next: null,  size: 3 },
// }

const getPostFB = (start = null,  size = 3) => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection('post');
    
    //  let query = postDB.orderBy('insert_dt', 'desc').limit(size + 1);

     let query = postDB.orderBy('insert_dt', 'desc');

// 이 코드를 설정해주지 않으면 처음 출력한 3개의 데이터만 paging할때 동일한 데이터가 3개씩 출력된다.
if(start){ // start에 값이 있으면 
  query = query.startAt(start);
  // query 즉, 파이어스토어 저장된 날짜순으로 정렬된 데이터 중에
  // start로 정의된 데이터를 시작으로 마지막 까지의 데이터들을 query에 저장한다.
}

query
	.limit(size + 1) // query에 담긴 데이터들을 4개까지만 불러서
	.get() // 파이어스토어에서 가져온다.
	.then((docs) => { // 데이터 결과 값들을 넘겨받는다.

  let post_list = [];
  docs.forEach((doc) => {
   let _post = doc.data();
    
    })
  })

  query
	.limit(size + 1) 
	.get() 
	.then((docs) => {
  
 let post_list = []; 
  
 let paging = { 
   size: size,
   start: docs.docs[0], // document들 안에서 가장 첫번째 것을 가져온다.
   next: docs.docs.length === size + 1 ? docs.docs[docs.docs.length - 1] : null 
   // 가져오는 데이터 갯수를 4개로 지정했는데 3개 밖에 없을 수 있다, 
   // 이때 next가 지정한 데이터 갯수(4) 가 아니라면 null을 넣어준다. 다음(next)이 없다는 뜻.
 }
})