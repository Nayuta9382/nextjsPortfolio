import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
    headerClass: string;
    setHeaderClass: React.Dispatch<React.SetStateAction<string>>;
  }

const Header: React.FC<Props> = ({headerClass,setHeaderClass}) => {
    const [bacWhite, setBacWhite] = useState("");
    // scrollイベント
    useEffect(() => {
        
        const scrollTop = (): number => {
        return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
        };
            const handleScroll = () => {
                // scroll位置を取得
                const height = scrollTop();
                if(height > 550){
                    setBacWhite("bacWhite");
                }else{
                    setBacWhite("");
                }
            };
        
            window.addEventListener('scroll', handleScroll);
        
            return () => {
            window.removeEventListener('scroll', handleScroll);
            };
        }, []);


    return (
        <header className={headerClass + " " + bacWhite}>
            <h1>MyPortfolio</h1>
            <nav><ul>
                    <li><Link href="/">Top</Link></li>
                    <li><Link href="/#profile">Profile</Link></li>
                    <li><Link href="/#work">Work</Link></li>
                </ul>
            </nav>
        </header>
    );

    
}
 
export default Header;