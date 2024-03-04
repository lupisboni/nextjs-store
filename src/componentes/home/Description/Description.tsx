import styles from './Description.module.sass'
import Image from 'next/image';

export const Description = () => {
    
    return(
        <section className={styles.Description}>
        <Image 
        src="/images/description.jpeg"
        alt="products marketplace"
        width={500}
        height={300}
        />
        <div className={styles.Description__text}> 
        <h2> Dios eliminame o iluminame</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quod officiis rerum id mollitia, veritatis consequuntur nihil sint doloremque soluta quam in incidunt blanditiis maxime rem dicta ea! Dignissimos, dolorum.</p>
            </div>
        </section>
    )
}