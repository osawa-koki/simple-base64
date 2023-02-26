import Layout from "../components/Layout";
import setting from "../setting";

export default function Home() {
  return (
    <Layout menu={false} footer={false}>
      <div id='Index'>
        <h1>simple-base64💓</h1>
        <img id='Logo' src={`${setting.basePath}/tako.png`} alt="Logo" />
        <p className="mt-5">BASE64エンコード・デコードするサイトです。</p>
        <div id="IndexLink">
        </div>
      </div>
    </Layout>
  );
};
