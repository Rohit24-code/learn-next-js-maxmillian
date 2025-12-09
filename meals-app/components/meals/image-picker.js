'use client'
import React, { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image';

const ImagePicker = ({ label, name }) => {
    const inputRef = useRef();
    const [image, setImage] = useState()
    function handleChooseImage() {
        inputRef.current.click()
    }
    function handleImageChange(event) {
        const file = event.target.files[0];
        if (!file) return;
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                {image && <div className={classes.preview}>
                    <Image fill src={image} alt="Preview" />
                </div>}
                <input required className={classes.input} ref={inputRef} type="file" accept="image/png , image/jpeg" name={name} id={name} onChange={handleImageChange} />
                <button className={classes.button} onClick={handleChooseImage} type='button'>Choose Image</button>
            </div>
        </div>
    )
}

export default ImagePicker