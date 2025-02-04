import { NavLink } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import authService from "../../services/authService";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Register(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [msgVisible, setMsgVisible] = useState(false);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePasswordRChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleNicknameChange = (e) => {
        setName(e.target.value);
    };

    let closer = () => {
        setTimeout(() => {
            setMsgVisible(false);
            props.setVisible(false);
        }, "2000");
    };

    let errCloser = () => {
        setTimeout(() => {
            setMsgVisible(false);
            props.setVisible(false);
        }, "2000");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMsgVisible(true);
        setMessage("Загрузка");
        if (password === confirmPassword) {
            authService
                .register({
                    email: email,
                    username: name,
                    password: password,
                    password2: confirmPassword,
                })
                .then((res) => {
                    setMessage("Вы успешно зарегистрировались!");
                    console.log(res);
                    closer();
                })
                .catch((err) => {
                    setMessage("Что-то пошло не так, попробуйте позже");
                    console.log(err);
                    errCloser();
                });
        } else {
            setMessage(
                "Пароли не совпадают, проверьте данные и попробуйте еще раз"
            );
            setTimeout(() => {
                setMsgVisible(false);
            }, "2000");
        }
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <section>
            <section
                className={
                    props.isVisible
                        ? "bg-[rgba(0,0,0,0.5)] block fixed z-[500] top-0 w-full"
                        : "hidden"
                }
            >
                <div className="mx-auto  h-[100vh] flex flex-col items-center justify-center ">
                    <div className="w-[860px] h-[max-content] bg-[#0A0B22] flex flex-col items-center relative py-[50px] lg:w-[680px] md:w-[680px] md:py-30px sm:w-[410px] sm:py-5 xs:w-[290px] xs:py-5">
                        <button
                            className="absolute right-[22px] top-[30px] sm:top-4 sm:right-4"
                            onClick={() => {
                                clearTimeout(closer);
                                clearTimeout(errCloser);
                                props.setVisible(false);
                            }}
                        >
                            <svg
                                className="sm:w-4 xs:w-4"
                                width="27"
                                height="27"
                                viewBox="0 0 27 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.45508 1.22253L26.4551 26.2225M26.4551 1.22253L1.45508 26.2225"
                                    stroke="#E8E9EF"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        {msgVisible ? (
                            <div className="flex flex-col items-center justify-center py-20">
                                <h2 className="text-white text-[40px] text-center leading-[56px] font-extralight lg:text-4xl md:text-4xl md:mt-[25px] sm:mt-5 sm:text-xl sm:uppercase xs:uppercase xs:text-lg  xs:mt-4">
                                    {message}
                                </h2>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center">
                                <svg
                                    className="sm:w-11 xs:w-11"
                                    width="77"
                                    height="59"
                                    viewBox="0 0 77 59"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <mask
                                        id="path-1-inside-1_315_2799"
                                        fill="white"
                                    >
                                        <path d="M44.8849 4.16786C45.9224 4.16786 46.7635 3.3268 46.7635 2.2893C46.7635 1.251 45.9212 0.409606 44.8829 0.410734L32.0077 0.424715C30.9748 0.425836 30.1382 1.26344 30.1382 2.29629C30.1382 3.32993 30.9761 4.16786 32.0097 4.16786H44.8849ZM75.5467 33.5941L75.3315 33.6663L75.0427 33.7635C74.7996 33.8441 74.5622 33.9274 74.3178 34.0024C73.9012 34.1412 73.4678 34.2718 73.0374 34.4009L72.7263 34.4995L71.9847 34.7273C71.5543 34.855 71.1252 34.9745 70.6961 35.0939L70.2795 35.2133C70.0559 35.2786 69.8267 35.3425 69.6018 35.4063L68.7366 35.6299L68.32 35.7382L68.0131 35.8201C67.7354 35.8923 67.4577 35.959 67.1799 36.034C66.8453 36.1173 66.5023 36.1965 66.1593 36.277L65.8968 36.3381L65.619 36.402C65.3177 36.4728 65.0191 36.5409 64.7178 36.6103C64.4165 36.6797 64.1054 36.7492 63.7957 36.8103L63.4318 36.8867L62.9986 36.9797C62.7431 37.0311 62.4834 37.088 62.2251 37.1408L61.2946 37.3171L60.9239 37.3866L60.567 37.4546C60.2768 37.5088 59.988 37.5657 59.7005 37.6143C59.3617 37.6754 59.0145 37.731 58.6673 37.7893L58.3771 37.8351L57.9868 37.9004C57.7091 37.949 57.4314 37.9935 57.1536 38.0393C56.788 38.0948 56.4218 38.1485 56.0552 38.2004L55.7997 38.2351L55.3511 38.2989C55.0914 38.3392 54.8276 38.3753 54.5637 38.4101C54.2415 38.4531 53.9152 38.492 53.5917 38.5309L53.1931 38.5753L52.8737 38.6156C52.5668 38.6558 52.2599 38.692 51.953 38.7267C51.5753 38.7656 51.2073 38.8017 50.842 38.8364L50.5754 38.8614L50.1588 38.9044C49.8741 38.9322 49.5894 38.9613 49.302 38.9877C49.0145 39.0141 48.7368 39.0322 48.4549 39.053L47.973 39.0877L47.6009 39.1183C47.2732 39.1433 46.9454 39.1697 46.6177 39.1919C46.3649 39.2085 46.1067 39.2197 45.847 39.2349L45.4012 39.2599L44.8693 39.2877C44.5576 39.3089 44.3139 39.5636 44.3139 39.876V43.4176C44.3095 44.3739 43.9277 45.2897 43.2515 45.9659C42.5753 46.642 41.6595 47.0238 40.7033 47.0282H36.2039C35.2475 47.0246 34.3312 46.643 33.6549 45.9667C32.9786 45.2903 32.597 44.3741 32.5934 43.4176V39.8927C32.5934 39.5701 32.3417 39.3074 32.0198 39.2863L31.6032 39.2599L31.2324 39.2446C30.913 39.228 30.5964 39.2113 30.2812 39.1905L29.4813 39.1308L29.0286 39.0961L28.562 39.0599C28.2412 39.0377 27.9204 39.0127 27.6024 38.9863C27.2844 38.9599 27.0067 38.928 26.7137 38.9003L26.397 38.8656L25.9943 38.828C25.6457 38.7947 25.3 38.7614 24.9528 38.7239C24.6889 38.6947 24.4251 38.6614 24.1599 38.6309L23.7627 38.5836L23.2989 38.5281C22.9753 38.4864 22.6504 38.4503 22.3268 38.4073C22.0491 38.3712 21.763 38.3295 21.4783 38.2892L21.145 38.2392L20.6743 38.1726C20.3646 38.1309 20.0535 38.0865 19.7452 38.0337C19.4675 37.9921 19.2078 37.9476 18.9398 37.8949L18.5523 37.831L18.2482 37.781C17.8941 37.724 17.5372 37.6671 17.1859 37.6032C16.8748 37.5477 16.5721 37.4893 16.2638 37.4324L15.9986 37.3811L15.6805 37.3227C15.3403 37.2602 15.0015 37.1964 14.6668 37.1297C14.3641 37.0686 14.0669 37.0061 13.7683 36.9408L13.4781 36.8783L13.0615 36.7895C12.7657 36.7284 12.4685 36.6672 12.1741 36.5992C11.8797 36.5311 11.5478 36.4603 11.234 36.3825L10.9965 36.3256L10.6688 36.2479C10.3522 36.1743 10.0383 36.1021 9.72311 36.0257C9.4912 35.9674 9.26344 35.909 9.03848 35.8479L8.56773 35.7243L8.28997 35.6521C7.96224 35.5688 7.63498 35.4841 7.30817 35.398L6.61383 35.2008L6.18474 35.0786L5.92229 35.005C5.589 34.9092 5.25707 34.8161 4.92934 34.7162C4.60161 34.6162 4.31694 34.5301 4.00865 34.4384L3.83506 34.3829L3.56985 34.3009C3.24351 34.1995 2.91577 34.0982 2.59776 33.9941C2.24225 33.8816 1.89229 33.7621 1.54234 33.6427C1.12574 33.5038 0.70914 33.365 0.292535 33.2261C0.162725 33.1794 0.0259268 33.2756 0.0259268 33.4136V58.4043C0.027377 58.506 0.0685674 58.6031 0.140732 58.6747C0.212897 58.7464 0.310272 58.7869 0.41196 58.7876H76.5119C76.6128 58.7854 76.709 58.7441 76.78 58.6723C76.8511 58.6005 76.8913 58.5039 76.8923 58.403V33.4008C76.8923 33.2686 76.761 33.1767 76.6369 33.2219C76.2675 33.3539 75.9092 33.4733 75.5467 33.5941ZM76.5022 7.40356C76.5022 7.402 76.5009 7.40072 76.4994 7.40072H0.402255C0.300793 7.40251 0.20397 7.4436 0.132214 7.51536C0.0604583 7.58712 0.0193617 7.68392 0.0175781 7.78538V28.3355C0.0175781 29.1563 0.528772 29.8917 1.30209 30.1668C1.44096 30.2154 1.57986 30.2613 1.71873 30.3057L2.00479 30.3987L2.40196 30.5376C2.77274 30.664 3.14488 30.7917 3.5226 30.9125L4.00865 31.0639L4.2864 31.1514C4.78633 31.3097 5.27929 31.4652 5.77921 31.6124C5.94586 31.6652 6.12085 31.7124 6.29026 31.761L6.64854 31.8624L6.95265 31.9499C7.3276 32.0568 7.70397 32.1651 8.08308 32.2693C8.29971 32.3304 8.51771 32.386 8.73712 32.4429L9.07734 32.5304L9.4023 32.6165C9.74392 32.7053 10.0828 32.7956 10.4286 32.8817C10.6313 32.9331 10.8452 32.9817 11.0562 33.0331L11.5395 33.1455L11.9644 33.2455C12.2422 33.3131 12.5231 33.3793 12.8074 33.4441C13.0851 33.5094 13.3753 33.5677 13.66 33.6274L14.0391 33.7066L14.4293 33.7885C14.6932 33.8468 14.9584 33.9038 15.2278 33.9579C15.5528 34.0232 15.8805 34.0829 16.2069 34.1454L16.5818 34.2162L16.897 34.2746C17.1581 34.3259 17.4178 34.3759 17.6803 34.4217C18.0302 34.4828 18.3829 34.5398 18.7371 34.5995L19.1634 34.6689L19.5675 34.737L20.1744 34.8342C20.5729 34.8994 20.977 34.955 21.3797 35.0106L21.7963 35.0689L22.1102 35.1161L22.6892 35.1953C23.1975 35.2633 23.7016 35.3216 24.2085 35.3813L24.4251 35.4063L24.7876 35.4508C24.9417 35.4716 25.0959 35.4883 25.25 35.5077C25.8194 35.5716 26.3957 35.6216 26.9678 35.6771L27.3524 35.716L27.8413 35.7618C28.2662 35.8007 28.6939 35.8326 29.123 35.8646L29.5466 35.8937L29.9632 35.9257C30.127 35.941 30.2951 35.9521 30.4589 35.9632C30.8186 35.9868 31.1797 36.0063 31.5449 36.0229L31.9782 36.0437L32.3101 36.0673C32.4616 36.0673 32.5878 35.9533 32.5878 35.8018V32.9247C32.5915 31.9683 32.973 31.052 33.6494 30.3757C34.3257 29.6994 35.2419 29.3178 36.1983 29.3141H40.6991C41.6552 29.3189 42.5708 29.7008 43.2469 30.3769C43.923 31.053 44.3049 31.9686 44.3097 32.9247V36.0617C44.3097 36.074 44.3196 36.084 44.3319 36.084L44.7832 36.059L45.2762 36.0326C45.665 36.0132 46.0511 35.9923 46.4385 35.966C46.5885 35.9562 46.7315 35.9465 46.8718 35.934L47.2079 35.9076C47.8272 35.866 48.4452 35.8202 49.0604 35.7688L49.3951 35.7382L49.7658 35.6994C50.4102 35.6396 51.0323 35.5827 51.6475 35.5146L52.0349 35.4661L52.3127 35.4327C52.9473 35.3591 53.5764 35.2855 54.1985 35.205L54.5568 35.1522L54.9151 35.1008L55.165 35.0661C55.6872 34.9939 56.2066 34.9203 56.7232 34.8411L57.1647 34.7689L57.5397 34.7037L57.9563 34.637C58.3729 34.5703 58.7895 34.4981 59.2061 34.4273C59.4075 34.3912 59.6047 34.3537 59.8019 34.3162L60.1129 34.2551L60.3545 34.2121C60.7919 34.1301 61.2308 34.0496 61.6613 33.9621C61.8502 33.926 62.0293 33.8857 62.2167 33.8468L62.657 33.7538L62.9111 33.6996C63.3041 33.6177 63.6971 33.5344 64.0859 33.4469C64.3637 33.3858 64.6317 33.3205 64.9038 33.2553L65.1441 33.1969L65.3858 33.1428C65.7468 33.0581 66.1106 32.9748 66.4689 32.8859C66.7466 32.8151 67.0161 32.747 67.2896 32.6706L67.6076 32.5887L68.0034 32.4873L68.8116 32.2721C69.1644 32.1762 69.506 32.0777 69.8601 31.9763L70.01 31.9346L70.2975 31.8513C70.5753 31.7749 70.853 31.6958 71.121 31.6166C71.3891 31.5375 71.6862 31.4444 71.964 31.3569L72.3556 31.2333L72.6625 31.1375C72.9041 31.0639 73.1457 30.9903 73.3832 30.9125C73.7109 30.8084 74.0303 30.6973 74.3553 30.5904L74.6469 30.489L74.9788 30.3793L75.6148 30.164C75.962 30.0432 76.3092 29.9155 76.6508 29.7891C76.7841 29.7407 76.8729 29.6141 76.8729 29.4722V7.7826C76.8699 7.68471 76.83 7.59157 76.7613 7.5218C76.6932 7.45268 76.6018 7.41154 76.5049 7.40641C76.5034 7.40633 76.5022 7.40508 76.5022 7.40356ZM40.7047 43.7982C40.8046 43.7947 40.8994 43.7532 40.9698 43.6823C41.0403 43.6113 41.081 43.5162 41.0838 43.4162V42.0529C41.0838 40.6112 39.8966 39.4585 38.455 39.4585C37.013 39.4585 35.8262 40.6109 35.8262 42.0528V43.4162C35.8273 43.5174 35.8681 43.6141 35.9398 43.6856C36.0114 43.757 36.1083 43.7974 36.2095 43.7982H40.7047Z" />
                                    </mask>
                                    <path
                                        d="M44.8849 4.16786C45.9224 4.16786 46.7635 3.3268 46.7635 2.2893C46.7635 1.251 45.9212 0.409606 44.8829 0.410734L32.0077 0.424715C30.9748 0.425836 30.1382 1.26344 30.1382 2.29629C30.1382 3.32993 30.9761 4.16786 32.0097 4.16786H44.8849ZM75.5467 33.5941L75.3315 33.6663L75.0427 33.7635C74.7996 33.8441 74.5622 33.9274 74.3178 34.0024C73.9012 34.1412 73.4678 34.2718 73.0374 34.4009L72.7263 34.4995L71.9847 34.7273C71.5543 34.855 71.1252 34.9745 70.6961 35.0939L70.2795 35.2133C70.0559 35.2786 69.8267 35.3425 69.6018 35.4063L68.7366 35.6299L68.32 35.7382L68.0131 35.8201C67.7354 35.8923 67.4577 35.959 67.1799 36.034C66.8453 36.1173 66.5023 36.1965 66.1593 36.277L65.8968 36.3381L65.619 36.402C65.3177 36.4728 65.0191 36.5409 64.7178 36.6103C64.4165 36.6797 64.1054 36.7492 63.7957 36.8103L63.4318 36.8867L62.9986 36.9797C62.7431 37.0311 62.4834 37.088 62.2251 37.1408L61.2946 37.3171L60.9239 37.3866L60.567 37.4546C60.2768 37.5088 59.988 37.5657 59.7005 37.6143C59.3617 37.6754 59.0145 37.731 58.6673 37.7893L58.3771 37.8351L57.9868 37.9004C57.7091 37.949 57.4314 37.9935 57.1536 38.0393C56.788 38.0948 56.4218 38.1485 56.0552 38.2004L55.7997 38.2351L55.3511 38.2989C55.0914 38.3392 54.8276 38.3753 54.5637 38.4101C54.2415 38.4531 53.9152 38.492 53.5917 38.5309L53.1931 38.5753L52.8737 38.6156C52.5668 38.6558 52.2599 38.692 51.953 38.7267C51.5753 38.7656 51.2073 38.8017 50.842 38.8364L50.5754 38.8614L50.1588 38.9044C49.8741 38.9322 49.5894 38.9613 49.302 38.9877C49.0145 39.0141 48.7368 39.0322 48.4549 39.053L47.973 39.0877L47.6009 39.1183C47.2732 39.1433 46.9454 39.1697 46.6177 39.1919C46.3649 39.2085 46.1067 39.2197 45.847 39.2349L45.4012 39.2599L44.8693 39.2877C44.5576 39.3089 44.3139 39.5636 44.3139 39.876V43.4176C44.3095 44.3739 43.9277 45.2897 43.2515 45.9659C42.5753 46.642 41.6595 47.0238 40.7033 47.0282H36.2039C35.2475 47.0246 34.3312 46.643 33.6549 45.9667C32.9786 45.2903 32.597 44.3741 32.5934 43.4176V39.8927C32.5934 39.5701 32.3417 39.3074 32.0198 39.2863L31.6032 39.2599L31.2324 39.2446C30.913 39.228 30.5964 39.2113 30.2812 39.1905L29.4813 39.1308L29.0286 39.0961L28.562 39.0599C28.2412 39.0377 27.9204 39.0127 27.6024 38.9863C27.2844 38.9599 27.0067 38.928 26.7137 38.9003L26.397 38.8656L25.9943 38.828C25.6457 38.7947 25.3 38.7614 24.9528 38.7239C24.6889 38.6947 24.4251 38.6614 24.1599 38.6309L23.7627 38.5836L23.2989 38.5281C22.9753 38.4864 22.6504 38.4503 22.3268 38.4073C22.0491 38.3712 21.763 38.3295 21.4783 38.2892L21.145 38.2392L20.6743 38.1726C20.3646 38.1309 20.0535 38.0865 19.7452 38.0337C19.4675 37.9921 19.2078 37.9476 18.9398 37.8949L18.5523 37.831L18.2482 37.781C17.8941 37.724 17.5372 37.6671 17.1859 37.6032C16.8748 37.5477 16.5721 37.4893 16.2638 37.4324L15.9986 37.3811L15.6805 37.3227C15.3403 37.2602 15.0015 37.1964 14.6668 37.1297C14.3641 37.0686 14.0669 37.0061 13.7683 36.9408L13.4781 36.8783L13.0615 36.7895C12.7657 36.7284 12.4685 36.6672 12.1741 36.5992C11.8797 36.5311 11.5478 36.4603 11.234 36.3825L10.9965 36.3256L10.6688 36.2479C10.3522 36.1743 10.0383 36.1021 9.72311 36.0257C9.4912 35.9674 9.26344 35.909 9.03848 35.8479L8.56773 35.7243L8.28997 35.6521C7.96224 35.5688 7.63498 35.4841 7.30817 35.398L6.61383 35.2008L6.18474 35.0786L5.92229 35.005C5.589 34.9092 5.25707 34.8161 4.92934 34.7162C4.60161 34.6162 4.31694 34.5301 4.00865 34.4384L3.83506 34.3829L3.56985 34.3009C3.24351 34.1995 2.91577 34.0982 2.59776 33.9941C2.24225 33.8816 1.89229 33.7621 1.54234 33.6427C1.12574 33.5038 0.70914 33.365 0.292535 33.2261C0.162725 33.1794 0.0259268 33.2756 0.0259268 33.4136V58.4043C0.027377 58.506 0.0685674 58.6031 0.140732 58.6747C0.212897 58.7464 0.310272 58.7869 0.41196 58.7876H76.5119C76.6128 58.7854 76.709 58.7441 76.78 58.6723C76.8511 58.6005 76.8913 58.5039 76.8923 58.403V33.4008C76.8923 33.2686 76.761 33.1767 76.6369 33.2219C76.2675 33.3539 75.9092 33.4733 75.5467 33.5941ZM76.5022 7.40356C76.5022 7.402 76.5009 7.40072 76.4994 7.40072H0.402255C0.300793 7.40251 0.20397 7.4436 0.132214 7.51536C0.0604583 7.58712 0.0193617 7.68392 0.0175781 7.78538V28.3355C0.0175781 29.1563 0.528772 29.8917 1.30209 30.1668C1.44096 30.2154 1.57986 30.2613 1.71873 30.3057L2.00479 30.3987L2.40196 30.5376C2.77274 30.664 3.14488 30.7917 3.5226 30.9125L4.00865 31.0639L4.2864 31.1514C4.78633 31.3097 5.27929 31.4652 5.77921 31.6124C5.94586 31.6652 6.12085 31.7124 6.29026 31.761L6.64854 31.8624L6.95265 31.9499C7.3276 32.0568 7.70397 32.1651 8.08308 32.2693C8.29971 32.3304 8.51771 32.386 8.73712 32.4429L9.07734 32.5304L9.4023 32.6165C9.74392 32.7053 10.0828 32.7956 10.4286 32.8817C10.6313 32.9331 10.8452 32.9817 11.0562 33.0331L11.5395 33.1455L11.9644 33.2455C12.2422 33.3131 12.5231 33.3793 12.8074 33.4441C13.0851 33.5094 13.3753 33.5677 13.66 33.6274L14.0391 33.7066L14.4293 33.7885C14.6932 33.8468 14.9584 33.9038 15.2278 33.9579C15.5528 34.0232 15.8805 34.0829 16.2069 34.1454L16.5818 34.2162L16.897 34.2746C17.1581 34.3259 17.4178 34.3759 17.6803 34.4217C18.0302 34.4828 18.3829 34.5398 18.7371 34.5995L19.1634 34.6689L19.5675 34.737L20.1744 34.8342C20.5729 34.8994 20.977 34.955 21.3797 35.0106L21.7963 35.0689L22.1102 35.1161L22.6892 35.1953C23.1975 35.2633 23.7016 35.3216 24.2085 35.3813L24.4251 35.4063L24.7876 35.4508C24.9417 35.4716 25.0959 35.4883 25.25 35.5077C25.8194 35.5716 26.3957 35.6216 26.9678 35.6771L27.3524 35.716L27.8413 35.7618C28.2662 35.8007 28.6939 35.8326 29.123 35.8646L29.5466 35.8937L29.9632 35.9257C30.127 35.941 30.2951 35.9521 30.4589 35.9632C30.8186 35.9868 31.1797 36.0063 31.5449 36.0229L31.9782 36.0437L32.3101 36.0673C32.4616 36.0673 32.5878 35.9533 32.5878 35.8018V32.9247C32.5915 31.9683 32.973 31.052 33.6494 30.3757C34.3257 29.6994 35.2419 29.3178 36.1983 29.3141H40.6991C41.6552 29.3189 42.5708 29.7008 43.2469 30.3769C43.923 31.053 44.3049 31.9686 44.3097 32.9247V36.0617C44.3097 36.074 44.3196 36.084 44.3319 36.084L44.7832 36.059L45.2762 36.0326C45.665 36.0132 46.0511 35.9923 46.4385 35.966C46.5885 35.9562 46.7315 35.9465 46.8718 35.934L47.2079 35.9076C47.8272 35.866 48.4452 35.8202 49.0604 35.7688L49.3951 35.7382L49.7658 35.6994C50.4102 35.6396 51.0323 35.5827 51.6475 35.5146L52.0349 35.4661L52.3127 35.4327C52.9473 35.3591 53.5764 35.2855 54.1985 35.205L54.5568 35.1522L54.9151 35.1008L55.165 35.0661C55.6872 34.9939 56.2066 34.9203 56.7232 34.8411L57.1647 34.7689L57.5397 34.7037L57.9563 34.637C58.3729 34.5703 58.7895 34.4981 59.2061 34.4273C59.4075 34.3912 59.6047 34.3537 59.8019 34.3162L60.1129 34.2551L60.3545 34.2121C60.7919 34.1301 61.2308 34.0496 61.6613 33.9621C61.8502 33.926 62.0293 33.8857 62.2167 33.8468L62.657 33.7538L62.9111 33.6996C63.3041 33.6177 63.6971 33.5344 64.0859 33.4469C64.3637 33.3858 64.6317 33.3205 64.9038 33.2553L65.1441 33.1969L65.3858 33.1428C65.7468 33.0581 66.1106 32.9748 66.4689 32.8859C66.7466 32.8151 67.0161 32.747 67.2896 32.6706L67.6076 32.5887L68.0034 32.4873L68.8116 32.2721C69.1644 32.1762 69.506 32.0777 69.8601 31.9763L70.01 31.9346L70.2975 31.8513C70.5753 31.7749 70.853 31.6958 71.121 31.6166C71.3891 31.5375 71.6862 31.4444 71.964 31.3569L72.3556 31.2333L72.6625 31.1375C72.9041 31.0639 73.1457 30.9903 73.3832 30.9125C73.7109 30.8084 74.0303 30.6973 74.3553 30.5904L74.6469 30.489L74.9788 30.3793L75.6148 30.164C75.962 30.0432 76.3092 29.9155 76.6508 29.7891C76.7841 29.7407 76.8729 29.6141 76.8729 29.4722V7.7826C76.8699 7.68471 76.83 7.59157 76.7613 7.5218C76.6932 7.45268 76.6018 7.41154 76.5049 7.40641C76.5034 7.40633 76.5022 7.40508 76.5022 7.40356ZM40.7047 43.7982C40.8046 43.7947 40.8994 43.7532 40.9698 43.6823C41.0403 43.6113 41.081 43.5162 41.0838 43.4162V42.0529C41.0838 40.6112 39.8966 39.4585 38.455 39.4585C37.013 39.4585 35.8262 40.6109 35.8262 42.0528V43.4162C35.8273 43.5174 35.8681 43.6141 35.9398 43.6856C36.0114 43.757 36.1083 43.7974 36.2095 43.7982H40.7047Z"
                                        stroke="#40454E"
                                        strokeWidth="6"
                                        mask="url(#path-1-inside-1_315_2799)"
                                    />
                                </svg>
                                <h2 className="text-white text-[40px] text-center leading-[56px] font-extralight mt-[50px] lg:text-3xl md:text-3xl md:mt-[25px] sm:mt-5 sm:text-lg xs:text-lg xs:mt-4 xs:max-w-[200px]">
                                    Предлагаем пройти регистрацию на сайте,
                                </h2>
                                <p className="text-white text-center text-[20px] leading-[28px] font-extralight lg:text-lg md:text-base sm:text-sm sm:text-lightgrey sm:opacity-50 xs:text-[10px] xs:text-lightgrey xs:opacity-50">
                                    чтобы Вы cмогли пользоваться полезными
                                    материалами
                                </p>

                                <form
                                    className="flex flex-col w-full items-center max-w-[710px] lg:max-w-[515px] md:max-w-[515px] sm:max-w-[320px]"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="flex flex-col w-full items-center max-w-[710px] py-4 space-y-4 lg:max-w-[515px] md:max-w-[515px] sm:max-w-[320px]">
                                        <input
                                            type="name"
                                            id="name"
                                            placeholder="Ваше имя"
                                            value={name || ""}
                                            onChange={handleNicknameChange}
                                            className="w-[100%] bg-[#0A0B22] border-b-[1px] text-white font-light text-[22px] leading-[16px] p-3 lg:text-lg md:text-lg sm:text-base xs:text-base"
                                        />
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="E-mail"
                                            value={email || ""}
                                            onChange={handleEmailChange}
                                            className="w-[100%] bg-[#0A0B22] border-b-[1px] text-white font-light text-[22px] leading-[16px] p-3 lg:text-lg md:text-lg sm:text-base xs:text-base"
                                        />
                                        <input
                                            type="password"
                                            id="password"
                                            value={password || ""}
                                            onChange={handlePasswordChange}
                                            placeholder="Придумайте пароль"
                                            className="w-[100%] bg-[#0A0B22] border-b-[1px] text-white font-light text-[22px] leading-[16px] p-3 lg:text-lg md:text-lg sm:text-base xs:text-base"
                                        />
                                        <input
                                            type="password"
                                            id="conpassword"
                                            value={confirmPassword || ""}
                                            onChange={handlePasswordRChange}
                                            placeholder="Повторите пароль"
                                            className="w-[100%] bg-[#0A0B22] border-b-[1px] text-white font-light text-[22px] leading-[16px] p-3 lg:text-lg md:text-lg sm:text-base xs:text-base"
                                        />
                                    </div>
                                    <Button
                                        bluebtn="true"
                                        buttonText="зарегистрироваться"
                                    ></Button>
                                    <p className="text-base py-3 text-lightgrey opacity-40 text-center lg:text-sm md:text-sm sm:text-xs xs:text-xs">
                                        Отправляя запрос, я подтверждаю согласие
                                        с <br />
                                        <NavLink
                                            to="/privacy-policy"
                                            className="underline cursor-pointer"
                                            onClick={scrollToTop}
                                        >
                                            политикой&nbsp;конфиденциальности
                                        </NavLink>
                                    </p>
                                </form>
                                <button
                                    className="text-blue text-xl font-light lg:text-lg md:text-lg sm:text-base xs:text-sm"
                                    onClick={() => {
                                        props.setVisible(false);
                                        props.setLoginVisible(true);
                                    }}
                                >
                                    Авторизоваться
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </section>
    );
}
