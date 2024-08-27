import Footer from "@/components/footer";
import Header from "@/components/header";
import { workData } from "@/components/types";
import { queryError } from "@sitecore-jss/sitecore-jss/types/i18n/graphql-dictionary-service";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Work = () => {
      // ヘッダーに適用するクラスを格納
  const [headerClass , setHeaderClass] = useState("flex");
    const [workData,setWorkData] = useState<workData>();
    const router = useRouter();
    useEffect(()=>{
        const data:workData =  {
            title : router.query.title as string,
            language : router.query.language as string,
            imgUrl : router.query.imgUrl as string,
            period : router.query.period as string,
            tool : router.query.tool as string,
            explanation : router.query.explanation as string
        }
       setWorkData(data);
        
},[router]);
    return (
        <div className="workDiv">
            <Header headerClass={headerClass} setHeaderClass={setHeaderClass}></Header>
            <div className="work_view">
                <h1>{workData?.title}</h1>
                <Image src={`/${workData?.imgUrl}`} alt="" width={1000} height={1000} className="img"/>
                <h2>作品紹介</h2>
                <p>{workData?.explanation}</p>
                <h2>作成時期</h2>
                <p>{workData?.period}</p>
                <h2>開発言語</h2>
                <p>{workData?.language}</p>
                <h2>開発ツール</h2>
                <p>{workData?.tool}</p>
            </div>
            <Footer />
        </div>
    );
}
 
export default Work;