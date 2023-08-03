import React, { useState } from "react";
import LoginInput from "../components/Login/LoginInput";
import LoginUptions from "../components/Login/LoginUption";
import ButtonLg from "../components/UI/ButtonLg";
import Card from "../components/UI/Card";
import { ReactComponent as Banner } from "../components/UI/Banner.svg";
const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (input) => {
    setEmail(input.target.value);
  };
  const changePassword = (input) => {
    setPassword(input.target.value);
  };

  const isEmailValid = (email) => {
    if (email.includes("@")) {
      console.log("email is correct");
      return true;
    } else return false;
  };
  const isPasswordValid = (password) => {
    if (password.length >= 8) {
      console.log("password is correct");

      return true;
    } else return false;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (isEmailValid(email) && isPasswordValid(password)) {
      props.setLoggedIn(true);
      localStorage.setItem("loggedIn", "1");
    }
  };
  // const getInput = (input) => {
  //   return input;
  // };
  return (
    <Card className="bg-orange flex center login-modal">
      <Banner />
      <div className="container padding">
        <h1 className="heading-primary">
          Welcome to <span className="strong">GitHub Checker</span>
        </h1>
        <p className="mb-40">
          Let’s check some <span className="st  rong">GitHub users</span>
        </p>
        <div className="flex gap-40 center mb-10">
          <p className="link link-active">Sign in</p>
          <p className="link">Sign up</p>
        </div>
        <div className="flex-v gap-15">
          <LoginUptions
            logo={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.6858 2.99596C13.0237 2.95796 10.3398 3.70037 8.0003 5.26347C2.65292 8.83657 0.564542 15.7222 3.02569 21.6639C5.48681 27.6055 11.8294 30.9947 18.137 29.74C24.4446 28.4853 29.0081 22.9252 29.0081 16.4939H29.0021V14.9939H17.0021V18.9939H20.0021H23.0021H24.8224C23.8934 22.4755 21.0645 25.223 17.3849 25.9549C12.8596 26.855 8.35572 24.448 6.59 20.1853C4.82426 15.9224 6.30628 11.0359 10.1427 8.47246C13.9792 5.90906 19.0598 6.41103 22.3224 9.67363L25.0529 6.94511C22.7791 4.67131 19.8507 3.35845 16.8244 3.06035C16.4461 3.02335 16.0662 3.00096 15.6858 2.99596Z"
                  fill="#EA4335"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.3046 19.4026L3.09952 21.8206C5.6076 27.6626 11.886 30.9839 18.1366 29.7405C21.0259 29.1658 23.5413 27.6806 25.4276 25.6293L22.4062 23.2133C21.0826 24.5733 19.3633 25.5619 17.3847 25.9555C12.8593 26.8556 8.35547 24.4486 6.58975 20.1859C6.48257 19.9272 6.38803 19.6653 6.3046 19.4026Z"
                  fill="#34A853"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.49554 8.67194C1.87157 12.3749 1.20844 17.2767 3.02569 21.6639C3.06729 21.7643 3.15377 21.9628 3.15377 21.9628C4.50772 21.1811 5.50772 20.4944 6.45984 19.8466C6.41684 19.7322 6.37264 19.6117 6.34378 19.5247C5.3778 16.6167 5.8631 13.4944 7.52737 11.0574C5.50772 9.49443 5.50772 9.49444 4.49554 8.67194Z"
                  fill="#FBBC05"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.0019 14.9944V18.9944H20.0019H23.0019H24.8222C24.3927 20.6038 23.5439 22.0442 22.4062 23.2133L25.4276 25.6293C27.6595 23.2023 29.0077 19.9798 29.0077 16.4944H29.0017V14.9944H17.0019Z"
                  fill="#4788F4"
                />
              </svg>
            }
          >
            Sign in with Google
          </LoginUptions>
          <LoginUptions
            logo={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <g clipPath="url(#clip0_2_347)">
                  <path
                    d="M15 29.6484C23.0901 29.6484 29.6484 23.0901 29.6484 15C29.6484 6.90989 23.0901 0.351562 15 0.351562C6.90989 0.351562 0.351562 6.90989 0.351562 15C0.351562 23.0901 6.90989 29.6484 15 29.6484Z"
                    fill="#2D5FAC"
                  />
                  <path
                    d="M16.002 19.8926C16.002 18.6621 16.0078 17.4258 15.9961 16.1953C15.9961 16.0137 16.0488 15.9609 16.2305 15.9609C17.0566 15.9727 17.877 15.9609 18.7031 15.9668C18.8906 15.9668 18.9668 15.9023 18.9727 15.7207C19.002 14.9355 19.0254 14.1504 19.0664 13.3652C19.0781 13.1426 19.002 13.0723 18.7852 13.0781C17.9297 13.0898 17.0801 13.0781 16.2246 13.084C16.0547 13.084 15.9902 13.043 15.9961 12.8613C16.0078 12.334 15.9961 11.8125 16.002 11.2852C16.002 11.0449 16.0195 10.8047 16.043 10.5703C16.084 10.1895 16.2773 9.94336 16.6582 9.87891C17.0273 9.82031 17.4082 9.81445 17.7891 9.80273C18.123 9.79102 18.457 9.81445 18.7969 9.80859C18.9082 9.80859 19.0137 9.79101 19.0195 9.63281C19.0312 8.85351 19.0488 8.07422 19.0547 7.29492C19.0547 7.23633 18.9785 7.14844 18.9141 7.125C18.8262 7.08984 18.7148 7.08398 18.6152 7.07812C18.1934 7.06055 17.7715 7.04297 17.3496 7.02539C16.6699 6.99609 15.9961 7.04297 15.3457 7.25977C13.9043 7.74023 13.0312 8.93555 12.9844 10.3945C12.9551 11.1973 12.9609 12 12.9609 12.8027C12.9609 13.0078 12.9082 13.084 12.6914 13.0781C12.1758 13.0605 11.6543 13.0781 11.1387 13.0723C10.957 13.0723 10.875 13.1191 10.875 13.3242C10.8867 14.127 10.8809 14.9297 10.875 15.7324C10.875 15.9023 10.9277 15.9668 11.1035 15.9609C11.584 15.9551 12.0645 15.9551 12.5449 15.9609C12.9609 15.9668 12.9551 15.8789 12.9551 16.377C12.9551 18.7559 12.9551 21.1348 12.9551 23.5078C12.9551 23.8359 12.9551 23.8359 13.2773 23.8359C14.0918 23.8359 14.9121 23.8301 15.7266 23.8418C15.9434 23.8477 15.9961 23.7715 15.9961 23.5664C15.9961 22.3418 16.002 21.1172 16.002 19.8926Z"
                    fill="#221F03"
                  />
                  <path
                    d="M16.002 19.8926C16.002 21.1172 15.9961 22.3418 16.0078 23.5664C16.0078 23.7715 15.9551 23.8477 15.7383 23.8418C14.9238 23.8301 14.1035 23.8359 13.2891 23.8359C12.9668 23.8359 12.9668 23.8359 12.9668 23.5078C12.9668 21.1289 12.9668 18.75 12.9668 16.377C12.9668 15.8848 12.9727 15.9668 12.5566 15.9609C12.0762 15.9551 11.5957 15.9551 11.1152 15.9609C10.9395 15.9668 10.8867 15.9023 10.8867 15.7324C10.8926 14.9297 10.8926 14.127 10.8867 13.3242C10.8867 13.125 10.9688 13.0723 11.1504 13.0723C11.666 13.0781 12.1875 13.0664 12.7031 13.0781C12.9199 13.084 12.9727 13.002 12.9727 12.8027C12.9727 12 12.9668 11.1973 12.9961 10.3945C13.043 8.93555 13.9219 7.74023 15.3574 7.25977C16.0078 7.04297 16.6816 6.99609 17.3613 7.02539C17.7832 7.04297 18.2051 7.06055 18.627 7.07812C18.7266 7.08398 18.8379 7.08398 18.9258 7.125C18.9844 7.14844 19.0664 7.23633 19.0664 7.29492C19.0605 8.07422 19.043 8.85351 19.0312 9.63281C19.0312 9.79101 18.9199 9.80859 18.8086 9.80859C18.4746 9.80859 18.1348 9.79102 17.8008 9.80273C17.4258 9.81445 17.0449 9.81445 16.6699 9.87891C16.2891 9.94336 16.0957 10.1895 16.0547 10.5703C16.0312 10.8105 16.0137 11.0508 16.0137 11.2852C16.0078 11.8125 16.0195 12.334 16.0078 12.8613C16.002 13.043 16.0664 13.084 16.2363 13.084C17.0918 13.0781 17.9414 13.0898 18.7969 13.0781C19.0195 13.0781 19.0898 13.1426 19.0781 13.3652C19.0371 14.1504 19.0137 14.9355 18.9844 15.7207C18.9785 15.9023 18.9023 15.9668 18.7148 15.9668C17.8887 15.9551 17.0684 15.9668 16.2422 15.9609C16.0605 15.9609 16.0078 16.0137 16.0078 16.1953C16.002 17.4258 16.002 18.6562 16.002 19.8926Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_347">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
          >
            Sign in with facebook
          </LoginUptions>
          <p>or</p>
          <form onSubmit={submitHandler} className="flex-v gap-15 ">
            <LoginInput
              logo={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="23"
                  viewBox="0 0 30 23"
                  fill="none"
                >
                  <path
                    d="M30 5.85683L22.8416 11.1931V22.8416H27.8525C29.0238 22.8416 30 21.898 30 20.6941V5.85683Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M0 5.85683L7.12581 11.2256V22.8742H2.14751C0.976139 22.8742 0 21.9306 0 20.7267V5.85683Z"
                    fill="#1E88E5"
                  />
                  <path
                    d="M22.8416 2.27766L15 8.16703L7.15835 2.27766V11.1931L15 17.0824L22.8416 11.1931V2.27766Z"
                    fill="#E53935"
                  />
                  <path
                    d="M0 3.05857V5.85683L7.12581 11.2256V2.27766L4.91323 0.618221C4.39262 0.227765 3.74187 0 3.05857 0C1.36659 0 0 1.36659 0 3.05857Z"
                    fill="#C62828"
                  />
                  <path
                    d="M30 3.05857V5.85683L22.8416 11.1931V2.27766L25.0867 0.618221C25.6074 0.227765 26.2581 0 26.9414 0C28.6334 0 30 1.36659 30 3.05857Z"
                    fill="#FBC02D"
                  />
                </svg>
              }
              value={email}
              onChange={changeEmail}
              placeholder="example@email.com"
              type="email"
            />
            <LoginInput
              logo={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="30"
                  viewBox="0 0 25 30"
                  fill="none"
                >
                  <path
                    d="M22.6632 13.0113C22.7745 12.374 22.8359 11.7185 22.8359 11.0484C22.8359 4.95656 18.0229 0 12.1071 0C6.19107 0 1.37788 4.95656 1.37788 11.0484C1.37788 11.7185 1.43952 12.3735 1.55103 13.0113C0.619472 13.6062 0 14.6464 0 15.8344V26.6504C0 28.5004 1.49984 30 3.34938 30H20.8646C22.7136 30 24.2132 28.5004 24.2132 26.6504H24.2143V15.8344C24.2143 14.6466 23.5953 13.6062 22.6632 13.0113ZM13.585 22.4553V24.8058C13.585 25.6227 12.9233 26.2845 12.1066 26.2845C11.29 26.2845 10.6282 25.6227 10.6282 24.8058V22.4543C9.6799 21.9317 9.03667 20.9234 9.03667 19.7638C9.03667 18.0684 10.4112 16.6936 12.1071 16.6936C13.8031 16.6936 15.1779 18.0684 15.1779 19.7638C15.1779 20.9239 14.5341 21.933 13.585 22.4553ZM18.7537 12.4845H5.46034C5.36919 12.0209 5.32062 11.5401 5.32062 11.0484C5.32062 7.1302 8.36496 3.94274 12.1071 3.94274C15.849 3.94274 18.8931 7.12994 18.8931 11.0484C18.8931 11.5401 18.8451 12.0209 18.7537 12.4845Z"
                    fill="#D9D6BF"
                  />
                </svg>
              }
              value={password}
              onChange={changePassword}
              type="password"
              placeholder="Password"
              others={{ minLength: 8 }}
            />
            <ButtonLg>Submit</ButtonLg>
          </form>
        </div>
      </div>
    </Card>
  );
};
export default LoginPage;
