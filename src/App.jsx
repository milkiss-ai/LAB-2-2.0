import Layout from "./components/Layout.jsx";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const siteTitle = "Мой React-сайт";
  const userName = "Студент";

  return (
    <Layout siteTitle={siteTitle}>
      <Header title={siteTitle} userName={userName} />

      <Sidebar
        items={[
          "Главная",
          "О нас",
          "Услуги",
          "Контакты",
        ]}
      />

      <MainContent>
        <h1>Моя учебная страница</h1>

        <p>
          Это страница, созданная с помощью
          React и CSS Grid.
        </p>

        <h2>Что я изучила:</h2>

        <ul>
          <li>CSS Grid</li>
          <li>Grid-области</li>
          <li>React-компоненты</li>
          <li>Props и children</li>
          <li>Адаптивную вёрстку</li>
        </ul>

      </MainContent>

      <Footer year={new Date().getFullYear()} />
    </Layout>
  );
}

export default App;