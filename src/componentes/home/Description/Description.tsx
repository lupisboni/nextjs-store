"use client"
import Image from 'next/image';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Description.module.sass'

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,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'

export const Description = () => {
    
    const [hasBorder, setBorder] = useState(false);

    const handleClick = () => setBorder(!hasBorder);

    const cx = classNames.bind(styles)

    const buttonStyles = cx('Description__button', {
        'Description__button--border': hasBorder,
    })

    return(
        <section className={styles.Description}>
             <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description_imageContainer}>
        <Image 
        src="/images/description.jpeg"
        alt="products marketplace"
        // fill
        width={300}
        height={300}
        placeholder='blur'
        blurDataURL={PLACEHOLDER_IMAGE}
        />
        
        </div>  
        <div className={styles.Description__text}> 
        <h2> Dios eliminame o iluminame</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quod officiis rerum id mollitia, veritatis consequuntur nihil sint doloremque soluta quam in incidunt blanditiis maxime rem dicta ea! Dignissimos, dolorum.</p>
            </div>
            </button> 
        </section>
    )
}
// creacion de shopify 