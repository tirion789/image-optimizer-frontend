import styles from './App.module.scss';
import { ImageUploadManager } from './components/index';

const App = () => {
  return (
    <div className="App">
      <main>
        <h1 className={styles.title}>Загрузити фото формата WEBP для оптимизации</h1>
        <ImageUploadManager />
      </main>
    </div>
  );
};

export default App;
