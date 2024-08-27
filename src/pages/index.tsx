import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import TopView from "@/components/top_view";
import Profile from "@/components/profile";
import WorkView from "@/components/work_view";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "@/components/footer";






export default function Home() {
  // ヘッダーに適用するクラスを格納
  const [headerClass , setHeaderClass] = useState("");
  const [navClass , setNavClass] = useState("");
  // scrollイベント
  useEffect(() => {
    
const scrollTop = (): number => {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
};
    const handleScroll = () => {
        // scroll位置を取得
        const height = scrollTop();
        if(height > 140){
          setHeaderClass("headerOpen");
          setNavClass("navUp");
        }else{
          setHeaderClass("");
          setNavClass("");
        }
        console.log(height);
        
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Header headerClass={headerClass} setHeaderClass={setHeaderClass} />
      <TopView navClass={navClass} setNavClass={setNavClass}/>
      <Profile/>
      <WorkView/>
      <Footer />
    </>
  );
}
