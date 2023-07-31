import React from "react";

import classes from "./UserProfile.module.css";
import InfoCard from "./InfoCard";
const UserProfile = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.primaryInfo}>
        <div className={classes.avatarimg}>
          <img src={props.user.avatar_url} alt="" />
        </div>
        <p className={classes.title}>{props.user.name}</p>
        <p className={classes.position}>{props.user.bio}</p>
      </div>
      <div className={classes.secondaryInfo}>
        <p>
          <span className={classes.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.56574 21.2033C3.09735 21.2033 2.69638 21.0365 2.36281 20.7029C2.02926 20.3694 1.86249 19.9684 1.86249 19.5V4.6375C1.86249 4.1691 2.02926 3.76812 2.36281 3.43457C2.69638 3.10102 3.09735 2.93425 3.56574 2.93425H10.1842C10.6526 2.93425 11.0536 3.10102 11.3872 3.43457C11.7207 3.76812 11.8875 4.1691 11.8875 4.6375V7.05925H20.4342C20.9026 7.05925 21.3036 7.22603 21.6372 7.55958C21.9707 7.89313 22.1375 8.2941 22.1375 8.7625V19.5C22.1375 19.9684 21.9707 20.3694 21.6372 20.7029C21.3036 21.0365 20.9026 21.2033 20.4342 21.2033H3.56574ZM3.49999 19.5658H6.12499V16.9408H3.49999V19.5658ZM3.49999 15.4408H6.12499V12.8158H3.49999V15.4408ZM3.49999 11.3158H6.12499V8.69075H3.49999V11.3158ZM3.49999 7.19075H6.12499V4.56575H3.49999V7.19075ZM7.62499 19.5658H10.25V16.9408H7.62499V19.5658ZM7.62499 15.4408H10.25V12.8158H7.62499V15.4408ZM7.62499 11.3158H10.25V8.69075H7.62499V11.3158ZM7.62499 7.19075H10.25V4.56575H7.62499V7.19075ZM11.75 19.5658H20.5V8.69075H11.75V11.3158H13.75V12.8158H11.75V15.4408H13.75V16.9408H11.75V19.5658ZM16.375 12.8158V11.3158H17.875V12.8158H16.375ZM16.375 16.9408V15.4408H17.875V16.9408H16.375Z"
                fill="#D81B60"
              />
            </svg>
          </span>
          <span className={classes.info}>{props.user.company}</span>
        </p>
        <p>
          <span className={classes.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7.00004 17.1494C5.57242 17.1494 4.35727 16.6482 3.35459 15.6456C2.35192 14.643 1.85059 13.428 1.85059 12.0005C1.85059 10.573 2.35192 9.3568 3.35459 8.3519C4.35727 7.347 5.57242 6.84455 7.00004 6.84455H10.3326C10.573 6.84455 10.7751 6.92781 10.9388 7.09432C11.1024 7.26084 11.1843 7.46492 11.1843 7.70655C11.1843 7.9482 11.1024 8.14982 10.9388 8.31142C10.7751 8.47301 10.573 8.5538 10.3326 8.5538H7.00004C6.03977 8.5538 5.22534 8.88753 4.55674 9.555C3.88814 10.2225 3.55384 11.0355 3.55384 11.9941C3.55384 12.9528 3.88814 13.7678 4.55674 14.4391C5.22534 15.1105 6.03977 15.4462 7.00004 15.4462H10.3326C10.573 15.4462 10.7751 15.5285 10.9388 15.693C11.1024 15.8575 11.1843 16.0606 11.1843 16.3022C11.1843 16.5439 11.1024 16.7455 10.9388 16.9071C10.7751 17.0687 10.573 17.1494 10.3326 17.1494H7.00004ZM8.80929 12.7859C8.58722 12.7859 8.40072 12.711 8.24979 12.5612C8.09887 12.4114 8.02341 12.2229 8.02341 11.9956C8.02341 11.7683 8.09788 11.5812 8.24681 11.4344C8.39573 11.2875 8.58322 11.2141 8.80929 11.2141H15.1908C15.4129 11.2141 15.5994 11.289 15.7503 11.4388C15.9012 11.5886 15.9767 11.7771 15.9767 12.0044C15.9767 12.2317 15.9022 12.4187 15.7533 12.5656C15.6043 12.7124 15.4169 12.7859 15.1908 12.7859H8.80929ZM13.6734 17.1494C13.429 17.1494 13.225 17.0672 13.0613 16.9027C12.8976 16.7382 12.8158 16.5351 12.8158 16.2935C12.8158 16.0518 12.8976 15.8502 13.0613 15.6886C13.225 15.527 13.429 15.4462 13.6734 15.4462H17C17.9603 15.4462 18.7747 15.1125 19.4433 14.445C20.1119 13.7775 20.4462 12.9645 20.4462 12.0059C20.4462 11.0472 20.1119 10.2322 19.4433 9.56087C18.7747 8.88949 17.9603 8.5538 17 8.5538H13.6734C13.429 8.5538 13.225 8.47154 13.0613 8.30702C12.8976 8.14251 12.8158 7.93942 12.8158 7.69777C12.8158 7.45614 12.8976 7.25353 13.0613 7.08995C13.225 6.92635 13.429 6.84455 13.6734 6.84455H17C18.4277 6.84455 19.6438 7.34684 20.6485 8.35142C21.6531 9.35601 22.1555 10.572 22.1555 11.9995C22.1555 13.427 21.6531 14.6422 20.6485 15.6451C19.6438 16.648 18.4277 17.1494 17 17.1494H13.6734Z"
                fill="#D81B60"
              />
            </svg>
          </span>
          <a
            className={classes.info}
            href={props.user.html_url}
            target="_blank"
          >
            {props.user.html_url}
          </a>
        </p>
        <p>
          <span className={classes.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.9923 21.6256C11.8061 21.6256 11.6194 21.5944 11.432 21.5321C11.2447 21.4698 11.0808 21.3699 10.9402 21.2326C10.2163 20.5913 9.44001 19.8562 8.61137 19.0272C7.78276 18.1982 7.01546 17.3057 6.30947 16.3497C5.60351 15.3937 5.01719 14.3921 4.55052 13.3449C4.08386 12.2976 3.85052 11.2433 3.85052 10.1821C3.85052 7.64333 4.67014 5.61905 6.30938 4.10925C7.94861 2.59945 9.84547 1.84455 12 1.84455C14.1545 1.84455 16.0523 2.59945 17.6936 4.10925C19.3348 5.61905 20.1554 7.64333 20.1554 10.1821C20.1554 11.2433 19.9211 12.2976 19.4524 13.3449C18.9838 14.3921 18.3964 15.3937 17.6905 16.3497C16.9845 17.3057 16.2172 18.1982 15.3886 19.0272C14.5599 19.8562 13.7857 20.5913 13.0657 21.2326C12.9206 21.3699 12.752 21.4698 12.5598 21.5321C12.3677 21.5944 12.1785 21.6256 11.9923 21.6256ZM12.0022 11.7919C12.5 11.7919 12.9237 11.6173 13.2733 11.2682C13.623 10.9191 13.7978 10.4956 13.7978 9.99778C13.7978 9.49998 13.6222 9.07626 13.2711 8.72663C12.92 8.37699 12.4956 8.20218 11.9978 8.20218C11.5 8.20218 11.0772 8.37773 10.7296 8.72885C10.3819 9.07995 10.2081 9.50441 10.2081 10.0022C10.2081 10.5 10.3827 10.9227 10.7318 11.2704C11.0809 11.618 11.5044 11.7919 12.0022 11.7919Z"
                fill="#D81B60"
              />
            </svg>
          </span>
          <span className={classes.info}>{props.user.location}</span>
        </p>
      </div>
      <InfoCard
        title="Repos"
        count={props.user.public_repos}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <path
              d="M13.8845 55.3736C12.7346 55.3736 11.7374 54.9514 10.893 54.1071C10.0486 53.2626 9.6264 52.2655 9.6264 51.1155V8.8845C9.6264 7.73046 10.0486 6.72977 10.893 5.88244C11.7374 5.03506 12.7346 4.61137 13.8845 4.61137H46.1155C47.2696 4.61137 48.2703 5.03506 49.1176 5.88244C49.965 6.72977 50.3887 7.73046 50.3887 8.8845V51.1155C50.3887 52.2655 49.965 53.2626 49.1176 54.1071C48.2703 54.9514 47.2696 55.3736 46.1155 55.3736H13.8845ZM30.4049 8.8845V23.7228C30.4049 24.106 30.5743 24.4038 30.9132 24.6162C31.252 24.8286 31.6057 24.8365 31.9742 24.6399L35.3954 22.6468C35.724 22.4602 36.0727 22.3669 36.4415 22.3669C36.8102 22.3669 37.1762 22.4602 37.5394 22.6468L40.9131 24.6399C41.2785 24.8365 41.6394 24.8286 41.9956 24.6162C42.3518 24.4038 42.5299 24.106 42.5299 23.7228V8.8845H30.4049Z"
              fill="#D81B60"
            />
          </svg>
        }
      />
      <InfoCard
        title="Followers"
        count={props.user.followers}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <path
              d="M4.16031 50.5679C3.5489 50.5679 3.04119 50.3659 2.63719 49.9619C2.23323 49.558 2.03125 49.0503 2.03125 48.4389V44.2894C2.03125 42.7613 2.42369 41.3761 3.20856 40.1338C3.99344 38.8915 5.08742 37.9588 6.4905 37.3356C9.55208 36.0023 12.3166 35.039 14.7839 34.4456C17.2514 33.8523 19.7917 33.5557 22.4049 33.5557C25.038 33.5557 27.5754 33.8499 30.017 34.4382C32.4586 35.0265 35.2102 35.9923 38.2718 37.3356C39.6748 37.9488 40.7792 38.8766 41.5849 40.1189C42.3906 41.3612 42.7935 42.7513 42.7935 44.2894V48.4389C42.7935 49.0503 42.5915 49.558 42.1875 49.9619C41.7835 50.3659 41.2758 50.5679 40.6644 50.5679H4.16031ZM45.2133 50.5679C45.6499 50.4547 46.0081 50.1986 46.2881 49.7996C46.5679 49.4006 46.7079 48.9054 46.7079 48.3139V44.3193C46.7079 41.6744 46.0437 39.4882 44.7154 37.7609C43.387 36.0335 41.6295 34.5942 39.4429 33.4429C42.2382 33.7862 44.8743 34.2758 47.3512 34.9117C49.8281 35.5476 51.8483 36.2722 53.4117 37.0856C54.8166 37.8773 55.9273 38.8963 56.7439 40.1427C57.5605 41.3891 57.9688 42.7962 57.9688 44.3641V48.4389C57.9688 49.0503 57.7668 49.558 57.3628 49.9619C56.9588 50.3659 56.4511 50.5679 55.8397 50.5679H45.2133ZM22.4049 29.7432C19.5951 29.7432 17.3003 28.8533 15.5204 27.0734C13.7405 25.2935 12.8506 22.9936 12.8506 20.1739C12.8506 17.3641 13.7405 15.0693 15.5204 13.2894C17.3003 11.5095 19.5951 10.6196 22.4049 10.6196C25.2147 10.6196 27.512 11.5095 29.2969 13.2894C31.0818 15.0693 31.9742 17.3641 31.9742 20.1739C31.9742 22.9936 31.0818 25.2935 29.2969 27.0734C27.512 28.8533 25.2147 29.7432 22.4049 29.7432ZM45.4579 20.1739C45.4579 22.9837 44.5654 25.281 42.7806 27.0659C40.9957 28.8508 38.6984 29.7432 35.8886 29.7432C35.4203 29.7432 34.9099 29.7095 34.3574 29.642C33.8048 29.5745 33.2844 29.4524 32.7962 29.2758C33.8161 28.2142 34.5865 26.9106 35.1074 25.3648C35.6282 23.8191 35.8886 22.0888 35.8886 20.1739C35.8886 18.269 35.6282 16.5829 35.1074 15.1155C34.5865 13.6481 33.8161 12.3052 32.7962 11.0869C33.2645 10.952 33.7774 10.8403 34.3349 10.752C34.8924 10.6637 35.4103 10.6196 35.8886 10.6196C38.6984 10.6196 40.9957 11.512 42.7806 13.2969C44.5654 15.0818 45.4579 17.3741 45.4579 20.1739Z"
              fill="#D81B60"
            />
          </svg>
        }
      />
      <InfoCard
        title="Followings"
        count={props.user.following}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <path
              d="M47.7879 34.5218C47.2197 34.5218 46.752 34.3335 46.3849 33.9569C46.0178 33.5803 45.8342 33.1137 45.8342 32.5571V26.4864H39.7636C39.1984 26.4864 38.7297 26.2971 38.3574 25.9184C37.9851 25.5398 37.7989 25.0705 37.7989 24.5108C37.7989 23.9425 37.9851 23.4749 38.3574 23.1078C38.7297 22.7406 39.1984 22.5571 39.7636 22.5571H45.8342V16.4864C45.8342 15.9213 46.0214 15.4525 46.3958 15.0803C46.7703 14.7079 47.2392 14.5218 47.8024 14.5218C48.3657 14.5218 48.8333 14.7079 49.2054 15.0803C49.5775 15.4525 49.7636 15.9213 49.7636 16.4864V22.5571H55.8342C56.3909 22.5571 56.8575 22.7443 57.234 23.1187C57.6106 23.4931 57.7989 23.962 57.7989 24.5253C57.7989 25.0885 57.6106 25.5562 57.234 25.9283C56.8575 26.3003 56.3909 26.4864 55.8342 26.4864H49.7636V32.5571C49.7636 33.1137 49.5743 33.5803 49.1956 33.9569C48.8169 34.3335 48.3477 34.5218 47.7879 34.5218ZM22.5747 29.7432C19.7081 29.7432 17.3642 28.8343 15.543 27.0166C13.7217 25.1989 12.8111 22.8592 12.8111 19.9976C12.8111 17.1359 13.721 14.7953 15.5408 12.9755C17.3606 11.1558 19.7027 10.2459 22.5673 10.2459C25.4318 10.2459 27.774 11.1558 29.5937 12.9755C31.4135 14.7953 32.3233 17.1359 32.3233 19.9976C32.3233 22.8592 31.4142 25.1989 29.5958 27.0166C27.7776 28.8343 25.4372 29.7432 22.5747 29.7432ZM4.31516 50.5679C3.71416 50.5679 3.20907 50.3633 2.79991 49.9541C2.39074 49.545 2.18616 49.0399 2.18616 48.4389V44.2953C2.18616 42.7603 2.58203 41.3726 3.37378 40.1324C4.16562 38.8921 5.25614 37.9598 6.64534 37.3356C9.79026 35.9506 12.5928 34.9744 15.0531 34.4069C17.5133 33.8394 20.0172 33.5557 22.5646 33.5557C25.1112 33.5557 27.6182 33.8394 30.0856 34.4069C32.553 34.9744 35.3333 35.9506 38.4266 37.3356C39.8231 37.9888 40.9259 38.9254 41.7349 40.1456C42.5439 41.3658 42.9483 42.747 42.9483 44.2894V48.4389C42.9483 49.0399 42.7437 49.545 42.3345 49.9541C41.9254 50.3633 41.4203 50.5679 40.8193 50.5679H4.31516Z"
              fill="#D81B60"
            />
          </svg>
        }
      />
      <InfoCard
        title="Gists"
        count={props.user.public_gists}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <path
              d="M19.0611 30L23.0068 33.9456C23.4316 34.3754 23.6415 34.8773 23.6365 35.4511C23.6315 36.0249 23.4226 36.521 23.0098 36.9392C22.5758 37.3574 22.0636 37.569 21.473 37.574C20.8823 37.579 20.3732 37.3691 19.9456 36.9443L14.5081 31.5068C14.0833 31.0783 13.8709 30.5752 13.8709 29.9973C13.8709 29.4194 14.0833 28.918 14.5081 28.4932L19.9932 23.0081C20.4216 22.5833 20.9248 22.3813 21.5027 22.4022C22.0806 22.423 22.5901 22.6462 23.0312 23.0717C23.4414 23.4972 23.6436 23.9945 23.6378 24.5635C23.6319 25.1326 23.4216 25.6295 23.0068 26.0544L19.0611 30ZM40.9388 30L36.9932 26.0544C36.5684 25.6245 36.3584 25.1227 36.3634 24.5489C36.3684 23.975 36.5773 23.479 36.9901 23.0607C37.4241 22.6425 37.9364 22.4309 38.527 22.4259C39.1176 22.421 39.6267 22.6309 40.0543 23.0557L45.4918 28.4932C45.9166 28.9216 46.129 29.4248 46.129 30.0027C46.129 30.5806 45.9166 31.082 45.4918 31.5068L40.0068 36.9919C39.5783 37.4167 39.0752 37.6186 38.4973 37.5978C37.9194 37.577 37.4098 37.3538 36.9687 36.9283C36.5586 36.5028 36.3564 36.0055 36.3622 35.4364C36.368 34.8674 36.5783 34.3704 36.9932 33.9456L40.9388 30ZM11.3845 52.8736C10.2345 52.8736 9.23732 52.4514 8.39291 51.607C7.54853 50.7626 7.12634 49.7654 7.12634 48.6155V40.129C7.12634 39.528 7.33199 39.023 7.74328 38.6138C8.15457 38.2046 8.66226 38 9.26634 38C9.87047 38 10.3745 38.2046 10.7785 38.6138C11.1825 39.023 11.3845 39.528 11.3845 40.129V48.6155H19.8709C20.4719 48.6155 20.977 48.8211 21.3862 49.2324C21.7954 49.6437 22 50.1514 22 50.7555C22 51.3596 21.7954 51.8637 21.3862 52.2677C20.977 52.6716 20.4719 52.8736 19.8709 52.8736H11.3845ZM48.6155 52.8736H40.129C39.528 52.8736 39.0229 52.668 38.6138 52.2567C38.2046 51.8454 38 51.3377 38 50.7336C38 50.1295 38.2046 49.6254 38.6138 49.2214C39.0229 48.8175 39.528 48.6155 40.129 48.6155H48.6155V40.129C48.6155 39.528 48.8211 39.023 49.2324 38.6138C49.6437 38.2046 50.151 38 50.7542 38C51.3574 38 51.8639 38.2046 52.2738 38.6138C52.6837 39.023 52.8886 39.528 52.8886 40.129V48.6155C52.8886 49.7654 52.4649 50.7626 51.6175 51.607C50.7702 52.4514 49.7695 52.8736 48.6155 52.8736ZM7.12634 19.8709V11.3845C7.12634 10.2304 7.54853 9.22976 8.39291 8.38242C9.23732 7.53505 10.2345 7.11136 11.3845 7.11136H19.8709C20.4719 7.11136 20.977 7.31994 21.3862 7.73711C21.7954 8.15428 22 8.66447 22 9.26767C22 9.87092 21.7954 10.3745 21.3862 10.7785C20.977 11.1825 20.4719 11.3845 19.8709 11.3845H11.3845V19.8709C11.3845 20.4719 11.1788 20.977 10.7675 21.3862C10.3562 21.7954 9.84853 22 9.2444 22C8.64032 22 8.13628 21.7954 7.73228 21.3862C7.32832 20.977 7.12634 20.4719 7.12634 19.8709ZM48.6155 19.8709V11.3845H40.129C39.528 11.3845 39.0229 11.1788 38.6138 10.7675C38.2046 10.3563 38 9.84899 38 9.24574C38 8.64253 38.2046 8.13601 38.6138 7.72617C39.0229 7.3163 39.528 7.11136 40.129 7.11136H48.6155C49.7695 7.11136 50.7702 7.53505 51.6175 8.38242C52.4649 9.22976 52.8886 10.2304 52.8886 11.3845V19.8709C52.8886 20.4719 52.68 20.977 52.2628 21.3862C51.8457 21.7954 51.3355 22 50.7323 22C50.129 22 49.6254 21.7954 49.2214 21.3862C48.8174 20.977 48.6155 20.4719 48.6155 19.8709Z"
              fill="#D81B60"
            />
          </svg>
        }
      />
    </div>
  );
};
export default UserProfile;