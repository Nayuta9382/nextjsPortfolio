import Image from "next/image";

const Profile = () => {
    return (
        <div className="profile" id="profile">
            <h2>profile</h2>
            <div className="flex">
                <div className="left_img">
                    <Image src="/profile_img.png" alt="" width={500} height={500}></Image>
                </div>
                <div className="introduction">
                    <dl>
                        <dt>氏名</dt>
                        <dd>熊谷 奈友多</dd>
                        <dt>スキル</dt>
                        <dd>java</dd>
                        <dd>PHP</dd>
                        <dd>HTML/CSS</dd>
                        <dd>JavaScript</dd>
                        <dt>経歴</dt>
                        <dd>岩手県立盛岡商業高等学校卒業</dd>
                        <dd>盛岡情報ビジネス＆デザイン専門学校入学</dd>
                        <dt>資格</dt>
                        <dd>基本情報技術者試験</dd>
                        <dd>日商簿記2級</dd>
                    </dl>
                </div>
            </div>
            
        </div>
    );
}
 
export default Profile;
