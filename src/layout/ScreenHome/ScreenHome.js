import React, { useEffect } from "react";
import "./reset.css";
import "./home.css";
import bigDonut from "../../assets/img/homeImg/Bigdonut.png";
import donut1 from "../../assets/img/homeImg/donut1.png";
import donut2 from "../../assets/img/homeImg/donut2.png";
import donut3 from "../../assets/img/homeImg/5.png";



export default function ScreenHome() {
    useEffect(() => {
        const srceenShow = document.querySelector(".screenShow");
        const nextPage = srceenShow.querySelector(".nextPage");
        const allow = document.querySelector(".allow");
        const allowBtn = document.querySelector(".allow .btnAllow");
        // const nextslideSound = new Audio("./assets/sound/nextslide2.mp3");
        // const introSound = new Audio("./assets/sound/voiceEng.mp3");

        allowBtn.addEventListener("click", () => {
            // introSound.play();
            allow.style.display = "none";
        });

        nextPage.addEventListener("click", () => {
            srceenShow.classList.add("active");
            // nextslideSound.play();
        });
    }, []);

    return (
        <>
            <main>
                <div className="warpScreen">
                    <div className="screenShow">
                        <div className="pinkBg">
                            <div className="white1"></div>
                            <div className="white2"></div>
                            <div className="white3"></div>
                            <div className="pink1"></div>
                            <div className="pink2"></div>
                            <div className="name">
                                D0 <br />
                                NUT <br />
                                GIVE <br />
                                UP
                            </div>
                        </div>
                        <div className="donutBox">
                            <img
                                src={bigDonut}
                                alt=""
                                className="bigDonut"
                            />
                            <div className="boxSubDonut">
                                <img
                                    src={donut1}
                                    alt=""
                                    className="donut"
                                    style={{
                                        "--width": "385px",
                                        "--width2": "350px",
                                        "--width2-5": "290px",
                                        "--width3": "250px",
                                        "--width4": "210px",
                                        "--deg": "270deg",
                                        "--deg2": "630deg",
                                    }}
                                />
                            </div>
                            <div className="boxSubDonut">
                                <img
                                    src={donut2}
                                    alt=""
                                    className="donut"
                                    style={{
                                        "--width": "385px",
                                        "--width2": "350px",
                                        "--width2-5": "290px",
                                        "--width3": "250px",
                                        "--width4": "210px",
                                        "--deg": "0deg",
                                        "--deg2": "360deg",
                                    }}
                                />
                            </div>
                            <div className="boxSubDonut">
                                <img
                                    src={donut3}
                                    alt=""
                                    className="donut"
                                    style={{
                                        "--width": "385px",
                                        "--width2": "350px",
                                        "--width2-5": "290px",
                                        "--width3": "250px",
                                        "--width4": "210px",
                                        "--deg": "130deg",
                                        "--deg2": "490deg",
                                    }}
                                />
                            </div>
                            <div className="boxSubDonut">
                                <img
                                    src="./assets/img/homeImg/6.png"
                                    alt=""
                                    className="donut"
                                    style={{
                                        "--width": "480px",
                                        "--width2": "430px",
                                        "--width2-5": "360px",
                                        "--width3": "300px",
                                        "--width4": "260px",
                                        "--deg": "150deg",
                                        "--deg2": "750deg",
                                    }}
                                />
                            </div>
                            <div className="boxSubDonut">
                                <img
                                    src="./assets/img/homeImg/7.png"
                                    alt=""
                                    className="donut"
                                    style={{
                                        "--width": "480px",
                                        "--width2": "430px",
                                        "--width2-5": "360px",
                                        "--width3": "300px",
                                        "--width4": "260px",
                                        "--deg": "200deg",
                                        "--deg2": "800deg",
                                    }}
                                />
                            </div>
                            <div className="boxSubDonut">
                                <img
                                    src="./assets/img/homeImg/8.png"
                                    alt=""
                                    className="donut"
                                    style={{
                                        "--width": "480px",
                                        "--width2": "430px",
                                        "--width2-5": "360px",
                                        "--width3": "300px",
                                        "--width4": "260px",
                                        "--deg": "20deg",
                                        "--deg2": "620deg",
                                    }}
                                />
                            </div>
                            <div className="boxSubDonut">
                                <img
                                    src="./assets/img/homeImg/9.png"
                                    alt=""
                                    className="donut"
                                    style={{
                                        "--width": "480px",
                                        "--width2": "430px",
                                        "--width2-5": "360px",
                                        "--width3": "300px",
                                        "--width4": "260px",
                                        "--deg": "270deg",
                                        "--deg2": "870deg",
                                    }}
                                />
                            </div>
                            <div className="boxSubDonut">
                                <img
                                    src="./assets/img/homeImg/10.png"
                                    alt=""
                                    className="donut"
                                    style={{
                                        "--width": "480px",
                                        "--width2": "430px",
                                        "--width2-5": "360px",
                                        "--width3": "300px",
                                        "--width4": "260px",
                                        "--deg": "80deg",
                                        "--deg2": "680deg",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="nextPage">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 448 512"
                            >
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </div>
                        <div className="boxChooseMode">
                            <div className="mode easy">
                                <img
                                    src="./assets/img/homeImg/easy.png"
                                    alt=""
                                    className="donutTitle"
                                />
                                <div className="title">30% Sugar</div>
                                <div className="desc">
                                    You can learn quickly in just a few minutes,
                                    let's studying!
                                </div>
                                <div className="quality">
                                    <div className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="1em"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                        </svg>
                                    </div>
                                    <p className="label">
                                        Learn <strong>5</strong> words
                                    </p>
                                </div>
                                <div className="quality">
                                    <div className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="1em"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                        </svg>
                                    </div>
                                    <p className="label">
                                        <strong>10</strong> useful questions
                                    </p>
                                </div>
                                <a
                                    href="./main.html?mode=5"
                                    className="btnLearn"
                                >
                                    Start learning
                                </a>
                            </div>
                            <div className="mode normal">
                                <img
                                    src="./assets/img/homeImg/hard.png"
                                    alt=""
                                    className="donutTitle"
                                />
                                <div className="title">70% Sugar</div>
                                <div className="desc">
                                    You are close to the destination, go
                                    forward!
                                </div>
                                <div className="quality">
                                    <div className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="1em"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                        </svg>
                                    </div>
                                    <p className="label">
                                        Learn <strong>10</strong> words
                                    </p>
                                </div>
                                <div className="quality">
                                    <div className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="1em"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                        </svg>
                                    </div>
                                    <p className="label">
                                        <strong>20</strong> useful questions
                                    </p>
                                </div>
                                <a
                                    href="./main.html?mode=10"
                                    className="btnLearn"
                                >
                                    Start learning
                                </a>
                            </div>
                            <div className="mode hard">
                                <img
                                    src="./assets/img/homeImg/nor.png"
                                    alt=""
                                    className="donutTitle"
                                />
                                <div className="title">100% Sugar</div>
                                <div className="desc">
                                    HI think you remember that is wonderful,
                                    more progress!
                                </div>
                                <div className="quality">
                                    <div className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="1em"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                        </svg>
                                    </div>
                                    <p className="label">
                                        Learn <strong>20</strong> words
                                    </p>
                                </div>
                                <div className="quality">
                                    <div className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="1em"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                        </svg>
                                    </div>
                                    <p className="label">
                                        <strong>40</strong> useful questions
                                    </p>
                                </div>
                                <a
                                    href="./main.html?mode=20"
                                    className="btnLearn"
                                >
                                    Start learning
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="notSpAre">
                <div className="desc">New version will be updated soon</div>
                <img src="./assets/img/notsupport.png" alt="" className="img" />
                <div className="desc">Sorry, we do not support this device</div>
            </div>
            <div className="allow">
                <div className="btnAllow">Allow</div>
            </div>
        </>
    );
}
