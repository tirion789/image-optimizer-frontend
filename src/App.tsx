import styles from './App.module.scss';
import { ImageUploadManager } from './components/index';

const App = () => {
  return (
    <div className="App">
      <main>
        <h1 className={styles.title}>
          Загрузити фото любого формата для оптимизации и конвертации
        </h1>
        <ImageUploadManager />
      </main>
    </div>
  );
};

export default App;
