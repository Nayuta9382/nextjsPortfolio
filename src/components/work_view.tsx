import Link from "next/link";
import { useEffect, useState } from "react";
import { workData } from "./types";
import Image from "next/image";
import { workerData } from "worker_threads";
import { log } from "console";

const WorkView = () => {
    const [workDatas,setWorkData] = useState<workData[]>([]);

useEffect(()=>{
  let data:workData[] = [{
    title : "家計簿アプリ",
    language : "java(Servlet)",
    imgUrl : "money.png",
    period : "2024年 2月",
    tool : "IntelliJ IDEA",
    explanation : "家計簿アプリはjavaServletで開発されたWebアプリケーションである。"},
  {
    title : "新規登録サイト",
    language : "PHP",
    imgUrl : "php.png",
    period : "2024年 7月",
    tool : "Visual Studio Code",
    explanation : "新規登録サイトはphpを使用して架空の登録サイトを沿うてして開発されたwebページである"},
];
setWorkData(data);
},[]);

    return (
        <div className="work" id="work">
            <h2>Work</h2>
            <div className="flex">
                {workDatas.length > 0 && (
            <>
            <Link  href={{ pathname: `/work/1`, query: workDatas[0]}} >
                {workDatas[0] && workDatas[0].title ? <h3>{workDatas[0].title}</h3> : ""}
                <Image src={`/${workDatas[0].imgUrl}`} alt="" width={500} height={500} quality={100}/>
            </Link>
            <Link  href={{ pathname: `/work/2`, query: workDatas[1]}} >
                {workDatas[1] && workDatas[1].title ? <h3>{workDatas[1].title}</h3> : ""}
                <Image src={`/${workDatas[1] && workDatas[1].imgUrl ? workDatas[1].imgUrl : ""}`} alt="" width={500} height={500} />
            </Link>
        </>

                )}

            </div>
        </div>
    );
}
 
export default WorkView;