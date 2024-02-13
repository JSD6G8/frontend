function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer footer-center bg-white p-4 text-primary-content">
      <aside>
        <div className="flex">
          <div className="mx-3 border-r-2 border-slate-600 pr-3">
            <svg
              width={110}
              height={32}
              viewBox="0 0 110 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_272_562)">
                <mask
                  id="mask0_272_562"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={110}
                  height={32}
                >
                  <path d="M110 0H0V32H110V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_272_562)">
                  <path
                    d="M109.973 11.4783C110.133 12.0493 109.543 12.7369 109.391 13.3584C109.621 13.8828 109.449 14.1547 109.062 14.784C108.042 16.4504 107.616 18.6179 106.21 20.5019C106.264 19.3482 106.933 18.1401 107.667 17.1107C106.421 17.9925 105.76 19.6356 105.979 20.8087C106.159 20.8631 106.026 20.5951 106.21 20.498C106.354 20.5446 106.206 20.8903 106.421 20.6456C106.507 20.7582 106.233 20.9991 106.155 21.0068C105.995 21.6555 106.37 22.1294 106.604 22.681C106.643 22.7626 106.487 22.8481 106.503 22.9257C106.604 23.3336 107.23 23.757 107.82 24.1882C108.101 24.1066 108.421 24.2853 108.73 24.3669C107.855 24.8058 106.987 25.2875 105.956 24.7514C105.752 24.6776 106.006 24.53 105.952 24.4329C105.049 23.8852 105.026 23.2015 104.498 22.5956C104.682 22.4208 104.385 22.2071 104.658 22.1566C104.463 21.3176 104.557 20.428 104.478 19.5696C104.979 18.8471 104.998 18.2062 105.268 17.5186C105.323 17.336 105.072 17.4953 105.096 17.3166C105.795 15.6152 106.167 14.0381 106.843 12.228C106.417 12.228 106.163 12.4883 105.784 12.5776C105.725 12.5893 105.534 12.4533 105.444 12.4921C104.764 12.7718 104.392 13.7662 103.689 14.0032C103.834 13.5409 104.4 13.2302 104.693 12.7446C104.06 12.8456 103.568 13.8439 102.978 14.2013C103.333 13.2768 104.252 12.5659 104.94 11.6531C104.768 11.5443 104.639 11.7153 104.498 11.8124C104.588 11.3152 105.123 11.0821 105.389 10.7131C104.189 11.2685 103.431 12.7369 102.22 14.1391C102.415 14.1197 102.556 13.7235 102.732 13.5565C102.962 14.3411 101.446 15.153 101.442 15.9571C101.763 15.825 101.782 15.1336 102.208 15.2423C101.942 15.557 101.825 15.6618 101.727 16.0037C100.993 16.128 101.133 17.1962 100.7 17.7245C100.758 17.8682 100.676 18.0352 100.774 18.1712C99.5937 20.16 98.8083 22.3275 97.0967 24.2426C96.999 24.1532 97.1866 24.0173 97.0928 23.924C96.7333 23.7104 96.5144 24.3746 96.1901 24.3863C95.9673 24.2387 96.1158 24.0328 96.108 23.8502C95.0412 23.9202 94.7286 22.7004 94.6152 22.0634C94.838 21.7954 94.9396 21.403 94.963 21.0457C97.5031 17.9032 98.6754 14.8267 100.215 11.7463C100.012 11.8434 99.7696 11.6764 99.5664 11.7541C99.9806 11.3307 100.344 11.2647 100.629 10.8529C101.133 10.1382 101.001 8.90292 101.931 8.22314C102.337 8.46398 102.724 8.56497 103.267 9.02722C103.318 9.4312 103.306 9.84297 103.232 10.2664C103.349 10.3169 103.498 10.5655 103.568 10.3518C103.627 10.4683 103.564 10.5965 103.443 10.7403C103.599 10.7441 103.709 10.445 103.853 10.4023C104.072 10.4606 103.771 10.6004 103.99 10.6548C104.17 10.6198 104.342 10.5305 104.502 10.3945C104.678 10.6121 104.795 10.4761 104.943 10.5538C105.401 10.0178 106.104 9.55939 106.874 9.56328C107.046 9.37294 106.983 9.15929 107.233 9.18649C107.448 9.26029 107.351 9.38459 107.237 9.50501C107.511 9.54385 107.566 9.37294 107.597 9.12822C108.042 9.61377 108.414 9.3846 108.691 9.60213C108.879 9.65651 108.718 9.41178 108.898 9.43121C109.031 9.73419 109.176 10.0333 109.637 10.278C109.387 10.5616 109.695 10.7597 109.387 11.051C109.492 11.1248 109.594 11.1986 109.699 11.2763C109.617 11.4744 109.582 11.6609 109.605 11.8434C109.762 11.9017 109.852 11.5793 109.973 11.4783Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M108.968 15.6699C109.027 15.7865 108.964 15.9146 108.843 16.0584C108.617 15.969 108.921 15.802 108.968 15.6699Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M107.667 17.1108C106.936 18.1363 106.264 19.3483 106.209 20.502C106.026 20.5991 106.159 20.8671 105.979 20.8127C105.76 19.6357 106.421 17.9926 107.667 17.1108Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M94.5211 16.2174C94.65 15.9222 95.2245 15.557 94.9392 15.3279C94.8376 15.6192 94.5094 15.9455 94.5211 16.2174ZM96.1584 14.5432C96.4593 14.248 96.7329 13.5682 96.686 13.1759C96.5023 13.6343 96.1897 14.1082 96.1584 14.5432ZM97.9326 11.3774C97.999 12.0649 96.8228 12.8768 96.9009 13.6498C97.0963 13.8052 97.194 13.3662 97.362 13.3468C96.983 13.8867 96.772 14.7763 96.2092 15.1298C95.6778 16.466 94.9236 17.7828 93.7239 19.0492C93.6223 19.2162 93.8138 19.3405 93.7942 19.4959C93.5168 20.0708 93.1299 19.9775 92.8329 20.4709C92.6258 20.2961 93.0283 20.2766 92.9189 20.1329C92.4148 20.5641 91.9732 21.3837 91.4926 21.9625C91.8833 21.8809 92.1803 21.2089 92.6024 21.3293C92.2741 22.0907 91.1174 22.6966 90.4648 23.357C90.4179 23.625 90.2929 23.8814 90.0232 24.0679C89.8786 23.9047 89.9724 23.7066 90.117 23.5007C89.6559 23.9047 89.1479 24.0096 88.675 24.367C88.5774 24.2776 88.7688 24.1417 88.6711 24.0484C87.7411 24.5301 86.6704 23.9474 85.7325 23.6794C84.5641 21.6867 84.6149 19.0297 86.5961 16.8506C86.9713 15.4056 87.9795 13.9178 89.1557 12.5116C90.3788 11.0472 91.2268 9.01565 92.8329 8.49902C93.7395 9.16715 94.4468 9.86635 94.4351 10.6782C92.915 11.7736 91.6762 13.106 90.3163 14.8501C90.6289 15.0443 91.2034 14.3956 91.5473 13.8324C91.6293 14.5432 89.992 15.1492 90.1756 16.0154C89.6793 16.4544 89.4957 16.769 89.0932 17.375C89.2495 17.4876 89.3003 16.936 89.48 17.1769C88.9212 18.3267 88.1358 18.9598 87.5731 20.0863C87.8232 20.0008 88.0107 19.5308 88.2374 19.2978C88.1983 19.9309 87.6395 20.6418 87.4871 21.2944C88.0185 21.0147 88.4953 20.8127 89.0346 20.5058C89.7849 20.0747 90.2851 19.325 91.0353 18.7734C91.5785 18.3694 92.4304 18.2062 92.7665 17.406C92.9306 17.2545 93.1143 17.2701 93.2784 17.1419C94.7204 15.5066 96.0021 13.7158 96.6664 11.8901C96.9947 11.8086 97.0572 11.5716 97.4871 11.2104C97.3151 11.0239 97.2409 11.4162 97.0689 11.2298C97.1432 10.8957 97.5183 10.7598 97.7489 10.5267C98.1045 10.6937 97.3073 11.4162 97.3894 11.7775C97.6082 11.8824 97.7294 11.3735 97.9326 11.3774Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M96.702 16.2021C96.7489 16.4896 96.5535 16.7382 96.2956 16.8625C96.2565 16.6683 96.5965 16.4158 96.702 16.2021Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M93.5718 20.4478C93.6343 20.7663 93.2826 20.8284 93.2162 21.1431C93.0091 20.9605 93.4859 20.6731 93.5718 20.4478Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M92.9034 20.9177C93.1261 20.9954 92.8096 21.3372 92.6963 21.0886C92.7627 21.007 92.8174 20.8711 92.9034 20.9177Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M86.7408 3.80664C87.7256 3.82606 88.6478 4.98363 88.7143 5.70225C88.0617 6.114 87.3622 6.30433 87.1551 7.27544C86.5884 6.1878 86.6627 4.99916 86.7408 3.80664Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M78.9021 21.6246C79.3983 20.8166 80.2737 20.0436 80.3714 19.1929C79.7852 19.9349 79.0935 20.7467 78.9021 21.6246ZM83.2866 12.4146C83.5679 12.8302 83.3178 13.3274 83.5015 13.7586C83.4077 13.9761 83.3022 14.3762 83.056 14.4695C83.228 14.6676 83.3217 14.3879 83.5015 14.6287C83.2436 15.0987 82.8333 15.5882 82.974 15.9961C81.321 18.2451 79.3671 21.1468 78.4409 23.6678C78.1596 23.5629 77.8743 23.427 77.6633 23.7416C77.335 23.6096 77.6867 23.3726 77.3976 23.2328C77.1123 23.0968 76.9013 23.4037 76.6473 23.4853C76.3073 23.0036 76.1783 22.4908 75.897 21.9975C76.4323 20.3738 77.4366 18.6724 78.1244 17.0215C78.5425 16.2874 79.074 15.6775 79.4335 15.0288C79.5351 14.8385 79.5195 14.6248 79.6211 14.45C80.0431 13.7159 80.6254 13.1177 80.9146 12.3719C81.0865 11.9213 80.9732 11.3347 81.6101 11.2065C82.3096 11.5173 82.716 11.8863 83.2866 12.4146Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M58.8197 16.5361C58.9331 16.369 59.3004 16.2874 59.2535 16.0583C59.1167 16.0932 58.7728 16.3108 58.8197 16.5361ZM64.8182 10.4686C64.1734 10.7016 63.4895 10.6667 62.9385 11.4941C62.5282 11.6261 62.1453 12.0418 62.0319 12.5079C60.7306 13.4168 60.2148 14.7026 59.2769 15.9145C59.3942 15.8563 59.4841 15.6698 59.613 15.6776C59.445 16.5555 58.3664 17.3013 58.1945 18.1481C58.1515 18.2025 58.1242 18.2957 58.2101 18.2374C58.3117 17.9849 58.3547 17.95 58.5814 17.9539C58.6009 18.3501 58.0147 18.8356 58.132 19.2163C60.7619 17.0954 63.2512 13.514 64.8182 10.4686ZM66.2328 17.5887C66.307 17.4372 66.1781 17.3207 66.1234 17.1925C65.9358 17.3168 66.264 17.3557 66.0765 17.4761C66.1273 17.511 66.1781 17.5499 66.2328 17.5887ZM72.5478 12.9391C73.044 12.1117 73.9624 11.7815 73.9741 11.1095C73.5208 11.6689 72.8213 12.2243 72.5478 12.9391ZM83.3293 7.45812C83.0753 7.57465 83.13 7.91648 82.8565 7.99029C82.6923 7.58631 82.9229 7.12406 82.2937 6.79388C80.6017 6.79777 79.2457 8.89148 77.6122 9.76548C76.901 10.1462 75.9045 10.1772 75.2246 11.3736C75.6701 11.2105 75.928 10.4996 76.4829 10.5346C75.6271 11.8708 74.4626 13.2615 73.3176 14.2831C73.6302 13.4673 74.3688 12.9158 74.8182 12.034C73.6498 13.1605 72.5165 14.4812 71.4223 16.0932C71.692 15.9262 71.9381 15.6271 72.1922 15.3785C72.1687 16.066 71.3715 16.8818 71.1097 17.6082C71.3911 17.6198 71.5864 17.1109 71.8248 16.8546C71.7896 17.0488 71.6646 17.5227 71.4614 17.4644C70.9026 18.622 71.0433 19.6708 70.6916 20.7934C70.7853 20.8128 70.8713 20.7546 70.9495 20.6613C71.0472 21.1624 70.332 21.5431 70.2031 22.1063C70.0859 23.0736 70.1093 24.4292 68.937 24.9187C68.6283 24.8138 68.3391 24.8449 68.0851 25.0974C67.8819 24.907 67.7138 24.907 67.5614 25.0391C66.7955 24.6701 66.9714 24.1534 66.4282 23.7495C66.4594 23.3144 66.2836 22.9143 66.4086 22.4676C65.4825 22.2695 64.7908 21.5781 64.3102 20.9604C64.3727 20.8633 64.4548 20.8983 64.5173 20.7895C64.0679 20.3234 64.146 19.7796 63.767 19.3018C63.8842 18.5521 63.7435 17.8373 63.6966 17.1148C63.7709 16.8973 63.5755 17.2469 63.5013 17.0527C63.4856 16.8857 63.4075 16.7303 63.6458 16.5244C63.4622 16.6137 63.427 16.4972 63.384 16.3379C62.5986 17.2702 62.5751 18.0821 61.7232 19.026C61.6802 19.1076 61.8678 19.158 61.8053 19.2435C60.7424 21.2479 59.1675 22.6579 57.5575 23.4775C57.3543 23.4542 57.8233 23.4076 57.878 23.1551C57.5145 22.8793 56.7721 23.1474 56.6744 22.6074C56.4829 22.4598 56.3422 22.6579 56.1546 22.5492C55.8615 21.9238 55.377 21.3256 55.2988 20.6652C55.4043 19.6708 55.5138 18.6764 55.6583 17.6742C56.7486 16.0311 57.1785 14.1937 58.4524 12.4729C58.8315 11.9563 59.2183 11.226 59.699 10.6744C60.5782 9.6606 61.6568 8.35931 62.8526 8.02913C63.6146 8.58461 64.4665 9.12454 64.9784 9.71498C65.0878 9.86647 65.08 10.0335 65.0136 10.2122C65.2324 10.2277 65.3614 9.69167 65.631 10.0257C65.6779 9.89366 65.9788 9.72663 65.756 9.63729C65.8498 9.45472 66.0335 9.80432 66.1195 9.58291C66.3305 9.92474 66.5532 9.81597 66.7994 10.0723C67.3934 10.6822 66.9831 11.3892 67.2175 12.1156C67.0026 12.3797 66.9049 12.6244 66.9167 12.8536C67.1394 12.9429 67.0222 12.4807 67.198 12.5778C67.4637 13.0556 66.8815 13.6655 67.1667 14.1432C67.0417 14.318 67.0651 14.4656 66.8737 14.6482C66.8385 14.7298 66.9753 14.7842 67.0456 14.8502C66.5454 15.5844 66.7017 16.2175 66.2172 16.9517C66.5532 17.0527 66.4399 16.5089 66.6783 16.3302C66.5962 17.6548 65.842 19.0881 66.1116 20.3583C66.4438 20.5992 66.7721 20.8361 67.1081 21.0731C67.4755 21.007 67.663 20.3273 67.7295 20.0165C69.0034 16.839 71.4692 13.6965 72.8447 10.4608C71.9889 10.7055 71.1644 11.1716 70.1484 10.4219C70.1015 10.0335 69.5036 9.72663 69.5114 9.32654C71.3207 8.36708 73.1261 7.33382 75.0292 6.95703C76.2562 4.66133 77.5184 2.22578 78.7963 0C80.6056 1.15756 78.6126 2.90168 78.8315 4.30396C78.3352 4.80893 78.4954 5.21292 78.4876 5.6402C78.64 5.71789 78.7572 5.57805 78.9292 5.79947C79.1089 5.63244 79.3238 5.7917 79.5778 5.78781C79.6521 5.78781 79.7498 5.65574 79.8358 5.65574C79.91 5.65963 79.9764 5.80335 80.0468 5.80723C80.6837 5.81889 81.7193 5.6907 82.3602 6.0403C82.9503 6.37048 83.3059 6.93761 83.3293 7.45812Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M73.6069 15.2036C73.2864 15.728 73.0871 16.233 72.6026 16.7807C72.5869 16.6914 72.5713 16.602 72.5596 16.5127C72.8878 16.132 73.3802 15.2619 73.6069 15.2036Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M51.946 12.1506C52.2859 11.5601 52.9151 11.23 53.1066 10.6861C52.7275 10.8609 52.0046 11.8942 51.946 12.1506ZM53.6458 10.2822C53.7787 10.0646 54.0015 10.0569 53.8959 9.83156C53.8373 9.97528 53.556 10.1578 53.6458 10.2822ZM54.7596 8.54969C54.5446 8.36712 54.4274 8.79441 54.2437 8.81383C54.4548 8.95367 54.5876 8.62738 54.7596 8.54969ZM60.5196 6.50648C60.5001 6.73954 60.3829 7.07361 60.1679 7.20179C59.0308 6.69293 58.1515 7.77669 57.1707 8.21951C57.0964 8.35159 57.112 8.472 56.9557 8.61961C56.7603 8.73226 57.0378 8.3982 57.0925 8.32439C56.9714 8.13794 56.9284 8.46423 56.8072 8.27778C55.9241 9.15178 54.9471 9.41981 54.0874 10.4414C54.9979 9.94809 55.8694 9.21005 56.7564 8.56135C56.5923 9.21005 55.6349 9.5713 55.1308 10.0064C54.0132 11.6961 52.1687 13.3819 50.9104 15.2931C50.9417 15.0522 50.9182 14.893 50.6212 14.9241C50.7033 14.7143 50.8635 14.489 50.844 14.2948C50.5939 14.8075 49.5622 15.8369 50.0155 16.3963C50.1523 16.3574 50.293 15.9262 50.5118 15.7204C50.4532 16.2448 49.6755 16.9867 49.3864 17.6859C49.6716 17.717 49.7381 17.3169 49.8983 17.1032C49.7342 18.1248 49.1324 19.2086 48.683 20.2729C48.5423 20.3856 48.9604 20.4128 48.8197 20.5254C48.5423 21.3916 48.1593 22.2773 47.7529 23.1668C47.3192 22.9765 47.4833 22.689 47.4051 22.4404C47.1042 22.6813 46.8385 23.1629 46.479 23.0425C46.4399 22.926 46.4594 22.7978 46.4204 22.6813C46.2641 22.4637 46.1898 22.7745 46.0296 22.557C45.7482 22.2501 45.6701 21.9122 45.3692 21.6053C45.6193 21.0692 45.0566 20.7313 45.2441 20.2496C45.2988 20.1098 45.4864 19.9932 45.5489 19.834C45.7209 19.4106 45.8303 18.9406 46.0374 18.521C47.1159 16.3302 47.5145 13.817 48.5579 11.6184C48.6244 11.195 48.5032 10.8027 48.3195 10.4181C48.597 10.1151 48.9721 10.4453 49.2496 10.1345C49.613 10.5269 50.2109 10.3987 50.2969 10.8881C50.633 10.7561 50.9495 10.5074 51.2465 10.1423C53.1886 9.52469 54.955 7.7728 56.8854 7.06584C57.0026 6.926 56.7838 6.84054 57.0104 6.68128C57.4872 6.42879 58.4446 6.13746 59.0269 6.23068C59.6013 6.32391 60.0312 6.052 60.5196 6.50648Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M58.5344 8.32812C58.2062 9.10501 57.1198 9.24874 56.5219 9.97124C56.3382 10.1927 56.0764 10.6471 55.7286 10.8297C55.6661 10.8608 55.4785 10.7831 55.4043 10.8336C55.1737 10.9851 54.8845 11.3852 54.5602 11.6532C54.1772 11.9678 53.6966 12.0921 53.7161 12.4728C53.4191 12.4612 53.2081 12.9739 52.9502 13.1876C53.9232 11.0511 55.9006 10.2004 57.3855 8.68938C57.6786 8.90691 58.1514 8.45244 58.5344 8.32812Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M55.6038 11.2144C55.2911 11.5445 55.3185 11.9524 54.9551 12.0961C55.084 11.8164 55.1505 11.2338 55.6038 11.2144Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M53.8413 12.4067C53.8452 12.5893 53.7319 12.7913 53.5638 13.0011C53.3802 12.7058 53.6303 12.5738 53.8413 12.4067Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M53.3492 13.0791C53.3805 13.2811 53.2437 13.7162 52.9662 13.5957C52.9428 13.3704 53.2203 13.2384 53.3492 13.0791Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M52.6847 13.8676C52.9113 13.9569 52.6143 14.1589 52.5479 14.1667C52.4228 14.1162 52.5518 13.8054 52.6847 13.8676Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M47.2881 10.3054C47.4288 10.4219 47.5187 10.2044 47.6789 10.4297C46.8739 11.9524 45.9204 15.0755 43.9938 15.864C43.8688 16.0038 43.9938 16.1087 43.8688 16.2524C43.392 16.5632 42.9192 16.8778 42.4581 17.2974C41.1451 17.2624 40.9184 19.3678 40.0861 20.1874C39.875 19.5464 40.3362 18.8006 40.4964 18.1053C39.3514 19.2318 39.453 20.5603 39.664 21.6285C40.4807 21.9664 41.5358 21.3877 42.4542 20.7817C43.2865 20.234 44.1423 19.426 44.9903 18.6453C45.1115 18.8123 44.9903 19.0143 45.1662 19.1696C43.986 20.401 43.7672 22.0674 42.7082 23.2677C42.6691 23.3493 42.8059 23.4037 42.8801 23.4697C42.3877 23.7727 41.9266 24.2816 41.36 24.1184C41.0904 24.3554 40.8285 24.6778 40.4807 24.4369C40.6175 24.3049 40.9067 24.2738 40.8911 24.099C40.3557 24.2427 39.5976 24.1417 38.9176 23.9475C38.5464 23.8387 38.5972 23.5435 38.3354 23.2095C37.9563 22.7356 37.4053 22.4908 37.7179 21.9781C37.3702 21.846 37.5421 21.6402 37.2686 21.4964C37.4561 21.2983 37.4991 21.1235 37.5108 20.9565C37.1982 20.1485 37.675 19.2201 37.6554 18.3695C38.3002 17.0759 39.0622 15.5727 39.5859 14.4462C40.0353 14.1665 39.9532 13.8519 40.387 13.3585C40.4886 13.2187 40.3401 13.1216 40.3283 13.0012C41.1568 12.0067 41.6726 10.8997 42.505 10.049C42.8879 9.07788 44.1501 8.78266 44.8614 7.93974C45.2326 8.03685 45.5452 7.76882 45.8969 7.72998C46.0962 7.81932 45.9008 7.89701 45.8344 7.9242C46.0024 7.93586 46.0689 8.20777 46.4245 8.4253C47.4444 8.59621 47.3975 9.66055 47.2881 10.3054Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M40.8322 19.9272C40.9885 20.0438 40.7033 20.3545 40.5782 20.3778C40.4922 20.2574 40.7736 20.0749 40.8322 19.9272Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M38.6516 14.3994C38.7571 14.6247 38.3819 14.9316 38.2217 15.1996C38.124 14.9627 38.4679 14.5393 38.6516 14.3994Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M3.22392 13.8053C3.29035 13.5062 3.78664 13.1372 3.67722 12.8653C3.43884 13.1916 3.11841 13.5334 3.22392 13.8053ZM7.05354 23.8466C8.26104 22.3084 9.71864 21.0537 10.4377 19.1503C9.33177 20.6225 7.69832 22.2384 7.05354 23.8466ZM10.1641 20.0632C10.4377 20.3195 10.7034 19.6126 10.5862 19.496C10.3517 19.7641 10.3751 19.8961 10.1641 20.0632ZM10.891 19.9505C11.1333 19.3678 11.442 19.2707 11.6764 18.7735C11.2778 18.8939 10.891 19.6048 10.891 19.9505ZM24.6385 10.6628C23.9117 10.488 22.9777 11.5096 22.161 11.7349C20.4025 13.3004 19.0778 14.7065 17.7296 16.874C20.1368 15.4484 22.6026 13.4635 24.6385 10.6628ZM12.161 18.9056C12.204 18.8434 12.2392 18.7852 12.2743 18.7269C12.2235 18.7852 12.1884 18.8473 12.161 18.9056ZM12.161 18.9056C11.6608 19.6747 10.7972 20.6458 10.5197 21.4266C9.87886 21.7645 9.3474 22.7939 8.6909 23.0425C7.64361 24.437 6.45565 24.9576 5.28722 25.5868C4.34545 25.4198 3.53654 26.0802 2.59086 25.8665C2.31731 25.7422 2.50488 25.5441 2.55959 25.3693C1.87183 25.2023 1.32083 24.9071 0.933959 24.2001C0.656507 23.6951 0.586167 22.6385 0.343884 21.9549C0.234467 21.6519 0.113326 21.2596 0.0664322 20.809C0 20.0903 0.132864 19.5931 0 18.9367C0.816725 15.2542 2.61821 10.4375 6.23681 6.77838C7.74912 5.25568 9.45682 3.44553 11.2388 2.61038C11.7077 2.59096 12.2978 2.40062 12.9269 2.71526C13.6147 3.06097 14.2165 3.65918 14.5565 4.203C14.1383 4.50598 13.6694 4.45549 13.2122 4.50598C12.7862 4.75847 12.3759 5.08088 11.9226 5.16634C9.3943 7.0736 6.89723 9.16342 4.59164 12.4924C4.6229 13.2693 4.13834 13.7432 3.75147 14.5045C3.45838 15.0794 3.33333 15.8136 3.09105 16.4856C2.63384 17.7597 2.24697 19.0182 2.14537 20.1642C2.28214 20.238 2.3603 19.9427 2.50879 20.1098C2.03204 20.5215 2.50879 20.7818 2.03204 21.1935C2.18445 21.9316 2.30559 22.6813 2.29777 23.4465C3.44666 23.699 4.43142 22.3666 5.77179 21.345C6.0297 21.1508 6.39703 20.9294 6.85033 20.5371C8.60102 19.0338 11.0512 16.1981 11.9734 13.918C10.5119 13.9801 9.24971 15.2853 7.84682 15.7048C7.55373 15.4213 7.30754 15.4135 7.06526 15.4601C6.31497 14.9629 6.78781 14.2792 6.23681 13.7548C9.17546 11.2028 12.3447 10.1268 15.4513 8.65456C16.8621 8.47976 18.261 8.21174 19.7577 8.58076C20.0313 8.82159 20.2775 8.91094 20.5158 8.96532C20.8714 9.43145 21.3521 9.87428 21.0277 10.4453C22.5713 9.62956 24.0055 8.13016 25.6663 8.0719C26.4166 8.58076 27.159 9.0935 27.2724 9.70336C26.8542 10.5385 26.5768 11.2183 25.8578 12.17C25.8812 12.2904 25.6585 12.4458 25.9164 12.5312C25.6311 13.1061 25.1348 13.984 24.5018 14.4463C24.4666 14.6638 24.7128 14.2482 24.8261 14.4424C24.5369 14.7648 24.2946 15.3746 23.9429 15.3125C23.9078 15.1493 24.0289 14.9629 24.1852 14.7726C23.5795 15.5533 22.6925 15.9573 22.3408 16.6177C22.2939 16.5361 22.3251 16.439 22.3877 16.338C20.7659 17.9112 19.0543 18.925 17.2958 19.6514C17.3193 20.3817 17.2606 21.1236 17.2763 21.8539C19.1051 21.6713 20.7659 20.4322 22.4853 19.5776C23.1223 18.9406 23.8882 18.6609 24.5291 18.1132C25.3576 17.4023 25.9242 16.7692 26.8191 15.8796C27.2216 15.4756 27.6553 15.227 27.8703 14.8891C28.3744 14.1005 28.4799 13.1644 29.0543 12.4108C29.4256 11.1173 30.5744 9.69948 30.426 8.48365C30.9379 8.30496 31.5592 8.78663 32.1766 9.26442C32.0907 9.44699 32.2196 9.5946 32.2118 9.76163C32.6299 9.56741 33.0363 9.31492 33.4467 9.06631C33.4896 9.15177 33.4623 9.24888 33.3998 9.34988C34.8808 8.58853 36.7565 7.70288 38.3587 9.58683C38.2415 9.74609 38.4564 9.84709 38.2884 10.0102C39.9492 10.892 39.5389 12.5545 38.3001 13.5839C37.9523 14.4579 37.0418 15.5067 36.6315 16.505C35.9515 17.7364 34.6112 18.5133 34.4822 19.6359C35.6311 18.7619 36.1352 17.3013 37.0809 16.1166C36.8855 17.0916 36.0336 18.1753 35.4357 19.2164C35.2716 19.2474 35.1348 19.4611 34.959 19.4261C34.9199 20.036 34.4666 20.1486 34.4705 20.7391C34.5877 20.8012 34.662 20.5837 34.7831 20.6458C34.8847 20.1214 35.4084 19.5931 35.5412 19.2902C35.8187 19.6281 35.5256 19.8301 35.2833 20.2923C35.6428 20.3118 35.9007 19.7174 36.2446 19.6359C35.7132 20.8323 35.1544 22.1141 34.0563 22.8211C33.646 22.5647 33.2982 22.7046 32.9387 22.8095C31.9226 22.2035 32.2587 21.3878 32.0399 20.6575C32.3447 19.6631 33.0598 18.8784 33.4037 17.8296C33.7007 16.9129 33.8961 15.9806 34.3103 15.0755C34.451 14.7648 34.5721 14.4579 34.5291 14.1239C35.0449 13.2926 35.4357 12.1311 35.8226 11.1717C34.83 10.8687 34.1227 12.3564 33.2513 12.807C32.7042 13.7393 31.6413 14.2715 31.0277 15.1688C30.4142 16.0661 30.2345 17.1226 29.578 18.0083C29.4334 18.1986 29.6366 18.3346 29.6092 18.5055C29.0934 18.723 28.941 19.1892 28.6401 19.7136C28.8589 19.7174 28.9801 19.1231 29.2302 19.3445C28.7691 20.3118 27.9836 21.547 27.6475 22.8017C27.1942 23.2523 26.5924 22.7745 26.0336 22.5919C25.4201 22.1841 25.4357 21.6752 24.8456 21.2635C24.9472 20.7585 24.9785 20.2651 24.8925 19.7912C25.6233 18.7619 26.1235 17.7675 26.7292 16.7536C25.678 17.5849 24.7245 19.0377 23.6538 19.7291C23.7593 19.6009 23.8101 19.4766 23.7554 19.3717C23.7085 19.496 23.4193 19.6631 23.6186 19.7524C23.5365 19.8029 23.4584 19.8495 23.3724 19.8922C23.2356 20.0826 23.095 20.2729 22.9543 20.4594C22.8644 20.5099 23.0871 20.6808 23.1497 20.6342C21.9187 22.3861 20.2227 24.2117 18.4095 24.5575C18.3783 24.1884 17.714 24.068 17.4678 24.2001C16.8113 23.6524 16.7175 24.0525 15.9515 23.4271C16.0023 23.3572 16.0531 23.2872 16.1039 23.2212C15.9125 23.0814 15.7171 22.9454 15.5256 22.8056C14.6503 21.3839 14.7558 19.8068 15.1622 18.187C15.2677 17.9733 15.4201 18.0704 15.5334 17.9034C16.1587 15.3824 18.7104 13.2071 20.4768 10.7599C20.4533 10.2899 20.4494 9.81601 20.211 9.38095C18.7534 8.56911 17.7218 10.4647 16.4713 10.9697C15.9047 11.8786 15.1934 11.8786 14.5995 12.6361C14.5135 12.5817 14.4197 12.4652 14.3494 12.539C14.0563 13.1022 14.4588 13.5606 13.7749 14.186C13.6577 14.3802 14.0524 14.1044 13.9351 14.2987C13.7554 14.7881 13.2044 15.328 12.88 15.8369C13.2903 15.868 13.1067 15.4912 13.4076 15.3436C13.4896 15.3008 13.1067 15.7903 13.0793 15.899C13.052 15.9884 13.2044 16.0233 13.1614 16.1166C12.8566 16.7692 12.3759 17.4567 12.1844 17.8723C13.3099 17.2741 13.9429 14.959 14.748 13.8519C14.6737 14.7182 14.2009 15.6466 13.7866 16.5672C13.2513 17.278 12.6964 17.9889 12.7667 18.6065C12.4814 18.9367 12.2235 19.4727 11.9109 19.6553C12.0789 19.3911 12.0399 19.162 12.161 18.9056ZM3.60297 12.4264C3.68503 12.3525 3.79054 12.4225 3.88042 12.372C4.68542 11.1406 5.61938 10.0879 6.24463 9.15954C5.26378 10.0258 4.4197 11.5019 3.60297 12.4264Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M29.2456 18.8863C29.4722 18.9756 29.1361 19.2281 29.0658 19.2359C29.0072 19.162 29.0853 18.8435 29.2456 18.8863Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M26.2875 11.6882C26.436 11.5561 26.6079 11.5523 26.8072 11.7426C26.2757 11.9834 26.5415 12.6749 25.9436 13.0245C25.799 12.6205 26.4829 12.0883 26.2875 11.6882Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M23.7515 19.3755C23.8062 19.4804 23.7554 19.6047 23.6499 19.7329C23.6382 19.7406 23.6264 19.7445 23.6147 19.7562C23.4154 19.6629 23.7046 19.4998 23.7515 19.3755Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M23.6499 19.7329C23.646 19.7407 23.6382 19.7523 23.6265 19.7601C23.6226 19.7562 23.6187 19.7562 23.6147 19.7562C23.6265 19.7446 23.6382 19.7407 23.6499 19.7329Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M12.1611 18.9057C12.1885 18.8514 12.2276 18.7892 12.2745 18.7271C12.2393 18.7853 12.2041 18.8436 12.1611 18.9057Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M70.8439 30.5084L70.121 30.7104L68.9174 30.7493C68.9174 30.7493 67.1354 30.6055 68.7259 30.4657H69.7849L70.8439 30.5084ZM66.5766 30.3647L66.1897 30.5667L65.5449 30.6055C65.5449 30.6055 64.5875 30.4618 65.4433 30.322H66.0139L66.5766 30.3647ZM108.253 28.9003C105.729 28.6555 103.478 28.5312 101.219 28.6633C100.254 28.7177 99.2808 28.7138 98.3077 28.7138C95.7403 28.706 93.1729 28.6866 90.6055 28.6633C88.6594 28.6439 86.7212 28.5196 84.7712 28.5623C81.7818 28.6284 78.7806 28.5429 75.7833 28.5274C74.4977 28.5235 73.2159 28.5196 71.9303 28.5546C70.1444 28.6012 68.3585 28.6789 66.5727 28.741C64.6696 28.8109 62.7665 28.877 60.8634 28.943C59.1909 29.0013 57.5223 29.0945 55.8497 29.1061C53.2081 29.1256 50.5664 29.0751 47.9248 29.0751C45.0057 29.0751 42.0905 29.1061 39.1714 29.11C36.0959 29.1139 33.0244 29.1061 29.949 29.0984C29.2495 29.0945 28.5461 29.0323 27.8466 29.0323C26.2913 29.0323 24.7439 29.2033 23.1846 29.0984C22.8369 29.0751 22.4852 29.1023 22.1335 29.1061C20.3437 29.1333 18.5578 29.1644 16.7681 29.1799C16.3031 29.1838 15.8341 29.1256 15.3691 29.1294C13.466 29.1528 11.559 29.1955 9.65592 29.2227C8.95643 29.2343 8.25694 29.2304 7.56136 29.2421C7.24873 29.246 6.93611 29.2499 6.6313 29.2848C5.0213 29.4674 3.40348 29.5684 1.74268 29.5567C1.78175 29.9219 1.80911 30.2715 1.86382 30.6172C1.91853 30.9707 1.98887 31.3242 2.37183 31.6699C2.81731 31.7553 3.34877 31.9457 3.87632 31.9457C4.72431 31.9418 5.5723 31.8175 6.41638 31.7281C7.18621 31.6504 7.94822 31.5456 8.71806 31.4679C8.98769 31.4407 9.27296 31.4834 9.53088 31.4368C11.5121 31.0717 13.5481 31.1338 15.5528 30.9746C15.7833 30.9551 16.0178 30.9784 16.2523 30.9823C16.8736 30.994 17.4949 31.0367 18.1124 31.0173C20.3632 30.9474 22.6102 30.7648 24.8689 30.9901C25.756 31.0794 26.6352 31.2387 27.534 31.1299C27.6825 31.1105 27.8427 31.1455 27.999 31.1688C29.6208 31.4135 31.2503 31.4523 32.8877 31.3863C33.4699 31.363 34.06 31.3397 34.6383 31.398C35.7755 31.5106 36.8892 31.3941 38.0068 31.3086C39.6247 31.2076 41.6841 31.0056 43.7982 30.8192C44.103 30.7959 44.4351 30.7648 44.7243 30.8347C45.4199 30.9979 46.1116 30.9512 46.8111 30.959C47.6669 30.9707 48.5227 30.994 49.3707 31.06C50.3007 31.1338 51.219 31.297 52.1491 31.363C55.0995 31.5805 58.0576 31.7398 61.0158 31.5922C61.985 31.5456 62.9502 31.4601 63.9193 31.4057C65.119 31.3397 66.3265 31.196 67.5223 31.2465C69.6755 31.3436 71.7896 31.0872 73.9232 31.0095C75.3183 30.959 76.7095 30.8503 78.1045 30.7764C79.4215 30.7104 80.7423 30.6599 82.0631 30.5978C82.7587 30.5628 83.4582 30.5201 84.1538 30.4735C85.1972 30.4035 86.2405 30.3259 87.2839 30.2559C87.9404 30.2132 88.5969 30.1744 89.2573 30.1433C90.5743 30.085 91.8951 30.0656 93.2081 29.9646C93.9467 29.9063 94.6735 29.8714 95.416 29.9102C96.1155 29.9452 96.8267 29.9918 97.5106 29.9141C98.7454 29.7743 99.9842 29.7354 101.227 29.7238C101.614 29.7199 102.005 29.7199 102.391 29.6927C103.513 29.6189 104.466 29.3392 105.58 29.2343C106.252 29.1722 106.76 29.2033 107.456 29.0906C107.577 29.0828 107.925 29.0634 108.253 28.9003Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M44.2358 31.4795H45.2949L46.3539 31.5222L45.6309 31.7242L44.4273 31.7631C44.4273 31.7669 42.6493 31.6232 44.2358 31.4795Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M19.0698 31.0136L21.477 30.6795L23.8881 30.3882L22.2742 30.8194L19.5466 31.2389C19.5466 31.235 15.4825 31.6545 19.0698 31.0136Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M50.2972 31.3008L52.7239 31.2387L55.1546 31.2192L53.5055 31.464L50.7466 31.5727C50.7466 31.5727 46.6591 31.5378 50.2972 31.3008Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M29.4685 31.4405L27.3153 31.5531H25.1582L26.6002 30.9743L29.0386 30.749C29.0425 30.749 32.6768 30.9161 29.4685 31.4405Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M14.4471 31.4795H18.4839L22.5206 31.5533L19.7656 31.8835L15.1779 31.9456C15.1818 31.9495 8.3901 31.7164 14.4471 31.4795Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M41.6528 31.1958H42.2233L42.7938 31.2385L42.407 31.4405L41.7622 31.4794C41.7583 31.4794 40.8009 31.3395 41.6528 31.1958Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M20.9536 31.1143H21.5241L22.0947 31.157L21.7078 31.359L21.063 31.3978C21.0552 31.4017 20.0978 31.258 20.9536 31.1143Z"
                    fill="#0074B9"
                  />
                  <path
                    d="M9.39843 31.7163H9.96897L10.5395 31.759L10.1526 31.961L9.50785 31.9999C9.50003 31.9999 8.54263 31.8561 9.39843 31.7163Z"
                    fill="#0074B9"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_272_562">
                  <rect width={110} height={32} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <svg
              width="51"
              height="32"
              viewBox="0 0 51 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_271_282)">
                <path
                  d="M35.25 12.3125H39.1875V13.625H35.25V12.3125Z"
                  fill="#1A1A1A"
                />
                <path
                  d="M32.625 13.625H35.25V14.9375H32.625V13.625Z"
                  fill="#1A1A1A"
                />
                <path
                  d="M39.1875 13.625H40.5V14.9375H39.1875V13.625Z"
                  fill="#1A1A1A"
                />
                <path
                  d="M41.8125 13.625H44.4375V14.9375H41.8125V13.625Z"
                  fill="#1A1A1A"
                />
                <path
                  d="M31.3125 14.9375H32.625V17.5625H31.3125V14.9375Z"
                  fill="#1A1A1A"
                />
                <path
                  d="M35.25 14.9375H37.875V16.25H35.25V14.9375Z"
                  fill="#1A1A1A"
                />
                <path
                  d="M40.5 14.9375H41.8125V16.25H40.5V14.9375Z"
                  fill="#1A1A1A"
                />
                <path
                  d="M44.9375 18.875V15.4375H45.25V17.5625V18.0625H45.75H47.875V18.875V19.375H48.375H49.1875V24.9375H48.375H47.875V25.4375V26.25H45.75H45.25V26.75V28.875H43.625V28.5625H44.4375H44.9375V28.0625V20.1875V19.6875H44.4375H43.625V19.375H44.4375H44.9375V18.875Z"
                  stroke="#1A1A1A"
                />
                <path
                  d="M32.625 17.5625H35.25V18.875H33.9375V28.0625H35.25V29.375H32.625V17.5625Z"
                  fill="#1A1A1A"
                />
                <path
                  d="M40.5 17.5625H43.125V18.875H40.5V17.5625Z"
                  fill="#1A1A1A"
                />
                <path
                  d="M35.25 18.875H36.5625V20.1875H35.25V18.875Z"
                  fill="#1A1A1A"
                />
                <path
                  d="M39.1875 18.875H40.5V21.5H39.1875V18.875Z"
                  fill="#1A1A1A"
                />
                <path
                  d="M36.5625 20.1875H37.875V21.5H36.5625V20.1875Z"
                  fill="#1A1A1A"
                />
                <path
                  d="M37.875 21.5H39.1875V22.8125H37.875V21.5Z"
                  fill="#1A1A1A"
                />
                <path
                  d="M35.25 29.375H43.125V30.6875H35.25V29.375Z"
                  fill="#1A1A1A"
                />
              </g>
              <g clipPath="url(#clip1_271_282)">
                <path d="M0 0H6V2H2V8H0V0Z" fill="#1A1A1A" />
                <path d="M26 0H32V8H30V2H26V0Z" fill="#1A1A1A" />
                <path d="M6 2H8V4H6V2Z" fill="#1A1A1A" />
                <path d="M24 2H26V10H24V8H22V6H24V2Z" fill="#1A1A1A" />
                <path d="M8 4H22V6H8V4Z" fill="#1A1A1A" />
                <path d="M6 6H8V8H6V6Z" fill="#1A1A1A" />
                <path d="M2 8H6V12H4V10H2V8Z" fill="#1A1A1A" />
                <path d="M14 8H16V10H14V8Z" fill="#1A1A1A" />
                <path d="M18 8H20V10H18V8Z" fill="#1A1A1A" />
                <path d="M28 8H30V10H28V8Z" fill="#1A1A1A" />
                <path d="M26 10H28V12H26V10Z" fill="#1A1A1A" />
                <path d="M2 12H4V20H2V12Z" fill="#1A1A1A" />
                <path
                  d="M14 12H20V16H18V20H22V22H12V20H16V16H14V12Z"
                  fill="#1A1A1A"
                />
                <path d="M28 12H30V20H28V12Z" fill="#1A1A1A" />
                <path d="M10 18H12V20H10V18Z" fill="#1A1A1A" />
                <path d="M22 18H24V20H22V18Z" fill="#1A1A1A" />
                <path d="M4 20H6V24H2V22H4V20Z" fill="#1A1A1A" />
                <path d="M26 20H28V22H30V24H26V20Z" fill="#1A1A1A" />
                <path d="M0 24H2V26H0V24Z" fill="#1A1A1A" />
                <path d="M6 24H10V26H6V24Z" fill="#1A1A1A" />
                <path d="M22 24H26V26H22V24Z" fill="#1A1A1A" />
                <path d="M30 24H32V26H30V24Z" fill="#1A1A1A" />
                <path d="M2 26H4V28H2V26Z" fill="#1A1A1A" />
                <path d="M10 26H22V28H10V26Z" fill="#1A1A1A" />
                <path d="M28 26H30V28H28V26Z" fill="#1A1A1A" />
                <path d="M4 28H8V30H4V28Z" fill="#1A1A1A" />
                <path d="M24 28H28V30H24V28Z" fill="#1A1A1A" />
                <path d="M8 30H24V32H8V30Z" fill="#1A1A1A" />
              </g>
              <defs>
                <clipPath id="clip0_271_282">
                  <rect
                    width="21"
                    height="21"
                    fill="white"
                    transform="translate(30 11)"
                  />
                </clipPath>
                <clipPath id="clip1_271_282">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <p className="mx-1 font-bold">JSD6 : Group 8</p>
        <div className="flex">
          <svg
            className="mr-1"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm0-5c2.76 0 5-2.24 5-5a5.002 5.002 0 00-9.288-2.572l1.715 1.028A2.997 2.997 0 0112 9c1.658 0 3 1.342 3 3s-1.342 3-3 3a2.998 2.998 0 01-2.574-1.457l-1.714 1.03A5.001 5.001 0 0012 17z" />
          </svg>
          <p> {year} - No Rights Reserved</p>
        </div>
      </aside>
    </footer>
  );
}

export default Footer;
