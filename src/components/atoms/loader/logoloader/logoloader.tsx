import React from 'react';
import styles from './logoloader.module.scss';

const LogoLoader = () => {

    return (
        <div className={styles.Background}>
            <svg
                className={styles.Logo}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 248 241"
                fill="none"
            >
                <path
                    d="M4 22H201C214.6 22 225.625 33.025 225.625 46.625C225.625 60.225 214.6 71.25 201 71.25H47.0938C33.4937 71.25 22.4688 82.275 22.4688 95.875C22.4688 109.475 33.4937 120.5 47.0938 120.5H201C214.6 120.5 225.625 131.525 225.625 145.125C225.625 158.725 214.6 169.75 201 169.75H47.0938C33.4937 169.75 22.4688 180.775 22.4688 194.375C22.4688 207.975 33.4937 219 47.0938 219H244.094"
                    stroke="#fafafa"
                    stroke-width="43.0937"
                />
            </svg>
        </div>
    )
}

export default LogoLoader;
