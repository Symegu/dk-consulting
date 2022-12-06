import {useEffect, useState} from "react";
import articlesService from "../../services/articlesService";
import { Pagination } from "../UI/Pagination";
import Register from "../UI/Register";
import Login from "../UI/Login";


export const InfoMaterials = () => {

    const [loginVisible, setLoginVisible] = useState(false);
    const [regVisible, setRegVisible] = useState(false);
    const [account, setAccount] = useState(false);

    const [articles, setArticles] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [isLoading, setLoading] = useState(false);
    //localStorage.clear()

    console.log(articles)

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);

    const pageNumbers = [];

    for (let i=1; i<=Math.ceil(articles.length/postsPerPage); i++) {
        pageNumbers.push(i);
    }

    console.log(currentPosts)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    const paginateNext = () => {
        pageNumbers.length >= currentPage+1 ? setCurrentPage(currentPage+1) : setCurrentPage(1)
    }
    const paginatePrev = () => {
        0 >= currentPage-1 ? setCurrentPage(pageNumbers.length) : setCurrentPage(currentPage-1)
    }

    useEffect(()=>{
        setLoading(true);
        const jwt = localStorage.getItem("jwt");
        if (jwt) {
            setLoggedIn(true);
            console.log("user found");
            articlesService.getArticles({for_clients: "true"}).then( (res) => {
                console.log(res);
                setArticles(res);
                setLoading(false);
            }).catch(err => {
                console.log(err)})
        } else {
            console.log("user unauthorized");
            setLoading(false);
        }
       
    }, []);



    return (
        <section id="info-materials"> 
            <Register isVisible={regVisible} setVisible={setRegVisible} setLoginVisible={setLoginVisible}/>
            <Login isVisible={loginVisible} setVisible={setLoginVisible} setAccount={setAccount} regVisible={setRegVisible}/>
            {isLoading ? <p>Загрузка</p> : <ul className="py-[52px] max-w-[1290px] mx-auto relative lg:max-w-[940px] lg:py-[60px] md:max-w-[690px] sm:max-w-[420px] sm:py-[20px] xs:max-w-[290px] xs:py-5">
                {loggedIn === false
                    ? <li className="flex flex-col items-center">
                        <h1 className="par leading-5 text-center lg:text-lg md:text-lg sm:text-sm sm:leading-5 xs:text-xs xs:leading-5">
                            Вам необходимо 
                            &nbsp;<button className="underline hover:text-blue duration-300" onClick={() => {setRegVisible(true)}}>зарегистрироваться</button>&nbsp;или&nbsp;
                            <button className="underline hover:text-blue duration-300" onClick={() => {setLoginVisible(true)}}>авторизироваться</button>&nbsp;
                            <span className="block mt-4 sm:mt-2 xs:mt-2 xs:inline">чтобы увидеть пользовательские материалы</span>
                        </h1>
                        <div className="mt-10 w-36 lg:w-32 md:w-28 sm:w-24 sm:mt-8 xs:w-20 xs:mt-6">
                            <svg className="w-full h-auto" width="183" height="138" viewBox="0 0 183 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_121_1307" fill="white">
                            <path d="M108.014 9.24069C109.671 9.24069 111.014 7.89754 111.014 6.24069V3.38217C111.014 1.72404 109.669 0.380367 108.011 0.382168L74.8187 0.418211C73.1631 0.420009 71.822 1.76263 71.822 3.41821V6.24069C71.822 7.89754 73.1651 9.24069 74.822 9.24069H108.014ZM178.867 78.6094L178.36 78.7796L177.679 79.0088C177.106 79.1987 176.546 79.3951 175.97 79.5719C174.988 79.8992 173.966 80.207 172.952 80.5115L172.218 80.7438L170.47 81.2807C169.455 81.5819 168.444 81.8634 167.432 82.145L166.45 82.4265C165.923 82.5804 165.383 82.731 164.853 82.8816L162.813 83.4086L161.831 83.6639L161.108 83.857C160.453 84.0273 159.798 84.1845 159.143 84.3613C158.354 84.5577 157.546 84.7442 156.737 84.9341L156.119 85.0782L155.464 85.2287C154.753 85.3957 154.05 85.5561 153.339 85.7197C152.629 85.8834 151.896 86.0471 151.166 86.1912L150.308 86.3712L149.287 86.5906C148.684 86.7117 148.072 86.8459 147.463 86.9703L145.27 87.386L144.396 87.5498L143.554 87.7101C142.87 87.8378 142.189 87.9721 141.512 88.0867C140.713 88.2307 139.894 88.3616 139.076 88.4991L138.392 88.6072L137.472 88.761C136.817 88.8756 136.162 88.9804 135.508 89.0884C134.646 89.2193 133.782 89.3459 132.918 89.4681L132.316 89.55L131.258 89.7005C130.646 89.7954 130.024 89.8806 129.402 89.9625C128.643 90.0639 127.873 90.1556 127.111 90.2473L126.171 90.352L125.418 90.4469C124.695 90.5418 123.971 90.627 123.248 90.7088C122.357 90.8005 121.49 90.8857 120.629 90.9675L120 91.0263L119.018 91.1278C118.347 91.1933 117.676 91.2621 116.998 91.3243C116.321 91.3865 115.666 91.429 115.001 91.4781L113.865 91.56L112.988 91.632C112.216 91.6909 111.443 91.7531 110.67 91.8055C110.075 91.8448 109.466 91.871 108.854 91.907L107.803 91.9659L106.549 92.0314C105.814 92.0815 105.239 92.6817 105.239 93.4183V101.767C105.229 104.021 104.329 106.18 102.735 107.774C101.141 109.368 98.9821 110.268 96.7279 110.279H86.1213C83.8666 110.27 81.7066 109.371 80.1123 107.776C78.5179 106.182 77.6184 104.022 77.6098 101.767V93.4575C77.6098 92.6972 77.0165 92.0779 76.2578 92.0281L75.2756 91.9659L74.4016 91.9299C73.6487 91.8906 72.9023 91.8513 72.1591 91.8022L70.2736 91.6614L69.2063 91.5796L68.1063 91.4945C67.3501 91.4421 66.594 91.3832 65.8443 91.321C65.0946 91.2588 64.4399 91.1835 63.7491 91.1181L63.0027 91.0362L62.0534 90.9478C61.2317 90.8692 60.4165 90.7906 59.5981 90.7023C58.9761 90.6335 58.3542 90.555 57.7289 90.483L56.7926 90.3717L55.6993 90.2407C54.9365 90.1425 54.1704 90.0574 53.4077 89.9559C52.7529 89.8708 52.0786 89.7726 51.4075 89.6776L50.6217 89.5598L49.512 89.4026C48.782 89.3044 48.0487 89.1997 47.3219 89.0753C46.6672 88.9771 46.0551 88.8723 45.4232 88.7479L44.5098 88.5974L43.7929 88.4795C42.9581 88.3453 42.1168 88.2111 41.2886 88.0605C40.5553 87.9296 39.8416 87.792 39.1149 87.6578L38.4896 87.5367L37.7399 87.3991C36.9379 87.2518 36.1392 87.1013 35.3502 86.9442C34.6366 86.8001 33.936 86.6528 33.2322 86.4989L32.5479 86.3516L31.5659 86.1421C30.8686 85.9981 30.168 85.854 29.474 85.6936C28.7799 85.5332 27.9975 85.3662 27.2577 85.1829L26.6979 85.0487L25.9254 84.8654C25.179 84.6919 24.4391 84.5216 23.696 84.3416C23.1493 84.2041 22.6124 84.0666 22.0821 83.9226L20.9723 83.6311L20.3176 83.461C19.545 83.2646 18.7735 83.0649 18.0031 82.8619L16.3663 82.397L15.3547 82.1089L14.736 81.9355C13.9504 81.7096 13.1679 81.4902 12.3953 81.2545C11.6227 81.0188 10.9516 80.8158 10.2249 80.5998L9.81566 80.4689L9.19046 80.2757C8.42115 80.0367 7.64853 79.7978 6.89886 79.5523C6.06081 79.2871 5.23581 79.0055 4.41085 78.724C3.42876 78.3966 2.44668 78.0693 1.46458 77.7419C1.15857 77.6319 0.836087 77.8587 0.836087 78.1839V137.096C0.839506 137.336 0.936607 137.565 1.10673 137.734C1.27685 137.903 1.5064 137.998 1.74611 138H181.142C181.38 137.995 181.607 137.897 181.774 137.728C181.942 137.559 182.037 137.331 182.039 137.093V78.1537C182.039 77.8422 181.73 77.6255 181.437 77.7321C180.566 78.0431 179.722 78.3246 178.867 78.6094ZM181.12 16.8685C181.12 16.8648 181.117 16.8618 181.113 16.8618H1.72323C1.48405 16.866 1.2558 16.9629 1.08665 17.132C0.917491 17.3012 0.820611 17.5294 0.816406 17.7685V67.3409C0.816406 68.5981 1.59975 69.7235 2.7825 70.1497C3.13476 70.2767 3.48843 70.4034 3.8445 70.53C4.17186 70.6446 4.49929 70.7527 4.82665 70.8574L5.501 71.0767L6.4373 71.4041C7.31137 71.702 8.18863 72.0031 9.07907 72.2879L10.2249 72.6448L10.8796 72.851C12.0582 73.2242 13.2202 73.5909 14.3988 73.9379C14.7916 74.0623 15.2041 74.1737 15.6035 74.2882L16.4481 74.5272L17.165 74.7334C18.0489 74.9855 18.9361 75.2409 19.8298 75.4864C20.3405 75.6304 20.8544 75.7614 21.3717 75.8956L22.1737 76.1018L22.9397 76.3048C23.7451 76.5143 24.5439 76.727 25.359 76.93C25.837 77.0511 26.3411 77.1657 26.8387 77.2868L27.9779 77.552L28.9796 77.7878C29.6344 77.9471 30.2967 78.103 30.9667 78.2558C31.6215 78.4097 32.3057 78.5472 32.9768 78.688L33.8704 78.8746L34.7904 79.0677C35.4123 79.2052 36.0377 79.3395 36.6727 79.4671C37.4388 79.621 38.2113 79.7617 38.9806 79.909L39.8646 80.076L40.6077 80.2135C41.2231 80.3347 41.8353 80.4525 42.454 80.5605C43.279 80.7045 44.1105 80.8387 44.9453 80.9795L45.9502 81.1432L46.9029 81.3036L48.3335 81.5328C49.2731 81.6866 50.2256 81.8176 51.175 81.9486L52.1572 82.086L52.897 82.1973L54.262 82.3839C55.4602 82.5444 56.6486 82.6819 57.8435 82.8226L58.3541 82.8816L59.2086 82.9863C59.572 83.0354 59.9354 83.0747 60.2987 83.1205C61.6409 83.2711 62.9995 83.3889 64.3482 83.5199L65.255 83.6116L66.4074 83.7196C67.4091 83.8112 68.4174 83.8865 69.429 83.9618L70.4274 84.0306L71.4095 84.1059C71.7958 84.1419 72.1918 84.1681 72.5781 84.1943C73.426 84.25 74.2772 84.2958 75.1382 84.3351L76.1596 84.3841L76.9419 84.4398C77.2992 84.4398 77.5967 84.171 77.5967 83.8137V77.0315C77.6053 74.7768 78.5049 72.6168 80.0992 71.0225C81.6936 69.4281 83.8534 68.5286 86.1081 68.52H96.7181C98.9721 68.5312 101.13 69.4316 102.724 71.0254C104.318 72.6192 105.218 74.7775 105.23 77.0315V84.4266C105.23 84.4556 105.253 84.479 105.282 84.479L106.346 84.4202L107.508 84.3579C108.425 84.3121 109.335 84.263 110.248 84.2008C110.602 84.1779 110.939 84.1549 111.269 84.1255L112.062 84.0633C113.522 83.9651 114.979 83.8571 116.429 83.7359L117.218 83.6639L118.092 83.5723C119.611 83.4315 121.077 83.2972 122.528 83.1368L123.441 83.0223L124.096 82.9437C125.592 82.7702 127.075 82.5967 128.541 82.4068L129.386 82.2824L130.231 82.1614L130.82 82.0794C132.051 81.9092 133.275 81.7357 134.493 81.5491L135.534 81.3789L136.418 81.2251L137.4 81.0679C138.382 80.9108 139.364 80.7405 140.346 80.5736C140.821 80.4885 141.286 80.4001 141.751 80.3117L142.484 80.1677L143.053 80.0662C144.085 79.873 145.119 79.6832 146.134 79.4769C146.579 79.3918 147.001 79.2969 147.443 79.2052L148.481 78.9859L149.08 78.8582C150.007 78.6651 150.933 78.4687 151.85 78.2624C152.504 78.1184 153.136 77.9645 153.778 77.8106L154.344 77.6732L154.914 77.5455C155.765 77.3458 156.623 77.1494 157.467 76.9399C158.122 76.7729 158.757 76.6125 159.402 76.4325L160.152 76.2393L161.085 76.0003L162.99 75.4929C163.821 75.267 164.627 75.0346 165.462 74.7956L165.815 74.6974L166.493 74.501C167.148 74.321 167.802 74.1344 168.434 73.9478C169.066 73.7612 169.766 73.5418 170.421 73.3355L171.344 73.0442L172.068 72.8183C172.637 72.6448 173.207 72.4713 173.767 72.2879C174.539 72.0424 175.292 71.7805 176.058 71.5285L176.746 71.2895L177.528 71.0309L179.028 70.5234C179.846 70.2386 180.664 69.9375 181.47 69.6396C181.784 69.5256 181.993 69.227 181.993 68.8926V17.762C181.986 17.5312 181.892 17.3117 181.73 17.1472C181.57 16.9842 181.354 16.8873 181.126 16.8752C181.122 16.875 181.12 16.872 181.12 16.8685ZM96.7312 102.664C96.9668 102.656 97.1903 102.558 97.3563 102.391C97.5224 102.224 97.6183 102 97.6249 101.764V95.4252C97.6249 93.7401 96.2373 92.3879 94.5523 92.4114C93.4871 92.4262 92.4487 92.4341 91.4278 92.4341C90.3981 92.4341 89.3684 92.4261 88.3013 92.411C86.6172 92.3872 85.2309 93.7388 85.2309 95.4231V101.764C85.2334 102.002 85.3295 102.23 85.4985 102.399C85.6675 102.567 85.8959 102.663 86.1344 102.664H96.7312Z"/>
                            </mask>
                            <path d="M108.014 9.24069C109.671 9.24069 111.014 7.89754 111.014 6.24069V3.38217C111.014 1.72404 109.669 0.380367 108.011 0.382168L74.8187 0.418211C73.1631 0.420009 71.822 1.76263 71.822 3.41821V6.24069C71.822 7.89754 73.1651 9.24069 74.822 9.24069H108.014ZM178.867 78.6094L178.36 78.7796L177.679 79.0088C177.106 79.1987 176.546 79.3951 175.97 79.5719C174.988 79.8992 173.966 80.207 172.952 80.5115L172.218 80.7438L170.47 81.2807C169.455 81.5819 168.444 81.8634 167.432 82.145L166.45 82.4265C165.923 82.5804 165.383 82.731 164.853 82.8816L162.813 83.4086L161.831 83.6639L161.108 83.857C160.453 84.0273 159.798 84.1845 159.143 84.3613C158.354 84.5577 157.546 84.7442 156.737 84.9341L156.119 85.0782L155.464 85.2287C154.753 85.3957 154.05 85.5561 153.339 85.7197C152.629 85.8834 151.896 86.0471 151.166 86.1912L150.308 86.3712L149.287 86.5906C148.684 86.7117 148.072 86.8459 147.463 86.9703L145.27 87.386L144.396 87.5498L143.554 87.7101C142.87 87.8378 142.189 87.9721 141.512 88.0867C140.713 88.2307 139.894 88.3616 139.076 88.4991L138.392 88.6072L137.472 88.761C136.817 88.8756 136.162 88.9804 135.508 89.0884C134.646 89.2193 133.782 89.3459 132.918 89.4681L132.316 89.55L131.258 89.7005C130.646 89.7954 130.024 89.8806 129.402 89.9625C128.643 90.0639 127.873 90.1556 127.111 90.2473L126.171 90.352L125.418 90.4469C124.695 90.5418 123.971 90.627 123.248 90.7088C122.357 90.8005 121.49 90.8857 120.629 90.9675L120 91.0263L119.018 91.1278C118.347 91.1933 117.676 91.2621 116.998 91.3243C116.321 91.3865 115.666 91.429 115.001 91.4781L113.865 91.56L112.988 91.632C112.216 91.6909 111.443 91.7531 110.67 91.8055C110.075 91.8448 109.466 91.871 108.854 91.907L107.803 91.9659L106.549 92.0314C105.814 92.0815 105.239 92.6817 105.239 93.4183V101.767C105.229 104.021 104.329 106.18 102.735 107.774C101.141 109.368 98.9821 110.268 96.7279 110.279H86.1213C83.8666 110.27 81.7066 109.371 80.1123 107.776C78.5179 106.182 77.6184 104.022 77.6098 101.767V93.4575C77.6098 92.6972 77.0165 92.0779 76.2578 92.0281L75.2756 91.9659L74.4016 91.9299C73.6487 91.8906 72.9023 91.8513 72.1591 91.8022L70.2736 91.6614L69.2063 91.5796L68.1063 91.4945C67.3501 91.4421 66.594 91.3832 65.8443 91.321C65.0946 91.2588 64.4399 91.1835 63.7491 91.1181L63.0027 91.0362L62.0534 90.9478C61.2317 90.8692 60.4165 90.7906 59.5981 90.7023C58.9761 90.6335 58.3542 90.555 57.7289 90.483L56.7926 90.3717L55.6993 90.2407C54.9365 90.1425 54.1704 90.0574 53.4077 89.9559C52.7529 89.8708 52.0786 89.7726 51.4075 89.6776L50.6217 89.5598L49.512 89.4026C48.782 89.3044 48.0487 89.1997 47.3219 89.0753C46.6672 88.9771 46.0551 88.8723 45.4232 88.7479L44.5098 88.5974L43.7929 88.4795C42.9581 88.3453 42.1168 88.2111 41.2886 88.0605C40.5553 87.9296 39.8416 87.792 39.1149 87.6578L38.4896 87.5367L37.7399 87.3991C36.9379 87.2518 36.1392 87.1013 35.3502 86.9442C34.6366 86.8001 33.936 86.6528 33.2322 86.4989L32.5479 86.3516L31.5659 86.1421C30.8686 85.9981 30.168 85.854 29.474 85.6936C28.7799 85.5332 27.9975 85.3662 27.2577 85.1829L26.6979 85.0487L25.9254 84.8654C25.179 84.6919 24.4391 84.5216 23.696 84.3416C23.1493 84.2041 22.6124 84.0666 22.0821 83.9226L20.9723 83.6311L20.3176 83.461C19.545 83.2646 18.7735 83.0649 18.0031 82.8619L16.3663 82.397L15.3547 82.1089L14.736 81.9355C13.9504 81.7096 13.1679 81.4902 12.3953 81.2545C11.6227 81.0188 10.9516 80.8158 10.2249 80.5998L9.81566 80.4689L9.19046 80.2757C8.42115 80.0367 7.64853 79.7978 6.89886 79.5523C6.06081 79.2871 5.23581 79.0055 4.41085 78.724C3.42876 78.3966 2.44668 78.0693 1.46458 77.7419C1.15857 77.6319 0.836087 77.8587 0.836087 78.1839V137.096C0.839506 137.336 0.936607 137.565 1.10673 137.734C1.27685 137.903 1.5064 137.998 1.74611 138H181.142C181.38 137.995 181.607 137.897 181.774 137.728C181.942 137.559 182.037 137.331 182.039 137.093V78.1537C182.039 77.8422 181.73 77.6255 181.437 77.7321C180.566 78.0431 179.722 78.3246 178.867 78.6094ZM181.12 16.8685C181.12 16.8648 181.117 16.8618 181.113 16.8618H1.72323C1.48405 16.866 1.2558 16.9629 1.08665 17.132C0.917491 17.3012 0.820611 17.5294 0.816406 17.7685V67.3409C0.816406 68.5981 1.59975 69.7235 2.7825 70.1497C3.13476 70.2767 3.48843 70.4034 3.8445 70.53C4.17186 70.6446 4.49929 70.7527 4.82665 70.8574L5.501 71.0767L6.4373 71.4041C7.31137 71.702 8.18863 72.0031 9.07907 72.2879L10.2249 72.6448L10.8796 72.851C12.0582 73.2242 13.2202 73.5909 14.3988 73.9379C14.7916 74.0623 15.2041 74.1737 15.6035 74.2882L16.4481 74.5272L17.165 74.7334C18.0489 74.9855 18.9361 75.2409 19.8298 75.4864C20.3405 75.6304 20.8544 75.7614 21.3717 75.8956L22.1737 76.1018L22.9397 76.3048C23.7451 76.5143 24.5439 76.727 25.359 76.93C25.837 77.0511 26.3411 77.1657 26.8387 77.2868L27.9779 77.552L28.9796 77.7878C29.6344 77.9471 30.2967 78.103 30.9667 78.2558C31.6215 78.4097 32.3057 78.5472 32.9768 78.688L33.8704 78.8746L34.7904 79.0677C35.4123 79.2052 36.0377 79.3395 36.6727 79.4671C37.4388 79.621 38.2113 79.7617 38.9806 79.909L39.8646 80.076L40.6077 80.2135C41.2231 80.3347 41.8353 80.4525 42.454 80.5605C43.279 80.7045 44.1105 80.8387 44.9453 80.9795L45.9502 81.1432L46.9029 81.3036L48.3335 81.5328C49.2731 81.6866 50.2256 81.8176 51.175 81.9486L52.1572 82.086L52.897 82.1973L54.262 82.3839C55.4602 82.5444 56.6486 82.6819 57.8435 82.8226L58.3541 82.8816L59.2086 82.9863C59.572 83.0354 59.9354 83.0747 60.2987 83.1205C61.6409 83.2711 62.9995 83.3889 64.3482 83.5199L65.255 83.6116L66.4074 83.7196C67.4091 83.8112 68.4174 83.8865 69.429 83.9618L70.4274 84.0306L71.4095 84.1059C71.7958 84.1419 72.1918 84.1681 72.5781 84.1943C73.426 84.25 74.2772 84.2958 75.1382 84.3351L76.1596 84.3841L76.9419 84.4398C77.2992 84.4398 77.5967 84.171 77.5967 83.8137V77.0315C77.6053 74.7768 78.5049 72.6168 80.0992 71.0225C81.6936 69.4281 83.8534 68.5286 86.1081 68.52H96.7181C98.9721 68.5312 101.13 69.4316 102.724 71.0254C104.318 72.6192 105.218 74.7775 105.23 77.0315V84.4266C105.23 84.4556 105.253 84.479 105.282 84.479L106.346 84.4202L107.508 84.3579C108.425 84.3121 109.335 84.263 110.248 84.2008C110.602 84.1779 110.939 84.1549 111.269 84.1255L112.062 84.0633C113.522 83.9651 114.979 83.8571 116.429 83.7359L117.218 83.6639L118.092 83.5723C119.611 83.4315 121.077 83.2972 122.528 83.1368L123.441 83.0223L124.096 82.9437C125.592 82.7702 127.075 82.5967 128.541 82.4068L129.386 82.2824L130.231 82.1614L130.82 82.0794C132.051 81.9092 133.275 81.7357 134.493 81.5491L135.534 81.3789L136.418 81.2251L137.4 81.0679C138.382 80.9108 139.364 80.7405 140.346 80.5736C140.821 80.4885 141.286 80.4001 141.751 80.3117L142.484 80.1677L143.053 80.0662C144.085 79.873 145.119 79.6832 146.134 79.4769C146.579 79.3918 147.001 79.2969 147.443 79.2052L148.481 78.9859L149.08 78.8582C150.007 78.6651 150.933 78.4687 151.85 78.2624C152.504 78.1184 153.136 77.9645 153.778 77.8106L154.344 77.6732L154.914 77.5455C155.765 77.3458 156.623 77.1494 157.467 76.9399C158.122 76.7729 158.757 76.6125 159.402 76.4325L160.152 76.2393L161.085 76.0003L162.99 75.4929C163.821 75.267 164.627 75.0346 165.462 74.7956L165.815 74.6974L166.493 74.501C167.148 74.321 167.802 74.1344 168.434 73.9478C169.066 73.7612 169.766 73.5418 170.421 73.3355L171.344 73.0442L172.068 72.8183C172.637 72.6448 173.207 72.4713 173.767 72.2879C174.539 72.0424 175.292 71.7805 176.058 71.5285L176.746 71.2895L177.528 71.0309L179.028 70.5234C179.846 70.2386 180.664 69.9375 181.47 69.6396C181.784 69.5256 181.993 69.227 181.993 68.8926V17.762C181.986 17.5312 181.892 17.3117 181.73 17.1472C181.57 16.9842 181.354 16.8873 181.126 16.8752C181.122 16.875 181.12 16.872 181.12 16.8685ZM96.7312 102.664C96.9668 102.656 97.1903 102.558 97.3563 102.391C97.5224 102.224 97.6183 102 97.6249 101.764V95.4252C97.6249 93.7401 96.2373 92.3879 94.5523 92.4114C93.4871 92.4262 92.4487 92.4341 91.4278 92.4341C90.3981 92.4341 89.3684 92.4261 88.3013 92.411C86.6172 92.3872 85.2309 93.7388 85.2309 95.4231V101.764C85.2334 102.002 85.3295 102.23 85.4985 102.399C85.6675 102.567 85.8959 102.663 86.1344 102.664H96.7312Z" stroke="#4D8BBE" strokeWidth="6" mask="url(#path-1-inside-1_121_1307)"/>
                            </svg>
                        </div>
                      </li>
                    : <div>
                        {currentPosts.map((article, i) => {
                            return (
                                <li key={i} className="border-blue border-b-[1px] py-5 flex items-center">
                                    <a href={article.file_name} className="h-auto mr-7 mb-0 sm:w-12 sm:mr-4 xs:w-12 xs:mr-3 group">
                                        <svg className="w-full h-auto group-hover:fill-[#4D8BBE]" width="124" height="95" viewBox="0 0 124 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M122.868 14.9363H48.5187C47.381 14.9363 46.297 14.4518 45.5382 13.604L35.8824 2.81573C35.1236 1.96793 34.0397 1.4834 32.9019 1.4834H5.20215C2.99301 1.4834 1.20215 3.27426 1.20215 5.48339V14.9363M122.868 14.9363H1.20215M122.868 14.9363V22.8308M1.20215 14.9363V22.8308M1.20215 22.8308V89.6498C1.20215 91.859 2.99301 93.6498 5.20215 93.6498H118.868C121.077 93.6498 122.868 91.859 122.868 89.6498V22.8308M1.20215 22.8308H122.868" stroke="#4D8BBE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path className="group-hover:fill-[#ffffff]" d="M62.5097 74.7337C62.9002 75.1242 63.5334 75.1242 63.9239 74.7337L70.2879 68.3697C70.6784 67.9792 70.6784 67.346 70.2879 66.9555C69.8973 66.565 69.2642 66.565 68.8737 66.9555L63.2168 72.6123L57.5599 66.9555C57.1694 66.565 56.5363 66.565 56.1457 66.9555C55.7552 67.346 55.7552 67.9792 56.1457 68.3697L62.5097 74.7337ZM62.2168 42.4396L62.2168 74.0266L64.2168 74.0266L64.2168 42.4396L62.2168 42.4396Z" fill="#4D8BBE"/>
                                            <line className="group-hover:stroke-[#ffffff]" x1="47.2227" y1="82.0257" x2="79.2109" y2="82.0257" stroke="#4D8BBE" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                    </a>
                                    <div>
                                        <h3 className="text-2xl lg:text-xl md:text-xl md:mb-2 sm:mb-2 sm:text-base xs:text-base xs:mb-1">{article.title}</h3>
                                        <p className="text-xl font-light lg:text-base md:text-base sm:text-xs xs:text-xs">{article.description}</p>
                                    </div>
                                </li>
                            )
                        }) }
                    </div>
                }
            </ul>
            
            }
            {currentPosts.length <= postsPerPage 
                ? <Pagination pageNumbers={pageNumbers} paginate={paginate} paginateNext={paginateNext} paginatePrev={paginatePrev}/>
                : <></>
            }
            
        </section>
    )
}
