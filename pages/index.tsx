import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import styles from "./Main.module.scss";
import { useRouter } from "next/router";

const Main = () => {
    const router = useRouter();
    const [canGoBack, setCanGoBack] = useState(false);

    useEffect(() => {
        // Проверяем наличие предыдущей истории навигации
        if (typeof window !== "undefined" && window.history.length > 1) {
            setCanGoBack(true);
        }
    }, []);

    const handleGoBack = () => {
        if (canGoBack) {
            router.back(); // Возвращаемся на предыдущую страницу
        } else {
            router.push('/some-default-page'); // Перенаправляем на другую страницу
        }
    };

    return (
        <div className={styles.wrapper}>
            <Provider store={store}>
                <div className={styles.centerContent}>
                    <h1 className={styles.errorTitle}>Страница не существует</h1>
                    <button
                        className={styles.homeLink}
                        onClick={handleGoBack}
                    >
                        {canGoBack ? "Вернуться назад" : "Перейти на каталог"}
                    </button>
                    <div className={styles.errorImageWrapper}>
                        <img src="/assets/images/404.png" alt="404" className={styles.errorImage} />
                    </div>
                </div>
            </Provider>
        </div>
    );
};

export default Main;
