import React from "react";
import {useState, useEffect} from "react";

import { InfoPromo } from "../components/Info/InfoPromo"
import Header from "../components/Header&Footer/Header";
import Footer from "../components/Header&Footer/Footer";
import { HeaderBurger } from "../components/Header&Footer/HeaderBurger";
import { InfoMaterials } from "../components/Info/InfoMaterials";
import { Helmet } from "react-helmet";
import articlesService from "../services/articlesService";


export const Info = () => {
    const [loginVisible, setLoginVisible] = useState(false);
    const [regVisible, setRegVisible] = useState(false);
    const [account, setAccount] = useState(false);
    const [email, setEmail] = useState("");

    const [articles, setArticles] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        const jwt = localStorage.getItem('jwt');
      if (jwt) {
        setAccount(true);
        console.log("user found");
        const localEmail = localStorage.getItem("email");
        setEmail(localEmail);
        articlesService.getArticles({for_clients: "true"}).then( (res) => {
            console.log(res);
            setArticles(res);
            setLoading(false);
        }).catch(err => {
            console.log(err)})
      } else {
        console.log("net tokena");
        console.log("user unauthorized");
            setLoading(false);
      }
    }, [account])

    const logout = () => {
        localStorage.clear();
        setAccount(false);
    }
    
    //
    const [defaultPageWidth, setDefaultPageWidth] = React.useState(window.innerWidth);
    const bp = 767;
    React.useEffect(() => {
        const windowResizer = () => setDefaultPageWidth(window.innerWidth);
        window.addEventListener("resize", windowResizer);
        return () => {
            window.removeEventListener("resize", windowResizer);
        };
    }, []);

    return (
        <div>
            <Helmet>
                <title>Полезные материалы | DK-CONSULTING</title>
                <meta name="description" content="Полезные материалы компании" />
            </Helmet>
            {defaultPageWidth > bp
                ? <Header />
                : <HeaderBurger/>
            }
            <main className="mt-[70px] min-h-[calc(100vh-185px)] lg:mt-[87px] md:mt-[87px] sm:mt-[64px] xs:mt-[64px]">
                <InfoPromo 
                    account={account} 
                    email={email} 
                    logout={logout} 
                    setRegVisible={setRegVisible} 
                    setLoginVisible={setLoginVisible} 
                    setAccount={setAccount}
                    loginVisible={loginVisible} 
                    regVisible={regVisible}
                />
                <InfoMaterials
                    setAccount={setAccount}
                    loginVisible={loginVisible} 
                    regVisible={regVisible}
                    articles={articles}
                    setRegVisible={setRegVisible} 
                    setLoginVisible={setLoginVisible}
                    isLoading={isLoading}
                    account={account} 
                />
            </main>
            <Footer />
        </div>
    )
}