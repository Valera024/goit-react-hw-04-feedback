import styles from "./section.module.css"

const Section = ({title, children}) => (
            <section className={styles.section}>
                <h1>{title}</h1>
                {children}
            </section>   
)

export default Section