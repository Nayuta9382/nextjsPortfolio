import Link from "next/link";
type Props = {
  navClass: string;
  setNavClass: React.Dispatch<React.SetStateAction<string>>;
}

const TopView: React.FC<Props> = ({navClass,setNavClass}) => {
    return ( 
        <div className="index_main">
          <div className="title">
            <h2>Kumagai Nayuta</h2>
            <h2>Portfolio</h2>
          </div>
          <div className="nav_link">
            <div></div>
            <nav className={navClass}>
                <ul>
                    <li><Link href="#">Top</Link></li>
                    <li><Link href="#profile">Profile</Link></li>
                    <li><Link href="#work">Work</Link></li>
                </ul>
            </nav>
          </div>
      </div>
     );
}
 
export default TopView;