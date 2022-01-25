import headerStyles from '../styles/Header.module.css';

function Header() {
    const x = 2

    return (
    <div>
        <h1 className={headerStyles.title}>
            <span>Next.js</span> News
        </h1>
        <p className={headerStyles.description}>
            Keep up to date with the latest Next.js news
        </p>
        <style jsx>
            {`
                .title {
                    color: ${x > 3 ? 'red' : 'blue'};
                }
            `}
        </style>
    </div>
    );
}

export default Header;
       

