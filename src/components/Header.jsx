import styles from '@/styles/Header.module.css'

const Header = () => {
    const headerStyle = {
        padding: '20px 0',
        lineHeight: '1.5em',
        color: '#fa0404',
        textAlign: 'center',


    }
    return (
        <header style={headerStyle}
            className={styles.header}>
            <h1>todos</h1>
            <p style={{ fontWeight: '700' }}>Items will persist in the browser local storage</p>
        </header>
    );
}

export default Header;