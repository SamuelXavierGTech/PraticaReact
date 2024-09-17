import styles from "./Item.module.css"
 
export default function Item({imagem, nome, preco, cor, imagemIcone}) {
    return (
        <div className={styles.item}>

            <img className={styles.imagem} src={imagem} alt="" />

            <div className={styles.detalhes}>
                <h3 className={styles.nome}>{nome}</h3>
                <p className={styles.info}>1Kg/Preço</p>
                <h3 className={styles.preco} style={{color: cor}}>R$ {preco}</h3>
            </div>

            <div className={styles.divIcone}>
                <img className={styles.imagemIcone} src={imagemIcone} alt="loja" />
            </div>

        </div>
    )
}