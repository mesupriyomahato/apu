"use client"
import React, { useState } from 'react';
import styles from './input.module.scss';

type InputType = 'text' | 'password' | 'secondary';


type InputBarProps = {
    defaultValue?: string;
    placeholder?: string;
    label?: string;
    inputlabel?: string;
    maxlength?: number;
    type?: InputType;
    name: string;
    onCaptionChange?: (newCaption: string) => void;
};

const InputBar: React.FC<InputBarProps> = ({ defaultValue, onCaptionChange, placeholder, name, label, maxlength = 40, inputlabel, type = 'text' }) => {

    // Toggle Show Password Starts Here
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const showPasswordIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 100 100" fill="none">
            <path d="M78.83 46.8923C74.89 40.1623 65.91 28.8823 49.99 28.8823C44.5 28.8823 39.37 30.2323 34.74 32.9023L34.05 33.3023L29.11 27.9323C28.59 27.3723 27.88 27.0423 27.12 27.0023C26.35 26.9723 25.62 27.2423 25.06 27.7623C24.5 28.2823 24.17 28.9923 24.13 29.7523C24.1 30.5223 24.37 31.2523 24.89 31.8123L29.41 36.7223L28.68 37.4023C25.11 40.7223 22.62 44.3923 21.16 46.8823C19.75 49.2923 19 52.0523 19 54.8723C19 57.6923 19.75 60.4523 21.16 62.8623C25.1 69.5923 34.08 80.8723 50 80.8723C55.49 80.8723 60.62 79.5223 65.25 76.8523L65.94 76.4523L70.88 81.8223C71.92 82.9523 73.81 83.0323 74.94 81.9923C75.5 81.4723 75.83 80.7623 75.87 80.0023C75.9 79.2323 75.63 78.5023 75.11 77.9423L70.59 73.0323L71.32 72.3523C74.89 69.0323 77.38 65.3623 78.84 62.8723C80.25 60.4623 81 57.6923 81 54.8823C81 52.0723 80.25 49.3023 78.84 46.8923H78.83ZM60.55 72.5123C57.26 74.0823 53.71 74.8823 49.99 74.8823C37.06 74.8823 29.62 65.4523 26.33 59.8423C25.46 58.3523 24.99 56.6323 24.99 54.8823C24.99 53.1323 25.45 51.4223 26.33 49.9223C27.57 47.8023 29.69 44.6823 32.74 41.8523L33.48 41.1723L61.78 71.9323L60.56 72.5123H60.55ZM73.65 59.8323C72.41 61.9523 70.29 65.0723 67.24 67.9023L66.5 68.5823L38.2 37.8223L39.42 37.2423C42.71 35.6723 46.26 34.8723 49.98 34.8723C62.91 34.8723 70.35 44.3023 73.64 49.9123C74.51 51.4023 74.98 53.1223 74.98 54.8723C74.98 56.6223 74.52 58.3323 73.64 59.8323H73.65Z" fill="#fafafa" />
        </svg>
    );

    const hidePasswordIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 100 100" fill="none">
            <path d="M50 43.0195C43.38 43.0195 38 48.3995 38 55.0195C38 61.6395 43.38 67.0195 50 67.0195C56.62 67.0195 62 61.6395 62 55.0195C62 48.3995 56.62 43.0195 50 43.0195ZM50 61.0195C46.69 61.0195 44 58.3295 44 55.0195C44 51.7095 46.69 49.0195 50 49.0195C53.31 49.0195 56 51.7095 56 55.0195C56 58.3295 53.31 61.0195 50 61.0195Z" fill="#fafafa" />
            <path d="M81 55.02C81 52.21 80.25 49.44 78.84 47.03C77.32 44.43 74.71 40.6 70.93 37.19L70.27 36.59L74.44 30.75C74.91 30.1 75.09 29.3 74.96 28.51C74.83 27.72 74.4 27.03 73.75 26.56C72.4 25.6 70.53 25.91 69.56 27.26L65.39 33.09L64.61 32.67C61.28 30.85 57.67 29.7 53.88 29.24L53 29.13V22C53 20.35 51.65 19 50 19C48.35 19 47 20.35 47 22V29.13L46.12 29.24C42.33 29.7 38.72 30.85 35.39 32.67L34.61 33.09L30.44 27.26C29.86 26.44 28.93 26.01 27.99 26.01C27.39 26.01 26.78 26.19 26.25 26.57C25.6 27.04 25.17 27.73 25.04 28.52C24.91 29.31 25.09 30.1 25.56 30.76L29.73 36.6L29.07 37.2C25.3 40.61 22.69 44.43 21.16 47.03C19.75 49.44 19 52.2 19 55.02C19 57.84 19.75 60.6 21.16 63.01C25.1 69.74 34.08 81.02 50 81.02C65.92 81.02 74.9 69.74 78.84 63.01C80.25 60.6 81 57.84 81 55.02ZM73.66 59.98C70.37 65.6 62.93 75.02 50 75.02C37.07 75.02 29.63 65.59 26.34 59.98C25.47 58.49 25 56.77 25 55.02C25 53.27 25.46 51.56 26.34 50.06C29.63 44.44 37.07 35.02 50 35.02C62.93 35.02 70.37 44.45 73.66 50.06C74.53 51.55 75 53.27 75 55.02C75 56.77 74.54 58.48 73.66 59.98Z" fill="#fafafa" />
        </svg>
    );
    // Toggle Show Password Ends Here


    const handleCaptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCaption = event.target.value;
        if (onCaptionChange) {
            onCaptionChange(newCaption);
        }
    };

    return (
        <div className={styles.InputBar}>
            {label && <label className={styles.Label}>{label}</label>}
            {type === 'password' ? (
                <div className={styles.PasswordInput}>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        defaultValue={defaultValue}
                        placeholder={placeholder}
                        className={`${styles.Input} ${showPassword ? styles.Input : styles.PasswordInputField}`}
                        spellCheck="false"
                        autoComplete="false"
                        name={name}
                        required
                    />
                    <button className={styles.TogglePasswordButton} onClick={togglePasswordVisibility}>
                        {showPassword ? hidePasswordIcon : showPasswordIcon}
                    </button>
                </div>
            ) : type === 'secondary' ? (
                <div className={styles.secondaryInput}>
                    <p className={styles.InputLabel}>{inputlabel}</p>
                    <input
                        type="text"
                        defaultValue={defaultValue}
                        placeholder={placeholder}
                        className={styles.SecondaryInputBox}
                        spellCheck="false"
                        autoComplete="false"
                        name={name}
                        required
                    />
                </div>
            ) : (
                <input
                    type="text"
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    className={styles.Input}
                    spellCheck="false"
                    autoComplete="false"
                    name={name}
                    required
                    onChange={type === 'text' && name === 'caption' ? handleCaptionChange : undefined}
                />
            )}
        </div>
    );
};

export default InputBar;
