import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-hot-toast";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();

//구글 로그인
export function googleLogin() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      // console.log(user);
    })
    .catch(console.error);
}
//Email 회원가입
export const signup = async (name: string, email: string, password: string) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, { displayName: name }); // 가입한 유저 정보에 이름을 저장한다.
      // console.log(user);
      toast.success("회원가입이 완료 되었습니다.");
    })
    .catch((error) => {
      const errorCode = error.code;

      switch (errorCode) {
        case "auth/weak-password":
          toast.error("비밀번호는 6자리 이상이어야 합니다.");
          break;
        case "auth/invalid-email":
          toast.error("잘못된 이메일 형식입니다.");
          break;
        case "auth/email-already-in-use":
          toast.error("이미 사용중인 이메일 입니다.");
          break;
      }
    });
};

//Email 로그인
export const EmailLogin = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      toast.success("로그인 되었습니다!");
    })
    .catch((error) => {
      const errorCode = error.code;

      switch (errorCode) {
        case "auth/wrong-password":
          toast.error("비밀번호를 확인 해 주세요");
          break;
        case "auth/user-not-found":
          toast.error("존재하지 않는 사용자 입니다.");
          break;
      }
    });
};

//로그아웃
export const logout = () => {
  signOut(auth)
    .then(() => null)
    .then(() => {
      toast.success("로그아웃 되었습니다!");
    });
};

//상태변경 감지
export const onUserStateChange = (callback: any) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};
